import React, {useState} from 'react';
import {View, ImageBackground, Text, TouchableOpacity, Image, TextInput, Button} from 'react-native';
import Screens from "../../../../navigation/Screens";

import * as Animatable from 'react-native-animatable';

import {styles} from './styles';
import PropTypes from 'prop-types';
import EBButton from "../../../../components/EBButton/EBButton";
import EBIcon from "../../../../components/EBIcon/EBIcon";
import {getUserCreateGroup, getUserCreateGroupAction} from "../../../../redux/User/User.action";

const AddGroup = () => {

    const [groupName, setGroupName] = useState('');

    return (
        <View
            style={styles.container}

        >

            <Animatable.View
                animation={'fadeInLeft'}
                duration={1500}
                easing={'ease-in-out'}
                style={styles.textContainer}
            >
                <Text style={styles.text}>Podaj nazwę grupy</Text>
            </Animatable.View>
            <Animatable.View
                animation={'fadeInRight'}
                duration={1500}
                easing={'ease-in-out'}
                style={styles.inputContainer}
            >
                <TextInput
                    style={styles.input}
                    onChangeText={text => setGroupName(text)}
                    value={groupName}
                    defaultValue={'Wpisz nazwę grupy ...'}
                />
            </Animatable.View>
            <EBButton
                style={styles.button}
                icon={'users'}
                title={'Stwórz grupę'}
                animation={true}
                target={getUserCreateGroupAction(groupName)}

            />

        </View>


    )
};

export default AddGroup;
