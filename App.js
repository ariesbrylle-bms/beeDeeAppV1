import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import DrawerNavigation from './screens/DrawerNavigation'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen name ="WelcomeScreen" component={ WelcomeScreen } options={{headerShown : false}} />
        <Stack.Screen name ="SignUpScreen" component= { SignUpScreen}/>
        <Stack.Screen name = "LoginScreen" component = { LoginScreen} options={{headerShown : false}} />
        <Stack.Screen name = "DrawerNavigation" component = { DrawerNavigation} options={{headerShown : false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
