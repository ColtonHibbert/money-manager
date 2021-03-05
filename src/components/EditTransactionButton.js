import React from "react";
import EditIcon from "./EditIcon.js";

function EditTransactionButton(props) {
    const {
        individualAccount,
        transaction,
        setIndividualAccountsEditTransaction
    } = props;

    //need edit on specific button, each transaction needs edit true false, we need account id and transaction id, so we can find the specific account and transaction
    //will then display
    return (
        <div
            onClick={() => setIndividualAccountsEditTransaction(individualAccount.accountId, transaction.transactionId, true)}
        >
            <div className="w1 h1">
                <EditIcon fillColor={"#2d3035"}/>
            </div>
        </div>
    )
}

export default EditTransactionButton;