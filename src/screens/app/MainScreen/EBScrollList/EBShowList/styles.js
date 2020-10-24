import { StyleSheet, Dimensions } from 'react-native';
import {colors} from "../../../../../constans/colors";
import {windowWidth} from "../../../../../constans/deviceDimension";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white',
        opacity: 0.9,
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },
    header:{
        flexDirection:'row',
        width: '90%',
        justifyContent: 'space-around'
    },
    listName: {
        fontSize: 16,
        fontWeight:'bold',
        color: 'white',
        backgroundColor:colors.theme,
        padding:3,
        paddingLeft: windowWidth * 0.1,
        paddingRight: windowWidth * 0.1,
        borderRadius: 15
    },
    modal: {
        alignItems: "center",
        justifyContent:'center',
        width: '90%',
        height: '85%',
        backgroundColor: "white",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        opacity:1
    }

});
