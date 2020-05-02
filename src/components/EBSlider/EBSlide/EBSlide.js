import React from 'react';
import { View, ImageBackground, Text } from 'react-native';


import {styles} from './styles';

const EBSlide = ({image, message}) => {
    return (
        <View style={styles.slide}>
                <ImageBackground source={image} style={styles.imageStyle}/>
                <Text style={styles.text}>{message}</Text>
        </View>

    )
};
export default EBSlide;
