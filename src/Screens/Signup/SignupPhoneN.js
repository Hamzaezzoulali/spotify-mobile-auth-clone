import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

import { BottomSheet } from "react-native-btr";

import Header from '../../Layouts/Header/Header'
import BtnNext from '../../Components/Buttons/BtnNext'
import {COLORS} from '../../Theme/Colors'
import CountryCode from '../../Components/CountryCode'
import RenderCode from '../../Components/RenderCode'
import Inputsearch from '../../Components/Inputs/Inputsearch';
import Headerlist from '../../Layouts/Header/Headerlist';
import Container from '../../Theme/Container';

const windowWidth = Dimensions.get('window').width;
const CountryCodes = require('../../../assets/Json/Codephonelist.json')
const msg ={
    "init" : "We'll send you a code SMS to confirm your phone number.",
    "init1" : "We may occasionally send you service-bassed messages.",

    
}

export default class SignupPhoneN extends Component {
    state={
        Phonecodecountry: CountryCodes,
        openlist:false,
        PhoneNumber:'',
        CountryCode:CountryCodes[0].dial_code,
        Country:CountryCodes[0].name,
        isvalidePhoneNumber:false,
        msg : msg["init"],
        msg1 : msg["init1"],
    }
 
    handlelistcodes = () =>{
       const {openlist} = this.state
       this.setState({
        openlist :  !openlist
       })
      }

    handleChange = (Value) => {
        if(Value.length >= 10){
            this.setState({
                PhoneNumber: Value,
                isvalidePhoneNumber:true
            })
        } else {
            this.setState({
                isvalidePhoneNumber:false
            })
        }
    }

    

    handleChangeCountry= async (text) => {
        console.log(text)
        const Phonecodecountry = CountryCodes
        const countryfiltred =   Phonecodecountry.filter(country => country.name.toUpperCase().startsWith(text.toUpperCase()))
        console.log(countryfiltred)
        this.setState({Phonecodecountry:countryfiltred})
        
        
    }
    handlesubmit =() =>{
        
    }

    Country_Code_value = (Code,Country) => {
        this.setState({
            CountryCode: Code,
            Country : Country
        })
        this.handlelistcodes()
    }
    initData = () =>{
        this.setState({
            Phonecodecountry:CountryCodes
        })
    }



 

  
  render() {
    return (
        <Container>
            <Header 
                Navigation={this.props.navigation}
            />
            <View 
                style={Styles.content}
                animation="bounceInRight" 
                duration={600}   
            >
                <View style={{width:"100%"}}>
                    <Text style={Styles.txt}>Enter phone number</Text>
                    <CountryCode
                        Country={this.state.Country}
                        Code = {this.state.CountryCode}
                        handlelistcodes={this.handlelistcodes}
                        AddphoneNumber={this.handleChange}
                    />
                    <Text style={[Styles.txt,{fontSize:12,fontFamily:'Sailecmed'}]}>{this.state.msg}</Text>
                    <Text style={[Styles.txt,{fontSize:12,fontFamily:'Sailecmed'}]}>{this.state.msg1}</Text>

                </View>
                
                <View style={{width:"100%",alignItems:'center'}}>
                    <BtnNext
                        Title="Next"
                        Validate={this.state.isvalidePhoneNumber}
                        handlesubmit={this.handlesubmit}
                        />
                </View>
                <BottomSheet
                    visible={this.state.openlist}
                    onBackButtonPress={() => this.handlelistcodes()}
                >
                    <View style={Styles.Liste}>

                        <View style={Styles.head}> 
                            <Headerlist 
                                Close={this.handlelistcodes}
                                Title="Choose your country"
                            />
                            <Inputsearch  
                                handleChangeCountry ={this.handleChangeCountry} 
                                initData={this.initData}
                            />
                        </View>

                        <View style={Styles.listestyle}>
                            <RenderCode
                                ListData={this.state.Phonecodecountry}
                                Country_Code_value={this.Country_Code_value}
                            />
                        </View>
                    </View>
                </BottomSheet>
            </View>
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
    },
    Liste: {
        flex:1,
        backgroundColor: COLORS.Background,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        display:'flex',
        flexDirection:'column'
      },
      head:{
        flex:1,
        height:10,
        width:'100%'
      },
      listestyle:{
        flex:5,
        marginTop:15,
        width:'100%'
      },
      
      txtheaderbtsheet:{
        color:COLORS.white,
        fontFamily:'AtypSemibold',
        fontSize:15,
        textAlign:'center',
        width:'100%'
        
       

      },
      title:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
      },
      icon :{
        position: 'absolute',
        left: 0,
        right: 0,
      }
      
      
    
})