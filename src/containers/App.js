import React, { useEffect } from "react";
import "redux";
import "tachyons";
import { connect } from "react-redux";
import SignUp from "./SignUp.js";
import Login from "./Login.js";
import Home from "../components/Home.js";
import Accounts from "../components/Accounts.js";
import Transactions from "../components/Transactions.js";
import {
  setRoute,
  setUser,
  setAccounts,
  setTransactions,
  setCSRF
} from "../services/actions.js";


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
    setTransactions: (value) => dispatch(setTransactions(value)),
    setCSRF: (value) => dispatch(setCSRF(value))
  }
}

function App(props) {
  const { route, setRoute, user, setCSRF } = props;

  const loadUser = () => {
      fetch(
        "http://localhost:3001/loaduser",
        {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials : "include"
        }
    )
    .then(res => res.json())
    .then(data => {
        if(data.error) {
            setRoute("login");
            console.log(data.error);
        }
        if(!data.error) {
            setUser(data);
            setRoute("home");
        }
        
    })
    .catch(err => {
      console.log("Error with retrieving user");
    }) 
  }

  const getCsrf = () => {
    fetch(
      "http://localhost:3000/", 
      {
        method: "GET",
        headers: { "Content-Type": "application/json"},
        credentials: "include"
      })
      .then(data => data.json())
      .then(data => {
        setCSRF(data);
      })
      .catch(err => {
        console.log("Error retrieving CSRF Token.")
        setRoute("login");
      })
  }
  useEffect(() => {
    getCsrf();
  }, []);
 
  useEffect(() => {
    loadUser();
  },[]); 



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
