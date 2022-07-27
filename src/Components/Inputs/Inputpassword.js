import { View, Text ,TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import React, { useRef, useState } from 'react'

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {COLORS} from '../../Theme/Colors'

export default function Inputpassword({
  SetValidpass,
  Errorinput,
  handlesubmit,
  KeyType
}) {
  

  const [Password,SetPassword] = useState('')
  const [showpass, Setshowpass] = useState(true)
  const [Focus,Setfocus] = useState(false)

  focusPassword = () =>{
    PasswordRef.current.focus()
  }
  
  const handlpass = () =>{
    Setshowpass(!showpass)
  }
 
  const handlechange = (text) => {
    SetPassword(text)
    if(text.length > 8 ){
      SetValidpass(true)
    } else {
      SetValidpass(false)
    }
  }
  return (
    <View  style={[Styles.Inputbox, 
    {
      backgroundColor : Focus ? COLORS.BGinputfocus : Errorinput ? COLORS.white : COLORS.BGinput 
    }]}>
      <View style={{flex:8}}>
      <TextInput
          value={Password}
          style={[Styles.Inputstyle, 
            {
              color : Focus ? COLORS.white : Errorinput ? COLORS.txtinputerror : COLORS.white ,
              backgroundColor : Focus ? COLORS.BGinputfocus : Errorinput ? COLORS.white : COLORS.BGinput 
            }]}
          selectionColor={COLORS.white}
          autoCapitalize='none'
          returnKeyType={KeyType}
          blurOnSubmit={false}
          secureTextEntry={showpass}
          onFocus={() =>{Setfocus(true)}}
          onBlur={() =>{Setfocus(false)}}
          onChangeText={(text) => handlechange(text)}
          onSubmitEditing={()=>{handlesubmit()}} 
      />
      </View>
      <View style={{flex:1,alignItems:'center'}}>
        <TouchableOpacity onPress={() => handlpass()} >
        <FontAwesome
          name={showpass ? 'eye' : 'eye-slash'}
          size={23}
          color={COLORS.white}
        />
      </TouchableOpacity>
      </View>

    </View>
  )
}
const Styles = StyleSheet.create({
    Inputbox:{
        width:"100%",
        backgroundColor:COLORS.BGinput,
        borderRadius:5,
        height:50,
        justifyContent:'flex-start',
        alignItems:'center',
        display:'flex',
        flexDirection:'row'
    },
    Inputstyle:{
      fontSize:15,
      color:COLORS.white,
      fontFamily:'Sailecmed',
      paddingLeft:10,
      backgroundColor:'red'
    }
})