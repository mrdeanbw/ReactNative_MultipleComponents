import React, { Component } from 'react';
import {Text,View,Image,StatusBar,TouchableOpacity,Platform,I18nManager,Modal,StyleSheet,Dimensions} from 'react-native';
import {Content,Container,Right,Header,Left,Body,Title,} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CheckBox from 'react-native-check-box';
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

export default class Address extends Component {
	constructor(props) {
		super(props);
    // BEGIN TO SETUP STATE
		this.state = {
			name: '',
			number: '',
			address: '',
			modalVisible: false,
			modalCategoryVisible: false,
			modalSortVisible: false,
			selectedLots: '2',
			selectedLots: '1',
			data: [
				{
					id: 1,
					UserName: 'Lorem Ipsum',
					UserNumber: '90XX90XX90',
					UserAddress: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
				},
				{
					id: 2,
					UserName: 'Lorem Ipsum',
					UserNumber: '91XX91XX91XX',
					UserAddress: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
				},
			],
		};
    // END TO SET STATE
	}




	//BEGIN TO SETUP ONCHECKBOXPRESS
	onCheckBoxPress(id) {
		this.setState({
			selectedLots: id,
		});
	}
	//END TO SETUP ONCHECKBOXPRESS

	//BEGIN TO SETUP TOGGLESORTMODAL
	toggleSortModal(visible) {
		this.setState({ modalSortVisible: visible });
		console.log('true');
	}
	//END TO SETUP TOGGLESORTMODAL

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
						<Text style={styles.text_title}>Address</Text>
					</Body>
				{/* END TO SETUP BODY VIEW */}

				{/* BEGIN TO SETUP RIGHT VIEW */}
					<Right style={styles.right}>
						<TouchableOpacity
							style={styles.back_arrow}
							onPress={() => {this.toggleSortModal(true)}}>
							<Ionicons name="md-add" size={32} color="white" />
						</TouchableOpacity>
					</Right>
				{/* END TO SETUP RIGHT VIEW */}
				</Header>
			{/* END TO SETUP HEADER VIEW */}


				<View style={{ height: Dimensions.get("window").height * 0.9, width: Dimensions.get("window").width }}>
				{/* BEGIN TO SETUP SHIPPING ADDRESS VIEW */}
					<View style={styles.shipping_address_view}>
						<Text style={styles.shipping_address_text}>SHIPPING ADDRESS</Text>
					</View>
				{/* END TO SETUP SHIPPING ADDRESS VIEW */}
					<View style={styles.shipping_address_divider} />

					<Content>
						{this.state.data.map((item, index) => {
							return (
								<TouchableOpacity key={index} onPress={() => this.onCheckBoxPress(item.id)}>
									<View style={styles.row_main}>
										<View style={styles.address_text_bg}>
										{/* BEGIN TO SETUP USERNAME VIEW */}
											<Text style={[styles.address_text,{
														color: '#111111',
														paddingBottom: Dimensions.get("window").height * 0.01,
													}]}>
												{item.UserName}
											</Text>
										{/* END TO SETUP USERNAME VIEW */}

										{/* BEGIN TO SETUP USERNUMBER VIEW */}
											<Text style={[styles.address_text,{
														color: '#959595',
														paddingBottom: Dimensions.get("window").height * 0.01,
													}]}>
												{item.UserNumber}
											</Text>
										{/* END TO SETUP USERNUMBER VIEW */}

										{/* BEGIN TO SETUP USERADDRESS VIEW */}
											<Text style={[styles.address_text, { color: '#959595' }]}>
												{item.UserAddress}
											</Text>
										{/* END TO SETUP USERADDRESS VIEW */}
										</View>

									{/* BEGIN TO SETUP CHECKBOX VIEW */}
										{this.state.selectedLots == item.id ? (
											<CheckBox
												isChecked={true}
												checkBoxColor={'#fff'}
												checkedImage={
													<FontAwesome
														name="check-circle"
														size={25}
														color="#000000"/>
												}/>
										) : null}
									{/* END TO SETUP CHECKBOX VIEW */}
									</View>
									<View style={styles.address_divider} />
								</TouchableOpacity>
							);
						})}
					</Content>
				</View>

			{/* BEGIN TO SETUP MODAL VIEW */}
				<Modal
					style={styles.modal_view}
					transparent={true}
					visible={this.state.modalSortVisible}
					onRequestClose={() => {
						this.state.modalSortVisible(false);
					}}>
					<View style={styles.model}>
						<View style={styles.modell}>
							<View style={styles.modal_header}>
							{/* BEGIN TO SETUP CANCEL VIEW */}
								<TouchableOpacity onPress={() => {this.setState({ modalSortVisible: false })}}>
									<Text style={styles.cancel_apply_txt}>Cancel</Text>
								</TouchableOpacity>
							{/* END TO SETUP CANCEL VIEW */}

							{/* BEGIN TO SETUP ADDRESS VIEW */}
								<Text style={styles.cancel_apply_txttt}>Address</Text>
							{/* END TO SETUP ADDRESS VIEW */}

							{/* BEGIN TO SETUP SAVE VIEW */}
								<TouchableOpacity onPress={() => {this.setState({ modalSortVisible: false })}}>
									<Text style={styles.cancel_apply_txtt}>Save</Text>
								</TouchableOpacity>
							{/* END TO SETUP SAVE VIEW */}
							</View>

							<View style={styles.floating_view}>

							{/* BEGIN TO SETUP NAME VIEW */}
								<FloatingLabelInput
									label="Name"
									value={this.state.name}
									keyboardType="default"
									returnKeyType="done"
									maxLength={30}
									selectionColor={'#959595'}
									autoCapitalize="none"
									onChangeText={name => this.setState({ name })}/>
							{/* END TO SETUP NAME VIEW */}

								<View style={{ height: 10 }} />

							{/* BEGIN TO SETUP NUMBER VIEW */}
								<FloatingLabelInput
									value={this.state.number}
									label="Number"
									keyboardType="phone-pad"
									returnKeyType="done"
									maxLength={10}
									selectionColor={'#959595'}
									autoCapitalize="none"
									onChangeText={number => this.setState({ number })}/>
							{/* END TO SETUP NUMBER VIEW */}

								<View style={{ height: 10 }} />
							{/* BEGIN TO SETUP ADDRESS VIEW */}
								<FloatingLabelInput
									label="Address"
									value={this.state.address}
									keyboardType="default"
									returnKeyType="done"
									maxLength={40}
									selectionColor={'#959595'}
									autoCapitalize="none"
									onChangeText={address => this.setState({ address })}/>
							{/* END TO SETUP ADDRESS VIEW */}
							</View>
						</View>
					</View>
				</Modal>
			{/* END TO SETUP MODAL VIEW */}
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
		backgroundColor: 'rgba(0,0,0,0)',
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
			ios: {},
			android: {
				paddingTop: Dimensions.get("window").width * 0.02,
			},
		}),
	},
	shipping_address_view: {
		backgroundColor: '#f3f3f3',
		...Platform.select({
			ios: {
				paddingTop: Dimensions.get("window").height * 0.007,
				paddingBottom: Dimensions.get("window").height * 0.007,
			},
			android: {
				paddingTop: Dimensions.get("window").height * 0.01,
				paddingBottom: Dimensions.get("window").height * 0.01,
			},
		}),
		paddingLeft: Dimensions.get("window").width * 0.05,
		paddingRight: Dimensions.get("window").width * 0.05,
	},
	shipping_address_text: {
		color: '#959595',
		fontSize: moderateScale(16),
		fontFamily: font_type.FontLight,
		textAlign: 'left',
	},
	shipping_address_divider: {
		height: Dimensions.get("window").height * 0.003,
		backgroundColor: '#e1e1e1',
	},
	address_text: {
		fontSize: moderateScale(16),
		fontFamily: font_type.FontLight,
		textAlign: 'left',
	},
	address_divider: {
		height: Dimensions.get("window").height * 0.001,
		backgroundColor: '#e1e1e1',
		marginLeft: Dimensions.get("window").height * 0.022,
		marginRight: Dimensions.get("window").height * 0.022,
	},
	row_main: {
		padding: Dimensions.get("window").height * 0.022,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	address_text_bg: {
		width: Dimensions.get("window").width * 0.85,
	},
	modal_view: {
		width: Dimensions.get("window").width * 0.4,
		height: Dimensions.get("window").height * 0.3,
		backgroundColor: 'green',
		justifyContent: 'center',
		alignSelf: 'center',
		alignItems: 'center',
	},
	model: {
		height: Dimensions.get("window").height,
		width: Dimensions.get("window").width,
		backgroundColor: '#0006',
		justifyContent: 'center',
		alignSelf: 'center',
	},
	modell: {
		width: Dimensions.get("window").width * 0.9,
		alignSelf: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
	},
	modal_header: {
		backgroundColor: '#ebebeb',
		justifyContent: 'space-between',
		flexDirection: 'row',
		paddingBottom: Dimensions.get("window").width * 0.024,
		paddingTop: Dimensions.get("window").width * 0.024,
		paddingLeft: Dimensions.get("window").width * 0.03,
		paddingRight: Dimensions.get("window").width * 0.03,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
	},
	cancel_apply_txt: {
		color: '#000000',
		fontSize: moderateScale(15),
		fontFamily: font_type.FontLight,
	},
	cancel_apply_txtt: {
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		paddingLeft: Dimensions.get("window").width * 0.23,
		color: '#000000',
	},
	cancel_apply_txttt: {
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		paddingLeft: Dimensions.get("window").width * 0.24,
		color: '#000000',
	},
	floating_view: {
		alignSelf: 'center',
		width: Dimensions.get("window").width * 0.85,
		justifyContent: 'center',
		paddingTop: Dimensions.get("window").height * 0.03,
		marginBottom: Dimensions.get("window").height * 0.04,
	},
});
// END TO MAKE STYLE
