import React from "react";
import { connect }  from "react-redux";
import {
    setMobileMenu, 
    toggleMobileMenu
} from "../services/actions.js";
import Header from "./Header.js";

const mapStateToProps = (state) => {
    return {
        navigation: state.navigation
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMobileMenu: (value) => dispatch(setMobileMenu(value)),
        toggleMobileMenu: () => dispatch(toggleMobileMenu())
    }
}

function Home(props) {
    const { setRoute, user } = props;

    return (
        <div className="bg-custom-darker-gray">
            <Header {...props}></Header>
            <h1 className="vh-100">Home Page</h1>
             <div>{user.firstName}</div>
             <button onClick={() => setRoute("login")}>Login</button>
             <button onClick={() => setRoute("signup")}>Sign up</button>
             <button onClick={() => setRoute("accounts")}>Accounts</button>
             <button onClick={() => setRoute("transactions")}>Transactions</button>
             <button onClick={() => setRoute("logout")}>Logout</button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
  