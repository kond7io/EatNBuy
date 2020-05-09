import { StyleSheet, Dimensions } from 'react-native';
import {windowWidth} from '../../utils/deviceDimension';
import {windowHeight} from '../../utils/deviceDimension';

import {theme} from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent:'space-evenly',
        backgroundColor: 'white',
        borderRadius: 25,
        width: windowWidth * 0.45,
        padding: 5,
        marginTop: windowHeight * 0.1,
    },
   text: {
       textAlign: 'center',
       color: theme,
       fontWeight: 'bold',
       fontSize: windowHeight * 0.03,

   }

});
