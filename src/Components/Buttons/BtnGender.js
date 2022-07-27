import {Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

import { COLORS } from '../../Theme/Colors'

export default function BtnGender({Gender,Selected,handleselect}) {
  return (
    <TouchableOpacity 
        style={[Styles.btnstyle,{borderColor:Selected ? COLORS.gray : COLORS.gray3}]}
        onPress={() => handleselect(Gender)}
    >
          <Text style={[Styles.txtstyle,{color : Selected ? COLORS.white : COLORS.gray2}]}>{Gender}</Text>
    </TouchableOpacity>
  )
}
const Styles= StyleSheet.create({
    btnstyle:{
        margin:10,
        borderWidth:2,
        borderRadius:50
    },
    txtstyle:{
        margin:15,
        fontFamily:'AtypSemibold',
    }
})