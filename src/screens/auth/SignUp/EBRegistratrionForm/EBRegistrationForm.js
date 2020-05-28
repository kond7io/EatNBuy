import React, { useState }from 'react';
import {Text } from 'react-native';
import { Form } from 'native-base';
import * as Animatable from 'react-native-animatable';
import EBButton from '../../../../components/EBButton/EBButton';
import EBInput from '../../../../components/EBInput/EBInput';
import EBImagePicker from '../../../../components/EBImagePicker/EBImagePicker';

import PropTypes from "prop-types";
import {styles} from './styles';

const EBRegistrationForm = () => {


    const [email, useEmail] = useState('Login...');
    const [password, usePassword] = useState('Password...');
    const [isSecure, useSecure] = useState(true);
    const [isAnimation, useAnimation] = useState(false);

            console.disableYellowBox = true;

    return (
        <Animatable.View
            style={styles.container}
            animation={'fadeInUp'}
            duration={1500}
            easing={'ease-in-out'}
            onAnimationEnd={() => useAnimation(true)}
        >
            <EBImagePicker />

            <Form style={styles.form}>
                <EBInput text='Imię' icon='person' isPassword={false}/>
                        <EBInput text='Email' icon='at' keyboardType={'email-address'} isPassword={false}/>
                            <EBInput text='Hasło' icon='keypad' isPassword={true}/>
                                <EBInput text='Powtórz hasło' icon='keypad' isPassword={true}/>

                 <Text onPres={() => alert("Forgotten password")}
                       style={styles.registrationText}>Zapomniałeś hasła?
                 </Text>

                <EBButton
                    icon='sign-in'
                    title='Załóż konto'
                    animation={isAnimation}
                    onPress={() => alert("Zaloguj")}
                />
            </Form>
        </Animatable.View>
    )
};

export default EBRegistrationForm;
