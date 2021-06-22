import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icons} from 'react-native-elements'
import {
    MapView,
    Messaging,
    Featured,
    Profile,
} from "../screens";

const Tab = createBottomTabNavigator();

class BottomTabs extends React.Component {
    render(){
        return (
            <Tab.Navigator>
            <Tab.Screen name="MapView" component={MapView} options={{
                tabBarIcon: ({ color, size, focused }) => (
                    <Icons name = '' type = "" size = {18} color = {"#FFFFFF"} />
                )
                }}  
            />
            <Tab.Screen name="Messaging" component={Messaging} options={{
                tabBarIcon: ({ color, size, focused }) => (
                    <Icons name = '' type = "" size = {18} color = {"#FFFFFF"} />
                )
                }}
            />
            <Tab.Screen name="Featured" component={Featured} options={{
                tabBarIcon: ({ color, size, focused }) => (
                    <Icons name = '' type = "" size = {18} color = {"#FFFFFF"} />
                )
                }}
            />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ color, size, focused }) => (
                    <Icons name = '' type = "" size = {18} color = {"#FFFFFF"} />
                )
                }}  
            />
            </Tab.Navigator>
        );
    }
}

export default BottomTabs;