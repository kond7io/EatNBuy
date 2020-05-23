import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import avatar from '../../../../img/test/testIMG.jpg';

import {styles} from './styles';

import EBBellCounter from '../../../../components/EBBellCounter/EBBellCounter';
import EBImagePicker from '../../../../components/EBImagePicker/EBImagePicker';
import {nameFormat} from '../../../../utils/nameFormat';

console.disableYellowBox = true;
const userName = nameFormat('Martyna')

const EBHeader = ({number, groupName}) => {

    return (
        <View style={styles.header}>
            <View style={styles.settings}>
                <Icon name={'share'}  color='white' size={25}/>
                <Text style={styles.groupName}>{groupName}</Text>
                <EBBellCounter number={number} />
            </View>
            <View style={styles.about}>
                <Image source = {avatar}
                       style={styles.image}
                />
                <Text style={{color:'white', fontWeight:'bold', fontSize:20, }}>Witaj, {userName}</Text>
            </View>
        </View>

    )
};
export default EBHeader;
