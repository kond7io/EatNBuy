import React,{useState} from 'react';
import {ScrollView, View} from 'react-native';
import EBSearchProduct from '../../../components/EBSearchProduct/EBSearchProduct';
import EBProductList from '../../../components/EBProductList/EBProductList';

import {styles} from './styles';

console.disableYellowBox = true;

const ProductMagazine = () => {

    return (
        <View style={styles.container}>
            <View
                style={styles.headerSearchProduct}>
                <EBSearchProduct barcodeColor={'white'}/>
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
