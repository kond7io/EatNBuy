import { StyleSheet, Dimensions } from 'react-native';
import {windowHeight, windowWidth} from '../../../utils/deviceDimension';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    text: {
        marginTop: windowHeight * 0.1,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: windowWidth * 0.065
    }
});
