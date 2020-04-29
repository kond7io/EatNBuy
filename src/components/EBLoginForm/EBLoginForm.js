import React, { useState }from 'react';
import { View, Image, ImageBackground, Text } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Icon as NBIcon, Button } from 'native-base';
import EBSlider from '../EBSlider/EBSlider';
import {theme} from '../../utils/colors';

import {styles} from './styles';

const EBLoginForm = () => {
    const [email, useEmail] = useState('Login...');
    const [password, usePassword] = useState('Password...');
    const [isSecure, useSecure] = useState(true);

    return (
        <View style={styles.container}>
           <EBSlider auto={true} loop={true} dotColor={"#8e8991"} activeDotColor={theme}/>

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
        </View>


    )
};
export default EBLoginForm;
