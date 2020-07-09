import { StyleSheet, Dimensions } from 'react-native';
import {windowWidth} from '../../constans/deviceDimension';
import {windowHeight} from '../../constans/deviceDimension';

import {colors} from '../../constans/colors';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent:'space-evenly',
        backgroundColor: 'white',
        borderRadius: 25,
        width: windowWidth * 0.45,
        padding: 5,
        marginTop: windowHeight * 0.05,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
   text: {
       textAlign: 'center',
       color: colors.theme,
       fontWeight: 'bold',
       fontSize: windowHeight * 0.03,

   }

});
