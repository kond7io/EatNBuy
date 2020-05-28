import React, { useState }from 'react';
import { Item, Input, Label, Icon as NBIcon } from 'native-base';

import {styles} from './styles';
import PropTypes from 'prop-types';

const EBInput = ({text, icon, isPassword, keyboardType}) => {

    const [email, useEmail] = useState('Login...');
    const [password, usePassword] = useState('Password...');
    const [isSecure, useSecure] = useState(false);
    const [isAnimation, useAnimation] = useState(false);

    const _render = () => {
        if(isSecure){
            return <NBIcon
                   style={styles.NBIconOff}
                   name="eye-off"
                   onPress={() => useSecure(!isSecure)}/>
        }
        return <NBIcon
               style={styles.NBIcon}
               name="eye"
               onPress={() => useSecure(!isSecure)}/>
    };

    return (
                <Item floatingLabel last style={styles.item}>
                    <NBIcon style={styles.NBIcon} name={icon}/>
                    <Label style={styles.label}>{text}</Label>
                    <Input
                        disabled={false}
                        keyboardType={keyboardType}
                        style={styles.input}
                        secureTextEntry={isPassword ? !isSecure : isSecure}
                        onChangeText={text => usePassword(text)}
                    />
                    {isPassword
                        ? _render()
                        : <></>}
                </Item>
    )
};
EBInput.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    isPassword: PropTypes.bool,
};
export default EBInput;
