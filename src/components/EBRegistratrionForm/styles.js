import { StyleSheet, Dimensions } from 'react-native';
import {windowHeight, windowWidth} from '../../utils/deviceDimension';
import {theme} from '../../utils/colors';

export const styles = StyleSheet.create({
    form: {
        flex: 1,
        backgroundColor: theme,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
        alignItems: 'center',
    },
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
    registrationText: {
        fontSize: windowHeight * 0.02,
        color: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        marginTop: windowHeight * 0.02,
    },

});
