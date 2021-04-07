import React from "react";
import LobbyCard from "../components/LobbyCard.js";
import BankIcon from "../components/BankIcon.js";

function Lobby(props) {

    const {
        setRouteHome
    } = props;

    return (
        <div 
        className="w-100 flex flex-column items-center 
        flex-column-m
        flex-row-l justify-around-l
        ph3-l
        ">
            <LobbyCard cardName="Add Bank Account"
            setRouteHome={setRouteHome}
            route={"addaccount"}
            >
                <BankIcon cssClass="
                w3 h3 
                " 
                /> 
            </LobbyCard>
        </div>
    )
}

export default Lobby;