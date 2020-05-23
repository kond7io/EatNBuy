import React, {useState} from 'react';
import {Text, View} from 'react-native';
import EBSlider from '../../../components/EBSlider/EBSlider';

import {styles} from '../GroupScreen/styles';
import {theme} from '../../../utils/colors';
import addImage from '../../../img/groupScreen/add.png';
import joinImage from '../../../img/groupScreen/join.png';

console.disableYellowBox = true;

const GroupScreen = () => {
    const items = [
        {message: "Stwórz grupę i dodaj użytkowników", img: addImage, optional: "Tekst nr 1.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis lobortis diam."},
        {message: "Dołącz do istniejącej grupy", img: joinImage, optional: "Tekst nr 2.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis lobortis diam."}];

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Wybierz opcję</Text>
            <EBSlider auto={false} loop={true} buttonsVisible={true} dotVisible={false} dotColor={"#8e8991"} activeDotColor={theme} items={items} />
        </View>

    )
};
export default GroupScreen;
