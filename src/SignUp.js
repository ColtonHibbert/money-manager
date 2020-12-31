import React, { useState, useEffect } from "react";

function SignUp(props) {
    const { user, setRoute, setUser } = props;
    
    const [email, setEmail ] = useState(null);
    const [password, setPassword ]  = useState(null);

    const sendSignUp = () => { 
        fetch(
            "http://localhost:3001/signup",
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    email: email,
                    password: password
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
            <div>{user.first_name}</div>
        </div>
    )
}

export default SignUp;