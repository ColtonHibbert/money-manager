import React from "react";
import "redux";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        signup: state.signup
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSignUpFirstName: (value) => dispatch(),
        setSignUpLastName: (value) => dispatch(),
        setSignUpEmail: (value) => dispatch(),
        setSignUpPassword: (value) => dispatch(),
        setSignUpConfirmPassword: (value) => dispatch()
    }
}

function SignUp(props) {
    const { user, setUser, setRoute, signup } = props;

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
            <input type="text" onChange={(event) => setEmail(event.target.value)}/>
            <input type="text" onChange={(event) => setPassword(event.target.value)}/>
            <button onClick={() => sendSignUp()}>Sign Up</button>
        </div>
    )
}

export default SignUp;