import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { Component , createRef} from 'react'

import * as Animatable from 'react-native-animatable';

import Header from '../../Layouts/Header/Header'
import Inputmail from '../../Components/Inputs/Inputmail'
import Inputpassword from '../../Components/Inputs/Inputpassword'
import Btnloginemail from '../../Components/Buttons/Btnloginemail'
import BtnNext from '../../Components/Buttons/BtnNext'
import {COLORS} from '../../Theme/Colors'
import Container from '../../Theme/Container';

const windowWidth = Dimensions.get('window').width;
const msg ={
    "error" : "This email and password combination is incorrect."
}

export default class SignupEmail extends Component {
    constructor(props) {
    super(props);
        this.state={
            isvalidEmail: false,
            isvalidPassword: false,
            isfocusPassword:false,
            msg:''
        }
    }
    
    SetValidEmail = (value) =>{
        this.setState({
            isvalidEmail:value
        })
    }

    SetValidpassword = (value) =>{
        this.setState({
            isvalidPassword:value
        })
    }


    handlesubmit = () => {
        const {isvalidEmail,isvalidPassword} = this.state
        if(isvalidEmail && isvalidPassword){
            this.setState({
                msg:''
            })
            //Login
           
        } else {
        this.setState({
            msg:msg['error']
        })
        }
    }
    
    loginemail= () =>{
        this.props.navigation.navigate("Loginemail")
    }
    
  render() {
    return (
        <Container>
            <Header Navigation={this.props.navigation}/>
            <Animatable.View 
                style={Styles.content}
                animation="bounceInRight" 
                duration={600}   
            >
                <View style={{width:"100%",marginBottom:20}}>
                    <Text style={Styles.txt}>Email or username</Text>
                    <Inputmail
                        SetValidEmail={this.SetValidEmail}
                        KeyType="next"
                    />
                </View>
                <View style={{width:"100%",marginBottom:20}}>
                    <Text style={Styles.txt}>Password</Text>
                    <Inputpassword 
                        SetValidpass = {this.SetValidpassword}
                        handlesubmit={this.handlesubmit}
                        KeyType="done"
                    />
                </View>
                <Text style={[Styles.txt,{fontSize:15,fontFamily:'Sailecmed'}]}>{this.state.msg}</Text>
                <View style={{width:"100%",alignItems:'center'}}>
                    <BtnNext
                        Title='Log in'
                        Validate={this.state.isvalidEmail && this.state.isvalidPassword}
                        handlesubmit={this.handlesubmit}
                    />
                    <Btnloginemail handleclick={this.loginemail}/>
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
        fontFamily:'Sailecmed',
        fontSize:25,
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
    }
})