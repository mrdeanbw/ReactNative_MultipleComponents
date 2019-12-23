import React, { Component } from 'react';
import {Text,View,Image,StatusBar,TouchableOpacity,Platform,BackHandler,I18nManager,AsyncStorage,StyleSheet,Dimensions} from 'react-native';
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

export default class OrderHistory extends Component {
	constructor(props) {
		super(props);
    // BEGIN TO SET STATE
		this.state = {
			data: [
				{
					id: 1,
					OrderID: 'Lorem Ipsum',
					Date: '01/2019',
					Product: 'Lorem Ipsum',
					Price: '100.00',
					Status: 'Lorem Ipsum',
				},
				{
					id: 2,
					OrderID: 'Lorem Ipsum',
					Date: '08/2019',
					Product: 'Lorem Ipsum',
					Price: '$180.00',
					Status: 'Lorem Ipsum',
				},
				{
					id: 3,
					OrderID: 'Lorem Ipsum',
					Date: '02/2018',
					Product: 'Lorem Ipsum',
					Price: '$120.00',
					Status: 'Lorem Ipsum',
				},
			],
		};
    // END TO SET STATE
	}

  //BEGIN TO SETUP HANDLEBAGNAVIGATION
	_handleBagNavigation() {
	   alert('Cart Click')
	}
  //END TO SETUP HANDLEBAGNAVIGATION

  //BEGIN TO SETUP HANDLEWISHLISTNAVIGATION
	_handleWishListNavigation() {
     alert('Wishlist Click')
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
							<FontAwesome name={I18nManager.isRTL ? 'angle-right' : 'angle-left'} size={30} color="white" style={{paddingRight: 20}}/>
						</TouchableOpacity>
					</Left>
        {/* END TO SETUP LEFT VIEW */}

        {/* BEGIN TO SETUP BODY VIEW */}
					<Body style={styles.body}>
						<Text style={styles.text_title}>Order</Text>
					</Body>
        {/* END TO SETUP BODY VIEW */}

        {/* BEGIN TO SETUP RIGHT VIEW */}
					<Right style={styles.right}>
          {/* BEGIN TO SETUP WISHICON VIEW */}
						<TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this._handleWishListNavigation()}>
							<View style={styles.heart_bg}>
								<FontAwesome name="heart" size={8} style={styles.heart_icon} />
							</View>
							<View style={styles.alert_bg}>
								<Text style={styles.alert_txt}>1</Text>
							</View>
						</TouchableOpacity>
          {/* END TO SETUP WISHICON VIEW */}

          {/* BEGIN TO SETUP CARTICON VIEW */}
						<TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this._handleBagNavigation()}>
							<SimpleLineIcons name="handbag" size={18} style={styles.bag_icon}/>
							<View style={styles.alert_bg}>
								<Text style={styles.alert_txt}>3</Text>
							</View>
						</TouchableOpacity>
          {/* END TO SETUP CARTICON VIEW */}
					</Right>
        {/* END TO SETUP RIGHT VIEW */}
				</Header>
      {/* END TO SETUP HEADER VIEW */}

				<Content style={styles.content}>
					{this.state.data.map((item, index) => {
						return (
							<View style={item.id === 1 ? [styles.row_bg, { marginTop: Dimensions.get("window").width * 0.05 }] : styles.row_bg}
								key={index}>
              {/* BEGIN TO SETUP ORDERID VIEW */}
								<View style={styles.row_field}>
									<Text style={styles.field_label_txt}>Order ID</Text>
									<Text style={styles.field_description_txt}>{item.OrderID}</Text>
								</View>
              {/* END TO SETUP ORDERID VIEW */}
								<View style={styles.row_list_divider} />

              {/* BEGIN TO SETUP DATE VIEW */}
								<View style={styles.row_field}>
									<Text style={styles.field_label_txt}>Date</Text>
									<Text style={styles.field_description_txt}>{item.Date}</Text>
								</View>
              {/* END TO SETUP DATE VIEW */}
								<View style={styles.row_list_divider} />

              {/* BEGIN TO SETUP PRODUCT VIEW */}
								<View style={styles.row_field}>
									<Text style={styles.field_label_txt}>Product</Text>
									<Text numberOfLines={1} style={styles.field_description_txt}>
										{item.Product}
									</Text>
								</View>
              {/* END TO SETUP PRODUCT VIEW */}
								<View style={styles.row_list_divider} />

              {/* BEGIN TO SETUP PRICE VIEW */}
								<View style={styles.row_field}>
									<Text style={styles.field_label_txt}>Price</Text>
									<Text style={styles.field_description_txt}>{item.Price}</Text>
								</View>
              {/* END TO SETUP PRICE VIEW */}
								<View style={styles.row_list_divider} />

              {/* BEGIN TO SETUP STATUS VIEW */}
								<View style={styles.row_field}>
									<Text style={styles.field_label_txt}>Status</Text>
									<Text style={item.Status == 'Complete' ? [styles.field_description_txt, { color: '#ffc700' }] : [styles.field_description_txt, { color: '#ff0000' }]}>
										{item.Status}
									</Text>
								</View>
              {/* END TO SETUP STATUS VIEW */}
							</View>
						);
					})}
				</Content>
			</Container>
		);
	}
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
	container: {
		height: Dimensions.get("window").height,
		width: Dimensions.get("window").width,
		backgroundColor: '#f3f3f3'
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
	content: {
		height: Dimensions.get("window").height * 0.9,
		width: Dimensions.get("window").width,
		backgroundColor: '#f3f3f3'
	},
  bag_icon: {
		marginLeft: Dimensions.get("window").width * 0.04,
		color: 'white'
	},
  heart_icon: {
		color: 'white',
		alignSelf: 'center'
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
	row_bg: {
		width: Dimensions.get("window").width * 0.9,
		alignSelf: 'center',
		backgroundColor: 'white',
		marginBottom: (Dimensions.get("window").width * 0.05),
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "#ebebeb"
	},
  row_field: {
		flexDirection: 'row',
		marginLeft: Dimensions.get("window").width * 0.03,
		marginRight: Dimensions.get("window").width * 0.03,
		marginTop: Dimensions.get("window").width * 0.04,
		marginBottom: Dimensions.get("window").width * 0.04,
	},
	row_list_divider: {
		width: Dimensions.get("window").width * 0.87,
		height: 1,
		backgroundColor: "#E1E1E1",
		marginLeft: Dimensions.get("window").width * 0.03
	},
	field_label_txt: {
		color: "#959595",
		fontSize: moderateScale(15),
		fontFamily: font_type.FontLight,
		width: Dimensions.get("window").width * 0.25,
		textAlign: 'left'
	},
  field_description_txt: {
		color: "#111111",
		fontSize: moderateScale(15),
		fontFamily: font_type.FontLight,
		width: Dimensions.get("window").width * 0.55,
		marginLeft: Dimensions.get("window").width * 0.03,
		textAlign: 'right',
	}
});
// END TO MAKE STYLE
