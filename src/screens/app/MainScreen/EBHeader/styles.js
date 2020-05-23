import { StyleSheet, Dimensions } from 'react-native';
import {windowHeight, windowWidth} from '../../../../utils/deviceDimension';
import {theme} from '../../../../utils/colors';

export const styles = StyleSheet.create({
    header: {
        flex: 1.3,
    },
    settings: {
        flex:0.5,
        flexDirection: 'row',
        backgroundColor: theme,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    groupName: {
        fontWeight: 'bold',
        color: theme,
        fontSize: windowHeight * 0.03,
        backgroundColor: 'white',
        borderRadius: 15,
        paddingLeft: 5,
        paddingRight: 5

    },
    about: {
        flex:2,
        backgroundColor: theme,
        alignItems: 'center',
        justifyContent: 'space-evenly',

    },
    image: {
        width: windowWidth * 0.295,
        height: windowWidth * 0.295,
        borderRadius: windowWidth * 0.6,
        borderWidth: 3,
        borderColor: 'white',


    },
});
