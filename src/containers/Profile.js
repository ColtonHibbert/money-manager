import React from "react";
import { connect } from "react-redux";
import HomeIcon from "../components/HomeIcon.js";
import PhoneIcon from "../components/PhoneIcon.js";
import EditProfile from "../components/EditProfile.js";
import { setNavigationEditProfile } from "../services/actions.js";

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setNavigationEditProfile: (value) => dispatch(setNavigationEditProfile(value))
    }
}

function Profile(props) {

    const {
        user
    } = props;


    return (
        <div className="flex flex-column w-100 items-center">
            <div 
            className="
                w-100 flex justify-center items-center bg-custom-lighter-gray money-color border-thin-gray 
                h2 f4 pt1
                h2-s f4-s
                h2-ns f4-ns
                h3-m f3-m
                h3-l f3-l
                "
            >My Profile
            </div>
            <div 
            className="w-90 flex flex-column items-center mt4"
            >
                <div className="w-100 flex flex-column">
                    <div className="w-100 h2 flex flex-row items-center pl3 bg-custom-darker-gray border-thin-gray custom-gray">My Account</div>
                    <div className="w-100 flex flex-column bg-custom-lighter-gray border-thin-gray custom-gray">
                        <div className="w-100 flex-flex-column">
                            <div className="f4 b pl3 mv3">{`${user.firstName} ${user.lastName}`}</div>
                            <div className="pl3 mv2 b">Info: </div>
                            <div className="w-100 mv2 flex flex-row items-center">
                                <div className="pl3">
                                    <HomeIcon />
                                </div>
                                <div className="pl1">{`Address: ${user.address}`}</div>
                            </div>
                            <div className="w-100 mv2 flex flex-row items-center">
                                <div className="pl3">
                                    <PhoneIcon />
                                </div>
                                <div className="pl1">{`Phone: ${user.phone}`}</div>
                            </div>
                        </div>
                        <div className="w-100 mv2 pl3">Picture:</div>
                        <div className="w4 h4 flex justify-center items-center ml3 mb2 br-100 bg-money-color">
                            <div className="w2 h2 white flex justify-center items-center f3">{user.firstName}</div>
                        </div>
                        <div className="w3point5 h2 flex justify-center items-center ml3 mv3 pa2 br2 white bg-blue pointer grow">Edit Profile</div>
                    </div>
                </div>
                <div className="w-100 flex flex-column mt4">
                    <div className="w-100 h2 flex flex-row items-center pl3 bg-custom-darker-gray border-thin-gray custom-gray">Account Options</div>
                    <div className="w-100 h4 flex flex-column justify-center bg-custom-lighter-gray border-thin-gray custom-gray">
                        <div className="pl3 mv2 white underline grow-l pointer">Change Email</div>
                        <div className="pl3 mv2 white underline grow-l pointer">Change Password</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);