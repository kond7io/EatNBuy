import { StyleSheet, Dimensions } from 'react-native';
import {windowHeight, windowWidth} from '../../../../../utils/deviceDimension';
import {theme} from '../../../../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection:'row',
        // borderBottomWidth: 2,
        // borderBottomColor: 'black',
        // borderTopWidth: 2,
        // borderTopColor: 'black',
        margin: 5


    },
    image: {
        width: windowHeight * 0.07,
        height:windowHeight * 0.07,
        borderRadius: 50
    },
    info: {
        flexDirection: 'column',
        flex: 3,

    }

});
