import { StyleSheet, Dimensions } from 'react-native';
import {windowHeight, windowWidth} from '../../../constans/deviceDimension';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection:'row',
        margin: windowHeight * 0.0075,

        backgroundColor: 'red'
    },

});
