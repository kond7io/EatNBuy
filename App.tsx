import React from 'react';
import { View, Text } from 'react-native';

import * as  firebase from "firebase";
import { createSwitchNavigator} from "react-navigation";
import SignIn  from './src/screens/auth/SignIn/SignIn';
import SignUp  from './src/screens/auth/SignUp/SignUp';
import GroupScreen  from './src/screens/app/GroupScreen/GroupScreen';
import MainScreen  from './src/screens/app/MainScreen/MainScreen';

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

// const AuthSwitchNavigator = createSwitchNavigator({
//   SignIn: { screen: SignIn},
//   SignUp: { screen: SignUp}
// })

export default class App extends React.Component {
    render() {
        return (
            <View style={{flex:1}}>
                <MainScreen />

            </View>
        )
    }
}
