import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreenTabNavigation from './HomeScreenTabNavigation'
import TransferMoney from './TransferMoney'

const Drawer = createDrawerNavigator();

class DrawerNavigation extends Component {
  render() {
      return(
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeScreenTabNavigation} />
          <Drawer.Screen name="Transfer Money" component={TransferMoney} />
        </Drawer.Navigator>
      );
  }
}
export default DrawerNavigation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});