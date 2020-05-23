import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import {styles} from '../MainScreen/styles';
import {theme} from '../../../utils/colors';
import EBBellCounter from '../../../components/EBBellCounter/EBBellCounter';
import EBHeader from './EBHeader/EBHeader';

console.disableYellowBox = true;
const number = 3;
const groupName = "Srebrna 45";
const MainScreen = () => {

    return (
        <View style={styles.container}>
           <EBHeader number={number} groupName={groupName}/>
            <View style={{flex:2}}>
                <Text style={{flex:1}}>sasdasd</Text>
            </View>
        </View>

    )
};
export default MainScreen;
