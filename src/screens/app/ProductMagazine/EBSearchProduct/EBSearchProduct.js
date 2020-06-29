import React,{useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './styles';

console.disableYellowBox = true;

const EBSearchProduct = () => {
    return (
                <View style={styles.header}>
                    <View style={styles.searchInput}>
                        <View style={styles.iconButton}>
                            <Icon style={styles.icon} name={'magnify'} color={'gray'}/>
                        </View>
                        <View style={{flex:4}}>
                            <TextInput
                                style={styles.textInput}
                                placeholder={'Szukaj produktu...'}
                                placeholderTextColor={'gray'}
                            />
                        </View>
                        <TouchableOpacity style={styles.iconButton}>
                            <Icon style={styles.icon} name={'plus'} color={'black'}/>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.barcodeButton}>
                        <Icon style={styles.iconBarcode} name={'barcode-scan'} color={'black'}/>
                    </TouchableOpacity>
                </View>
    )
};
export default EBSearchProduct;
