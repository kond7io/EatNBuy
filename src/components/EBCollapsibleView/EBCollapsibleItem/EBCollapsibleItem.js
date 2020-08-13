import React,{useState} from 'react';
import {FlatList, Text, View, LayoutAnimation, UIManager, ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

import {styles} from './styles';
import EBItem from "./EBItem/EBItem";


const EBCollapsibleItem = ({data}) => {

    const hoverComponent = () => {
        alert('asd')
    }

    return (
            <FlatList
                data={data}
                style={styles.container}
                numColumns={1}
                scrollEnabled={false}
                renderItem={({item}) =>
                    <EBItem item={item} />
                }
            />
    )
};
export default EBCollapsibleItem;
