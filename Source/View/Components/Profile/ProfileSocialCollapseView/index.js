
import React, { Component } from 'react';
import {Text,View,Image,StatusBar,Platform,ImageBackground,Dimensions,StyleSheet,TouchableOpacity,ListView,ScrollView,Alert,I18nManager} from 'react-native';
import {Container,Button,Icon,Right,Item,Input,Header,Footer,FooterTab,Left,Body,Title,Content,Form,Label} from 'native-base';
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Zocial from 'react-native-vector-icons/Zocial';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


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
// END TO SETUP FONT-TYPE AND FONT-SIZ



  export default class ProfileSocialCollapse extends Component {

    constructor(props) {
      super(props);
      // BEGIN TO SETUP STATE
      this.state = {};
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
        <Container style={styles.main}>
      {/* BEGIN TO SETUP HEADER VIEW */}
        <Header style={styles.header}>
        {/* BEGIN TO SETUP LEFT VIEW */}
            <Left style={styles.left}>
              <TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
                <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={25} color='white'/>
              </TouchableOpacity>
            </Left>
         {/* END TO SETUP LEFT VIEW */}

         {/* BEGIN TO SETUP BODY VIEW */}
            <Body style={styles.body}>
              <Text style={styles.textTitle}>Profiles</Text>
            </Body>
          {/* END TO SETUP BODY VIEW */}

          {/* BEGIN TO SETUP RIGHT VIEW */}
            <Right style={styles.right}>
            </Right>
          {/* END TO SETUP RIGHT VIEW */}
          </Header>
        {/* END TO SETUP HEADER VIEW */}

          <Content style={styles.slidesec}>
            <View style={styles.profile_sec}>
            {/* BEGIN TO SETUP IMAGE AND TITLE AND POST VIEW */}
              <View style={styles.profile_container}>
                <Image source={GlobalInclude.Image7} style={styles.cover_image}/>
                <LinearGradient locations={[0,1]} colors={['transparent', 'rgba(0,0,0,0.75)']} style={styles.profile_info}>
                  <Text style={styles.profile_title}>Lorem ipsum</Text>
                  <Text style={styles.profile_post}>Lorem ipsum</Text>
                </LinearGradient>
                </View>
            {/* END TO SETUP IMAGE AND TITLE AND POST VIEW */}

            {/* BEGIN TO SETUP LOCATION AND EMAIL VIEW */}
              <View style={styles.about_profile}>
                <View style={{flexDirection: 'row'}}>
                  <Entypo name="location-pin" size={18} color='#0691ce'/>
                  <Text style={styles.about_text}>Lorem ipsum dolor sit amet</Text>
                </View>
                <View style={styles.mail_container}>
                  <Zocial name="email" size={16} color='#0691ce' />
                  <Text style={styles.about_text}>lorem@ipsum.com</Text>
                </View>
              </View>
            {/* END TO SETUP LOCATION AND EMAIL VIEW */}

              <View style={styles.follow_container}>
            {/* BEGIN TO SETUP FOLLOWRS VIEW */}
                <View style={styles.follow_sec}>
                  <Text style={styles.follow_count}>11</Text>
                  <Text style={styles.follow_text}>Followers</Text>
                </View>
            {/* END TO SETUP FOLLOWRS VIEW */}

            {/* BEGIN TO SETUP FOLLOWING VIEW */}
                <View style={styles.follow_sec}>
                  <Text style={styles.follow_count}>33</Text>
                  <Text style={styles.follow_text}>Following</Text>
                </View>
            {/* END TO SETUP FOLLOWING VIEW */}

            {/* BEGIN TO SETUP LIKES VIEW */}
                <View style={styles.follow_sec}>
                  <Text style={styles.follow_count}>44</Text>
                  <Text style={styles.follow_text}>Likes</Text>
                </View>
            {/* END TO SETUP LIKES VIEW */}
              </View>
            </View>
            {/* BEGIN TO SETUP FOLLOW BUTTON VIEW */}
              <TouchableOpacity style={styles.flat_button} onPress={()=>alert('Follow Button clicked.')}>
                <SimpleLineIcons name="user-follow" size={26} color='white' style={{transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]}}/>
              </TouchableOpacity>
            {/* END TO SETUP FOLLOW BUTTON VIEW */}
            <View style={styles.post_sec}>
              <View style={styles.post_header_sec}>
              {/* BEGIN TO SETUP PROFILE IMAGE AND NAME AND TIME VIEW */}
                <View style={styles.post_profile_detail}>
                  <Image source={GlobalInclude.Image5} style={styles.post_profile_image}/>
                  <View style={styles.post_profile_main}>
                    <Text style={styles.post_name}>Lorem ipsum</Text>
                    <Text style={styles.posted_time}>55 mins</Text>
                  </View>
                </View>
              {/* END TO SETUP PROFILE IMAGE AND NAME AND TIME VIEW */}

              {/* BEGIN TO SETUP PROFILE MORE VIEW */}
                <TouchableOpacity style={styles.more_button} onPress={()=>alert('More options button clicked.')}>
                  <Icon name='ios-more' style={styles.more_icon}/>
                </TouchableOpacity>
              {/* END TO SETUP PROFILE MORE VIEW */}
              </View>
              <Text style={styles.posted_comment}>LoreLorem ipsum dolor sit amet, consectetur adipisi, sed do eiusmod tempor incididunt ut labore.</Text>
            </View>
          </Content>
        </Container>
      );
    }
  }

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
	 header: {
  		backgroundColor: 'rgba(0,0,0,0)',
  		height:  Dimensions.get("window").height * 0.1,
  		borderBottomWidth: 0,
  		paddingTop: ( Dimensions.get("window").height * 0.03),
  		elevation: 0,
  		paddingLeft: (Dimensions.get("window").width* 0.05),
  		paddingRight: (Dimensions.get("window").width* 0.05),
  	},
  	back_arrow: {
  		width: 30,
  	 justifyContent: 'center',
  	 alignItems: 'flex-start'
  	},
  	left: {
  		flex: 0.5,
  		backgroundColor: 'rgba(0,0,0,0)',
  	},
  	menuIconWhite: {
  		justifyContent: 'center',
  		alignItems: 'center'
  	},
  	body: {
  		flex: 3,
  		alignItems: 'center',
  		backgroundColor: 'rgba(0,0,0,0)'
  	},
  	textTitle: {
  		color: 'white',
  		fontSize: moderateScale(17),
  		marginTop: ( Dimensions.get("window").height * 0.001),
  		alignSelf: 'center',
  		fontFamily: font_type.FontBold,
  	},
  	right: {
  		flex: 0.5
  	},
  slidesec:{
  	position: 'relative',
  	marginTop: ( Dimensions.get("window").height*0.025),
  	marginHorizontal: (Dimensions.get("window").width* 0.035),
  },
  profile_sec: {
  	backgroundColor: 'white',
  	borderRadius: 4
  },
  profile_container: {
  	height:( Dimensions.get("window").height * 0.47)
  },
  cover_image: {
  	width:(Dimensions.get("window").width* 0.93),
  	height:( Dimensions.get("window").height * 0.47),
  	borderTopLeftRadius:4,
  	borderTopRightRadius:4,
  	resizeMode: 'cover',
  },
  profile_info: {
  	width:(Dimensions.get("window").width* 0.93),
  	bottom:0,
  	paddingLeft:( Dimensions.get("window").height * 0.03),
  	paddingBottom:( Dimensions.get("window").height * 0.025),
  	paddingTop:( Dimensions.get("window").height * 0.1),
  	position: 'absolute',
  },
  profile_title: {
  	color: 'white',
  	fontSize: moderateScale(22),
  	fontFamily: font_type.FontBold,
  	backgroundColor: 'rgba(0,0,0,0)',
  	textAlign: 'left'
  },
  profile_post: {
  	color:'#fff8',
  	fontSize: moderateScale(12),
  	fontFamily: font_type.FontLight,
  	backgroundColor: 'rgba(0,0,0,0)',
  	textAlign: 'left'
  },
  about_profile: {
  	paddingHorizontal: (Dimensions.get("window").width* 0.05),
  	paddingVertical: (Dimensions.get("window").width* 0.036),
  	justifyContent: 'space-around',
  	borderBottomWidth: 1,
  	borderColor: '#ebebeb',
  	backgroundColor: 'white'
  },
  mail_container: {
  	flexDirection: 'row',
  	paddingTop:( Dimensions.get("window").height * 0.01)
  },
  about_text: {
  	color:'#959595',
  	fontFamily: font_type.FontLight,
  	fontSize: moderateScale(12),
  	width:(Dimensions.get("window").width* 0.5),
  	marginLeft:(Dimensions.get("window").width* 0.03),
  },
  follow_container: {
  	height:( Dimensions.get("window").height * 0.085),
  	flexDirection:'row',
  	alignItems: 'center',
  	justifyContent: 'center',
  },
  follow_sec: {
  	flex:1,
  	alignItems: 'center',
  	justifyContent: 'center'
  },
  follow_count: {
  	color:'#363636',
  	fontSize: moderateScale(15),
  	fontFamily: font_type.FontBold,
  	backgroundColor: 'rgba(0,0,0,0)'
  },
  follow_text: {
  	color:'#959595',
  	fontSize: moderateScale(12),
  	fontFamily: font_type.FontLight,
  	backgroundColor: 'rgba(0,0,0,0)'
  },
  flat_button: {
  	height:( Dimensions.get("window").height * 0.09),
  	width:( Dimensions.get("window").height * 0.09),
  	borderRadius:( Dimensions.get("window").height * 0.045),
  	top:( Dimensions.get("window").height * 0.425),
  	right:(Dimensions.get("window").width* 0.07),
  	position:'absolute',
  	backgroundColor:'#0691ce',
  	alignItems: 'center',
  	justifyContent: 'center',
  	shadowColor: 'black',
  	elevation: 8,
  	shadowOpacity: 0.35,
  	shadowRadius:( Dimensions.get("window").height * 0.003),
  	shadowOffset: {
  		height:( Dimensions.get("window").height * 0.004),
  		width:( Dimensions.get("window").height * 0.002)
  	}
  },
  post_sec: {
  	backgroundColor: 'white',
  	borderRadius: 4,
  	marginBottom: ( Dimensions.get("window").height*0.025),
  	marginTop:( Dimensions.get("window").height * 0.02)
  },
  post_header_sec: {
  	flexDirection: 'row',
  	justifyContent: 'space-between',
  	padding:( Dimensions.get("window").height * 0.02),
  	borderBottomWidth: 1,
  	borderColor:'#f2f2f2'
  },
  post_profile_detail: {
  	flexDirection: 'row',
  	justifyContent: 'center',
  	alignItems: 'center'
  },
  post_profile_image: {
  	height:( Dimensions.get("window").height * 0.06),
  	width:( Dimensions.get("window").height * 0.06),
  	borderRadius:( Dimensions.get("window").height * 0.03),
  	resizeMode:'cover',
  	...Platform.select({
  		ios: {
  			backgroundColor: 'gray'
  		},
  		android: {
  			backgroundColor: 'rgba(0,0,0,0)'
  		}
  	}),
  },
  post_profile_main: {
  	marginLeft:(Dimensions.get("window").width* 0.035),
  },
  post_name: {
  	fontFamily: font_type.FontBold,
  	fontSize: moderateScale(14),
  	color:'#6f6f6f',
  	textAlign: 'left'
  },
  posted_time: {
  	fontFamily: font_type.FontLight,
  	fontSize: moderateScale(12),
  	color:'#b7b7b7',
  	textAlign: 'left',
  	marginTop:(Platform.OS == 'ios') ? ( Dimensions.get("window").height * 0.005) : 0,
  },
  more_button: {
  	height:( Dimensions.get("window").height * 0.03),
  },
  more_icon: {
  	height:( Dimensions.get("window").height * 0.04),
  	color:'#d4d4d4',
  	fontSize: moderateScale(28),
  	right:0,
  	bottom:( Dimensions.get("window").height * 0.01)
  },
  posted_comment: {
  	padding:( Dimensions.get("window").height * 0.02),
  	fontSize:moderateScale(14),
  	color:'#6f6f6f',
  	fontFamily: font_type.FontLight,
  	backgroundColor: 'rgba(0,0,0,0)',
  	textAlign: 'left'
  },
  main:{
  	backgroundColor: '#ff6347'
  }
});
// END TO MAKE STYLE
