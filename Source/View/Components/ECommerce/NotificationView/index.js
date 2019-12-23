import React, { Component } from 'react';
import {View,Text,Image,StatusBar,Platform,TouchableOpacity,BackHandler,I18nManager,AsyncStorage,StyleSheet,Dimensions} from 'react-native';
import {Container,Button,Right,Left,ListItem,Content,Body,Header} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';


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

export default class Notification extends Component {


	constructor(props) {
		super(props);
		this.state =
		{
			screenLink: ""
		};
	}

	componentWillMount() {
		AsyncStorage.multiGet(["ArrivedForNotification"]).then(data => {
      this.setState({ screenLink: data[0][1] });
    });
	}

	render() {
		const { screenLink } = this.state;

		// BEGIN TO SETUP STATUSBAR VIEW
		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('transparent',true);
			StatusBar.setTranslucent(true);
		}
		// END TO SETUP STATUSBAR VIEW

		var data = [
			{
				id: 1,
				name: 'Lorem Ipsum',
				time: '2 days ago',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			},
			{
				id: 2,
				name: 'Lorem Ipsum',
				time: '3 days ago',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			},
			{
				id: 3,
				name: 'Lorem Ipsum',
				time: '4 days ago',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			},
		];

		return (
			<Container style={styles.main}>
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
							<Text style={styles.text_title}>Notification</Text>
						</Body>
				  {/* END TO SETUP HEADER VIEW */}
					<Right style={styles.right} transparent />
				</Header>
			 {/* END TO SETUP HEADER VIEW */}
				<Content>
					{data.map((item, index) => {
						return (
							<View style={styles.row_bg} key={index}>
							{/* BEGIN TO SETUP IMAGE AND NAME AND TIME VIEW */}
								<View style={styles.row_profile_name_time}>
									<Image source={require('./icon_notification_profile.png')} style={styles.image_notification}/>
									<View style={styles.row_name_time}>
										<Text style={styles.name_txt}>{item.name}</Text>
										<Text style={styles.time_txt}>{item.time}</Text>
									</View>
								</View>
							 {/* END TO SETUP IMAGE AND NAME AND TIME VIEW */}

							 {/* BEGIN TO SETUP DESCRIPTION VIEW */}
								<Text style={styles.description_txt}>{item.description}</Text>
							 {/* END TO SETUP DESCRIPTION VIEW */}
								<View style={styles.divider} />
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
    alignItems: 'center',
  },
  main: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: 'white',
    flexDirection: 'column'
  },
	row_bg: {
    width: Dimensions.get("window").width,
    backgroundColor: 'white',
  },
	row_profile_name_time: {
    width: Dimensions.get("window").width * 0.92,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: Dimensions.get("window").width * 0.03,
    marginBottom: Dimensions.get("window").width * 0.03
  },
	image_notification: {
    width: Dimensions.get("window").width * 0.12,
    height: Dimensions.get("window").width * 0.12,
    borderRadius: Dimensions.get("window").width * 0.06,
    resizeMode: 'contain'
  },
	row_name_time: {
    marginLeft:  Dimensions.get("window").width * 0.04,
    flexDirection: 'column',
    justifyContent: 'center'
  },
	name_txt: {
    color: 'black',
    fontSize: moderateScale(15),
    fontFamily: font_type.FontLight,
    textAlign: 'left'
  },
	time_txt: {
    color: "#959595",
    fontSize: moderateScale(15),
    fontFamily: font_type.FontLight,
    textAlign: 'left'
  },
	description_txt: {
    color: "#959595",
    fontSize: moderateScale(14),
    fontFamily: font_type.FontLight,
    width: Dimensions.get("window").width * 0.92,
    alignSelf: 'center',
    textAlign: 'left'
  },
	back_arrow: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	divider: {
    height: 1,
    width: Dimensions.get("window").width,
    backgroundColor: "#e1e1e1",
    marginTop: (Dimensions.get("window").width * 0.03)
  }
});
// END TO MAKE STYLE
