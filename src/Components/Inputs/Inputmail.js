import { View, Text ,TextInput, StyleSheet} from 'react-native'
import React, { useState } from 'react'

import {COLORS} from '../../Theme/Colors'

const msg_txt ={
  "init" : "You'll need to confirm this email later",
  "empty" : "Don't forget to enter your email adress.",
  "error" : "This email is invalid. Make sure it's written like example@email.com"
}

export default function Inputmail({
    SetValidEmail,
    Focusinput,
    handlesubmit,
    Errorinput,
    KeyType
}) {
  const [Email,Setemail] = useState('')
  const [Focus,Setfocus] = useState(false)

  const handlechange = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    Setemail(text)
    if (reg.test(text) === true) {
      SetValidEmail(true)
    } else {
      SetValidEmail(false)
    }
  }


  return (
    
    <TextInput
        value={Email}
        style={[Styles.Inpustyle, 
          {
            color : Focus ? COLORS.white : Errorinput ? COLORS.txtinputerror : COLORS.white ,
            backgroundColor : Focus ? COLORS.BGinputfocus : Errorinput ? COLORS.white : COLORS.BGinput 
          }]}
        selectionColor={COLORS.white}
        autoCapitalize='none'
        keyboardType='email-address'
        autoFocus={Focusinput}
        returnKeyType={KeyType}
        onFocus={() =>{Setfocus(true)}}
        onBlur={() =>{Setfocus(false)}}
        onChangeText={(text) => handlechange(text)}
        onSubmitEditing={()=>{handlesubmit(Email)}} 
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
        
    }
})