import React from "react";
import { setIndividualAccountsEntries } from "../services/actions.js";
import EditIcon from "./EditIcon.js";

function EditAccountButton(props) {
    const {
        individualAccount,
        setIndividualAccountsEditAccount  
    } = props;

    return (
        <div className="w4 h2 flex flex-row items-center justify-center bg-money-color br2 white pointer grow"
            onClick={() => setIndividualAccountsEditAccount(individualAccount.accountId, true)}
        >
            <div className="pr1">
                Edit Account
            </div>
            <div className="w1 h1">
                <EditIcon fillColor={"#2d3035"}/>
            </div>
        </div>
    )
}

export default EditAccountButton;