
import React, { Component } from 'react';
import {Text,StyleSheet,View,Dimensions,StatusBar,Platform,ImageBackground,TouchableOpacity,BackHandler,I18nManager,Alert} from 'react-native';
import {Container,Button,Icon,Right,Item,Input,Header,Left,Body,Title} from 'native-base';
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
export default class Login2 extends Component {

  render(){

		// BEGIN TO SETUP STATUSBAR VIEW
		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('transparent',true);
			StatusBar.setTranslucent(true);
		}
		// END TO SETUP STATUSBAR VIEW

    return(
			<Container>
				{/* BEGIN TO SETUP IMAGE AS A BACKGROUND */}
				<ImageBackground style={styles.background_image} source={GlobalInclude.Image5}>

					{/* BEGIN TO SETUP HEADER VIEW */}
					<Header style={styles.header}>

            {/* BEGIN TO SETUP HEADER LEFT VIEW */}
						<Left style={styles.left}>
							<TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
								<FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="#ffffff"/>
							</TouchableOpacity>
						</Left>
						{/* END TO SETUP HEADER LEFT VIEW */}

						{/* BEGIN TO SETUP HEADER BODY VIEW */}
						<Body style={styles.body}>
							<Text style={styles.text_title}>Log In</Text>
						</Body>
						{/* END TO SETUP HEADER BODY VIEW */}

						{/* BEGIN TO SETUP HEADER RIGHT VIEW */}
						<Right style={styles.right}/>
						{/* END TO SETUP HEADER RIGHT VIEW */}
				</Header>
				{/* END TO SETUP HEADER VIEW */}

					{/* BEGIN TO MAKE MAIN CONTAINER VIEW */}
					<View style={styles.input_field_styles}>
						{/* BEGIN TO MAKE EMAIL TEXT FIELD CONTAINER VIEW */}
						<View style={styles.contain_email}>
							<Input
								ref='email'
								style={styles.input_email}
								editable={true}
								keyboardType='email-address'
								returnKeyType='next'
								autoCapitalize='none'
								autoCorrect={false}
								underlineColorAndroid='transparent'
								textAlign={I18nManager.isRTL ? 'right' : 'left'}
								placeholder='Enter Email'
								placeholderTextColor="rgba(0,0,0,0.20)" />
						</View>
						{/* END TO MAKE EMAIL TEXT FIELD CONTAINER VIEW */}

						<View style={styles.divider}/>

						{/* BEGIN TO MAKE PASSWORD TEXT FIELD CONTAINER VIEW */}
						<View style={styles.contain_password}>
							<Input
								ref='password'
								style={styles.input_email}
								editable={true}
								keyboardType='default'
								returnKeyType='next'
								autoCapitalize='none'
								autoCorrect={false}
								underlineColorAndroid='transparent'
								textAlign={I18nManager.isRTL ? 'right' : 'left'}
								placeholder='Enter Password'
								placeholderTextColor="rgba(0,0,0,0.20)"
								secureTextEntry={true}/>
						</View>
					</View>
					{/* END TO MAKE PASSWORD TEXT FIELD CONTAINER VIEW */}

					{/* BEGIN TO MAKE LOG IN BUTTON VIEW */}
					<View style={styles.sign_btn_sec}>
						<Button style={styles.sign_in_btn} onPress={() => alert("Log In button clicked.")}>
							<Text style={styles.sign_in_btn_text}>Log In</Text>
						</Button>
					</View>
					{/* END TO MAKE LOG IN BUTTON VIEW */}

					{/* BEGIN TO MAKE FORGOT PASSWORD VIEW */}
					<Text style={styles.forgot_password} onPress={() => alert("Forgot Password button clicked.")}>Forgot your password?</Text>
					{/* END TO MAKE FORGOT PASSWORD VIEW */}

					{/* BEGIN TO MAKE FACEBOOK BUTTON VIEW */}
					<View style={styles.social_sec}>
						<Button iconRight style={styles.fb_button} onPress={() => alert("FaceBook button clicked.")}>
							<FontAwesome name="facebook" size={28} color="#ffffff" />
							<Text style={styles.fb_button_text}> Log in with facebook</Text>
						</Button>
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
	background_image: {
		flex: 1,
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
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
    color: "#ffffff",
    fontSize: moderateScale(20),
    alignSelf: 'center',
    fontFamily: font_type.FontBold,
  },
  right: {
    flex: 0.5
  },
	input_field_styles:{
		height: (Dimensions.get('window').height * 0.30),
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	contain_email:{
		backgroundColor: '#fff',
    height: (Dimensions.get('window').height * 0.08),
    width: (Dimensions.get('window').width * 0.92),
    borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 3,
	},
	input_email:{
		height: (Dimensions.get('window').height * 0.08),
    width: (Dimensions.get('window').width * 0.84),
		color: "#000",
		paddingLeft: moderateScale(10),
		fontFamily: font_type.FontLight,
	},
	contain_password:{
		backgroundColor: '#fff',
    height: (Dimensions.get('window').height * 0.08),
    width: (Dimensions.get('window').width * 0.92),
    borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 3,
	},
	divider: {
    width: (Dimensions.get('window').width * 0.92),
		height: 0.6,
		backgroundColor: 'rgba(0,0,0,0.1)',
		left:15,
		right:15,
	},
	sign_btn_sec:{
		marginTop: moderateScale(15),
		height: (Dimensions.get('window').height * 0.12),
	},
	sign_in_btn:{
		backgroundColor: "#ff6347",
		height: (Dimensions.get('window').height * 0.08),
		width: (Dimensions.get('window').width * 0.92),
		borderRadius: 5,
    alignSelf: 'center',
    elevation: 3,
	},
	sign_in_btn_text:{
		color: "#fff",
		fontSize: moderateScale(17),
		width: (Dimensions.get('window').width * 0.92),
		textAlign: 'center',
		fontFamily: font_type.FontBold,
	},
	forgot_password:{
		color: 'white',
		fontSize: moderateScale(15),
		height: 30,
		width: (Dimensions.get('window').width),
		alignSelf: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		backgroundColor: 'transparent',
		fontFamily: font_type.FontLight,
	},
	social_sec:{
		height: 65,
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingBottom: moderateScale(20),
		marginTop:50
	},
	fb_button: {
		backgroundColor: "#3b5998",
		height: 65,
		width: (Dimensions.get('window').width * 0.92),
		borderRadius: 5,
		justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 3,
	},
	fb_button_text:{
		color: 'white',
		paddingLeft: moderateScale(5),
		fontSize: moderateScale(17),
		fontFamily: font_type.FontLight,
	}
});
// END TO MAKE STYLE
