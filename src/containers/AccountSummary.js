import React, { useEffect } from "react";
import { connect } from "react-redux";
import PaginationBar from "../components/PaginationBar.js";
import { 
    setAccountSummaryEntries,
    setAccountSummaryTotalPages,
    setAccountSummaryPages,
    setAccountSummaryCurrentPage
} from "../services/actions.js";

const mapStateToProps = (state) => {
    return {
        accountSummary: state.accountSummary
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setAccountSummaryEntries: (value) => dispatch(setAccountSummaryEntries(value)),
        setAccountSummaryTotalPages: (value) => dispatch(setAccountSummaryTotalPages(value)),
        setAccountSummaryPages: (value) => dispatch(setAccountSummaryPages(value)),
        setAccountSummaryCurrentPage: (value) => dispatch(setAccountSummaryCurrentPage(value))
    }
}



function AccountSummary(props) {
    const { 
        user, 
        accounts, 
        setAccounts, 
        accountSummary, 
        setAccountSummaryEntries, 
        setAccountSummaryTotalPages,
        setAccountSummaryPages,
        setAccountSummaryCurrentPage
    } = props;

    const getAccounts = () => fetch(
        "http://localhost:3001/accounts",
        {
            method: "GET",
            headers: {"Content-Type": "application/json"},
            credentials: "include"
        }
    )
    .then(res => res.json())
    .then(data => {
        setAccounts(data);
    })
    .catch(err => console.log(err))

    function configurePages(value) {
        value = parseFloat(value);
        const numberOfPages = (Math.ceil(accounts.length / value));
        setAccountSummaryEntries(value);
        setAccountSummaryTotalPages(numberOfPages);
        console.log("accountSummary: ", accountSummary)
        console.log("accounts.length: ", accounts.length);
        console.log("accountSummary.entries: ", props.accountSummary.entries);
        console.log("accountSummary, value: should not be stale", value);
        console.log("Math.ceil(accounts.length/accountSummary.entries): ", Math.ceil(accounts.length / accountSummary.entries));

        console.log("accountSummary, numberOfPages: ",numberOfPages);
        let pagesArray = [];
        let start = 0;
        let end = value;

        for(let i = 0; i < numberOfPages; i++) {
        let page = {
                    pageNumber: i,
                    startEntry: start,
                    finishEntry: end
            };
        
        pagesArray.push(page);
        console.log("pageArray in loop: ", pagesArray);
        console.log("start, end", start, end)
        start += value;
        end += value;
        }
        console.log("pageArray after loop:", pagesArray)

        setAccountSummaryPages(pagesArray);
    }

    

    console.log("current page", accountSummary.currentPage);
   
    return (
        <div>
            <div className="flex flex-column w-100 items-center">
                <div 
                className="
                    w-100 flex justify-center items-center bg-custom-lighter-gray money-color border-thin-gray 
                    h2 f4 pt1
                    h2-s f4-s
                    h2-ns f4-ns
                    h3-m f3-m
                    h3-l f3-l
                    "
                >Account Summary
                </div>
            </div>
            <div className="
                w-100 flex flex-row custom-gray justify-between mt3"
            >
                <div className="flex flex-row items-center ml3">
                    <div className="mr1">Entries</div>
                    <select id="account-entries" 
                    className="w3 bg-custom-lighter-gray border-custom-gray custom-gray form-line-active b"
                    onChange={(event) => configurePages(event.target.value)}
                    
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div className="flex flex-row items-center mr3">
                    <div className="mr1">Search</div>
                    <input 
                    className="w4 input-reset bg-custom-lighter-gray border-custom-gray custom-gray form-line-active b
                    w5-l
                    "
                    ></input>
                </div>
            </div>
            <div className="w-100 flex flex-column pl2
            pl3-l
            ">
                <div className="w-100 flex flex-row mt3">
                    <div className="w-25 mt2 custom-gray">Account</div>
                    <div className="w-25 mt2 custom-gray">Current Balance</div>
                    <div className="w-25 mt2 custom-gray">Low Balance Alert</div>
                    <div className="w-25 mt2 custom-gray">Owner</div>
                </div>
                {
                    (accounts !== null ) ? accounts.slice(accountSummary.pages[accountSummary.currentPage].startEntry, accountSummary.pages[accountSummary.currentPage].finishEntry).map(account => {
                        return(
                            <div className="w-100 flex flex-row mt2 mb2 pv1 items-center bb b--black" key={account.accountId}>
                                <div className="w-25 custom gray">{account.accountName}</div>
                                <div className="w-25 custom gray">{account.currentBalance}</div>
                                <div className="w-25 custom gray">{account.lowAlertBalance}</div>
                                <div className="w-25 custom gray">{user.firstName}</div>
                            </div>
                        )
                    }) 
                    : ""
                }
            </div>
            <PaginationBar 
                startEntry={accountSummary.pages[accountSummary.currentPage].startEntry} 
                finishEntry={accountSummary.pages[accountSummary.currentPage].finishEntry} 
                totalEntries={accounts.length}
                totalPages={accountSummary.totalPages}
                currentPage={accountSummary.currentPage}
                setAccountSummaryCurrentPage={setAccountSummaryCurrentPage}
            />
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountSummary);

//accountSummary.pages[accountSummary.currentPage].startEntry

