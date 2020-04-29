import React from 'react';
import { View,} from 'react-native';
import Swiper from 'react-native-swiper';
import EBSlide from './EBSlide/EBSlide';

import {styles} from './styles';

import loginImage1 from '../../img/login/loginImage1.png';
import loginImage2 from '../../img/login/loginImage2.png';
import loginImage3 from '../../img/login/loginImage3.png';
import loginImage4 from '../../img/login/loginImage4.png';
import loginImage5 from '../../img/login/loginImage5.png';

const EBSlider = ({auto, loop, dotColor, activeDotColor}) => {
    return (
        <View style={styles.container}>
            <Swiper
                autoplay={auto}
                loop={loop}
                style={styles.wrapper}
                activeDotStyle={styles.activeDotStyle}
                dotStyle={styles.dotStyle}
                dotColor={dotColor}
                activeDotColor={activeDotColor}>

                <EBSlide image={loginImage1} text={"Sprawdź stan produktów"}/>
                    <EBSlide image={loginImage2} text={"Stwórz listę zakupów"}/>
                        <EBSlide image={loginImage3} text={"Dobierz brakujące produkty"}/>
                            <EBSlide image={loginImage4} text={"Utwórz lub dołącz do grupy"}/>
                                <EBSlide image={loginImage5} text={"Miej wpływ na statystyki"}/>


            </Swiper>


        </View>
    )
};
export default EBSlider;
