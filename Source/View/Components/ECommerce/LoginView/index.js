import React, { Component } from 'react';
import {Text,View,Image,StatusBar,TouchableOpacity,Platform,ScrollView,AsyncStorage,I18nManager,StyleSheet,Dimensions} from 'react-native';
import {Content,Container,Button,Icon,Right,Header,Left,Body,Title,Segment,Label} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Dropdown } from 'react-native-material-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FloatingLabelInput from '../FloatingLabelInput';
import DatePicker from 'react-native-datepicker';

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
	constructor(props) {
		super(props);
		this.onChangeText = this.onChangeText.bind(this);
    // BEGIN TO SETUP STATE
		this.state = {
			date1: '',
			date: '',
			segment: 1,
			email: '',
			password: '',
			firstName: '',
			lastName: '',
			emailRegister: '',
			birthday: '',
			gender: 'null',
			passwordRegister: '',
			confirmPassword: '',
			isLoading: false,
			data: [
				{
					value: 'Female',
				},
				{
					value: 'Male',
				},
			],
		};
    // END TO SETUP STATE
	}

	//BEGIN TO SETUP ONCHANGETEXT
	onChangeText(text) {
		this.setState({ gender: text });
	}
	//END TO SETUP ONCHANGETEXT

	//BEGIN TO SETUP RENDERFOOTER
	_renderFooter = () => {
		const { segment } = this.state;
		if (segment === 1) {
			return (
				<TouchableOpacity
					style={styles.facebook_btn_bg}
					onPress={() => alert('Facebook Login')}>
					<FontAwesome name="facebook" size={20} color="white" />
					<Text style={styles.login_with_facebook_txt}>Login with Facebook</Text>
				</TouchableOpacity>
			);
		}
		if (segment === 2) {
			return (
				<TouchableOpacity
					style={styles.facebook_btn_bg}
					onPress={() => alert('SignUp With Facebook')}>
					<FontAwesome name="facebook" size={20} color="white" />
					<Text style={styles.login_with_facebook_txt}>Sign Up with Facebook</Text>
				</TouchableOpacity>
			);
		}
	};
	//END TO SETUP RENDERFOOTER

	//BEGIN TO SETUP RENDERACTIVECOMPONENT
	_renderActiveComponent = () => {
		const { segment } = this.state;
		if (segment === 1) {
			return (
				<View>
					<View style={styles.floating_view}>
					{/* BEGIN TO SETUP EMAIL VIEW */}
						<FloatingLabelInput
							label="Email"
							value={this.state.email}
							keyboardType="email-address"
							returnKeyType="done"
							maxLength={40}
							selectionColor={'#959595'}
							autoCapitalize="none"
							onChangeText={email => this.setState({ email })}/>
					{/* END TO SETUP EMAIL VIEW */}
					<View style={{ height: 10, color: "#e1e1e1"}} />
					{/* BEGIN TO SETUP PASSWORD VIEW */}
						<FloatingLabelInput
							label="Password"
							value={this.state.password}
							keyboardType="default"
							returnKeyType="done"
							secureTextEntry={true}
							selectionColor={'#959595'}
							maxLength={15}
							autoCapitalize="none"
							onChangeText={password => this.setState({ password })}/>
					{/* END TO SETUP PASSWORD VIEW */}
					</View>

					{/* BEGIN TO SETUP FORGOTPASSWORD VIEW */}
					<TouchableOpacity
						onPress={() =>alert('Forgot password button clicked.')}
						style={styles.forgot_password_bg}>
						<Text style={styles.forgot_password_txt}>Forgot Password?</Text>
					</TouchableOpacity>
					{/* END TO SETUP FORGOTPASSWORD VIEW */}

					{/* BEGIN TO SETUP LOGIN VIEW */}
					<TouchableOpacity
						onPress={() => alert('Login button clicked.')}
						style={[styles.login_bg, { marginTop: Dimensions.get("window").height * 0.08 }]}>
						<Text style={styles.active_tab}>Login</Text>
					</TouchableOpacity>
					{/* END TO SETUP LOGIN VIEW */}
				</View>
			);
		}


		if (segment === 2) {
			return (
				<Content>
					<View style={styles.floating_view}>
					{/* BEGIN TO SETUP FIRSTNAME VIEW */}
						<FloatingLabelInput
							label="First Name"
							value={this.state.firstName}
							keyboardType="default"
							returnKeyType="done"
							maxLength={20}
							selectionColor={'#959595'}
							autoCapitalize="none"
							onChangeText={firstName => this.setState({ firstName })}/>
					{/* END TO SETUP FIRSTNAME VIEW */}
						<View style={{ height: 10 }} />

					{/* BEGIN TO SETUP LASTNAME VIEW */}
						<FloatingLabelInput
							label="Last Name"
							value={this.state.lastName}
							keyboardType="default"
							returnKeyType="done"
							maxLength={20}
							selectionColor={'#959595'}
							autoCapitalize="none"
							onChangeText={lastName => this.setState({ lastName })}/>
					{/* END TO SETUP LASTNAME VIEW */}
						<View style={{ height: 10 }} />

					{/* BEGIN TO SETUP EMAIL VIEW */}
						<FloatingLabelInput
							label="Email"
							value={this.state.emailRegister}
							keyboardType="email-address"
							returnKeyType="done"
							maxLength={40}
							selectionColor={'#959595'}
							autoCapitalize="none"
							onChangeText={emailRegister => this.setState({ emailRegister })}/>
					{/* BEGIN TO SETUP EMAIL VIEW */}

						<View style={{ height: 10 }} />
					{/* BEGIN TO SETUP DATE VIEW */}
						<TouchableOpacity
							onPress={() => {this.refs.datepicker.onPressDate()}}>
							<FloatingLabelInput
								label="Birthday"
								value={this.state.birthday}
								keyboardType="default"
								returnKeyType="done"
								selectionColor={'#959595'}
								maxLength={10}
								onPress={() => {
									this.refs.datepicker.onPressDate();
								}}
								autoCapitalize="none"/>
						</TouchableOpacity>
					{/* END TO SETUP DATE VIEW */}

					{/* BEGIN TO SETUP DATE VIEW */}
						<DatePicker
							ref="datepicker"
							style={{ width: 0, height: 0 }}
							customStyles={{
								dateIcon: {
									width: 0,
									height: 0,
								},
								dateInput: {
									borderWidth: 0,
								},
							}}
							date={this.state.birthday}
							mode="date"
							format="YYYY-MM-DD"
							maxDate={new Date()}
							hideText={true}
							confirmBtnText="Confirm"
							cancelBtnText="Cancel"
							onDateChange={birthday => {
								this.setState({ birthday: birthday });
							}}/>
					{/* END TO SETUP DATE VIEW */}

					{/* BEGIN TO SETUP GENDER VIEW */}
						<View style={{ width: Dimensions.get("window").width * 0.94, alignSelf: 'center' }}>
							<Dropdown
								label="Gender"
								data={this.state.data}
								textColor={'#959595'}
								onChangeText={this.onChangeText}/>
						</View>
					{/* END TO SETUP GENDER VIEW */}

					{/* BEGIN TO SETUP PASSWORD VIEW */}
						<FloatingLabelInput
							label="Password"
							value={this.state.passwordRegister}
							keyboardType="default"
							returnKeyType="done"
							maxLength={15}
							selectionColor={'#959595'}
							autoCapitalize="none"
							secureTextEntry={true}
							onChangeText={passwordRegister =>
								this.setState({ passwordRegister })
							}/>
					 {/* BEGIN TO SETUP PASSWORD VIEW */}
						<View style={{ height: 10 }} />

					 {/* BEGIN TO SETUP CONFIRMPASSWORD VIEW */}
						<FloatingLabelInput
							label="Confirm Password"
							value={this.state.confirmPassword}
							keyboardType="default"
							returnKeyType="done"
							maxLength={15}
							selectionColor={'#959595'}
							autoCapitalize="none"
							secureTextEntry={true}
							onChangeText={confirmPassword =>
								this.setState({ confirmPassword })
							}/>
						{/* END TO SETUP CONFIRMPASSWORD VIEW */}

						{/* BEGIN TO SETUP SIGNUP VIEW */}
							<TouchableOpacity
								onPress={() => alert('SignUp')}
								style={[styles.login_bg,{marginTop: Dimensions.get("window").height * 0.07,marginBottom: Dimensions.get("window").width * 0.02}]}>
								<Text style={styles.active_tab}>Sign Up</Text>
							</TouchableOpacity>
						{/* END TO SETUP SIGNUP VIEW */}
					</View>
				</Content>
			);
		}
	};

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
						<TouchableOpacity
							style={styles.back_arrow}
							onPress={() => this.props.navigation.goBack()}>
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
						{this.state.segment === 1 ? (
							<Text style={styles.text_title}>Login</Text>
						) : (
							<Text style={styles.text_title}>Sign Up</Text>
						)}
					</Body>
				{/* END TO SETUP BODY VIEW */}

				{/* BEGIN TO SETUP RIGHT VIEW */}
					<Right style={styles.right}>
						{this.state.segment === 1 ? (
							<View style={{ flexDirection: 'row' }}>
							{/* BEGIN TO SETUP WISTLIST ICON VIEW */}
								<TouchableOpacity style={styles.heart_bg} onPress={() => alert('Please Login First')}>
									<FontAwesome name="heart" size={8} style={styles.heart_icon} />
								</TouchableOpacity>
							{/* END TO SETUP WISTLIST ICON VIEW */}

							{/* BEGIN TO SETUP CART ICON VIEW */}
								<TouchableOpacity onPress={() => alert('Please Login First')}>
								<SimpleLineIcons
									name="handbag"
									size={18}
									style={styles.bag_icon}/>
								</TouchableOpacity>
							{/* ENS TO SETUP CART ICON VIEW */}
							</View>
						) : (
							<View style={{ flexDirection: 'row' }}>
							{/* BEGIN TO SETUP WISTLIST ICON VIEW */}
								<TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => alert('Please Login First')}>
									<View style={styles.heart_bg}>
										<FontAwesome
											name="heart"
											size={8}
											style={styles.heart_icon}/>
									</View>
									<View style={styles.alert_bg}>
										<Text style={styles.alert_txt}>1</Text>
									</View>
								</TouchableOpacity>
							{/* END TO SETUP WISTLIST ICON VIEW */}

							{/* BEGIN TO SETUP CART ICON VIEW */}
								<TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => alert('Please Login First')}>
									<SimpleLineIcons
										name="handbag"
										size={18}
										style={styles.bag_icon}/>
									<View style={styles.alert_bg}>
										<Text style={styles.alert_txt}>3</Text>
									</View>
								</TouchableOpacity>
							{/* END TO SETUP CART ICON VIEW */}
							</View>
						)}
					</Right>
				{/* END TO SETUP RIGHT VIEW */}
				</Header>
			{/* END TO SETUP HEADER VIEW */}

			{/* BEGIN TO SETUP KEYBORDAWARESCROLL VIEW */}
				<KeyboardAwareScrollView>
					<View style={styles.content_one}>
						<Segment style={styles.segment_tab_sec_one}>
						{/* BEGIN TO SETUP LOGIN VIEW */}
							<Button first
								style={this.state.segment === 1 ? [styles.segment_selected_tab_one,{ borderTopLeftRadius: 5, borderBottomLeftRadius: 5, borderTopRightRadius: 0, borderBottomRightRadius: 0 }] : styles.segment_tab_one}
								active={this.state.segment === 1 ? true : false}
								onPress={() => this.setState({ segment: 1 })}>
								<Text style={this.state.segment === 1 ? styles.active_tab_one : styles.normal_tab_one}>
									Login
								</Text>
							</Button>
						{/* END TO SETUP LOGIN VIEW */}

						{/* BEGIN TO SETUP SIGNUP VIEW */}
							<Button last style={this.state.segment === 1 ? styles.segment_tab_one : [styles.segment_selected_tab_one,{ borderTopRightRadius: 5, borderBottomRightRadius: 5, borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }]}
								active={this.state.segment === 2 ? true : false}
								onPress={() => this.setState({ segment: 2 })}>
								<Text style={this.state.segment === 2 ? styles.active_tab_one : styles.normal_tab_one}>
									Sign Up
								</Text>
							</Button>
						{/* END TO SETUP SIGNUP VIEW */}
						</Segment>

					<View style={[styles.divider, { marginTop: Dimensions.get("window").height * 0.02 }]}/>
						{this._renderActiveComponent()}
					</View>
					</KeyboardAwareScrollView>
				{/* END TO SETUP KEYBORDAWARESCROLL VIEW */}

				<View style={styles.divider} />

				{/* BEGIN TO SETUP FOOTER VIEW */}
				<View style={styles.bottom_view}>{this._renderFooter()}</View>
				{/* END TO SETUP FOOTER VIEW */}
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
		borderBottomWidth: 0,
		...Platform.select({
			ios: {
				paddingTop: Dimensions.get("window").height * 0.02,
				height: Dimensions.get("window").height * 0.1,
			},
			android: {
				paddingTop: Dimensions.get("window").height * 0.02,
				height: Dimensions.get("window").height * 0.1,
			},
		}),
		elevation: 0,
		paddingLeft: Dimensions.get("window").width * 0.05,
		paddingRight: Dimensions.get("window").width * 0.05,
	},
	left: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0)',
	},
	back_arrow: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	body: {
		flex: 2,
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0)',
	},
	text_title: {
		color: 'white',
		fontSize: moderateScale(20),
		alignSelf: 'center',
		fontFamily: font_type.FontLight,
		...Platform.select({
			ios: {},
			android: {
				paddingTop: Dimensions.get("window").width * 0.02,
			},
		}),
	},
	right: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0)',
		...Platform.select({
			ios: {},
			android: {
				height: Dimensions.get("window").height * 0.06,
				marginTop: -(Dimensions.get("window").width * 0.03),
			},
		}),
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
	bag_icon: {
		marginLeft: Dimensions.get("window").width * 0.04,
		color: 'white',
	},
	heart_icon: {
		color: 'white',
		alignSelf: 'center',
	},
	content: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height * 0.8,
	},
	bottom_view: {
		width: Dimensions.get("window").width,
		alignItems: 'center',
		justifyContent: 'center',
		height: Dimensions.get("window").height * 0.097,
	},
	divider: {
		backgroundColor: '#d8d8d8',
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").width * 0.003,
	},
	facebook_btn_bg: {
		backgroundColor: '#0054a6',
		width: Dimensions.get("window").width * 0.94,
		alignSelf: 'center',
		borderRadius: 5,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: Dimensions.get("window").width * 0.025,
		paddingBottom: Dimensions.get("window").width * 0.025,
	},
	login_with_facebook_txt: {
		color: 'white',
		fontSize: moderateScale(17),
		marginLeft: Dimensions.get("window").width * 0.03,
	},
	text_input: {
		height: Dimensions.get("window").height * 0.07,
		alignSelf: 'center',
		width: Dimensions.get("window").width * 0.9,
		fontSize: moderateScale(14),
		fontFamily: font_type.FontLight,
		color: '#959595',
		marginLeft: 15,
		paddingLeft: 15,
		marginTop: Dimensions.get("window").height * 0.02,
		backgroundColor: 'red',
	},
	item: {
		alignSelf: 'center',
		width: Dimensions.get("window").width * 0.94,
		justifyContent: 'center',
	},
	floating_view: {
		alignSelf: 'center',
		width: Dimensions.get("window").width * 0.94,
		justifyContent: 'center',
		marginTop: Dimensions.get("window").height * 0.015,
	},
	forgot_password_txt: {
		color: '#000000',
		fontSize: moderateScale(16),
		fontFamily: font_type.FontLight,
	},
	login_bg: {
		backgroundColor: '#ff6347',
		width: Dimensions.get("window").width * 0.94,
		alignSelf: 'center',
		height: Dimensions.get("window").height * 0.06,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
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
	dropdown: {
		width: Dimensions.get("window").width * 0.94,
		alignSelf: 'center',
		height: Dimensions.get("window").height * 0.07,
		backgroundColor: 'red',
	},
	picker: {
		width: Dimensions.get("window").width * 0.94,
		alignSelf: 'center',
		height: Dimensions.get("window").height * 0.07,
		backgroundColor: 'green',
	},
	active_tab: {
		color: 'white',
		fontFamily: font_type.FontLight,
		fontSize: moderateScale(14),
	},
	content_one: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height * 0.8,
	},
	segment_selected_tab_one: {
		width: Dimensions.get("window").width * 0.47,
		height: Dimensions.get("window").height * 0.05,
		backgroundColor: '#ff6347',
		borderColor: '#ff6347',
		justifyContent: 'center',
		alignSelf: 'center',
		borderRadius: Dimensions.get("window").height * 0.007,
	},
	segment_tab_one: {
		width: Dimensions.get("window").width * 0.47,
		height: Dimensions.get("window").height * 0.05,
		backgroundColor: 'transparent',
		borderColor: '#ff6347',
		justifyContent: 'center',
		alignSelf: 'center',
	},
	segment_tab_sec_one: {
		width: Dimensions.get("window").width * 0.94,
		height: Dimensions.get("window").height * 0.05,
		marginVertical: Dimensions.get("window").height * 0.03,
		borderRadius: Dimensions.get("window").height * 0.007,
		backgroundColor: 'white',
		borderColor: '#ff6347',
		padding: 0,
		borderWidth: 1,
		alignSelf: 'center',
	},
	active_tab_one: {
		color: 'white',
		fontSize: moderateScale(15),
	},
	normal_tab_one: {
		color: '#ff6347',
		fontSize: moderateScale(15),
	},
	forgot_password_bg: {
		alignSelf: 'flex-end',
		marginTop: Dimensions.get("window").height * 0.015,
		marginRight: Dimensions.get("window").height * 0.015,
	},
});
// END TO MAKE STYLE
