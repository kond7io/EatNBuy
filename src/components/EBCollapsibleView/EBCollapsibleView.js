import React,{useState} from 'react';
import {View } from 'react-native';

import EBCollapsibleItem from "./EBCollapsibleItem/EBCollapsibleItem";

import EBCollapsibleHeader from "./EBCollapsibleHeader/EBCollapsibleHeader";
import {styles} from './styles';

console.disableYellowBox = true;

const EBCollapsibleView = ({category, data}) => {

    const [visible, setVisible] = useState(false);

    const hoverComponent = (index) => {
        alert('asd')

    }

    return (
        <View style={styles.container}>
            <EBCollapsibleHeader category={category} data={data} visible={visible} setVisible={setVisible} />
            {visible
                ? <EBCollapsibleItem data={data} visible={visible}/>
                : <></>}
        </View>
    )
};
export default EBCollapsibleView;
