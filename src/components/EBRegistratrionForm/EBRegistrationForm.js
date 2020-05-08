import React, { useState, useEffect }from 'react';
import {Text, Image, View} from 'react-native';
import { Form } from 'native-base';
import * as Animatable from 'react-native-animatable';
import EBButton from '../EBButton/EBButton';
import EBInput from '../EBInput/EBInput';
import Icon from 'react-native-vector-icons/FontAwesome';

import PropTypes from "prop-types";
import {styles} from './styles';
import avatar from '../../img/avatar.png';

const EBRegistrationForm = () => {

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
            <Text style={{textAlign:'center', fontWeight:'bold'}}>Wybierz zdjęcie</Text>
            <View style={{ justifyContent:'center',alignItems: 'center', zIndex: 1, flexDirection: 'row', marginBottom: -55}}>

                <Image source={avatar} style={{width: 110, height: 110, borderRadius: 55, borderWidth:3, borderColor: 'white', marginLeft: 25}} />
                <Icon name={'camera'}  size={15} style={{ color: 'white', borderRadius: 3, marginBottom: -50}} />
                <Icon name={'plus'}  size={8} style={{ color: 'white', marginLeft:2,borderRadius: 3, marginBottom: -50}} />
            </View>

            <Form style={[styles.form, {zIndex: 0}]}>
                <EBInput text='Imię' icon='person'/>
                        <EBInput text='Email' icon='at'/>
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
