import React, { Component } from "react";
import {TouchableHighlight,Dimensions,ImageBackground,Image,View,StatusBar,Platform,BackHandler,I18nManager,TouchableWithoutFeedback,Keyboard,TouchableOpacity,StyleSheet,Alert} from "react-native";
import {Container,Text,Content,Button,Input,Body,Header,Left,Right,Title,Item,Label} from "native-base";
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

export default class Signup7 extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
      emailId: "lorem_ipsum@gmail.com",
      txtPassword: ""
    };
  }

  _resendAction = () => {
    alert("Resend button clicked.");
  };

  _onPressSignUp = () => {
    alert("Sign Up button clicked.");
  };

  _onPressSignIn = () => {
    alert("Sign In button clicked.");
  };

  render() {
    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW

    return (
      <ImageBackground source={GlobalInclude.Image3} style={styles.screen_bg}>

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

        <Content bounces={false}>
          <View style={styles.page_content}>
            {/* BEGIN TO SETUP PROFILE VIEW */}
            <Image source={GlobalInclude.Image1} style={styles.profile_style} />
            {/* END TO SETUP PROFILE VIEW */}

            {/* BEGIN TO SETUP CODE VIEW */}
            <Text style={styles.text_email_style}>{this.state.emailId}</Text>
            <Item floatingLabel style={styles.border_width}>
              <Label style={styles.lbl}>Enter Code</Label>
              <Input
                style={styles.text_input_style}
                value={this.state.txtPassword}
                editable={true}
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                placeholderTextColor="rgba(255,255,255,0.5)"
                onChangeText={txtPassword => this.setState({ txtPassword })}
              />
            </Item>
            <Text style={styles.light_text_style}>
              We’ve sent the confirmation code to your email. Please check your
              inbox
            </Text>
            <Text style={styles.text_button_style} onPress={this._resendAction}>
              {" "}
              Resend{" "}
            </Text>
            {/* END TO SETUP CODE VIEW */}

            {/* BEGIN TO SETUP SIGNUP BUTTON VIEW */}
            <TouchableHighlight info>
              <Button style={styles.button_style} onPress={this._onPressSignUp}>
                <Text autoCapitalize="words" style={styles.button_text}>
                  Sign Up
                </Text>
              </Button>
            </TouchableHighlight>
            {/* END TO SETUP SIGNUP BUTTON VIEW */}
          </View>

          {/* BEGIN TO SETUP LOGIN BUTTON VIEW */}
          <View style={styles.footer_sec}>
            <Text style={styles.text_input_style}>Already have an account? </Text>
            <TouchableHighlight info>
              <Text style={styles.text_input_style} onPress={this._onPressSignIn}>
                Log In
              </Text>
            </TouchableHighlight>
          </View>
          {/* END TO SETUP LOGIN BUTTON VIEW */}

        </Content>
      </ImageBackground>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  screen_bg: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: "black"
  },
  back_arrow: {
    marginTop: 10,
    width: 30,
    alignItems: "center"
  },
  container: {
    alignItems: "center"
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
  body: {
    flex: 2,
    alignItems: "center",
    backgroundColor: "transparent"
  },
  right: {
    flex: 0.5
  },
  profile_style: {
    width: Dimensions.get('window').height * 0.16,
    height: Dimensions.get('window').height * 0.16,
    borderRadius: Dimensions.get('window').height * 0.08,
    alignSelf: "center",
    borderWidth: 3.5,
    borderColor: "white",
    resizeMode: "cover",
    marginTop: Dimensions.get('window').height * 0.05
  },
  text_email_style: {
    fontFamily: font_type.FontLight,
    color: "#fff",
    textAlign: "center",
    marginTop: Dimensions.get('window').height * 0.02
  },
  border_width: {
    borderBottomWidth: 0.5,
    borderColor: "rgba(255,255,255,0.5)",
    marginTop: Dimensions.get('window').height * 0.08,
    width: Dimensions.get('window').width * 0.85
  },
  lbl: {
    color: "#fff",
    fontSize: 14,
    fontFamily: font_type.FontLight,
    textAlign: "center"
  },
  light_text_style: {
    fontFamily: font_type.FontLight,
    textAlign: "center",
    color: "rgba(255,255,255,0.5)",
    fontSize: 14,
    marginTop: Dimensions.get('window').height * 0.065,
    width: Dimensions.get('window').width * 0.85
  },
  text_button_style: {
    fontFamily: font_type.FontLight,
    color: "#fff",
    textAlign: "center",
    marginTop: Dimensions.get('window').height * 0.03
  },
  button_style: {
    marginTop: Dimensions.get('window').height * 0.06,
    height: Dimensions.get('window').height * 0.07,
    width: Dimensions.get('window').width * 0.88,
    borderRadius: 40,
    backgroundColor: "#ff6347",
    elevation: 5, // android shadow
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: {
      height: 0,
      width: 0
    },
    justifyContent: "center"
  },
  button_text: {
    textAlign: "center",
    fontFamily: font_type.FontBold,
    color: "white",
    fontSize: 14
  },
  footer_sec: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: Dimensions.get('window').height * 0.07,
    marginTop: Dimensions.get('window').height * 0.07
  },
  page_content: {
    justifyContent: "center",
    alignItems: "center"
  },
  text_input_style: {
    fontFamily: font_type.FontLight,
    color: "white",
    textAlign: "center",
    fontSize: 14
  }
});
// END TO MAKE STYLE
