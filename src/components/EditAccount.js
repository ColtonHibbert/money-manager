import React from "react";

function EditAccount(props) {
    return (
        <div className="flex bg-custom-lighter-gray w-100 w-50-l custom-gray">
            <div className="w-100 flex flex-row justify-between items-center ph3 pv1 mv1 bb-thin-gray">
                <div className="f3">Edit Account</div>
                <div className="f3 pointer">{String.fromCharCode('0x2716')}</div>
            </div>
        </div>
    )
}

export default EditAccount;