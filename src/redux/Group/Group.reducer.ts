import {CREATE_GROUP} from "./Group.action";

const INITIAL_STATE: any = {
    user: undefined,
    registeredUser: undefined,
    loading: false,
    error: false
};

export const GroupReducer = (state = INITIAL_STATE, action: any) => {
    switch(action.type) {
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
                error: false
            };
        case CREATE_GROUP.rejected:
            return {
                ...state,
                loading: false,
                error: false
            };

        default:
            return state;
    }
};