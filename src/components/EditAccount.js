import React from "react";

function EditAccount(props) {

    const {
        individualAccount
    } = props;

    return (
        <div className="flex flex-column bg-custom-lighter-gray w-100-s w-90-m w-50-l custom-gray">
            <div className="w-100 flex flex-row justify-between items-center ph3 pv1 mv1 bb-thin-gray">
                <div className="f3">Edit Account</div>
                <div className="f3 pointer">{String.fromCharCode('0x2716')}</div>
            </div>
            <div className="w-100 flex flex-row items-center ph3 pv1 mv1 bb-thin-gray">
                <div className="w-30 h2 f5 ">Account Name</div>
                <input type="text" 
                className="input-reset w-70 h2 mh3 bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b
                "
                placeholder={individualAccount.accountName}
                onInput={(event) => console.log("")}
                ></input>
            </div>
            <div className="w-100 flex flex-row items-center ph3 pv1 mv1 bb-thin-gray">
                <div className="w-30 h2 f5 ">Account Type</div>
                <select className="input-reset w-70 h2 mh3 bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b"
                value={individualAccount.accountTypeId}
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
                placeholder={individualAccount.lowAlertBalance}
                onInput={(event) => console.log("")}
                ></input>
            </div>
            <div className="flex justify-end pr4">
                <div className="w4 h2 flex flex-row items-center justify-center mv2 bg-money-color br2 white pointer grow">
                    Update
                </div>
            </div>
        </div>
    )
}

export default EditAccount;