import React from 'react';
import {Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
import EBSlide from './EBSlide/EBSlide';

import {styles} from './styles';

const EBSlider = ({auto, loop, dotColor, activeDotColor, items, buttonsVisible, dotVisible}) => {
    return (
        <View style={styles.container}>
            <Swiper
                autoplay={auto}
                loop={loop}
                showsButtons={buttonsVisible}
                style={styles.wrapper}
                showsPagination={dotVisible}
                activeDotStyle={styles.activeDotStyle}
                dotStyle={styles.dotStyle}
                dotColor={dotColor}
                activeDotColor={activeDotColor}>

                {items.map((item) => {
                        return <EBSlide
                            image={item.img}
                            message={item.message}
                            optionalText={item.optional ? item.optional : null}
                        />
                })}

            </Swiper>


        </View>
    )
};
export default EBSlider;
