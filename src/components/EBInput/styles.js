import { StyleSheet } from 'react-native';
import {windowHeight, windowWidth} from '../../utils/deviceDimension';

export const styles = StyleSheet.create({
    item: {
        width: windowWidth * 0.8,
    },
    label: {
        marginTop: -5,
        color: 'white',
    },
    input: {
        color: 'white',
    },
    NBIcon: {
        color: "white",
        fontSize: 25
    },
    NBIconOff: {
        color: "#e9e9e9",
        fontSize: 25
    },

});
