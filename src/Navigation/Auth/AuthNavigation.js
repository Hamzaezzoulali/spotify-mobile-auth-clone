import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../../Screens/Home'
import SignupPassword from '../../Screens/Signup/SignupPassword'
import SignupEmail from '../../Screens/Signup/SignupEmail'
import SignupPhoneN from '../../Screens/Signup/SignupPhoneN'
import SignupName from '../../Screens/Signup/SignupName'
import Loginemail from '../../Screens/Login/Loginemail'
import Login from '../../Screens/Login/Login'
import SignupGender from '../../Screens/Signup/SignupGender';



const Stack = createNativeStackNavigator();
export default function AuthNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="SignupEmail" component={SignupEmail} options={{headerShown: false}}/>
        <Stack.Screen name="SignupPassword" component={SignupPassword} options={{headerShown: false}}/>
        <Stack.Screen name="SignupPhoneN" component={SignupPhoneN} options={{headerShown: false}}/>
        <Stack.Screen name="SignupGender" component={SignupGender} options={{headerShown: false}}/>
        <Stack.Screen name="SignupName" component={SignupName} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Loginemail" component={Loginemail} options={{headerShown: false}}/>
      

      </Stack.Navigator>
    </NavigationContainer>
  )
}