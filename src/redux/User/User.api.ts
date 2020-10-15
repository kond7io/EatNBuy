import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCcztTmsnm3MKlJ4Ur_5wXpcR4-P-2w6Pw",
    authDomain: "eatnbuy.firebaseapp.com",
    databaseURL: "https://eatnbuy.firebaseio.com",
    projectId: "eatnbuy",
    storageBucket: "eatnbuy.appspot.com",
    messagingSenderId: "403429153636",
    appId: "1:403429153636:web:dad4d1026e1125f9fb3871",
    measurementId: "G-ZVY2HEQ544"
};

firebase.initializeApp(firebaseConfig);




export const userRegisterApi = async (name: string, email: string, password: string) => {
    debugger;
    let response = await firebase.auth().createUserWithEmailAndPassword(email, password)
    debugger;
    return response;
};

export const userCreateBranchApi = async (name: string) => {

    let response = await firebase.database().ref('users' + '/' + firebase.auth().currentUser.uid).set({
        name: name,
        isGrouped: false,
    });
    return response;
};

export const userLoginApi = async (email: string, password: string) => {
    let response = await firebase.auth().signInWithEmailAndPassword(email, password);
     return response;
};

export const userCreateGroupApi = async (groupName: string) => {
    let response = await firebase.database().ref('users' + '/' + firebase.auth().currentUser.uid).update({
        isGrouped: true,
        groupName: groupName
    });
    return response;
};