import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import {styles} from './styles';
import {windowHeight} from '../../constans/deviceDimension';

console.disableYellowBox = true;

const EBBellCounter = ({number, iconColor, bgColor, ctColor, style}) => {

    return (
        <View style={[styles.container, style]}>
            <Icon name='bell' color={iconColor} size={windowHeight * 0.036}/>
            {number > 0
                ? <Text style={[styles.counter,{backgroundColor: bgColor, color: ctColor}]}>{number}</Text>
                : null
            }
        </View>
    )
};
export default EBBellCounter;
