import React, { useState }from 'react';
import { TouchableOpacity, Text } from 'react-native'
import  Icon  from 'react-native-vector-icons/FontAwesome';

import {styles} from './styles';
import {theme} from '../../utils/colors';

const EBButton = ({title, icon}) => {
    return (
       <TouchableOpacity style={styles.container}>
           <Icon name={icon} size={25} color={theme} />
           <Text style={styles.text}>{title}</Text>
       </TouchableOpacity>
    )
};
export default EBButton;
