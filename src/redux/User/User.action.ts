import { createAsyncConsts } from '../../utils/createAsyncConsts';

/** SIGN UP **/

export const HANDLE_SIGN_UP = 'HANDLE_SIGN_UP';
export const getUserSignUpAction = (name: string, email: string, password: string) => {
    return {
        type: HANDLE_SIGN_UP,
        payload: {
            name: name,
            email: email,
            password: password
        }
    }
};

export const SIGN_UP = createAsyncConsts('SIGN_UP');
export const getUserSignUpPending = () => {
    return {
        type: SIGN_UP.pending
    }
};

export const getUserSignUpResolved = (registeredUser: any) => {
    return {
        type: SIGN_UP.resolved,
        payload: registeredUser
    }
};

export const getUserSignUpRejected = (error) => {
    return {
        type: SIGN_UP.rejected,
        payload: error
    }
};

/** SIGN UP END**/