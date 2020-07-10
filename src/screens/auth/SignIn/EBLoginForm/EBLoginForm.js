import React, { useState }from 'react';
import { Form } from 'native-base';
import * as Animatable from 'react-native-animatable';
import EBButton from '../../../../components/EBButton/EBButton';

import {styles} from './styles';
import EBInput from '../../../../components/EBInput/EBInput';
import {Text, TouchableOpacity} from 'react-native';
import SignUp from "../../SignUp/SignUp";

import Screens from "../../../../navigation/Screens";
import Navigation from "../../../../utils/Navigation";
import {getUserSignInAction} from "../../../../redux/User/User.action";

const EBLoginForm = () => {

    const [email, useEmail] = useState('Login...');
    const [password, usePassword] = useState('Password...');
    const [isSecure, useSecure] = useState(true);
    const [isAnimation, useAnimation] = useState(false);

    console.disableYellowBox = true;
    return (
        <Animatable.View
            style={{flex: 2}}
            animation={'fadeInUp'}
            duration={1500}
            easing={'ease-in-out'}
            onAnimationEnd={() => useAnimation(true)}
        >
             <Form style={styles.form}>
                 <EBInput  text='Email' icon='at' keyboardType={'email-address'}/>
                    <EBInput  text='Hasło' icon='keypad' isPassword={true}/>
                <EBButton
                    icon='sign-in'
                    title='Zaloguj'
                    animation={isAnimation}
                    target={getUserSignInAction('martynka@gmail.com', 'konrad123')}
                />

                 <Text onPress={() => Navigation.navigate(Screens.SIGN_UP)}
                        style={styles.registrationText}>Nie masz jeszcze konta?</Text>
             </Form>
        </Animatable.View>
    )
};

export default EBLoginForm;
