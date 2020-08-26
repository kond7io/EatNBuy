import React, {useState} from 'react';
import {FlatList} from 'react-native';

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
