import React from 'react';
import {Image, Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {styles} from './styles';

const EBListButton = () => {

    return (
            <View style={styles.container}>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Nowa lista</Text>
                    <Icon name="shopping-basket" size={25} color={'white'}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Historia</Text>
                    <Icon name="history" size={25} color={'white'}/>
                </TouchableOpacity>
            </View>

    )
};
export default EBListButton;
