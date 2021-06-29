import React from "react";
import { connect } from "react-redux";
import CreateBudgetButton from "../components/CreateBudgetButton.js";
import CreateBudgetCard from "../components/CreateBudgetCard.js";
import {
    setDashboardDisplayBudgetCard,
    setDashboardBudgetCardCategoryName,
    setDashboardBudgetCardBudgetAmount,
    setDashboardBudgetCardCreateCategoryError,
    setDashboardBudgetCardSelectedCategory,
    setDashboardBudgetCardItemName,
    setDashboardBudgetCardCreateItemError,
    setDashboardBudgetCardCreateCategoryData,
    setDashboardBudgetCardCreateItemData,
    setDashboardBudgetCardCategoryToDelete
} from "../services/actions.js";

const mapStateToProps = (state) => {
    return {
        dashboard: state.dashboard
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDashboardDisplayBudgetCard: (payload) => dispatch(setDashboardDisplayBudgetCard(payload)),
        setDashboardBudgetCardCategoryName: (payload) => dispatch(setDashboardBudgetCardCategoryName(payload)),
        setDashboardBudgetCardBudgetAmount: (payload) => dispatch(setDashboardBudgetCardBudgetAmount(payload)),
        setDashboardBudgetCardCreateCategoryError: (payload) => dispatch(setDashboardBudgetCardCreateCategoryError(payload)),
        setDashboardBudgetCardSelectedCategory: (payload => dispatch(setDashboardBudgetCardSelectedCategory(payload))),
        setDashboardBudgetCardItemName: (payload) => dispatch(setDashboardBudgetCardItemName(payload)),
        setDashboardBudgetCardCreateItemError: (payload) => dispatch(setDashboardBudgetCardCreateItemError(payload)),
        setDashboardBudgetCardCreateCategoryData: (payload) => dispatch(setDashboardBudgetCardCreateCategoryData(payload)),
        setDashboardBudgetCardCreateItemData: (payload) => dispatch(setDashboardBudgetCardCreateItemData(payload)),
        setDashboardBudgetCardCategoryToDelete: (payload) => dispatch(setDashboardBudgetCardCategoryToDelete(payload))
    }
}

function Dashboard(props) {

   const {
       dashboard,
       setDashboardDisplayBudgetCard,
       categoriesAndItems,
       setDashboardBudgetCardCategoryName,
       setDashboardBudgetCardBudgetAmount,
       setDashboardBudgetCardCreateCategoryError,
       setDashboardBudgetCardSelectedCategory,
       setDashboardBudgetCardItemName,
       setDashboardBudgetCardCreateItemError,
       setDashboardBudgetCardCreateCategoryData,
       setDashboardBudgetCardCreateItemData,
       setDashboardBudgetCardCategoryToDelete
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
                <CreateBudgetButton setDashboardDisplayBudgetCard={setDashboardDisplayBudgetCard} />
            </div>
            {
                (dashboard.displayBudgetCard === true) ? 
                <div className="w-100 pl3 mt3">
                    <CreateBudgetCard 
                    categoriesAndItems={categoriesAndItems}
                    setDashboardDisplayBudgetCard={setDashboardDisplayBudgetCard} 
                    displayBudgetCard={dashboard.displayBudgetCard}
                    categoryName={dashboard.categoryName}
                    budgetAmount={dashboard.budgetAmount} 
                    createCategoryError={dashboard.createCategoryError}
                    setDashboardBudgetCardCategoryName={setDashboardBudgetCardCategoryName}
                    setDashboardBudgetCardBudgetAmount={setDashboardBudgetCardBudgetAmount}
                    setDashboardBudgetCardCreateCategoryError={setDashboardBudgetCardCreateCategoryError}
                    selectedCategory={dashboard.selectedCategory}
                    itemName={dashboard.itemName}
                    createItemError={dashboard.createItemError}
                    setDashboardBudgetCardSelectedCategory={setDashboardBudgetCardSelectedCategory}
                    setDashboardBudgetCardItemName={setDashboardBudgetCardItemName}
                    setDashboardBudgetCardCreateItemError={setDashboardBudgetCardCreateItemError}
                    setDashboardBudgetCardCreateCategoryData={setDashboardBudgetCardCreateCategoryData}
                    setDashboardBudgetCardCreateItemData={setDashboardBudgetCardCreateItemData}
                    setDashboardBudgetCardCategoryToDelete={setDashboardBudgetCardCategoryToDelete}
                    categoryToDelete={dashboard.categoryToDelete}
                    user={props.user}
                    />
                </div>
                : ""
            }
           
            
            

        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);