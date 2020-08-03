import { StyleSheet, Dimensions } from 'react-native';
import {windowHeight, windowWidth} from '../../../constans/deviceDimension';
import {colors} from "../../../constans/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'white'
    },
    headerSearchProduct: {
        flex:0.8,
        alignItems:'center',
        width: '100%',
        backgroundColor:colors.theme,
        borderBottomRightRadius: 80,
        zIndex:2
    },
    block: {
        flex:2,
        width: '100%',
        top: windowHeight * 0.107,
        bottom: windowHeight * 0.3,
        right: windowWidth * 0.26 ,
        backgroundColor: colors.theme,
        position: 'absolute'
    },
    productsListContainer: {
        flex:3,
        alignItems:'center',
        width:'100%',
        backgroundColor:'white',
        borderTopLeftRadius: 75,
        zIndex:1,
    }
});
