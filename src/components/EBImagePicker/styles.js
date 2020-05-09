import { StyleSheet } from 'react-native';
import {windowHeight, windowWidth} from '../../utils/deviceDimension';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        marginBottom: -55,
        zIndex: 1
    },
    text: {
        textAlign:'center',
        fontWeight:'bold'
    },
    image: {
        width: windowWidth * 0.265,
        height: windowWidth * 0.265,
        borderRadius: windowWidth * 0.3,
        borderWidth: 3,
        borderColor: 'white',
        marginLeft: windowWidth * 0.055
    },
    icon: {
        color: 'white',
        borderRadius: 3,
        marginBottom: -50
    }
});
