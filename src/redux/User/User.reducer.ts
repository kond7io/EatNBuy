import {SIGN_IN, SIGN_UP, CREATE_GROUP, USER_DETAILS} from "./User.action";

const INITIAL_STATE: any = {
    user: undefined,
    registeredUser: undefined,
    userDetails: undefined,
    loading: false,
    error: false,
    isGrouped: false,
    groupName: undefined

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
        case SIGN_IN.pending:
            return {
                ...state,
                loading: true,
                error: false
            };
        case SIGN_IN.resolved:
            return {
                ...state,
                user: action.payload,
                loading: false,
            };
        case SIGN_IN.rejected:
            return {
                ...state,
                loading: false,
                error: true
            };
        case CREATE_GROUP.pending:
            return {
                ...state,
                loading: true,
                error: false
            };
        case CREATE_GROUP.resolved:
            return {
                ...state,
                loading: false,
                error: false,
                isGrouped: true,
                groupName: action.payload
            };
        case CREATE_GROUP.rejected:
            return {
                ...state,
                loading: false,
                error: false
            };
        case USER_DETAILS.pending:
            return {
                ...state,
                loading: true,
                error: false
            };
        case USER_DETAILS.resolved:
            return {
                ...state,
                loading: false,
                error: false,
                userDetails: action.payload
            };
        case USER_DETAILS.rejected:
            return {
                ...state,
                loading: false,
                error: true
            };

        default:
            return state;
    }
};