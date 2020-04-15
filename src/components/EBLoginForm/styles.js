import { StyleSheet, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({

    logo: {
        width: windowWidth * 0.32,
        height: windowHeight * 0.2,
    },
    logoContainer: {
        alignItems: 'center',
    },
    item: {
        width: windowWidth * 0.8,

    },
    form: {
        alignItems: 'center',
        justifyContent:'flex-end',

    },
    NBIcon: {
        color: 'white',
        fontSize: 25
    },
    label: {
        marginTop: -5,
        color:'white',
    },
    input: {
      color: 'white',
    },
    buttonContainer: {
      alignItems:'center',
        flex:2,

    },
    socialButton: {
        width: windowWidth * 0.6,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: windowHeight * 0.02
    },
    socialTextButton: {
        color: 'white',
        fontSize: windowWidth * 0.06,
        fontWeight: 'bold'

    },
    loginButton: {
        alignItems:'center',
        justifyContent:'center',
        width: windowWidth * 0.4,
        borderRadius: 25,
        backgroundColor: 'green',
        marginTop: windowHeight * 0.05,

    },
    text: {
        marginLeft: 5,
        color: 'white',
        fontSize: windowWidth * 0.045,
    },
   forgottenText: {
        color:'orange',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 20,
        borderBottomWidth:1,
       borderBottomColor:'orange'
    },
    registrationText: {
        fontSize: 15
    }
});
