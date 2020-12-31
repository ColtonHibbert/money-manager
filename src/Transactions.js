import React, {useState, useEffect} from "react";

function Transactions(props) {
    const { user, setRoute } = props;

    return (
        <div>
            <div>{user.user_name, userfirst_name}</div>
            <button onClick={() => setRoute("home")}>Home</button>
        </div>
    );

}

export default Transactions;
