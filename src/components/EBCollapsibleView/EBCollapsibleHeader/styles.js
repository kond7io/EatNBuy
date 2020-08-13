import { StyleSheet } from 'react-native';
import {windowHeight, windowWidth} from '../../../constans/deviceDimension';

export const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        marginTop: windowHeight * 0.027
    },
    header: {
        flex:0.5 ,
        width: '80%',
        alignItems: 'center',
        flexDirection:'row',

    },
    headerContent: {
        flex:2,
        flexDirection: 'column'
    },
    itemCategory: {
        flex:1,
        textAlign: 'left',
        textAlignVertical:'bottom'
    },
    productCounter: {
        flex:1,
        textAlign: 'left',
        textAlignVertical:'top',
        fontSize: 11
    },
    icon: {
        flex:1,
        textAlign:'center',
        textAlignVertical:'center'
    }

});
