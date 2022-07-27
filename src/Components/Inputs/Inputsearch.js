import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {COLORS} from '../../Theme/Colors'

export default function Inputsearch({handleChangeCountry,initData}) {
  const [isinput,setisinput] = useState(false)
  const [Country,Setcountry] = useState('')

  useEffect(() =>{
    initData()
  },[])

  return (
    <View style={Styles.search}>
        <View style={{flex:1,alignItems:'center'}}>
            <MaterialCommunityIcons
                name='magnify'
                color={COLORS.white}
                size={25}
            />
        </View>

        <View style={{flex:9}}>
            <TextInput
            value={Country}
            style={Styles.searchinput}
            placeholder="Search"
            placeholderTextColor={COLORS.gray}
            onChangeText={(text) => { 
              Setcountry(text)
              handleChangeCountry(text)
              setisinput(true)
            }}
            />
        </View>
        
          <TouchableOpacity style={{flex:1,alignItems:'center'}}
          onPress={() =>{
            initData()
            Setcountry('')
            setisinput(false)
          }}
          >
            {isinput ? 
              <MaterialCommunityIcons
                  name='close'
                  color={COLORS.white}
                  size={25}
              />
            : null }  
          </TouchableOpacity> 
        
    </View>
  )
}
const Styles = StyleSheet.create({
    search:{
        backgroundColor:COLORS.BGinput,
        borderRadius:5,
        height:50,
        flexDirection:'row',
        alignItems:'center',
        margin:10,
      },
      
      searchinput:{
        margin:10,
        color:COLORS.white,
        fontFamily:'Sailecmed',
        width:'100%',
        fontSize:15,
      },
})