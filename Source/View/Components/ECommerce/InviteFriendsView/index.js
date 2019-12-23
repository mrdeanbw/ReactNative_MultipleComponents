import React, { Component } from 'react';
import {Text,View,Image,StatusBar,TouchableOpacity,Platform,StyleSheet,Dimensions,BackHandler,I18nManager,} from 'react-native';
import {Content,Container,Right,Header,Left,Body,Title,} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { CachedImage } from 'react-native-cached-image';
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";

// BEGIN TO SETUP FONT-TYPE AND FONTSIZE
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const scale = size => (Dimensions.get("window").width / guidelineBaseWidth) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const font_type = {
    FontLight: 'Helvetica',
    FontBold : 'Helvetica-Bold'
};
// END TO SETUP FONT-TYPE AND FONTSIZE


export default class Login extends Component {
	
	render() {
		// BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW

		return (
			<Container style={styles.container}>
			 {/* BEGIN TO SETUP HEADER VIEW */}
				<Header androidStatusBarColor={'#0e1130'} style={styles.header}>
				  {/* BEGIN TO SETUP LEFT VIEW */}
					<Left style={styles.left}>
						<TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
							<FontAwesome
								name={I18nManager.isRTL ? 'angle-right' : 'angle-left'}
								size={30}
								color="white"
								style={{paddingRight: 20}}/>
						</TouchableOpacity>
					</Left>
					{/* END TO SETUP LEFT VIEW */}

					{/* BEGIN TO SETUP BODY VIEW */}
					<Body style={styles.body}>
						<Text style={styles.text_title}>Invite Friends</Text>
					</Body>
					 {/* END TO SETUP BODY VIEW */}
					<Right style={styles.right} transparent />
				</Header>
			 {/* END TO SETUP HEADER VIEW */}
				<View style={styles.content}>
					<CachedImage source={GlobalInclude.Image3} style={styles.image_logo} />
					{/* BEGIN TO SETUP RECIVE VIEW */}
					<View style={styles.description_txt_bg}>
						<Text style={[styles.description_txt,{fontFamily: font_type.FontLight,textAlign: 'center',},]}>
							Receive
							<Text style={[styles.description_txt,{ fontFamily: font_type.FontBold },]}>
								{' '}
								POINT 100{' '}
							</Text>
							when you share this code with 5 friends!
						</Text>
					</View>
					{/* END TO SETUP RECIVE VIEW */}

					{/* BEGIN TO SETUP INVITATIONCODE VIEW */}
					<Text style={styles.invitation_code_txt}>Your invitation code</Text>
					<Text style={styles.code_txt}>123456</Text>
					{/* END TO SETUP INVITATIONCODE VIEW */}
				</View>

				<View style={styles.bottom_view}>
				{/* BEGIN TO SETUP EMAIL BUTTON VIEW */}
					<TouchableOpacity
						onPress={() => alert('Share with Email')}
						style={[styles.sharewith_email_fbbg, { backgroundColor: '#da403a' }]}>
						<FontAwesome name="envelope" size={15} color="white" />
						<Text style={styles.sharewith_email_fbtxt}>Share with Email</Text>
					</TouchableOpacity>
				{/* END TO SETUP EMAIL BUTTON VIEW */}

				{/* BEGIN TO SETUP FACEBOOK BUTTON VIEW */}
					<TouchableOpacity onPress={() => alert('Share with Facebook')}
						style={[styles.sharewith_email_fbbg,{backgroundColor: '#3b66c4',marginTop: Dimensions.get("window").width * 0.02,paddingLeft: Dimensions.get("window").width * 0.03}]}>
						<FontAwesome name="facebook" size={18} color="white" />
						<Text style={[styles.sharewith_email_fbtxt,{ width: Dimensions.get("window").width * 0.45 },]}>
							Share with Facebook
						</Text>
					</TouchableOpacity>
				{/* END TO SETUP FACEBOOK BUTTON VIEW */}
				</View>
			</Container>
		);
	}
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
	container: {
		height: Dimensions.get("window").height,
		width: Dimensions.get("window").width,
		backgroundColor: 'white'
	},
	header: {
    backgroundColor: "#ff6347",
		height: Dimensions.get("window").height * 0.1,
		borderBottomWidth: 0,
		paddingTop: (Dimensions.get("window").height * 0.02),
		elevation: 0,
		paddingLeft: (Dimensions.get("window").width * 0.05),
		paddingRight: (Dimensions.get("window").width * 0.05),
  },
	left: {
		flex: 0.5,
		backgroundColor: 'rgba(0,0,0,0)',
  },
	back_arrow: {
		justifyContent: 'center',
		alignItems: 'center',
  },
	body: {
		flex: 3,
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0)'
  },
	text_title: {
    color: 'white',
    fontSize: moderateScale(18),
    alignSelf: 'center',
		fontFamily: font_type.FontLight,
  },
	right: {
    flex: 0.5,
		backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
  },
	content: {
		height: Dimensions.get("window").height * 0.6,
		width: Dimensions.get("window").width,
		backgroundColor: 'white'
	},
	image_logo: {
		width: Dimensions.get("window").height * 0.3,
		height: Dimensions.get("window").height * 0.3,
		alignSelf: 'center',
		marginTop: Dimensions.get("window").height * 0.01
	},
	description_txt_bg: {
		width: Dimensions.get("window").width * 0.84,
		alignSelf: 'center',
		marginTop: Dimensions.get("window").width * 0.03,
		flexDirection: 'row',
	},
	description_txt: {
		color: "#0d0e1b",
		fontSize: moderateScale(14),
	},
	invitation_code_txt: {
		color: "#959595",
		fontFamily: font_type.FontLight,
		fontSize: moderateScale(16),
		marginTop: Dimensions.get("window").height * 0.14,
		textAlign: 'center'
	},
	code_txt: {
		color: "#0d0e1b",
		textAlign: 'center',
		fontFamily: font_type.FontLight,
		fontSize: moderateScale(16),
	},
	bottom_view: {
		height: Dimensions.get("window").height * 0.2,
		width: Dimensions.get("window").width,
		backgroundColor: 'white',
		justifyContent: 'center',
	},
	sharewith_email_fbbg: {
    width: Dimensions.get("window").width * 0.94,
    alignSelf: 'center',
    height: Dimensions.get("window").height * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 5,
	},
  sharewith_email_fbtxt: {
	    color: 'white',
	    fontSize: moderateScale(15),
	    fontFamily: font_type.FontLight,
	    paddingLeft: Dimensions.get("window").width * 0.03,
    }
});
// END TO MAKE STYLE
