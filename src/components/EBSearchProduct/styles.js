import { StyleSheet, Dimensions } from 'react-native';
import {windowHeight, windowWidth} from '../../constans/deviceDimension';

export const styles = StyleSheet.create({
    header: {
        flex: 1,
        width: '80%',
        flexDirection: 'row',
        alignItems:'center',

    },
    searchInput: {
        flex: 4,
        backgroundColor: 'white',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems:'center',
        borderRadius: windowWidth * 0.07,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    iconButton: {
        flex: 1,
        alignItems:'center'
    },
    icon: {
        fontSize: windowHeight * 0.03,
        backgroundColor: 'white',
    },
    textInput: {

        borderRadius: windowWidth * 0.07
    },
    barcodeButton: {
        flex: 1,

        justifyContent:'center',
        alignItems: 'flex-end',
        borderRadius: 50,
        height: 60,

    },
    iconBarcode: {
        fontSize: windowHeight * 0.055,
    },

});
