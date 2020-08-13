import React,{useState} from 'react';
import {View, Text, TouchableOpacity, LayoutAnimation, UIManager} from 'react-native';
import EBIcon from "../../EBIcon/EBIcon";
import Icons from '../../../icons/Icons';
import Icon from "react-native-vector-icons/MaterialIcons";

import {styles} from './styles';

const EBCollapsibleHeader = ({category, data, visible, setVisible}) => {

    if (Platform.OS === 'android') {UIManager.setLayoutAnimationEnabledExperimental(true);}

    const switchVisible = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setVisible(!visible);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={()=> switchVisible() }
                style={styles.header}
            >
                <EBIcon
                    source={Icons.tea_circle}
                    height={visible ? 30 : 45}
                    width={visible ? 30 : 45}/>
                <View style={styles.headerContent}>
                    <Text style={[styles.itemCategory,{fontSize: visible ? 12 : 17}]}>{category}</Text>
                    <Text style={styles.productCounter}>Produktów w kategorii: {data.length}</Text>
                </View>
                <Icon name={visible ? 'remove' : 'add'} size={25} style={styles.icon}/>
            </TouchableOpacity>


        </View>
    )
};
export default EBCollapsibleHeader;
