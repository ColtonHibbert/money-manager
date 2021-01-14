import React, { useEffect } from "react";
import "redux";
import "tachyons";
import { connect } from "react-redux";
import SignUp from "./SignUp.js";
import Login from "./Login.js";
import Logout from '../components/Logout.js';
import Home from "../components/Home.js";
import Accounts from "../components/Accounts.js";
import Transactions from "../components/Transactions.js";
import {
  setRoute,
  setUser,
  setAccounts,
  setTransactions,
  setCSRF,
  resetState
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
    setCSRF: (value) => dispatch(setCSRF(value)),
    resetState: () => dispatch(resetState())
  }
}

function App(props) {
  const { route, setRoute, setCSRF, user, setUser, resetState } = props;

  const loadUser = () => {
      return fetch(
        "http://localhost:3001/loaduser",
        {
            method: "GET",
            credentials : "include"
        }
    )
    .then(res => res.json())
    .then(data => {
        if(data.error) {
            setRoute("login");
            
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
    return fetch(
      "http://localhost:3001/csrf", 
      {
        method: "GET",
        credentials: "include"
      })
      .then(data => data.json())
      .then(data => {
        if(!data.error) {
          setCSRF(data.csrf);
        }
        if(data.error) {
          console.log(data.error);
        }
      })
      .catch(err => {
        console.log("Error retrieving CSRF Token.")
        setRoute("login");
      })
  }

  useEffect( () => {
    async function loadInitialData() {
      await getCsrf();
      await loadUser();
    }
    loadInitialData();
  }, []);

  return (
    <div className="App">
      {
        (route === "home") ? 
        <Home {...props} />
        : ""
      }
      {
        (route === "login") ? 
        <Login {...props} />
        : ""
      }
      {
        (route === "logout") ?
        <Logout {...props} />
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
