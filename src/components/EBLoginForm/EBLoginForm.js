import React, { useState }from 'react';
import { Form } from 'native-base';
import * as Animatable from 'react-native-animatable';
import EBButton from '../EBButton/EBButton';

import {styles} from './styles';
import EBInput from '../EBInput/EBInput';
import {Text} from 'react-native';

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
                 <EBInput  text='Email' icon='at'/>
                 <EBInput  text='Hasło' icon='keypad' isPassword={true}/>

                <EBButton
                    icon='sign-in'
                    title='Zaloguj'
                    animation={isAnimation}
                    onPress={() => alert("Zaloguj")}
                />
                 <Text onPres={() => alert("Zarejestruj")}
                        style={styles.registrationText}>Nie masz jeszcze konta?</Text>
             </Form>
        </Animatable.View>
    )
};

export default EBLoginForm;
