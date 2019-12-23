import React, { PropTypes, Component } from 'react';
import {StyleSheet,Dimensions,Text,View,Image,TextInput,TouchableOpacity,ImageBackground,Platform,StatusBar,BackHandler,I18nManager,Alert } from 'react-native';
import {Container,Button,Icon,Right,Item,Input,Header,Left,Body,Title} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CheckBox from 'react-native-check-box';
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


export default class Login8 extends Component {

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
				<ImageBackground style={styles.img_container} source={GlobalInclude.Image1}>

					{/* BEGIN TO SETUP HEADER VIEW */}
					<Header style={styles.header}>

              {/* BEGIN TO SETUP HEADER LEFT VIEW */}
							<Left style={styles.left}>
								<TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
									<FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="#000000"/>
								</TouchableOpacity>
							</Left>
              {/* END TO SETUP HEADER LEFT VIEW */}

              {/* BEGIN TO SETUP HEADER BODY VIEW */}
							<Body style={styles.body}>
								<Text style={styles.text_title}></Text>
							</Body>
  						{/* END TO SETUP HEADER BODY VIEW */}

  						{/* BEGIN TO SETUP HEADER RIGHT VIEW */}
							<Right style={styles.right}/>
  						{/* END TO SETUP HEADER RIGHT VIEW */}
  				</Header>
  				{/* END TO SETUP HEADER VIEW */}

					<View>
						{/* BEGIN TO SETUP LOGO VIEW */}
            <Image source={GlobalInclude.Image7} style={styles.logo_style}/>
						{/* END TO SETUP LOGO VIEW */}

						<View style={styles.input_field_sec}>
								{/* BEGIN TO MAKE EMAIL TEXT FIELD CONTAINER VIEW */}
	              <Item underline style={styles.item_email}>
	                <Input placeholderTextColor='#929597' textAlign={I18nManager.isRTL ? 'right' : 'left'} placeholder='Email' keyboardType="email-address" style={styles.input_email} />
	              </Item>
		            {/* END TO MAKE EMAIL TEXT FIELD CONTAINER VIEW */}

		            {/* BEGIN TO MAKE PASSWORD TEXT FIELD CONTAINER VIEW */}
	              <Item underline style={styles.item_password}>
	                <Input placeholderTextColor='#929597' textAlign={I18nManager.isRTL ? 'right' : 'left'} placeholder='Password' secureTextEntry={true} style={styles.input_password} />
	              </Item>
								{/* END TO MAKE PASSWORD TEXT FIELD CONTAINER VIEW */}
						</View>

						{/* BEGIN TO MAKE LOG IN BUTTON VIEW */}
						<View style={styles.sign_in_sec}>
              <TouchableOpacity info style={styles.button_dialog_signup} onPress={() => alert("Log In button clicked.")}>
                <Text autoCapitalize="words" style={styles.button_sign_in}>Log In</Text>
              </TouchableOpacity>
						</View>
						{/* END TO MAKE LOG IN BUTTON VIEW */}

						{/* BEGIN TO MAKE FORGOT PASSWORD VIEW */}
						<View>
							<TouchableOpacity onPress={()=>alert("Forgot password button clicked.")}>
								<Text style={styles.forgot_pass}>Forgot password?</Text>
							</TouchableOpacity>
						</View>
						{/* END TO MAKE FORGOT PASSWORD VIEW */}

					</View>
				</ImageBackground>
				{/* END TO SETUP IMAGE AS A BACKGROUND */}
			</Container>
		);
	}
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
	img_container: {
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
    color: 'white',
    fontSize: moderateScale(16),
    marginTop: 5,
    alignSelf: 'center',
	  fontFamily: font_type.FontBold,
  },
	right: {
    flex: 0.5
  },
	logo_style: {
		marginTop: moderateScale(10),
		marginBottom: moderateScale(10),
		alignSelf:'center',
		width: Dimensions.get('window').width * 0.35,
		height: Dimensions.get('window').width * 0.28,
	},
  input_field_sec:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
	item_email: {
		alignSelf:'center',
		width: Dimensions.get('window').width * 0.80,
		height: Dimensions.get('window').height * 0.08
	},
	input_email: {
		marginLeft: moderateScale(-15),
		fontFamily: font_type.FontLight,
	  color: '#9b9fa2'
  },
  item_password: {
	  alignSelf: 'center',
		marginTop: 5,
		width: Dimensions.get('window').width * 0.80,
		height: Dimensions.get('window').height * 0.08,
	},
	input_password: {
		marginLeft: moderateScale(-15),
		fontFamily: font_type.FontLight,
		color: '#9b9fa2'
	},
	sign_in_sec:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.10,
    justifyContent: 'center',
    alignItems: 'center',
  },
	button_dialog_signup:{
		backgroundColor: '#ff6347',
		justifyContent: 'center',
		alignItems: 'center',
		width: Dimensions.get('window').width * 0.80,
	},
	button_sign_in: {
		alignSelf: 'center',
		fontSize: moderateScale(16),
		fontFamily: font_type.FontBold,
		color: 'white',
		padding: moderateScale(13),
	},
	forgot_pass: {
		marginTop: moderateScale(10),
		fontSize: moderateScale(17),
		color: '#9b9fa2',
		alignSelf: 'center',
		justifyContent: 'center',
		fontFamily: font_type.FontLight,
	}
});
// END TO MAKE STYLE
