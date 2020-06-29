import { StyleSheet, Dimensions } from 'react-native';
import {windowHeight, windowWidth} from '../../../utils/deviceDimension';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    text: {
        flex: 0.2,
        marginTop: windowHeight * 0.05,
        textAlign: 'center',
        textAlignVertical: 'bottom',
        fontWeight: 'bold',
        fontSize: windowWidth * 0.065
    }
});
