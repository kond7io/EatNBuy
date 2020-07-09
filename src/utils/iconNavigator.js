import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function iconNavigator(name) {
    return({tintColor}) => {
        return (
            <Icon name={name} style={{color: tintColor, fontSize: 22}}/>
        )
    };
}