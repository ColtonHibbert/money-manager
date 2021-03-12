import React from "react";
import EditIcon from "./EditIcon.js";

function EditTransactionButton(props) {
    const {
        individualAccount,
        transaction,
        setIndividualAccountsEditTransaction,
    } = props;

    return (
        <div
            onClick={() => setIndividualAccountsEditTransaction(individualAccount.accountId, transaction.transactionId, true)}
        >
            <div className="w1 h1">
                <EditIcon fillColor={"#429244"} />
            </div>
        </div>
    )
}

export default EditTransactionButton;