import { StyleSheet, Dimensions } from 'react-native';
import {windowHeight, windowWidth} from '../../../constans/deviceDimension';
import {colors} from '../../../constans/colors';


export const styles = StyleSheet.create({
    slide: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle:{
        width: 150,
        height: 150
    },
    text: {
        top: windowHeight * 0.025,
        fontSize: windowHeight * 0.025,
        fontWeight: 'bold',
        color: colors.theme
    },
    optionalText: {
        top: windowHeight * 0.025,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        paddingTop: windowWidth * 0.02,
        width: windowWidth * 0.7
    }
});
