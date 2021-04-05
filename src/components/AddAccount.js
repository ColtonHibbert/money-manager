import React from "react";
import { toast } from "react-toastify";

function AddAccount(props) {

    const {
        setAddAccountAccountName,
        setAddAccountAccountTypeId,
        setAddAccountCurrentBalance,
        setAddAccountLowAlertBalance,
        setAddAccountError,
        setAddAccountConfirmation,
        addAccountAccountName,
        addAccountAccountTypeId, 
        addAccountCurrentBalance,
        addAccountLowAlertBalance,
        addAccountError,
        user
    } = props;


    function submitAddAccount() {
        if(addAccountAccountName === "" || addAccountAccountTypeId === 0 || addAccountCurrentBalance < 0 || addAccountLowAlertBalance < 0) {
            setAddAccountError(true);
            return
        }
        setAddAccountError(false);

        fetch(
            "http://localhost:3001/addindividualaccount",
            {
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                    "CSRF-Token": user.csrf
                },
                body: JSON.stringify({
                    accountName: addAccountAccountName,
                    accountTypeId: addAccountAccountTypeId,
                    currentBalance: addAccountCurrentBalance,
                    lowAlertBalance: addAccountLowAlertBalance,
                    userId: user.userId
                }),
                credentials: "include"
            }
        )
        .then(res => res.json())
        .then(data => {
            if(data.error) {
                toast.error("There was an error adding the account.")
            }
            if(!data.error) {
                setAddAccountConfirmation(data);
                toast.success("Account added successfully.")
            }
        })
    }

    return (
            <div className="w-100">    
                <div className="flex flex-column w-100 items-center bg-custom-darker-gray">
                    <div 
                        className="
                            w-100 flex justify-center items-center bg-custom-lighter-gray money-color border-thin-gray 
                            h2 f4 pt1
                            h2-s f4-s
                            h2-ns f4-ns
                            h3-m f3-m
                            h3-l f3-l
                            "
                        >Add Account
                    </div>
                   
                    <div className="w-90 flex flex-column bg-custom-darker-gray custom-gray mt3
                    w-100-l ph3-l
                    ">
                        <div className="bg-custom-lighter-gray">
                            <div className="w-100 flex flex-row justify-between items-center ph3 pv1 mv1 bb-thin-gray">
                                <div className="f3">Account Info</div>
                            </div>
                            <div className="w-100 flex flex-row items-center ph3 pv1 mv1 bb-thin-gray">
                                <div className="w-30 h2 f5 ">Account Name</div>
                                <input type="text" 
                                className="input-reset w-70 h2 mh3 bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b
                                "
                                onInput={(event) => setAddAccountAccountName(event.target.value)}
                                ></input>
                            </div>
                            <div className="w-100 flex flex-row items-center ph3 pv1 mv1 bb-thin-gray">
                                <div className="w-30 h2 f5 ">Account Type</div>
                                <select className="input-reset w-70 h2 mh3 bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b"
                                onChange={(event) => setAddAccountAccountTypeId(event.target.value)}
                                >
                                    <option value="0">--</option>
                                    <option value="1">Checking</option>
                                    <option value="2">Savings</option>
                                    <option value="3">Debt</option>
                                </select>
                            </div>
                            <div className="w-100 flex flex-row items-center ph3 pv1 mv1 bb-thin-gray">
                                <div className="w-30 h2 f5 ">Current Balance</div>
                                <input type="number" 
                                className="w-70 h2 input-reset mh3 bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b
                                "
                                onInput={(event) => setAddAccountCurrentBalance(event.target.value)}
                                ></input>
                            </div>
                            <div className="w-100 flex flex-row items-center ph3 pv1 mv1 bb-thin-gray">
                                <div className="w-30 h2 f5 ">Low Balance Alert</div>
                                <input type="number" 
                                className="w-70 h2 input-reset mh3 bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b
                                "
                                onInput={(event) => setAddAccountLowAlertBalance(event.target.value)}
                                ></input>
                            </div>
                            {
                                (addAccountError) ?
                                <div className="red">All fields must be filled out and balance figures cannot be negative.</div>
                                : ""
                            }
                            <div className="flex justify-end pr4">
                                <div className="w3 h2 flex flex-row items-center justify-center mv2 bg-money-color br2 white pointer grow"
                                //onClick={() => submitAddAccount()}
                                >
                                    Add
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
    )
}

export default AddAccount;