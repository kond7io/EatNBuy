import React, { useState }from 'react';
import { Form, Item, Input, Label, Icon as NBIcon, Button } from 'native-base';
import * as Animatable from 'react-native-animatable';

import {styles} from './styles';

const EBLoginForm = () => {
    const [email, useEmail] = useState('Login...');
    const [password, usePassword] = useState('Password...');
    const [isSecure, useSecure] = useState(true);

    return (
           <Animatable.View
               style={{flex: 2}}
               animation='fadeInUp'
               duration={1500}
               easing={'ease-in-out'}
           >
            <Form style={styles.form}>
                <Item floatingLabel last style={styles.item}>
                    <NBIcon style={styles.NBIcon} name="person"/>
                    <Label style={styles.label}>Email</Label>
                    <Input
                        style={styles.input}
                        onChangeText={text => useEmail(text)}
                    />
                </Item>
                <Item floatingLabel last style={styles.item}>
                    <NBIcon style={styles.NBIcon} name="keypad"/>
                    <Label style={styles.label}>Hasło</Label>
                    <Input
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
            </Form>
           </Animatable.View>
    )
};
export default EBLoginForm;
