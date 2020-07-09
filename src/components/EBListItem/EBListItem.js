import React from 'react';
import {Image, Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {styles} from './styles';

const EBListItem = ({items}) => {

    return (
        <View style={styles.container }>
            <View style={{flex:1.5}}>
                <Image source={items.img} style={styles.image}/>
            </View>
            <View style={styles.info}>
                <View style={{flexDirection:'column'}}>
                        <Text style={styles.name}>{items.name}</Text>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Icon styles={styles.icon} name={'user'} color={'gray'}/>
                            <Text style={styles.user}>{items.user}</Text>
                            <Icon styles={styles.icon} name={'calendar'} color={'gray'}/>
                            <Text style={styles.date}>{items.date}</Text>
                        </View>

                </View>
            </View>
            <View style={styles.counter}>
                <Text style={styles.counterNumber}>{items.counter}</Text>
            </View>
        </View>
    )
};
export default EBListItem;
