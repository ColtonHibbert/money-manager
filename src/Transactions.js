import React, {useState, useEffect} from "react";

function Transactions(props) {
    const { user, setRoute } = props;

    return (
        <div>
            <div>{user}</div>
            <button onClick={setRoute("home")}>Home</button>
        </div>
    );

}

export default Transactions;
