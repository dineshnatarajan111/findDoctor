import React from 'react';
import { 
    StyleSheet,
    View,
    Dimensions,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icons} from 'react-native-elements'
import {
    MapView,
    Messaging,
    Featured,
    Profile,
    Doctors,
} from "../screens";
import {
    Feed,
    Home,
    Message,
    Suitcase,
    User,
} from '../assets'

const Tab = createBottomTabNavigator();

const Dummy = () => {
    return(
        <View 
        style = {{
            flex : 1,
            backgroundColor : '#14152B'
        }}
        />
    )
}

class BottomTabs extends React.Component {
    render(){
        return (
            <Tab.Navigator
            initialRouteName = "Messaging"
            tabBarOptions = {{
                showLabel : false,
                style : {
                    height : Dimensions.get("window").height / 10,
                    backfaceVisibility : 'visible',
                    backgroundColor : '#20223F',
                    borderTopWidth : 0,
                },
                tabStyle : {
                    backgroundColor : '#20223F'
                }
            }}
            >
            <Tab.Screen name="Dummy" component={Dummy} 
            listeners={({ navigation }) => ({
                tabPress: (e) => {
                  // Prevent default action
                  e.preventDefault();
        
                  // Do something with the `navigation` object
                  navigation.navigate("MapView");
                },
            })}
            options={{
                tabBarIcon: ({ color, size, focused }) => (
                    focused ?
                    <View style = {styles.btn}>
                        <View style= {styles.btnCol} />
                        <Home color = "#12B2B3" />
                    </View>
                    :
                    <Home color = "#FFFFFF" />
                )
                }}
            />
            <Tab.Screen name="Messaging" component={Messaging} options={{
                tabBarIcon: ({ color, size, focused }) => (
                    focused ?
                    <View style = {styles.btn}>
                        <View style= {styles.btnCol} />
                        <Message color = "#12B2B3" />
                    </View>
                    :
                    <Message color = "#FFFFFF" />
                )
                }}
            />
            <Tab.Screen name="Featured" component={Featured} options={{
                tabBarIcon: ({ color, size, focused }) => (
                    focused ?
                    <View style = {styles.btn}>
                        <View style= {styles.btnCol} />
                        <Feed color = "#12B2B3" />
                    </View>
                    :
                    <Feed color = "#FFFFFF" />
                )
                }}
            />
            <Tab.Screen name="Doctors" component={Doctors} options={{
                tabBarIcon: ({ color, size, focused }) => (
                    focused ?
                    <View style = {styles.btn}>
                        <View style= {styles.btnCol} />
                        <Suitcase color = "#12B2B3" />
                    </View>
                    :
                    <Suitcase color = "#FFFFFF" />
                )
                }}
            />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ color, size, focused }) => (
                    focused ?
                    <View style = {styles.btn}>
                        <View style= {styles.btnCol} />
                        <User color = "#12B2B3" />
                    </View>
                    :
                    <User color = "#FFFFFF" />
                )
                }}  
            />
            </Tab.Navigator>
        );
    }
}

const styles = StyleSheet.create({
    btn : {
        height : 40,
        width : 40,
        justifyContent : 'center',
        alignItems : "center",
    },
    btnCol : {
        position : "absolute",
        left : 0,
        right : 0,
        top : 0,
        bottom : 0,
        opacity : 0.2,
        backgroundColor : "#12B2B3",
        borderRadius : 10,
    },
})

export default BottomTabs;