import React, { Component } from 'react';
import {Text,View,Image,StatusBar,TouchableOpacity,StyleSheet,Platform,ImageBackground,BackHandler,ScrollView,ListView,I18nManager,AsyncStorage,Dimensions} from 'react-native';
import {Content,Container,Button,Icon,Right,Item,Input,Header,Left,Body,Title,Segment,Label} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
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

export default class MyAccount extends Component {
	constructor(props) {
		super(props);

		const rowHasChanged = (r1, r2) => r1 !== r2;
		const ds = new ListView.DataSource({ rowHasChanged });

		const dataObjects = [
			{
				id: 1,
				title: 'Details',
				itemImg: require('./icon_details.png'),
			},
			{
				id: 2,
				title: 'Order',
				itemImg:require('./icon_order.png'),
			},
			{
				id: 3,
				title: 'Address',
				itemImg: require('./icon_address.png'),
			},
			{
				id: 4,
				title: 'Notification',
				notification: '3',
				itemImg: require('./icon_notification.png'),
			},
			{
				id: 5,
				title: 'Get Reward',
				itemImg: require('./icon_get_reward.png')
			},
			{
				id: 6,
				title: 'Logout',
				itemImg:require('./icon_logout.png'),
			},
		];

		this.state = {
			dataSource: ds.cloneWithRows(dataObjects),
		};
	}



	//BEGIN TO SETUP ALERTITEMNAME
	alertItemName = rowData => {
		var name = rowData.title;

		if (name === 'Details') {
			alert('Details Button Click')
		} else if (name === 'Order') {
			alert('Order Button Click')
		} else if (name === 'Address') {
			alert('Address Button Click')
		} else if (name === 'Notification') {
			alert('Notification Button Click')
		} else if (name === 'Get Reward') {
			alert('GetReward Button Click')
		} else if (name === 'Logout') {
			alert('Logout Button Click')
		}
	};
	//END TO SETUP ALERTITEMNAME

	//BEGIN TO SETUP HANDLEBAGNAVIGATION
	_handleBagNavigation() {
		alert('Cart Click')
	}
	//END TO SETUP HANDLEBAGNAVIGATION

	//BEGIN TO SETUP HANDLEWISHLISTNAVIGATION
	_handleWishListNavigation() {
		alert('WishList Click')
	}
	//END TO SETUP HANDLEWISHLISTNAVIGATION

	//BEGIN TO SETUP RENDERITEM
	_renderItem(rowData) {
		return (
			<TouchableOpacity style={styles.row_main} onPress={() => this.alertItemName(rowData)}>
			{/* BEGIN TO SETUP IMAGE AND TEXT VIEW */}
				<View style={styles.image_container}>
					<Image source={rowData.itemImg} style={styles.item_img_style} />
					{rowData.notification ? (
						<View style={styles.notification_circle}>
							<Text style={styles.notification}>3</Text>
						</View>
					) : null}
				</View>
			{/* END TO SETUP IMAGE AND TEXT VIEW */}
				<Text style={styles.item_text}>{rowData.title}</Text>
			</TouchableOpacity>
		);
	}


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
								size={moderateScale(30)}
								color="white"
								style={{paddingRight: 20}}/>
						</TouchableOpacity>
					</Left>
				{/* END TO SETUP LEFT VIEW */}

				{/* BEGIN TO SETUP BODY VIEW */}
					<Body style={styles.body}>
						<Text style={styles.text_title}>MyAccount</Text>
					</Body>
				{/* END TO SETUP BODY VIEW */}

				{/* BEGIN TO SETUP RIGHT VIEW */}
					<Right style={styles.right}>
						<View style={{ flexDirection: 'row' }}>
						{/* BEGIN TO SETUP WISH VIEW */}
							<TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this._handleWishListNavigation()}>
								<View style={styles.heart_bg}>
									<FontAwesome name="heart" size={moderateScale(8)} style={styles.heart_icon}/>
								</View>
								<View style={styles.alert_bg}>
									<Text style={styles.alert_txt}>1</Text>
								</View>
							</TouchableOpacity>
						{/* END TO SETUP WISH VIEW */}

						{/* BEGIN TO SETUP CART VIEW */}
							<TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this._handleBagNavigation()}>
								<SimpleLineIcons name="handbag" size={moderateScale(18)} style={styles.bag_icon}/>
								<View style={styles.alert_bg}>
									<Text style={styles.alert_txt}>3</Text>
								</View>
							</TouchableOpacity>
						{/* END TO SETUP CART VIEW */}
						</View>
					</Right>
				{/* END TO SETUP RIGHT VIEW */}
				</Header>
			{/* END TO SETUP HEADER VIEW */}

			{/* BEGIN TO SETUP LIST VIEW */}
				<View>
					<ListView
						contentContainerStyle={styles.content}
						dataSource={this.state.dataSource}
						renderRow={this._renderItem.bind(this)}
						enableEmptySections
						scrollEnabled={true}
						pageSize={4}/>
				</View>
			{/* END TO SETUP LIST VIEW */}
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
	body: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0)',
	},
	text_title: {
		color: 'white',
		fontSize: moderateScale(18),
		alignSelf: 'center',
		fontFamily: font_type.FontLight,
	},
	right: {
		flex: 0.5,
		alignItems: 'center',
	},
	back_arrow: {
		justifyContent: 'center',
		alignItems: 'center',
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
		alignSelf: 'center',
	},
	alert_bg: {
		width: Dimensions.get("window").width * 0.03,
		height: Dimensions.get("window").width * 0.03,
		borderRadius: Dimensions.get("window").width * 0.015,
		backgroundColor: '#000000',
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
		color: 'white',
	},
	content: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height * 0.9,
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'flex-start',
		alignContent: 'flex-start',
		justifyContent: 'space-between',
	},
	row_main: {
		width: Dimensions.get("window").width * 0.5,
		height: Dimensions.get("window").height * 0.3,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#dcdcdc',
		backgroundColor: 'white',
		borderWidth: 0.5,
	},
	image_container: {
		width: Dimensions.get("window").height * 0.065,
		height: Dimensions.get("window").height * 0.065,
		justifyContent: 'center',
		alignItems: 'center',
	},
	item_img_style: {
		width: Dimensions.get("window").height * 0.055,
		height: Dimensions.get("window").height * 0.055,
		resizeMode: 'contain',
	},
	item_text: {
		color: '#000000',
		fontFamily: font_type.FontLight,
		fontSize: moderateScale(16),
		marginTop: Dimensions.get("window").height * 0.03,
	},
	notification_circle: {
		position: 'absolute',
		top: 0,
		left: Dimensions.get("window").height * 0.045,
		width: Dimensions.get("window").height * 0.026,
		height: Dimensions.get("window").height * 0.026,
		borderRadius: Dimensions.get("window").height * 0.013,
		backgroundColor: '#000000',
		justifyContent: 'center',
		alignItems: 'center',
	},
	notification: {
		color: 'white',
		fontFamily: font_type.FontLight,
		fontSize: moderateScale(12),
		backgroundColor: 'transparent',
	},
});
// END TO MAKE STYLE
