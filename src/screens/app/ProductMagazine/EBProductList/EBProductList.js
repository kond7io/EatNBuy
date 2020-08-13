import React,{useState} from 'react';
import {View} from 'react-native';
import Animated from 'react-native-reanimated';

import EBCollapsibleView from "../../../../components/EBCollapsibleView/EBCollapsibleView";
import {styles} from './styles';
import EBCollapsibleItem from "../../../../components/EBCollapsibleView/EBCollapsibleItem/EBCollapsibleItem";

console.disableYellowBox = true;

const productsList = [
    {category:'Nabiał',
        data: [
            {product: 'mleko', company: 'Mlekovita', selected: false},
            {product: 'serek', company: 'Włoszczowa', selected: true},
            {product: 'jogurt', company: 'Bakoma', selected: true}
        ]},
    {category: 'Napoje',
        data: [
            {product: 'woda', company: 'Jurajska', selected: true},
            {product: 'cola', company: 'Coca-Cola', selected: false},
            {product: 'sok', company: 'Tymbark', selected: false},
        ]},
    {category: 'Słodycze',
        data: [
            {product: 'czekolada', company: 'Milka',selected: false},
            {product: 'baton', company: 'Twix', selected: false},
            ]},
    {category: 'Słodycze',
        data: [
            {product: 'czekolada', company: 'Milka',selected: false},
            {product: 'baton', company: 'Twix', selected: false},
        ]},
    {category: 'Słodycze',
        data: [
            {product: 'czekolada', company: 'Milka',selected: false},
            {product: 'baton', company: 'Twix', selected: false},
        ]},
    {category: 'Słodycze',
        data: [
            {product: 'czekolada', company: 'Milka',selected: false},
            {product: 'baton', company: 'Twix', selected: false},
        ]},


    {category: 'Higiena',
        data: [
            {product: 'reczniki papierowe', company: 'Mola', selected: true},
            {product: 'husteczki higieniczne', company: 'Fox', selected: false},
        ]}];


const EBProductList = () => {

    const _renderCollapsible = () => {
        debugger;
        const items = [];
        for (let item of productsList){
            items.push(
                <EBCollapsibleView
                    category = {item.category}
                    data = {item.data}
                    render={({data, visible})=> (
                        visible
                            ? <EBCollapsibleItem data={data} visible={visible}/>
                            : null
                        )}
                />
            )
        }
        return items;

    }

    return (
        <View style={styles.container}>
            {_renderCollapsible()}
        </View>
    )
};
export default EBProductList;
