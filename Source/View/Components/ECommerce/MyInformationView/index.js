import React, { Component } from 'react';
import {Text,View,Image,StatusBar,TouchableOpacity,Platform,StyleSheet,Dimensions,I18nManager,AsyncStorage} from 'react-native';
import {Content,Container,Right,Header,Left,Body,Title,} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

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

export default class MyInformation extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	//BEGIN TO SETUP ONCHANGEPASSWORDCLICK
	onChangePasswordClick() {
		alert('Change password button clicked.')
	}
	//END TO SETUP ONCHANGEPASSWORDCLICK

	//BEGIN TO SETUP HANDLEBAGNAVIGATION
	_handleBagNavigation() {
			alert("Cart Button Click")
	}
	//END TO SETUP HANDLEBAGNAVIGATION

	//BEGIN TO SETUP HANDLEWISHLISTNAVIGATION
	_handleWishListNavigation() {
		alert("Wish Button Click")
	}
	//END TO SETUP HANDLEWISHLISTNAVIGATION

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
							<TouchableOpacity style={styles.back_arrow} onPress={() => this.props.navigation.goBack()}>
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
							<Text style={styles.text_title}>My Information</Text>
						</Body>
					{/* END TO SETUP BODY VIEW */}

					{/* BEGIN TO SETUP RIGHT VIEW */}
					<Right style={styles.right}>
					  {/* BEGIN TO SETUP WISHLIST ICON VIEW */}
							<TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this._handleWishListNavigation()}>
								<View style={styles.heart_bg}>
									<FontAwesome name="heart" size={8} style={styles.heart_icon} />
								</View>
								<View style={styles.alert_bg}>
									<Text style={styles.alert_txt}>1</Text>
								</View>
							</TouchableOpacity>
						{/* END TO SETUP WISHLIST ICON VIEW */}

						{/* BEGIN TO SETUP CART ICON VIEW */}
							<TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this._handleBagNavigation()}>
								<SimpleLineIcons name="handbag" size={20} style={styles.bag_icon}/>
								<View style={styles.alert_bg}>
									<Text style={styles.alert_txt}>3</Text>
								</View>
							</TouchableOpacity>
						{/* END TO SETUP CART ICON VIEW */}
					</Right>
				{/* END TO SETUP RIGHT VIEW */}
				</Header>
			{/* END TO SETUP HEADER VIEW */}

				<View style={styles.main_view}>
				{/* BEGIN TO SETUP FIRSTNAME VIEW */}
					<View style={styles.main_row}>
						<Text style={styles.label_text}>First Name</Text>
						<Text style={[styles.info_text, { color: '#0e1130' }]}>Lorem Ipsum</Text>
					</View>
				{/* END TO SETUP FIRSTNAME VIEW */}
					<View style={styles.divider_horizontal} />

				{/* BEGIN TO SETUP LASTNAME VIEW */}
					<View style={styles.main_row}>
						<Text style={styles.label_text}>Last Name</Text>
						<Text style={[styles.info_text, { color: '#0e1130' }]}>Lorem Ipsum</Text>
					</View>
				{/* END TO SETUP LASTNAME VIEW */}
					<View style={styles.divider_horizontal} />

				{/* BEGIN TO SETUP EMAIL VIEW */}
					<View style={styles.main_row}>
						<Text style={styles.label_text}>Email</Text>
						<Text style={[styles.info_text, { color: '#e1e1e1' }]}>
							lorem@ipsum.com
						</Text>
					</View>
				{/* END TO SETUP EMAIL VIEW */}
					<View style={styles.divider_horizontal} />

				{/* BEGIN TO SETUP BIRTHDAY VIEW */}
					<View style={styles.main_row}>
						<Text style={styles.label_text}>Birthday</Text>
						<Text style={[styles.info_text, { color: '#0e1130' }]}>
							16/04/2020
						</Text>
					</View>
				{/* END TO SETUP BIRTHDAY VIEW */}

					<View style={styles.divider_horizontal} />

				{/* BEGIN TO SETUP GENDER VIEW */}
					<View style={styles.main_row}>
						<Text style={styles.label_text}>Gender</Text>
						<Text style={[styles.info_text, { color: '#0e1130' }]}>Male</Text>
					</View>
				{/* END TO SETUP GENDER VIEW */}
					<View style={styles.divider_horizontal} />

				{/* BEGIN TO SETUP CHANGEPASSWORD VIEW */}
					<TouchableOpacity style={styles.change_password_view} onPress={this.onChangePasswordClick.bind(this)}>
						<Text style={[styles.info_text,{ color: '#000000', textDecorationLine: 'underline' }]}>
							Change Password
						</Text>
					</TouchableOpacity>
				{/* END TO SETUP CHANGEPASSWORD VIEW */}

				{/* BEGIN TO SETUP EDITINFORMATION VIEW */}
					<View style={styles.edit_infomain_view}>
						<View style={styles.edit_divider} />
						<TouchableOpacity
							style={styles.edit_info_view}
							onPress={() => this.props.navigation.navigate("EditInformationView")}>
							<Text style={styles.edit_info_text}>Edit Information</Text>
						</TouchableOpacity>
					</View>
				{/* END TO SETUP EDITINFORMATION VIEW */}
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
    ...Platform.select({
      ios: {
        paddingTop: (Dimensions.get("window").height * 0.02),
      },
      android: {
        paddingTop: Dimensions.get("window").width * 0.05
      }
    }),
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
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
	text_title: {
    color: 'white',
    fontSize: moderateScale(20),
    alignSelf: 'center',
    fontFamily: font_type.FontLight,
  },
  right: {
    flex: 0.5,
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    ...Platform.select({
      ios: {
      },
      android: {
        paddingTop: Dimensions.get("window").width * 0.02
      }
    }),
  },
  alert_bg: {
		width: Dimensions.get("window").width * 0.03,
		height: Dimensions.get("window").width * 0.03,
		borderRadius: Dimensions.get("window").width * 0.015,
		backgroundColor: '#ff0000',
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: -(Dimensions.get("window").width * 0.018),
	},
	alert_txt: {
		fontSize: moderateScale(8),
		fontFamily: font_type.FontBold,
		color: 'white',
	},
  bag_icon: {
		marginLeft: Dimensions.get("window").width * 0.04,
		color: 'white'
	},
	heart_bg: {
		width: Dimensions.get("window").width * 0.054,
		height: Dimensions.get("window").width * 0.054,
		borderRadius: Dimensions.get("window").width * 0.027,
		backgroundColor: 'transparent',
		borderWidth: 1,
		borderColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},
	heart_icon: {
		color: 'white',
		alignSelf: 'center'
	},
  main_view:{
    height: Dimensions.get("window").height * 0.85,
  },
  main_row:{
    flexDirection:'row',
    paddingTop: Dimensions.get("window").height * 0.018,
    paddingBottom: Dimensions.get("window").height * 0.025,
    paddingLeft: Dimensions.get("window").width * 0.045,
    paddingRight: Dimensions.get("window").width * 0.045
  },
	label_text:{
    color: '#a3a3a3',
    width: Dimensions.get("window").width * 0.4,
    fontSize:  moderateScale(16),
    fontFamily: font_type.FontLight,
    textAlign: 'left'
  },
  info_text:{
    width: Dimensions.get("window").width * 0.5,
    fontSize:  moderateScale(16),
    fontFamily: font_type.FontLight,
    textAlign: 'left'
  },
	divider_horizontal:{
    height: Dimensions.get("window").height * 0.001,
    backgroundColor: '#e1e1e1',
    marginLeft: Dimensions.get("window").width * 0.045,
    marginRight: Dimensions.get("window").width * 0.045,
  },
	change_password_view:{
    marginTop: Dimensions.get("window").height * 0.025,
    marginLeft: Dimensions.get("window").width * 0.045
  },
  edit_infomain_view:{
    bottom: 0,
    position:'absolute',
    width:Dimensions.get("window").width
  },
	edit_divider:{
    height: Dimensions.get("window").height * 0.001,
    backgroundColor: '#e1e1e1'
  },
  edit_info_view:{
    padding: Dimensions.get("window").height * 0.015,
    margin: Dimensions.get("window").height * 0.015,
    backgroundColor: '#ff6347',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
	edit_info_text:{
    color:'#ffffff',
    fontSize:  moderateScale(16),
    fontFamily: font_type.FontLight,
  }
});
// END TO MAKE STYLE
