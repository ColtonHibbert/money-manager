import React from "react";

function EditTransaction(props) {
    const {
        categoriesAndItems,
        individualAccount,
        transaction,
        setEditAmount,
        setEditTransactionTypeId,
        setEditMemoNote,
        setEditPersonalBudgetCategoryId,
        setEditPersonalBudgetCategoryItemId,
        setEditClear
    } = props;

    return (
        
            <div className="bg-custom-lighter-gray">
                <div className="f4 mt1 custom-gray b ">
                Edit Transaction
                </div>
                <div className="flex-l flex-row-l">
                    <div className="h2 flex flex-row items-center mt2
                    flex-column-l h4-l w-15-l
                    ">
                        <div className="h2 w4 w-100-l h-50-l flex items-center pr2 f4 custom-gray ">Amount</div>
                        <input className="h2 w4 w-100-l input-reset bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b bw1" type="number" placeholder="0.00"
                        onInput={(event) => setEditAmount(individualAccount.accountId, transaction.transactionId ,event.target.value)}
                        //value={individualAccount.addTransactionAmount.toString()}
                        ></input>
                    </div>
                    <div className="h3 flex flex-row items-center mt2
                    flex-column-l h4-l w-20-l pl3-l
                    ">
                        <div className="h2 w4 w-100-l h-50-l flex items-center pr2 f4 custom-gray ">Transaction Type</div>
                        <select className="h2 w4 w-100-l flex pl1 input-reset bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b bw1"
                            //onChange={(event) => setIndividualAccountsAddTransactionTransactionTypeId(individualAccount.accountId, event.target.value)}
                            //value={individualAccount.addTransactionTransactionTypeId}
                        >
                            <option value="">--</option>
                            <option value="1">Withdrawal</option>
                            <option value="2">Deposit</option>
                            <option value="3">Transfer</option>
                        </select>
                    </div>
                    <div className="h2 flex flex-row items-center mt2
                    flex-column-l h4-l w-20-l pl3-l
                    ">
                        <div className="h2 w4 w-100-l h-50-l flex items-center pr2 f4 custom-gray ">Memo Note</div>
                        <input className="h2 w4 w-100-l input-reset bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b bw1" type="text" placeholder="note"
                            //onInput={(event) => setIndividualAccountsAddTransactionMemoNote(individualAccount.accountId, event.target.value)}
                            //value={individualAccount.addTransactionMemoNote}
                        ></input>
                    </div>
                    <div className="h3 flex flex-row items-center mt2
                    flex-column-l h4-l w-25-l pl3-l
                    ">
                        <div className="h2 w4 w-100-l h-50-l flex items-center pr2 f4 custom-gray ">Budget Category</div>
                        <select className="h2 w4 w-100-l flex pl1 input-reset bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b bw1"
                            //onChange={(event) => handleSelectCategoryAndItem(event.target.value)}
                            //value={individualAccount.addTransactionPersonalBudgetCategoryItemId !== 0 ? console.log() : ""}
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
                    <div className="h2 flex flex-row items-center mt2 mb2
                    flex-column-l h4-l w-15-l pl3-l
                    ">
                        <div className="h2 w-0 w-100-l h-50-l flex items-center f4 custom-gray ">
                        
                        </div>
                        <div className="flex flex-row w-100-l">
                            
                            <div className="h2 w3 flex items-center justify-center mr3 ph1-l bg-money-color br2 white pointer grow"
                            //onClick={() => submitAddTransaction()}
                            >Add</div>
                            <div className="h2 w3 flex items-center justify-center ml3 ph1-l bg-red br2 white pointer grow">Cancel</div>
                        </div>
                    </div>
                </div>
                {/*
                    (individualAccount.addTransactionAmountError || individualAccount.addTransactionTransactionTypeIdError || individualAccount.addTransactionPersonalBudgetError) ? 
                        <div className="red f5 pa1">
                            Amount must be greater than zero. Transaction Type and Budget Category must be selected.
                        </div>
                        : ""*/
                }
                {/*
                    (individualAccount.addTransactionAddError) ?
                    <div className="red f5 pa1">
                        There was an error submitting your transaction.
                    </div>
                    : ""*/
                }
            </div>
        
    )
}

export default EditTransaction;