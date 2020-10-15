
import React, { Component, useState } from "react";
import {Alert, Modal, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {styles} from './styles'
import {Form, Icon as NBIcon, Input, Item, Label} from "native-base";

const EBProductModalInput = ({labelName, textInput}) => {

    return (
        <View style={styles.container}>
            <Item floatingLabel last >
                {/*<NBIcon  name={icon}/>*/}
                <Label >{labelName}</Label>
                <Input
                    disabled={false}
                    //keyboardType={''}

                    // secureTextEntry={isPassword ? !isSecure : isSecure}
                    // onChangeText={value => setValue(value)}
                />
            </Item>
        </View>

    );
};

export default EBProductModalInput;
