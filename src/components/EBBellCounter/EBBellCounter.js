import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import {styles} from '../EBBellCounter/styles';
import {theme} from '../../utils/colors';

console.disableYellowBox = true;

const EBBellCounter = ({number}) => {

    return (
        <View style={styles.container}>
            <Icon name='bell' color='white' size={25}/>
            {number > 0
                ? <Text style={styles.counter}>{number}</Text>
                : null
            }
        </View>

    )
};
export default EBBellCounter;
