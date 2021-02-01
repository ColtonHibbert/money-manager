import React from "react";
import { toast } from "react-toastify";

function EditPassword(props) {

    
    const {
        setNavigationEditPassword,
        setProfilePassword,
        setProfileConfirmPassword,
        setProfileErrorsPasswordError,
        setProfileErrorsConfirmPasswordError,
        setProfileErrorsPasswordsMatchError,
        setProfileErrorsPasswordConfirmationError,
        setProfileErrorsPasswordConfirmationErrorMessage,
        user,
        profile,
        profileErrors
    } = props;

    
    const savePassword = () => {
        if(
            profileErrors.passwordError === false 
            && profileErrors.confirmPasswordError === false
            && profileErrors.passwordsMatchError === false
            && profile.password !== ""
            && profile.confirmPassword !== ""
        ) {
            fetch(
                "http://localhost:3001/passwordedit", 
                {
                    method: "POST",
                    headers: {
                        "Content-Type":"application/json",
                        "CSRF-Token":user.csrf
                    },
                    body: JSON.stringify({
                        password: profile.password,
                        confirmPassword: profile.confirmPassword
                    }),
                    credentials:"include"
                })
                .then(res => res.json())
                .then(data => {
                    if(data.error) {
                        setProfileErrorsPasswordConfirmationError(true);
                        setProfileErrorsPasswordConfirmationErrorMessage(data.error);
                    }
                    if(!data.error) {
                        setProfileErrorsPasswordConfirmationError(false);
                        setProfileErrorsPasswordConfirmationErrorMessage("");
                        setProfilePassword("");
                        setProfileConfirmPassword("");
                        setNavigationEditPassword(false);
                        toast.success("Password updated.");
                    }
                })
        }
    }
 
    const handlePassword = () => {

        const passwordRegex = /.{8,72}/;
        const validPassword = profile.password.search(passwordRegex);

        if(validPassword !== -1) {
            setProfileErrorsPasswordError(false);
        }
        if(validPassword === -1) {
            setProfileErrorsPasswordError(true);
        }

        if(profile.password === profile.confirmPassword) {
            setProfileErrorsPasswordsMatchError(false);
        }
        if(profile.password !== profile.confirmPassword) {
            setProfileErrorsPasswordsMatchError(true);
        }

    }

    const handleConfirmPassword = () => {

        const passwordRegex = /.{8,72}/;
        const validPassword = profile.confirmPassword.search(passwordRegex);

        if(validPassword !== -1) {
            setProfileErrorsConfirmPasswordError(false);
        }
        if(validPassword === -1) {
            setProfileErrorsConfirmPasswordError(true);
        }
        if(profile.password === profile.confirmPassword) {
            setProfileErrorsPasswordsMatchError(false);
        }
        if(profile.password !== profile.confirmPassword) {
            setProfileErrorsPasswordsMatchError(true);
        }
        
    }
    

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
                    onBlur={() => handlePassword()}
                >
                </input>
                {
                    (profileErrors.passwordError) ?
                    <div className="red pl3">Please enter a password between 8 and 72 characters.</div>
                    : ""
                }
                <div className="pl3 f5 custom-gray mt2">Confirm Password:</div>
                <input type="text" 
                    className="input-reset mh3 mt1 bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b
                    w-50-m
                    "
                    onInput={(event) => setProfileConfirmPassword(event.target.value)}
                    onBlur={(event) => handleConfirmPassword()}
                >
                </input>
                {
                    (profileErrors.confirmPasswordError) ?
                    <div className="red pl3">Please enter a password between 8 and 72 characters.</div>
                    : ""
                }
                                {
                    (profileErrors.passwordsMatchError) ?
                    <div className="red pl3">Passwords must match.</div>
                    : ""
                }
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
                {
                    (profileErrors.passwordConfirmationError) ? 
                    <div className="red pl3">{profileErrors.passwordConfirmationErrorMessage}</div>
                    : ""
                }
            </div>
           
        </div>
    )
}

export default EditPassword;