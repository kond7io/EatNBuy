import React,{useState} from 'react';
import {View, Text } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

import {styles} from './styles';

const EBItem = ({item}) => {
    return (
        <View style={styles.container} >
            <Icon
                style={styles.icon} color={item.selected ? 'orange' : 'gray'} size={35} name='grade'
            />
            <Text
                style={styles.item}>{item.product + ' ' + item.company}
            </Text>
        </View>
    )
};
export default EBItem;
