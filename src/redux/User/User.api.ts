import {config} from '../../config/firebaseConfig';

export const userRegisterApi = async (email: string, password: string) => {
    debugger;
    let response = await config.auth().createUserWithEmailAndPassword(email, password)
    debugger;
    return response;
};

export const userLoginApi = async (email: string, password: string) => {
    let response = await config.auth().signInWithEmailAndPassword(email, password);
    debugger;
    return response;
};

export const userCreateBranchApi = async (name: string) => {

    let response = await config.database().ref('users' + '/' + config.auth().currentUser.uid).set({
        name: name,
        userKey: config.auth().currentUser.uid,
        isGrouped: false,
        isAdmin: false
    });

    return response;
};
