import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Animated from 'react-native-reanimated';
import EBHeader from './EBHeader/EBHeader';
import EBScrollList from './EBScrollList/EBScrollList';
import {windowHeight} from '../../../utils/deviceDimension';

import {styles} from '../MainScreen/styles';
import EBNotifications from './EBNotifications/EBNotifications';


console.disableYellowBox = true;
const number = 3;
const groupName = "Srebrna 45";
const element = ["aaa",'bbb','ccc','ddd','eee','fff','ggg','hhh','iii','jjj','kkk','lll','mmm','nnn','ooo','ppp','rrr','sss','ttt','111','222','333','444','555','666'];

const MainScreen = () => {
    const NAVBAR_HEIGHT = windowHeight * 0.6; //0.365
    const scroll = new Animated.Value(0);
    const headerY = Animated.multiply(Animated.diffClamp(scroll, 0, NAVBAR_HEIGHT), -1);



    return (
        <View style={styles.container}>

            <EBHeader headerY={headerY}  number={number} groupName={groupName}/>
            <EBScrollList navbarHeight={NAVBAR_HEIGHT} scroll={scroll}/>
            <EBNotifications/>


        </View>

    )
};
export default MainScreen;
