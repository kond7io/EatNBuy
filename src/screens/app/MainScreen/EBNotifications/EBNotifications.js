import React, { Component, useState } from "react";
import {Alert, Modal, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import EBNotificationsList from './EBNotificationsList/EBNotificationsList';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {styles} from '../EBNotifications/styles'

import testIMG3 from '../../../../img/test/testIMG3.jpg';
import testIMG from '../../../../img/test/testIMG.jpg';
import testIMG5 from '../../../../img/test/testIMG5.jpg';
import testIMG4 from '../../../../img/test/testIMG4.jpg';
import testIMG6 from '../../../../img/test/testIMG6.jpg';
import testIMG2 from '../../../../img/test/testIMG2.jpg';

const items = [
    {user: "Klaudia", img: testIMG3, name: 'Dla Alanka', date: '28.05.2020', messageType: ' odrzuciła Twoją listę ' },
    {user: "Bożena", img: testIMG5, name: 'Do domu', date: '27.05.2020', messageType: ' przyjęła Twoją listę'},
    {user: "Tomek", img: testIMG4, name: 'Browary i inne towary', date: '28.05.2020', messageType: ' zrealizował listę z wyjątkiem'},
    {user: "Robert", img: testIMG6, name: 'Masło 80%', date: '24.05.2020', messageType: ' przyjął Twoją listę'},
    {user: "Konrad", img: testIMG2, name: 'Pamiętaj czekolada', date: '28.05.2020', messageType: ' przyjął Twoją listę'},
    {user: "Klaudia", img: testIMG3, name: 'Dla Alanka', date: '28.05.2020', messageType: ' odrzuciła Twoją listę ' },
    {user: "Bożena", img: testIMG5, name: 'Do domu', date: '27.05.2020', messageType: ' przyjęła Twoją listę'},
    {user: "Tomek", img: testIMG4, name: 'Browary i inne towary', date: '28.05.2020', messageType: ' zrealizował listę z wyjątkiem'},
    {user: "Robert", img: testIMG6, name: 'Masło 80%', date: '24.05.2020', messageType: ' przyjął Twoją listę'},
    {user: "Konrad", img: testIMG2, name: 'Pamiętaj czekolada', date: '28.05.2020', messageType: ' przyjął Twoją listę'},
    {user: "Klaudia", img: testIMG3, name: 'Dla Alanka', date: '28.05.2020', messageType: ' odrzuciła Twoją listę ' },
    {user: "Bożena", img: testIMG5, name: 'Do domu', date: '27.05.2020', messageType: ' przyjęła Twoją listę'},
    {user: "Tomek", img: testIMG4, name: 'Browary i inne towary', date: '28.05.2020', messageType: ' zrealizował listę z wyjątkiem'},
    {user: "Robert", img: testIMG6, name: 'Masło 80%', date: '24.05.2020', messageType: ' przyjął Twoją listę'},
    {user: "Konrad", img: testIMG2, name: 'Pamiętaj czekolada', date: '28.05.2020', messageType: ' przyjął Twoją listę'},
    {user: "Klaudia", img: testIMG3, name: 'Abcd', date: '28.05.2020', messageType: ' przyjęła Twoją listę '}];

const EBNotifications = () => {
    const [modalVisible, setModalVisible] = useState(true);

    return (

            <Modal

                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >

                <View style={styles.container}>
                    <View style={styles.modal}>
                        <View style={{borderTopRadius:50, padding:5,flexDirection:'row',  alignItems: 'center',  width:'90%',justifyContent:'space-between'}}>
                        <Text style={styles.notificationsText}>Powiadomienia</Text>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                <Icon  styles={{ opacity: 0.5}} name={'times'} size={15}  />
                            </TouchableOpacity>
                            </View>
                        <ScrollView style={{ width: '100%'}}>

                        {items.map((item) => {
                            return <EBNotificationsList items={item}/>
                        })}
                        </ScrollView>
                    </View>
                </View>

            </Modal>



    );
};

export default EBNotifications;