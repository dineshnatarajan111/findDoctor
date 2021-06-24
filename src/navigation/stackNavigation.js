import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './bottomNavigation'
import { MapView } from '../screens';


const Stack = createStackNavigator();


class MainNav extends Component {
  render(){
    return (
      <Stack.Navigator
      headerMode = "none"
      initialRouteName = "BottomTabs"
      >
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="MapView" component={MapView} />
      </Stack.Navigator>
    );
  }
}

export default MainNav;