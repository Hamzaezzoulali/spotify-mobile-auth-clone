import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

import { COLORS } from '../Theme/Colors'

export default function CountryCode ({
    Country,
    Code,
    handlelistcodes,
    AddphoneNumber,
}) { 
    return (
        
      <View style={styles.Container}>
        <View style={styles.countrystyle}>
            <TouchableOpacity style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}} onPress={handlelistcodes}>
                <Text style={styles.txt} >{Country}</Text>
                <FontAwesome
                        name='angle-right'
                        size={35}
                        color= {COLORS.white}
                        style={{marginRight:15}}
                    />
            </TouchableOpacity>
        </View>

        <Animatable.View  
        style={styles.codenumber}
        animation='fadeIn'
        duration={800}
        >
            <View style={styles.code}>
                <TouchableOpacity onPress={handlelistcodes}>
                    <Text style={styles.txt}>{Code}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.Number}>
                <TextInput 
                    style={[styles.txt,{margin:10,fontSize:16}]} 
                    placeholder="Phone Number"
                    placeholderTextColor={COLORS.white}
                    keyboardType='phone-pad'
                    onChangeText ={(value) =>AddphoneNumber(value)}
                />
            </View>
        </Animatable.View>
      </View>
    )
}

const styles= StyleSheet.create({
    Container:{
        width:'100%',
        backgroundColor:COLORS.BGinputfocus,
        borderRadius:5
    },
    countrystyle:{
        borderBottomWidth:0.6,
        borderBottomColor :COLORS.white,
        display:'flex', 
        width:'100%'
    },
    codenumber:{
        width:'100%',
        backgroundColor:COLORS.BGinputfocus,
        borderBottomStartRadius:10,
        flexDirection:'row',
        borderRadius:5
    },
    code :{
        flex:2, 
        display:'flex',
        backgroundColor:COLORS.BGinputfocus,
        borderRightWidth:0.6,
        borderRightColor:COLORS.white,
        borderBottomStartRadius:5,
        alignItems:'center',
        justifyContent:'center'
    },

    Number:{
        flex:6, 
        display:'flex',
        width:'100%',
        backgroundColor:COLORS.BGinputfocus,
        borderRadius:10,
    },
    txt:{
        margin:15,
        color:COLORS.white,
        fontSize:15,
        fontFamily:'Sailecmed',
    }
})

