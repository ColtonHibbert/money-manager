import React from "react";

function EditEmail(props) {

    const {
        setNavigationEditEmail,
        setProfileEmail,
        profileErrors,
        setProfileErrorsEmailError,
        setProfileErrorsEmailConfirmationError,
        setProfileErrorsEmailConfirmationErrorMessage,
        setUserProfileEmail,
        user,
        profile
    } = props;

    const saveEmail = () => {
        if(profileErrors.emailError === false) {
            fetch(
                "http://localhost:3001/emailedit", 
                {
                    method: "POST",
                    headers: {
                        "Content-Type":"application/json",
                        "CSRF-Token":user.csrf
                    },
                    body: JSON.stringify({
                        email: profile.email
                    }),
                    credentials:"include"
                }
            )
            .then(res => res.json())
            .then(data => {
                if(data.error) {
                    setProfileErrorsEmailConfirmationError(true);
                    setProfileErrorsEmailConfirmationErrorMessage(data.error);
                }
                if(!data.error) {
                    setProfileErrorsEmailConfirmationError(false);
                    setProfileErrorsEmailConfirmationErrorMessage("");
                    setProfileEmail("")
                    setUserProfileEmail(data);
                    setNavigationEditEmail(false);
                    //toaster
                }
            })
        }
        
    }

    const handleEmail = () => {

        const emailRegex = /@/;
        const validEmail = profile.email.search(emailRegex);

        if(validEmail !== -1) {
            setProfileErrorsEmailError(false);
        }
        if(validEmail === -1) {
            setProfileErrorsEmailError(true);
        }
    }

    return (
        <div className="w-100 flex flex-column mt4
        w-50-l mt0-l ml2-l
        ">
            <div className="w-100 h2 flex flex-row items-center pl3 bg-custom-darker-gray border-thin-gray custom-gray">Edit Email</div>
            <div className="w-100 h4 flex flex-column justify-center bg-custom-lighter-gray border-thin-gray custom-gray">
                <div className="pl3 f5 custom-gray">New Email:</div>
                <input type="text" 
                    className="input-reset mh3 mt1 bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b
                    w-50-m
                    "
                    onInput={(event) => setProfileEmail(event.target.value)}
                    onBlur={() => handleEmail()}
                >
                </input>
                {
                    (profileErrors.emailError) ?
                    <div className="red ml3">Please enter a valid email address.</div>
                    : ""
                }
                <div 
                className="flex flex-row justify-between"
                >
                    <div 
                        className="
                        w3 h2 flex justify-center items-center ml3 mv3 pa2 br2 white bg-blue pointer grow
                        "
                        onClick={() => saveEmail()}
                    >
                        Save
                    </div>
                    <div
                        className="w3 h2 flex justify-center items-center mr3 mv3 pa2 br2 white bg-red pointer grow"
                        onClick={() => setNavigationEditEmail(false)}
                    >
                        Cancel
                    </div>
                </div>
                {
                    (profileErrors.emailConfirmationError) ?
                    <div className="red pl3">`${profileErrors.emailConfirmationErrorMessage}`</div>
                    : ""
                }
            </div>
           
        </div>
    )
}

export default EditEmail;