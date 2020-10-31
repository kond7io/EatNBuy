import {config} from '../../config/firebaseConfig';

export const userRegisterApi = async (email: string, password: string) => {
    let response = await config.auth().createUserWithEmailAndPassword(email, password)
    debugger;
    return response;
};


export const userLoginApi = async (email: string, password: string) => {
    let response = await config.auth().signInWithEmailAndPassword(email, password);
    debugger;
    return response;
};

export const userCreateBranchApi = async (name: string, profilImage: string) => {

    let response = await config.database().ref('users' + '/' + config.auth().currentUser.uid).set({
        name: name,
        profilImage: profilImage,
        userKey: config.auth().currentUser.uid,
        isGrouped: false,
        isAdmin: false
    });
    debugger;
    return response;
};

export const groupCreateBranchApi = async (groupName: string) => {
    let group_key = config.database().ref('group').push().key;
    let admin_key = config.auth().currentUser.uid;
    debugger;
    let res = await config.database().ref('groups' + '/' ).child(group_key).set({
        groupKey: group_key,
    })
    debugger;
    let response = await config.database().ref('users' + '/' + admin_key).update({
        groupKey:  group_key,
        adminKey: admin_key,
        groupName: groupName,
        isGrouped: true,
        isAdmin: true,
    });
    debugger;
    return {response, res};
};


export const getUserApi = async () => {

    let user_key = config.auth().currentUser.uid;
    let val;
    debugger;
    return await config.database().ref('users' + '/' + user_key).once('value').then(function (data) {
        val = data.val();
        debugger;
        return val;
    });
};
