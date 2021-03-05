import React from "react";
import EditIcon from "./EditIcon.js";

function EditTransactionButton(props) {
    const {
        individualAccount,
        setIndividualAccountsEditTransaction
    } = props;

    return (
        <div className="w4 h2 flex flex-row items-center justify-center bg-money-color br2 white pointer grow"
            onClick={() => setIndividualAccountsEditTransaction(individualAccount.accountId, true)}
        >
            <div className="w1 h1">
                <EditIcon fillColor={"#2d3035"}/>
            </div>
        </div>
    )
}

export default EditTransactionButton;