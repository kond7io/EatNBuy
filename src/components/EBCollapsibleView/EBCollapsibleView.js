import React,{useState} from 'react';
import { Text, TextInput, TouchableOpacity, View} from 'react-native';
import EBIcon from "../EBIcon/EBIcon";
import Icons from '../../icons/Icons';
console.disableYellowBox = true;

const EBCollapsibleView = ({category, data}) => {
    debugger;
    return (
        <View style={{flex:1, alignItems: 'center' }}>
            <View style={{flex:0.7 , width: '80%', alignItems: 'center', flexDirection:'row', borderRadius: 25, borderWidth:1,borderColor:'gray',

            }}>
                <EBIcon  source={Icons.tea_circle} height={45} width={45}/>
                <View style={{flex:2,flexDirection: 'column'}}>
                    <Text style={{fontSize:17, textAlignVertical:'bottom',textAlign: 'left', flex:1,}}>{category}</Text>
                    <Text style={{fontSize: 10,textAlignVertical:'top',textAlign: 'left', flex:1}}>Produktów w kategorii: {data.length}</Text>
                </View>
            </View>

            <View style={{flex:1, backgroundColor: 'lightgray', width: '80%'}}>
                {data.map((item) => {
                    return  <Text>{item.product + ' ' + item.company}</Text>
                })}
            </View>
        </View>


    )
};
export default EBCollapsibleView;
