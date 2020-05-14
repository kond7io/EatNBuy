import React from 'react';
import { View, ImageBackground, Text } from 'react-native';


import {styles} from './styles';
import PropTypes from 'prop-types';

const EBSlide = ({image, message, optionalText}) => {
    return (
        <View style={styles.slide}>
                <ImageBackground source={image} style={styles.imageStyle}/>
                <Text style={styles.text}>{message}</Text>
                <Text style={styles.optionalText}>{optionalText}</Text>

        </View>

    )
};
EBSlide.propTypes = {
    image: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    optionalText: PropTypes.string
};
export default EBSlide;
