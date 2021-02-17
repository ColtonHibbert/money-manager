import React from "react";
import MoneyIcon from "../components/MoneyIcon.js";
import PriceTagIcon from "../components/PriceTagIcon.js";
import DepositIcon from "../components/DepositIcon.js";
import TransactionIcon from "../components/TransactionIcon.js";
import Sort from "../components/Sort.js";

function IndividualAccount(props) {
    const { 
        individualAccount,
        categoriesAndItems,
        setIndividualAccountFilterTransactionSelection
    } = props;

    const getAccountTypeName = () => {
        if(individualAccount.accountTypeId === 1) {
            return "Checking";
        }
        if(individualAccount.accountTypeId === 2) {
            return "Savings";
        }
        if(individualAccount.accountTypeId === 3) {
            return "Debt"
        }
    }

    const accountTypeName = getAccountTypeName();
    let transactionsArrayValid;
    let filteredTransactionsArrayValid;
    try {
        if(individualAccount.transactions.length) {
            transactionsArrayValid = true;
        }
    } catch(err) {
        transactionsArrayValid = false;
    }

    try {
        if(individualAccount.filteredTransactions.length) {
            filteredTransactionsArrayValid = true;
        }
    } catch(err) {
        filteredTransactionsArrayValid = false;
    }
    

    const classNoSelect = "h2 ph1 ph2-l flex justify-center items-center custom-gray br1 pointer bg-white-color-black";
    const classSelect = "h2 ph1 ph2-l flex justify-center items-center br1 pointer bg-white-color-black bg-white black";
    
   
    
    return(
        <div className="w-100">    
            <div className="flex flex-column w-100 items-center bg-custom-darker-gray">

                <div 
                    className="
                        w-100 flex justify-center items-center bg-custom-lighter-gray money-color border-thin-gray 
                        h2 f4 pt1
                        h2-s f4-s
                        h2-ns f4-ns
                        h3-m f3-m
                        h3-l f3-l
                        "
                    >{individualAccount.accountName} - {accountTypeName}
                </div>

                <div 
                className="w-100 flex flex-column items-center
                flex-s flex-column-s
                flex-m flex-column-m
                flex-l flex-row-l ph3-l 
                "
                >
                    <div className="
                    w-90 flex flex-column bg-custom-lighter-gray mt2
                    mr1-l
                    "
                    >
                        <div className="flex flex-row items-center mt1 mb1 pl3">
                            <div 
                            className="
                            w2 h2
                            ">
                                <MoneyIcon />
                            </div>
                            <div className="f4 custom-gray b">Current Balance</div>
                        </div>
                        <div className="
                        f3 money-color flex items-center mb1 pl3
                        ">   
                            ${individualAccount.currentBalance}
                        </div>
                    </div>
                    <div className="
                    w-90 flex flex-column bg-custom-lighter-gray mt2
                    mh1-l
                    "
                    >
                        <div className="flex flex-row items-center mt1 mb1 pl3">
                            <div 
                            className="
                            w2 h2
                            
                            ">
                                <PriceTagIcon />
                            </div>
                            <div className="f4 custom-gray b">Monthly Spending</div>
                        </div>
                        <div className="
                        f3 red flex items-center mb1 pl3
                        ">   
                            ${individualAccount.withdrawalsMonthlyAmount}
                        </div>
                    </div>
                    <div className="
                    w-90 flex flex-column bg-custom-lighter-gray mt2
                    mh1-l
                    "
                    >
                        <div className="flex flex-row items-center mt1 mb1 pl3">
                            <div 
                            className="
                            w2 h2
                            ">
                                <DepositIcon />
                            </div>
                            <div className="f4 custom-gray b">Monthly Deposits</div>
                        </div>
                        <div className="
                        f3 money-color flex items-center mb1 pl3
                        ">   
                            ${individualAccount.depositsMonthlyAmount}
                        </div>
                    </div>
                    <div className="
                    w-90 flex flex-column bg-custom-lighter-gray mt2
                    ml1-l
                    "
                    >
                        <div className="flex flex-row items-center mt1 mb1 pl3">
                            <div 
                            className="
                            w2 h2
                            ">
                                <TransactionIcon />
                            </div>
                            <div className="f4 custom-gray b">Monthly Transactions</div>
                        </div>
                        <div className="
                        f3 yellow flex items-center mb1 pl3
                        ">   
                            {individualAccount.transactionsMonthlyQuantity}
                        </div>
                    </div>  
                </div>
                
                <div className="w-90 flex flex-column mt3 bg-custom-darker-gray
                w-100-l ph3-l
                ">
                    <div className="bg-custom-lighter-gray">
                        <div className="pl3 f3 mt1 custom-gray b ">
                        Add Transaction
                        </div>
                        <div className="flex-l flex-row-l">
                            <div className="pl3 h2 flex flex-row items-center mt2
                            flex-column-l h4-l w-15-l
                            ">
                                <div className="h2 w4 w-100-l h-50-l flex items-center pr2 f4 custom-gray ">Amount</div>
                                <input className="h2 w4 w-100-l input-reset bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b bw1" type="number" placeholder="0.00"></input>
                            </div>
                            <div className="pl3 h3 flex flex-row items-center mt2
                            flex-column-l h4-l w-20-l
                            ">
                                <div className="h2 w4 w-100-l h-50-l flex items-center pr2 f4 custom-gray ">Transaction Type</div>
                                <select className="h2 w4 w-100-l flex pl1 input-reset bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b bw1">
                                    <option value="">--</option>
                                    <option value="1">Withdrawal</option>
                                    <option value="2">Deposit</option>
                                    <option value="3">Transfer</option>
                                </select>
                            </div>
                            <div className="pl3 h2 flex flex-row items-center mt2
                            flex-column-l h4-l w-20-l
                            ">
                                <div className="h2 w4 w-100-l h-50-l flex items-center pr2 f4 custom-gray ">Memo Note</div>
                                <input className="h2 w4 w-100-l input-reset bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b bw1" type="text" placeholder="note"></input>
                            </div>
                            <div className="pl3 h3 flex flex-row items-center mt2
                            flex-column-l h4-l w-25-l
                            ">
                                <div className="h2 w4 w-100-l h-50-l flex items-center pr2 f4 custom-gray ">Budget Category</div>
                                <select className="h2 w4 w-100-l flex pl1 input-reset bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b bw1"
                                
                                >
                                    <option value="">--</option>
                                    {
                                        categoriesAndItems.map(category => {
                                            return(
                                                
                                                <optgroup key={category.categoryId} label={category.name}>
                                                    {
                                                        category.items.map(item => {
                                                        return <option key={item.categoryItemId} value={item.personalBudgetCategoryItemId}>{item.name}</option>
                                                        })
                                                    }
                                                </optgroup>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="pl3 h2 flex flex-row items-center mt2 mb2
                            flex-column-l h4-l w-15-l
                            ">
                                <div className="h2 w-0 w-100-l h-50-l flex items-center f4 custom-gray ">
                                
                                </div>
                                <div className="flex flex-row w-100-l">
                                    
                                    <div className="h2 w3 flex items-center justify-center mr3 ph1-l bg-money-color br2 white pointer">Add</div>
                                    <div className="h2 w3 flex items-center justify-center ml3 ph1-l bg-red br2 white pointer">Clear</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-90 flex flex-column mt3 bg-custom-darker-gray
                w-100-l ph3-l
                ">
                    <div className="w-100 bg-custom-lighter-gray">
                        <div className="flex flex-column 
                        flex-row-l justify-between-l items-center-l
                        ">
                            <div className="custom-gray f3 mt2 pl3">Transactions</div>
                            <div className="flex flex-row custom-gray mt2 pl3 pr3
                            ">
                                <div className={(individualAccount.filterTransactionSelection === "all" ? classSelect : classNoSelect)} onClick={() => setIndividualAccountFilterTransactionSelection(individualAccount.accountId, "all")}>All</div>
                                <div className={(individualAccount.filterTransactionSelection === "withdrawals" ? classSelect : classNoSelect)} onClick={() => setIndividualAccountFilterTransactionSelection(individualAccount.accountId, "withdrawals")}>Withdrawals</div>
                                <div className={(individualAccount.filterTransactionSelection === "deposits" ? classSelect : classNoSelect)} onClick={() => setIndividualAccountFilterTransactionSelection(individualAccount.accountId, "deposits")}>Deposits</div>
                                <div className={(individualAccount.filterTransactionSelection === "transfers" ? classSelect : classNoSelect)} onClick={() => setIndividualAccountFilterTransactionSelection(individualAccount.accountId, "transfers")}>Transfers</div>
                            </div>
                        </div>
                                  
                        <div className="
                        w-100 flex flex-row custom-gray justify-between mt3"
                        >
                            <div className="flex flex-row items-center ml3">
                                <div className="mr1">Entries</div>
                                <select id="account-entries" 
                                className="w3 bg-custom-lighter-gray border-custom-gray custom-gray form-line-active b"
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
                                onInput={(event) => console.log("add event filter handler")}
                                ></input>
                            </div>
                        </div>

                        {
                            (Array.isArray(individualAccount.transactions) && transactionsArrayValid && individualAccount.filter === false) ?
                            <div className="w-100 flex flex-column mt3 ph3
                            flex-row-l
                            ">
                                <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center br b--black bn-l">
                                    <div className="mr1 mr2-l">Amount</div>
                                    <Sort />
                                </div>
                                <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center br b--black bn-l">
                                    <div className="mr1 mr2-l">Date</div>
                                    <Sort  />
                                </div>
                                <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center br b--black bn-l">
                                    <div className="mr1 mr2-l">Transaction Type</div>
                                    <Sort  />
                                </div>
                                <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center br b--black bn-l">
                                    <div className="mr1 mr2-l">Memo</div>
                                    <Sort  />
                                </div>
                                <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center br b--black bn-l">
                                    <div className="mr1 mr2-l">BudgetCategory</div>
                                    <Sort />
                                </div>
                            </div>
                            : ""
                        }

                        {
                            (Array.isArray(individualAccount.filteredTransactions) && filteredTransactionsArrayValid && individualAccount.filter === true) ?
                            <div className="w-100 flex flex-column mt3 ph3
                            flex-row-l
                            ">
                                <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center br b--black bn-l">
                                    <div className="mr1 mr2-l">Amount</div>
                                    <Sort />
                                </div>
                                <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center br b--black bn-l">
                                    <div className="mr1 mr2-l">Date</div>
                                    <Sort  />
                                </div>
                                <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center br b--black bn-l">
                                    <div className="mr1 mr2-l">Transaction Type</div>
                                    <Sort  />
                                </div>
                                <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center br b--black bn-l">
                                    <div className="mr1 mr2-l">Memo</div>
                                    <Sort  />
                                </div>
                                <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center br b--black bn-l">
                                    <div className="mr1 mr2-l">BudgetCategory</div>
                                    <Sort />
                                </div>
                            </div>
                            : ""
                        }
                        
                        {
                            (Array.isArray(individualAccount.transactions) && transactionsArrayValid && individualAccount.filter === false   ) ?
                            individualAccount.transactions.map(transaction => {
                                const transactionDate = new Date(transaction.date).toLocaleString();

                                return(
                                    <div className="w-100 flex flex-column mt3 ph3
                                    flex-row-l
                                    ">
                                        {
                                            console.log("hi")
                                        }
                                        <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center br b--black bn-l">
                                            <div className="mr1 mr2-l">{transaction.amount}</div>
                                        </div>
                                        <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center br b--black bn-l">
                                            <div className="mr1 mr2-l">{transactionDate}</div>
                                            
                                        </div>
                                        <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center br b--black bn-l">
                                            <div className="mr1 mr2-l">{accountTypeName}</div>
                                            
                                        </div>
                                        <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center br b--black bn-l">
                                            <div className="mr1 mr2-l">{transaction.memoNote}</div>
                                            
                                        </div>
                                        <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center br b--black bn-l">
                                            <div className="mr1 mr2-l">{transaction.categoryItemName}</div>
                                            
                                        </div>
                                        {
                                            //edit will bring up another row
                                        }
                                    </div>
                                )
                            })
                            : ""
                        }
                        {
                            ((Array.isArray(individualAccount.filteredTransactions)) && filteredTransactionsArrayValid && individualAccount.filter === true) ?
                            individualAccount.filteredTransactions.map(transaction => {
                                const transactionDate = new Date(transaction.date).toLocaleString();
                                return(
                                    <div className="w-100 flex flex-column mt3 ph3
                                    flex-row-l
                                    ">
                                        <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center br b--black bn-l">
                                            <div className="mr1 mr2-l">{transaction.amount}</div>
                                        </div>
                                        <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center br b--black bn-l">
                                            <div className="mr1 mr2-l">{transactionDate}</div>
                                            
                                        </div>
                                        <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center br b--black bn-l">
                                            <div className="mr1 mr2-l">{accountTypeName}</div>
                                            
                                        </div>
                                        <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center br b--black bn-l">
                                            <div className="mr1 mr2-l">{transaction.memoNote}</div>
                                            
                                        </div>
                                        <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center br b--black bn-l">
                                            <div className="mr1 mr2-l">{transaction.categoryItemName}</div>
                                            
                                        </div>
                                        {
                                            //edit will bring up another row
                                        }
                                    </div>
                                )
                            })
                            : ""
                        }

                    </div>
                </div>  
                
            </div>
        </div>
    )
}

export default IndividualAccount;

//  onChange={(event) => (individualAccount.filter === false) ? configurePages(event.target.value, setAccountSummaryEntries, setAccountSummaryTotalPages, setAccountSummaryCurrentPage, setAccountSummaryPages, accountSummary.accounts ) : configurePages(event.target.value, setAccountSummaryEntries, setAccountSummaryFilterTotalPages, setAccountSummaryFilterCurrentPage, setAccountSummaryFilterPages, accountSummary.filteredAccounts)}


//setNewArray={setAccountSummaryAccounts} arrayToSort={accountSummary.accounts} propertyToCompare={"accountName"} typeToCompare={"str"} setCurrentPage={setAccountSummaryCurrentPage} 

/*
<div className="w-100 flex flex-column mt3 ph3
                        flex-row-l
                        ">
                            <div className="w-15-l ph1 custom-gray flex flex-row items-center 
                            mt2-l ph0-l
                            ">
                                <div className="mr1 mr2-l">Amount</div>
                                <Sort />
                            </div>
                            <div className="w-15-l ph1 custom-gray flex flex-row items-center 
                            mt2-l ph0-l
                            ">
                                <div className="mr1 mr2-l">Date</div>
                                <Sort  />
                            </div>
                            <div className="w-15-l ph1 custom-gray flex flex-row items-center 
                            mt2-l ph0-l
                            ">
                                <div className="mr1 mr2-l">Transaction Type</div>
                                <Sort  />
                            </div>
                            <div className="w-15-l ph1 custom-gray flex flex-row items-center 
                            mt2-l ph0-l
                            ">
                                <div className="mr1 mr2-l">Memo</div>
                                <Sort  />
                            </div>
                            <div className="w-15-l ph1 custom-gray flex flex-row items-center 
                            mt2-l ph0-l
                            ">
                                <div className="mr1 mr2-l">BudgetCategory</div>
                                <Sort />
                            </div>
                        </div>
    */