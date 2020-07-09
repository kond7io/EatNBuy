import React from 'react';
import { View } from 'react-native';
import EBLoader from "../EBLoader";

import { styles } from './styles'


const EBLoaderOverlay = ({ visible }) => {
    if (visible)
        return (
            <View style={styles.container}>
            <EBLoader />
</View>
);
return null;
};

export default EBLoaderOverlay