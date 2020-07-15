import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import EBRegistrationForm from './EBRegistratrionForm/EBRegistrationForm';
import EBLoaderOverlay from "../../../components/EBLoader/EBLoaderOverlay/EBLoaderOverlay";

const SignUp = () => {
    return (
        <View style={styles.container}>
            <EBRegistrationForm/>
            <EBLoaderOverlay visible={false} />
        </View>

    )
};
export default SignUp;

