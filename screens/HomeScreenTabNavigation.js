import React , { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

import Dashboard from './TabScreens/Dashboard'
import BuyLoad from './TabScreens/BuyLoad'
import Send from './TabScreens/Send'
import PayBills from './TabScreens/PayBills'

export default class AppTabNavigator extends Component {
  render(){
    return(
      <Tab.Navigator>
        <Tab.Screen name = "Dashboard" component = { Dashboard } />
        <Tab.Screen name = "Send / Request" component = {Send}/>
        <Tab.Screen name = "Pay Bills" component = {PayBills}/>
        <Tab.Screen name = "Buy Load" component = { BuyLoad}/>
      </Tab.Navigator>
    )
  }
}


