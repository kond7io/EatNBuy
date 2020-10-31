import React, {useEffect, useState} from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from "react-redux";
import EBSlider from '../../../components/EBSlider/EBSlider';

import {styles} from './styles';
import {colors} from '../../../constans/colors';
import addImage from '../../../img/groupScreen/add.png';
import joinImage from '../../../img/groupScreen/join.png';
import EBBellCounter from "../../../components/EBBellCounter/EBBellCounter";
import EBNotifications from "../../../components/EBNotifications/EBNotifications";
import {windowHeight, windowWidth} from "../../../constans/deviceDimension";
import Screens from "../../../navigation/Screens";
import {getUserIsGrouped} from "../../../redux/User/User.selector";
import Navigation from "../../../utils/Navigation";

console.disableYellowBox = true;

const GroupScreen = () => {
    const [notificationsVisible, setNotifications] = useState(false);
    const isGrouped = useSelector(getUserIsGrouped);

    const top = windowHeight * 0.02;
    const right = windowWidth * 0.05;

    const items = [
        {target: Screens.ADD_GROUP, message: "Stwórz grupę i dodaj użytkowników", img: addImage, optional: "Tekst nr 1.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis lobortis diam."},
        {target: Screens.SELECT_GROUP, message: "Dołącz do istniejącej grupy", img: joinImage, optional: "Tekst nr 2.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis lobortis diam."}];

    useEffect(()=>{
        
    })

    return (
        isGrouped ? <>{Navigation.navigate(Screens.MAIN_SCREEN)}</>
        :<View style={styles.container}>
            <TouchableOpacity
                onPress={()=> setNotifications(!notificationsVisible)}>
                <EBBellCounter
                    number={'3'}
                    iconColor={colors.theme}
                    bgColor={colors.theme}
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
                activeDotColor={colors.theme} items={items}
            />

            <EBNotifications
                notificationsVisible={notificationsVisible}
                setNotifications={setNotifications} />
        </View>

    )
};
export default GroupScreen;
