import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';

import * as  firebase from "firebase";;
import Navigator from '../EatNBuy/src/navigation/navigator';
import Navigation from'../EatNBuy/src/utils/Navigation';
import FlashMessage from "react-native-flash-message";

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


export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={{flex: 1}}>
                    <Navigator ref={navigatorRef => {
                        Navigation.setTopLevelNavigator(navigatorRef);
                    }}/>
                    <FlashMessage position='top' />
                </View>
            </Provider>
        )
    }
}
