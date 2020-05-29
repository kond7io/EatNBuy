import { StyleSheet, Dimensions } from 'react-native';
import {windowHeight, windowWidth} from '../../../../../utils/deviceDimension';
import {theme} from '../../../../../utils/colors';


export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: windowHeight * 0.217,
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 5,
        margin: windowWidth * 0.05,
        height: windowHeight * 0.1,
        backgroundColor: theme,
        borderColor: 'black',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },

});
