import React from "react";
import { ToastContainer } from 'react-toastify';

function Header(props) {

    const { toggleMobileMenu } = props;

    return(
        <div className="h3 w-100 flex flex-row bg-custom-lighter-gray bb-thin-gray">
            <div className="w-50">
                <svg 
                    className="w2 h2 pa0 ma3 money-color 
                    display-none-l
                    " 
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    onClick={() => toggleMobileMenu()}
                >
                <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                </path>
                </svg>
            </div>
            <div className="w-50 flex flex-row items-center">
                <div className="flex flex-row">
                    <div className="money-color">Money</div>
                    <div className="custom-gray">Manager</div>
                </div>
                <ToastContainer autoClose={3000}/>
            </div>
        </div>
    )
}

export default Header;