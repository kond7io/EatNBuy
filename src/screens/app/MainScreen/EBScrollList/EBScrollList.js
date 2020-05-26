import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import Animated from 'react-native-reanimated';
import {windowHeight} from '../../../../utils/deviceDimension';
import {styles} from '../EBScrollList/styles';

console.disableYellowBox = true;
const number = 3;
const groupName = "Srebrna 45";
const element = ["aaa",'bbb','ccc','ddd','eee','fff','ggg','hhh','iii','jjj','kkk','lll','mmm','nnn','ooo','ppp','rrr','sss','ttt','111','222','333','444','555','666'];

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
                )}

                style={{zIndex: 0, height: "100%", elevation: 0}}>
                <Text>Listy zakupów</Text>
                {element.map((item) => {
                    return <Text style={{textAlign:'center',borderTopWidth:4,borderTopColor:'black', height:50}}>{item}</Text>
                })}

            </Animated.ScrollView>
    )
};
export default EBScrollList;
