import React, {useCallback, useEffect, useRef, useState} from 'react';
import {View, Text, Animated, Button} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from './styles';
import EBSearchProduct from "../ProductMagazine/EBSearchProduct/EBSearchProduct";
import {useFocusEffect} from "@react-navigation/native";
import {colors} from "../../../constans/colors";

const AddProductList = ({}) => {

    const [isAnimating, setIsAnimating] = useState(true);
    const hideSearch = useRef(new Animated.Value(-400));
        const showSearch = useRef(new Animated.Value(0));
            const hideIcon = useRef(new Animated.Value(1));

    const handleEffect = useCallback(() => {
        setIsAnimating(false);
        Animated.parallel([
            Animated.timing(hideSearch.current,{
                toValue: 0,
                duration: 1000,
                delay: 1000,

            }),
            Animated.timing(showSearch.current,{
                toValue: 1,
                duration: 1200,
                delay: 1000
            }),
            Animated.timing(hideIcon.current,{
                toValue: 0,
                duration: 1000,

            }),
        ]).start();
    })
    return (
        <View style={{flex:1}}>
            <View style={{flex: 0.8, flexDirection:'row'}}>
                <Animated.View
                    style={[styles.icon,{opacity: hideIcon.current, }]}>
                    <Icon onPress={()=> isAnimating ? handleEffect() : null} name={'arrow-circle-right'} color={colors.theme} size={45}  />
                </Animated.View>
                <Animated.View
                    style={[styles.container, {left: hideSearch.current, opacity: showSearch.current}]}>

                    <EBSearchProduct barcodeColor={'black'}/>
                </Animated.View>

            </View>

            {isAnimating ?
            <View style={{flex:2 ,backgroundColor: 'blue'}}></View>
            : <View style={{flex:2 ,backgroundColor: 'red'}}></View>
}
        </View>
    )
};
export default AddProductList;
