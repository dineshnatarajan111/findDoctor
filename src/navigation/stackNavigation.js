import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './bottomNavigation'
import { 
  MapView,
  Conversation
} from '../screens';


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
        <Stack.Screen name="Conversation" component={Conversation} />
      </Stack.Navigator>
    );
  }
}

export default MainNav;