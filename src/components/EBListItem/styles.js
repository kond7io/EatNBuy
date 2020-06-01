import { StyleSheet, Dimensions } from 'react-native';
import {windowHeight, windowWidth} from '../../utils/deviceDimension';
import {theme} from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent:'space-around',
        flexDirection: "row",
        margin: windowWidth * 0.025,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        backgroundColor: 'white',
        padding:windowWidth * 0.02,
        borderColor: 'black'
    },
    image: {
        width: windowHeight * 0.09,
        height:windowHeight * 0.09,
        borderRadius: 50
    },
    info: {
        flex:3,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    name: {
        fontSize: windowHeight * 0.027
    },
    icon: {
      opacity: 0.5,
    },
    user: {
        marginLeft: 3,
        marginRight: 5,
        opacity: 0.5
    },
    date: {
        marginLeft: 3,
        opacity: 0.5
    },
    counter: {
        flex:1,
        alignItems:'center'
    },
    counterNumber: {
        textAlign:'center',
        fontWeight:'bold',
        textAlignVertical:'center',
        fontSize: windowHeight * 0.02,
        backgroundColor:theme,
        borderRadius: 50,
        color:'white',
        height: windowHeight * 0.043,
        width: windowHeight * 0.043
    }
});
