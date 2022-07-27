import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

import {COLORS} from '../../Theme/Colors'

export default function Btnloginemail({
  handleclick
}) {
  return (
    <TouchableOpacity 
      style={styles.btn} 
      onPress={handleclick}
    >
        <Text style={styles.txt}>Log in without password</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    btn:{
        borderWidth:0.5,
        borderColor:COLORS.BGinput,
        borderRadius:50,
    },
    txt :{
        color:COLORS.white,
        fontFamily:'AtypSemibold',
        fontSize:12,
        margin:2,
        marginLeft:15,
        marginRight:15
    }
})