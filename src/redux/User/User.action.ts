import { createAsyncConsts } from '../../utils/createAsyncConsts';
import {User} from "../../types/User";

/** SIGN UP **/

export const HANDLE_SIGN_UP = 'HANDLE_SIGN_UP';
export const getUserSignUpAction = (name: string, email: string, password: string, profilImage: string) => {
    debugger;
    return {
        type: HANDLE_SIGN_UP,
        payload: {
            name: name,
            email: email,
            password: password,
            profilImage: profilImage
        }
    }
};

export const SIGN_UP = createAsyncConsts('SIGN_UP');
export const getUserSignUpPending = () => {
debugger;
    return {
        type: SIGN_UP.pending
    }
};

export const getUserSignUpResolved = (registeredUser: any) => {
    debugger;
    return {
        type: SIGN_UP.resolved,
        payload: registeredUser
    }
};

export const getUserSignUpRejected = (error) => {
    debugger;
    return {
        type: SIGN_UP.rejected,
        payload: error
    }
};

/** SIGN UP END**/

/** SIGN IN**/

export const HANDLE_SIGN_IN = 'HANDLE_SIGN_IN';
export const getUserSignInAction = (email: string, password: string) => {
    debugger;
    return {
        type: HANDLE_SIGN_IN,
        payload: {
            email: email,
            password: password
        }
    }
};

export const SIGN_IN = createAsyncConsts('SIGN_IN');
export const getUserSignInPending = () => {
    debugger;
    return {
        type: SIGN_IN.pending
    }
};

export const getUserSignInResolved = (user: any) => {
    debugger;
    return {
        type: SIGN_IN.resolved,
        payload: user
    }
};

export const getUserSignInRejected = (error) => {
    debugger;
    return {
        type: SIGN_IN.rejected,
        payload: error
    }
};

/** SIGN IN END**/

/** CREATE GROUP**/

export const HANDLE_CREATE_GROUP = 'HANDLE_CREATE_GROUP';
export const getUserCreateGroupAction = (groupName: string) => {
    debugger;
    return {
        type: HANDLE_CREATE_GROUP,
        payload: {
            groupName: groupName,
        }
    }
};

export const CREATE_GROUP = createAsyncConsts('CREATE_GROUP');
export const getUserCreateGroupPending = () => {
    debugger;
    return {
        type: CREATE_GROUP.pending,
    }
};

export const getUserCreateGroupResolved = (groupName: any) => {
    debugger;
    return {
        type: CREATE_GROUP.resolved,
        payload: groupName

    }
};

export const getUserCreateGroupRejected = (error) => {
    debugger;
    return {
        type: CREATE_GROUP.rejected,
        payload: error
    }
};

/** CREATE GROUP END**/

/** GET USER DETAILS**/

export const USER_DETAILS = createAsyncConsts('USER_DETAILS');
export const getUserDetailsPending = () => {
    debugger;
    return {
        type:USER_DETAILS.pending
    }
};

export const getUserDetailsResolved = (userDetails: any) => {
    debugger;
    return {
        type:USER_DETAILS.resolved,
        payload: userDetails
    }
};

export const getUserDetailsRejected = () => {
    debugger;
    return {
        type:USER_DETAILS.resolved,
    }
};



/** GET USER DETAILS**/