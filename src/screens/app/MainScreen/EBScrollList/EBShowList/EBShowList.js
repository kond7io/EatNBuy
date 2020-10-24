import React, {useState} from 'react';
import {Button, Text, TouchableHighlight, Modal, TouchableOpacity, View} from 'react-native';



import {styles} from './styles'
import Icon from "react-native-vector-icons/FontAwesome";
import {colors} from "../../../../../constans/colors";

console.disableYellowBox = true;


const EBShowList = ({isModal, setIsModal}) => {

    return (

            <Modal
                animationType='fade'
                transparent={true}
                visible={isModal}
            >

                <View style={styles.container}>
                    <View style={styles.header}>
                        <Icon
                            onPress={()=>setIsModal(!isModal)} name={'check'} color={colors.theme} size={25}/>
                        <Text
                            style={styles.listName}
                            onPress={()=>setIsModal(!isModal)}>Nazwa listy </Text>
                        <Icon
                            onPress={()=>setIsModal(!isModal)} name={'trash'} color={colors.theme} size={25}/>

                    </View>
                    <View style={styles.modal}>
                        <Text>Modal view</Text>
                    </View>
                </View>

            </Modal>

    )
};
export default EBShowList;
