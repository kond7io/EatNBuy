import React from 'react';
import { View, ImageBackground, Text } from 'react-native';


import {styles} from './styles';

const EBSlide = ({image, text}) => {
    return (
        <View style={styles.slide}>
                <ImageBackground source={image} style={styles.imageStyle}/>
                <Text style={styles.text}>{text}</Text>
        </View>

    )
};
export default EBSlide;
