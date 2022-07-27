import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { COLORS } from '../Theme/Colors';

export default function Radiobutton() {
    const [checked,Setchecked] = useState(false)
  return (
    <TouchableOpacity onPress={() =>{Setchecked(!checked)}}>
        <MaterialCommunityIcons
            name= {checked ? 'check-circle' : "checkbox-blank-circle-outline"}
            size={30}
            style={{color: checked? COLORS.BGbuttonsignup  : COLORS.gray2}}
        />

    </TouchableOpacity>
  )
}