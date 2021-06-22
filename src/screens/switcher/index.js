import React, {Component} from 'react'
import { Dimensions, TouchableOpacity } from 'react-native'
import {
  View,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Platform,
  Text
} from 'react-native'

class Switcher extends Component {
  render(){
    return(
      <SafeAreaView style={styles.container}>
        <View style={styles.quest}>
          <Text style={styles.questtxt}>Who are you?</Text>
        </View>
        <View style={styles.img}></View>
        <View style={styles.btns}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntxt}>Doctor</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntxt}>Patient</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    backgroundColor : '#14152B'
  },
  quest : {
    // height : 50,
    marginVertical : 20,
    justifyContent : 'center',
    alignItems : 'center',
  },
  questtxt : {
    fontSize : 26,
    fontWeight : 'bold',
    color : '#FFFFFF',
  },
  img:{
    marginVertical : 20,
    height : 350,
    backgroundColor : '#222222'
  },
  btns : {
    marginVertical : 20,
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-evenly'
  },
  btn : {
    height : 50,
    width : Dimensions.get('window').width / 2 - 40,
    borderRadius : 10,
    justifyContent : 'center',
    alignItems : 'center',
    borderWidth : 0.7,
    borderColor : '#A1A1AA'
  },
  btntxt : {
    fontSize : 16,
    fontWeight : 'bold',
    color : '#FFFFFF',
    // opacity : 0.6
  },
})


export default Switcher;