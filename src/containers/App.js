import React from "react";
import "redux";
import SignUp from "./SignUp.js";
import Login from "./Login.js";
import Home from "../components/Home.js";
import Accounts from "../components/Accounts.js";
//import Transactions from "../components/Transactions.js";
import {
  setRoute,
  setUser,
  setAccounts
} from "../services/actions.js";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    route: state.route,
    user: state.user,
    login: {
      loginEmail: state.login.loginEmail,
      loginPassword: state.login.loginPassword
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setRoute: (value) => dispatch(setRoute(value)),
    setUser: (value) => dispatch(setUser(value)),
    setAccounts: (value) => dispatch(setAccounts(value))
  }
}

function App(props) {
  const { route } = props;

  return (
    <div className="App">
      {
        (props.route === "home") ? 
        <Home {...props} />
        : ""
      }
      {
        (props.route === "login") ? 
        <Login {...props} />
        : ""
      }
      {
        (route === "signup") ? 
        <SignUp  />
        : ""
      }
      {
        (route === "accounts") ?
        <Accounts  />
        : ""
      }
      {
        //(route === "transactions") ?
        //<Transactions />
        //: ""
      }
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps )(App);
