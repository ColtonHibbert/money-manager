import React from "react";
import { toast } from "react-toastify";

function DeleteTransaction(props) {

    const {
        user,
        individualAccount,
        transaction,
        setEditDeleteDisplay,
        setEditDeleteConfirmation
    } = props;

    function submitDeleteTransaction() {

        fetch(
            "http://localhost:3001/deleteindividualtransaction",
            {
                method:"POST",
                headers: {
                    "Content-Type":"application/json",
                    "CSRF-Token":user.csrf
                },
                body: JSON.stringify({
                    transactionId: transaction.transactionId
                }),
                credentials:"include"
            }
        )
        .then(res => res.json())
        .then(data => {
            if(data.error) {
                setEditDeleteDisplay(individualAccount.accountId, transaction.transactionId, false);
                toast.error("Error deleting transaction. The transaction was not deleted.");
            } 
            if(!data.error) {
                setEditDeleteConfirmation(data.accountId, data.transactionId, data);
                setEditDeleteDisplay(data.accountId, data.transactionId, false);
                toast.success("Transaction was deleted successfully.");
            }
        })
        .catch(err => {

        })
    }

    return (
        <div className="bg-custom-lighter-gray">
            <div className="f4 mt1 custom-gray b ">
            Delete Transaction
            </div>
            <div className="flex-l flex-row-l mt2 items-center">
                <div className="yellow mb2">Are you sure you want to delete this transaction?</div>
                <div className="flex flex-row ml3-l">
                    <div className="h2 w3 flex justify-center items-center bg-money-color white mr3 br2 pointer grow"
                    onClick={() => submitDeleteTransaction()}
                    >Yes</div>
                    <div className="h2 w3 flex justify-center items-center bg-red white ml3 br2 pointer grow"
                    onClick={() => setEditDeleteDisplay(individualAccount.accountId, transaction.transactionId, false)}
                    >No</div>
                </div>
            </div>
        </div>
    )
}

export default DeleteTransaction;