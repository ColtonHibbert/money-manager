import React, { useState, useEffect }from "react";
import SignUp from "./SignUp.js";
import Login from "./Login.js";
import Home from "./Home.js";
import Accounts from "./Accounts.js";
import Transactions from "./Transactions.js";
import { useSelector } from "react-redux";

function App() {

  //const [route, setRoute ] = useState("home");
  //const [user, setUser ] = useState("");
  
  const route = useSelector((state) => state.route );

  return (
    <div className="App">
      {
        //(route === "home") ? <Home user={user} setRoute={setRoute} /> : ""
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

export default App;
