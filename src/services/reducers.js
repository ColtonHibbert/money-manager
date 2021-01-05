import {
    CHANGE_ROUTE
} from "./constants.js";

const initialState = {
    route: "login",
    user: {

    },
    transactions: [],
    accounts: []

}

export const reducer = (state=initialState, action={}) => {
    if(action.type === CHANGE_ROUTE ) {
        return {
            ...state,
            route: action.changeRoutePayload
        }
    }
    return state;
}