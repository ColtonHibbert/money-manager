import React from "react";
import EditIcon from "./EditIcon.js";

function EditAccountButton(props) {
    return (
        <div className="w4 h2 flex flex-row items-center justify-center bg-money-color br2 white pointer grow">
            <div className="pr1">
                Edit Account
            </div>
            <div className="w1 h1">
                <EditIcon />
            </div>
        </div>
    )
}

export default EditAccountButton;