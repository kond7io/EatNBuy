import React, { useState }from 'react';
import {Text, Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'react-native-image-picker';

import {styles} from './styles';
import avatar from '../../img/signUp/avatar.png';

const options = {
    title: 'Wybierz swoje zdjęcie',
    cancelButtonTitle: 'Anuluj',
    takePhotoButtonTitle: 'Zrób zdjęcie...',
    chooseFromLibraryButtonTitle: 'Wybierz z galerii...'

};

const EBImagePicker = () => {

    const [filePath, useFilePath] = useState(avatar);

    function _uploadImage ()
    {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = {uri: response.uri};
                useFilePath(source);
            }
        });
    }

    return (
        <>
            <Text style={{textAlign:'center', fontWeight:'bold'}}>Wybierz zdjęcie</Text>
            <View style={{ justifyContent:'center',alignItems: 'center', zIndex: 1, flexDirection: 'row', marginBottom: -55}}>

                <Image source = {filePath}
                       style={{width: 110, height: 110, borderRadius: 55, borderWidth:3, borderColor: 'white', marginLeft: 25}}
                />
                <Icon name={'camera'}  size={15} style={{ color: 'white', borderRadius: 3, marginBottom: -50}} onPress={() => _uploadImage()}/>
                <Icon name={'plus'}  size={8} style={{ color: 'white', marginLeft:2,borderRadius: 3, marginBottom: -50}} />
            </View>
        </>

    )
};

export default EBImagePicker;
