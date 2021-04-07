import React from "react";

function LobbyCard(props) {

    const {
        cardName,
    } = props;

    return (
        <div className="w-90 flex flex-column bg-custom-light-gray
        w-90-m
        w-30-l
        ">
            <div className="
            f4
            ">{cardName}</div>
            {props.children}
        </div>
    )
}

export default LobbyCard;