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
        user,
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
                headers: { 
                    "Content-Type": "application/json",
                    "CSRF-Token": user.csrf
                },
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
        <div className="
        vw-100 min-vh-100 money-background flex flex-row justify-center 
        ">
            <div className="
            flex flex-column w-90 items-center mv3 br2 
            flex-column-ns w-80-ns
            flex-column-m w-80-m
            flex-row-l w-80-l
            ">
                <div className="
                w-100 flex white ph2 pt2 pb5 flex-column bg-money-color-see-through tc
                vh-75-l justify-center-l
                ">
                    <h1>Money Manager</h1>
                    <div>Money is a good servant but a terrible master. Get in control of your finances and sign up today!</div>
                </div>
                <div className="
                w-100 flex flex-column pv3 bg-dark-color ph3
                vh-75-l 
                ">
                    <div className="
                    white 
                    mb2-l mt4-l
                    ">Try Money Manage with a demo account!
                    </div>
                    <div className="flex flex-row mv3">
                        <div className="w4 h3 flex justify-center items-center mv1 mh1 ph1 pv2 bg-money-color white br1 tc pointer grow">Personal</div>
                        <div className="w4 h3 flex justify-center items-center mv1 mh1 ph1 pv2 bg-money-color white br1 tc pointer grow">Household Member</div>
                        <div className="w4 h3 flex justify-center items-center mv1 mh1 ph1 pv2 bg-money-color white br1 tc pointer grow">Household Owner</div> 
                    </div>
                    <hr className="w-90"/>
                    <div className="
                    white mv2
                    mv3-l
                    ">Log in to your Money Manage Account
                    </div>
                    <div className="flex flex-column pv2">
                        <label className="pl1 white">Email:</label>
                        <input type="text" onChange={(event) => setLoginEmail(event.target.value)}  className="br2"/>
                    </div>
                    <div className="flex flex-column pv2">
                        <label className="pl1 white">Password:</label>
                        <input type="text" onChange={(event) => setLoginPassword(event.target.value)}  className="br2"/>
                    </div>
                    {
                        (loginErrors.loginError) ? 
                        <div className="white">
                            {loginErrors.loginErrorMessage}
                        </div>
                        : ""
                    }
                    <div className="flex flex-row items-center">
                        <div className="white pr2 mt2 mb1">Remember Log in?</div>
                        <input type="checkbox" className="flex mt2"></input>
                    </div>
                    <div onClick={() => sendLogin()} className="width-60-px ph1 pv2 mv3 bg-money-color br2 tc white pointer grow">Log in</div>   
                    <div className="money-color mt3 mb1 pointer underline-hover">Reset Password?</div>
                    <div className="flex flex-row mb3">
                        <div className="white">Don't have an account?</div>
                        <div onClick={() => setRoute("signup")} className="pl1 money-color pointer underline-hover">Sign up!</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);