import { StyleSheet, Dimensions } from 'react-native';
import {windowHeight, windowWidth} from '../../../../constans/deviceDimension';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: 'white',
        opacity: 0.9,
    },
    modal: {
        alignItems: "center",
        justifyContent:'center',
        width: '90%',
        height: '80%',
        backgroundColor: "white",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'gray',
        marginTop: windowHeight * 0.075
    },
    modalHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '90%',
      padding: windowHeight * 0.0075
    },
    notificationsText: {
        textAlign:'left',
        fontWeight: 'bold',
        opacity: 0.5
    }
});
