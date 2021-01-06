import {
    CHANGE_ROUTE
} from "./constants.js";


export const setRoute = (payload) => {
    return {
        type: SET_ROUTE,
        setRoutePayload: payload
    }
}

