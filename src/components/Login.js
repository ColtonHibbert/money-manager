import React from "react";
import { setLoginEmail, setLoginPassword } from "../services/actions.js";


function Login(props) {
    const { user, setRoute, setUser } = props;
 
    const sendLogin = () => {
        fetch(
            "http://localhost:3001/login",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: props.login.loginEmail,
                    password: props.login.loginPassword
                }),
                credentials : "include"
            }
        )
        .then(res => res.json())
        .then(data => {
            setUser(data);
            setRoute("home");
        })
        .catch(err => console.log(err))
    }

    return(
        <div>
            <input type="text" onChange={(event) => setLoginEmail(event.target.value)}/>
            <input type="text" onChange={(event) => setLoginPassword(event.target.value)}/>
            <button onClick={() => sendLogin()}>Submit Login</button>
            <div>{user.first_name}</div>
            <button onClick={() => setRoute("home")}>Home</button>
        </div>
    )
}

export default Login;