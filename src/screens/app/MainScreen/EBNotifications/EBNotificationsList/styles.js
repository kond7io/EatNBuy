import { StyleSheet, Dimensions } from 'react-native';
import {windowHeight, windowWidth} from '../../../../../utils/deviceDimension';
import {theme} from '../../../../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection:'row',
        margin: windowHeight * 0.0075
    },
    image: {
        width: windowHeight * 0.07,
        height:windowHeight * 0.07,
        borderRadius: 50
    },
    info: {
        flexDirection: 'column',
        flex: 3,
    },
    user: {
        fontWeight: 'bold',
        fontSize: windowHeight * 0.0175
    },
    date: {
        marginLeft: windowHeight * 0.0075,
        marginRight: windowHeight * 0.0075
    },
    hour: {
        marginLeft: windowHeight * 0.0075
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center'
    }

});
