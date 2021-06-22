import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
            <Tab.Screen name="MapView" component={MapView} />
            <Tab.Screen name="Messaging" component={Messaging} />
            <Tab.Screen name="Featured" component={Featured} />
            <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        );
    }
}

export default BottomTabs;