import React from "react";

const Logout = (props) => {

    const {user, resetState } = props;

    const logoutUser = () => {
        fetch(
        "http://localhost:3001/logout", 
        {
            method: "POST",
            headers: {
                "CSRF-Token": user.csrf
            },
            credentials: "include"
        }
        )
        .then(data => data.json())
        .then(data => {
            console.log(data)
            if(data.logoutAttempt === "success") {
                resetState();
                window.location.reload();
            }
        })
        .catch(err => console.log("logout failed"))
    }

    return (
        <div>
            <button onClick={() => logoutUser()}>Submit Logout</button>
        </div>
    )
}

export default Logout;