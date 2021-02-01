import React from "react";

function EditProfile(props) {
    const { 
        navigation, 
        user, 
        profile,
        profileErrors,
        setNavigationEditProfile,
        setProfileFirstName,
        setProfileLastName,
        setProfileAddress,
        setProfilePhone,
        setProfileAbout,
        setProfileErrorsError,
        setProfileErrorsErrorMessage,
        setUserProfileData
    } = props;

    const saveProfile = () => {

        const profilePost = formatProfileData();

        fetch(
            "http://localhost:3001/profileedit", 
            {
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                    "CSRF-Token":user.csrf
                },
                body: JSON.stringify({
                    firstName:profilePost.firstName,
                    lastName:profilePost.lastName,
                    address:profilePost.address,
                    phone:profilePost.phone,
                    about:profilePost.about
                }),
                credentials:"include"
            })
            .then(res => res.json())
            .then(data => {
                if(data.error) {
                    setProfileErrorsError(true);
                    setProfileErrorsErrorMessage(data.error);
                }
                if(!data.error) {
                    setProfileErrorsError(false);
                    setProfileErrorsErrorMessage("");
                    setUserProfileData(data);
                    setNavigationEditProfile(false);
                    //toaster notification
                }
            })
    }

    const formatProfileData = () => {
        let profileResponse = {};

        if(profile.firstName !== user.firstName && profile.firstName !== "") {
            profileResponse.firstName = profile.firstName;
        } else {
            profileResponse.firstName = user.firstName;
        }

        if(profile.lastName !== user.lastName && profile.lastName !== "") {
            profileResponse.lastName = profile.lastName;
        } else {
            profileResponse.lastName = user.lastName;
        }

        if(profile.address !== user.address && profile.address !== "") {
            profileResponse.address = profile.address;
        } else {
            profileResponse.address = user.address;
        }

        if(profile.phone !== user.phone && profile.phone !== "") {
            profileResponse.phone = profile.phone;
        } else {
            profileResponse.phone = user.phone;
        }

        if(profile.about !== user.about && profile.about !== "") {
            profileResponse.about = profile.about;
        } else {
            profileResponse.about = user.about;
        }

        return profileResponse;
    }

    return (
            <div 
            className="w-100 flex flex-column items-center mt3
            w-50-l mt0-l mr2-l
            "
            >
                <div className="w-100 flex flex-column">
                    <div className="w-100 h2 flex flex-row items-center pl3 bg-custom-darker-gray border-thin-gray custom-gray">Edit Profile</div>
                    <div className="w-100 flex flex-column bg-custom-lighter-gray border-thin-gray custom-gray">
                        <div className="w-100 flex-flex-column">
                            <div className="w-100 flex flex-column mt2">
                                <div className="pl3 f5 custom-gray">First Name:</div>
                                <input type="text" 
                                className="input-reset mh3 mt1 bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b
                                w-50-m
                                "
                                placeholder={user.firstName}
                                onInput={(event) => setProfileFirstName(event.target.value)}
                                ></input>
                            </div>
                            <div className="flex flex-column mv2">
                                <div className="pl3 f5 custom-gray">Last Name:</div>
                                <input type="text" 
                                className="input-reset mh3 bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b
                                w-50-m
                                "
                                placeholder={user.lastName}
                                onInput={(event) => setProfileLastName(event.target.value)}
                                ></input>
                            </div>
                            <div className="flex flex-column mv2">
                                <div className="pl3 f5 custom-gray">Address:</div>
                                <input type="text" 
                                className="input-reset mh3 bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b
                                w-50-m
                                "
                                placeholder={user.address}
                                onInput={(event) => setProfileAddress(event.target.value)}
                                ></input>
                            </div>
                            <div className="flex flex-column mv2">
                                <div className="pl3 f5 custom-gray">Phone Number:</div>
                                <input type="text" className="input-reset mh3 bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b
                                w-50-m
                                "
                                placeholder={user.phone}
                                onInput={(event) => setProfilePhone(event.target.value)}
                                ></input>
                            </div>
                            <div className="flex flex-column mv2">
                                <div className="pl3 f5 custom-gray">About Me:</div>
                                <textarea className="input-reset mh3 bg-custom-lighter-gray custom-gray border-custom-gray form-line-active
                                w-50-m
                                "
                                placeholder={user.about}
                                onInput={(event) => setProfileAbout(event.target.value)}
                                ></textarea>
                            </div>
                            
                        </div>
                        <div className="w-100 mv2 pl3">Edit Picture:</div>
                        <div className="w4 h4 flex justify-center items-center ml3 mb2 br-100 bg-money-color dim pointer">
                            <div className="w2 h2 white flex justify-center items-center f3">{user.firstName}</div>
                        </div>
                        <div 
                        className="flex flex-row justify-between
                        
                        "
                        >
                            <div 
                                className="
                                w3 h2 flex justify-center items-center ml3 mv3 pa2 br2 white bg-blue pointer grow
                                "
                                onClick={() => saveProfile()}
                            >
                                Save
                            </div>
                            <div
                            className="w3 h2 flex justify-center items-center mr3 mv3 pa2 br2 white bg-red pointer grow"
                            onClick={() => setNavigationEditProfile(false)}
                            >Cancel</div>
                        </div>
                        {
                            (profileErrors.error) ?
                            <div className="red ml3 mv2">{profileErrors.errorMessage}</div>
                            : ""
                        }
                    </div>
                </div>
            </div>
    )
}

export default EditProfile;