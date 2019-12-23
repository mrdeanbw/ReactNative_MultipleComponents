import React, { Component } from 'react';
import { View,Text,Image, StatusBar, Platform,Dimensions,TouchableOpacity,StyleSheet,I18nManager} from 'react-native';
import { Container, Button,Right,Left,ListItem,Content,Body,Header,Title} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import GlobalInclude from "../../../../../Global/GlobalInclude/globalinclude.js";

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


export default class Profile extends Component {
  render(){

    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW

    return(
      <Container style={styles.main}>
      {/* BEGIN TO SETUP HEADER VIEW */}
        <Header androidStatusBarColor={"#fa6b7b"} style={styles.header}>
        {/* BEGIN TO SETUP LEFT VIEW */}
          <Left style={styles.left}>
            <TouchableOpacity onPress={Actions.pop}>
            {
              (I18nManager.isRTL)
              ?
                  <FontAwesome name="angle-right" size={30} color="white"/>
              :
                  <FontAwesome name="angle-left" size={30} color="white"/>
            }
            </TouchableOpacity>
          </Left>
        {/* END TO SETUP LEFT VIEW */}

        {/* BEGIN TO SETUP BODY VIEW */}
          <Body style={styles.body}>
            <Title style={{color:'white'}}>Profile</Title>
          </Body>
        {/* END TO SETUP BODY VIEW */}

        {/* BEGIN TO SETUP RIGHT VIEW */}
          <Right style={styles.right}></Right>
        {/* END TO SETUP RIGHT VIEW */}
      </Header>
    {/* END TO SETUP HEADER VIEW */}

    {/* BEGIN TO SETUP IMAGE AND NAME VIEW */}
      <View style={styles.main_view}>
        <Image source={GlobalInclude.Image8} style={styles.profile} />
        <Text style={styles.name}>Lorem Ipsum.</Text>
      </View>
    {/* END TO SETUP IMAGE AND NAME VIEW */}
      </Container>
    )
  }
}

//BEGIN TO SETUP STYLE
const styles = StyleSheet.create({
  main: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: "#fa6b7b",
  	height: (Dimensions.get("window").height * 0.1),
  	width: Dimensions.get("window").width,
  	flexDirection: 'row',
    borderBottomColor: "#fa6b7b",
    paddingTop: (Dimensions.get("window").width * 0.05),
  },
  left: {
    flex:1
  },
  body: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  right: {
    flex: 1
  },
  main_view:{
    height: Dimensions.get("window").height * 0.8,
    width: Dimensions.get("window").width,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  profile:{
    height:(Dimensions.get("window").height * 0.20),
    width:(Dimensions.get("window").height * 0.20),
    borderRadius:(Dimensions.get("window").height * 0.1),
    borderWidth: 2,
    borderColor: '#fa6b7b'
  },
  name:{
    fontSize: moderateScale(18),
    fontFamily: font_type.FontBold,
    color: '#fa6b7b',
    marginTop: (Dimensions.get("window").height) * 0.015
  },
});
//END TO SETUP STYLE
