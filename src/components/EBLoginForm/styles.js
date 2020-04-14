import { StyleSheet, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    logo: {
        width: windowWidth * 0.7,
        height: windowHeight * 0.2,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 10
    },
    item: {
        width: windowWidth * 0.8,
    },
    form: {
        alignItems: 'center',
        marginTop: windowHeight * 0.1
    },
    label: {
        marginTop: -5
    },
    buttonContainer: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialContainer: {
      alignItems:'center'
    },
    socialButton: {
        width: windowWidth * 0.7,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: windowHeight * 0.009
    },
    socialTextButton: {
        color: 'white',
        fontSize: windowWidth * 0.06,
        fontWeight: 'bold'

    },
    button: {
        alignItems:'center',
        justifyContent:'center',
        width: windowWidth * 0.6,
        borderRadius: 25,
        backgroundColor: 'green'
    },
    text: {
        marginLeft: 5,
        color: 'white',
        fontSize: windowWidth * 0.045,
    }


});
