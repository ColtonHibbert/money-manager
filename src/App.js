import React, { useState, useEffect }from "react";
import "./App.css";
import SignUp from "./SignUp.js";
import Login from "./Login.js";
import Home from "./Home.js";
import Accounts from "./Accounts.js";
import Transactions from "./Transactions.js";

function App() {

  const [route, setRoute ] = useState("home");
  const [user, setUser ] = useState("");
  return (
    <div className="App">
      {
        (route === "home") ? <Home user={user} setRoute={setRoute} /> : ""
      }
      {
        (route === "login") ? 
        <div>
          <SignUp user={user} setUser={setUser} setRoute={setRoute} />
          <Login user={user} setUser={setUser} setRoute={setRoute} />
        </div>
        : ""
      }
      {
        (route === "accounts") ?
          <div>
            <Accounts user={user} setRoute={setRoute} />
          </div> 
          : ""
      }
      {
        (route === "transactions") ?
        <Transactions user={user} setRoute={setRoute} />
        : ""
      }
    </div>
  );
}

export default App;
