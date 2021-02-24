import React from "react";
import { toast } from "react-toastify";

function EditAccount(props) {

    const {
        individualAccount,
        setIndividualAccountsEditAccount,
        setIndividualAccountsEditAccountName,
        setIndividualAccountsEditAccountTypeId,
        setIndividualAccountsEditAccountLowAlertBalance,
        setIndividualAccountsEditAccountError,
        setIndividualAccountsEditAccountErrorMessage,
        setIndividualAccountsUpdateAccount,
        user
    } = props;

    const submitEditAccount = () => {
         
        const accountPost = formatEditAccountData();

        fetch(
            "http://localhost:3001/editindividualaccount",
            {
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                    "CSRF-Token":user.csrf
                },
                body: JSON.stringify({
                    accountId: accountPost.accountId,
                    editAccountName: accountPost.editAccountName,
                    editAccountTypeId: accountPost.editAccountTypeId,
                    editAccountLowAlertBalance: accountPost.editAccountLowAlertBalance
                }),
                credentials:"include"
            }
        )
        .then(res => res.json())
        .then(data => {
            if(data.error) {
                setIndividualAccountsEditAccountError(individualAccount.accountId, true);
                setIndividualAccountsEditAccountErrorMessage(individualAccount.accountId, data.error);
            }
            if(!data.error) {
                setIndividualAccountsEditAccountError(individualAccount.accountId, false);
                setIndividualAccountsEditAccountErrorMessage(individualAccount.accountId, "");
                setIndividualAccountsUpdateAccount(individualAccount.accountId, data.updatedAccountResponse);
                toast.success("Account Updated.")
            }

        })
    }

    const formatEditAccountData = () => {
        const editAccountData = {};

        if(individualAccount.accountName !== individualAccount.editAccountName && individualAccount.editAccountName !== "") {
            editAccountData.editAccountName = individualAccount.editAccountName;
        } else {
            editAccountData.editAccountName = individualAccount.accountName;
        }

        if(individualAccount.accountTypeId !== individualAccount.editAccountTypeId && individualAccount.editAccountTypeId !== 0) {
            editAccountData.editAccountTypeId = individualAccount.editAccountTypeId;
        } else {
            editAccountData.editAccountTypeId = individualAccount.accountTypeId;
        }

        if(individualAccount.lowAlertBalance !== individualAccount.editAccountLowAlertBalance) {
            editAccountData.editAccountLowAlertBalance = individualAccount.editAccountLowAlertBalance;
        } else {
            editAccountData.editAccountLowAlertBalance = individualAccount.lowAlertBalance;
        }
        editAccountData.accountId = individualAccount.accountId;

        console.log(editAccountData)
        return editAccountData;

    }

    return (
        <div className="w-90 flex flex-column bg-custom-lighter-gray custom-gray
        w-90-m
        w-50-l mh3-l
        ">
            <div className="w-100 flex flex-row justify-between items-center ph3 pv1 mv1 bb-thin-gray">
                <div className="f3">Edit Account</div>
                <div className="f3 pointer"
                onClick={() => setIndividualAccountsEditAccount(individualAccount.accountId, false)}
                >{String.fromCharCode('0x2716')}
                </div>
            </div>
            <div className="w-100 flex flex-row items-center ph3 pv1 mv1 bb-thin-gray">
                <div className="w-30 h2 f5 ">Account Name</div>
                <input type="text" 
                className="input-reset w-70 h2 mh3 bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b
                "
                placeholder={individualAccount.accountName}
                onInput={(event) => setIndividualAccountsEditAccountName(individualAccount.accountId, event.target.value)}
                ></input>
            </div>
            <div className="w-100 flex flex-row items-center ph3 pv1 mv1 bb-thin-gray">
                <div className="w-30 h2 f5 ">Account Type</div>
                <select className="input-reset w-70 h2 mh3 bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b"
                placeholder={individualAccount.accountTypeId}
                onChange={(event) => setIndividualAccountsEditAccountTypeId(individualAccount.accountId, event.target.value)}
                >
                    <option value="">--</option>
                    <option value="1">Checking</option>
                    <option value="2">Savings</option>
                    <option value="3">Debt</option>
                </select>
            </div>
            <div className="w-100 flex flex-row items-center ph3 pv1 mv1 bb-thin-gray">
                <div className="w-30 h2 f5 ">Low Balance Alert</div>
                <input type="number" 
                className="w-70 h2 input-reset mh3 bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b
                "
                placeholder={individualAccount.lowAlertBalance.toFixed(2)}
                onInput={(event) => setIndividualAccountsEditAccountLowAlertBalance(individualAccount.accountId, event.target.value)}
                ></input>
            </div>
            <div className="flex justify-end pr4">
                <div className="w4 h2 flex flex-row items-center justify-center mv2 bg-money-color br2 white pointer grow"
                onClick={() => submitEditAccount()}
                >
                    Update
                </div>
            </div>
        </div>
    )
}

export default EditAccount;