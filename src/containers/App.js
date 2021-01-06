import React, { useState, useEffect }from "react";
import SignUp from "../components/SignUp.js";
import Login from "../components/Login.js";
import Home from "../components/Home.js";
import Accounts from "../components/Accounts.js";
import Transactions from "../components/Transactions.js";
import {
  setRoute,
  setUser
} from "../services/actions.js";
import { connect } from "react-redux";

function App() {

  const mapStateToProps = (state) => {
    return({
      route: state.route,
      user: state.user
    })
  }

  const mapDispatchToProps = (dispatch) => {
    return({
      setRoute: (value) => dispatch(setRoute(value)),
      setUser: (value) => dispatch(setUser(value))
    }) 
  }

  return (
    <div className="App">
      {
        (route === "home") ? <Home /> : ""
      }
      {
        (route === "login") ? 
        <Login />
        : ""
      }
      {
        (route === "signup") ? 
        <SignUp  />
        : ""
      }
      {
        (route === "accounts") ?
          <div>
            <Accounts  />
          </div> 
          : ""
      }
      {
        (route === "transactions") ?
        <Transactions />
        : ""
      }
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps )(App);
