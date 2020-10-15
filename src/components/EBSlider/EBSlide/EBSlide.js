import React from 'react';
import {View, ImageBackground, Text, TouchableOpacity} from 'react-native';
import Screens from "../../../navigation/Screens";
import Navigation from "../../../utils/Navigation";


import {styles} from './styles';
import PropTypes from 'prop-types';

const EBSlide = ({image, message, optionalText, target}) => {
    return (
        <TouchableOpacity style={styles.slide} onPress={() => Navigation.navigate(target)}>
                <ImageBackground source={image} style={styles.imageStyle}/>
                <Text style={styles.text}>{message}</Text>
                <Text style={styles.optionalText}>{optionalText}</Text>

        </TouchableOpacity>

    )
};
EBSlide.propTypes = {
    image: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    optionalText: PropTypes.string
};
export default EBSlide;
