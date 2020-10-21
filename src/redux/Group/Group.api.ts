import {config} from '../../config/firebaseConfig';
import {StackActions} from "react-navigation";


export const groupCreateBranchApi = async (groupName: string) => {
    let group_key = config.database().ref('group').push().key;
    let admin_key = config.auth().currentUser.uid;

    let res = await config.database().ref('groups' + '/' ).child(group_key).set({
        groupKey: group_key,
    })

    let response = await config.database().ref('users' + '/' + admin_key).update({
        groupKey:  group_key,
        adminKey: admin_key,
        groupName: groupName,
        isGrouped: true,
        isAdmin: true,
    });
    return {response, res};
};

