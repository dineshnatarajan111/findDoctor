import React, {Component} from 'react'
import {
  View,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  Platform,
  TextInput,
  FlatList,
} from 'react-native'
import moment from 'moment';
import { Icon } from 'react-native-elements'

class Messaging extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {},
        {},
      ],
    }
  }
  render(){
    const _renderItem = () => {
      return(
        <View style={styles.card}>
          <View style={styles.imgWrap}>
            <View style={styles.img}></View>
          </View>
          <View style={styles.infos}>
            <Text style={styles.name}>Dr. Rachel Zane</Text>
            <View style={styles.msgTime}>
              <Text style={styles.msgTxt}>I sent your patient contact...</Text>
              <Text style={styles.timeTxt}>{moment().format("HH:mm")}</Text>
            </View>
          </View>
        </View>
      );
    }
    return(
      <SafeAreaView style={styles.container}>
        <View style={styles.searchWrap}>
          <View style={styles.txtInpWrap}>
            <View style={{
              justifyContent: 'center'
            }}>
              <Image 
              source = {require("../../assets/search.png")}
              style={{
                height: 20,
                width: 20,
                marginHorizontal : 10
              }}
              />
            </View>
            <TextInput 
            placeholder = "Search..."
            style = {{
              flex : 1,
              fontSize : 14,
              color : '#FFF'
            }}
            placeholderTextColor = "#FFF"
            />
          </View>
        </View>
        <FlatList 
        data = {this.state.data}
        renderItem = {_renderItem}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#14152B'
  },
  searchWrap : {
    height : 70,
    paddingHorizontal : 20,
  },
  txtInpWrap : {
    height : 50,
    flexDirection : 'row',
    borderWidth : 1.4,
    borderRadius : 10,
    borderColor : '#292A43',
    backgroundColor : "#292A43"
  },
  card : {
    height : 70,
    marginBottom : 10,
    paddingHorizontal : 20,
    flexDirection : 'row',
  },
  imgWrap : {
    // paddingHorizontal : 10,
    justifyContent : "center"
  },
  img : {
    height : 56,
    width : 56,
    borderRadius : 20,
    backgroundColor : "#FFF"
  },
  infos : {
    flex : 1,
    paddingLeft : 20,
    justifyContent : "space-evenly"
  },
  name : {
    fontSize : 15,
    fontWeight : "bold",
    color : "#A1A1A1"
  },
  msgTime : {
    flexDirection : 'row',
    justifyContent : "space-between",
  },
  msgTxt : {
    fontSize : 13,
    opacity : 0.5,
    color : "#FFF"
  },
  timeTxt : {
    fontSize : 13,
    opacity : 0.5,
    color : "#FFF",
  },
})


export default Messaging;