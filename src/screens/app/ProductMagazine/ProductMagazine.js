import React,{useState} from 'react';
import {View} from 'react-native';
import Animated from 'react-native-reanimated';
import EBSearchProduct from './EBSearchProduct/EBSearchProduct';
import EBProductList from './EBProductList/EBProductList';

import {styles} from './styles';

console.disableYellowBox = true;

const ProductMagazine = () => {


    return (
        <View style={styles.container}>
            <View
                style={styles.headerSearchProduct}>
                <EBSearchProduct/>
            </View>

            <View
                style={styles.block}
            />

            <View
                style={styles.productsListContainer}>
                <EBProductList />
            </View>
        </View>

    )
};
export default ProductMagazine;
