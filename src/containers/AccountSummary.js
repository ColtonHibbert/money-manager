import React from "react";
import { connect } from "react-redux";
import { setAccountSummaryEntries } from "../services/actions.js";

const mapStateToProps = (state) => {
    return {
        accountSummary: state.accountSummary
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setAccountSummaryEntries: (value) => dispatch(setAccountSummaryEntries(value))
    }
}

function AccountSummary(props) {
    const { user, accounts, setAccounts, accountSummary, setAccountSummaryEntries} = props;

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

    const makePages = () => {

        const numberOfPages = (Math.ceil(accounts.length / accountSummary.entries));
        console.log("accounts.length: ", accounts.length);
        console.log("accountSummary.entries: ", accountSummary.entries);
        console.log("Math.ceil(accounts.length/accountSummary.entries): ", Math.ceil(accounts.length / accountSummary.entries));

        console.log("accountSummary, numberOfPages: ",numberOfPages);
        let pageArray = [];
        let startSlice = 0;
        let endSlice = accountSummary.entries;

        for(let i = 0; i < numberOfPages; i++) {
           let entriesArray = accounts.slice(startSlice, endSlice);
           pageArray.push(entriesArray);
           console.log("pageArray in loop: ", pageArray);
           console.log("startSlice, endSlice", startSlice, endSlice)
           startSlice += accountSummary.entries;
           endSlice += accountSummary.entries;
        }

        console.log("pageArray after loop:", pageArray)

        return pageArray;

    }

    const pages = makePages();
    

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
                    onChange={(event) => setAccountSummaryEntries(event.target.value)}
                    
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
                    (accounts !== null ) ? pages[accountSummary.page].map(account => {
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
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountSummary);

