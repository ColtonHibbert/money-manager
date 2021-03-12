import React from "react";
import { handleEditTransactionSelectCategoryAndItem }  from "../services/functions.js";
import { toast } from 'react-toastify';

function EditTransaction(props) {
    const {
        user,
        categoriesAndItems,
        individualAccount,
        transaction,
        setEditAmount,
        setEditTransactionTypeId,
        setEditMemoNote,
        setEditPersonalBudgetCategoryId,
        setEditPersonalBudgetCategoryItemId,
        setEditCancel,
        setEditError,
        setEditData,
    } = props;

    function submitEditTransaction() {
        //check amount
        if(transaction.editTransactionAmount < 0) {
            setEditError(individualAccount.accountId, transaction.transactionId, true);
        } 
        if(transaction.editTransactionAmount > 0) {
            setEditError(individualAccount.accountId, transaction.transactionId, false);
        }

        //check transaction type
        if(transaction.editTransactionTransactionTypeId !== 1 && transaction.editTransactionTransactionTypeId !== 2 && transaction.editTransactionTransactionTypeId !== 3) {
            setEditError(individualAccount.accountId, transaction.transactionId, true);
        } else {
            setEditError(individualAccount.accountId, transaction.transactionId, false);
        }

        //auto convert deposit and transfer categories
        if(transaction.editTransactionTransactionTypeId === 2) {
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
            setEditPersonalBudgetCategoryItemId(individualAccount.accountId, transaction.transactionId, itemId[0].items[0].personalBudgetCategoryItemId);
            setEditPersonalBudgetCategoryId(individualAccount.accountId, transaction.transactionId, itemId[0].items[0].personalBudgetCategoryId);
        }

        if(transaction.editTransactionTransactionTypeId === 3) {
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
            setEditPersonalBudgetCategoryItemId(individualAccount.accountId, transaction.transactionId, itemId[0].items[0].personalBudgetCategoryItemId);
            setEditPersonalBudgetCategoryId(individualAccount.accountId, transaction.transactionId, itemId[0].items[0].personalBudgetCategoryId);
        }
        
        //check all fields, request
        if(transaction.editTransactionError ) {
            return;
        } else {
            fetch(
                "http://localhost:3001/editindividualtransaction",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":"application/json",
                        "CSRF-Token":user.csrf
                    },
                    body: JSON.stringify({
                        editTransactionAmount: transaction.editTransactionAmount,
                        editTransactionTransactionTypeId: transaction.editTransactionTransactionTypeId,
                        editTransactionMemoNote: transaction.editTransactionMemoNote,
                        editTransactionPersonalBudgetCategoryId: transaction.editTransactionPersonalBudgetCategoryId,
                        editTransactionPersonalBudgetCategoryItemId: transaction.editTransactionPersonalBudgetCategoryItemId,
                        editTransactionTransactionId: transaction.transactionId
                    }),
                    credentials:"include"
                }
            )
            .then(res => res.json())
            .then(data => {
                if(data.error) {
                    setEditCancel(individualAccount.accountId, transaction.transactionId );
                    toast.failure("Error editing transaction, transaction was not updated.");
                }
                if(!data.error) {
                    console.log(data)
                    setEditData(data.accountId, data.transactionId, data);
                    setEditCancel(data.accountId, data.transactionId );
                    toast.success("Transaction edited successfully.");
                }
            })
            .catch(err => {
                toast.failure("Error editing transaction.")
            })
        }
    }

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
                        value={transaction.editTransactionAmount.toString()}
                        ></input>
                    </div>
                    <div className="h3 flex flex-row items-center mt2
                    flex-column-l h4-l w-20-l pl3-l
                    ">
                        <div className="h2 w4 w-100-l h-50-l flex items-center pr2 f4 custom-gray ">Transaction Type</div>
                        <select className="h2 w4 w-100-l flex pl1 input-reset bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b bw1"
                            onChange={(event) => setEditTransactionTypeId(individualAccount.accountId, transaction.transactionId, event.target.value)}
                            value={transaction.editTransactionTransactionTypeId.toString()}
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
                            onInput={(event) => setEditMemoNote(individualAccount.accountId, transaction.transactionId, event.target.value)}
                            value={transaction.editTransactionMemoNote}
                        ></input>
                    </div>
                    <div className="h3 flex flex-row items-center mt2
                    flex-column-l h4-l w-25-l pl3-l
                    ">
                        <div className="h2 w4 w-100-l h-50-l flex items-center pr2 f4 custom-gray ">Budget Category</div>
                        <select className="h2 w4 w-100-l flex pl1 input-reset bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b bw1"
                            onChange={(event) => handleEditTransactionSelectCategoryAndItem(event.target.value, individualAccount, transaction, setEditPersonalBudgetCategoryId, setEditPersonalBudgetCategoryItemId)}
                            value={transaction.editTransactionPersonalBudgetCategoryItemId !== 0 ? console.log() : ""}
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
                            onClick={() => submitEditTransaction()}
                            >Add</div>
                            <div className="h2 w3 flex items-center justify-center ml3 ph1-l bg-red br2 white pointer grow"
                            onClick={() => setEditCancel(individualAccount.accountId, transaction.transactionId )}
                            >Cancel</div>
                        </div>
                    </div>
                </div>
                {
                    (transaction.editTransactionError) ? 
                    <div className="red f5 pa1">
                        Amount must be greater than zero. Transaction Type and Budget Category must be selected.
                    </div>
                    : ""
                }
            </div>
        
    )
}

export default EditTransaction;