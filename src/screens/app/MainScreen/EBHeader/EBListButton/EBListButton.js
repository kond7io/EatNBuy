import React from 'react';
import {Image, Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import back from '../../../../../img/mainScreen/background.jpg';
import {styles} from './styles';


import {windowHeight, windowWidth} from '../../../../../utils/deviceDimension'


const EBListButton = () => {

    return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Nowa lista</Text>
                    <Icon name="shopping-basket" size={25}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Historia</Text>
                    <Icon name="history" size={25}/>
                </TouchableOpacity>
            </View>

    )
};
export default EBListButton;
