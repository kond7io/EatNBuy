import React,{useState} from 'react';
import {ImageBackground, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Animated from 'react-native-reanimated';

import {windowHeight} from '../../../utils/deviceDimension';

import {styles} from '../ProductMagazine/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../../../utils/colors';
import back from '../../../img/b.jpg';

console.disableYellowBox = true;

const ProductMagazine = () => {


    return (
        <View style={styles.container}>
            <ImageBackground source={back} style={{flex:1, width:'100%', alignItems:'center'}}>
            <View style={styles.header}>

                <View style={styles.searchInput}>
                    <View style={{flex: 1, alignItems:'center'}}>
                        <Icon style={styles.icon} name={'magnify'} color={'gray'}/>
                    </View>
                    <View style={{flex:4}}>
                        <TextInput
                        style={styles.textInput}
                        placeholder={'Szukaj produktu...'}
                        placeholderTextColor={'gray'}
                    />
                    </View>
                    <TouchableOpacity style={{flex: 1, alignItems:'center'}}>
                        <Icon style={styles.icon} name={'plus'} color={'black'}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.barcodeButton}>
                    <Icon style={styles.iconBarcode} name={'barcode-scan'} color={'black'}/>
                </TouchableOpacity>
            </View>
            <View style={styles.productList}>
                <Text>asd</Text>
            </View>
            </ImageBackground>
        </View>

    )
};
export default ProductMagazine;
