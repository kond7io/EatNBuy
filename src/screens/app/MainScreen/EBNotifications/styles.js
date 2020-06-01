import { StyleSheet, Dimensions } from 'react-native';
import {windowHeight, windowWidth} from '../../../../utils/deviceDimension';
import {theme} from '../../../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
        opacity: 0.9,


    },
    modal: {

        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        justifyContent:'center',
        width: '90%',
        height: '80%',
        borderWidth: 1,
        borderColor: 'gray'

    },
    notificationsText: {
        textAlign:'left',
        fontWeight: 'bold',
        opacity: 0.5
    }
});
