import React from "react";
import "redux";
import { connect } from "react-redux";
import {
    setSignUpFirstName,
    setSignUpLastName,
    setSignUpEmail,
    setSignUpPassword,
    setSignUpConfirmPassword,
    setSignUpError,
    setSignUpErrorMessage,
    displaySignUpError,
    setSignUpRememberMe
} from "../services/actions.js";

const mapStateToProps = (state) => {
    return {
        signUp: state.signUp,
        signUpErrors: state.signUpErrors,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSignUpFirstName: (value) => dispatch(setSignUpFirstName(value)),
        setSignUpLastName: (value) => dispatch(setSignUpLastName(value)),
        setSignUpEmail: (value) => dispatch(setSignUpEmail(value)),
        setSignUpPassword: (value) => dispatch(setSignUpPassword(value)),
        setSignUpConfirmPassword: (value) => dispatch(setSignUpConfirmPassword(value)),
        setSignUpError: (value) => dispatch(setSignUpError(value)),
        setSignUpErrorMessage: (value) => dispatch(setSignUpErrorMessage(value)),
        displaySignUpError: (value) => dispatch(displaySignUpError(value)),
        setSignUpRememberMe: () => dispatch(setSignUpRememberMe())
    }
}

function SignUp(props) {
    const { 
        user,
        signUp,
        signUpErrors,
        setUser, 
        setRoute, 
        setSignUpFirstName,
        setSignUpLastName,
        setSignUpEmail,
        setSignUpPassword,
        setSignUpConfirmPassword,
        setSignUpError,
        setSignUpErrorMessage,
        displaySignUpError,
        setSignUpRememberMe
    } = props;

    const sendSignUp = () => { 
        fetch(
            "http://localhost:3001/signup",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "CSRF-TOKEN":  user.csrf
                },
                body: JSON.stringify({
                    firstName: signUp.signUpFirstName,
                    lastName: signUp.signUpLastName,
                    email: signUp.signUpEmail,
                    password: signUp.signUpPassword
                }),
                credentials: "include"
            }
        )
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.error) {
                setSignUpError(true);
                setSignUpErrorMessage(data.error);
                displaySignUpError(true);
            }
            if(!data.error) {
                setSignUpError(false);
                setSignUpErrorMessage("");
                displaySignUpError(false);
                setUser(data);
                setRoute("home");
            } 
        })
        .catch(err => {
            setSignUpError(true);
            setSignUpErrorMessage("Error Signing Up, please try again.");
            displaySignUpError(true);
        })

    }

    return (
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
                    ">Sign up for a Money Manage account!
                    </div>
                    <hr className="w-90"/>
                    <div className="flex flex-column pv2">
                        <label className="pl1 white">First Name:</label>
                        <input type="text" onChange={(event) => setSignUpFirstName(event.target.value)}  className="br2"/>
                    </div>
                    <div className="flex flex-column pv2">
                        <label className="pl1 white">Last Name:</label>
                        <input type="text" onChange={(event) => setSignUpLastName(event.target.value)}  className="br2"/>
                    </div>
                    <div className="flex flex-column pv2">
                        <label className="pl1 white">Email:</label>
                        <input type="text" onChange={(event) => setSignUpEmail(event.target.value)}  className="br2"/>
                    </div>
                    <div className="flex flex-column pv2">
                        <label className="pl1 white">Password:</label>
                        <input type="text" onChange={(event) => setSignUpPassword(event.target.value)}  className="br2"/>
                    </div>
                    <div className="flex flex-column pv2">
                        <label className="pl1 white">Confirm Password:</label>
                        <input type="text" onChange={(event) => setSignUpConfirmPassword(event.target.value)}  className="br2"/>
                    </div>
                    {
                        (signUpErrors.signUpError) ? 
                        <div>
                            {signUpErrors.signUpErrorMessage}
                        </div>
                        : ""
                    }
                    <div className="flex flex-row items-center">
                        <div className="white pr2 mt2 mb1">Remember Sign Up?</div>
                        <input type="checkbox" onClick={() => setSignUpRememberMe()} className="flex mt2"></input>
                    </div>
                    <div onClick={() => sendSignUp()} className="width-80-px ph1 pv2 mv3 bg-money-color br2 tc white pointer grow">Sign Up</div>   
                    <div className="flex flex-row mb3">
                        <div className="white">Already have an account?</div>
                        <div onClick={() => setRoute("login")} className="pl1 money-color pointer underline-hover">Log in</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
