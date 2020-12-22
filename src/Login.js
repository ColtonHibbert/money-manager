import React, {useState, useEffect} from "react";

function Login() {
    const [email, setEmail ] = useState(null);
    const [password, setPassword ] = useState(null);

    const sendLogin = () => {
        fetch(
            "http://localhost:3001/login",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }
        )
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return(
        <div>
            <input type="text" onChange={(event) => setEmail(event.target.value)}/>
            <input type="text" onChange={(event) => setPassword(event.target.value)}/>
            <button onClick={() => sendLogin()}>Submit Login</button>
        </div>
    )
}

export default Login;