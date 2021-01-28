import React from "react";
import { connect }  from "react-redux";
import Header from "../components/Header.js";
import Menu from "../components/Menu.js";
import MobileMenu from "../components/MobileMenu.js";
import Dashboard from "./Dashboard.js";
import Profile from "./Profile.js";
import AccountSummary from "./AccountSummary.js";
import {
    setMobileMenu, 
    setNavigationAccountSelected, 
    toggleMobileMenu,
    setRouteHome
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
    const { setRoute, user, navigation, routeHome, setRouteHome } = props;
    return (
        <div className="bg-custom-darker-gray min-vh-100">
            <Header {...props}></Header>
            {
                (navigation.mobileMenu) ?
                <MobileMenu {...props}></MobileMenu>
                : ""
            }
            <div className="flex flex-row">
                <Menu {...props}></Menu>
                <div>
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
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
  