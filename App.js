import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useFonts}  from 'expo-font'
import AppLoading from 'expo-app-loading'

import AuthNavigation from './src/Navigation/Auth/AuthNavigation';

const Stack = createNativeStackNavigator();
export default function App() {
  
  let [FontLoad] = useFonts({
    "AtypSemibold": require('./assets/Fonts/AtypText-Semibold.ttf'),
    "Sailecbold": require('./assets/Fonts/SailecBold.ttf'),
    "Saileclight": require('./assets/Fonts/SailecLight.ttf'),
    "Sailecmed": require('./assets/Fonts/SailecMedium.ttf'),
  })
  
  if(!FontLoad) {
    return <AppLoading/>
  } 
  return (
    <AuthNavigation/>
  )

}