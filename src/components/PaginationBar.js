import React from "react";

function PaginationBar(props) {
    return (
        <div>
            <div className="w-100 flex flex-row pl2 pr2 justify-between
            pl3-l pr3-l
            ">
                <div className="custom-gray">`Showing ${} to ${} of ${} entries`</div>
            </div>
        </div>
    )
}

export default PaginationBar;