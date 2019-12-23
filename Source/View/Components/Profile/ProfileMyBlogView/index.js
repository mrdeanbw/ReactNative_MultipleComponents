import React, { Component } from 'react';
import {Text,View,Image,StatusBar,StyleSheet,Platform,ImageBackground,Dimensions,TouchableOpacity,ListView,ScrollView,Alert,I18nManager} from 'react-native';
import {Container,Button,Icon,Right,Item,Input,Header,Footer,FooterTab,Left,Body,Title,Content,Form,Label} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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

export default class ProfileMyBlog extends Component {

    constructor(props) {
      super(props);
      // BEGIN TO SET STATE
      this.state = {};
      // END TO SET STATE
    }

    render(){
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
          image: GlobalInclude.Image10,
        },
        {
          id: 2,
          image: GlobalInclude.Image9,
        },
        {
          id: 3,
          image: GlobalInclude.Image8,
        },
        {
          id: 4,
          image: GlobalInclude.Image7,
        },
        {
          id: 5,
          image: GlobalInclude.Image6,
        },
      ]

      return(
        <Container style={styles.main}>
          {/* BEGIN TO SETUP IMAGEBACKGROUND VIEW */}
            <ImageBackground source={GlobalInclude.Image3} style={styles.image_bg}>
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
                  <Text style={styles.text_title}>Profile</Text>
                </Body>
          {/* END TO SETUP BODY VIEW */}
                <Right style={styles.right}>
                </Right>
          {/* END TO SETUP RIGHT VIEW */}
            </Header>
          {/* END TO SETUP HEADER VIEW */}

            <Content style={styles.slidesec} scrollEnabled={false}>
                <ScrollView>
              <View style={styles.profile_container}>
              {/* BEGIN TO SETUP PROFILEcover_image VIEW */}
                <Image source={GlobalInclude.Image2} style={styles.cover_image}/>
              {/* END TO SETUP PROFILEcover_image VIEW */}
                <View style={styles.profile_info}>
              {/* BEGIN TO SETUP PROFILEIMAGE VIEW */}
                  <Image source={GlobalInclude.Image1} style={styles.profile}/>
              {/* END TO SETUP PROFILEIMAGE VIEW */}
              {/* BEGIN TO SETUP PROFILE TITLE AND POST VIEW */}
                  <View>
                    <Text style={styles.profile_title}>Lorem ipsum</Text>
                    <Text style={styles.profile_post}>Lorem ipsum</Text>
                  </View>
              {/* END TO SETUP PROFILE TITLE AND POST VIEW */}
                  </View>
                </View>

                <View style={styles.follow_container}>
              {/* BEGIN TO SETUP FOLLOWERS VIEW */}
                  <View style={styles.follow_sec}>
                    <Text style={styles.follow_count}>111</Text>
                    <Text style={styles.follow_text}>Followers</Text>
                  </View>
              {/* END TO SETUP FOLLOWERS VIEW */}

              {/* BEGIN TO SETUP FOLLOWING VIEW */}
                  <View style={styles.follow_sec}>
                    <Text style={styles.follow_count}>222</Text>
                    <Text style={styles.follow_text}>Following</Text>
                  </View>
              {/* END TO SETUP FOLLOWING VIEW */}

              {/* BEGIN TO SETUP LIKES VIEW */}
                  <View style={styles.follow_sec}>
                    <Text style={styles.follow_count}>333</Text>
                    <Text style={styles.follow_text}>Likes</Text>
                  </View>
              {/* END TO SETUP LIKES VIEW */}
                </View>
              {/* BEGIN TO SETUP ABOUT VIEW */}
                  <ScrollView style={styles.about_sec}>
                    <Text style={styles.status}>Lorem ipsum dolor sit amet, consectetur adipis elite, sed do eiusmod tempor incididunt uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
                  </ScrollView>
              {/* END TO SETUP ABOUT VIEW */}

              {/* BEGIN TO SETUP FRIENDS VIEW */}
                <View style={styles.friends_sec}>
                  <Text style={styles.friend_title}>Friends</Text>
                  <View style={styles.friends}>
                  {
                    data.map((item, index) => {
                      return (
                        <View key={index} style={styles.image_container}>
                          <Image source={item.image} style={styles.image_shadow}/>
                        </View>
                      )
                    })
                  }
                    </View>
                  </View>
              {/* END TO SETUP FRIENDS VIEW */}

              <View style={styles.button_sec}>
              {/* BEGIN TO SETUP COMMENTS BUTTON VIEW */}
                <TouchableOpacity style={styles.touchable_btn} onPress={()=>alert("Comment Button Click")}>
                  <Image style={styles.social_button} source={require('./comments_icon.png')}/>
                </TouchableOpacity>
              {/* END TO SETUP COMMENTS BUTTON VIEW */}
              {/* BEGIN TO SETUP PHONE BUTTON VIEW */}
                <TouchableOpacity style={styles.touchable_btn} onPress={()=>alert("Call Button Click")}>
                  <Image style={styles.social_button} source={require('./phone_icon.png')}/>
                </TouchableOpacity>
              {/* END TO SETUP PHONE BUTTON VIEW */}
              {/* BEGIN TO SETUP VIDEO BUTTON VIEW */}
                <TouchableOpacity style={styles.touchable_btn} onPress={()=>alert("Video call Button Click")}>
                    <Image style={styles.social_button} source={require('./video_icon.png')}/>
                </TouchableOpacity>
              {/* END TO SETUP VIDEO BUTTON VIEW */}
                </View>
                  </ScrollView>
              </Content>

            </ImageBackground>
          {/* END TO SETUP IMAGEBACKGROUND VIEW */}
        </Container>

      );
    }
  }
// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({

  	header: {
  		backgroundColor: 'rgba(0,0,0,0)',
  		height: Dimensions.get("window").height * 0.1,
  		borderBottomWidth: 0,
  		paddingTop: (Dimensions.get("window").height * 0.03),
  		elevation: 0,
  		paddingLeft: (Dimensions.get("window").width * 0.05),
  		paddingRight: (Dimensions.get("window").width * 0.05),
  	},
    left: {
  		flex: 0.5,
  		backgroundColor: 'rgba(0,0,0,0)',
  	},
  	back_arrow: {
  		width: 30,
  	  justifyContent: 'center',
  	  alignItems: 'flex-start'
  	},
  	body: {
  		flex: 3,
  		alignItems: 'center',
  		backgroundColor: 'rgba(0,0,0,0)'
  	},
    text_title: {
  		color: 'white',
  		fontSize: moderateScale(17),
  		marginTop: (Dimensions.get("window").height * 0.001),
  		alignSelf: 'center',
  		fontFamily: font_type.FontBold,
  	},
    right: {
  		flex: 0.5
  	},
    slidesec:{
    	position: 'relative',
    	backgroundColor: '#f3f3f3',
    	marginHorizontal: (Dimensions.get("window").width * 0.035),
    	borderRadius: 3
    },
    profile_container: {
  	  height:(Dimensions.get("window").height * 0.47)
    },
    cover_image: {
    	height:(Dimensions.get("window").height * 0.47),
    	borderTopLeftRadius:3,
    	borderTopRightRadius:3,
    	backgroundColor: 'gray'
    },
    profile_info: {
    	width:(Dimensions.get("window").width * 0.93),
    	bottom:(Dimensions.get("window").height * 0.025),
    	position: 'absolute',
    	flexDirection: 'row',
    	alignItems: 'center'
    },
    profile: {
    	height:(Dimensions.get("window").height * 0.075),
    	width:(Dimensions.get("window").height * 0.075),
    	marginHorizontal:(Dimensions.get("window").height * 0.03),
    	borderRadius:(Dimensions.get("window").height * 0.040),
    	borderWidth: 2,
    	borderColor: 'white'
    },
    profile_title: {
    	color: 'white',
    	fontSize: moderateScale(22),
    	fontFamily: font_type.FontBold,
    	backgroundColor: 'rgba(0,0,0,0)'
    },
    profile_post: {
    	color: '#aba19b',
    	fontSize: moderateScale(12),
    	fontFamily: font_type.FontLight,
    	backgroundColor: 'rgba(0,0,0,0)',
    	textAlign: 'left'
    },
    follow_container: {
    	height:(Dimensions.get("window").height * 0.085),
    	flexDirection:'row',
    	alignItems: 'center',
    	justifyContent: 'center',
    	borderBottomWidth: 1,
    	borderColor: '#ebebeb',
    	backgroundColor: 'white'
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
    about_sec: {
    	height:(Dimensions.get("window").height * 0.155),
    	paddingHorizontal:(Dimensions.get("window").width * 0.03),
    	paddingTop:(Dimensions.get("window").height * 0.02),
    	borderBottomWidth: 0.5,
    	borderColor: '#ebebeb',
    	backgroundColor: 'white'
    },
    status: {
    	paddingBottom:(Dimensions.get("window").height * 0.03),
    	color:'#6f6f6f',
    	fontSize: moderateScale(15),
    	fontFamily: font_type.FontLight,
    	backgroundColor: 'rgba(0,0,0,0)',
    	textAlign: 'left'
    },
    friends_sec: {
    	height:(Dimensions.get("window").height * 0.075),
    	paddingHorizontal:(Dimensions.get("window").width * 0.03),
    	flexDirection: 'row',
    	borderBottomWidth: 1,
    	borderColor: '#ebebeb',
    	alignItems: 'center',
    	justifyContent: 'space-between',
    	backgroundColor: 'white'
    },
    friend_title: {
    	color:'#959595',
    	fontSize: moderateScale(15),
    	fontFamily:font_type.FontLight
    },
    friends: {
  	  flexDirection: 'row'
    },
    image_container:{
    	height:(Dimensions.get("window").height * 0.045),
    	width:(Dimensions.get("window").height * 0.045),
    	borderRadius:(Dimensions.get("window").height * 0.0225),
    	marginLeft:(Dimensions.get("window").width * 0.01),
    	alignItems: 'center',
    	justifyContent: 'center',
    	shadowColor: 'black',
    	elevation: 5,
    	shadowOpacity:0.3,
    	shadowRadius:(Dimensions.get("window").width * 0.01),
    	shadowOffset: {
    		height: 0,
    		width: -(Dimensions.get("window").width * 0.005),
    	}
    },
    image_shadow: {
    	height:(Dimensions.get("window").height * 0.045),
    	width:(Dimensions.get("window").height * 0.045),
    	borderRadius:(Dimensions.get("window").height * 0.0225),
    	borderWidth: 1.5,
    	borderColor: 'white',
    	backgroundColor: 'rgba(0,0,0,0)'
    },
    button_sec: {
    	height:(Dimensions.get("window").height * 0.07),
    	flexDirection: 'row',
      marginBottom:5
    },
    touchable_btn: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    social_button: {
    	height:(Dimensions.get("window").height * 0.025),
    	width:(Dimensions.get("window").height * 0.025),
    	resizeMode: 'contain',
    },
    image_bg:{
    	height:(Dimensions.get("window").height),
    	width:(Dimensions.get("window").width)
    },
    main:{
  	  backgroundColor: '#2d324f'
    }
});
// END TO MAKE STYLE
