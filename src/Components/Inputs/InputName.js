import { View, Text ,TextInput, StyleSheet} from 'react-native'
import React, { useState } from 'react'

import {COLORS} from '../../Theme/Colors'

const msg_txt ={
  "init" : "You'll need to confirm this email later",
  "empty" : "Don't forget to enter your email adress.",
  "error" : "This email is invalid. Make sure it's written like example@email.com"
}

export default function InputName({
    handlesubmit,
    KeyType
}) {
  const [Name,SetName] = useState('')
  const [Focus,Setfocus] = useState(false)
  const handlechange = (text) => SetName(text) 

  return (
    
    <TextInput
        style={[Styles.Inpustyle, 
          {
            color : COLORS.white ,
            backgroundColor : Focus ? COLORS.BGinputfocus : COLORS.BGinput 
          }]}
        value={Name}
        selectionColor={COLORS.white}
        autoCapitalize='none'
        keyboardType='email-address'
        returnKeyType={KeyType}
        onFocus={() =>{Setfocus(true)}}
        onBlur={() =>{Setfocus(false)}}
        onChangeText={(text) => handlechange(text)}
        onSubmitEditing={()=>{handlesubmit()}} 
    />
  )
}
const Styles = StyleSheet.create({
    Inpustyle:{
        width:"100%",
        borderRadius:5,
        fontSize:15,
        height:50,
        fontFamily:'Sailecmed',
        paddingLeft:10
        
    },
})