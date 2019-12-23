
import React, { Component } from 'react';
import { Text,StyleSheet,Dimensions, View, Image, StatusBar,TouchableOpacity, Platform, ImageBackground, BackHandler,I18nManager,Alert} from 'react-native';
import { Container, Button, Icon, Right, Item, Input, Header, Left, Body, Title} from 'native-base';
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

export default class Login1 extends Component {

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
				<ImageBackground style={styles.background_image} source={GlobalInclude.Image4}>

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
					<View style={styles.contain_main_mg}>

								{/* BEGIN TO MAKE FACEBOOK BUTTON VIEW */}
								<View style={styles.contain_fb_bg}>
									<Button iconRight style={styles.fb_button} onPress={() => alert("FaceBook button clicked.")}>
										<FontAwesome name="facebook" size={28} color="#ffffff" />
										<Text style={styles.fb_button_text}> Login in with facebook</Text>
									</Button>
								</View>
								{/* END TO MAKE FACEBOOK BUTTON VIEW */}

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
					            placeholder='Enter Email'
											textAlign={I18nManager.isRTL ? 'right' : 'left'}
					            placeholderTextColor="rgba(0,0,0,0.20)" />
								</View>
								{/* END TO MAKE EMAIL TEXT FIELD CONTAINER VIEW */}

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
							        placeholder='Enter Password'
		  								textAlign={I18nManager.isRTL ? 'right' : 'left'}
							        placeholderTextColor="rgba(0,0,0,0.20)"
											secureTextEntry={true}/>
								</View>
								{/* END TO MAKE PASSWORD TEXT FIELD CONTAINER VIEW */}

								{/* BEGIN TO MAKE LOG IN BUTTON VIEW */}
								<Button style={styles.sign_in_btn} onPress={() => alert("Log In button clicked.")}>
										<Text style={styles.sign_in_btn_text}>Log In</Text>
								</Button>
								{/* END TO MAKE LOG IN BUTTON VIEW */}

								{/* BEGIN TO MAKE FORGOT PASSWORD VIEW */}
								<Text style={styles.forgot_password} onPress={() => alert("Forgot Password button clicked.")}>Forgot your password?</Text>
								{/* END TO MAKE FORGOT PASSWORD VIEW */}

					</View>
					{/* END TO MAKE MAIN CONTAINER VIEW */}
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
		width: 30,
		justifyContent: 'center',
		alignItems: 'center'
	},
	body: {
		flex: 3,
		alignItems: 'center',
		backgroundColor: 'transparent'
	},
	text_title: {
		color: "#ffffff",
		fontSize: moderateScale(20),
		marginTop: 5,
		alignSelf: 'center',
		fontFamily: font_type.FontBold,
	},
	right: {
		flex: 0.5
	},
	contain_main_mg: {
		backgroundColor: '#fff',
		height: (Dimensions.get('window').height * 0.50),
		width: (Dimensions.get('window').width * 0.92),
		borderRadius: 5,
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'center',
		elevation: 3,
		position: 'absolute',
		left: 15,
		right:15,
		bottom:15,
	},
	contain_fb_bg: {
		backgroundColor: "#ebebeb",
		height: (Dimensions.get('window').height * 0.12),
		width: (Dimensions.get('window').width * 0.92),
		borderTopLeftRadius: 5,
		borderTopRightRadius : 5,
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'center',
		elevation: 3,
		position: 'absolute',
		left: 0,
		right:0,
		bottom:(Dimensions.get('window').height * 0.38),
		elevation: 0
	},
	fb_button: {
		backgroundColor: "#3b5998",
		height: (Dimensions.get('window').height * 0.08),
		width: (Dimensions.get('window').width * 0.84),
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		elevation: 3,
		position: 'absolute',
		left: 15,
		right:15,
		top:13,
		elevation: 0
	},
	fb_button_text:{
		marginLeft: moderateScale(5),
		color: "#fff",
		fontSize: moderateScale(17),
		fontFamily: font_type.FontLight,
	},
	contain_email:{
		backgroundColor: 'transparent',
		height: (Dimensions.get('window').height * 0.08),
		width: (Dimensions.get('window').width * 0.84),
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		borderWidth: 1,
		borderColor: "#ccc",
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'center',
		position: 'absolute',
		left: 15,
		right:15,
		bottom:(Dimensions.get('window').height * 0.26),
	},
	input_email:{
		height: (Dimensions.get('window').height * 0.08),
		width: (Dimensions.get('window').width * 0.84),
		color: "#000",
		paddingLeft: moderateScale(15),
		fontFamily: font_type.FontLight,
	},
	contain_password:{
		backgroundColor: 'transparent',
		height: (Dimensions.get('window').height * 0.08),
		width: (Dimensions.get('window').width * 0.84),
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
		borderBottomWidth: 1,
		borderLeftWidth: 1,
		borderRightWidth: 1,
		borderColor: "#ccc",
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'center',
		elevation:1,
		position: 'absolute',
		left: 15,
		right:15,
		bottom:(Dimensions.get('window').height * 0.18),
	},
	sign_in_btn:{
		backgroundColor: "#ff6347",
		height: (Dimensions.get('window').height * 0.08),
		width: (Dimensions.get('window').width * 0.84),
		borderRadius: 5,
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'center',
		elevation: 3,
		position: 'absolute',
		left: 15,
		right:15,
		top:(Dimensions.get('window').height * 0.35),
	},
	sign_in_btn_text:{
		color: "#fff",
		fontSize: moderateScale(17),
		justifyContent: 'space-between',
		width: (Dimensions.get('window').width  * 0.84),
		textAlign: 'center',
		fontFamily: font_type.FontBold,
	},
	forgot_password:{
		color: "#0691ce",
		fontSize: moderateScale(17),
		height: (Dimensions.get('window').height * 0.05),
		width: (Dimensions.get('window').width),
		alignItems: 'center',
		alignSelf: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		backgroundColor: 'transparent',
		top:(Dimensions.get('window').height * 0.44),
		fontFamily: font_type.FontLight,
	}
});
// END TO MAKE STYLE
