import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './styles';

console.disableYellowBox = true;

const EBIcon = ({source, height, width}) => {
    return (
        <View style={styles.container}>
            <Image style={{width: width? width: 40, height: height ? height: 40}} source={source}/>
        </View>
        )
};
export default EBIcon;
