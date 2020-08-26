import React, {useCallback, useEffect, useRef, useState} from 'react';
import {View, Text, Animated, Button, ImageBackground, Image, ScrollView} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import EBSearchProduct from "../../../components/EBSearchProduct/EBSearchProduct";
import image from '../../../img/signIn/loginImage1.png';
import EBProductList from "../../../components/EBProductList/EBProductList";
import EBNotifications from "../../../components/EBNotifications/EBNotifications";

import {colors} from "../../../constans/colors";
import {styles} from './styles';
import EBProductModal from "../../../components/EBProductModal/EBProductModal";

const AddProductList = ({}) => {
    const [modalVisible, setModalVisible] = useState(false);

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
            <View style={{flex: 0.5, flexDirection:'row'}}>
                <Animated.View
                    style={[styles.icon,{opacity: hideIcon.current,  }]}>
                    <Icon onPress={()=> isAnimating ? handleEffect() : null} name={'arrow-circle-right'} color={colors.theme} size={45}  />
                </Animated.View>
                <Animated.View
                    style={[styles.container, {left: hideSearch.current, opacity: showSearch.current}]}>

                    <EBSearchProduct modalVisible={modalVisible} setModalVisible={setModalVisible} barcodeColor={'black'}/>
                </Animated.View>

            </View>

            {isAnimating ?
            <Animated.View style={{flex:2, alignItems: 'center',justifyContent:'space-evenly', opacity: hideIcon.current}}>
                <Image source={image} style={{ width: 270, height: 270 }}/>
                <Text style={{marginBottom:100,fontSize: 18, color: colors.theme, fontWeight:'bold'}}>Kliknij ikonkę strzałki i stwórz nową listę</Text>
            </Animated.View>
            : <Animated.View style={{flex:2, alignItems:'center',
                    justifyContent:'center',opacity: showSearch.current}}>
                    <ScrollView style={{flex:1,

                        width:'100%',}}>
                        <EBProductList />
                        <EBProductModal setModalVisible={setModalVisible} modalVisible={modalVisible}/>
                    </ScrollView>
                </Animated.View>
}
        </View>
    )
};
export default AddProductList;
