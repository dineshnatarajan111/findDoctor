import React, {Component} from 'react'
import { KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import {
  View,
  StatusBar,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native'
import { TextInput } from '../../components'

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name : "",
      email : "",
      password : "",
    }
  }

  changeName = (val) => {
    this.setState({email: val});
  }

  changeEmail = (val) => {
    this.setState({email: val});
  }

  changePassword = (val) => {
    this.setState({password: val});
  }

  signupAlt = () => {
    this.props.navigation.navigate("Signin");
  }

  render(){
    return(
      <SafeAreaView style={styles.container}>
        <View style={styles.socialbtns}></View>
        <View style={styles.interactionBox} >
          <TextInput 
          icnName = {"user"}
          icnType = {"feather"}
          value = {this.state.name}
          placeholder = "username"
          onchangeText = {this.changeName}
          password = {false}
          autoCompleteType = "username"
          />
          <TextInput 
          icnName = {"mail"}
          icnType = {"feather"}
          value = {this.state.email}
          placeholder = "email"
          onchangeText = {this.changeEmail}
          password = {false}
          autoCompleteType = "email"
          />
          <TextInput 
          icnName = {"lock"}
          icnType = {"feather"}
          value = {this.state.password}
          placeholder = "password"
          onchangeText = {this.changePassword}
          password = {true}
          autoCompleteType = "password"
          />
          <View style={styles.btns}>
            <Text style={styles.forgot}></Text>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btntxt}>Sign-Up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.alerbtns}>
            <Text style = {styles.new}>Have an Account?   </Text>
            <Text 
            onPress={this.signupAlt}
            style = {styles.signup}>Sign-In</Text>
          </View>
        </View>
        <View style={styles.socialbtns}></View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#14152B'
  },
  interactionBox : {
    flex : 1,
    justifyContent : "center",
    alignItems : 'center',
  },
  btns : {
    height : 80,
    width : Dimensions.get("window").width - 60,
    marginVertical : 10,
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
  },
  forgot : {
    fontSize : 14,
    color : '#FFFFFF',
    opacity : 0.6,
    textDecorationLine : "underline",
  },
  btn : {
    height : 40,
    paddingHorizontal : 20,
    backgroundColor : '#FE9870',
    borderRadius : 10,
    borderWidth : 1.4,
    borderColor : '#FE9870',
    justifyContent : 'center',
    alignItems : 'center',
  },
  btntxt : {
    fontSize : 14,
    fontWeight : 'bold',
    color : '#FFFFFF',
  },

  alerbtns : {
    marginTop : 20,
    flexDirection : 'row',
    justifyContent : "center",
    alignItems : 'center',
  },
  new : {
    fontSize : 14,
    color : '#FFFFFF',
    opacity : 0.5,
  },
  signup : {
    fontSize : 16,
    fontWeight : 'bold',
    color : '#FFFFFF',
    opacity : 0.5,
  },

  socialbtns : {
    height : 80,
    // backgroundColor : '#FE9870'
  },
})


export default Signup;