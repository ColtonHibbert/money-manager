import React from "react";
import { toast } from "react-toastify";

function CreateBudgetCard(props) {

    const {
        categoriesAndItems,
        setDashboardDisplayBudgetCard,
        categoryName,
        budgetAmount,
        createCategoryError,
        setDashboardBudgetCardCategoryName,
        setDashboardBudgetCardBudgetAmount,
        setDashboardBudgetCardCreateCategoryError,
        selectedCategory,
        itemName,
        createItemError,
        setDashboardBudgetCardSelectedCategory,
        setDashboardBudgetCardItemName,
        setDashboardBudgetCardCreateItemError,
        user
    } = props;

    const handleSelectCategory = (value) => {
        if(value === "") {
            return;
        }
        value = JSON.parse(value);
        setDashboardBudgetCardSelectedCategory(value.personalBudgetCategoryId)
    }

    function submitCreateCategory() {
        if(categoryName === "" || budgetAmount < 0) {
            setDashboardBudgetCardCreateCategoryError(true);
            return;
        }
        setDashboardBudgetCardCreateCategoryError(false);

        fetch("http://localhost:3001/addpersonalbudgetcategory", {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                "CSRF-Token":user.csrf
            },
            body: JSON.stringify({
                userId: user.userId,
                categoryName: categoryName,
                budgetAmount: budgetAmount
            }),
            credentials: "include"
        })
        .then(res => res.json())
        .then(data => {
            if(data.error) {
                toast.error("There was an error creating a category.")
            }
            if(!data.error) {
                // make endpoint now, do checks, regular category, personal category, and to lower checks, 
                toast.success("Successfully created a category.")
            }
        })
    }


    return(
        <div className="w-90 flex flex-column bg-custom-lighter-gray
        w-90-m flex-column-m
        w-70-l flex-row-l
        ">
            <div className="w-100">
                <div className="w-100 flex flex-row justify-end">
                    <div className="f4 ma2 custom-gray pointer"
                    onClick={() => setDashboardDisplayBudgetCard("false")}
                    >
                    {String.fromCharCode('0x2716')}
                    </div>
                </div>
                <div className="w-100 flex flex-column
                flex-column-m
                flex-row-l
                ">
                    <div className="w-100 flex flex-column
                    w-100-m
                    w-50-l
                    ">
                        <div className="flex-flex-column">
                            <div className="ml3 f4 custom-gray mt2">
                                Create Budget Categories
                            </div>
                            
                            <div className="flex flex-column mv2">
                                <div className="pl3 f5 custom-gray">
                                    Category Name:
                                </div>
                                <input type="text" 
                                className="h2 input-reset mh3 bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b"
                                onInput={(event) => setDashboardBudgetCardCategoryName(event.target.value)}
                                value={categoryName}
                                >
                                </input>
                            </div>
                            <div className="flex flex-column mv2">
                                <div className="pl3 f5 custom-gray mt2">
                                    Budget Amount:
                                </div>
                                <input type="text" 
                                className="h2 input-reset mh3 bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b
                                "
                                onInput={(event) => setDashboardBudgetCardBudgetAmount(event.target.value)}
                                value={budgetAmount.toString()}
                                >
                                </input>
                            </div>  
                            <div className="w4 flex justify-center items-center f5 mv3 mh3 pa1 bg-money-color white br1 pointer grow"
                            onClick={() => submitCreateCategory()}
                            >
                                Create Category
                            </div>
                            {
                                (createCategoryError) ?
                                <div className="red f5 pa1">
                                    You must add a budget amount greater than zero and a category name.
                                </div>
                                : ""
                            }
                        </div>
                        <div className="flex-flex-column">
                            <div className="ml3 f4 custom-gray">
                                Create Items in a Category
                            </div>
                            <div className="flex flex-column mv2">
                                <div className="pl3 f5 custom-gray mt2">
                                    Select Category:
                                </div>
                            {
                                (Array.isArray(categoriesAndItems)) ?
                                <select className="h2 flex mh3 pl1 input-reset bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b bw1"
                                onChange={(event) => handleSelectCategory(event.target.value)}
                                value={selectedCategory !== 0 ? console.log() : ""}
                                >
                                    <option value="">--</option>
                                    {
                                        categoriesAndItems.map(category => {
                                            return(
                                                <option key={category.personalBudgetCategoryId} value={JSON.stringify(category)}>{category.name}</option>
                                            )
                                        })
                                    }
                                </select>
                                : ""
                            }
                            </div>
                            <div className="flex flex-column mv2">
                                <div className="pl3 f5 custom-gray">
                                    Item Name:
                                </div>
                                <input type="text" 
                                className="h2 input-reset mh3 bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b
                                "
                                onInput={(event) => setDashboardBudgetCardItemName(event.target.value)}
                                value={itemName}
                                >
                                </input>
                                <div className="w4 flex justify-center items-center f5 mv3 mh3 pa1 bg-money-color white br1 pointer grow"
                                >
                                Create Item
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 flex flex-column
                    w-100-m
                    w-50-l
                    ">
                        <div className="ml3 f4 custom-gray mt2">
                            Delete Budget Category
                        </div>
                        <div className="flex flex-column mv2">
                            <div className="pl3 f5 custom-gray">
                                Category:
                            </div>
                            {
                                (Array.isArray(categoriesAndItems)) ?
                                <select className="h2 flex mh3 pl1 input-reset bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b bw1"
                                //onChange={(event) => handleSelectCategoryAndItem(event.target.value)}
                                //value={individualAccount.addTransactionPersonalBudgetCategoryItemId !== 0 ? console.log() : ""}
                                >
                                    <option value="">--</option>
                                    {
                                        categoriesAndItems.map(category => {
                                            return(
                                                <option key={category.personalBudgetCategoryId} value={JSON.stringify(category)}>{category.name}</option>
                                            )
                                        })
                                    }
                                </select>
                                : ""
                            }
                            <div className="w4 flex justify-center items-center f5 mv3 mh3 pa1 bg-red white br1 pointer grow"
                                >
                                Delete Category
                            </div>
                        </div>
                        <div className="ml3 f4 custom-gray mt2">
                            Delete Item in a Category
                        </div>
                        <div className="flex flex-column mv2">
                            <div className="pl3 f5 custom-gray">
                                Item:
                            </div>
                            {
                                (Array.isArray(categoriesAndItems)) ?
                                <select className="h2 flex mh3 pl1 input-reset bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b bw1"
                                //onChange={(event) => handleSelectCategoryAndItem(event.target.value)}
                                //value={individualAccount.addTransactionPersonalBudgetCategoryItemId !== 0 ? console.log() : ""}
                                >
                                    <option value="">--</option>
                                    {
                                        categoriesAndItems.map(category => {
                                            return(
                                                <optgroup key={category.categoryId} label={category.name}>
                                                    {
                                                        (Array.isArray(category.items)) ?
                                                        category.items.map(item => {
                                                        return <option key={item.categoryItemId} value={JSON.stringify(item)}>{item.name}</option>
                                                        })
                                                        : ""
                                                    }
                                                </optgroup>
                                            )
                                        })
                                    }
                                </select>
                                : ""
                            }
                            <div className="w4 flex justify-center items-center f5 mv3 mh3 pa1 bg-red white br1 pointer grow"
                                >
                                Delete Item
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateBudgetCard;