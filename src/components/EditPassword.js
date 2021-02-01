import React from "react";

function EditPassword(props) {

    
    const {
        setNavigationEditPassword,
        setProfilePassword,
        setProfileConfirmPassword,
        user,
    } = props;

    
    const savePassword = () => {
        console.log("save password");
    }
 /*
    const handlePassword = () => {

        const passwordRegex = /.{8,72}/;
        const validPassword = signUp.signUpPassword.search(passwordRegex);

        if(validPassword !== -1) {
            setSignUpPasswordError(false);
        }
        if(validPassword === -1) {
            setSignUpPasswordError(true);
        }

        if(signUp.signUpPassword === signUp.signUpConfirmPassword) {
            console.log("pass and confirm pass match, error false")
            setSignUpPasswordsMatchError(false);
        }
        if(signUp.signUpPassword !== signUp.signUpConfirmPassword) {
            setSignUpPasswordsMatchError(true);
        }

    }

    const handleConfirmPassword = () => {

        const passwordRegex = /.{8,72}/;
        const validPassword = signUp.signUpConfirmPassword.search(passwordRegex);

        if(validPassword !== -1) {
            setSignUpConfirmPasswordError(false);
        }
        if(validPassword === -1) {
            setSignUpConfirmPasswordError(true);
        }

        if(signUp.signUpPassword === signUp.signUpConfirmPassword) {
            console.log("pass and confirm pass match, error false")
            setSignUpPasswordsMatchError(false);
        }
        if(signUp.signUpPassword !== signUp.signUpConfirmPassword) {
            setSignUpPasswordsMatchError(true);
        }
    }
    */

    return (
        <div className="w-100 flex flex-column mt4
        w-50-l mt0-l ml2-l
        ">
            <div className="w-100 h2 flex flex-row items-center pl3 bg-custom-darker-gray border-thin-gray custom-gray">Edit Password</div>
            <div className="w-100 h5 flex flex-column justify-center bg-custom-lighter-gray border-thin-gray custom-gray">
                <div className="pl3 f5 custom-gray">New Password:</div>
                <input type="text" 
                    className="input-reset mh3 mt1 bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b
                    w-50-m
                    "
                    onInput={(event) => setProfilePassword(event.target.value)}
                >
                </input>
                <div className="pl3 f5 custom-gray mt2">Confirm Password:</div>
                <input type="text" 
                    className="input-reset mh3 mt1 bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b
                    w-50-m
                    "
                    onInput={(event) => setProfileConfirmPassword(event.target.value)}
                >
                </input>
                <div 
                className="flex flex-row justify-between"
                >
                    <div 
                        className="
                        w3 h2 flex justify-center items-center ml3 mv3 pa2 br2 white bg-blue pointer grow
                        "
                        onClick={() => savePassword()}
                    >
                        Save
                    </div>
                    <div
                        className="w3 h2 flex justify-center items-center mr3 mv3 pa2 br2 white bg-red pointer grow"
                        onClick={() => setNavigationEditPassword(false)}
                    >
                        Cancel
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default EditPassword;