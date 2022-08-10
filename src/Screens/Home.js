import { StyleSheet, Text, View ,ImageBackground,TouchableOpacity,Platform} from 'react-native'
import React, { Component } from 'react'

import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {COLORS} from '../Theme/Colors'
import Btnsignup from '../Components/Buttons/BtnSignup'
import SignupMethods from  '../Components/Buttons/BtnSignupMethod'
import Container from '../Theme/Container';

const image = require('../../assets/Images/Back_login.jpg' );

export default class Signup extends Component {


  render() {
    return (
        <Container>
            <ImageBackground style={styles.head} source={image}>
                <LinearGradient
                    colors={['transparent','#121212']}
                    style={styles.lingrad_style}
                />
                <View style={{margin:30}}>
                    <FontAwesome 
                    name='spotify'
                    size={60}
                    color="#FFFF"
                    />
                </View>
                <View style={styles.TitleView}>
                    <Text style={styles.Title}>Millions of songs.</Text>
                    <Text style={styles.Title}>Free on Spotify.</Text>
                </View>
            </ImageBackground>
            
            <View style={styles.content}>
                <Btnsignup Navigation ={this.props.navigation}/>
                <SignupMethods
                    Title="Continue with phone number"
                    icon='mobile'
                    open={() => this.props.navigation.navigate("SignupPhoneN")}
                />
                <SignupMethods
                    Title="Continue with Google"
                    icon='google'
                />
                <SignupMethods
                    Title="Continue with Facebook"
                    icon='facebook'
                />
                {Platform.OS == "ios" ? 
                    <SignupMethods
                        Title="Continue with Apple"
                        icon='apple'
                    />
                :null}
                <TouchableOpacity 
                    style={{margin:15}}
                    onPress={() =>this.props.navigation.navigate("Login")}
                >
                <Text style={styles.txtlogin}>Log in </Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="light" />
    </Container>      
    )
  }
}
const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column',
        flex:1,
        width:'100%',
        backgroundColor:COLORS.Background
    },
    head:{
        flex:2,
        width:'100%',
        alignItems:'center',
        justifyContent:'flex-end',
    },
    content:{
        flex:2,
        alignItems:'center',
        justifyContent:'center',
    },
    Title:{
        color:COLORS.white,
        fontSize:35,
        fontFamily:'AtypSemibold',
        fontWeight:'bold'
    },
    TitleView:{
        alignItems:'center'
    },
    lingrad_style: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%'
    },
    txtlogin:{
        color:COLORS.white,
        fontFamily:'Sailecbold'
    }
})