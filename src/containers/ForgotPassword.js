import React from "react";
import { 
    setForgotPasswordEmail, 
    setForgotPasswordError, 
    setForgotPasswordErrorMessage,
    setForgotPasswordEmailError,
    setForgotPasswordEmailSent
} from "../services/actions.js";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        forgotPassword: state.forgotPassword,
        forgotPasswordErrors: state.forgotPasswordErrors
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setForgotPasswordEmail: (value) => dispatch(setForgotPasswordEmail(value)),
        setForgotPasswordError: (value) => dispatch(setForgotPasswordError(value)),
        setForgotPasswordErrorMessage: (value) => dispatch(setForgotPasswordErrorMessage(value)),
        setForgotPasswordEmailError: (value) => dispatch(setForgotPasswordEmailError(value)),
        setForgotPasswordEmailSent: (value) => dispatch(setForgotPasswordEmailSent(value))
    }
}

const ForgotPassword = (props) => {
    const { 
        user, 
        setRoute, 
        forgotPassword, 
        forgotPasswordErrors, 
        setForgotPasswordEmail, 
        setForgotPasswordError,
        setForgotPasswordErrorMessage, 
        setForgotPasswordEmailError,
        setForgotPasswordEmailSent
    } = props;

    const sendLink = () => {
        if(forgotPasswordErrors.forgotPasswordEmailError === false) {
            fetch(
                "http://localhost:3001/forgotpassword",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "CSRF-TOKEN": user.csrf
                    },
                    body: JSON.stringify({
                        email: forgotPassword.forgotPasswordEmail
                    }),
                    credentials: "include"
                }
            )
            .then(res => res.json())
            .then(data => {
                if(data.error) {
                    setForgotPasswordError(true);
                    setForgotPasswordErrorMessage(data.error);
                }
                if(!data.error) {
                    setForgotPasswordError(false);
                    setForgotPasswordErrorMessage("");
                    setForgotPasswordEmailSent(true);
                }
            })
            .catch(err => {
               
            })
        }
    }

    const handleEmail = () => {

        const emailRegex = /@/;
        const validEmail = forgotPassword.forgotPasswordEmail.search(emailRegex);

        if(validEmail !== -1) {
            setForgotPasswordEmailError(false);
        }
        if(validEmail === -1) {
            setForgotPasswordEmailError(true);
        }
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
                w-100 flex flex-column pv3 bg-custom-lighter-gray ph3 justify-center
                vh-75-l 
                ">
                    <div className="
                    white f3 lh-copy
                    mb2-l mt4-l f2-l
                    ">Forgot Your Password?
                    </div>
                    <hr className="w-90"/>
                    <div className="flex flex-column pv2">
                        <label className="pl1 white">Email:</label>
                        <input type="text" 
                            onBlur={() => handleEmail()}
                            onInput={(event) => setForgotPasswordEmail(event.target.value)}  
                            className="br2"
                        />
                    </div>
                    {
                        (forgotPasswordErrors.forgotPasswordEmailError) ?
                        <div className="white">Please enter a valid email.</div>
                        : ""
                    }
                    {
                        (forgotPasswordErrors.forgotPasswordError) ? 
                        <div className="white">
                            {forgotPasswordErrors.forgotPasswordErrorMessage}
                        </div>
                        : ""
                    }
                    {
                        (forgotPassword.forgotPasswordEmailSent) ?
                            <div className="white">Email Successfully sent. Please click on the link sent to your email to reset your password.</div>
                        : ""
                    }
                    <div onClick={() => sendLink()} className="width-120-px ph1 pv2 mv3 bg-money-color br2 tc white pointer grow">Send Reset Link</div>   
                    <div className="flex flex-row mb3">
                        <div className="white">Remember your password?</div>
                        <div onClick={() => setRoute("login")} className="pl1 money-color pointer underline-hover">Log in</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);