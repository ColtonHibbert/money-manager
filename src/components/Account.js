import React from "react";

function Account(props) {
    const { account } = props;
    return(
        <div>
            account
            {account.accountName}
        </div>
    )
}

export default Account;