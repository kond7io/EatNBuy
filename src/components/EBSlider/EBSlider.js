import React from 'react';
import {Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
import EBSlide from './EBSlide/EBSlide';
import PropTypes from 'prop-types'

import {styles} from './styles';

const EBSlider = ({auto, loop, dotColor, activeDotColor, items, buttonsVisible, dotVisible}) => {
    return (
        <View style={styles.container}>
            <Swiper
                autoplay={auto}
                loop={loop}
                showsButtons={buttonsVisible}
                showsPagination={dotVisible}
                activeDotStyle={styles.activeDotStyle}
                dotStyle={styles.dotStyle}
                dotColor={dotColor}
                activeDotColor={activeDotColor}>

                {items.map(({img, message, optional}) => {
                        return <EBSlide
                            image={img}
                            message={message}
                            optionalText={optional ? optional : null}
                        />
                })}

            </Swiper>
        </View>
    )
};

EBSlider.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        img: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        optionalText: PropTypes.string
    }))
};
export default EBSlider;
