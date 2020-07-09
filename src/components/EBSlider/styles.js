import { StyleSheet } from 'react-native';
import {windowHeight} from '../../constans/deviceDimension';

export const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    dotStyle: {
      opacity: 0.7,
      marginLeft: 10,
      marginRight: 10
    },
    activeDotStyle: {
        marginLeft: 10,
        marginRight: 10,
        width: 14,
        height: 14,
        borderRadius: 7
    },
});
