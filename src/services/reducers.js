import {
    SET_ROUTE
} from "./constants.js";

const initialState = {
    route: "login",
    user: {

    },
    transactions: [],
    accounts: []

}

export const reducer = (state=initialState, action={}) => {
    if(action.type === SET_ROUTE ) {
        return {
            ...state,
            route: action.setRoutePayload
        }
    }
    if(action.type === SET_USER) {
        return {
            ...state,
            user: action.setUserPayload
        }
    }
    return state;
}