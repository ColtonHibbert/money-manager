import React from "react";
import { connect } from "react-redux";
import HomeIcon from "../components/HomeIcon.js";
import PhoneIcon from "../components/PhoneIcon.js";
import EditProfile from "../components/EditProfile.js";
import EditEmail from "../components/EditEmail.js";
import EditPassword from "../components/EditPassword.js";
import { 
    setNavigationEditProfile,
    setNavigationEditEmail,
    setNavigationEditPassword,
    setProfileFirstName,
    setProfileLastName,
    setProfileAddress,
    setProfilePhone,
    setProfileAbout,
    setProfileEmail,
    setProfilePassword,
    setProfileConfirmPassword,
    setProfileErrorsError,
    setProfileErrorsErrorMessage,
    setProfileErrorsEmailError,
    setProfileErrorsPasswordError,
    setProfileErrorsConfirmPasswordError,
    setProfileErrorsPasswordsMatchError,
    setProfileErrorsPasswordConfirmationError,
    setProfileErrorsPasswordConfirmationErrorMessage,
    setProfileErrorsEmailConfirmationError,
    setProfileErrorsEmailConfirmationErrorMessage,
    setUserProfileData,
    setUserProfileEmail
} from "../services/actions.js";

const mapStateToProps = (state) => {
    return {
       profile: state.profile,
       profileErrors: state.profileErrors
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setNavigationEditProfile: (value) => dispatch(setNavigationEditProfile(value)),
        setNavigationEditEmail: (value) => dispatch(setNavigationEditEmail(value)),
        setNavigationEditPassword: (value) => dispatch(setNavigationEditPassword(value)),
        setProfileFirstName: (value) => dispatch(setProfileFirstName(value)),
        setProfileLastName: (value) => dispatch(setProfileLastName(value)),
        setProfileAddress: (value) => dispatch(setProfileAddress(value)),
        setProfilePhone: (value) => dispatch(setProfilePhone(value)),
        setProfileAbout: (value) => dispatch(setProfileAbout(value)),
        setProfileEmail: (value) => dispatch(setProfileEmail(value)),
        setProfilePassword: (value) => dispatch(setProfilePassword(value)),
        setProfileConfirmPassword: (value) => dispatch(setProfileConfirmPassword(value)),
        setProfileErrorsError: (value) => dispatch(setProfileErrorsError(value)),
        setProfileErrorsErrorMessage: (value) => dispatch(setProfileErrorsErrorMessage(value)),
        setProfileErrorsEmailError: (value) => dispatch(setProfileErrorsEmailError(value)),
        setProfileErrorsPasswordError: (value) => dispatch(setProfileErrorsPasswordError(value)),
        setProfileErrorsConfirmPasswordError: (value) => dispatch(setProfileErrorsConfirmPasswordError(value)),
        setProfileErrorsPasswordsMatchError: (value) => dispatch(setProfileErrorsPasswordsMatchError(value)),
        setProfileErrorsPasswordConfirmationError: (value) => dispatch(setProfileErrorsPasswordConfirmationError(value)),
        setProfileErrorsPasswordConfirmationErrorMessage: (value) => dispatch(setProfileErrorsPasswordConfirmationErrorMessage(value)),
        setProfileErrorsEmailConfirmationError: (value) => dispatch(setProfileErrorsEmailConfirmationError(value)),
        setProfileErrorsEmailConfirmationErrorMessage: (value) => dispatch(setProfileErrorsEmailConfirmationErrorMessage(value)),
        setUserProfileData: (value) => dispatch(setUserProfileData(value)),
        setUserProfileEmail: (value) => dispatch(setUserProfileEmail(value))
    }
}

function Profile(props) {

    const {
        user,
        navigation,
        profile,
        profileErrors,
        setNavigationEditProfile,
        setNavigationEditEmail,
        setNavigationEditPassword,
        setProfileFirstName,
        setProfileLastName,
        setProfileAddress,
        setProfilePhone,
        setProfileAbout,
        setProfileEmail,
        setProfilePassword,
        setProfileConfirmPassword,
        setProfileErrorsError,
        setProfileErrorsErrorMessage,
        setProfileErrorsEmailError,
        setProfileErrorsPasswordError,
        setProfileErrorsConfirmPasswordError,
        setProfileErrorsPasswordsMatchError,
        setProfileErrorsPasswordConfirmationError,
        setProfileErrorsPasswordConfirmationErrorMessage,
        setProfileErrorsEmailConfirmationError,
        setProfileErrorsEmailConfirmationErrorMessage,
        setUserProfileData,
        setUserProfileEmail
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
            className="w-90 flex flex-column items-center mt4
            flex-row-l items-start-l
            "
            >
                {
                    (navigation.editProfile === false) ?
                    <div className="w-100 flex flex-column
                    w-50-l mt0-l mr2-l
                    ">
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
                            <div 
                                className="
                                w3point5 h2 flex justify-center items-center ml3 mv3 pa2 br2 white bg-blue pointer grow
                                "
                                onClick={() => setNavigationEditProfile(true)}
                            >
                                Edit Profile
                            </div>
                        </div>
                    </div>
                    : <EditProfile {...props}/>
                }
                {
                    (navigation.editEmail) ?
                    <EditEmail {...props} /> :
                    (navigation.editPassword) ?
                    <EditPassword {...props} />
                    :
                    <div className="w-100 flex flex-column mt4
                    w-50-l mt0-l ml2-l
                    ">
                        <div className="w-100 h2 flex flex-row items-center pl3 bg-custom-darker-gray border-thin-gray custom-gray">Account Options</div>
                        <div className="w-100 h4 flex flex-column justify-center bg-custom-lighter-gray border-thin-gray custom-gray">
                            <div 
                                className="pl3 mv2 white underline grow-l pointer"
                                onClick={() => setNavigationEditEmail(true)}
                            >
                                Change Email
                            </div>
                            <div 
                                className="pl3 mv2 white underline grow-l pointer"
                                onClick={() => setNavigationEditPassword(true)}
                            >
                                Change Password
                            </div>
                        </div>
                    </div>
                }
                
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);