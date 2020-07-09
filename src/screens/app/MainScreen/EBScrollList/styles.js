import { StyleSheet, Dimensions } from 'react-native';
import {windowHeight, windowWidth} from '../../../../constans/deviceDimension';

export const styles = StyleSheet.create({
    text: {
        marginLeft: windowWidth * 0.025,
        fontSize: windowWidth * 0.07,
        fontWeight: 'bold',
        marginBottom: windowHeight *0.025
    },

});
