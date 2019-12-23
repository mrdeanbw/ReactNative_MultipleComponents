
import React, { PropTypes, Component } from 'react';
import {Text,View,Platform,Dimensions,Image,TextInput,TouchableOpacity,ImageBackground,BackHandler,I18nManager,StyleSheet,Alert} from 'react-native';
import { Container, Content, Button, Icon, Right, Item, Input, Header, Left, Body, Title} from 'native-base';
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

export default class Login5 extends Component {

	render() {

    return (
			<Container>
        {/* BEGIN TO SETUP IMAGE AS A BACKGROUND */}
				<ImageBackground style={styles.img_container} source={GlobalInclude.Image3}>

          {/* BEGIN TO SETUP HEADER VIEW */}
          <Header style={styles.header}>

              {/* BEGIN TO SETUP HEADER LEFT VIEW */}
  						<Left style={styles.left}>
  							<TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
  						 		<FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="#fff"/>
  							</TouchableOpacity>
  						</Left>
              {/* END TO SETUP HEADER LEFT VIEW */}

              {/* BEGIN TO SETUP HEADER BODY VIEW */}
  						<Body style={styles.body}>
  							<Text style={styles.text_title}>Sign In</Text>
  						</Body>
  						{/* END TO SETUP HEADER BODY VIEW */}

  						{/* BEGIN TO SETUP HEADER RIGHT VIEW */}
  						<Right style={styles.right}/>
  						{/* END TO SETUP HEADER RIGHT VIEW */}
  				</Header>
  				{/* END TO SETUP HEADER VIEW */}

					<Content>
              {/* BEGIN TO SETUP LOGO VIEW */}
							<View style={styles.logo_sec}>
								<Image style={styles.image_logo_mountify} source={{uri:"https://www.gstatic.com/webp/gallery/4.png"}}/>
							</View>
              {/* END TO SETUP LOGO VIEW */}

              {/* BEGIN TO MAKE EMAIL TEXT FIELD CONTAINER VIEW */}
							<TextInput style={styles.text_input}
								placeholder = "Enter Email"
								placeholderTextColor = "#b7b7b7"
								underlineColorAndroid = "transparent"
								autoCapitalize = "none"
								textAlign={I18nManager.isRTL ? 'right' : 'left'}
								keyboardType = "email-address"/>
              {/* END TO MAKE EMAIL TEXT FIELD CONTAINER VIEW */}

              {/* BEGIN TO MAKE PASSWORD TEXT FIELD CONTAINER VIEW */}
							<TextInput style={styles.text_input}
								secureTextEntry = {true}
								placeholder = "Enter Password"
								placeholderTextColor = "#b7b7b7"
								underlineColorAndroid = "transparent"
								autoCapitalize = "none"
								textAlign={I18nManager.isRTL ? 'right' : 'left'}
								keyboardType = "default"/>
              {/* END TO MAKE PASSWORD TEXT FIELD CONTAINER VIEW */}

              {/* BEGIN TO MAKE LOG IN BUTTON VIEW */}
							<TouchableOpacity style = {styles.button_sign_in} onPress = {() => alert('Sign In button clicked.')}>
						 		<Text style = {styles.sign_in_text}>Sign In</Text>
							</TouchableOpacity>
              {/* END TO MAKE LOG IN BUTTON VIEW */}
					</Content>

          {/* BEGIN TO MAKE FORGOT PASSWORD VIEW */}
					<Text style={styles.text_forgot_password} onPress = {() => alert('Forgot Password button clicked.')}>Forgot your password?</Text>
          {/* END TO MAKE FORGOT PASSWORD VIEW */}

          {/* BEGIN TO MAKE FACEBOOK BUTTON VIEW */}
					<View style={styles.sign_in_with_fb_bg}>
						<FontAwesome name="facebook" size={28} color="#ffffff" />
						<Text style={styles.sign_in_with_fb_text} onPress = {() => alert('Facebook button clicked.')}>Sign in with facebook</Text>
					</View>
          {/* END TO MAKE FACEBOOK BUTTON VIEW */}

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
    height: Dimensions.get('window').width * 0.15,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
				marginTop: moderateScale(15)
			}
    }),
		elevation: 0
  },
	left: {
		flex: 0.5,
		backgroundColor: 'transparent',
  },
	back_arrow: {
		justifyContent: 'center',
		alignItems: 'center',
    width: 30
  },
	body: {
		flex: 3,
		alignItems: 'center',
		backgroundColor: 'transparent'
  },
	text_title: {
    color: 'white',
    fontSize: moderateScale(20),
    marginTop: 5,
    alignSelf: 'center',
	  fontFamily: font_type.FontBold,
  },
	right: {
    flex: 0.5
  },
  img_container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  logo_sec:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image_logo_mountify: {
    alignSelf: 'center',
    width: Dimensions.get('window').width * 0.25,
    height: Dimensions.get('window').width * 0.20,
  },
  text_input: {
    backgroundColor: "#fff",
    borderRadius: (Dimensions.get('window').width * 0.42),
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    alignSelf: 'center',
    width: (Dimensions.get('window').width * 0.84),
    fontSize: moderateScale(16),
    fontFamily: font_type.FontLight,
  },
  button_sign_in: {
    backgroundColor: "#ff6347",
    borderRadius: 20,
    marginTop: 28,
    padding: 12,
    alignSelf: 'center',
    width: (Dimensions.get('window').width * 0.84),
  },
  sign_in_text: {
    color: 'white',
    textAlign: "center",
    fontSize: moderateScale(16),
    fontFamily: font_type.FontBold,
  },
  text_forgot_password: {
    textAlign: 'center',
    fontSize: moderateScale(14),
    color: 'white',
    marginBottom: 30,
    fontFamily: font_type.FontLight,
  },
  sign_in_with_fb_bg: {
    backgroundColor: "#3b5998",
    borderRadius: (Dimensions.get('window').width * 0.42),
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: (Dimensions.get('window').width * 0.84),
    alignSelf: 'center',
    marginBottom: 100,
    flexDirection: 'row'
  },
  sign_in_with_fb_text: {
    color: 'white',
    textAlign: "center",
    fontSize: moderateScale(16),
    padding: 3,
    left: 5,
    fontFamily: font_type.FontLight,
  },
});
// END TO MAKE STYLE
