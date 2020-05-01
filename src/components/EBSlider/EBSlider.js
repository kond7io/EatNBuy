import React from 'react';
import {Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
import EBSlide from './EBSlide/EBSlide';

import {styles} from './styles';

const EBSlider = ({auto, loop, dotColor, activeDotColor, items}) => {
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

                {items.map((item) => {
                        return <EBSlide image={item.img} message={item.message} />
                })}

            </Swiper>


        </View>
    )
};
export default EBSlider;
