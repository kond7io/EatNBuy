import { StyleSheet, Dimensions } from 'react-native';
import {windowHeight, windowWidth} from '../../../../constans/deviceDimension';
import {colors} from '../../../../constans/colors';

export const styles = StyleSheet.create({
    header: {
        flex: 0.7,
         zIndex:1,
         elevation:0,
         position: 'absolute',
        width: '100%'

    },
    settings: {
        flex:0.5,
        height:50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    imageBackground: {
        flex:1,
        justifyContent:'center',
        resizeMode: 'cover',
        zIndex: 10
    },
    groupName: {
        fontWeight: 'bold',
        color: colors.theme,
        fontSize: windowHeight * 0.03,
        backgroundColor: 'white',
        borderRadius: 15,
        paddingLeft: 5,
        paddingRight: 5,

    },
    about: {
        height:200,
        alignItems: 'center',
        justifyContent: 'space-evenly',

    },
    image: {
        width: windowWidth * 0.295,
        height: windowWidth * 0.295,
        borderRadius: windowWidth * 0.6,
        borderWidth: 3,
        borderColor: 'white',

    },
    welcome: {
        color:'white',
        fontSize:25,
        fontFamily:'Raleway-Medium'
    }
});
