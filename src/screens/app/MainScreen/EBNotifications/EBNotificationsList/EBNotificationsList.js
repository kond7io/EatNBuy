import React, { Component, useState } from "react";
import {Alert, Modal, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {styles} from '../EBNotificationsList/styles'

const EBNotificationsList = ({items}) => {

    return (
        <View style={styles.container}>
            <View style={{flex:1, alignItems:'center'}}>
                <Image source={items.img} style={styles.image} />
            </View>
            <View style={styles.info}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold', fontSize: 12}}>{items.user}</Text>
                    <Text style={{fontSize: 12}}>{items.messageType}</Text>
                </View>
                <View style={{opacity: 0.5, flexDirection:'row', alignItems:'center'}}>
                    <Icon name={'calendar'} />
                    <Text style={{marginLeft: 5}}>{items.date}</Text>
                </View>

            </View>
        </View>

    );
};

export default EBNotificationsList;
