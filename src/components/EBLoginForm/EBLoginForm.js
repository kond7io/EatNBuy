import React, { useState }from 'react';
import { View, Image, ImageBackground, Text } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Icon as NBIcon, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

import logo from '../../img/logo.png';
import {styles} from './styles';

const EBLoginForm = () => {
    const [email, useEmail] = useState('Login...');
    const [password, usePassword] = useState('Password...');
    const [isSecure, useSecure] = useState(true);

    return (
        <LinearGradient style={{flex:1}} colors={['#00AAFF','#2255FF','#196AFF','#0991FF']}>
            <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo}/>
            </View>
            <Content style={{flex:1,}}>

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
            </Content>
            <View style={styles.buttonContainer}>
                <Button style={[styles.socialButton,{ backgroundColor:'#C70039'}]}>
                    <Icon name="google" size={30} color={"white"}/>
                    <Text style={styles.socialTextButton}>oogle</Text>
                </Button>
                <Button style={styles.socialButton}>
                    <Icon name="facebook" size={30} color={"white"}/>
                    <Text style={styles.socialTextButton}>acebook</Text>
                </Button>
                <Button style={styles.loginButton}>
                    <Icon name="sign-in" size={25} color={"white"}/>
                    <Text style={styles.text}>Zaloguj się</Text>
                </Button>

                <Text
                    style={styles.forgottenText}
                    onPress={()=> alert('Forgotten password')}
                >Nie pamiętasz hasła?</Text>
                <View style={{flexDirection:'row', marginTop:20, justifyContent:'flex-end'}}>
                    <Text style={[styles.registrationText,{color:'white'}]}>Nie masz jeszcze konta?</Text>
                    <Text
                        style={[styles.registrationText,{color:'orange', marginLeft: 5, fontWeight: 'bold',borderBottomWidth:1, borderBottomColor:'orange'}]}
                        onPress={()=>alert('SignUp')}
                    >Zarejestruj się teraz.</Text>
                </View>
            </View>

        </LinearGradient>


    )
};
export default EBLoginForm;
