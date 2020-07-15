import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';

import Navigator from '../EatNBuy/src/navigation/navigator';
import Navigation from'../EatNBuy/src/utils/Navigation';
import FlashMessage from "react-native-flash-message";




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
