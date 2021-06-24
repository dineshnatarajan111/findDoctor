import React, {Component} from 'react'
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Platform,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native'
import Carousel from 'react-native-snap-carousel';
import MapboxGL, {setLocationManager} from "@react-native-mapbox-gl/maps";
import {Icon} from 'react-native-elements'

MapboxGL.setAccessToken("pk.eyJ1IjoiZGluZXNoLW5hdGFyYWphbiIsImEiOiJja3BqbGl5dHQwYTI2MnZvY2c1dXgyYjRxIn0.QQPK06e6pQXVYyUXBdXR2Q");

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude : 0,
      longitude : 0,
      route : null,
      data:[
        {},
        {},
        {},
      ],
    }
    this._map = {}
    this._camRef = {}
  }
  back = () => {
    this.props.navigation.goBack();
  }
  locUpdate = async () => {
    this._camRef.flyTo([this.state.longitude, this.state.latitude])
    this._camRef.zoomTo(14)
  }
  mapChange = (val) => {
    console.log(val.properties.visibleBounds)
  }
  render(){
    const _renderItem = ({item, index}) => {
      return (
          <View style={styles.slide}>
            <View style={styles.slideBack} />
            <View style={styles.imgWrap}>
              <View style={styles.img}>
                <Image 
                source={require("../../assets/Rounded.png")}
                style={{
                  flex : 1,
                  height : null,
                  width : null,
                  borderRadius : 20
                }}
                />
                <View style={styles.status} >
                  <View style={[styles.statusIn,{backgroundColor : "#00D65B"}]} />
                </View>
              </View>
            </View>
            <View style={styles.info}>
              <Text style={styles.dr_name}>Dr. Anita Gibbs</Text>
              <Text style={styles.dr_desig}>Pathalogy</Text>
              <View style={styles.dr_rating}>
                <Image 
                source={require("../../assets/Star.png")}
                style={{
                  height : 15,
                  width : 15,
                  marginRight : 5
                }}
                />
                <Text style={styles.rating}>4.8</Text>
                <Text style={styles.reviews}>(141 reviews)</Text>
              </View>
              <Text style={styles.dr_location}>Temple Hills, MD20748</Text>
            </View>
          </View>
      );
    }
    return(
      <SafeAreaView style={styles.container}>
        <StatusBar 
        barStyle = {"light-content"}
        translucent = {false}
        backgroundColor = {null}
        tra
        />
        <View style={styles.header}>
          <TouchableOpacity onPress = {this.back} style={styles.backBtn}>
            <Icon 
            name= "arrow-left"
            type = "feather"
            color = "#000000"
            size = {19}
            />
          </TouchableOpacity>
          <View style={styles.filterBtn}>
            <Icon 
            name= "filter"
            type = "feather"
            color = "#FFFFFF"
            size = {19}
            />
          </View>
        </View>
        <View style = {styles.mapView}>
          <MapboxGL.MapView
          ref = {(c)=> this._map = c}
          style={styles.map} 
          styleURL = {"mapbox://styles/dinesh-natarajan/ckq9lablz27l917qk8zgy63qz"}
          logoEnabled = {false}
          compassEnabled = {false}
          attributionEnabled = {false}
          onRegionIsChanging = {this.mapChange}
          >
            <MapboxGL.UserLocation 
            onUpdate = {(val)=>{
              console.log(val.coords)
              this.setState({
                latitude : val.coords.latitude,
                longitude : val.coords.longitude
              })
            }}
            />
            <MapboxGL.Camera
            ref = {(c)=> this._camRef = c}
              zoomLevel = {14}
              animationMode = {"moveTo"}
              centerCoordinate = {[this.state.longitude, this.state.latitude]}
            />
          </MapboxGL.MapView>
        </View>
        <View style={styles.bottom}>
          <View style={styles.locationWrap}>
            <TouchableOpacity onPress={this.locUpdate} style={styles.locbtn}>
              <Icon 
              name = "my-location"
              size = {20}
              color = {"#1DA1F2"}
              />
            </TouchableOpacity>
          </View>
          <View style = {styles.bottomFlatlist}>
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.data}
              renderItem={_renderItem}
              sliderWidth={Dimensions.get('window').width }
              itemWidth={Dimensions.get('window').width - 60}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : "space-between",
    backgroundColor : '#14152B'
  },
  header : {
    paddingVertical : 20,
    flexDirection : 'row',
    paddingHorizontal : 20,
    alignItems : 'center',
    justifyContent : 'space-between'
  },
  backBtn : {
    height : 40,
    width : 40,
    borderRadius : 10,
    backgroundColor : "#FFFFFF",
    justifyContent : "center",
    alignItems : 'center',
  },
  filterBtn : {
    height : 40,
    width : 40,
    borderRadius : 10,
    backgroundColor : "#FE9870",
    justifyContent : "center",
    alignItems : 'center',
  },
  bottom : {

  },
  bottomFlatlist : {
    paddingBottom : 30,
    overflow : "visible",
  },

  mapView : {
    flex: 1,
    position : 'absolute',
    left : 0,
    top : 0,
    bottom : 0,
    right : 0,
    zIndex : -10,
  },
  map: {
    flex: 1
  },

  locationWrap : {
    marginBottom : 10,
    flexDirection : 'row',
    justifyContent : "flex-end",
    paddingHorizontal : 40,
  },
  locbtn : {
    height : 40,
    width : 40,
    borderRadius : 10,
    backgroundColor : "#FFFFFF",
    justifyContent : "center",
    alignItems : 'center',
  },
  slide : {
    height : 140,
    borderRadius : 16,
    flexDirection : 'row',
    backgroundColor : "#212343",
  },
  yellowRound : {
    position : 'absolute',
    top : -100,
    right : -20,
    height : 200,
    width : 200,
    borderRadius : 500,
    // opacity : 0.1,
    backfaceVisibility : "visible",
    backgroundColor : "#0AFFA7"
  },
  slideBack : {
    position : "absolute",
    left : 0,
    right : 0,
    bottom : 0,
    top : 0,
    borderRadius : 16,
    opacity : 0.8,
    backgroundColor : "#212343",
  },
  imgWrap : {
    flex : 3,
    alignItems : 'center',
    paddingTop : 25,
    // backgroundColor : "red"
  },
  status : {
    height : 18,
    width : 18,
    borderRadius : 20,
    padding : 3,
    backgroundColor : '#FFF',
    position : "absolute",
    right : -8,
    top : 0,
  },
  statusIn : {
    flex : 1,
    borderRadius : 30,
  },
  img : {
    height : 65,
    width : 65,
    borderRadius : 20,
    backgroundColor : "#FFFFFF"
  },
  info : {
    flex : 5,
    justifyContent : "space-evenly",
    paddingHorizontal : 20,
    paddingVertical : 20,
    // backgroundColor : '#fff'
  },
  dr_name : {
    fontSize : 15,
    fontWeight : "bold",
    color : "#1DA1F2"
  },
  dr_desig : {
    fontSize : 13,
    color : "#FFFFFF"
  },
  dr_rating : {
    flexDirection : 'row',
  },
  rating : {
    fontSize : 13,
    fontWeight : "bold",
    marginRight : 5,
    color : "#FFF"
  },
  reviews : {
    fontSize : 13,
    color : "#9393AA"
  },
  dr_location : {
    fontSize : 13,
    fontWeight : "bold",
    color : "#FFFFFF"
  },
})


export default MapView;