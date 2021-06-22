import React, {Component} from 'react'
import {
  View,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Platform,
} from 'react-native'

class Messaging extends Component {
  render(){
    return(
      <SafeAreaView style={styles.container}>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#14152B'
  },
})


export default Messaging;