import { View, Text,TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import {COLORS} from '../../Theme/Colors'

const windowWidth = Dimensions.get('window').width;

export default function Btnsignup({Navigation}) {
  return (
    <View style={{margin:5}}>
      <TouchableOpacity 
        style={styles.btnstyle} 
        onPress={() =>{Navigation.navigate("SignupEmail")}} 
      >
        <Text style={styles.txtsign}>Sign up free</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    btnstyle:{
        backgroundColor:COLORS.BGbuttonsignup,
        width: windowWidth-80,
        borderRadius:30
    },
    
    txtsign:{
        textAlign:'center',
        margin:12,
        fontFamily:'Sailecbold',
        fontSize:15
    }
})