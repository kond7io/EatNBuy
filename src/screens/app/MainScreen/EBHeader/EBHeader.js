import React, {useState} from 'react';
import {Image, Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import avatar from '../../../../img/signUp/avatar.png';
import back from '../../../../img/mainScreen/background.jpg';
import Animated from 'react-native-reanimated';

import {styles} from './styles';

import EBBellCounter from '../../../../components/EBBellCounter/EBBellCounter';
import {nameFormat} from '../../../../utils/nameFormat';
import EBListButton from './EBListButton/EBListButton';
import {colors} from "../../../../constans/colors";
import EBNotifications from "../../../../components/EBNotifications/EBNotifications";

console.disableYellowBox = true;

const EBHeader = ({headerY, number, groupName, name, profilImage}) => {

    const [notificationsVisible, setNotifications] = useState(false);

    return (
        <Animated.View
            style={[styles.header,{transform: [{translateY: headerY}]}]}>
            <ImageBackground
                source={back}
                style={styles.imageBackground}>
                <View style={styles.settings}>
                    <Icon
                        name={'share'}
                        color='white'
                        size={25}/>
                    <Text
                        style={styles.groupName}>{groupName}</Text>
                    <TouchableOpacity
                        onPress={()=> setNotifications(!notificationsVisible)}
                    >
                    <EBBellCounter
                        number={number}
                        iconColor={'white'}
                        bgColor={'white'}
                        ctColor={colors.theme}
                    />
                    </TouchableOpacity>
                    <EBNotifications setNotifications={setNotifications} notificationsVisible={notificationsVisible}/>
                </View>
                <View
                    style={styles.about}>
                    <Image
                        source = {profilImage? profilImage :avatar}
                        style={styles.image}
                    />
                    <Text
                        style={styles.welcome}>Witaj, {nameFormat(name)}</Text>
                    </View>
            </ImageBackground>
            <EBListButton />
        </Animated.View>
    )
};
export default EBHeader;
