import { StyleSheet, Dimensions } from 'react-native';
import {windowHeight, windowWidth} from '../../constans/deviceDimension';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    counter: {
        height: windowWidth * 0.045,
        width: windowWidth * 0.045,
        fontSize: windowWidth * 0.032,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginLeft: - windowWidth * 0.03,
        borderRadius: 25
    }
});
