import React from "react";

function MenuCategory(props) {
    return (
        <div 
            className="
            h2 f4 flex flex-row items-center pl2 bg-custom-lighter-gray custom-gray

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