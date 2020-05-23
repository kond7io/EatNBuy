import React from 'react';
import { View } from 'react-native';
import EBLoginForm from './EBLoginForm/EBLoginForm';
import EBSlider from '../../../components/EBSlider/EBSlider';

import {styles} from '../SignIn/styles';
import {theme} from '../../../utils/colors';
import loginImage1 from '../../../img/signIn/loginImage1.png';
import loginImage2 from '../../../img/signIn/loginImage2.png';
import loginImage3 from '../../../img/signIn/loginImage3.png';
import loginImage4 from '../../../img/signIn/loginImage4.png';
import loginImage5 from '../../../img/signIn/loginImage5.png';

const SignIn = () => {
    const items = [
        {message: "Sprawdź stan produktów", img: loginImage1},
        {message: "Stwórz listę zakupów", img: loginImage2},
        {message: "Dobierz brakujące produkty", img: loginImage3},
        {message: "Utwórz lub dołącz do grupy", img: loginImage4},
        {message: "Miej wpływ na statystyki", img: loginImage5}];

    return (
        <View style={styles.container}>
            <EBSlider auto={true} loop={true} buttonsVisible={false} dotVisible={true} dotColor={"#8e8991"} activeDotColor={theme} items={items} />
            <EBLoginForm />
        </View>

    )
};
export default SignIn;
