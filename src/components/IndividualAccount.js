import React from "react";
import MoneyIcon from "../components/MoneyIcon.js";
import PriceTagIcon from "../components/PriceTagIcon.js";
import DepositIcon from "../components/DepositIcon.js";
import TransactionIcon from "../components/TransactionIcon.js";
import Sort from "../components/Sort.js";
import PaginationBar from "../components/PaginationBar.js";
import EditAccountButton from "./EditAccountButton.js";
import EditAccount from "./EditAccount.js";
import EditIcon from "./EditIcon.js";
import TrashIcon from "./TrashIcon.js";
import EditTransaction from "./EditTransaction.js";
import { toast } from "react-toastify";
import { 
    pagesArray, 
    configurePages, 
    configureNestedArrayPages, 
    handleTransactionFilter, 
    handleFilterTransactionSelection 
} from "../services/functions.js";
import EditTransactionButton from "./EditTransactionButton.js";
import { setIndividualAccountsEditTransaction } from "../services/actions.js";


function IndividualAccount(props) {
    const { 
        individualAccount,
        categoriesAndItems,
        setIndividualAccountsFilterTransactionSelection,
        setIndividualAccountsEntries,
        setIndividualAccountsTotalPages,
        setIndividualAccountsPages,
        setIndividualAccountsCurrentPage,
        setIndividualAccountsFilter,
        setIndividualAccountsFilteredTransactions,
        setIndividualAccountsFilterTotalPages,
        setIndividualAccountsFilterCurrentPage,
        setIndividualAccountsFilterPages,
        setIndividualAccountsTransactions,
        setIndividualAccountsSearch,
        setIndividualAccountsEditAccount,
        setIndividualAccountsEditAccountName,
        setIndividualAccountsEditAccountTypeId,
        setIndividualAccountsEditAccountLowAlertBalance,
        setIndividualAccountsEditAccountError,
        setIndividualAccountsEditAccountErrorMessage,
        setIndividualAccountsUpdateAccount,
        setIndividualAccountsAddTransactionAmount,
        setIndividualAccountsAddTransactionTransactionTypeId,
        setIndividualAccountsAddTransactionMemoNote,
        setIndividualAccountsAddTransactionPersonalBudgetCategoryItemId,
        setIndividualAccountsAddTransactionPersonalBudgetCategoryId,
        setIndividualAccountsAddTransactionAmountError,
        setIndividualAccountsAddTransactionPersonalBudgetError,
        setIndividualAccountsAddTransactionTransactionTypeIdError,
        setIndividualAccountsAddTransactionAddError,
        setIndividualAccountsAddTransactionAddData,
        setIndividualAccountsEditTransaction,
        user
    } = props;

    const submitAddTransaction = () => {

        //check amount
        if(individualAccount.addTransactionAmount < 0) {
            setIndividualAccountsAddTransactionAmountError(individualAccount.accountId, true);
        } 
        if(individualAccount.addTransactionAmount > 0) {
            setIndividualAccountsAddTransactionAmountError(individualAccount.accountId, false);
        }

        //check transaction type
        if(individualAccount.addTransactionTransactionTypeId !== 1 && individualAccount.addTransactionTransactionTypeId !== 2 && individualAccount.addTransactionTransactionTypeId !== 3) {
            setIndividualAccountsAddTransactionTransactionTypeIdError(individualAccount.accountId, true);
        } else {
            setIndividualAccountsAddTransactionTransactionTypeIdError(individualAccount.accountId, false);
        }

        //auto convert deposit and transfer categories
        if(individualAccount.addTransactionTransactionTypeId === 2) {
            const itemId = categoriesAndItems.filter(category => {

                const item = category.items.filter(item => {
                    if(item.name === "deposit" ) {
                        return item;
                    }
                })
                if(item[0]) {
                    if(item[0].name === "deposit") {
                        return item[0];
                    }
                }
            })
            console.log(itemId[0])
            setIndividualAccountsAddTransactionPersonalBudgetCategoryItemId(individualAccount.accountId, itemId[0].items[0].personalBudgetCategoryItemId);
            setIndividualAccountsAddTransactionPersonalBudgetCategoryId(individualAccount.accountId, itemId[0].items[0].personalBudgetCategoryId);
        }

        if(individualAccount.addTransactionTransactionTypeId === 3) {
            const itemId = categoriesAndItems.filter(category => {

                const item = category.items.filter(item => {
                    if(item.name === "transfer" ) {
                        return item;
                    }
                })
                if(item[0]) {
                    if(item[0].name === "transfer") {
                        return item[0];
                    }
                }
            })
            console.log(itemId[0])
            setIndividualAccountsAddTransactionPersonalBudgetCategoryItemId(individualAccount.accountId, itemId[0].items[0].personalBudgetCategoryItemId);
            setIndividualAccountsAddTransactionPersonalBudgetCategoryId(individualAccount.accountId, itemId[0].items[0].personalBudgetCategoryId);
        }
        
        //check all fields, request
        if(individualAccount.addTransactionAmountError || individualAccount.addTransactionPersonalBudgetCategoryId === 0 || individualAccount.addTransactionPersonalBudgetCategoryItemId === 0 ||  individualAccount.addTransactionPersonalBudgetError || individualAccount.addTransactionTransactionTypeIdError ) {
            return;
        } else {
            fetch(
                "http://localhost:3001/addtransaction",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":"application/json",
                        "CSRF-Token":user.csrf
                    },
                    body: JSON.stringify({
                        addTransactionAmount: individualAccount.addTransactionAmount,
                        addTransactionTransactionTypeId: individualAccount.addTransactionTransactionTypeId,
                        addTransactionMemoNote: individualAccount.addTransactionMemoNote,
                        addTransactionPersonalBudgetCategoryId: individualAccount.addTransactionPersonalBudgetCategoryId,
                        addTransactionPersonalBudgetCategoryItemId: individualAccount.addTransactionPersonalBudgetCategoryItemId,
                        addTransactionUserId: user.userId,
                        addTransactionAccountId: individualAccount.accountId
                    }),
                    credentials:"include"
                }
            )
            .then(res => res.json())
            .then(data => {
                if(data.error) {
                    setIndividualAccountsAddTransactionAddError(individualAccount.accountId, true);
                    toast.failure("Error adding transaction.")
                }
                if(!data.error) {
                    setIndividualAccountsAddTransactionAddError(individualAccount.accountId, false);
                    setIndividualAccountsAddTransactionAddData(individualAccount.accountId, data);
                    toast.success("Transaction added successfully.")
                }
            })
        }
    }

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

    const getTransactionTypeName = (entry) => {
        if(entry.transactionTypeId === 1) {
            return "Withdrawal";
        }
        if(entry.transactionTypeId === 2) {
            return "Deposit";
        }
        if(entry.transactionTypeId === 3) {
            return "Transfer";
        }
    }

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

    const handleSelectCategoryAndItem = (value) => {
        //console.log(value)
        if(value === "") {
            setIndividualAccountsAddTransactionPersonalBudgetError(individualAccount.accountId, true);
            return;
        }
        value = JSON.parse(value);
        setIndividualAccountsAddTransactionPersonalBudgetError(individualAccount.accountId, false);
        setIndividualAccountsAddTransactionPersonalBudgetCategoryItemId(individualAccount.accountId, value.personalBudgetCategoryItemId);
        setIndividualAccountsAddTransactionPersonalBudgetCategoryId(individualAccount.accountId, value.personalBudgetCategoryId);
    }


    return(
        <div className="w-100" key={individualAccount.accountId}>    
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
                {
                    (individualAccount.editAccount === false) ?
                    <div className="w-90 flex justify-start mv2 w-100-l pl3-l ">
                        <EditAccountButton individualAccount={individualAccount} setIndividualAccountsEditAccount={setIndividualAccountsEditAccount}/>
                    </div>
                    : 
                    <div className="w-100 flex justify-center mv2
                    justify-center-m 
                    justify-start-l
                    ">
                        <EditAccount individualAccount={individualAccount} 
                        setIndividualAccountsEditAccount={setIndividualAccountsEditAccount}
                        setIndividualAccountsEditAccountName={setIndividualAccountsEditAccountName}
                        setIndividualAccountsEditAccountTypeId={setIndividualAccountsEditAccountTypeId}
                        setIndividualAccountsEditAccountLowAlertBalance={setIndividualAccountsEditAccountLowAlertBalance}
                        setIndividualAccountsEditAccountError={setIndividualAccountsEditAccountError}
                        setIndividualAccountsEditAccountErrorMessage={setIndividualAccountsEditAccountErrorMessage}
                        setIndividualAccountsUpdateAccount={setIndividualAccountsUpdateAccount}
                        user={user}
                        />
                    </div>
                }
              
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
                            ${individualAccount.currentBalance.toFixed(2)}
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
                            ${individualAccount.withdrawalsMonthlyAmount.toFixed(2)}
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
                            ${individualAccount.depositsMonthlyAmount.toFixed(2)}
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
                                <input className="h2 w4 w-100-l input-reset bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b bw1" type="number" placeholder="0.00"
                                onInput={(event) => setIndividualAccountsAddTransactionAmount(individualAccount.accountId, event.target.value)}
                                value={individualAccount.addTransactionAmount.toString()}
                                ></input>
                            </div>
                            <div className="pl3 h3 flex flex-row items-center mt2
                            flex-column-l h4-l w-20-l
                            ">
                                <div className="h2 w4 w-100-l h-50-l flex items-center pr2 f4 custom-gray ">Transaction Type</div>
                                <select className="h2 w4 w-100-l flex pl1 input-reset bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b bw1"
                                    onChange={(event) => setIndividualAccountsAddTransactionTransactionTypeId(individualAccount.accountId, event.target.value)}
                                    value={individualAccount.addTransactionTransactionTypeId}
                                >
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
                                <input className="h2 w4 w-100-l input-reset bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b bw1" type="text" placeholder="note"
                                    onInput={(event) => setIndividualAccountsAddTransactionMemoNote(individualAccount.accountId, event.target.value)}
                                    value={individualAccount.addTransactionMemoNote}
                                ></input>
                            </div>
                            <div className="pl3 h3 flex flex-row items-center mt2
                            flex-column-l h4-l w-25-l
                            ">
                                <div className="h2 w4 w-100-l h-50-l flex items-center pr2 f4 custom-gray ">Budget Category</div>
                                <select className="h2 w4 w-100-l flex pl1 input-reset bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b bw1"
                                    onChange={(event) => handleSelectCategoryAndItem(event.target.value)}
                                    value={individualAccount.addTransactionPersonalBudgetCategoryItemId !== 0 ? console.log() : ""}
                                >
                                    <option value="">--</option>
                                    {
                                        categoriesAndItems.map(category => {
                                            return(
                                                
                                                <optgroup key={category.categoryId} label={category.name}>
                                                    {
                                                        category.items.map(item => {
                                                        return <option key={item.categoryItemId} value={JSON.stringify(item)}>{item.name}</option>
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
                                    
                                    <div className="h2 w3 flex items-center justify-center mr3 ph1-l bg-money-color br2 white pointer grow"
                                    onClick={() => submitAddTransaction()}
                                    >Add</div>
                                    <div className="h2 w3 flex items-center justify-center ml3 ph1-l bg-red br2 white pointer grow">Clear</div>
                                </div>
                            </div>
                        </div>
                        {
                            (individualAccount.addTransactionAmountError || individualAccount.addTransactionTransactionTypeIdError || individualAccount.addTransactionPersonalBudgetError) ? 
                                <div className="red f5 pa1">
                                    Amount must be greater than zero. Transaction Type and Budget Category must be selected.
                                </div>
                                : ""
                        }
                        {
                            (individualAccount.addTransactionAddError) ?
                            <div className="red f5 pa1">
                                There was an error submitting your transaction.
                            </div>
                            : ""
                        }
                    </div>
                </div>

                <div className="w-90 flex flex-column mt3 mb4 bg-custom-darker-gray 
                w-100-l ph3-l
                ">
                    <div className="w-100 bg-custom-lighter-gray">
                        <div className="flex flex-column 
                        flex-row-l justify-between-l items-center-l
                        ">
                            <div className="custom-gray f3 mt2 pl3">Transactions</div>
                            <div className="flex flex-row custom-gray mt2 pl3 pr3
                            ">
                                <div className={(individualAccount.filterTransactionSelection === "all" ? classSelect : classNoSelect)} onClick={() => handleFilterTransactionSelection(individualAccount.accountId, setIndividualAccountsFilter, setIndividualAccountsFilterTotalPages, setIndividualAccountsFilterCurrentPage, setIndividualAccountsFilterPages, setIndividualAccountsFilteredTransactions, individualAccount.entries, "all", setIndividualAccountsFilterTransactionSelection, individualAccount.transactions, setIndividualAccountsSearch)}>All</div>
                                <div className={(individualAccount.filterTransactionSelection === "withdrawals" ? classSelect : classNoSelect)} onClick={() => handleFilterTransactionSelection(individualAccount.accountId, setIndividualAccountsFilter, setIndividualAccountsFilterTotalPages, setIndividualAccountsFilterCurrentPage, setIndividualAccountsFilterPages, setIndividualAccountsFilteredTransactions, individualAccount.entries, "withdrawals", setIndividualAccountsFilterTransactionSelection, individualAccount.transactions, setIndividualAccountsSearch)}>Withdrawals</div>
                                <div className={(individualAccount.filterTransactionSelection === "deposits" ? classSelect : classNoSelect)} onClick={() => handleFilterTransactionSelection(individualAccount.accountId, setIndividualAccountsFilter, setIndividualAccountsFilterTotalPages, setIndividualAccountsFilterCurrentPage, setIndividualAccountsFilterPages, setIndividualAccountsFilteredTransactions, individualAccount.entries, "deposits", setIndividualAccountsFilterTransactionSelection, individualAccount.transactions, setIndividualAccountsSearch)}>Deposits</div>
                                <div className={(individualAccount.filterTransactionSelection === "transfers" ? classSelect : classNoSelect)} onClick={() => handleFilterTransactionSelection(individualAccount.accountId, setIndividualAccountsFilter, setIndividualAccountsFilterTotalPages, setIndividualAccountsFilterCurrentPage, setIndividualAccountsFilterPages, setIndividualAccountsFilteredTransactions, individualAccount.entries, "transfers", setIndividualAccountsFilterTransactionSelection, individualAccount.transactions, setIndividualAccountsSearch)}>Transfers</div>
                            </div>
                        </div>
                                  
                        <div className="
                        w-100 flex flex-row custom-gray justify-between mt3"
                        >
                            <div className="flex flex-row items-center ml3">
                                <div className="mr1">Entries</div>
                                <select id="account-entries" 
                                className="w3 bg-custom-lighter-gray border-custom-gray custom-gray form-line-active b"
                                onChange={(event) => (individualAccount.filter === false) ? configureNestedArrayPages(event.target.value, individualAccount.accountId, setIndividualAccountsEntries, setIndividualAccountsTotalPages, setIndividualAccountsCurrentPage, setIndividualAccountsPages, individualAccount.transactions ) : configureNestedArrayPages(event.target.value, individualAccount.accountId, setIndividualAccountsEntries, setIndividualAccountsFilterTotalPages, setIndividualAccountsFilterCurrentPage, setIndividualAccountsFilterPages, individualAccount.filteredTransactions)}
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
                                onInput={(event) => ( (event.target.value).trim() === "" ) ?
                                    handleTransactionFilter(event.target.value, individualAccount.accountId, setIndividualAccountsFilter, setIndividualAccountsTotalPages, setIndividualAccountsCurrentPage, setIndividualAccountsPages, setIndividualAccountsTransactions, individualAccount.entries, individualAccount.filterTransactionSelection, "individualtransactions", accountTypeName, individualAccount.transactions, setIndividualAccountsSearch)
                                    : handleTransactionFilter(event.target.value, individualAccount.accountId, setIndividualAccountsFilter, setIndividualAccountsFilterTotalPages, setIndividualAccountsFilterCurrentPage, setIndividualAccountsFilterPages, setIndividualAccountsFilteredTransactions, individualAccount.entries, individualAccount.filterTransactionSelection, "individualtransactions", accountTypeName, individualAccount.transactions, setIndividualAccountsSearch)
                                }
                                value={individualAccount.search}
                                ></input>
                            </div>
                        </div>

                        {
                            (Array.isArray(individualAccount.transactions) && transactionsArrayValid && individualAccount.filter === false) ?
                            <div className="w-100 flex flex-column mt3 ph3 bb b--black
                            flex-row-l
                            ">
                                <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center ">
                                    <div className="mr1 mr2-l">Amount</div>
                                    <Sort accountId={individualAccount.accountId} setNewArray={setIndividualAccountsTransactions} arrayToSort={individualAccount.transactions} propertyToCompare={"amount"} typeToCompare={"num"} setCurrentPage={setIndividualAccountsCurrentPage} />
                                </div>
                                <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center ">
                                    <div className="mr1 mr2-l">Date</div>
                                    <Sort accountId={individualAccount.accountId} setNewArray={setIndividualAccountsTransactions} arrayToSort={individualAccount.transactions} propertyToCompare={"date"} typeToCompare={"date"} setCurrentPage={setIndividualAccountsCurrentPage} />
                                </div>
                                <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center ">
                                    <div className="mr1 mr2-l">Transaction Type</div>
                                    <Sort accountId={individualAccount.accountId} setNewArray={setIndividualAccountsTransactions} arrayToSort={individualAccount.transactions} propertyToCompare={"transactionTypeId"} typeToCompare={"num"} setCurrentPage={setIndividualAccountsCurrentPage} />
                                </div>
                                <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center ">
                                    <div className="mr1 mr2-l">Memo</div>
                                    <Sort accountId={individualAccount.accountId} setNewArray={setIndividualAccountsTransactions} arrayToSort={individualAccount.transactions} propertyToCompare={"memoNote"} typeToCompare={"str"} setCurrentPage={setIndividualAccountsCurrentPage} />
                                </div>
                                <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center ">
                                    <div className="mr1 mr2-l">Budget Category</div>
                                    <Sort accountId={individualAccount.accountId} setNewArray={setIndividualAccountsTransactions} arrayToSort={individualAccount.transactions} propertyToCompare={"categoryItemName"} typeToCompare={"str"} setCurrentPage={setIndividualAccountsCurrentPage} />
                                </div>
                            </div>
                            : ""
                        }

                        {
                            (Array.isArray(individualAccount.filteredTransactions) && filteredTransactionsArrayValid && individualAccount.filter === true) ?
                            <div className="w-100 flex flex-column mt3 ph3 bb b--black
                            flex-row-l
                            ">
                                <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center ">
                                    <div className="mr1 mr2-l">Amount</div>
                                    <Sort accountId={individualAccount.accountId} setNewArray={setIndividualAccountsFilteredTransactions} arrayToSort={individualAccount.filteredTransactions} propertyToCompare={"amount"} typeToCompare={"num"} setCurrentPage={setIndividualAccountsFilterCurrentPage} />
                                </div>
                                <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center ">
                                    <div className="mr1 mr2-l">Date</div>
                                    <Sort accountId={individualAccount.accountId} setNewArray={setIndividualAccountsFilteredTransactions} arrayToSort={individualAccount.filteredTransactions} propertyToCompare={"date"} typeToCompare={"date"} setCurrentPage={setIndividualAccountsFilterCurrentPage} />
                                </div>
                                <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center ">
                                    <div className="mr1 mr2-l">Transaction Type</div>
                                    <Sort accountId={individualAccount.accountId} setNewArray={setIndividualAccountsFilteredTransactions} arrayToSort={individualAccount.filteredTransactions} propertyToCompare={"transactionTypeId"} typeToCompare={"num"} setCurrentPage={setIndividualAccountsFilterCurrentPage} />
                                </div>
                                <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center ">
                                    <div className="mr1 mr2-l">Memo</div>
                                    <Sort accountId={individualAccount.accountId} setNewArray={setIndividualAccountsFilteredTransactions} arrayToSort={individualAccount.filteredTransactions} propertyToCompare={"memoNote"} typeToCompare={"str"} setCurrentPage={setIndividualAccountsFilterCurrentPage} />
                                </div>
                                <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center ">
                                    <div className="mr1 mr2-l">Budget Category</div>
                                    <Sort accountId={individualAccount.accountId} setNewArray={setIndividualAccountsFilteredTransactions} arrayToSort={individualAccount.filteredTransactions} propertyToCompare={"categoryItemName"} typeToCompare={"str"} setCurrentPage={setIndividualAccountsFilterCurrentPage} />
                                </div>
                            </div>
                            : ""
                        }
                        
                        {
                            (Array.isArray(individualAccount.transactions) && transactionsArrayValid && individualAccount.filter === false   ) ?
                            individualAccount.transactions.slice(individualAccount.pages[individualAccount.currentPage].startEntry, individualAccount.pages[individualAccount.currentPage].finishEntry).map(transaction => {
                                const transactionDate = new Date(transaction.date).toLocaleString();
                                const transactionType = getTransactionTypeName(transaction);
                                
                                return(
                                    <div  key={transaction.transactionId} 
                                    className="flex flex-column mt3 mb2 pb3 ph3 bb b--black"
                                    >
                                        <div
                                        className="w-100 flex flex-column
                                        flex-row-l
                                        ">
                                            <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center ">
                                                <div className="mr1 mr2-l">{transaction.amount.toFixed(2)}</div>
                                            </div>
                                            <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center ">
                                                <div className="mr1 mr2-l">{transactionDate}</div>
                                                
                                            </div>
                                            <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center ">
                                                <div className="mr1 mr2-l">{transactionType}</div>
                                                
                                            </div>
                                            <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center ">
                                                <div className="mr1 mr2-l">{transaction.memoNote}</div>
                                                
                                            </div>
                                            <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center ">
                                                <div className="mr1 mr2-l">{transaction.categoryItemName}</div>
                                                
                                            </div>
                                            <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center ">
                                                <div className="w1 h1 pointer grow">
                                                    <EditTransactionButton 
                                                        individualAccount={individualAccount}
                                                        transaction={transaction}
                                                        setIndividualAccountsEditTransaction={setIndividualAccountsEditTransaction}
                                                    />
                                                </div>
                                                <div className="w1 h1 pointer ml3 grow">
                                                    <TrashIcon fillColor={"#ff4136"} />
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            (transaction.edit) ?
                                            <EditTransaction categoriesAndItems={categoriesAndItems}/>
                                            : ""
                                        }
                                        
                                    </div>
                                )
                            })
                            : ""
                        }
                        {
                            ((Array.isArray(individualAccount.filteredTransactions)) && filteredTransactionsArrayValid && individualAccount.filter === true) ?
                            individualAccount.filteredTransactions.slice(individualAccount.filterPages[individualAccount.filterCurrentPage].startEntry, individualAccount.filterPages[individualAccount.filterCurrentPage].finishEntry).map(transaction => {
                                const transactionDate = new Date(transaction.date).toLocaleString();
                                const transactionType = getTransactionTypeName(transaction);

                                return(
                                    <div key={transaction.transactionId}
                                    className="w-100 flex flex-column mt3 pb3 ph3 bb b--black
                                    flex-row-l
                                    ">
                                        <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center ">
                                            <div className="mr1 mr2-l">{transaction.amount.toFixed(2)}</div>
                                        </div>
                                        <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center ">
                                            <div className="mr1 mr2-l">{transactionDate}</div>
                                            
                                        </div>
                                        <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center ">
                                            <div className="mr1 mr2-l">{transactionType}</div>
                                            
                                        </div>
                                        <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center ">
                                            <div className="mr1 mr2-l">{transaction.memoNote}</div>
                                            
                                        </div>
                                        <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center ">
                                            <div className="mr1 mr2-l">{transaction.categoryItemName}</div>
                                            
                                        </div>
                                        <div className="w-15-l mt2 ph1 ph0-l custom-gray flex flex-row items-center ">
                                            <div className="w1 h1 pointer grow">
                                                <EditIcon fillColor={"#429244"}/>
                                            </div>
                                            <div className="w1 h1 pointer ml3 grow">
                                                <TrashIcon fillColor={"#ff4136"} />
                                            </div>
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
                            (Array.isArray(individualAccount.transactions) && transactionsArrayValid && individualAccount.filter === false   ) ?
                            <PaginationBar 
                                startEntry={individualAccount.pages[individualAccount.currentPage].startEntry} 
                                finishEntry={individualAccount.pages[individualAccount.currentPage].finishEntry} 
                                totalEntries={individualAccount.transactions.length}
                                totalPages={individualAccount.totalPages}
                                currentPage={individualAccount.currentPage}
                                setCurrentPage={setIndividualAccountsCurrentPage}
                                accountId={individualAccount.accountId}
                                nested={true}
                            />
                            : ""
                        }
                        {
                            ((Array.isArray(individualAccount.filteredTransactions)) && filteredTransactionsArrayValid && individualAccount.filter === true) ?
                            <PaginationBar 
                                startEntry={individualAccount.filterPages[individualAccount.filterCurrentPage].startEntry} 
                                finishEntry={individualAccount.filterPages[individualAccount.filterCurrentPage].finishEntry} 
                                totalEntries={individualAccount.filteredTransactions.length}
                                totalPages={individualAccount.filterTotalPages}
                                currentPage={individualAccount.filterCurrentPage}
                                setCurrentPage={setIndividualAccountsFilterCurrentPage}
                                accountId={individualAccount.accountId}
                                nested={true}
                            />
                            : ""
                        }
                       

                    </div>
                </div>  
                
            </div>
        </div>
    )
}

export default IndividualAccount;


//onChange={(event) => (individualAccount.filter === false) ? configurePages(event.target.value, setAccountSummaryEntries, setAccountSummaryTotalPages, setAccountSummaryCurrentPage, setAccountSummaryPages, accountSummary.accounts ) : configurePages(event.target.value, setAccountSummaryEntries, setAccountSummaryFilterTotalPages, setAccountSummaryFilterCurrentPage, setAccountSummaryFilterPages, accountSummary.filteredAccounts)}
