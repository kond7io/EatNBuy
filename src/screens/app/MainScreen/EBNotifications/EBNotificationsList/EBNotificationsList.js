import React, { Component, useState } from "react";
import {Alert, Modal, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {styles} from './styles'

const EBNotificationsList = ({items}) => {

    return (
        <View style={styles.container}>
            <View style={{flex:1, alignItems:'center'}}>
                <Image source={items.img} style={styles.image} />
            </View>
            <View style={styles.info}>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.user}>{items.user}</Text>
                    <Text style={{fontSize: 12}}>{items.mT}</Text>
                </View>
                <View style={{opacity: 0.5, flexDirection:'row', alignItems:'center'}}>
                    <Icon name={'calendar'} />
                    <Text style={styles.date}>{items.date}</Text>
                    <Icon name={'clock'} />
                    <Text style={styles.hour}>{items.date}</Text>
                </View>
            </View>

            {(items.messageType === 0)
            ?   <View style={styles.iconContainer}>
                    <Icon style={{color: 'green'}} name={'check-circle'} size={20} />
                </View>
                : null}
            {(items.messageType === 1)
                ?   <View style={styles.iconContainer}>
                    <Icon style={{color: 'red'}} name={'times-circle'} size={20} />
                </View>
                : null}
            {(items.messageType === 2)
                ?   <View style={styles.iconContainer}>
                    <Icon style={{color: 'gray'}} name={'info-circle'} size={20} />
                </View>
                : null}

        </View>

    );
};

export default EBNotificationsList;
