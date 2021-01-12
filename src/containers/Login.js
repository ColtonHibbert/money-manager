import React from "react";
import { connect } from "react-redux";
import "redux";
import { 
    setLoginEmail, 
    setLoginPassword,
    setLoginError,
    setLoginErrorMessage,
    displayLoginError
} from "../services/actions.js";

const mapStateToProps = (state) => {
    return {
        login: state.login,
        loginErrors: state.loginErrors
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        setLoginEmail: (value) => dispatch(setLoginEmail(value)),
        setLoginPassword: (value) => dispatch(setLoginPassword(value)),
        setLoginError: (value) => dispatch(setLoginError(value)),
        setLoginErrorMessage: (value) => dispatch(setLoginErrorMessage(value)),
        displayLoginError: (value) => dispatch(displayLoginError(value))
    }
}

function Login(props) {
    const { 
        setRoute, 
        setUser, 
        login,
        loginErrors, 
        setLoginEmail, 
        setLoginPassword,
        setLoginError,
        setLoginErrorMessage,
        displayLoginError
    } = props;
 
    const sendLogin = () => {
        fetch(
            "http://localhost:3001/login",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: login.loginEmail,
                    password: login.loginPassword
                }),
                credentials : "include"
            }
        )
        .then(res => res.json())
        .then(data => {
            if(data.error) {
                setLoginError(true);
                setLoginErrorMessage(data.error);
                displayLoginError(true);
            }
            if(!data.error) {
                setLoginError(false);
                setLoginErrorMessage("");
                displayLoginError(false)
                setUser(data);
                setRoute("home");
            }
            
        })
        .catch(err => console.log(err))
    }

    return(
        <div>
            <input type="text" onChange={(event) => setLoginEmail(event.target.value)}/>
            <input type="text" onChange={(event) => setLoginPassword(event.target.value)}/>
            {
                (loginErrors.loginError) ? 
                <div>
                    {loginErrors.loginErrorMessage}
                </div>
                : ""
            }
            <button onClick={() => sendLogin()}>Submit Login</button>
            <button onClick={() => setRoute("signup")}>Sign up</button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);