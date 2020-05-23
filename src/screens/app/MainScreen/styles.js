import { StyleSheet, Dimensions } from 'react-native';
import {windowHeight, windowWidth} from '../../../utils/deviceDimension';
import {theme} from '../../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
      flex: 1,
    },
    settings: {
        flex:0.5,
        flexDirection: 'row',
        backgroundColor: theme,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    about: {
        flex:2,
        backgroundColor: theme
    },
    groupName: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: windowHeight * 0.024
    }
});
