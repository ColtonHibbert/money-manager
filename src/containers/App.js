import React from "react";
import "redux";
import SignUp from "./SignUp.js";
import Login from "./Login.js";
import Home from "../components/Home.js";
import Accounts from "../components/Accounts.js";
import "tachyons";
import Transactions from "../components/Transactions.js";
import {
  setRoute,
  setUser,
  setAccounts,
  setTransactions
} from "../services/actions.js";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    route: state.route,
    user: state.user,
    accounts: state.accounts,
    transactions: state.transactions
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setRoute: (value) => dispatch(setRoute(value)),
    setUser: (value) => dispatch(setUser(value)),
    setAccounts: (value) => dispatch(setAccounts(value)),
    setTransactions: (value) => dispatch(setTransactions(value))
  }
}

function App(props) {
  const { route, setRoute } = props;

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
        <SignUp  {...props} />
        : ""
      }
      {
        (route === "accounts") ?
        <Accounts  {...props} />
        : ""
      }
      {
        (route === "transactions") ?
        <Transactions {...props} />
        : ""
      }
      <button onClick={() => setRoute("home")}>Home Page</button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps )(App);
