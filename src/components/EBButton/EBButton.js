import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

import {styles} from './styles';
import {theme} from '../../utils/colors';
import PropTypes from 'prop-types';

const EBButton = ({title, icon, animation}) => {
    return (
        animation ?
        <Animatable.View animation='fadeInDown' delay={0}>
           <TouchableOpacity style={styles.container}>
               <Icon name={icon} size={25} color={theme} />
               <Text style={styles.text}>{title}</Text>
           </TouchableOpacity>
        </Animatable.View>
                : null
    )
};
EBButton.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    animation: PropTypes.string
};
export default EBButton;


