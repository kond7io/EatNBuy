import React, { useState }from 'react';
import {Text, Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';

import {styles} from './styles';

const options = {
    title: 'Wybierz swoje zdjęcie',
    cancelButtonTitle: 'Anuluj',
    takePhotoButtonTitle: 'Zrób zdjęcie...',
    chooseFromLibraryButtonTitle: 'Wybierz z galerii...'

};

const EBImagePicker = ({profilImage, setProfilImage}) => {

    function _uploadImage ()
    {
        ImagePicker.showImagePicker(options, (response) => {

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = {uri: response.uri};
                setProfilImage(source);
            }
        });
    }

    return (
        <>
            <Text style={styles.text}>Wybierz zdjęcie</Text>
            <View style={styles.container}>

                <Image source = {profilImage}
                       style={styles.image}
                />
                <Icon name={'camera'}  size={15} style={styles.icon} onPress={() => _uploadImage()}/>
                <Icon name={'plus'}  size={8} style={[styles.icon, {marginLeft:2}]} />
            </View>
        </>

    )
};

export default EBImagePicker;
