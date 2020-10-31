import React, { useState }from 'react';
import {Button, Text} from 'react-native';
import { Form } from 'native-base';
import * as Animatable from 'react-native-animatable';
import EBButton from '../../../../components/EBButton/EBButton';
import EBInput from '../../../../components/EBInput/EBInput';
import EBImagePicker from '../../../../components/EBImagePicker/EBImagePicker';
import Screens from "../../../../navigation/Screens";
import Navigation from "../../../../utils/Navigation";

import PropTypes from "prop-types";
import {styles} from './styles';
import {useDispatch} from "react-redux";
import {getUserSignUpAction} from "../../../../redux/User/User.action";
import avatar from "../../../../img/signUp/avatar.png";

const EBRegistrationForm = () => {

    const [isAnimation, setAnimation] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [profilImage, setProfilImage] = useState(avatar);

            console.disableYellowBox = true;

    return (
        <Animatable.View
            style={styles.container}
            animation={'fadeInUp'}
            duration={1500}
            easing={'ease-in-out'}
            onAnimationEnd={() => setAnimation(true)}
        >
            <EBImagePicker profilImage={profilImage} setProfilImage={setProfilImage} />

            <Form style={styles.form}>
                <EBInput text='Imię' icon='person' isPassword={false} setValue={setName}/>
                        <EBInput text='Email' icon='at' keyboardType={'email-address'} isPassword={false} setValue={setEmail}/>
                            <EBInput text='Hasło' icon='keypad' isPassword={true} setValue={setPassword}/>
                                <EBInput text='Powtórz hasło' icon='keypad' isPassword={true} setValue={setPassword}/>

                 <Text onPres={() => alert("Forgotten password")}
                       style={styles.registrationText}>Zapomniałeś hasła?
                 </Text>
                <EBButton
                    icon='sign-in'
                    title='Załóż konto'
                    animation={isAnimation}
                    target={getUserSignUpAction(name,email, password, profilImage)}
                />
            </Form>
        </Animatable.View>
    )
};

export default EBRegistrationForm;
