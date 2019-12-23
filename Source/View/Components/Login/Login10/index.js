import React, { Component } from 'react';
import {StyleSheet,Platform,StatusBar,Dimensions,View,Image,ImageBackground,Alert,TouchableOpacity,BackHandler,I18nManager} from 'react-native';
import {Container,Content,Form,Label,Item,Text,Input,Button,Icon,Header,Left,Right,Body,Title} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";

//GUIDELINE SIZES ARE BASED ON STANDARD ~5" SCREEN

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

export default class Login10 extends Component<{}> {


  // BEGIN TO SETUP SOCIAL BUTTON CLICK EVENT
  facebook = () =>{alert('Facebook button clicked.');}
  twitter = () =>{alert('Twitter button clicked.');}
  // END TO SETUP SOCIAL BUTTON CLICK EVENT

  render() {

    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW
    return (
      <Container>
        {/* BEGIN TO SETUP IMAGE AS A BACKGROUND */}
        <ImageBackground source={GlobalInclude.Image3} style={styles.background_image}>

          {/* BEGIN TO SETUP HEADER VIEW */}
          <Header style={styles.header}>

              {/* BEGIN TO SETUP HEADER LEFT VIEW */}
              <Left style={styles.left}>
                <TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
                  <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="black"/>
                </TouchableOpacity>
              </Left>
              {/* END TO SETUP HEADER LEFT VIEW */}

              {/* BEGIN TO SETUP HEADER BODY VIEW */}
              <Body style={styles.body}>
                <Text style={styles.text_title}></Text>
              </Body>
  						{/* END TO SETUP HEADER BODY VIEW */}

  						{/* BEGIN TO SETUP HEADER RIGHT VIEW */}
              <Right style={styles.right}/>
  						{/* END TO SETUP HEADER RIGHT VIEW */}
  				</Header>
  				{/* END TO SETUP HEADER VIEW */}

          {/* BEGIN TO SETUP LOGO VIEW */}
          <View style={ styles.view_01 }>
            <Image source={GlobalInclude.Image2} style={ styles.logo_view }/>
          </View>
          {/* END TO SETUP LOGO VIEW */}

          {/* BEGIN TO SETUP TEXT VIEW */}
          <View style={ styles.view_02 }>
            <Text style={styles.header_text}>
              Connect and discovery our awesome UI Kit
            </Text>
          </View>
          {/* END TO SETUP TEXT VIEW */}

          <View style={ styles.view_03 }>
            {/* BEGIN TO MAKE FACEBOOK BUTTON VIEW */}
            <TouchableOpacity style={styles.fb_button} onPress = {() => this.facebook()}>
              <View iconRight  style={styles.fb_view}>
                <FontAwesome name="facebook-f" size={23} color="white"/>
                <Text style={styles.fb_button_text}>Connect with facebook</Text>
              </View>
            </TouchableOpacity>
            {/* END TO MAKE FACEBOOK BUTTON VIEW */}

            {/* BEGIN TO MAKE TWITTER BUTTON VIEW */}
            <TouchableOpacity  style={styles.tw_button} onPress = {() => this.twitter()}>
              <View iconRight style={styles.tw_view}>
              <FontAwesome name="twitter" size={23} color="white"/>
                <Text style={styles.tw_button_text}>Connect with twitter</Text>
              </View>
            </TouchableOpacity>
            {/* END TO MAKE TWITTER BUTTON VIEW */}
          </View>
        </ImageBackground>
        {/* END TO SETUP IMAGE AS A BACKGROUND */}
      </Container>

    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  background_image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flex: 4,
    backgroundColor: "#ffffff",
    zIndex: 0.8,
    position: "absolute"
  },

  header: {
    backgroundColor: 'rgba(0,0,0,0)',
    height: Dimensions.get('window').width * 0.15,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
        marginTop: moderateScale(25)
      }
    }),
    elevation: 0
  },
  left: {
    flex: 0.5,
    backgroundColor: "transparent"
  },
  back_arrow: {
    justifyContent: "center",
    alignItems: "center",
    width: 30
  },
  body: {
    flex: 3,
    alignItems: "center",
    backgroundColor: "transparent"
  },
  text_title: {
    color: 'white',
    fontSize: moderateScale(20),
    marginTop: 5,
    alignSelf: "center",
    fontFamily: font_type.FontBold
  },
  right: {
    flex: 0.5
  },
  view_01: {
    width: Dimensions.get('window').width * 0.9,
    alignSelf: "center"
  },
  logo_view: {
    padding: 20,
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').height * 0.13,
    alignSelf: "center",
    marginTop: Dimensions.get('window').height * 0.05
  },
  view_02: {
    width: Dimensions.get('window').width * 0.9,
    alignSelf: "center",
    marginTop: Dimensions.get('window').height * 0.1
  },
  header_text: {
    fontFamily: font_type.FontBold,
    backgroundColor: "transparent",
    textAlign: "center",
    alignSelf: "center",
    fontSize: moderateScale(30),
    width: Dimensions.get('window').width * 0.9,
    color: "white"
  },
  view_03: {
    height: Dimensions.get('window').height * 0.4,
    width: Dimensions.get('window').width * 0.9,
    alignSelf: "center",
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 0
  },
  fb_button: {
    backgroundColor: '#3b5998',
    height: Dimensions.get('window').height * 0.08,
    width: Dimensions.get('window').width * 0.9,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: Dimensions.get('window').height * 0.05
  },
  fb_view: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center"
  },
  fb_button_text: {
    color: "white",
    fontSize: moderateScale(17),
    left: 10,
    fontFamily: font_type.FontLight,
    alignItems: "center",
    alignSelf: "center"
  },
  tw_button: {
    backgroundColor: '#55acee',
    height: Dimensions.get('window').height * 0.08,
    width: Dimensions.get('window').width * 0.9,
    flexDirection: "row",
    borderRadius: 5,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: Dimensions.get('window').height * 0.03
  },
  tw_view: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center"
  },
  tw_button_text: {
    color: "white",
    fontSize: 17,
    left: 10,
    alignItems: "center",
    alignSelf: "center",
    fontFamily: font_type.FontLight
  }
});
// END TO MAKE STYLE
