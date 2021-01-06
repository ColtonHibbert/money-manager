import React, {useState, useEffect} from "react";

function Login(props) {
    const { user, setRoute } = props;

    //const [email, setEmail ] = useState(null);
    //const [password, setPassword ] = useState(null);
 
    const sendLogin = () => {
        fetch(
            "http://localhost:3001/login",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
                credentials : "include"
            }
        )
        .then(res => res.json())
        .then(data => {
            setUser(data);
            setRoute("home");
        })
        .catch(err => console.log(err))
    }

    return(
        <div>
            <input type="text" onChange={(event) => setEmail(event.target.value)}/>
            <input type="text" onChange={(event) => setPassword(event.target.value)}/>
            <button onClick={() => sendLogin()}>Submit Login</button>
            <div>{user.first_name}</div>
            <button onClick={() => setRoute("home")}>Home</button>
        </div>
    )
}

export default Login;