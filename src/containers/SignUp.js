import React from "react";
import "redux";
import { connect } from "react-redux";
import {
    setSignUpFirstName,
    setSignUpLastName,
    setSignUpEmail,
    setSignUpPassword,
    setSignUpConfirmPassword
} from "../services/actions.js";

const mapStateToProps = (state) => {
    return {
        signup: state.signup
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSignUpFirstName: (value) => dispatch(setSignUpFirstName(value)),
        setSignUpLastName: (value) => dispatch(setSignUpLastName(value)),
        setSignUpEmail: (value) => dispatch(setSignUpEmail(value)),
        setSignUpPassword: (value) => dispatch(setSignUpPassword(value)),
        setSignUpConfirmPassword: (value) => dispatch(setSignUpConfirmPassword(value))
    }
}

function SignUp(props) {
    const { 
        setUser, 
        setRoute, 
        signup,
        setSignUpFirstName,
        setSignUpLastName,
        setSignUpEmail,
        setSignUpPassword,
        setSignUpConfirmPassword
    } = props;

    const sendSignUp = () => { 
        fetch(
            "http://localhost:3001/signup",
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    email: signup.signupEmail,
                    password: signup.signupPassword
                })
            }
        )
        .then(res => res.json())
        .then(data => {
            if(data.error === "MISSING_EMAIL_OR_PASSWORD") {
                //setSignUpError(true);
                //displaySignUpError(true);
                //setSignUpErrorMessage("Missing Email or Password.")
            }
            if(data.error === "INVALID_PASSWORD") {
                //setSignUpError(true);
                //displaySignUpError(true);
                //setSignUpErrorMessage("Invalid Password. Your Email must be between 8 and 72 characters.")
            }
            if(data.error === "EMAIL_TAKEN") {
                //setSignUpError(true);
                //displaySignUpError(true);
                //setSignUpErrorMessage("Email is already in use. Please submit another email address.")
            }
            if(!data.error) {
                //setSignUpError(false);
                //displaySignUpError(false);
                //setSignUpErrorMessage("");
                setUser(data);
                setRoute("home");
            } 
        })
        .catch(err => {
            //setSignUpError(true);
            //displaySignUpError(true);
            //setSignUpErrorMessage("Error Signing Up, please try again.")
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
            <button onClick={() => sendSignUp()}>Sign Up</button>
            <button onClick={() => setRoute("login")}>Go to Login</button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);