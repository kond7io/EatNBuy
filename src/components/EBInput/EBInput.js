import React, { useState }from 'react';
import { Item, Input, Label, Icon as NBIcon } from 'native-base';

import {styles} from './styles';
import PropTypes from 'prop-types';


const EBInput = ({text, icon, isPassword, keyboardType, setValue}) => {

   const [isSecure, setSecure] = useState(false);

    return (
                <Item floatingLabel last style={styles.item}>
                    <NBIcon style={styles.NBIcon} name={icon}/>
                    <Label style={styles.label}>{text}</Label>
                    <Input
                        disabled={false}
                        keyboardType={keyboardType}
                        style={styles.input}
                        secureTextEntry={isPassword ? !isSecure : isSecure}
                        onChangeText={value => setValue(value)}
                    />

                    {isPassword ?
                        <NBIcon
                            style={styles.NBIconOff}
                            name={isSecure ? 'eye-off' : 'eye'}
                            onPress={() => setSecure(!isSecure)}
                        /> : <></>}

                </Item>
    )
};
EBInput.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    isPassword: PropTypes.bool,
};
export default EBInput;
