import React, { Component } from "react";
import {TouchableHighlight,Modal,Dimensions,StyleSheet,ImageBackground,Image,View,StatusBar,Platform,TouchableOpacity,BackHandler,I18nManager,Alert} from "react-native";
import {Container,Text,Content,Form,Item,Button,Input,CheckBox,Body,Footer,Header,Left,Right,Title} from "native-base";
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";
import FontAwesome from "react-native-vector-icons/FontAwesome";

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

export default class Signup4 extends Component {

  render() {
    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW


    return (
      <ImageBackground source={GlobalInclude.Image1} style={styles.screen_bg}>

        {/* BEGIN TO SETUP HEADER VIEW */}
        <Header style={styles.header}>

            {/* BEGIN TO SETUP HEADER LEFT VIEW */}
            <Left style={styles.left}>
              <TouchableOpacity style={styles.back_arrow} onPress={() => this.props.navigation.goBack()} >
                <FontAwesome
                  name={I18nManager.isRTL ? "angle-right" : "angle-left"}
                  size={30}
                  color="black"
                />
              </TouchableOpacity>
            </Left>
            {/* END TO SETUP HEADER LEFT VIEW */}

            {/* BEGIN TO SETUP HEADER BODY VIEW */}
            <Body style={styles.body} />
            {/* END TO SETUP HEADER BODY VIEW */}

            {/* BEGIN TO SETUP HEADER RIGHT VIEW */}
            <Right style={styles.right} />
            {/* END TO SETUP HEADER RIGHT VIEW */}
        </Header>
        {/* END TO SETUP HEADER VIEW */}

        <View style={styles.container}>
          {/* BEGIN TO SETUP PROFILE VIEW */}
          <Image source={GlobalInclude.Image5} style={styles.logo_style} />
          {/* END TO SETUP PROFILE VIEW */}

          <View style={styles.view_second}>
            {/* BEGIN TO SETUP FULL NAME TEXTFIELD VIEW */}
            <Item underline style={styles.item_email}>
              <Input
                placeholderTextColor={'#929597'}
                textAlign={I18nManager.isRTL ? "right" : "left"}
                placeholder="Full Name"
                style={styles.input_email}
              />
            </Item>
            {/* END TO SETUP FULL NAME TEXTFIELD VIEW */}

            {/* BEGIN TO SETUP EMAIL TEXTFIELD VIEW */}
            <Item underline style={styles.item_email}>
              <Input
                placeholderTextColor={'#929597'}
                textAlign={I18nManager.isRTL ? "right" : "left"}
                placeholder="Email"
                style={styles.input_email}
              />
            </Item>
            {/* END TO SETUP EMAIL TEXTFIELD VIEW */}

            {/* BEGIN TO SETUP PASSWORD TEXTFIELD VIEW */}
            <Item underline style={styles.item_email}>
              <Input
                placeholderTextColor={'#929597'}
                textAlign={I18nManager.isRTL ? "right" : "left"}
                secureTextEntry={true}
                placeholder="Password"
                style={styles.input_password}
              />
            </Item>
            {/* END TO SETUP PASSWORD TEXTFIELD VIEW */}

            {/* BEGIN TO SETUP RE-PASSWORD TEXTFIELD VIEW */}
            <Item underline style={styles.item_email}>
              <Input
                placeholderTextColor={'#929597'}
                textAlign={I18nManager.isRTL ? "right" : "left"}
                secureTextEntry={true}
                placeholder="Confirm Password"
                style={styles.input_password}
              />
            </Item>
            {/* END TO SETUP RE-PASSWORD TEXTFIELD VIEW */}
          </View>

          {/* BEGIN TO SETUP SIGNUP BUTTON VIEW */}
          <TouchableHighlight info style={styles.button_dialog_signup} onPress={() => alert("Sign Up button clicked.")} >
            <Text autoCapitalize="words" style={styles.button_sign_in}>
              Sign Up
            </Text>
          </TouchableHighlight>
          {/* END TO SETUP SIGNUP BUTTON VIEW */}

          {/* BEGIN TO SETUP ALREADY ACCOUNT VIEW */}
          <View style={styles.bottom_txt_bg}>
            <Text autoCapitalize="words" style={styles.button_text}>
              Already have an account?
            </Text>
            <TouchableOpacity style={styles.sign_in_txt_bg} onPress={() => alert("Sign In button clicked.")} >
              <Text style={styles.button_text}> Sign In</Text>
            </TouchableOpacity>
          </View>
          {/* END TO SETUP ALREADY ACCOUNT VIEW */}
        </View>

      </ImageBackground>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  screen_bg: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  header: {
    backgroundColor: "transparent",
    height: 56,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
        paddingTop: 10
      }
    }),
    elevation: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  left: {
    flex: 0.5,
    backgroundColor: "transparent"
  },
  back_arrow: {
    width: 30,
    alignItems: "center"
  },
  body: {
    flex: 2,
    alignItems: "center",
    backgroundColor: "transparent"
  },
  right: {
    flex: 0.5
  },
  logo_style: {
    alignSelf: "center",
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').width * 0.3,
    backgroundColor: "transparent",
    resizeMode: "contain",
    marginTop: 20
  },
  container: {
    alignItems: "center"
  },
  button_dialog_signup: {
    backgroundColor: '#ff6347',
    alignSelf: "center",
    marginTop: Dimensions.get('window').height * 0.08,
    borderRadius: 40,
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.07,
    justifyContent: "center"
  },
  view_second: {
    marginTop: Dimensions.get('window').height * 0.05,
    borderRadius: 5,
    backgroundColor: "white",
    height: Dimensions.get('window').height * 0.32,
    width: Dimensions.get('window').width * 0.8
  },
  item_email: {
    alignSelf: "center",
    height: Dimensions.get('window').height * 0.08,
    justifyContent: "center"
  },
  input_email: {
    marginLeft: -5,
    fontFamily: font_type.FontLight,
    color: '#b7b7b7'
  },
  input_password: {
    marginLeft: -5,
    fontFamily: font_type.FontLight,
    color: '#b7b7b7',
    borderColor: "transparent"
  },
  button_sign_in: {
    alignSelf: "center",
    fontSize: 15,
    fontFamily: font_type.FontBold,
    color: "white"
  },
  button_text: {
    fontFamily: font_type.FontLight,
    color: "white",
    fontSize: 17,
    backgroundColor: "transparent"
  },
  bottom_txt_bg: {
    flexDirection: "row",
    width: Dimensions.get('window').width,
    justifyContent: "center",
    marginTop: Dimensions.get('window').height * 0.12
  },
  sign_in_txt_bg: {
    paddingLeft: Dimensions.get('window').width * 0.01
  }
});
// END TO MAKE STYLE
