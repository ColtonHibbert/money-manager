import React from "react";
import MenuCategory from "./MenuCategory.js";
import MenuItem from "./MenuItem.js";

function Menu(props) {

    return (

            <div
                className="
                flex flex-column min-vh-100 bg-custom-lighter-gray
                display-none-s
                display-none-m
                w5-l
                "
            >
                <MenuCategory  name="Profile">
                    <svg id="Layer_1" data-name="Layer 1" className="w2 h2 fill-custom-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><title>Profile</title><path id="User_Circle" data-name="User Circle" d="M12.5,25A12.5,12.5,0,1,1,25,12.5,12.51,12.51,0,0,1,12.5,25ZM4.75,21a11.48,11.48,0,0,0,15.5,0c-.69-1.58-2.71-2.42-4.34-3.09S14,16.3,14,15.5a3,3,0,0,1,.93-2.12,3.41,3.41,0,0,0,1.14-2.64A3.51,3.51,0,0,0,12.5,7,3.44,3.44,0,0,0,9,10.74a3.35,3.35,0,0,0,1.08,2.64A3,3,0,0,1,11,15.5c0,.8-.22,1.7-1.84,2.36S5.44,19.41,4.75,21ZM12.5,6a4.5,4.5,0,0,1,4.57,4.74,4.38,4.38,0,0,1-1.48,3.39A2,2,0,0,0,15,15.5c0,.44,0,.94,1.21,1.44,1.68.7,3.82,1.59,4.78,3.31a11.5,11.5,0,1,0-17,0C5,18.53,7.1,17.64,8.7,17,10,16.44,10,15.92,10,15.5a2,2,0,0,0-.56-1.37A4.36,4.36,0,0,1,8,10.74,4.41,4.41,0,0,1,12.5,6Z" /></svg>
                </MenuCategory>
                <MenuCategory  name="Dashboard" >
                    <svg version="1.1" className="w2 h2 fill-custom-gray" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 32 32" space="preserve">
                    <path d="M16,4C8.3,4,2,10.3,2,18c0,3.2,1,6.2,3,8.7C5.3,27,5.8,27.2,6.2,27c2.5-1,5-1.7,7.7-1.9l5.2-9.6c0.3-0.5,0.9-0.7,1.4-0.4
                        c0.5,0.3,0.7,0.9,0.4,1.4L16.2,25c3.3,0,6.5,0.7,9.6,2c0.1,0.1,0.3,0.1,0.4,0.1c0.3,0,0.6-0.1,0.8-0.4c2-2.5,3-5.5,3-8.7
                        C30,10.3,23.7,4,16,4z M8,19H6c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S8.6,19,8,19z M11,13c-0.2,0.2-0.5,0.3-0.7,0.3
                        S9.8,13.2,9.6,13l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4C11.4,12,11.4,12.7,11,13z M17,10c0,0.6-0.4,1-1,1s-1-0.4-1-1V8
                        c0-0.6,0.4-1,1-1s1,0.4,1,1V10z M21.7,13.3c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4
                        L22.4,13C22.2,13.2,21.9,13.3,21.7,13.3z M26,19h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S26.6,19,26,19z"/>
                    </svg>                
                </MenuCategory>
                <MenuCategory name="Accounts" > 
                    <svg className="w2 h2" viewBox="0 0 19 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                    <title>account_balance</title>
                    <desc>Created with Sketch.</desc>
                    <g id="Icons" stroke="none" stroke-width="1" fill="#2d3035" fill-rule="evenodd">
                        <g id="Rounded" transform="translate(-170.000000, -155.000000)">
                            <g id="Action" transform="translate(100.000000, 100.000000)">
                                <g id="-Round-/-Action-/-account_balance" transform="translate(68.000000, 54.000000)">
                                    <g>
                                        <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                                        <path d="M4,11.5 L4,15.5 C4,16.33 4.67,17 5.5,17 C6.33,17 7,16.33 7,15.5 L7,11.5 C7,10.67 6.33,10 5.5,10 C4.67,10 4,10.67 4,11.5 Z M10,11.5 L10,15.5 C10,16.33 10.67,17 11.5,17 C12.33,17 13,16.33 13,15.5 L13,11.5 C13,10.67 12.33,10 11.5,10 C10.67,10 10,10.67 10,11.5 Z M3.5,22 L19.5,22 C20.33,22 21,21.33 21,20.5 C21,19.67 20.33,19 19.5,19 L3.5,19 C2.67,19 2,19.67 2,20.5 C2,21.33 2.67,22 3.5,22 Z M16,11.5 L16,15.5 C16,16.33 16.67,17 17.5,17 C18.33,17 19,16.33 19,15.5 L19,11.5 C19,10.67 18.33,10 17.5,10 C16.67,10 16,10.67 16,11.5 Z M10.57,1.49 L2.67,5.65 C2.26,5.86 2,6.29 2,6.75 C2,7.44 2.56,8 3.25,8 L19.76,8 C20.44,8 21,7.44 21,6.75 C21,6.29 20.74,5.86 20.33,5.65 L12.43,1.49 C11.85,1.18 11.15,1.18 10.57,1.49 Z" fill="#8a8d93"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                    </svg>
                </MenuCategory>
                <MenuCategory name="Transactions" >
                    <svg className="w2 h2 fill-custom-gray" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><defs></defs><title>x</title><polygon points="3.232 70.519 3.503 70.712 18.64 81.663 18.782 81.766 18.975 81.908 66.615 116.356 66.615 97.354 115.363 97.354 124.768 97.354 124.768 70.519 3.232 70.519"/><polygon class="cls-1" points="124.768 57.481 124.497 57.288 109.36 46.337 109.218 46.234 109.025 46.092 61.385 11.644 61.385 30.646 12.637 30.646 3.232 30.646 3.232 57.481 124.768 57.481"/></svg>
                </MenuCategory>
                <MenuCategory name="Lobby" >
                <svg viewBox="0 0 48 48" className="w2 h2 fill-custom-gray" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" >
                    <path fill="*#8a8d93" id="i-414" d="M26,22h-4v-4h4V22z M26,12h-4v4h4V12z M32,30h-4v4h4V30z M32,12h-4v4h4V12z M32,24h-4v4h4V24z M32,6h-4v4h4V6z M32,18h-4v4 h4V18z M26,6h-4v4h4V6z M20,18h-4v4h4V18z M20,30h-4v4h4V30z M20,24h-4v4h4V24z M36.2,4v42H39v2h-2.8H29H19h-7.2H9v-2h2.8V4H9V2h2.8 h2.8V0H33.4v2h2.8H39v2H36.2z M27,41c0-1.654-1.346-3-3-3s-3,1.346-3,3v5h6V41z M34.2,4H13.8v42H19v-5c0-2.758,2.243-5,5-5 s5,2.242,5,5v5h5.2V4z M26,30h-4v4h4V30z M26,24h-4v4h4V24z M20,12h-4v4h4V12z M20,6h-4v4h4V6z"/> 
                </svg>
                </MenuCategory>
            </div>
    )
}

export default Menu;