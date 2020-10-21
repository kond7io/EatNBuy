import { createAsyncConsts } from '../../utils/createAsyncConsts';
import {User} from "../../types/User";

/** CREATE GROUP**/

export const HANDLE_CREATE_GROUP = 'HANDLE_CREATE_GROUP';
export const getUserCreateGroupAction = (groupName: string) => {
    return {
        type: HANDLE_CREATE_GROUP,
        payload: {
            groupName: groupName,
        }
    }
};

export const CREATE_GROUP = createAsyncConsts('CREATE_GROUP');
export const getUserCreateGroupPending = () => {
    return {
        type: CREATE_GROUP.pending,
    }
};

export const getUserCreateGroupResolved = (user: any) => {
    return {
        type: CREATE_GROUP.resolved,
        payload: user
    }
};

export const getUserCreateGroupRejected = (error) => {
    return {
        type: CREATE_GROUP.rejected,
        payload: error
    }
};

/** CREATE GROUP END**/