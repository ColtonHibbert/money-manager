import React from "react";
import { connect } from "react-redux";
import CreateBudgetButton from "../components/CreateBudgetButton.js";
import CreateBudgetCard from "../components/CreateBudgetCard.js";
import {
    setAddAccountAccountName,
    setDashboardDisplayBudgetCard
} from "../services/actions.js";

const mapStateToProps = (state) => {
    return {
        dashboardDisplayBudgetCard: state.dashboardDisplayBudgetCard
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDashboardDisplayBudgetCard: (payload) => dispatch(setDashboardDisplayBudgetCard(payload))
    }
}

function Dashboard(props) {

   const {
       dashboardDisplayBudgetCard,
       setDashboardDisplayBudgetCard
   } = props;

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
                <CreateBudgetButton setDashboardDisplayBudgetCard={setDashboardDisplayBudgetCard} dashboardDisplayBudgetCard={dashboardDisplayBudgetCard}/>
            </div>
            <div className="w-100 pl3 mt3">
                <CreateBudgetCard 
                categoriesAndItems={props.categoriesAndItems}
                setDashboardDisplayBudgetCard={setDashboardDisplayBudgetCard} 
                dashboardDisplayBudgetCard={dashboardDisplayBudgetCard}
                />
            </div>
            
            

        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);