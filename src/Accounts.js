import React, {useState, useEffect}  from "react";

function Accounts(props) {
    const { user, setRoute } = props;

    const [accounts, setAccounts ] = useState(null);

    const getAccounts = () => fetch(
        "http://127.0.0.1:3001/accounts",
        {
            method: "GET",
            headers: {"Content-Type": "application/json"},
            credentials: "include"
        }
    )
    .then(res => res.json())
    .then(data => {
        setAccounts(data);
    })
    .catch(err => console.log(err))

    return (
        <div>
            <div>{user.first_name}</div>
            <button onClick={ () => setRoute("home")}>Home</button>
            <button onClick={ () => getAccounts()}>Get Accounts</button>
            {
                (accounts !== null) ? accounts.map(account => {
                    return (
                        <div key={account.account_id}>
                            <div>{account.account_id, account.account_name, account.account_balance }</div>
                        </div>
                    )
                }) : ""
            }
        </div>
    );
}

export default Accounts;