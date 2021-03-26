import React from "react";
import { toast } from "react-toastify";

function DeleteAccount(props) {

    const {
        individualAccount,
        setIndividualAccountsDeleteAccountDisplay,
        setIndividualAccountsDeleteAccountTextValidate,
        setIndividualAccountsDeleteAccountConfirmation,
        user
    } = props;

    const submitDeleteAccount = () => {
         
        if(individualAccount.deleteAccounttextValidate !== "CONFIRM") {
            return;
        }
        
        fetch(
            "http://localhost:3001/deleteindividualaccount",
            {
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                    "CSRF-Token":user.csrf
                },
                body: JSON.stringify({
                    accountId: individualAccount.accountId,
                }),
                credentials:"include"
            }
        )
        .then(res => res.json())
        .then(data => {
            if(data.error) {
                toast.error("There was an error deleting the account.")
            }
            if(!data.error) {
                console.log(data)
                setIndividualAccountsDeleteAccountConfirmation(individualAccount.accountId);
                toast.success("Account Deleted Successfully.")
            }

        })
    }

    return (
        <div className="w-90 flex flex-column bg-custom-lighter-gray custom-gray
        w-90-m
        w-50-l mh3-l
        ">
            <div className="w-100 flex flex-row justify-between items-center ph3 pv1 mv1 bb-thin-gray">
                <div className="f3">Delete Account</div>
                <div className="f3 pointer"
                onClick={() => setIndividualAccountsDeleteAccountDisplay(individualAccount.accountId, false)}
                >{String.fromCharCode('0x2716')}
                </div>
            </div>
            <div className="w-100 flex flex-column ph3 pv1 mv1 bb-thin-gray">
                <div className="f5 mb2">Type CONFIRM and then click the delete button to delete the account.</div>
                <input type="text" 
                className="input-reset h2 bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b
                "
                placeholder={"CONFIRM"}
                onInput={(event) => setIndividualAccountsDeleteAccountTextValidate(individualAccount.accountId, event.target.value)}
                ></input>
            </div>
            
            
            <div className="flex justify-end pr4">
                <div className="w4 h2 flex flex-row items-center justify-center mv2 bg-red br2 white pointer grow"
                onClick={() => submitDeleteAccount()}
                >
                    Delete
                </div>
            </div>
        </div>
    )
}

export default DeleteAccount;