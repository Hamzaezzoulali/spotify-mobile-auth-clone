import { Dimensions, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'



import Container from '../../Theme/Container'
import Header from '../../Layouts/Header/Header'
import InputName from '../../Components/Inputs/InputName'
import { COLORS } from '../../Theme/Colors'
import Radiobutton from '../../Helpers/Radiobutton'
import BtnNext from '../../Components/Buttons/BtnNext'

const windowWidth = Dimensions.get('window').width;


export default class SignupName extends Component {

  state={
      Name:''
    }
  
  handlesubmit = (value) =>{
    //Create account
  }

  handleChange = value =>{
    this.setState({Name:value})
  }
  render() {
    return (
      <Container>
        <Header
            Title="Create account"
            Navigation={this.props.navigation}
          />
          <KeyboardAvoidingView  style={Styles.content}>
            <ScrollView style={{width:"100%"}}>
              <View style={{width:"100%",borderBottomColor:COLORS.gray3,borderWidth:1,paddingBottom:10}}>
                    <Text style={Styles.txt}>What's your name?</Text>
                    <InputName
                      handleChange={this.handleChange}
                      KeyType="done"
                    />
                    <Text style={[Styles.txt,{fontSize:12}]}>This appears on your Spotigy profils.</Text>
              </View>

              <View>
                  <Text style={[Styles.txt,{fontSize:12}]}>By tapping "Create account", you agree to the Spotify Terms of Use.</Text>
                  <TouchableOpacity>
                      <Text style={[Styles.txt,{fontWeight:'bold',fontSize:12,color:COLORS.BGbuttonsignup}]}>Terms of Use</Text>
                  </TouchableOpacity>
                  <Text style={[Styles.txt,{fontSize:12}]}>To learn more about how Spotify collects, users,shares and protects your personal data,please see the Spotify Privacy Policy.</Text>
                  <TouchableOpacity>
                      <Text style={[Styles.txt,{fontWeight:'bold',fontSize:12,color:COLORS.BGbuttonsignup}]}>Privacy Policy</Text>
                  </TouchableOpacity>
              </View>

              <View style={Styles.optionView}>
                <View style={{flex:6}}>
                  <Text style={[Styles.txt,{ fontSize:12,}]}>I would perfer not to receive marketing messages from Spotify.</Text>
                </View>
                <View style={{flex:2 ,width:'100%',alignItems:'flex-end',justifyContent:'center'}}>
                  <Radiobutton/>
                </View>
              </View>

              <View style={Styles.optionView}>
                <View style={{flex:6}}> 
                  <Text style={[Styles.txt,{ fontSize:12,}]}>Share my registration data with Spotify's content providers from marketing purposes.</Text>
                </View>
                <View style={{flex:2,width:'100%',alignItems:'flex-end',justifyContent:'center'}}>
                  <Radiobutton/>
                </View>
              </View>
            </ScrollView>
        </KeyboardAvoidingView >
        <View style={{flex:2,alignItems:'center',justifyContent:'flex-end'}}>
          <BtnNext
            Title="Create account"
            Validate={true}
            handlesubmit={this.handlesubmit}
          />
          <Text style={[Styles.txt,{fontSize:12,fontWeight:'800',color:COLORS.gray2}]}>PROTECTED RECAPTCHA</Text>
        </View>
        
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
        flex:4,
        width:windowWidth-30,
        flexDirection:'column',
        alignItems:'flex-start',
        marginTop:25,
        
        
    },
    btnstyle:{
        width:"100%"
    },
    optionView:{
      display:'flex',
      flexDirection:'row',
    }
    
})