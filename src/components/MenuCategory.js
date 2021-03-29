import React from "react";
//import MenuItem from "./MenuItem.js";
import SavingsIcon from "./SavingsIcon.js";
import CheckingIcon from "./CheckingIcon.js";
import DebtIcon from "./DebtIcon.js";
import UpIcon from "./UpIcon.js";
import DownIcon from "./DownIcon.js";
import AddIcon from "./AddIcon.js";
import AccountSummaryIcon from "./AccountSummaryIcon.js";

function MenuCategory(props) {
    //console.log(props.navigation)

    const {navigation, accounts, name, setNavigationAccountSelected, setRouteHome, setMobileMenu } = props;

    const handleSelect = (value) => {
        setMobileMenu(false);
        setRouteHome(value);
    } 

    return (
        <div className="flex flex-column">
            <div 
                className="
                f4 flex flex-row items-center pl2 bg-custom-lighter-gray custom-gray pointer money-hover darker-gray-hover 
                h2point25-m 
                h2point25p-l
                "
                {...(name === "Accounts" && { onClick: setNavigationAccountSelected } )}
                {...(name === "Profile" && { onClick: () => handleSelect("profile") } )}
                {...(name === "Dashboard" && { onClick: () => handleSelect("dashboard")} )}
                //{...(name === "Transactions" && {onClick: () => handleSelect("transactions")} )}
                {...(name === "Lobby" && {onClick: () => handleSelect("lobby")} )}
            >
                <div>
                    {props.children}
                </div>
                <div className="w-100 flex flex-row justify-between">
                    <div className="pl2">
                    {props.name}
                    </div>
                    {
                        (name === "Accounts" && navigation.accountSelected === false) ?
                        <DownIcon /> 
                        : ""
                    }
                    {
                        (name === "Accounts" && navigation.accountSelected) ?
                        <UpIcon />
                        : ""
                    }
                </div>
            </div>
            {
                (navigation.accountSelected && name === "Accounts") ?
                <div>
                    <div 
                    className="
                    f4 flex flex-row items-center pl4 bg-custom-lighter-gray custom-gray pointer money-hover darker-gray-hover 
                    h2point25-m
                    h2point25p-l
                    "
                    onClick={() => handleSelect("accountsummary")}
                    >
                        <AccountSummaryIcon />
                        <div className="pl2">Account Summary</div>
                    </div>
                    {
                        accounts.map(account => {
                            return (
                                <div key={account.accountId}
                                onClick={() => handleSelect(account.accountId.toString())}
                                >
                                    <div 
                                        className="
                                        f4 flex flex-row items-center pl4 bg-custom-lighter-gray custom-gray pointer money-hover darker-gray-hover 
                                        h2point25-m
                                        h2point25p-l
                                        "
                                    >
                                        {
                                            (account.accountTypeId === 1) ?
                                            <CheckingIcon />
                                            : (account.accountTypeId === 2) ?
                                            <SavingsIcon />
                                            : <DebtIcon />
                                        }
                                        
                                        <div className="pl2">{account.accountName}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div 
                    onClick={() => handleSelect("addaccount")}
                    >
                        <div 
                            className="
                            f4 flex flex-row items-center pl4 bg-custom-lighter-gray custom-gray pointer money-hover darker-gray-hover 
                            h2point25-m
                            h2point25p-l
                            "
                        >
                            <AddIcon />
                            <div className="pl2">Add Account</div>
                        </div>
                    </div>
                </div>
                : ""
            }
        </div>
    )
}

export default MenuCategory;