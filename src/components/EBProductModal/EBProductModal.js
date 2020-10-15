import React, { Component, useState } from "react";
import {Alert, Modal, View, Text, ScrollView, TouchableOpacity, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EBProductModalInput from "./EBProductModalInput/EBProductModalInput";

import {styles} from './styles'
import EBInput from "../EBInput/EBInput";
import {colors} from "../../constans/colors";


const EBProductModal = ({setModalVisible, modalVisible}) => {
    const [productName, setProductName] = useState('');

    return (

        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
        >

            <View style={styles.container}>
                <View style={styles.modal}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.notificationsText}>Dodaj nowy produkt</Text>
                        <TouchableOpacity
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Icon  styles={{ opacity: 0.5}} name={'times'} size={15}  />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, justifyContent:'flex-start', marginTop:20}}>

                        <EBInput style={{marginTop: 15}} icon={'nutrition'} text={'Nazwa produktu'} textColor={'black'} labelColor={colors.secondary} iconColor={colors.theme} setValue={setProductName}/>
                            <EBInput style={{marginTop: 15}} icon={'home'} text={'Producent'} textColor={'black'} labelColor={colors.secondary} iconColor={colors.theme} setValue={setProductName}/>

                                <EBInput style={{marginTop: 15}} icon={'barcode'} text={'Kod kreskowy'} textColor={'black'} labelColor={colors.secondary} iconColor={colors.theme} setValue={setProductName}/>

                    </View>
                    <View style={{flex:0.5, justifyContent:'center', width:'50%'}}>
                        <Button style={{flex:1}} title={'dodaj'} color={colors.theme}/>
                    </View>
                    </View>
            </View>

        </Modal>



    );
};

export default EBProductModal;
