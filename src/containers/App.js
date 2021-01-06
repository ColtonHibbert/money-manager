import React, { useState, useEffect }from "react";
import SignUp from "../components/SignUp.js";
import Login from "../components/Login.js";
import Home from "../components/Home.js";
import Accounts from "../components/Accounts.js";
import Transactions from "../components/Transactions.js";
import {
  changeRoute
} from "../services/actions.js";
import { connect } from "react-redux";

function App() {

  //const [route, setRoute ] = useState("home");
  //const [user, setUser ] = useState("");
  
  //const route = useSelector((state) => state.route );

  const mapStateToProps = (state) => {
    return({
      route: state.route,
      user: state.user
    })
  }

  const mapDispatchToProps = (dispatch) => {
    return({
      changeRoute: () => dispatch(changeRoute("login"))
    }) 
  }

  return (
    <div className="App">
      {
        //(route === "home") ? <Home user={user} setRoute={setRoute} /> : ""
        //(route === "home") ? <Home /> : ""
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
