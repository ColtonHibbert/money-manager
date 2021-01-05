import React, {useState, useEffect} from "react";

function Transactions(props) {
    const { user, setRoute } = props;
    
    const [ transactions , setTransactions ] = useState(null);

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
            <div>{user.first_name}</div>
            <div>
            {
                (transactions !== null) ? transactions.map(transaction => {
                    return (
                        <div key={transaction.transaction_id}>
                            <div>{transaction.transaction_id, transaction.amount, transaction.date, transaction.memo_note}</div>
                        </div>
                    )
                }) : ""
            }    
            </div>
            <button onClick={() => setRoute("home")}>Home</button>
            <button onClick={() => getTransactions()}>Get Transactions</button>
        </div>
    );

}

export default Transactions;
