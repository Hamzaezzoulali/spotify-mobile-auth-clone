import React, { Component } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

import * as Animatable from 'react-native-animatable';

import Header from '../../Layouts/Header/Header'
import Inputpassword from  '../../Components/Inputs/Inputpassword'
import BtnNext from '../../Components/Buttons/BtnNext'
import {COLORS} from '../../Theme/Colors'
import Container from '../../Theme/Container';


const windowWidth = Dimensions.get('window').width;
const msg ={
    "init" : "Use at least 8 characters.",
    "error" : "Your password needs to be at least 8 characters long."
}

export default class SignupPassword extends Component {
    state={
        isvalidPass: false,
        Errorinput:false,
        msg : msg["init"],
    }
    Errormsg = (index) =>{
        this.setState({
            msg: msg[index]
        })
    }

    handlesubmit = () =>{
        if(this.state.isvalidPass) {
          this.setState({
            Errorinput:false,
            msg:msg['init']
        })
        this.props.navigation.navigate("SignupGender")
        } else {
          this.setState({
            Errorinput:true,
            msg:msg['error']
        })
        }
    }

    SetValidpass = (value) =>{
        this.setState({
            isvalidPass:value
        })
        console.log(value.length)
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
                    <Text style={Styles.txt}>Create a password</Text>
                    <Inputpassword 
                        SetValidpass = {this.SetValidpass}
                        Errorinput={this.state.Errorinput}
                        handlesubmit={this.handlesubmit}
                        KeyType="next"
                    />
                    <Text style={[Styles.txt,{fontSize:12,fontFamily:'Sailecmed'}]}>{this.state.msg}</Text>
                </View>
                <View style={{width:"100%",alignItems:'center'}}>
                    <BtnNext
                        Title='Next'
                        Navigation={this.props.navigation}
                        Validate={this.state.isvalidPass}
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
