import React from "react";
import EditIcon from "./EditIcon.js";

function DeleteAccountButton(props) {
    const {
        individualAccount,
        setIndividualAccountsDeleteAccountDisplay 
    } = props;

    return (
        <div className="w4 h2 flex flex-row items-center justify-center ml2 bg-red br2 white pointer grow"
            onClick={() => setIndividualAccountsDeleteAccountDisplay(individualAccount.accountId, true)}
        >
            <div className="pr1">
                Delete Account
            </div>
            <div className="w1 h1">
                <EditIcon fillColor={"#2d3035"}/>
            </div>
        </div>
    )
}

export default DeleteAccountButton;