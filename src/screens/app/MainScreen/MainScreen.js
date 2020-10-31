import React, {useState} from 'react';
import {Text, View} from 'react-native';
import { useSelector } from "react-redux";
import Animated from 'react-native-reanimated';
import EBHeader from './EBHeader/EBHeader';
import EBScrollList from './EBScrollList/EBScrollList';
import {windowHeight} from '../../../constans/deviceDimension';

import {styles} from './styles';
import {getUser} from "../../../redux/User/User.selector";
import {getUserGroupedName} from "../../../redux/User/User.selector";

console.disableYellowBox = true;
const number = 3;

const MainScreen = () => {

    const user = useSelector(getUser);
        const groupName = useSelector(getUserGroupedName);
debugger;
    const NAVBAR_HEIGHT = windowHeight * 0.6; //0.365
        const scroll = new Animated.Value(0);
            const headerY = Animated.multiply(Animated.diffClamp(scroll, 0, NAVBAR_HEIGHT), -1);



    return (
        <View style={styles.container}>

            <EBHeader headerY={headerY}  number={number} groupName={groupName} name={user.name} profilImage={user.profilImage}/>
            <EBScrollList navbarHeight={NAVBAR_HEIGHT} scroll={scroll}/>
        </View>

    )
};
export default MainScreen;
