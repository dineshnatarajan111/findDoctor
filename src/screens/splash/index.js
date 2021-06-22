import React, {Component} from 'react'
import {
  View,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Platform,
} from 'react-native'

class Splash extends Component {
  componentDidMount() {
    this.props.navigation.navigate("Switcher");
  }
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


export default Splash;