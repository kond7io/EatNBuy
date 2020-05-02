import React, { useState, useEffect }from 'react';
import { Form, Item, Input, Label, Icon as NBIcon } from 'native-base';
import * as Animatable from 'react-native-animatable';

import {styles} from './styles';
import EBButton from '../EBButton/EBButton';

const EBLoginForm = () => {

    const [email, useEmail] = useState('Login...');
    const [password, usePassword] = useState('Password...');
    const [isSecure, useSecure] = useState(true);


    return (
        <Animatable.View
            style={{flex: 2}}
            animation={'fadeInUp'}
            duration={1500}
            easing={'ease-in-out'}
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
                    <NBIcon
                        style={styles.NBIcon}
                        name="eye"
                        onPress={()=> useSecure(!isSecure)}
                    />
                </Item>

                <EBButton
                    icon='sign-in'
                    title='Zaloguj'
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
