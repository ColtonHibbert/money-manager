import React, {useState, useEffect } from "react";

function Home(props) {
    const { setRoute, user } = props;
    return (
        <div>
            <h1>Home Page</h1>
             <div>{user.first_name}</div>
             <button onClick={() => setRoute("login")}>Login/Signup</button>
             <button onClick={() => setRoute("accounts")}>Accounts</button>
             <button onClick={() => setRoute("transactions")}>Transactions</button>
        </div>
    )
}

export default Home;
  