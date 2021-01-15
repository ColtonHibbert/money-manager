import React from "react";
import { setPasswordResetEmail } from "../services/actions.js";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    passwordResetData: state.passwordResetData
}

const mapDispatchToProps = (dispatch) => {
    setPasswordResetEmail: (value) => dispatch(setPasswordResetEmail(value))
}

const PasswordReset = (props) => {
    const {setRoute, passwordReset, setPasswordResetEmail } = props;

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
                    ">Forgot Your Password?
                    </div>
                    <hr className="w-90"/>
                    <div className="flex flex-column pv2">
                        <label className="pl1 white">Email:</label>
                        <input type="text" onChange={(event) => setPasswordResetEmail(event.target.value)}  className="br2"/>
                    </div>
                    {
                        (passwordResetErrors.resetError) ? 
                        <div>
                            {passwordResetErrors.resetErrorMessage}
                        </div>
                        : ""
                    }
                    <div className="flex flex-row items-center">
                        <div className="white pr2 mt2 mb1">Remember Sign Up?</div>
                        <input type="checkbox" className="flex mt2"></input>
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

export default connect(mapStateToProps, mapDispatchToProps)(PasswordReset);