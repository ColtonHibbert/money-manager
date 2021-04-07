import React from "react";

function LobbyCard(props) {

    const {
        cardName,
        setRouteHome,
        route
    } = props;

    return (
        <div className="w-90 flex flex-column items-center justify-center bg-custom-lighter-gray mt3 pointer
        w-90-m
        w-30-l
        "
        onClick={() => setRouteHome(route)}
        >
            <div className="
            f4 money-color mt1
            ">{cardName}</div>
            <div className="mv2">
                {props.children}
            </div>
        </div>
    )
}

export default LobbyCard;