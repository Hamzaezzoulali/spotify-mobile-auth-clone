import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Constants from 'expo-constants'

export default function Header({Title,Navigation}) {
  return (
    <View style={Styles.container}>
       <View style={Styles.icon}>
            <TouchableOpacity onPress={() => Navigation.goBack()}>
                <MaterialCommunityIcons
                    name='arrow-left'
                    size={25}
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
        margin:20
    },
    
    txtcreate:{
        color:"#FFFF",
        fontFamily:'AtypSemibold',
        fontSize:15,
        textAlign:'center'
    },

    icon:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        marginLeft:10,
        position: 'absolute',
        left: 0,
        right: 0,
        paddingTop: Constants.statusBarHeight,
    },
})