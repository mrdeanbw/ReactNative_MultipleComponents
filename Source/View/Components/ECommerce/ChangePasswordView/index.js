import React, { Component } from 'react';
import { Text, View, Image,StyleSheet,Dimensions,StatusBar,TouchableOpacity, Platform,I18nManager,SafeAreaView} from 'react-native';
import { Content,Container, Button,Right,Header, Left, Body,Label} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FloatingLabelInput from '../FloatingLabelInput';

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

export default class ChangePassword extends Component {

	constructor(props) {
 		super(props);
    // BEGIN TO SETUP STATE
 		this.state = {
			old_pwd: '',
			new_pwd: '',
			confirm_pwd: '',
			login_Id: ''
		};
    // END TO SETUP STATE
 	}



  render(){
		// BEGIN TO SETUP STATUSBAR VIEW
		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('transparent',true);
			StatusBar.setTranslucent(true);
		}
		// END TO SETUP STATUSBAR VIEW

    return(
			<Container style={styles.container}>
			  {/* BEGIN TO SETUP HEADER VIEW */}
				<Header androidStatusBarColor={"#0e1130"} style={styles.header}>
				 {/* BEGIN TO SETUP LEFT VIEW */}
					<Left style={styles.left}>
						<TouchableOpacity style={styles.back_arrow} onPress={()=> this.props.navigation.goBack()}>
							<FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={moderateScale(30)} color="white" style={{paddingRight: 20}}/>
						</TouchableOpacity>
					</Left>
				{/* END TO SETUP LEFT VIEW */}

				 {/* BEGIN TO SETUP BODY VIEW */}
					<Body style={styles.body}>
						<Text style={styles.text_title}>Change Password</Text>
					</Body>
				 {/* END TO SETUP BODY VIEW */}

			   {/* BEGIN TO SETUP RIGHT VIEW */}
					<Right style={styles.right}>
					</Right>
			   {/* BEGIN TO SETUP BODY VIEW */}
				</Header>
			{/* BEGIN TO SETUP HEADER VIEW */}

					<View style={styles.content}>

					{/* BEGIN TO SETUP KEYBORDAWARESCROLL VIEW */}
						<KeyboardAwareScrollView>
							<View style={styles.floating_view}>
						  {/* BEGIN TO SETUP OLDPASSWORD VIEW */}
							<FloatingLabelInput
								label="Old Password"
								value={this.state.old_pwd}
								keyboardType='default'
								secureTextEntry={true}
								returnKeyType='done'
								maxLength={40}
								selectionColor={'#959595'}
								autoCapitalize='none'
								onChangeText={(old_pwd) => this.setState({old_pwd})}/>
						  {/* END TO SETUP OLDPASSWORD VIEW */}
								<View style={{height:10}}/>
						  {/* BEGIN TO SETUP OLDPASSWORD VIEW */}
								<FloatingLabelInput
									label="New Password"
									value={this.state.new_pwd}
									keyboardType='default'
									secureTextEntry={true}
									returnKeyType='done'
									maxLength={40}
									selectionColor={'#959595'}
									autoCapitalize='none'
									onChangeText={(new_pwd) => this.setState({new_pwd})}/>
							{/* END TO SETUP OLDPASSWORD VIEW */}
									<View style={{height:10}}/>

							{/* BEGIN TO SETUP CONFIRMPASSWORD VIEW */}
									<FloatingLabelInput
										label="Confirm New Password"
										value={this.state.confirm_pwd}
										keyboardType='default'
										secureTextEntry={true}
										returnKeyType='done'
										maxLength={40}
										selectionColor={'#959595'}
										autoCapitalize='none'
										onChangeText={(confirm_pwd) => this.setState({confirm_pwd})}/>
							{/* END TO SETUP CONFIRMPASSWORD VIEW */}
							</View>
							</KeyboardAwareScrollView>
						{/* END TO SETUP KEYBORDAWARESCROLL VIEW */}
					</View>

				<View style={styles.divider}></View>

				{/* BEGIN TO SETUP CHANGEPASSWORD VIEW */}
					<View style={styles.bottom_view}>
	 				 <TouchableOpacity style={styles.change_btn_bg} onPress={() => alert('Change Password')}>
	 					 <Text style={styles.change_btn_txt}>Change</Text>
	 				 </TouchableOpacity>
					</View>
				{/* END TO SETUP CHANGEPASSWORD VIEW */}
			</Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
	container: {
		height: Dimensions.get("window").height,
		width: Dimensions.get("window").width,
		backgroundColor: 'white',
	},
	header: {
		backgroundColor: '#ff6347',
		height: Dimensions.get("window").height * 0.1,
		paddingHorizontal: Dimensions.get("window").width * 0.05,
		borderBottomWidth: 0,
		...Platform.select({
			ios: {
				paddingTop: Dimensions.get("window").height * 0.02,
			},
			android: {
				paddingTop: Dimensions.get("window").width * 0.04,
			},
		}),
		elevation: 0,
		paddingLeft: Dimensions.get("window").width * 0.05,
		paddingRight: Dimensions.get("window").width * 0.05,
	},
	left: {
		flex: 0.7,
		backgroundColor: 'rgba(0,0,0,0)',
	},
	body: {
		flex: 2.6,
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0)',
	},
	text_title: {
		color: 'white',
		fontSize: moderateScale(22),
		alignSelf: 'center',
		fontFamily: font_type.FontLight,
	},
	right: {
		flex: 0.7,
		alignItems: 'center',
	},
	back_arrow: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	content: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height * 0.75,
	},
	divider: {
		backgroundColor: '#d8d8d8',
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").width * 0.003,
	},
	bottom_view: {
		width: Dimensions.get("window").width,
		alignItems: 'center',
		justifyContent: 'center',
	},
	change_btn_bg: {
		backgroundColor: '#ff6347',
		width: Dimensions.get("window").width * 0.94,
		height: Dimensions.get("window").height * 0.055,
		marginVertical: Dimensions.get("window").height * 0.02,
		borderRadius: Dimensions.get("window").height * 0.005,
		flexDirection: 'row',
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
	},
	change_btn_txt: {
		color: '#ffffff',
		fontSize: moderateScale(16),
		fontFamily: font_type.FontLight,
	},
	item: {
		alignSelf: 'center',
		width: Dimensions.get("window").width * 0.92,
		justifyContent: 'center',
		marginTop: Dimensions.get("window").width * 0.03,
	},
	floating_view: {
		alignSelf: 'center',
		width: Dimensions.get("window").width * 0.92,
		justifyContent: 'center',
		marginTop: Dimensions.get("window").width * 0.03,
	},
});
// END TO MAKE STYLE
