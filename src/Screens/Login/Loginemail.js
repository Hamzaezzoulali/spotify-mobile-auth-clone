import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';


import Header from '../../Layouts/Header/Header'
import Inputmail from '../../Components/Inputs/Inputmail'
import BtnNext from '../../Components/Buttons/BtnNext'
import {COLORS} from '../../Theme/Colors'
import Container from '../../Theme/Container';

const windowWidth = Dimensions.get('window').width;
const msg ={
    "init" : "We'll send you an email with a link that will log you in",
    "empty" : "Don't forget to enter your email adress.",
    "error" : "This email is invalid. Make sure it's written like example@email.com"
}

export default class Loginemail extends Component {
    state={
        ValidEmail: false,
        msg : msg["init"],
        Errorinput: false
    }

    Errormsg = (index) =>{
        this.setState({
            msg: msg[index]
        })
    }

    handlesubmit = (Email) =>{
       //Send link 
    }

    ValidEmail = (value) =>{
        this.setState({
            ValidEmail:value
        })
    }
    
  render() {
    return (
      <Container>
        <LinearGradient
            colors={["#FFFF",'#121212']}
            style={Styles.lingrad_style}
        />
        <Header 
            Title="Log in without password"
            Navigation={this.props.navigation}
        />
        <Animatable.View 
            style={Styles.content}
            animation="bounceInRight" 
            duration={600}   
        >
            <View style={{width:"100%"}}>
                <Text style={Styles.txt}>Email or username</Text>
                <Inputmail
                    ValidEmail={this.ValidEmail}
                    Focusinput
                    Errormsg={this.Errormsg}
                    handlesubmit={this.handlesubmit}
                    Errorinput={this.state.Errorinput}
                    KeyType="next"
                />
                <Text style={[Styles.txt,{fontSize:12,fontFamily:'Sailecmed'}]}>{this.state.msg}</Text>
            </View>
                
            <View style={{width:"100%",alignItems:'center'}}>
                <BtnNext
                    Title='Get link'
                    Validate={this.state.ValidEmail}
                    handlesubmit={this.handlesubmit}
                    />
            </View>
        </Animatable.View>
    </Container>
    )
  }
}
const Styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection:'column',
        flex:1,
        width:'100%',
        backgroundColor:COLORS.Background
    },
    txt:{
        color:COLORS.white,
        fontFamily:'AtypSemibold',
        fontSize:30,
        marginBottom:10,
        marginTop:10
    },
    content:{
        width:windowWidth-30,
        flexDirection:'column',
        alignItems:'flex-start',
    },
    btnstyle:{
        width:"100%"
    },
    lingrad_style: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '20%',
        opacity:0.2
    }  
})