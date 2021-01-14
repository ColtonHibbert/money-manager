import React from "react";

const Logout = (props) => {

    const {user, resetState } = props;

    const logoutUser = () => {
        fetch(
        "http://localhost:3000/logout", 
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
            }
        })
        .catch(err => console.log("logout failed"))
    }

    return (
        <div>
            <button onClick={() => logoutUser()}></button>
        </div>
    )
}