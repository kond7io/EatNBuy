import { StyleSheet } from 'react-native';
import {windowHeight, windowWidth} from '../../../../constans/deviceDimension';

export const styles = StyleSheet.create({
    container: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: windowHeight * 0.01
    },
    icon: {
        flex:0.8,
        alignItems:'center'
    },
    item: {
        flex:3,
        textAlign:'left',
        fontSize: 15,
    }

});
