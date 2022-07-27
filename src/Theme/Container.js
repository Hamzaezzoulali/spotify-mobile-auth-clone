import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import { COLORS } from './Colors'

export default function Container(props) {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  )
}
 const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection:'column',
        flex:1,
        width:'100%',
        backgroundColor:COLORS.Background
    },
 })