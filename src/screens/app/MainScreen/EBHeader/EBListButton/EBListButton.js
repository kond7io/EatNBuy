import React from 'react';
import {Image, Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Screens from "../../../../../navigation/Screens";
import Navigation from "../../../../../utils/Navigation";

import {styles} from './styles';

const EBListButton = ({}) => {

    return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={()=> Navigation.navigate(Screens.ADD_PRODUCT_LIST) }
                    style={styles.button}>
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
