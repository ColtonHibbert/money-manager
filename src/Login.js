import { useState } from "react";
import React, { useState, useEffect } from "react";

function Login() {

    
    const [email, setEmail ] = useState(null);
    const [password, setPassword ]  = useState(null);

    const sendLogin = fetch(
        '/login',
        
    )
    return (
        <div>
            <input type="text" onchange={(event) => setEmail(event.target.value)}/>
            <input type="text" onchange={(event) => setPassword(event.target.value)}/>
            <button>submit</button>
        </div>
    )
}

export default Login;