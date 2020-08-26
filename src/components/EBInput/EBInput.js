import React, { useState }from 'react';
import { Item, Input, Label, Icon as NBIcon } from 'native-base';

import {styles} from './styles';
import PropTypes from 'prop-types';


const EBInput = ({style, text, icon, isPassword, keyboardType, textColor, iconColor, labelColor, setValue}) => {

   const [isSecure, setSecure] = useState(false);

    return (
                <Item floatingLabel last style={[styles.item, style]}>
                    <NBIcon style={[styles.NBIcon, {color:iconColor}]} name={icon}/>
                    <Label style={[styles.label,{color: labelColor}]}>{text}</Label>
                    <Input
                        disabled={false}
                        keyboardType={keyboardType}
                        style={{color: textColor}}
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
EBInput.defaultProps = {
    textColor: 'white',
    labelColor: 'white',
    iconColor: 'white'
}

export default EBInput;
