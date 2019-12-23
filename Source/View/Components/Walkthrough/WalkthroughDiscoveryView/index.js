import React, { PropTypes, Component } from "react";
import {Text,View,Dimensions,Image,StyleSheet,TouchableOpacity,ImageBackground,StatusBar,Platform,Modal,BackHandler,I18nManager} from "react-native";
import {Container,Content,Header,Body,Right,Left,Button} from "native-base";
import Swiper from "react-native-swiper";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";

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

export default class WalkthroughDiscovery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true
    };
  }

  render() {
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
        title: "Lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: 2,
        title: "Lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: 3,
        title: "Lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: 4,
        title: "Lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ];

    return (
      <Container style={styles.container}>
      {/* BEGIN TO SETUP HEADER VIEW */}
        <Header style={styles.header}>
        {/* BEGIN TO SETUP LEFFT VIEW */}
          <Left style={styles.left}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.back_arrow}>
              <Ionicons
                name={
                  I18nManager.isRTL
                    ? "ios-arrow-round-forward"
                    : "ios-arrow-round-back"
                }
                size={30}
                color="#ffffff"/>
            </TouchableOpacity>
          </Left>
        {/* END TO SETUP LEFT VIEW */}

        {/* BEGIN TO SETUP BODY VIEW */}
          <Body style={styles.body}>
            <Text style={styles.text_home}>Discovery</Text>
          </Body>
        {/* END TO SETUP BODY VIEW */}

        {/* BEGIN TO SETUP RIGHT VIEW */}
          <Right style={styles.right}>
            <TouchableOpacity onPress={() => alert("search button click")}>
              <Ionicons name="ios-search" size={20} color="white" />
            </TouchableOpacity>
          </Right>
        {/* END TO SETUP RIGHT VIEW */}
        </Header>
      {/* END TO SETUP HEADER VIEW */}
        <ImageBackground style={styles.main} source={GlobalInclude.Image4} />

      {/* BEGIN TO SETUP MODAL VIEW */}
        <Modal
          visible={this.state.modalVisible}
          transparent={true}
          onRequestClose={() => null}>
          <View style={styles.modal_style}>
            <View style={styles.popup_bg_image}>
            {/* BEGIN TO SETUP IMAGES VIEW */}
              <Image style={styles.shadow_style} source={GlobalInclude.Image1} />
              <Image style={styles.logo_style} source={GlobalInclude.Image3} />
            {/* END TO SETUP IMAGES VIEW */}

            {/* BEGIN TO SETUP SWIPER VIEW */}
              <Swiper
                ref="swiper"
                showsButtons={false}
                autoplay={true}
                autoplayTimeout={2.5}
                active_dot={<View style={styles.active_dot} />}
                dot={<View style={styles.dot} />}>
                {data.map((item, index) => {
                  return (
                    <View style={styles.slider} key={index}>
                      <Text style={styles.headertext}>{item.title}</Text>
                      <Text style={styles.desctext}>{item.description}</Text>
                    </View>
                  );
                })}
              </Swiper>
            {/* END TO SETUP SWIPER VIEW */}

              <View style={styles.social_buttons}>
                <Text style={styles.ready_to_get_started}>
                  READY TO GET STARTED?
                </Text>

              {/* BEGIN TO SETUP LOGIN WITH FACEBOOK VIEW */}
                <TouchableOpacity style={styles.lonin_with_fbbg} onPress={() => alert("LogIn with Facebook button clicked.")}>
                  <FontAwesome name="facebook" size={20} color="white" />
                  <Text style={styles.login_withfb_twittertext}>
                    Login with Facebook
                  </Text>
                </TouchableOpacity>
              {/* END TO SETUP LOGIN WITH FACEBOOK VIEW */}

              {/* BEGIN TO SETUP LOGIN WITH TWITTER VIEW */}
                <TouchableOpacity style={styles.lonin_with_twitterbg} onPress={() => alert("LogIn with Twitter button clicked.")}>
                  <FontAwesome name="twitter" size={20} color="white" />
                  <Text style={styles.login_withfb_twittertext}>
                    Login with Twitter
                  </Text>
                </TouchableOpacity>
              {/* END TO SETUP LOGIN WITH TWITTER VIEW */}
              </View>
            </View>
          {/* BEGIN TO SETUP CLOSE VIEW */}
            <TouchableOpacity onPress={() => this.setState({ modalVisible: false })} style={styles.close_icon_bg}>
              <FontAwesome name="close" size={15} color="white" />
            </TouchableOpacity>
          {/* END TO SETUP CLOSE VIEW */}
          </View>
        </Modal>
      </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  back_arrow:{
    width: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  header: {
		backgroundColor: '#2d324f',
		height: Dimensions.get("window").height * 0.1,
		borderBottomWidth: 0,
		paddingTop: (Dimensions.get("window").height * 0.03),
		elevation: 0,
		paddingLeft: (Dimensions.get("window").width * 0.05),
    paddingRight: (Dimensions.get("window").width * 0.05),
	},
	left: {
		flex: 0.5
	},
  body: {
    flex: 3,
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0)'
	},
  right: {
		flex: 0.5
	},
  text_home: {
    color:'white',
    fontSize:moderateScale(18),
    fontFamily:font_type.FontBold,
  },
  main:{
    width: Dimensions.get("window").width,
    height: (Dimensions.get("window").height * 0.90),
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal_style: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    alignItems: 'center',
    backgroundColor: "#0006",
  	elevation: 5,
  	shadowColor: '#000',
  	shadowOpacity: 0.4,
  	shadowRadius: 8,
  	shadowOffset: {
  		height: 10,
  		width: 0
  	},
  },
  popup_bg_image: {
    width: (Dimensions.get("window").width * 0.88),
    height: (Dimensions.get("window").height * 0.74),
    marginTop: (Dimensions.get("window").height * 0.16),
    borderRadius: 8,
    backgroundColor: '#0691ce',
  },
  logo_style: {
    width: (Dimensions.get("window").width * 0.35),
    height: (Dimensions.get("window").height * 0.18),
    alignSelf: 'center',
    marginTop: (Dimensions.get("window").height * 0.08),
    resizeMode: 'contain'
  },
  headertext: {
  	fontFamily: font_type.FontBold,
  	textAlign:'center',
  	fontSize: moderateScale(22),
  	color: 'white',
  },
  desctext: {
  	fontFamily: font_type.FontLight,
  	textAlign:'center',
  	alignSelf:'center',
  	fontSize: moderateScale(10),
  	width :(Dimensions.get("window").width) * .72,
  	color:'#b5e4f3',
  	marginTop: (Dimensions.get("window").height * 0.015)
  },
  dot:{
    backgroundColor:'#51b4dd',
    width:  (Dimensions.get("window").width * 0.016),
		height: (Dimensions.get("window").width * 0.016),
		borderRadius: (Dimensions.get("window").width * 0.008),
		marginLeft: (Dimensions.get("window").width * 0.003),
		marginRight: (Dimensions.get("window").width * 0.003),
  },
  active_dot:{
    backgroundColor:'white',
    width:  (Dimensions.get("window").width * 0.016),
		height: (Dimensions.get("window").width * 0.016),
		borderRadius: (Dimensions.get("window").width * 0.008),
		marginLeft: (Dimensions.get("window").width * 0.003),
		marginRight: (Dimensions.get("window").width * 0.003),
  },
  slider: {
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: (Dimensions.get("window").height  *  0.015)
  },
  ready_to_get_started: {
    textAlign : 'center',
    fontSize : moderateScale(14),
    fontFamily : font_type.FontBold,
    color : "#6f6f6f",
    margin: (Dimensions.get("window").width * 0.035)
  },
  login_withfb_twittertext: {
    color: 'white',
    textAlign: "center",
    fontSize: moderateScale(15),
    padding: (Dimensions.get("window").width * 0.00),
    left: (Dimensions.get("window").width * 0.015),
    fontFamily: font_type.FontBold,
  },
  shadow_style: {
    width: (Dimensions.get("window").width * 0.88),
    height: (Dimensions.get("window").height * 0.6),
    position: 'absolute',
    resizeMode: 'stretch',
    borderRadius: 8
  },
  lonin_with_fbbg: {
    backgroundColor: "#0054a6",
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: (Dimensions.get("window").width * 0.77),
    height: (Dimensions.get("window").height * 0.07),
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: (Dimensions.get("window").height * 0.016),
  },
  lonin_with_twitterbg: {
    backgroundColor: "#0691ce",
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: (Dimensions.get("window").width * 0.77),
    height: (Dimensions.get("window").height * 0.07),
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: (Dimensions.get("window").height * 0.03),
  },
  social_buttons: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: (Dimensions.get("window").height * 0.006),
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  close_icon_bg: {
    height:(Dimensions.get("window").height * 0.040),
    width:(Dimensions.get("window").height * 0.040),
    borderRadius: (Dimensions.get("window").height * 0.02),
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: 'white',
    marginTop: (Dimensions.get("window").height * 0.15),
    marginLeft: (Dimensions.get("window").width * 0.035),
    position: 'absolute',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: (Dimensions.get("window").height * 0.001)
  }
});
// END TO MAKE STYLE
