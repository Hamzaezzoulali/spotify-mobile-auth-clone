import { View, Text, FlatList, StyleSheet,TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useEffect } from 'react'

import * as Animatable from 'react-native-animatable';

import {COLORS} from '../Theme/Colors'

export default function RenderCode({
    ListData,
    Country_Code_value
}) {

    const renderItem = ({item})=>(<Item name={item}/>);
    const keyExtractor = (_, index) => `post-${index}`;
    const Item = ({name}) => {
        return(
        <TouchableOpacity onPress={() =>  Country_Code_value(name.dial_code,name.name)}>
            <Animatable.View 
                style={Styles.itemstyle} 
                animation='fadeIn'
                duration={500}
            >
                <Text style={Styles.txt}>{name.name}</Text>
                <Text style={[Styles.txt,{color:COLORS.gray}]}>{name.dial_code}</Text>
            </Animatable.View>
        </TouchableOpacity>
        );
        }


  return (
        <FlatList
            data={ListData}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />
  )
}
const Styles = StyleSheet.create({
    txt:{
        color: COLORS.white,
        margin:15,
        fontSize:15,
        fontFamily:'Sailecmed',
    },
    
    itemstyle:{
        flexDirection:'row',
        justifyContent:'space-between',
    }
})