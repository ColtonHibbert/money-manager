import React from "react";
import EditIcon from "./EditIcon.js";

function CreateBudgetButton(props) {
    return (
        <div className="w4 h2 flex flex-row items-center justify-center ml3 mt3 bg-custom-lighter-gray br2 custom-gray pointer grow"
            //onClick={() => setIndividualAccountsDeleteAccountDisplay(individualAccount.accountId, true)}
        >
            <div className="pr1">
                Create Budget
            </div>
            <div className="w1 h1">
                <EditIcon fillColor={"#8a8d93"}/>
            </div>
        </div>
    )
}

export default CreateBudgetButton;