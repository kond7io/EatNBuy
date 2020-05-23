import { StyleSheet, Dimensions } from 'react-native';
import {windowHeight, windowWidth} from '../../utils/deviceDimension';
import {theme} from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row'
    },
    counter: {
        color: theme,
        fontSize: windowWidth * 0.032,
        fontWeight: 'bold',
        backgroundColor: 'white',
        borderRadius: 25,
        height: windowWidth * 0.045,
        width: windowWidth * 0.045,
        textAlign: 'center',
        marginLeft: - windowWidth * 0.03
    }
});
