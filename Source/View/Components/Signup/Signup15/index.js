import React, { Component } from "react";
import {Text,View,Image,StatusBar,Platform,ImageBackground,Dimensions,TouchableHighlight,TouchableOpacity,BackHandler,I18nManager,StyleSheet,Alert} from "react-native";
import {Container,Button,Icon,Right,Item,Input,Header,Footer,Left,Body,Title,Content,Form,Label} from "native-base";
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

export default class Signup15 extends Component {

  // BEGIN TO SETUP SOCIAL BUTTON CLICK METHOD
  SignUp = () => {
    alert("Sign Up button clicked.");
  };

  login = () => {
    alert("Login button clicked.");
  };
  // END TO SETUP SOCIAL BUTTON CLICK METHOD

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
        <View style={styles.main}>
          <View style={styles.logo_sec}>
            {/* BEGIN TO SETUP IMAGE AS A BACKGROUND */}
            <ImageBackground source={GlobalInclude.Image2} style={styles.logo_view}>

              {/* BEGIN TO SETUP BACK BUTTON */}
              <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.back} >
                <FontAwesome
                  name={I18nManager.isRTL ? "angle-right" : "angle-left"}
                  size={31}
                  color="white"
                />
              </TouchableOpacity>
              {/* END TO SETUP BACK BUTTON */}


              <View style={styles.btns}>
                {/* BEGIN TO SETUP SIGNUP BUTTON */}
                <TouchableOpacity style={styles.btn_back} onPress={() => alert("Sign Up button clicked.")} >
                  <Text autoCapitalize="words" style={styles.login_button}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
                {/* END TO SETUP SIGNUP BUTTON */}

                {/* BEGIN TO SETUP LOGIN BUTTON */}
                <TouchableOpacity style={styles.btn_back} onPress={() => alert("Login button clicked.")} >
                  <Text autoCapitalize="words" style={styles.signup_button}>
                    Login
                  </Text>
                </TouchableOpacity>
                {/* END TO SETUP LOGIN BUTTON */}
              </View>
            </ImageBackground>
            {/* END TO SETUP IMAGE AS A BACKGROUND */}
          </View>

          <View style={styles.slide_main}>
            <Form style={styles.input_label}>
              {/* BEGIN TO SETUP FULL NAME TEXTFIELD VIEW */}
              <Item style={styles.item_email}>
                <Input
                  placeholderTextColor="#b7b7b7"
                  textAlign={I18nManager.isRTL ? "right" : "left"}
                  placeholder="Full Name"
                  style={styles.input_email}
                />
              </Item>
              {/* END TO SETUP FULL NAME TEXTFIELD VIEW */}

              {/* BEGIN TO SETUP EMAIL TEXTFIELD VIEW */}
              <Item style={styles.item_email}>
                <Input
                  placeholderTextColor="#b7b7b7"
                  textAlign={I18nManager.isRTL ? "right" : "left"}
                  placeholder="Email"
                  style={styles.input_email}
                />
              </Item>
              {/* END TO SETUP EMAIL TEXTFIELD VIEW */}

              {/* BEGIN TO SETUP PASSWORD TEXTFIELD VIEW */}
              <Item style={styles.item_email}>
                <Input
                  placeholderTextColor="#b7b7b7"
                  textAlign={I18nManager.isRTL ? "right" : "left"}
                  secureTextEntry={true}
                  placeholder="Password"
                  style={styles.input_email}
                />
              </Item>
              {/* END TO SETUP PASSWORD TEXTFIELD VIEW */}

              {/* BEGIN TO SETUP RE-PASSWORD TEXTFIELD VIEW */}
              <Item style={styles.item_email}>
                <Input
                  placeholderTextColor="#b7b7b7"
                  textAlign={I18nManager.isRTL ? "right" : "left"}
                  secureTextEntry={true}
                  placeholder="Confirm Password"
                  style={styles.input_email}
                />
              </Item>
              {/* END TO SETUP RE-PASSWORD TEXTFIELD VIEW */}

              {/* BEGIN TO SETUP GENDER TEXTFIELD VIEW */}
              <Item style={styles.item_email}>
                <Input
                  placeholderTextColor="#b7b7b7"
                  textAlign={I18nManager.isRTL ? "right" : "left"}
                  placeholder="Gender"
                  style={styles.input_email}
                />
              </Item>
              {/* END TO SETUP GENDER TEXTFIELD VIEW */}
            </Form>
          </View>

          <View style={styles.btn_sec}>
            {/* BEGIN TO SETUP SIGNUP BUTTON VIEW */}
            <TouchableHighlight info style={styles.button_signup} onPress={() => this.SignUp()} >
              <Text autoCapitalize="words" style={styles.login_button}>
                SIGN UP
              </Text>
            </TouchableHighlight>
            {/* END TO SETUP SIGNUP BUTTON VIEW */}
          </View>
        </View>
      </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  main:{
		width : Dimensions.get('window').width,
		height : Dimensions.get('window').height
	},
	logo_sec:{
		height: (Dimensions.get('window').height*0.40),
		backgroundColor:'transparent',
		position: 'relative'
	},
	slide_main:{
		height: (Dimensions.get('window').height*0.51),
		backgroundColor:'#ffffff',
		justifyContent: 'center'
	},
	btn_sec:{
		height: (Dimensions.get('window').height*0.09),
		width :Dimensions.get('window').width,
		backgroundColor:'#ff6347',
		justifyContent: 'center'
	},
	logo_view: {
		height: (Dimensions.get('window').height*0.40),
		width :Dimensions.get('window').width,
		alignSelf:'center',
		position: 'relative'
	},
	back:{
		marginTop: 45,
		marginLeft: 15
	},
	btns:{
		marginTop:Dimensions.get('window').height*0.2 ,
		width: Dimensions.get('window').width,
		height: (Dimensions.get('window').height*0.08),
		backgroundColor: 'rgba(0,0,0,0.5)',
		alignSelf: 'flex-end',
		flexDirection: 'row'
	},
	btn_back:{
		width: Dimensions.get('window').width*0.5,
		height: (Dimensions.get('window').height*0.08),
		alignSelf: 'center',
		justifyContent: 'center'
	},
	input_label: {
		justifyContent: 'center',
		alignSelf:'center',
		backgroundColor: 'transparent'
	},
	item_email: {
		alignSelf:'center',
		height:50,
		marginRight: 20,
   },
	input_email: {
		fontFamily:font_type.FontLight,
		color:'#ebebeb',
	 },
  button_signup:{
  	backgroundColor:'transparent',
  	alignSelf:'center',
		width :Dimensions.get('window').width,
		justifyContent: 'center'
  },
  login_button: {
		fontSize: 18,
		fontFamily:font_type.FontBold,
		color:'white',
		alignContent: 'center',
		alignSelf: 'center'
	},
  signup_button: {
		fontSize: 18,
		fontFamily: font_type.FontBold,
		alignContent: 'center',
		color:'white',
		alignSelf: 'center'
	}
});
// END TO MAKE STYLE
