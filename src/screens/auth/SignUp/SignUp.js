import React from 'react';
import {View} from 'react-native';
import {styles} from '../SignUp/styles';
import EBRegistrationForm from '../../../components/EBRegistratrionForm/EBRegistrationForm';

const SignUp = () => {
    return (
        <View style={styles.container}>
            <EBRegistrationForm/>
        </View>

    )
};
export default SignUp;

