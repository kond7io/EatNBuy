import { StyleSheet, Dimensions } from 'react-native';
import {windowHeight, windowWidth} from '../../../../../utils/deviceDimension';


export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: windowHeight * 0.217,
        //
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 5,
        margin: windowWidth * 0.05,
        height: windowHeight * 0.1,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 2
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },

});
