import React from "react";
import LobbyCard from "../components/LobbyCard.js";
import BankIcon from "../components/BankIcon.js";

function Lobby(props) {
    return (
        <div 
        className="w-100 flex flex-column
        flex-column-m
        flex-row-l
        ">
            <LobbyCard>
                <BankIcon cssClass="
                w3 h3
                " /> 
            </LobbyCard>
        </div>
    )
}

export default Lobby;