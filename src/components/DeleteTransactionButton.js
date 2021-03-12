import React from "react";
import TrashIcon from "./TrashIcon.js";

function DeleteTransactionButton(props) {
    const {
        individualAccount,
        transaction,
        setEditDeleteDisplay,
    } = props;


    return (
        <div
        onClick={() => setEditDeleteDisplay(individualAccount.accountId, transaction.transactionId, true)}
        >
            <div className="w1 h1">
                <TrashIcon fillColor={"#ff4136"} />
            </div>
        </div>
    );
}

export default DeleteTransactionButton;