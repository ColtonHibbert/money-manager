import React from "react";

function IndividualAccount(props) {
    const { 
        individualAccount,
        categoriesAndItems
    } = props;
    return(
        <div>
            
            {individualAccount.accountName}
        </div>
    )
}

export default IndividualAccount;