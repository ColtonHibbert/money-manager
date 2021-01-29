import React from "react";
import { useStore } from "react-redux";

function EditProfile(props) {
    const { navigation, user, setNavigationEditProfile } = props;

    const saveProfile = () => {
        console.log("save profile")
    }

    return (
            <div 
            className="w-100 flex flex-column items-center mt3"
            >
                <div className="w-100 flex flex-column">
                    <div className="w-100 h2 flex flex-row items-center pl3 bg-custom-darker-gray border-thin-gray custom-gray">Edit Profile</div>
                    <div className="w-100 flex flex-column bg-custom-lighter-gray border-thin-gray custom-gray">
                        <div className="w-100 flex-flex-column">
                            <div className="flex flex-column mt2">
                                <div className="pl3 f5 custom-gray">First Name:</div>
                                <input type="text" 
                                className="input-reset mh3 mt1 bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b"
                                placeholder={user.firstName}
                                value={user.firstName}
                                ></input>
                            </div>
                            <div className="flex flex-column mv2">
                                <div className="pl3 f5 custom-gray">Last Name:</div>
                                <input type="text" 
                                className="input-reset mh3 bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b"
                                placeholder={user.lastName}
                                value={user.lastName}
                                ></input>
                            </div>
                            <div className="flex flex-column mv2">
                                <div className="pl3 f5 custom-gray">Address:</div>
                                <input type="text" 
                                className="input-reset mh3 bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b"
                                placeholder={user.address}
                                ></input>
                            </div>
                            <div className="flex flex-column mv2">
                                <div className="pl3 f5 custom-gray">Phone Number:</div>
                                <input type="text" className="input-reset mh3 bg-custom-lighter-gray custom-gray border-custom-gray form-line-active b"
                                placeholder={user.phone}
                                value={user.phone}
                                ></input>
                            </div>
                            <div className="flex flex-column mv2">
                                <div className="pl3 f5 custom-gray">About Me:</div>
                                <textarea className="input-reset mh3 bg-custom-lighter-gray custom-gray border-custom-gray form-line-active"
                                placeholder={user.about}
                                value={user.about}
                                ></textarea>
                            </div>
                            
                        </div>
                        <div className="w-100 mv2 pl3">Edit Picture:</div>
                        <div className="w4 h4 flex justify-center items-center ml3 mb2 br-100 bg-money-color dim pointer">
                            <div className="w2 h2 white flex justify-center items-center f3">{user.firstName}</div>
                        </div>
                        <div className="flex flex-row justify-between">
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
                    </div>
                </div>
            </div>
    )
}

export default EditProfile;