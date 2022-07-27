import { Text, View } from 'react-native'
import React, { Component } from 'react'


import Container from '../../Theme/Container'
import Headerliste from '../../Layouts/Header/Headerlist'
import Inputsearch from '../../Components/Inputs/Inputsearch'

export default class Countryphonecode extends Component {
  render() {
    return (
      <Container>
        <Headerliste 
            Close={this.handlelistcodes}
            Title="Choose your country"
             />
            <Inputsearch  
             handleChangeCountry ={this.handleChangeCountry} 
            initData={this.initData}
            />
      </Container>
    )
  }
}