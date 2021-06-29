import React, {Component} from 'react'
import { Keyboard } from 'react-native';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
  TextInput,
  Animated
} from 'react-native'
import {Icon} from 'react-native-elements'

class Conversation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused : false,
            text : "",
        }
    }
    back = () => {
        this.props.navigation.goBack();
    }
    changeText = (val) => {
        this.setState({text:val});
    }
    focused = () => {
    }
    render(){
        console.log(this.state.text)
        return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : null}
            >
                <View style={styles.header}>
                    <TouchableOpacity onPress = {this.back} style={styles.backBtn}>
                        <Icon 
                        name= "arrow-left"
                        type = "feather"
                        color = "#FFFFFF"
                        size = {24}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.messages}>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.txtInp}>
                        <TextInput 
                        style={{
                            minHeight: 40,
                            maxHeight : 300,
                            fontSize : 14,
                            color : "#FFF"
                        }}
                        value={this.state.text}
                        onChangeText = {this.changeText}
                        placeholder = "Type here..."
                        placeholderTextColor = "#FFF"
                        onFocus = {this.focused}
                        multiline = {true}
                        />
                    </View>
                    <View style={styles.btns}></View>
                    <View style={styles.btns}></View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#14152B'
  },
  header : {
    paddingVertical : 20,
    flexDirection : 'row',
    paddingHorizontal : 20,
    alignItems : 'center',
  },
  backBtn : {
    // backgroundColor : "#FFFFFF",
    justifyContent : "center",
    alignItems : 'center',
  },
  messages : {
    flex : 1,
  },
  bottom : {
    minHeight : 60,
    maxHeight : 360,
    backgroundColor : "#222340",
    flexDirection : 'row',
    paddingVertical : 10,
    alignItems : "flex-end",
    justifyContent : "space-evenly",
    paddingHorizontal : 20,
  },
  txtInp : {
    minHeight : 40,
    maxHeight : 300,
    width : 3 * Dimensions.get("window").width / 5,
    borderRadius : 30,
    paddingHorizontal : 10,
    backgroundColor : "#14152B",
  },
  btns : {
    height : 40,
    width : 40,
    borderRadius : 20,
    backgroundColor : "#14152B"
  },
})


export default Conversation;