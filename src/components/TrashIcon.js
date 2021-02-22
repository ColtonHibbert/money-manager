import React from "react";

function TrashIcon(props) {

    const {
        fillColor
    } = props;

    return (
        <div>
            <svg id="i-trash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"  fill={fillColor} stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6" />
            </svg>
        </div>
    )
}

export default TrashIcon;