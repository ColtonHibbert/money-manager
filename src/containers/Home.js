import React from "react";
import { connect }  from "react-redux";
import Header from "../components/Header.js";
import Menu from "../components/Menu.js";
import MobileMenu from "../components/MobileMenu.js";
import Dashboard from "./Dashboard.js";
import Profile from "./Profile.js";
import AccountSummary from "./AccountSummary.js";
import Account from "../components/Account.js";
import Transactions from "./Transactions.js";
import Lobby from "./Lobby.js";
import {
    setMobileMenu, 
    setNavigationAccountSelected, 
    toggleMobileMenu,
    setRouteHome,
} from "../services/actions.js";


const mapStateToProps = (state) => {
    return {
        navigation: state.navigation,
        routeHome: state.routeHome
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setNavigationAccountSelected: () => dispatch(setNavigationAccountSelected()),
        setMobileMenu: (value) => dispatch(setMobileMenu(value)),
        toggleMobileMenu: () => dispatch(toggleMobileMenu()),
        setRouteHome: (value) => dispatch(setRouteHome(value))
    }
}


function Home(props) {
    const { navigation, routeHome, accounts } = props;
    return (
        <div className="min-vh-100 w-100 bg-custom-darker-gray">
            <Header {...props}></Header>
            {
                (navigation.mobileMenu) ?
                <MobileMenu {...props}></MobileMenu>
                : ""
            }
            <div className="w-100 flex flex-row w-100">
                <Menu {...props}></Menu>
                <div className="w-100">
                {
                    (routeHome === "profile") ?
                    <Profile {...props} />
                    : ""
                }
                {
                    (routeHome === "dashboard") ?
                    <Dashboard {...props} />
                    : ""
                }
                {
                    (routeHome === "accountsummary") ?
                    <AccountSummary {...props} />
                    : ""
                }
                {
                    accounts.map(account => {
                        if(routeHome === account.accountId.toString()) {
                            return <Account {...props} account={account} /> 
                        } else {
                            return ""
                        }
                    })
                }
                {
                    (routeHome === "transactions") ? 
                    <Transactions {...props} />
                    : ""
                }
                {
                    (routeHome === "lobby") ?
                    <Lobby {...props}  />
                    : ""
                }
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
  