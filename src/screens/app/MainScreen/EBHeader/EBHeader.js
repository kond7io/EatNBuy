import React from 'react';
import {Image, Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import avatar from '../../../../img/test/testIMG.jpg';
import back from '../../../../img/mainScreen/background.jpg';
import Animated from 'react-native-reanimated';

import {styles} from './styles';

import EBBellCounter from '../../../../components/EBBellCounter/EBBellCounter';
import {nameFormat} from '../../../../utils/nameFormat';
import EBListButton from './EBListButton/EBListButton';

console.disableYellowBox = true;
const userName = nameFormat('Martyna')

const EBHeader = ({headerY, number, groupName}) => {

    return (
        <Animated.View style={[styles.header,{transform: [{translateY: headerY}]}]}>
            <ImageBackground source={back} style={styles.imageBackground}>
            <View style={styles.settings}>
                <Icon name={'share'}  color='white' size={30}/>
                <Text style={styles.groupName}>{groupName}</Text>
                <EBBellCounter number={number} />
            </View>
            <View style={styles.about}>
                <Image source = {avatar}
                       style={styles.image}
                />
                <Text style={styles.welcome}>Witaj, {userName}</Text>
                </View>
            </ImageBackground>
           <EBListButton/>

        </Animated.View>
    )
};
export default EBHeader;
