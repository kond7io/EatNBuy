import React, { useState }from 'react';
import { Form } from 'native-base';
import * as Animatable from 'react-native-animatable';
import EBButton from '../../../../components/EBButton/EBButton';

import {styles} from './styles';
import EBInput from '../../../../components/EBInput/EBInput';
import {Button, Text, TouchableOpacity} from 'react-native';

import Screens from "../../../../navigation/Screens";
import Navigation from "../../../../utils/Navigation";
import {getUserSignInAction} from "../../../../redux/User/User.action";


const EBLoginForm = () => {

    const [isAnimation, setAnimation] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
debugger;
    console.disableYellowBox = true;
    return (
        <Animatable.View
            style={{flex: 2}}
            animation={'fadeInUp'}
            duration={1500}
            easing={'ease-in-out'}
            onAnimationEnd={() => setAnimation(true)}
        >
             <Form style={styles.form}>
                 <EBInput  text='Email' icon='at' keyboardType={'email-address'}  setValue={setEmail}/>
                    <EBInput  text='Hasło' icon='keypad' isPassword={true}  setValue={setPassword}/>
                <EBButton
                    icon='sign-in'
                    title='Zaloguj'
                    animation={isAnimation}
                    target={getUserSignInAction(email, password)}
                />
                 <Text onPress={() => Navigation.navigate(Screens.SIGN_UP)}
                        style={styles.registrationText}>Nie masz jeszcze konta?</Text>
             </Form>
        </Animatable.View>
    )
};

export default EBLoginForm;
