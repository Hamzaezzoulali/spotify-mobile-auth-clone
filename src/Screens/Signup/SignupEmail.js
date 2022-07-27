import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

import * as Animatable from 'react-native-animatable';

import Header from '../../Layouts/Header/Header'
import Inputmail from  '../../Components/Inputs/Inputmail'
import BtnNext from '../../Components/Buttons/BtnNext'
import Container from '../../Theme/Container';
import {COLORS} from '../../Theme/Colors'

const windowWidth = Dimensions.get('window').width;
const msg ={
    "init" : "You'll need to confirm this email later",
    "empty" : "Don't forget to enter your email adress.",
    "error" : "This email is invalid. Make sure it's written like example@email.com"
}

export default class SignupEmail extends Component {
    state={
        Email:'',
        isvalidEmail: false,
        msg : msg["init"],
        Errorinput: false
    }

    Errormsg = (index) =>{
        this.setState({
          msg: msg[index]
        })
    }

    handlesubmit = (Email) =>{
        if(this.state.isvalidEmail) {
          this.setState({
              Errorinput:false,
              Email:Email
          })
          this.props.navigation.navigate("SignupPassword")
        } else {
            console.log('error')
            this.setState({Errorinput:true})
            if(Email.length === 0){
              this.Errormsg("empty")
            } else {
              this.Errormsg("error")
            }
        }
      }

    SetValidEmail = (value) =>{
        this.setState({
            isvalidEmail:value
        })
    }
    
  render() {
    return (
      <Container>
        <Header 
            Title="Create account"
            Navigation={this.props.navigation}
          />
        <Animatable.View 
            style={Styles.content}
            animation="bounceInRight" 
            duration={600}   
        >
            <View style={{width:"100%"}}>
                <Text style={Styles.txt}>What's your email?</Text>
                <Inputmail
                  SetValidEmail={this.SetValidEmail}
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
                    Title='Next'
                    Validate={this.state.isvalidEmail}
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
        marginTop:25
    },
    btnstyle:{
        width:"100%"
    }
    
})