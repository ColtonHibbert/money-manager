import React from "react";

function MenuCategory(props) {
    return (
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
    )
}

export default MenuCategory;