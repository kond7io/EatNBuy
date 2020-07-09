import {SIGN_UP} from "./User.action";

const INITIAL_STATE: any = {
    user: undefined,
    registeredUser: undefined,
    loading: false,
    error: false
};

export const UserReducer = (state = INITIAL_STATE, action: any) => {
    switch(action.type) {
        case SIGN_UP.pending:
            return {
                ...state,
                loading: true,
                error: false
            };
        case SIGN_UP.resolved:
            return {
                ...state,
                registeredUser: action.payload,
                loading: false,
            };
        case SIGN_UP.rejected:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state;
    }
};