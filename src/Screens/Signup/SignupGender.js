import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

import * as Animatable from 'react-native-animatable';

import Container from '../../Theme/Container'
import Header from '../../Layouts/Header/Header'
import { COLORS } from '../../Theme/Colors';
import BtnGender from '../../Components/Buttons/BtnGender';

const windowWidth = Dimensions.get('window').width;


export default class SignupGender extends Component {
    state={
        FemaleGender:true,
        MaleGender:true
    }

    handleselect=(Gender) =>{
        Gender =="Female" ? this.setState({FemaleGender:true,MaleGender:false}):this.setState({FemaleGender:false,MaleGender:true})
        this.props.navigation.navigate("SignupName")
    }
    
  render() {
    return (
      <Container>
        <Header
            Title={"Create account"}
            Navigation={this.props.navigation}
        />
        <Animatable.View 
            style={Styles.content}
            animation="bounceInRight" 
            duration={600}   
        >
            <View style={{width:"100%"}}>
                <Text style={Styles.txt}>What's your gender?</Text>
            </View>

            <View style={{flexDirection:'row'}}>
                <BtnGender 
                    Gender='Female'
                    Selected={this.state.FemaleGender}
                    handleselect={this.handleselect}
                />
                <BtnGender 
                    Gender='Male'
                    Selected={this.state.MaleGender}
                    handleselect={this.handleselect}
                />
            </View>
        </Animatable.View>
      </Container>
    )
  }
}
const Styles = StyleSheet.create({
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
})