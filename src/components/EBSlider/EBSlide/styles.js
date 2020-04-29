import { StyleSheet, Dimensions } from 'react-native';
import {windowHeight} from '../../../utils/deviceDimension';
import {theme} from '../../../utils/colors';


export const styles = StyleSheet.create({
    imageStyle:{
        width: 150,
        height: 150
    },
    slide: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        top: windowHeight * 0.025,
        fontSize: windowHeight * 0.025,
        fontWeight: 'bold',
        color: theme
    }
});
