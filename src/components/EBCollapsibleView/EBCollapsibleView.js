import React,{useState} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View, LayoutAnimation, UIManager, ScrollView} from 'react-native';
import EBIcon from "../EBIcon/EBIcon";
import Icons from '../../icons/Icons';
import Icon from "react-native-vector-icons/MaterialIcons";
console.disableYellowBox = true;

const EBCollapsibleView = ({category, data}) => {

    if (Platform.OS === 'android') {UIManager.setLayoutAnimationEnabledExperimental(true);}

    const [visible, setVisible] = useState(false);
    const [newData, setNewData] = useState({data});

    const switchVisible = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setVisible(!visible);
    }

    const hoverComponent = (index) => {
        // const temp = newData.shift()
        // temp[index].value = !temp[index].value;
        // setNewData(temp);
    }

    debugger;
    return (
        <View style={{flex:1, alignItems: 'center', marginBottom:20 }}>
            <TouchableOpacity
                style={{flex:0.5 , width: '80%', alignItems: 'center', flexDirection:'row', borderRadius: 25, borderWidth:1,borderColor:'gray'}}
                onPress={()=> switchVisible() }
            >
                <EBIcon  source={Icons.tea_circle} height={visible ? 30 : 45} width={visible ? 30 : 45}/>
                <View style={{flex:2,flexDirection: 'column'}}>
                    <Text style={{fontSize: visible ? 12 : 17, textAlignVertical:'bottom',textAlign: 'left', flex:1,}}>{category}</Text>
                    <Text style={{fontSize: 10,textAlignVertical:'top',textAlign: 'left', flex:1}}>Produktów w kategorii: {data.length}</Text>
                </View>
                <Icon name={visible ? 'remove' : 'add'} size={30} style={{ flex:1, textAlign:'center',textAlignVertical:'center'}}/>
            </TouchableOpacity>

            <View style={{ width: '80%'}}>

                {visible ?
                    <View>

                        <FlatList
                            data={data}
                            numColumns={1}
                            scrollEnabled={false}
                            renderItem={({item, index}) =>

                                    <TouchableOpacity style={{flexDirection: 'row', }} onPress={()=>hoverComponent(index)}>
                                        <Icon style={{alignItems:'center'}} color={item.selected ? 'yellow' : 'white'} size={20} name='grade' />
                                        <Text style={{alignItems: 'center'}}>{item.product + ' ' + item.company}</Text>
                                    </TouchableOpacity>

                            }/>

                    </View> : <></>
                }

            </View>
        </View>
    )
};
export default EBCollapsibleView;
