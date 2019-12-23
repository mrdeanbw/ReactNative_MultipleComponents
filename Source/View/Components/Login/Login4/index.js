import React, { Component } from "react";
import {Text,View,Image,StatusBar,Platform,ImageBackground,TouchableOpacity,BackHandler,I18nManager,StyleSheet,Dimensions,Alert} from "react-native";
import {Container,Button,Icon,Right,Item,Input,Header,Left,Body,Title,Form} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
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


export default class Login4 extends Component {

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
        <ImageBackground style={styles.background_image} source={GlobalInclude.Image1}>

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

          {/* BEGIN TO SETUP PROFILE VIEW */}
          <View style={styles.logo_sec}>
            <Image source={GlobalInclude.Image6} style={styles.logo_style} />
          </View>
          {/* END TO SETUP PROFILE VIEW */}

          <Form style={styles.form}>
            {/* BEGIN TO MAKE EMAIL TEXT FIELD CONTAINER VIEW */}
            <Item rounded style={styles.input_style}>
              <Input
                placeholderTextColor="#ffffff"
                textAlign={I18nManager.isRTL ? "right" : "left"}
                placeholder="Enter Email"
                style={styles.input_main}
              />
            </Item>
            {/* END TO MAKE EMAIL TEXT FIELD CONTAINER VIEW */}

            {/* BEGIN TO MAKE PASSWORD TEXT FIELD CONTAINER VIEW */}
            <Item rounded style={[styles.input_style, { marginTop: 10 }]}>
              <Input
                placeholderTextColor="#ffffff"
                placeholder="Enter Password"
                secureTextEntry={true}
                textAlign={I18nManager.isRTL ? "right" : "left"}
                style={styles.input_main}
              />
            </Item>
            {/* END TO MAKE PASSWORD TEXT FIELD CONTAINER VIEW */}

            {/* BEGIN TO MAKE LOG IN BUTTON VIEW */}
            <TouchableOpacity info style={styles.sign_in_btn} onPress={() => alert("Log In button clicked.")}>
              <Text autoCapitalize="words" style={styles.buttonget_started}>
                Log In
              </Text>
            </TouchableOpacity>
            {/* END TO MAKE LOG IN BUTTON VIEW */}

            {/* BEGIN TO MAKE FORGOT PASSWORD VIEW */}
            <TouchableOpacity onPress={() => alert("Forgot Password button clicked.")}>
              <Text autoCapitalize="words" style={styles.button_get_text}>
                Forgot your password?
              </Text>
            </TouchableOpacity>
            {/* END TO MAKE FORGOT PASSWORD VIEW */}
          </Form>

          <View style={styles.bottom_view}>
            {/* BEGIN TO MAKE FACEBOOK BUTTON VIEW */}
            <TouchableOpacity style={styles.fb_button} onPress={() => alert("Facebook button clicked.")} >
              <View iconRight style={styles.fb_view}>
                <FontAwesome name="facebook" size={30} color="white" />
                <Text autoCapitalize="words" style={styles.fb_button_text}>
                  Log in with facebook
                </Text>
              </View>
            </TouchableOpacity>
            {/* END TO MAKE FACEBOOK BUTTON VIEW */}

            {/* BEGIN TO MAKE SIGNUP BUTTON VIEW */}
            <View style={styles.bottom_text}>
                <Text style={styles.bottom_text_01}>
                  Don't have an account?
                </Text>
                <TouchableOpacity onPress={() => alert("Sign Up button clicked.")}>
                  <Text style={styles.bottom_text_02}> Sign up</Text>
                </TouchableOpacity>
            </View>
            {/* END TO MAKE SIGNUP BUTTON VIEW */}
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
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
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
    width: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  body: {
    flex: 3,
    alignItems: "center",
    backgroundColor: "transparent"
  },
  logo_sec: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 0.3,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  logo_style: {
    alignSelf: "center",
    width: Dimensions.get('window').width * 0.25,
    height: Dimensions.get('window').width * 0.2
  },
  form: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.45,
    backgroundColor: "rgba(255,255,255,0)",
    borderColor: "transparent",
    justifyContent: "center",
    alignSelf: "center"
  },
  input_style: {
    borderColor: "transparent",
    justifyContent: "center",
    alignSelf: "center",
    width: Dimensions.get('window').width * 0.8
  },
  input_main: {
    fontFamily: font_type.FontLight,
    color: 'white',
    justifyContent: "center",
    alignSelf: "center",
    paddingTop: 12,
    paddingBottom: 10,
    paddingLeft: 20,
    borderRadius: 40,
    width: Dimensions.get('window').width * 0.8,
    backgroundColor: "rgba(255,255,255,0.4)"
  },
  sign_in_btn: {
    backgroundColor: "#ff6347",
    justifyContent: "center",
    alignSelf: "center",
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 40,
    width: Dimensions.get('window').width * 0.8,
    marginTop: 35
  },
  buttonget_started: {
    alignSelf: "center",
    justifyContent: "center",
    fontFamily: font_type.FontBold,
    color: 'white'
  },
  button_get_text: {
    alignSelf: "center",
    justifyContent: "center",
    fontFamily: font_type.FontBold,
    color: 'white',
    marginTop: 25
  },
  bottom_view: {
    marginTop: 30
  },
  fb_button: {
    backgroundColor: "#3b5998",
    height: Dimensions.get('window').height * 0.07,
    width: Dimensions.get('window').width * 0.8,
    borderRadius: 40,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  },
  fb_view: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center"
  },
  fb_button_text: {
    color: "#fff",
    fontSize: moderateScale(17),
    left: 10,
    fontFamily: font_type.FontLight,
    alignItems: "center",
    alignSelf: "center"
  },
  bottom_text: {
    width: "100%",
    height: 40,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    flexDirection: "row"
  },
  bottom_text_01: {
    fontSize: moderateScale(16),
    color: "#FFFFFF",
    fontFamily: font_type.FontLight
  },
  bottom_text_02: {
    fontSize: moderateScale(16),
    fontFamily: font_type.FontLight,
    color: "#969696"
  }
});
// END TO MAKE STYLE
