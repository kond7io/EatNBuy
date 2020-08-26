import React,{useState} from 'react';
import {View} from 'react-native';
import EBCollapsibleView from "../../components/EBCollapsibleView/EBCollapsibleView";
import EBCollapsibleItem from "../../components/EBCollapsibleView/EBCollapsibleItem/EBCollapsibleItem";

import {styles} from './styles';

console.disableYellowBox = true;

const productsList = [
    {category:'Nabiał',
        icon: 'milk',
        data: [
            {product: 'mleko', company: 'Mlekovita', selected: false},
            {product: 'serek', company: 'Włoszczowa', selected: true},
            {product: 'jogurt', company: 'Bakoma', selected: true}
        ]},
    {category: 'Owoce',
        icon: 'fruit_circle',
        data: [
            {product: 'jabłko', company: '',selected: false},
            {product: 'banan', company: '', selected: false},
            ]},
    {category: 'Słodycze',
        icon: 'donut',
        data: [
            {product: 'czekolada', company: 'Milka',selected: false},
            {product: 'baton', company: 'Twix', selected: false},
        ]},
    {category: 'Chemia',
        icon: 'household',
        data: [
            {product: 'płyn do wc', company: 'Domestos',selected: false},
            {product: 'płyn do szyb', company: 'Ajax', selected: false},
        ]},
    {category: 'Zwierzęta',
        icon: 'pets',
        data: [
            {product: 'karma dla kota', company: 'KitKat',selected: false},
            {product: 'karma dla psa', company: 'Pedigree', selected: false},
        ]},
    {category: 'Dziecko',
        icon: 'baby',
        data: [
            {product: 'pieluszki', company: 'Example',selected: false},
            {product: 'puder', company: 'Example', selected: false},
        ]},
    {category: 'Warzywa',
        icon: 'vegetables_circle',
        data: [
            {product: 'pomidor', company: '', selected: true},
            {product: 'ogórek', company: '', selected: false},
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
                            ? <EBCollapsibleItem data={data}/>
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
