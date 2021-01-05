import {
    CHANGE_ROUTE
} from "./constants.js";


export const changeRoute = (payload) => {
    return {
        type: CHANGE_ROUTE,
        changeRoutePayload: payload
    }
}

