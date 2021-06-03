//50:00

import {StatusBar} from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'

import firebase from 'firebase'
import Register from './components/auth/Register'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0VL2S7Gr7TbFU57O33kmn2nW1aiNFlRw",
  authDomain: "instagram-clone-e3168.firebaseapp.com",
  projectId: "instagram-clone-e3168",
  storageBucket: "instagram-clone-e3168.appspot.com",
  messagingSenderId: "528432856968",
  appId: "1:528432856968:web:b3129d763ade9bc321843d",
  measurementId: "G-1XX1FX9CMV"
};
if(firebase.apps.length===0)
{
  firebase.initializeApp(firebaseConfig)  
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Landing">
        <Stack.Screen name = "Landing" component ={LandingScreen} options ={{headerShown:false}}>
        </Stack.Screen>
        <Stack.Screen name = "Register" component ={RegisterScreen} options ={{headerShown:false}}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}