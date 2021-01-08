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
    const { setUser, setRoute, signup } = props;

    const sendSignUp = () => { 
        fetch(
            "http://localhost:3001/signup",
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    email: signup.email,
                    password: signup.password
                })
            }
        )
        .then(res => res.json())
        .then(data => {
            setUser(data);
            setRoute("home");
        })
        .catch(err => console.log(err))

    }

    return (
        <div>
            <div >
                <input type="text" onChange={(event) => setSignUpFirstName(event.target.value)} />
                
            </div>
            <input type="text" onChange={(event) => setSignUpLastName(event.target.value)} />
            <input type="text" onChange={(event) => setPassword(event.target.value)} />
            <button onClick={() => sendSignUp()}>Sign Up</button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);