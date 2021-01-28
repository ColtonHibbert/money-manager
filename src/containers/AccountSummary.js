import React from "react";

function AccountSummary(props) {
    const { user, accounts, setAccounts } = props;

    const getAccounts = () => fetch(
        "http://localhost:3001/accounts",
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
            <div>Account Summary</div>
            <div>{user.firstName}</div>
            <div>
            {
                (accounts !== null) ? accounts.map(account => {
                    console.log(account);
                    return (
                        <div key={account.accountId} >
                            <div>{account.accountId}</div>
                            <div>{account.accountName}</div>
                            <div>{account.currentBalance}</div>
                        </div>
                    )
                }) : ""
            }
            </div>
            <button onClick={ () => getAccounts()}>Get Accounts</button>
        </div>
    );
}

export default AccountSummary;