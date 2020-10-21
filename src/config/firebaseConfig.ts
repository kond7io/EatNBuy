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

export const config = firebase.initializeApp(firebaseConfig);