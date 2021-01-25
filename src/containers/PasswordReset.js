import React from "react";
import { connect } from "react-redux";
import { 
    setPasswordResetPassword,
    setPasswordResetConfirmPassword,
    setPasswordResetPasswordError,
    setPasswordResetConfirmPasswordError,
    setPasswordResetPasswordsMatchError,
    setPasswordResetError,
    setPasswordResetErrorMessage, setUser
} from "../services/actions";


const mapStateToProps = (state) => {
    return {
        passwordReset: state.passwordReset,
        passwordResetErrors: state.passwordResetErrors
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPasswordResetPassword: (value) => dispatch(setPasswordResetPassword(value)),
        setPasswordResetConfirmPassword: (value) => dispatch(setPasswordResetConfirmPassword(value)),
        setPasswordResetPasswordError: (value) => dispatch(setPasswordResetPasswordError(value)),
        setPasswordResetConfirmPasswordError: (value) => dispatch(setPasswordResetConfirmPasswordError(value)),
        setPasswordResetPasswordsMatchError: (value) => dispatch(setPasswordResetPasswordsMatchError(value)),
        setPasswordResetError: (value) => dispatch(setPasswordResetError(value)),
        setPasswordResetErrorMessage: (value) => dispatch(setPasswordResetErrorMessage(value))
    }
}



function PasswordReset(props) {

    const {
    user,
    passwordReset,
    passwordResetErrors,
    setRoute,
    setPasswordResetPassword,
    setPasswordResetConfirmPassword,
    setPasswordResetPasswordError,
    setPasswordResetConfirmPasswordError,
    setPasswordResetPasswordsMatchError,
    setPasswordResetError,
    setPasswordResetErrorMessage
    } = props;

    const sendLink = () => {
        if(passwordResetError === false && passwordResetPasswordError === false && passwordResetConfirmPasswordError === false) {
            fetch(
                "http:/localhost:3000/passwordreset",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "CSRF-Token": user.csrf
                    },
                    body: JSON.stringify({
                        password: passwordReset.passwordResetPassword,
                        confirmPassword: passwordReset.passwordResetConfirmPassword,
                        token: passwordReset.passwordResetToken
                    }),
                    credentials: "include"
                }
            )
            .then(res => res.json())
            .then(data => {
                if(data.error) {
                    setPasswordResetError(true);
                    setPasswordResetErrorMessage(data.error);
                }
                if(!data.error) {
                    setPasswordResetError(false);
                    setPasswordResetErrorMessage("");
                    setRoute("home");
                    setUser(data);
                    //toaster notification after go to home
                }
            })
            .catch(err => {

            })
        }
    }

    const handlePassword = () => {

        const passwordRegex = /.{8,72}/;
        const validPassword = passwordReset.passwordResetPassword.search(passwordRegex);

        if(validPassword !== -1) {
            setPasswordResetPasswordError(false);
        }
        if(validPassword === -1) {
            setPasswordResetPasswordError(true);
        }

        if(passwordReset.passwordResetPassword === passwordReset.passwordResetConfirmPassword) {
            console.log("pass and confirm pass match, error false")
            setPasswordResetPasswordsMatchError(false);
        }
        if(passwordReset.passwordResetPassword !== passwordReset.passwordResetConfirmPassword) {
            setPasswordResetPasswordsMatchError(true);
        }

    }

    const handleConfirmPassword = () => {

        const passwordRegex = /.{8,72}/;
        const validPassword = passwordReset.passwordResetConfirmPassword.search(passwordRegex);

        if(validPassword !== -1) {
            setPasswordResetConfirmPasswordError(false);
        }
        if(validPassword === -1) {
            setPasswordResetConfirmPasswordError(true);
        }

        if(passwordReset.passwordResetPassword === passwordReset.passwordResetConfirmPassword) {
            console.log("pass and confirm pass match, error false")
            setPasswordResetPasswordsMatchError(false);
        }
        if(passwordReset.passwordResetPassword !== passwordReset.passwordResetConfirmPassword) {
            setPasswordResetPasswordsMatchError(true);
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
                w-100 flex flex-column pv3 bg-dark-color ph3 justify-center
                vh-75-l 
                ">
                    <div className="
                    white f3 lh-copy
                    mb2-l mt4-l f2-l
                    ">Reset Your Password
                    </div>
                    <hr className="w-90"/>
                    <div className="flex flex-column pv2">
                        <label className="pl1 white">Password:</label>
                        <input type="text" 
                            onBlur={() => handlePassword()}
                            onInput={(event) => setPasswordResetPassword(event.target.value)}  
                            className="br2"
                        />
                    </div>
                    {
                        (passwordResetErrors.passwordResetPasswordError) ?
                        <div className="white">Please enter a password between 8 and 72 characters</div>
                        : ""
                    }
                    <div className="flex flex-column pv2">
                        <label className="pl1 white">Confirm Password:</label>
                        <input type="text" 
                            onBlur={() => handleConfirmPassword()}
                            onInput={(event) => setPasswordResetConfirmPassword(event.target.value)}  
                            className="br2"
                        />
                    </div>
                    {
                        (passwordResetErrors.passwordResetConfirmPasswordError) ?
                        <div className="white">Please enter a password between 8 and 72 characters</div>
                        : ""
                    }
                    {

                    }
                    {
                        (passwordResetErrors.passwordResetError) ? 
                        <div className="white">
                            {passwordResetErrors.passwordResetErrorMessage}
                        </div>
                        : ""
                    }
                    {// load home them toaster notification for password sucessfully changed
                        
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


export default connect(mapStateToProps, mapDispatchToProps)(PasswordReset);