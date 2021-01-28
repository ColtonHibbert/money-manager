import React from "react";

function Transactions(props) {
    const { user, transactions, setTransactions } = props;

    const getTransactions = () => fetch(
        "http://localhost:3001/transactions",
        {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include"
        }
    )
    .then(res => res.json())
    .then(data => {
        setTransactions(data);
    })
    .catch(err => console.log(err))

    return (
        <div>
            <div>Transactions</div>
            <div>{user.firstName}</div>
            <div>
            {
                (transactions !== null) ? transactions.map(transaction => {
                    return (
                        <div key={transaction.transactionId}>
                            <div>{transaction.transactionId}</div>
                            <div>{transaction.amount}</div>
                            <div>{transaction.date}</div>
                            <div>{transaction.memoNote}</div>
                        </div>
                    )
                }) : ""
            }    
            </div> 
            <button onClick={() => getTransactions()}>Get Transactions</button>
        </div>
    );
}

export default Transactions;