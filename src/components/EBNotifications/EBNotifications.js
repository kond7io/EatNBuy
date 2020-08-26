import React, { Component, useState } from "react";
import {Alert, Modal, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import EBNotificationsList from './EBNotificationsList/EBNotificationsList';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {styles} from './styles'

import testIMG3 from '../../img/test/testIMG3.jpg';
import testIMG5 from '../../img/test/testIMG5.jpg';
import testIMG4 from '../../img/test/testIMG4.jpg';
import testIMG6 from '../../img/test/testIMG6.jpg';
import testIMG2 from '../../img/test/testIMG2.jpg';

const items = [
    {user: "Amelia", img: testIMG3, name: 'for meee', date: '28.05.2020', messageType: 1, mT: ' odrzuciła Twoją listę ' },
    {user: "Jack", img: testIMG5, name: 'home list', date: '27.05.2020', messageType: 0, mT: ' przyjął Twoją listę'},
    {user: "Ethan", img: testIMG4, name: 'Ethan...', date: '28.05.2020', messageType: 2, mT: ' zrealizował listę z wyjątkiem'},
    {user: "Robert", img: testIMG6, name: 'dinner', date: '24.05.2020', messageType: 0, mT: ' przyjął Twoją listę'},
    {user: "Emma", img: testIMG2, name: "Emma's things", date: '28.05.2020', messageType: 0, mT: ' przyjęła Twoją listę'},
    {user: "Amelia", img: testIMG3, name: 'for meee part 2', date: '28.05.2020', messageType: 1, mT: ' odrzuciła Twoją listę ' },
    {user: "Jack", img: testIMG5, name: 'home list', date: '27.05.2020', messageType: 0, mT: ' przyjął Twoją listę'},
    {user: "Ethan", img: testIMG4, name: 'Ethan...', date: '28.05.2020', messageType: 2, mT: ' zrealizował listę z wyjątkiem'},
    {user: "Robert", img: testIMG6, name: 'dinner', date: '24.05.2020', messageType: 0, mT: ' przyjął Twoją listę'},
    {user: "Emma", img: testIMG2, name: "Emma's things", date: '28.05.2020', messageType: 0, mT: ' przyjęła Twoją listę'},
    {user: "Amelia", img: testIMG3, name: 'for meee part 3', date: '28.05.2020', messageType: 1, mT: ' odrzuciła Twoją listę ' },
    {user: "Jack", img: testIMG5, name: 'home list', date: '27.05.2020', messageType: 0, mT: ' przyjął Twoją listę'},
    {user: "Ethan", img: testIMG4, name: 'Ethan...', date: '28.05.2020', messageType: 2, mT: ' zrealizował listę z wyjątkiem'},
    {user: "Robert", img: testIMG6, name: 'dinner', date: '24.05.2020', messageType: 0, mT: ' przyjął Twoją listę'},
    {user: "Emma", img: testIMG2, name: "Emma's things", date: '28.05.2020', messageType: 0, mT: ' przyjęła Twoją listę'},
    {user: "Amelia", img: testIMG3, name: 'for meee part 4', date: '28.05.2020', messageType: 0, mT: ' przyjęła Twoją listę '}];

const EBNotifications = ({setNotifications, notificationsVisible}) => {

    return (

            <Modal
                animationType="fade"
                transparent={true}
                visible={notificationsVisible}
            >

                <View style={styles.container}>
                    <View style={styles.modal}>
                        <View style={styles.modalHeader}>
                        <Text style={styles.notificationsText}>Powiadomienia</Text>
                            <TouchableOpacity
                                onPress={() => setNotifications(!notificationsVisible)}>
                                <Icon  styles={{ opacity: 0.5}} name={'times'} size={15}  />
                            </TouchableOpacity>
                            </View>
                        <ScrollView
                            scrollEnabled={true}
                            style={{ width: '100%'}}>

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
