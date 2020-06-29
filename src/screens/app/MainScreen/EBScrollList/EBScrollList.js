import React, {useState} from 'react';
import {Text} from 'react-native';
import Animated from 'react-native-reanimated';
import EBListItem from '../../../../components/EBListItem/EBListItem';

import testIMG from '../../../../img/test/testIMG.jpg';
import testIMG2 from '../../../../img/test/testIMG2.jpg';
import testIMG3 from '../../../../img/test/testIMG3.jpg';
import testIMG4 from '../../../../img/test/testIMG4.jpg';
import testIMG5 from '../../../../img/test/testIMG5.jpg';
import testIMG6 from '../../../../img/test/testIMG6.jpg';

import {styles} from './styles'

console.disableYellowBox = true;

const element = ["aaa",'bbb','ccc','ddd','eee','fff','ggg','hhh','iii','jjj','kkk','lll','mmm','nnn','ooo','ppp','rrr','sss','ttt','111','222','333','444','555','666'];
const items = [
    {user: "Klaudia", img: testIMG3, name: 'Dla Alanka', date: '28.05.2020', counter: 5},
    {user: "Martyna", img: testIMG , name: 'Mojeee ...', date: '27.05.2020', counter: 8},
    {user: "Bożena", img: testIMG5, name: 'Do domu', date: '27.05.2020', counter: 20},
    {user: "Bożena", img: testIMG5, name: 'Do domu', date: '28.05.2020', counter: 145},
    {user: "Tomek", img: testIMG4, name: 'Browary i inne towary', date: '28.05.2020', counter: 2},
    {user: "Bożena", img: testIMG5, name: 'Do domu', date: '25.05.2020', counter: 1},
    {user: "Robert", img: testIMG6, name: 'Masło 80%', date: '24.05.2020', counter: 3},
    {user: "Konrad", img: testIMG2, name: 'Pamiętaj czekolada', date: '28.05.2020', counter: 7},
    {user: "Martyna", img: testIMG, name: 'Moje2 ...', date: '27.05.2020', counter: 9},
    {user: "Konrad", img:testIMG2, name: 'Lista Konrada', date: '28.05.2020', counter: 2}];

const EBScrollList = ({navbarHeight, scroll}) => {

    return (
            <Animated.ScrollView
                scrollEventThrottle={1}
                bounces={false}
                contentContainerStyle={{paddingTop: navbarHeight}}
                showsVerticalScrollIndicator={false}
                overScrollMode="never"
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {y: scroll}}}],
                    {useNativeDriver: true},
                )}>
                <Text style={styles.text}>Listy zakupów</Text>
                {items.map((item) => {
                    return <EBListItem items={item}/>
                })}

            </Animated.ScrollView>
    )
};
export default EBScrollList;
