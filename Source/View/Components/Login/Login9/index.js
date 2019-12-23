import React, { PropTypes, Component } from "react";
import {Text,View,Image,TextInput,TouchableOpacity,ImageBackground,Platform,StatusBar,BackHandler,I18nManager,StyleSheet,Dimensions,Alert} from "react-native";
import {Container,Button,Icon,Right,Item,Input,Header,Left,Body,Title,Form,Label} from "native-base";
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

export default class Login9 extends Component {

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
        <ImageBackground source={GlobalInclude.Image1} style={styles.background_image}>

          {/* BEGIN TO SETUP HEADER VIEW */}
          <Header style={styles.header}>

            {/* BEGIN TO SETUP HEADER LEFT VIEW */}
            <Left style={styles.left}>
              <TouchableOpacity style={styles.back_arrow} onPress={() => this.props.navigation.goBack()}>
                <FontAwesome
                  name={I18nManager.isRTL ? "angle-right" : "angle-left"}
                  size={30}
                  color="#fff"
                />
              </TouchableOpacity>
            </Left>
            {/* END TO SETUP HEADER LEFT VIEW */}

            {/* BEGIN TO SETUP HEADER BODY VIEW */}
            <Body style={styles.body}>
              <Text style={styles.text_title} />
            </Body>
            {/* END TO SETUP HEADER BODY VIEW */}

            {/* BEGIN TO SETUP HEADER RIGHT VIEW */}
            <Right style={styles.right} />
            {/* END TO SETUP HEADER RIGHT VIEW */}
        </Header>
        {/* END TO SETUP HEADER VIEW */}

          {/* BEGIN TO SETUP LOGO VIEW */}
          <View style={styles.main_logo_sec}>
            <Image source={GlobalInclude.Image5} style={styles.main_logo} />
          </View>
          {/* END TO SETUP LOGO VIEW */}

          <View style={styles.input_field_sec}>
            <Form style={styles.form_style}>
              {/* BEGIN TO MAKE EMAIL TEXT FIELD CONTAINER VIEW */}
              <Item floatingLabel textAlign={I18nManager.isRTL ? "right" : "left"} style={styles.email_text} >
                <Label textAlign={I18nManager.isRTL ? "right" : "left"} style={{ color: "red", right: 0 }}>
                  Enter Email
                </Label>
                <Input
                  keyboardType="email-address"
                  textAlign={I18nManager.isRTL ? "right" : "left"}
                  style={styles.input_text}
                />
              </Item>
              {/* END TO MAKE EMAIL TEXT FIELD CONTAINER VIEW */}

              {/* BEGIN TO MAKE PASSWORD TEXT FIELD CONTAINER VIEW */}
              <Item floatingLabel style={styles.password_text}>
                <Label textAlign={I18nManager.isRTL ? "right" : "left"} style={{ fontFamily: font_type.FontLight, paddingTop: 1 }}>
                  Enter Password
                </Label>
                <Input
                  secureTextEntry={true}
                  textAlign={I18nManager.isRTL ? "right" : "left"}
                  style={styles.input_text}
                />
              </Item>
              {/* END TO MAKE PASSWORD TEXT FIELD CONTAINER VIEW */}

              {/* BEGIN TO MAKE LOG IN BUTTON VIEW */}
              <TouchableOpacity style={styles.touchable_opacity_style} onPress={() => alert("Log In button clicked.")} >
                <Text style={styles.touchable_opacity_text}>Log In</Text>
              </TouchableOpacity>
              {/* END TO MAKE LOG IN BUTTON VIEW */}
            </Form>
          </View>

          {/* BEGIN TO MAKE SIGNUP BUTTON VIEW */}
          <View style={styles.view03}>
            <View style={styles.bottom_text}>
              <Text style={styles.bottom_text_01}>
                Don't have an account?
              </Text>
              <TouchableOpacity
                style={styles.sign_up_txt_bg}
                onPress={() => alert("Sign Up button clicked.")}
              >
                <Text style={styles.bottom_text_02}> Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* END TO MAKE SIGNUP BUTTON VIEW */}

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
    backgroundColor: "white",
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
    fontSize: moderateScale(16),
    marginTop: 5,
    alignSelf: "center",
    fontFamily: font_type.FontBold
  },
  right: {
    flex: 0.5
  },
  main_logo_sec: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.25,
    justifyContent: "center",
    alignItems: "center"
  },
  main_logo: {
    width: Dimensions.get('window').width * 0.25,
    height: Dimensions.get('window').width * 0.2
  },
  input_field_sec: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.35
  },
  form_style: {
    paddingTop: moderateScale(10),
    width: Dimensions.get('window').width * 0.84,
    alignSelf: "center",
    backgroundColor: 'white'
  },
  email_text: {
    paddingBottom: 10,
    marginRight: 20
  },
  input_text: {
    width: Dimensions.get('window').width,
    height: 40,
    color: "#6f6f6f"
  },
  password_text: {
    alignItems: "center",
    paddingBottom: 10,
    marginRight: 20
  },
  touchable_opacity_style: {
    backgroundColor: "#ff6347",
    alignItems: "center",
    height: Dimensions.get('window').width * 0.15,
    width: Dimensions.get('window').width * 0.84,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40
  },
  touchable_opacity_text: {
    fontSize: moderateScale(16),
    color: 'white',
    alignItems: "baseline"
  },
  view03: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.1,
    marginBottom: 10,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },

  bottom_text: {
    width: Dimensions.get('window').width,
    height: 40,
    alignItems: "center",
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "center"
  },

  bottom_text_01: {
    fontSize: moderateScale(14),
    color: 'white',
    fontFamily: font_type.FontLight,
    textAlign: "center"
  },

  bottom_text_02: {
    fontSize: moderateScale(14),
    fontFamily: font_type.FontLight,
    color: "#ffb46c",
    textAlign: "center"
  },

  sign_up_txt_bg: {
    marginTop: (Dimensions.get('window').width * 0.01),
    paddingLeft: Dimensions.get('window').width * 0.01
  }
});
// END TO MAKE STYLE
