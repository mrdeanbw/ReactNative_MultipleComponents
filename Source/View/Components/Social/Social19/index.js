import React, { Component } from 'react';
import {Text,Image, StatusBar, Platform,Dimensions,TouchableOpacity,StyleSheet,BackHandler,I18nManager} from 'react-native';
import {Container, Button, Right, Left,Content, Header, Body,Icon} from 'native-base';
import {View} from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";

// BEGIN TO SETUP FONT-TYPE AND FONT-SIZE
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const scale = size => (Dimensions.get("window").width / guidelineBaseWidth) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const font_type = {
    FontLight: 'Helvetica',
    FontBold : 'Helvetica-Bold'
};
// END TO SETUP FONT-TYPE AND FONT-SIZE


export default class Social19 extends Component {

  render(){

    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW

    //BEGIN TO SETUP DATA
    var data = [
      {
        id: 1,
        cityName: 'Lorem Ipsum',
        temprature: '1',
        postImage:GlobalInclude.Image1,
        profileImages: [
          {image: GlobalInclude.Image2, priority:10},
          {image: GlobalInclude.Image3, priority:9},
          {image: GlobalInclude.Image4, priority:8},
          {image: GlobalInclude.Image5, priority:7},
        ]
      },
      {
        id: 2,
        cityName: 'Lorem Ipsum',
        temprature: '2',
        postImage: GlobalInclude.Image5,
        profileImages: [
          {image:GlobalInclude.Image7, priority:10},
          {image: GlobalInclude.Image8, priority:9},
          {image: GlobalInclude.Image9, priority:8},
        ]
      },
      {
        id: 3,
        cityName: 'Lorem Ipsum',
        temprature: '3',
        postImage:GlobalInclude.Image9,
        profileImages: [
          {image: GlobalInclude.Image2, priority:10},
          {image: GlobalInclude.Image3, priority:9},
          {image: GlobalInclude.Image4, priority:8},
          {image: GlobalInclude.Image5, priority:7},
          {image: GlobalInclude.Image6, priority:6},
        ]
      },
      {
        id: 4,
        cityName: 'Lorem Ipsum',
        temprature: '4',
        postImage: GlobalInclude.Image2,
        profileImages: [
          {image: GlobalInclude.Image2, priority:10},
          {image: GlobalInclude.Image3, priority:9},
          {image: GlobalInclude.Image4, priority:8},
          {image: GlobalInclude.Image5, priority:7},
          {image: GlobalInclude.Image6, priority:6},
        ]
      }
    ]
    //END TO SETUP DATA

    return(
      <Container style={styles.main}>
      {/* BEGIN TO SETUP HEADER VIEW */}
        <Header style={styles.header}>
        {/* BEGIN TO SETUP LEFT VIEW */}
          <Left style={styles.left}>
            <TouchableOpacity  style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
            {
              (I18nManager.isRTL)
              ?
                <MaterialIcons name="chevron-right" size={25} color='white'/>
              :
                <MaterialIcons name="chevron-left" size={25} color='white'/>
            }
            </TouchableOpacity>
          </Left>
        {/* END TO SETUP LEFT VIEW */}

        {/* BEGIN TO SETUP BODY VIEW */}
          <Body style={styles.body}>
            <Text style={styles.text_title}>Discovery</Text>
          </Body>
        {/* END TO SETUP BODY VIEW */}

        {/* BEGIN TO SETUP RIGHT VIEW */}
          <Right style={styles.right}>
            <TouchableOpacity onPress={()=>alert("Search Button Click")}>
              <Ionicons name="ios-search" size={25} color='white'/>
            </TouchableOpacity>
          </Right>
        {/* END TO SETUP RIGHT VIEW */}
        </Header>
       {/* END TO SETUP HEADER VIEW */}
        <Content>
          <View style={styles.list_main_view} animation="bounceInDown" duration={1100} delay={1400}>
          {
            data.map((item, index) => {
              return (
                <View style={styles.row_bg} key={index}>
                {/* BEGIN TO SETUP POSTIMAGE VIEW */}
                  <Image source={item.postImage} style={styles.bg_image}/>
                {/* END TO SETUP POSTIMAGE VIEW */}
                  <TouchableOpacity style={styles.discovery_content}>
                   {/* BEGIN TO SETUP TEMPRATURE VIEW */}
                    <View style={styles.temp_sec}>
                      <Text style={styles.temp}>{item.temprature}</Text>
                      <Text style={styles.temp_degree}>O</Text>
                      <Image source={require('./icon_cloude.png')} style={styles.cloude_icon}/>
                    </View>
                   {/* END TO SETUP TEMPRATURE VIEW */}

                    <View style={styles.about_sec}>
                    {/* BEGIN TO SETUP CITY VIEW */}
                      <Text style={styles.city_name}>{item.cityName}</Text>
                    {/* END TO SETUP CITY VIEW */}

                    {/* BEGIN TO SETUP PROFILE VIEW */}
                      <View style={styles.profile_view}>
                      {
                        item.profileImages.map((itemimage, index) => {
                          return (
                            <View key={index} style={styles.profile_image_view}>
                              <Image source={itemimage.image} style={styles.profile}/>
                            </View>
                          )
                        })
                      }
                      </View>
                    {/* END TO SETUP PROFILE VIEW */}
                    </View>
                  </TouchableOpacity>
                </View>
              )
            })
          }
          </View>
        </Content>
      </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ff6347',
    height: Dimensions.get("window").height * 0.1,
    borderBottomWidth: 0,
    paddingTop: (Dimensions.get("window").height * 0.03),
    elevation: 0,
    paddingRight: (Dimensions.get("window").width * 0.05),
  },
  left: {
    flex: 0.5,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  back_arrow:{
    width: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  body: {
    flex: 3,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  text_title: {
    color: 'white',
    fontSize: moderateScale(16),
    marginTop: (Dimensions.get("window").height * 0.001),
    alignSelf: 'center',
    fontFamily: font_type.FontLight,
  },
  right: {
    flex: 0.5
  },
  main: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: "#F2F2F2",
    flexDirection: 'column'
  },
  row_bg: {
    width: (Dimensions.get("window").width),
    height: (Dimensions.get("window").height * 0.26),
    backgroundColor: 'gray',
    justifyContent: 'center',
  },
  bg_image: {
    height:(Dimensions.get("window").height * 0.26),
    width:(Dimensions.get("window").width),
    resizeMode:'cover',
    position:'absolute'
  },
  discovery_content: {
    height:(Dimensions.get("window").height * 0.26),
    backgroundColor: '#0006'
  },
  temp_sec: {
    alignItems:'center',
    justifyContent:'flex-end',
    flexDirection:'row',
    marginTop:(Dimensions.get("window").height * 0.01),
    paddingTop:(Dimensions.get("window").height * 0.02),
    paddingHorizontal:(Dimensions.get("window").width * 0.03)
  },
  temp: {
    color: 'white',
    fontSize: moderateScale(16),
    fontFamily: font_type.FontLight
  },
  temp_degree: {
    color: 'white',
    fontSize: moderateScale(8),
    fontFamily: font_type.FontBold,
    alignSelf:'flex-start',
    paddingTop: (Dimensions.get("window").height * 0.005)
  },
  cloude_icon: {
    height:(Dimensions.get("window").height * 0.04),
    width:(Dimensions.get("window").height * 0.04),
    resizeMode:'contain'
  },
  about_sec: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    bottom:0,
    position:'absolute',
    width:(Dimensions.get("window").width),
    paddingBottom:(Dimensions.get("window").height * 0.015),
    paddingLeft:(Dimensions.get("window").width * 0.03),
    paddingRight:(Dimensions.get("window").width * 0.05)
  },
  city_name: {
    color: 'white',
    fontSize: moderateScale(18),
    fontFamily: font_type.FontLight
  },
  profile_image_view:{
    width:(Dimensions.get("window").height * 0.037),
  },
  profile: {
    height: (Dimensions.get("window").height * 0.05),
    width: (Dimensions.get("window").height * 0.05),
    borderRadius: (Dimensions.get("window").height * 0.025),
    borderWidth: 2,
    borderColor: 'white',
    resizeMode: 'cover',
  },
  list_main_view:{
    width: (Dimensions.get("window").width)
  },
  profile_view:{
    flexDirection:'row'
  },
});
// END TO MAKE STYLE
