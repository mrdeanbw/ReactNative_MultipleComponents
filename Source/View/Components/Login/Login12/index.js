import React, { Component } from "react";
import {Dimensions,StyleSheet,ImageBackground,Image,View,StatusBar,Platform,TouchableOpacity,BackHandler,I18nManager,Alert} from "react-native";
import {Container,Text,Content,Form,Item,Button,Input,CheckBox,Body,Header,Left,Right,Title,Footer} from "native-base";
import Swiper from "react-native-swiper";
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

export default class Login12 extends Component {

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
        <ImageBackground source={GlobalInclude.Image1} style={{ height: Dimensions.get('window').height }}>

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
              <Body style={styles.body}>
                <Text/>
              </Body>
  						{/* END TO SETUP HEADER BODY VIEW */}

  						{/* BEGIN TO SETUP HEADER RIGHT VIEW */}
              <Right style={styles.right} />
  						{/* END TO SETUP HEADER RIGHT VIEW */}
  				</Header>
  				{/* END TO SETUP HEADER VIEW */}

          {/* BEGIN TO SETUP LOGO VIEW */}
          <View style={styles.logo_view}>
            <Image source={GlobalInclude.Image6} style={styles.logo_style} />
          </View>
          {/* END TO SETUP LOGO VIEW */}

          {/* BEGIN TO SETUP SWIPER VIEW */}
          <Swiper
            showsButtons={false}
            autoplay={true}
            autoplayTimeout={3}
            activeDot={<View style={styles.active_dots} />}
            dot={<View style={styles.dots} />}
          >
            {/* BEGIN TO SETUP FIRST SWIPER VIEW */}
            <View style={styles.slide_style}>
                  <Text style={styles.header_text}>
                    Connect with us and see our awesome UI Kit
                  </Text>
                  <Text style={styles.desc_text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod
                  </Text>
            </View>
            {/* END TO SETUP FIRST SWIPER VIEW */}

            {/* BEGIN TO SETUP SECOND SWIPER VIEW */}
            <View style={styles.slide_style}>
                  <Text style={styles.header_text}>
                    Connect with us and see our awesome UI Kit
                  </Text>
                  <Text style={styles.desc_text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod
                  </Text>
            </View>
            {/* END TO SETUP SECOND SWIPER VIEW */}

            {/* BEGIN TO SETUP THIRD SWIPER VIEW */}
            <View style={styles.slide_style}>
                  <Text style={styles.header_text}>
                    Connect with us and see our awesome UI Kit
                  </Text>
                  <Text style={styles.desc_text}>
                    Lorem qsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod
                  </Text>
            </View>
            {/* END TO SETUP THIRD SWIPER VIEW */}

          </Swiper>
          {/* END TO SETUP SWIPER VIEW */}

          {/* BEGIN TO SETUP FOOTER VIEW */}
          <Footer >
                {/* BEGIN TO SETUP LOGIN VIEW */}
                <TouchableOpacity style={styles.footer_login} onPress={() => alert("Login button clicked.")} >
                  <Text autoCapitalize="words" style={styles.footer_text}>
                    Login
                  </Text>
                </TouchableOpacity>
                {/* END TO SETUP LOGIN VIEW */}

                {/* BEGIN TO SETUP SIGNUP VIEW */}
                <TouchableOpacity style={styles.footer_signup} onPress={() => alert("Sign Up button clicked.")} >
                  <Text autoCapitalize="words" style={styles.footer_text}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
                {/* END TO SETUP SIGNUP VIEW */}
          </Footer>
          {/* END TO SETUP FOOTER VIEW */}

        </ImageBackground>
        {/* END TO SETUP IMAGE AS A BACKGROUND */}
      </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(0,0,0,0)',
    height: Dimensions.get('window').width * 0.22,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
      }
    }),
    elevation: 0
  },
  left: {
    flex: 0.5,
    backgroundColor: 'transparent',
  },
  body: {
    flex: 3,
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
	back_arrow: {
		justifyContent: 'center',
		alignItems: 'center',
    width: 30,
		marginTop: 20
  },
	active_dots:{
		backgroundColor: '#ffffff',
		width: 10,
		height: 10,
		borderRadius: 4,
		marginLeft: 3,
		marginRight: 3,
		marginTop: 3,
		marginBottom: 3,
	},
	dots:{
		backgroundColor:'#8796a6',
		width:  10,
		height: 10,
		borderRadius: 5,
		marginLeft: 3,
		marginRight: 3,
		marginTop: 3,
		marginBottom: 3,
	},
	logo_view: {
      height: Dimensions.get('window').height*0.1
  },
	logo_style: {
		alignSelf:'center',
		marginTop:Dimensions.get('window').height*0.1,
		width:Dimensions.get('window').width*0.3,
		height:Dimensions.get('window').height*0.13
	},
  slide_style: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
		marginTop: Dimensions.get('window').height*0.25,
  },
	header_text: {
		fontFamily: font_type.FontBold,
		backgroundColor:'transparent',
		textAlign:'center',
		alignSelf:'center',
		fontSize:28,
		width :Dimensions.get('window').width*0.90,
		color:'white',
	},
	desc_text: {
		fontFamily: font_type.FontBold,
		backgroundColor:'transparent',
		textAlign:'center',
		alignSelf:'center',
		fontSize:16,
		width :Dimensions.get('window').width* .90,
		color:'white',
		marginTop:Dimensions.get('window').width* .07,
	},
	footer_text: {
		alignSelf:'center',
		color:'white',
		fontFamily: font_type.FontBold,
		fontSize:16,
	},
	footer_login:{
		width:Dimensions.get('window').width* .5,
		backgroundColor:'#0691ce',
		justifyContent:'center',
	},
	footer_signup:{
		width:Dimensions.get('window').width* .5,
		backgroundColor:'#4cd964',
		justifyContent:'center',
	}
});
// END TO MAKE STYLE
