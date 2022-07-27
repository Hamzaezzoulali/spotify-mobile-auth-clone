import {Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

import {COLORS} from '../../Theme/Colors'

export default function BtnNext({
  Title,
  Validate,
  handlesubmit
  }) {
  return (
    <TouchableOpacity 
      onPress={() =>handlesubmit()} 
      style={Validate ? styles.btnstyle_validate : styles.btnstyle} 
      disabled={Validate ? false : true}
    >
        <Text style={ Validate ? styles.titlestyle_validate :  styles.titlestyle}>{Title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    btnstyle:{
        backgroundColor:COLORS.BGbutton,
        margin:30,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        paddingLeft:15,
        paddingRight:15
    },

    btnstyle_validate:{
      backgroundColor:COLORS.BGbuttonvalidate,
      margin:30,
      borderRadius:50,
      alignItems:'center',
      justifyContent:'center',
      paddingLeft:15,
      paddingRight:15
  },

    titlestyle:{
        color:COLORS.txtbutton,
        fontSize:15,
        fontFamily:"Sailecbold",
        margin:15,
  },
  
    titlestyle_validate:{
        color:COLORS.txtbutton_v ,
        fontSize:15,
        fontFamily:"Sailecbold",
        margin:15,
  }
})