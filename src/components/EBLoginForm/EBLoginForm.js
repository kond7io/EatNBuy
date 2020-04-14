import React, { useState }from 'react';
import { View, Image, ImageBackground, Text } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Icon as NIcon, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';

import logo from '../../img/logoPNG.png';
import background from '../../img/background.png';

const EBLoginForm = () => {
    const [email, useEmail] = useState('Login...');
    const [password, usePassword] = useState('Password...');

    return (
        <ImageBackground source={background} style={{flex:1}}>

            <Content style={{flex:3}}>
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logo}/>
                </View>
                <Form style={styles.form}>
                    <Item floatingLabel last style={styles.item}>
                        <NIcon active fontSize={50} name="person"/>
                        <Label style={styles.label}>Email</Label>
                        <Input
                            onChangeText={text => useEmail(text)}
                        />
                    </Item>
                    <Item floatingLabel last style={styles.item}>
                        <NIcon name="keypad"/>
                        <Label style={styles.label}>Hasło</Label>
                        <Input
                            secureTextEntry={true}
                            onChangeText={text => usePassword(text)}
                        />
                    </Item>
                </Form>
            </Content>
            <View style={styles.socialContainer}>
                <Button style={[styles.socialButton,{ backgroundColor:'#C70039'}]}>
                    <Icon name="google" size={30} color={"white"}/>
                    <Text style={styles.socialTextButton}>oogle</Text>
                </Button>
                <Button style={styles.socialButton}>
                    <Icon name="facebook" size={30} color={"white"}/>
                    <Text style={styles.socialTextButton}>acebook</Text>
                </Button>
            </View>



            <View style={styles.buttonContainer}>
                <Button style={styles.button}>
                    <Icon name="sign-in" size={30} color={"white"}/>
                    <Text style={styles.text}>Zaloguj się</Text>
                </Button>
            </View>

            </ImageBackground>


    )
};
export default EBLoginForm;
