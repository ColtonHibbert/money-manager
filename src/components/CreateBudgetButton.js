import React from "react";
import EditIcon from "./EditIcon.js";

function CreateBudgetButton(props) {

    const {
        setDashboardDisplayBudgetCard
    } = props;


    return (
        <div className="w4 h2 flex flex-row items-center justify-center ml3 mt3 bg-custom-lighter-gray br2 custom-gray pointer grow"
            onClick={() => setDashboardDisplayBudgetCard("toggle")}
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