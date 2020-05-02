import React, { useState, useEffect }from 'react';
import { Form, Item, Input, Label, Icon as NBIcon } from 'native-base';
import * as Animatable from 'react-native-animatable';
import EBButton from '../EBButton/EBButton';

import {styles} from './styles';

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
                 <Item floatingLabel last style={styles.item} >
                    <NBIcon style={styles.NBIcon} name="person"/>
                    <Label style={styles.label}>Email</Label>
                    <Input
                        disabled={false}
                        style={styles.input}
                        onChangeText={text => useEmail(text)}
                    />
                </Item>
                <Item floatingLabel last style={styles.item}>
                    <NBIcon style={styles.NBIcon} name="keypad"/>
                    <Label style={styles.label}>Hasło</Label>
                    <Input
                        disabled={false}
                        style={styles.input}
                        secureTextEntry={isSecure}
                        onChangeText={text => usePassword(text)}
                    />
                    {isSecure ?
                    <NBIcon
                        style={styles.NBIconOff}
                        name="eye-off"
                        onPress={()=> useSecure(!isSecure)}
                    /> : <NBIcon
                            style={styles.NBIcon}
                            name="eye"
                            onPress={()=> useSecure(!isSecure)}
                        />}
                </Item>

                <EBButton
                    icon='sign-in'
                    title='Zaloguj'
                    animation={isAnimation}
                    onPress={() => alert("Zaloguj")}
                />
                 <Label onPres={() => alert("Zarejestruj")}
                        style={styles.registrationText}>Nie masz jeszcze konta?
                 </Label>
             </Form>
        </Animatable.View>
    )
};
export default EBLoginForm;
