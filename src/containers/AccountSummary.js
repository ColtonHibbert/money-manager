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
            <div className="flex flex-column w-100 items-center">
                <div 
                className="
                    w-100 flex justify-center items-center bg-custom-lighter-gray money-color border-thin-gray 
                    h2 f4 pt1
                    h2-s f4-s
                    h2-ns f4-ns
                    h3-m f3-m
                    h3-l f3-l
                    "
                >Account Summary
                </div>
            </div>
            <div className="
                w-100 flex flex-row custom-gray justify-between mt3"
            >
                <div className="flex flex-row ml3">
                    <div className="mr1">Entries</div>
                    <div>dropdown</div>
                </div>
                <div className="flex flex-row mr3">
                    <div className="mr1">Search</div>
                    <input className="w4 input-reset bg-custom-lighter-gray border-custom-gray custom-gray form-line-active b"></input>
                </div>
            </div>
        </div>
    );
}

export default AccountSummary;

 /*{
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
            }*/