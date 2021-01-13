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
    displaySignUpError
} from "../services/actions.js";

const mapStateToProps = (state) => {
    return {
        signUp: state.signUp,
        signUpErrors: state.signUpErrors
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
        displaySignUpError: (value) => dispatch(displaySignUpError(value))
    }
}

function SignUp(props) {
    const { 
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
        displaySignUpError
    } = props;

    const sendSignUp = () => { 
        fetch(
            "http://localhost:3001/signup",
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
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
        <div className="flex flex-column">
            <div className="flex flex-row">
                <label>First Name: </label>
                <input type="text" onChange={(event) => setSignUpFirstName(event.target.value)} />
            </div>
            <div className="flex flex-row">
                <label>Last Name: </label>
                <input type="text" onChange={(event) => setSignUpLastName(event.target.value)} />
            </div>
            <div className="flex flex-row">
                <label>Email: </label>
                <input type="text" onChange={(event) => setSignUpEmail(event.target.value)} />
            </div>
            <div className="flex flex-row">
                <label>Password: </label>
                <input type="text" onChange={(event) => setSignUpPassword(event.target.value)} />
            </div>
            <div className="flex flex-row">
                <label>Confirm Password: </label>
                <input type="text" onChange={(event) => setSignUpConfirmPassword(event.target.value)} />
            </div>
            {
                (signUpErrors.signUpError) ? 
                <div>
                    {signUpErrors.signUpErrorMessage}
                </div>
                : ""
            }
            <button onClick={() => sendSignUp()}>Sign Up</button>
            <button onClick={() => setRoute("login")}>Go to Login</button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);