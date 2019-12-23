import React, { Component } from "react";
import {Text,View,Image,StatusBar,Platform,ImageBackground,Dimensions,TouchableHighlight,BackHandler,TouchableOpacity,I18nManager,StyleSheet,Alert} from "react-native";
import {Container,Button,Icon,Right,Item,Input,Header,Footer,Left,Body,Title,Content,Form,Label} from "native-base";
import Swiper from "react-native-swiper";
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

export default class Signup14 extends Component {

  // BEGIN TO SETUP SOCIAL BUTTON CLICK METHOD
  facebook = () => {
    alert("Facebook button clicked.");
  };

  signup = () => {
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
      <ImageBackground source={GlobalInclude.Image3} style={styles.main_bg}>
        <View>

          {/* BEGIN TO SETUP BACK BUTTON WITH PROFILE VIEW */}
          <View style={styles.logo_sec}>
            <TouchableOpacity style={styles.back_arrow} onPress={() => this.props.navigation.goBack()} >
              <FontAwesome
                name={I18nManager.isRTL ? "angle-right" : "angle-left"}
                size={30}
                color="black"
              />
            </TouchableOpacity>
            <Image source={GlobalInclude.Image8} style={styles.logo_view} />
          </View>
          {/* END TO SETUP BACK BUTTON WITH PROFILE VIEW */}

          <View style={styles.slide_main}>
            <View style={styles.slider_sec}>
              {/* BEGIN TO SETUP SWIPER VIEW */}
              <Swiper
                showsButtons={false}
                autoplay={true}
                autoplayTimeout={2.5}
                active_dot={<View style={styles.active_dot} />}
                dot={<View style={styles.dot} />}
              >
                {/* BEGIN TO SETUP FIRST SWIPER VIEW */}
                <View style={styles.slide1}>
                  <Text style={styles.header_text}>
                    Connect with us and see our awesome UI Kit
                  </Text>
                  <Text style={styles.desc_text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod
                  </Text>
                </View>
                {/* END TO SETUP FIRST SWIPER VIEW */}

                {/* BEGIN TO SETUP SECOND SWIPER VIEW */}
                <View style={styles.slide2}>
                  <Text style={styles.header_text}>
                    Connect with us and see our awesome UI Kit
                  </Text>
                  <Text style={styles.desc_text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod
                  </Text>
                </View>
                {/* END TO SETUP SECOND SWIPER VIEW */}

                {/* BEGIN TO SETUP THIRD SWIPER VIEW */}
                <View style={styles.slide3}>
                  <Text style={styles.header_text}>
                    Connect with us and see our awesome UI Kit
                  </Text>
                  <Text style={styles.desc_text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod
                  </Text>
                </View>
                {/* END TO SETUP THIRD SWIPER VIEW */}

              </Swiper>
              {/* END TO SETUP SWIPER VIEW */}
            </View>
          </View>

          <View style={styles.btn_sec}>
            {/* BEGIN TO SETUP FACEBOOK BUTTON VIEW */}
            <TouchableHighlight info style={styles.button_login} onPress={() => this.facebook()} >
              <Text autoCapitalize="words" style={styles.login_button}>
                Connect with Facebook
              </Text>
            </TouchableHighlight>
            {/* END TO SETUP FACEBOOK BUTTON VIEW */}

            <View style={styles.bottom_sec}>
              {/* BEGIN TO SETUP SIGNUP BUTTON VIEW */}
              <TouchableHighlight info style={styles.button_signup_01} onPress={() => this.signup()} >
                <Text autoCapitalize="words" style={styles.signup_button}>
                  Sign Up
                </Text>
              </TouchableHighlight>
              {/* END TO SETUP SIGNUP BUTTON VIEW */}

              {/* BEGIN TO SETUP LOGIN BUTTON VIEW */}
              <TouchableHighlight info style={styles.button_signup_01} onPress={() => this.login()} >
                <Text autoCapitalize="words" style={styles.signup_button}>
                  Login
                </Text>
              </TouchableHighlight>
              {/* END TO SETUP LOGIN BUTTON VIEW */}
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  logo_sec:{
  		height: (Dimensions.get('window').height*0.30),
  		backgroundColor:'transparent',
  		justifyContent: 'center',
  		alignItems: 'center'
  },
  slider_sec:{
  		height: (Dimensions.get('window').height*0.35),
  		backgroundColor:'transparent'
  },
  slide_main:{
  		height: (Dimensions.get('window').height*0.40),
  		backgroundColor:'transparent',
  		justifyContent: 'center'
  },
  btn_sec:{
  		height: (Dimensions.get('window').height*0.30),
  		backgroundColor:'transparent'
  },
  logo_view:{
  			height: (Dimensions.get('window').height*0.15),
  			width:  (Dimensions.get('window').width*0.35),
  			marginTop: (Dimensions.get('window').height*0.1),
  },
  main_bg:{
  	height :Dimensions.get('window').height,
  	width :Dimensions.get('window').width,
  },
  back_arrow:{
  	left:0,
  	top:0,
  	width: 30,
  	position: 'absolute',
  	marginTop: 40,
  	marginLeft: 20
  },
  active_dot:{
  	backgroundColor: 'white',
  	width: 10,
  	height: 10,
  	borderRadius: 5,
  	marginLeft: 3,
  	marginRight: 3,
  	marginTop: 3,
  	marginBottom: 3,
  },
  dot:{
  	backgroundColor:'#8796a6',
  	width:  10,
  	height: 10,
  	borderRadius: 5,
  	marginLeft: 3,
  	marginRight: 3,
  	marginTop: 3,
  	marginBottom: 3,
  },
  bottom_sec:{
  	width: Dimensions.get('window').width * 0.80,
  	alignSelf: 'center',
  	flexDirection: 'row',
  	justifyContent: 'space-between'
  },
  header_text: {
  	fontFamily:font_type.FontBold,
  	backgroundColor:'transparent',
  	textAlign:'center',
  	alignSelf:'center',
  	fontSize:28,
  	width :Dimensions.get('window').width * .90,
  	color:'white',
  },
  desc_text: {
  	fontFamily: font_type.FontLight,
  	backgroundColor:'transparent',
  	textAlign:'center',
  	alignSelf:'center',
  	fontSize:16,
  	width :Dimensions.get('window').width * .70,
  	color:'white',
  	marginTop:20
  },
  button_login:{
  	backgroundColor:'#3b5998',
  	alignSelf:'center',
  	borderRadius:40,
  	width: Dimensions.get('window').width *0.80,
  	height: Dimensions.get('window').height * 0.09,
  	justifyContent: 'center',
  	alignItems: 'center',
  	marginTop:  Dimensions.get('window').height * 0.05
  },
  button_signup_01:{
  	borderWidth: 1,
  	borderColor: 'white',
  	backgroundColor:'transparent',
  	alignSelf:'center',
  	marginTop:Dimensions.get('window').height * 0.03,
  	borderRadius:40,
   	width: Dimensions.get('window').width *0.35,
  	height: Dimensions.get('window').height * 0.09,
  	justifyContent: 'center'
  },
  login_button: {
  	fontFamily: font_type.FontBold,
  	color:'white',
  	alignContent: 'center',
  	alignSelf: 'center',
  	fontSize: 20
  },
  signup_button: {
  	fontFamily: font_type.FontBold,
  	alignContent: 'center',
  	color:'white',
  	alignSelf: 'center',
  	fontSize: 20
  },
  container:{
  	 width:Dimensions.get('window').width,
  	 flexDirection:'row',
  	 alignItems:'flex-start',
  	 justifyContent:'flex-start'
   }
});
// END TO MAKE STYLE
