import { StyleSheet, Dimensions } from 'react-native';
import {windowHeight, windowWidth} from '../../../../constans/deviceDimension';
import {colors} from "../../../../constans/colors";

export const styles = StyleSheet.create({

    container: {
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: colors.theme
    },
    textContainer: {
        flex:1,
        width: '100%',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    text: {
        fontSize: 22,
        marginBottom: windowHeight * 0.02,
        color: 'white',
        textAlign:'center'
    },
    inputContainer: {
        flex:0.5,
        width: '100%',
        alignItems:'center',
        justifyContent:'flex-start',
        marginBottom: windowHeight * 0.15,
    },
    input: {
        width: '80%',
        padding: 15,
        borderRadius: 35,
        fontWeight: 'bold',
        backgroundColor: 'white',
        color: colors.theme,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    button: {
        flex:0.5,
        justifyContent:'flex-start',

    }
});
