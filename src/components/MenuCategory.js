import React from "react";
import MenuItem from "./MenuItem.js";

function MenuCategory(props) {
    console.log(props.navigation)
    return (
        <div className="flex flex-column">
            <div 
                className="
                f4 flex flex-row items-center pl2 bg-custom-lighter-gray custom-gray pointer money-hover darker-gray-hover 
                h2point25-m
                h2point25p-l
                "
            >
                <div>
                    {props.children}
                </div>
                <div className="pl2">
                {props.name}
                </div>
            </div>
            {
                (props.navigation.accountSelected && props.name === "Accounts") ?
                <div>
                    <div 
                    className="
                    f4 flex flex-row items-center pl4 bg-custom-lighter-gray custom-gray pointer money-hover darker-gray-hover 
                    h2point25-m
                    h2point25p-l
                    "
                    >
                        <svg id="Layer_1"
                        className="
                        w1point5-s h1point5-s fill-custom-gray 
                        w2-m h2-m
                        w2-l h2-l
                        "
                        data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>file, document, office, work, letter</title><path d="M16.17,0H2V24H22V6.8ZM20,22H4V2h9V9h7ZM15,7V2h.25l4.29,5Z"/><rect x="6" y="12" width="12" height="2"/><rect x="6" y="15" width="12" height="2"/><rect x="6" y="18" width="12" height="2"/><rect x="6" y="7" width="5" height="2"/></svg>
                        <div className="pl2">Summary of Accounts</div>
                    </div>
                    {

                    }
                </div>
                : ""
            }
        </div>
    )
}

export default MenuCategory;