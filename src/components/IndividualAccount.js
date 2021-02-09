import React from "react";

function IndividualAccount(props) {
    const { account } = props;
    return(
        <div>
            account
            {account.accountName}
        </div>
    )
}

export default IndividualAccount;