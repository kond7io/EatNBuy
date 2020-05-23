import { StyleSheet, Dimensions } from 'react-native';
import {windowHeight, windowWidth} from '../../utils/deviceDimension';
import {theme} from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row'
    },
    counter: {
        color: theme,
        fontSize: windowWidth * 0.03,
        fontWeight: 'bold',
        backgroundColor: 'white',
        borderRadius: 25,
        height: windowWidth * 0.04,
        width: windowWidth * 0.04,
        textAlign: 'center',
        marginLeft: - windowWidth * 0.025
    }
});
