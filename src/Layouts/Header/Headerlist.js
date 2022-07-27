import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Constants from 'expo-constants'

export default function Headerliste({Title,Close}) {
  return (
    <View style={Styles.container}>
       <View style={Styles.icon}>
            <TouchableOpacity onPress={() => Close()}>
                <MaterialCommunityIcons
                    name='close'
                    size={30}
                    color="#FFFF"
                />
            </TouchableOpacity>
        </View>
        <View>
            <Text style={Styles.txtcreate}>
               {Title}
            </Text>
       </View>
      </View>
  )
}

const Styles = StyleSheet.create({
    container:{
        paddingTop: Constants.statusBarHeight,
        justifyContent: 'center',
        alignItems:'center',
        flexDirection:'row',
        width:'100%',
       padding:20,
    },
    txtcreate:{
        color:"#FFFF",
        fontFamily:'AtypSemibold',
        fontSize:16,
        textAlign:'center',
    },
    icon:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        marginLeft:10,
        position: 'absolute',
        left: 0,
        right: 0,
        top: Constants.statusBarHeight,
    },
})