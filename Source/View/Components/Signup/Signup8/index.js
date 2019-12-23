import React, { Component } from "react";
import {View,Image,StatusBar,Platform,ImageBackground,TouchableHighlight,TouchableOpacity,BackHandler,I18nManager,Dimensions,StyleSheet,Alert} from "react-native";
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

export default class Signup8 extends Component {

  render() {
    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW



    return (
      <ImageBackground source={GlobalInclude.Image1} style={styles.main_bg}>
        <Container style={{ backgroundColor: "transparent" }}>

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

          {/* BEGIN TO SETUP CONNECT TEXT VIEW */}
          <View style={styles.slide_sec}>
            <Text style={styles.header_text}>
              Connect with us and see our awesome UI Kit
            </Text>
            <Text style={styles.desc_text}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod
            </Text>
          </View>
          {/* END TO SETUP CONNECT TEXT VIEW */}

          <View style={styles.btn_sec}>
            {/* BEGIN TO SETUP FACEBOOK BUTTON VIEW */}
            <View iconRight style={styles.button_login}>
              <FontAwesome name="facebook-f" size={27} color="white" />
              <TouchableOpacity onPress={() => alert("Sign In with Facebook button clicked.")}>
                <Text autoCapitalize="words" style={styles.button_text}>
                   Sign in with facebook
                </Text>
              </TouchableOpacity>
            </View>
            {/* END TO SETUP FACEBOOK BUTTON VIEW */}

            {/* BEGIN TO SETUP TWITTER BUTTON VIEW */}
            <View iconRight style={styles.button_login}>
              <FontAwesome name="twitter" size={27} color="white" />
              <TouchableOpacity onPress={() => alert("Sign In with Twitter button clicked.")}>
                <Text autoCapitalize="words" style={styles.button_text}>
                   Sign in with twitter
                </Text>
              </TouchableOpacity>
            </View>
            {/* END TO SETUP TWITTER BUTTON VIEW */}
          </View>

          {/* BEGIN TO SETUP LOGIN BUTTON VIEW */}
          <View style={styles.view_3}>
            <TouchableOpacity onPress={() => alert("Sign In button clicked.")}>
              <Text autoCapitalize="words" style={styles.bottom_text}>
                Already have an account? Sign In
              </Text>
            </TouchableOpacity>
          </View>
          {/* END TO SETUP LOGIN BUTTON VIEW */}

        </Container>
      </ImageBackground>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  main_bg:{
  	height:Dimensions.get('window').height,
  	width:Dimensions.get('window').width
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
  	backgroundColor: 'transparent',
  },
  back_arrow: {
  	width: 30,
  	alignItems: 'center',
  },
  body: {
  	flex: 3,
  	alignItems: 'center',
  	backgroundColor: 'transparent'
  },
  right: {
  	flex: 0.5
  },
  slide_sec:{
  		height: (Dimensions.get('window').height*0.40),
  		backgroundColor:'transparent',
  		marginTop: (Dimensions.get('window').height*0.15),
  },
  btn_sec:{
  		height: (Dimensions.get('window').height*0.21),
  		backgroundColor:'transparent'

  },
  header_text: {
  	fontFamily:  font_type.FontBold,
  	backgroundColor:'transparent',
  	textAlign:'center',
  	alignSelf:'center',
  	fontSize:28,
  	width :Dimensions.get('window').width * .90,
  	color:'white',
  },
  desc_text: {
  	fontFamily:  font_type.FontLight,
  	backgroundColor:'transparent',
  	textAlign:'center',
  	alignSelf:'center',
  	fontSize:16,
  	width :Dimensions.get('window').width * 0.80,
  	color:'white',
  	marginTop:20
  },
  button_login:{
       backgroundColor:'transparent',
       alignSelf:'center',
       borderRadius:40,
       width: Dimensions.get('window').width *0.80,
  		 borderWidth: 1,
  		 height: (Dimensions.get('window').height*0.07),
  		 flexDirection: 'row',
  		 borderColor: 'white',
  		 alignItems: 'center',
  		 justifyContent: 'center',
  		 marginTop: 20,
   },
   button_text:{
   	color: "#fff",
   	fontSize: 17,
  	paddingLeft: 10,
   	fontFamily:  font_type.FontLight,
   	alignItems: 'center',
   	alignSelf: 'center',
   },
   view_3: {
   	width:Dimensions.get('window').width,
   	height:Dimensions.get('window').height*0.15,
   	justifyContent:'center',
   	backgroundColor:'transparent'
   },
   bottom_text: {
   	alignSelf:'center',
   	fontFamily:  font_type.FontLight,
   	color:'white',
   	fontSize:15,
   }
});
// END TO MAKE STYLE
