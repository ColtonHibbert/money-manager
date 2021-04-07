import React from "react";
import CreateBudgetButton from "../components/CreateBudgetButton.js";
import CreateBudgetCard from "../components/CreateBudgetCard.js";

function Dashboard(props) {
    return (
        <div className="flex flex-column w-100 items-center bg-custom-darker-gray">
            <div 
                className="
                    w-100 flex justify-center items-center bg-custom-lighter-gray money-color border-thin-gray 
                    h2 f4 pt1
                    h2-s f4-s
                    h2-ns f4-ns
                    h3-m f3-m
                    h3-l f3-l
                    "
                >Dashboard
            </div>
            <div className="w-100 flex justify-start">
                <CreateBudgetButton />
            </div>
            <div className="w-100 pl3 mt3">
                <CreateBudgetCard categoriesAndItems={props.categoriesAndItems} />
            </div>
            
            

        </div>
    )
}

export default Dashboard;