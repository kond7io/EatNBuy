import React,{useState} from 'react';
import {ImageBackground, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Animated from 'react-native-reanimated';
import EBSearchProduct from './EBSearchProduct/EBSearchProduct';
import EBProductList from './EBProductList/EBProductList';

import {styles} from './styles';

import {theme} from '../../../utils/colors';
import back from '../../../img/productMagazine/background.jpg';

console.disableYellowBox = true;

const ProductMagazine = () => {


    return (
        <View style={styles.container}>
            <ImageBackground source={back} style={{flex:1, width:'100%', alignItems:'center'}}>
                <EBSearchProduct/>
                <EBProductList/>
            </ImageBackground>
        </View>

    )
};
export default ProductMagazine;
