import React from "react";
import { connect }  from "react-redux";
import Header from "../components/Header.js";
import Menu from "../components/Menu.js";
import MobileMenu from "../components/MobileMenu.js";
import {
    setMobileMenu, 
    setNavigationAccountSelected, 
    toggleMobileMenu
} from "../services/actions.js";


const mapStateToProps = (state) => {
    return {
        navigation: state.navigation
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setNavigationAccountSelected: () => dispatch(setNavigationAccountSelected()),
        setMobileMenu: (value) => dispatch(setMobileMenu(value)),
        toggleMobileMenu: () => dispatch(toggleMobileMenu())
    }
}

function Home(props) {
    const { setRoute, user, navigation } = props;
    return (
        <div className="bg-custom-darker-gray min-vh-100">
            <Header {...props}></Header>
            {
                (navigation.mobileMenu) ?
                <MobileMenu {...props}></MobileMenu>
                : ""
            }
            <div>
                <Menu {...props}></Menu>
                <div className="">{user.firstName}</div>
                <button onClick={() => setRoute("login")}>Login</button>
                <button onClick={() => setRoute("signup")}>Sign up</button>
                <button onClick={() => setRoute("accounts")}>Accounts</button>
                <button onClick={() => setRoute("transactions")}>Transactions</button>
                <button onClick={() => setRoute("logout")}>Logout</button>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
  