import React,{useState} from 'react';
import {ScrollView, View} from 'react-native';
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

            <ScrollView
                style={styles.productsListContainer}>

                    <EBProductList />

            </ScrollView>
        </View>

    )
};
export default ProductMagazine;
