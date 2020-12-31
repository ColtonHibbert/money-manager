import React, { useState, useEffect }from "react";
import "./App.css";
import SignUp from "./SignUp.js";
import Login from "./Login.js"

function App() {

  const [route, setRoute ] = useState("login");

  return (
    <div className="App">
        {
          (route === "login") ? 
          <div>
            <SignUp />
            <Login />
          </div>
          : ""
        }
        {
          (route === "accounts") ?
            <div>
              <Accounts />
            </div> 
            : ""
          
        }
        
    </div>
  );
}

export default App;
