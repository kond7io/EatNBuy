import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import EBSlider from '../../../components/EBSlider/EBSlider';

import {styles} from './styles';
import {theme} from '../../../utils/colors';
import addImage from '../../../img/groupScreen/add.png';
import joinImage from '../../../img/groupScreen/join.png';
import EBBellCounter from "../../../components/EBBellCounter/EBBellCounter";
import EBNotifications from "../MainScreen/EBNotifications/EBNotifications";
import {windowHeight, windowWidth} from "../../../utils/deviceDimension";

console.disableYellowBox = true;

const GroupScreen = () => {
    const top = windowHeight * 0.02;
    const right = windowWidth * 0.05;
    const items = [
        {message: "Stwórz grupę i dodaj użytkowników", img: addImage, optional: "Tekst nr 1.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis lobortis diam."},
        {message: "Dołącz do istniejącej grupy", img: joinImage, optional: "Tekst nr 2.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis lobortis diam."}];

    const [notificationsVisible, useNotifications] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={()=> useNotifications(!notificationsVisible)}>
                <EBBellCounter
                    number={'3'}
                    iconColor={theme}
                    bgColor={theme}
                    ctColor={'white'}
                    style={{marginTop: top, marginRight: right}} />
            </TouchableOpacity>
            <Text
                style={styles.text}>Wybierz opcję</Text>
            <EBSlider
                auto={false}
                loop={true}
                buttonsVisible={true}
                dotVisible={false}
                dotColor={"#8e8991"}
                activeDotColor={theme} items={items} />
            <EBNotifications
                notificationsVisible={notificationsVisible}
                useNotifications={useNotifications} />
        </View>

    )
};
export default GroupScreen;
