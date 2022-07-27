import { View, Text ,TouchableOpacity, StyleSheet, Dimensions} from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {COLORS} from '../../Theme/Colors'

const windowWidth = Dimensions.get('window').width;

export default function SignupMethods({
    Title,
    icon,
    open
}) {
  return (
    <View style={{margin:5}}>
      <TouchableOpacity style={styles.btnstyle} onPress={open}>
        <View style={{flex:1,alignItems:'center',marginLeft:5}}>
            <FontAwesome
                name={icon}
                size={25}
                color="#FFF"
            />
        </View>
        <View style={{flex:6}}>
            <Text style={styles.txtsign}>{Title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    btnstyle:{
        width: windowWidth-80,
        borderRadius:30,
        borderWidth:1,
        borderColor:COLORS.BGbutton,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },

    txtsign:{
        textAlign:'center',
        margin:10,
        fontFamily:'Sailecbold',
        fontSize:15,
        color:'#FFF'
    }
})