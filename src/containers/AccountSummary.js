import React, { useEffect } from "react";
import { connect } from "react-redux";
import PaginationBar from "../components/PaginationBar.js";
import Sort from "../components/Sort.js";
import { 
    setAccountSummaryEntries,
    setAccountSummaryTotalPages,
    setAccountSummaryPages,
    setAccountSummaryCurrentPage,
    setAccountSummaryFilter,
    setAccountSummaryFilteredAccounts,
    setAccountSummaryFilterTotalPages,
    setAccountSummaryFilterCurrentPage,
    setAccountSummaryFilterPages,
    setAccountSummaryAccounts,
    setAccountSummarySearch
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
        setAccountSummaryCurrentPage: (value) => dispatch(setAccountSummaryCurrentPage(value)),
        setAccountSummaryFilter: (value) => dispatch(setAccountSummaryFilter(value)),
        setAccountSummaryFilteredAccounts: (value) => dispatch(setAccountSummaryFilteredAccounts(value)),
        setAccountSummaryFilterTotalPages: (value) => dispatch(setAccountSummaryFilterTotalPages(value)),
        setAccountSummaryFilterCurrentPage: (value) => dispatch(setAccountSummaryFilterCurrentPage(value)),
        setAccountSummaryFilterPages: (value) => dispatch(setAccountSummaryFilterPages(value)),
        setAccountSummaryAccounts: (value) => dispatch(setAccountSummaryAccounts(value)),
        setAccountSummarySearch: (value) => dispatch(setAccountSummarySearch(value))
    }
}



function AccountSummary(props) {
    const { 
        user,   
        accounts,
        accountSummary, 
        setAccountSummaryEntries, 
        setAccountSummaryTotalPages,
        setAccountSummaryPages,
        setAccountSummaryCurrentPage,
        setAccountSummaryFilter,
        setAccountSummaryFilteredAccounts,
        setAccountSummaryFilterTotalPages,
        setAccountSummaryFilterCurrentPage,
        setAccountSummaryFilterPages,
        setAccountSummaryAccounts,
        setAccountSummarySearch
    } = props;

    /*
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
    */

    
    function configurePages(value, setEntries, setTotalPages, setCurrentPage, setPages, passedAccounts) {
        console.log("setPages:", setPages);
        value = parseFloat(value);
        const numberOfPages = (Math.ceil(passedAccounts.length / value));
        setEntries(value);
        setTotalPages(numberOfPages);
        setCurrentPage(0);
        const modifiedPages = pagesArray(value, passedAccounts, numberOfPages);
        setPages(modifiedPages);
    }

    const pagesArray = (value, passedAccounts, numberOfPages) => {
        let baseArray = [];
        let start = 0;
        let end = value;

        for(let i = 0; i < numberOfPages; i++) {
            let page = {
                        pageNumber: i,
                        startEntry: start,
                        finishEntry: end
                };
            baseArray.push(page);
            
            if(baseArray[baseArray.length -1 ].finishEntry >= passedAccounts.length) {
                baseArray[baseArray.length - 1].finishEntry = passedAccounts.length;
                continue
            } 
            start += value;
            end += value;
        }
        return baseArray;
    }

    const handleFilter = (value) => {
        const search= value.trim();
        if(search !== "") {
            const searchRegex = new RegExp(search, "i");
            const filteredAccounts = accountSummary.accounts.filter(account => {
                return (searchRegex.test(account.accountName) || searchRegex.test(account.currentBalance) || searchRegex.test(account.lowAlertBalance) || searchRegex.test(user.firstName));
            })
            const numberOfPages = (Math.ceil(filteredAccounts.length / accountSummary.entries));
            const modifiedPages = pagesArray(accountSummary.entries ,filteredAccounts, numberOfPages);

            setAccountSummarySearch(value);
            setAccountSummaryFilterTotalPages(numberOfPages);
            setAccountSummaryFilterCurrentPage(0);
            setAccountSummaryFilteredAccounts(filteredAccounts);
            console.log("modified pages", modifiedPages, numberOfPages)
            setAccountSummaryFilterPages(modifiedPages)
            setAccountSummaryFilter(true);
            console.log("filteredAccounts: ",filteredAccounts);
        }
        if(search === "") {
            const numberOfPages = (Math.ceil(accountSummary.accounts.length / accountSummary.entries));
            const modifiedPages = pagesArray(accountSummary.entries, accountSummary.accounts, numberOfPages);
            setAccountSummarySearch("");
            setAccountSummaryPages(modifiedPages);
            setAccountSummaryCurrentPage(0);
            setAccountSummaryTotalPages(numberOfPages);
            setAccountSummaryFilter(false);
            setAccountSummaryFilteredAccounts(accountSummary.accounts);
        }
    }
    
    console.log("AccountSummary current page", accountSummary.currentPage);
    console.log(accountSummary.accounts.length > 0)
   
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
                    onChange={(event) => (accountSummary.filter === false) ? configurePages(event.target.value, setAccountSummaryEntries, setAccountSummaryTotalPages, setAccountSummaryCurrentPage, setAccountSummaryPages, accountSummary.accounts ) : configurePages(event.target.value, setAccountSummaryEntries, setAccountSummaryFilterTotalPages, setAccountSummaryFilterCurrentPage, setAccountSummaryFilterPages, accountSummary.filteredAccounts)}
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
                    onInput={(event) => handleFilter(event.target.value)}
                    value={accountSummary.search}
                    ></input>
                </div>
            </div>
            <div className="w-100 flex flex-column pl2
            pl3-l
            ">
                {
                    (accountSummary.accounts[0] && accountSummary.filter === false) ?
                    <div className="w-100 flex flex-row mt3">
                        <div className="w-25 mt2 ph1 ph0-l custom-gray flex flex-row items-center br b--black bn-l">
                            <div className="mr1 mr2-l">Account</div>
                            <Sort setNewArray={setAccountSummaryAccounts} arrayToSort={accountSummary.accounts} propertyToCompare={"accountName"} typeToCompare={"str"} setCurrentPage={setAccountSummaryCurrentPage} />
                        </div>
                        <div className="w-25 mt2 ph1 ph0-l custom-gray flex flex-row items-center br b--black bn-l">
                            <div className="mr1 mr2-l">Current Balance</div>
                            <Sort setNewArray={setAccountSummaryAccounts} arrayToSort={accountSummary.accounts} propertyToCompare={"currentBalance"} typeToCompare={"num"} setCurrentPage={setAccountSummaryCurrentPage} />
                        </div>
                        <div className="w-25 mt2 ph1 ph0-l custom-gray flex flex-row items-center br b--black bn-l">
                            <div className="mr1 mr2-l">Low Balance Alert</div>
                            <Sort setNewArray={setAccountSummaryAccounts} arrayToSort={accountSummary.accounts} propertyToCompare={"lowAlertBalance"} typeToCompare={"num"} setCurrentPage={setAccountSummaryCurrentPage} />
                        </div>
                        <div className="w-25 mt2 ph1 ph0-l custom-gray flex flex-row items-center br b--black bn-l">
                            <div className="mr1 mr2-l">Owner</div>
                        </div>
                    </div>
                    : ""
                }
                {
                    (accountSummary.filteredAccounts[0] && accountSummary.filter === true) ?
                    <div className="w-100 flex flex-row mt3">
                        <div className="w-25 mt2 ph1 ph0-l custom-gray flex flex-row items-center br b--black bn-l">
                            <div className="mr1 mr2-l">Account</div>
                            <Sort setNewArray={setAccountSummaryFilteredAccounts} arrayToSort={accountSummary.filteredAccounts} propertyToCompare={"accountName"} typeToCompare={"str"} setCurrentPage={setAccountSummaryFilterCurrentPage} />
                        </div>
                        <div className="w-25 mt2 ph1 ph0-l custom-gray flex flex-row items-center br b--black bn-l">
                            <div className="mr1 mr2-l">Current Balance</div>
                            <Sort setNewArray={setAccountSummaryFilteredAccounts} arrayToSort={accountSummary.filteredAccounts} propertyToCompare={"currentBalance"} typeToCompare={"num"} setCurrentPage={setAccountSummaryFilterCurrentPage} />
                        </div>
                        <div className="w-25 mt2 ph1 ph0-l custom-gray flex flex-row items-center br b--black bn-l">
                            <div className="mr1 mr2-l">Low Balance Alert</div>
                            <Sort setNewArray={setAccountSummaryFilteredAccounts} arrayToSort={accountSummary.filteredAccounts} propertyToCompare={"lowAlertBalance"} typeToCompare={"num"} setCurrentPage={setAccountSummaryFilterCurrentPage} />
                        </div>
                        <div className="w-25 mt2 ph1 ph0-l custom-gray flex flex-row items-center br b--black bn-l">
                            <div className="mr1 mr2-l">Owner</div>
                        </div>
                    </div>
                    : ""
                }
                {
                    (accountSummary.accounts[0] && accountSummary.filter === false) ? accountSummary.accounts.slice(accountSummary.pages[accountSummary.currentPage].startEntry, accountSummary.pages[accountSummary.currentPage].finishEntry).map(account => {
                        return( 
                            <div className="w-100 flex flex-row mt2 mb2 pv1 items-center bb b--black" key={account.accountId}>
                                <div className="w-25 custom gray">{account.accountName}</div>
                                <div className="w-25 custom gray">{account.currentBalance.toFixed(2)}</div>
                                <div className="w-25 custom gray">{account.lowAlertBalance.toFixed(2)}</div>
                                <div className="w-25 custom gray">{user.firstName}</div>
                            </div>
                        )
                    }) 
                    : ""
                }
                {
                    (accountSummary.filteredAccounts[0] && accountSummary.filter) ? accountSummary.filteredAccounts.slice(accountSummary.filterPages[accountSummary.filterCurrentPage].startEntry, accountSummary.filterPages[accountSummary.filterCurrentPage].finishEntry).map(account => {
                        return( 
                            <div className="w-100 flex flex-row mt2 mb2 pv1 items-center bb b--black" key={account.accountId}>
                                <div className="w-25 custom gray">{account.accountName}</div>
                                <div className="w-25 custom gray">{account.currentBalance.toFixed(2)}</div>
                                <div className="w-25 custom gray">{account.lowAlertBalance.toFixed(2)}</div>
                                <div className="w-25 custom gray">{user.firstName}</div>
                            </div>
                        )
                    }) 
                    : ""
                }
            </div>
            {
                (accountSummary.accounts[0] && accountSummary.filter === false) ?
                <PaginationBar 
                    startEntry={accountSummary.pages[accountSummary.currentPage].startEntry} 
                    finishEntry={accountSummary.pages[accountSummary.currentPage].finishEntry} 
                    totalEntries={accountSummary.accounts.length}
                    totalPages={accountSummary.totalPages}
                    currentPage={accountSummary.currentPage}
                    setCurrentPage={setAccountSummaryCurrentPage}
                />
                : ""
            }
            {
                (accountSummary.filteredAccounts[0] && accountSummary.filter === true) ?
                <PaginationBar 
                    startEntry={accountSummary.filterPages[accountSummary.filterCurrentPage].startEntry} 
                    finishEntry={accountSummary.filterPages[accountSummary.filterCurrentPage].finishEntry} 
                    totalEntries={accountSummary.filteredAccounts.length}
                    totalPages={accountSummary.filterTotalPages}
                    currentPage={accountSummary.filterCurrentPage}
                    setCurrentPage={setAccountSummaryFilterCurrentPage}
                />
                : ""
            }

            
            
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountSummary);


