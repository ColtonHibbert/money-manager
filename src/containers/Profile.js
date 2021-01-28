import React from "react";

function Profile(props) {
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
                    <div className="w-100 flex flex-row bg-custom-lighter-gray border-thin-gray custom-gray">
                        <div className="w-50">data</div>
                        <div className="w-50">Picture</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile