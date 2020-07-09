import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

import {styles} from './styles';
import {colors} from '../../constans/colors';
import PropTypes from 'prop-types';
import Navigation from "../../utils/Navigation";
import Screens from "../../navigation/Screens";
import {getUserSignUpAction} from "../../redux/User/User.action";
import {useDispatch} from "react-redux";

const EBButton = ({title, icon, animation, target}) => {
    const dispatch = useDispatch();
    return (
        animation ?
        <Animatable.View animation='fadeInDown' delay={0}>
           <TouchableOpacity style={styles.container}
                             onPress={()=> dispatch(getUserSignUpAction('Martynka', 'martynka@gmail.com','konrad123'))}
           >
               <Icon name={icon} size={25} color={colors.theme} />
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


