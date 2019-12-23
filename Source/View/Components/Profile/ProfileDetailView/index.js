import React, { Component } from 'react';
import {StyleSheet,Text,Image,StatusBar,Platform,ImageBackground,Dimensions,TouchableOpacity,View,BackHandler,I18nManager,Alert} from 'react-native';
import {Container,Button,Right,Left,Content,Body,Header,Icon,Title} from 'native-base';
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';


//GUIDELINE SIZES ARE BASED ON STANDARD ~5" SCREEN

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

export default class ProfileDetail extends Component {

  constructor(props) {
 		super(props);
    this.state = {};
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
        {/* BEGIN TO SETUP IMAGE AS A BACKGROUND */}
        <ImageBackground source={GlobalInclude.Image8} style={styles.img_container}>

          {/* BEGIN TO SETUP HEADER VIEW */}
          <Header style={styles.header}>

              {/* BEGIN TO SETUP HEADER LEFT VIEW */}
              <Left style={styles.left}>
                <TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
                  <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={25} color='white'/>
                </TouchableOpacity>
              </Left>
              {/* END TO SETUP HEADER LEFT VIEW */}

              {/* BEGIN TO SETUP HEADER BODY VIEW */}
              <Body style={styles.body}>
                <Text style={styles.text_title}>Profile</Text>
              </Body>
              {/* END TO SETUP HEADER BODY VIEW */}

              {/* BEGIN TO SETUP HEADER RIGHT VIEW */}
              <Right style={styles.right}>
              </Right>
              {/* END TO SETUP HEADER RIGHT VIEW */}
          </Header>
          {/* END TO SETUP HEADER VIEW */}
        </ImageBackground>
        {/* END TO SETUP IMAGE AS A BACKGROUND */}

        <Content>
                <View style={styles.details_view}>

                      {/* BEGIN TO SETUP NAME AND ADDRESS VIEW */}
                      <Text style={styles.name_txt}>Lorem Ipsum</Text>
                      <Text style={styles.address_txt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                      {/* END TO SETUP NAME AND ADDRESS VIEW */}

                      {/* BEGIN TO SETUP SOCIAL VIEW */}
                      <View style={styles.addUser_comment_call_view}>
                          {/* BEGIN TO SETUP ADD USER VIEW */}
                          <TouchableOpacity onPress={() => alert('Add User button clicked.')} style={styles.add_user_bg}>
                            <Image source={require('./add_user_gray_icon.png')} style={styles.user_comment_image}/>
                          </TouchableOpacity>
                          {/* END TO SETUP ADD USER VIEW */}

                          {/* BEGIN TO SETUP COMMENT VIEW */}
                          <TouchableOpacity onPress={() => alert('Comment button clicked.')} style={styles.comment_bg}>
                            <FontAwesome name="comment" size={20} color='white'/>
                          </TouchableOpacity>
                          {/* END TO SETUP COMMENT VIEW */}

                          {/* BEGIN TO SETUP TELEPHONE VIEW */}
                          <TouchableOpacity onPress={() => alert('Call button clicked.')} style={styles.call_bg}>
                            <Foundation name="telephone" size={25} color='white'/>
                          </TouchableOpacity>
                          {/* END TO SETUP TELEPHONE VIEW */}
                      </View>
                      {/* END TO SETUP SOCIAL VIEW */}

                      {/* BEGIN TO SETUP DESC VIEW */}
                      <Text style={styles.about_description_txt}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan lacus lectus, in pellentesque est vehicula a. Donec venenatis commodo porttitor. Sed mollis enim pellentesque tincidunt posuere.
                      </Text>
                      {/* END TO SETUP DESC VIEW */}

                </View>
        </Content>

        {/* BEGIN TO SETUP FOLLOWS, FOLLOWING, LIKES VIEW */}
        <View style={styles.bottom_view}>
            <View style={styles.divider_horizontal}/>
            <View style={styles.follower_follwing_like_bg}>
                  {/* BEGIN TO SETUP FOLLOWERS VIEW */}
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.count_label_bg}>
                      <Text style={styles.count_txt}>1111</Text>
                      <Text style={styles.label_txt}>Followers</Text>
                    </View>
                    <View style={styles.divide_vertical}/>
                  </View>
                  {/* END TO SETUP FOLLOWERS VIEW */}

                  {/* BEGIN TO SETUP FOLLOWING VIEW */}
                  <View style={{flexDirection: 'row',}}>
                    <View style={styles.count_label_bg}>
                      <Text style={styles.count_txt}>2222</Text>
                      <Text style={styles.label_txt}>Following</Text>
                    </View>
                    <View style={styles.divide_vertical}/>
                  </View>
                  {/* END TO SETUP FOLLOWING VIEW */}

                  {/* BEGIN TO SETUP LIKES VIEW */}
                  <View style={styles.count_label_bg}>
                    <Text style={styles.count_txt}>3333</Text>
                    <Text style={styles.label_txt}>Likes</Text>
                  </View>
                  {/* END TO SETUP LIKES VIEW */}
            </View>
        </View>
        {/* END TO SETUP FOLLOWS, FOLLOWING, LIKES VIEW */}

      </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(0,0,0,0)',
    height: Dimensions.get('window').height * 0.1,
    borderBottomWidth: 0,
    paddingTop: (Dimensions.get('window').height * 0.03),
    elevation: 0,
    paddingLeft: (Dimensions.get('window').width * 0.05),
    paddingRight: (Dimensions.get('window').width * 0.05),
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
    marginTop: (Dimensions.get('window').height * 0.001),
    alignSelf: 'center',
    fontFamily: font_type.FontBold,
  },
  right: {
    flex: 0.5
  },
  img_container: {
      width: Dimensions.get('window').width,
      height: (Dimensions.get('window').height) * 0.60,
  },
  main: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'column'
  },
  name_txt: {
    color: "#252525",
    fontSize: moderateScale(22),
    fontFamily: font_type.FontBold,
    textAlign: "center",
    marginTop: (Dimensions.get('window').height) * 0.06
  },
  address_txt: {
    color: "#a2a2a2",
    fontSize: moderateScale(15),
    fontFamily: font_type.FontLight,
    width: (Dimensions.get('window').width) * 0.65,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: (Dimensions.get('window').height) * 0.003
  },
  follower_follwing_like_bg: {
      flexDirection: 'row',
      width: (Dimensions.get('window').width) * 0.87,
      alignSelf: 'center',
      marginTop: (Dimensions.get('window').height) * 0.015,
      marginBottom: (Dimensions.get('window').height) * 0.015
  },
  count_label_bg: {
    flexDirection: 'column',
    width: (Dimensions.get('window').width) * 0.29,
    justifyContent: 'center'
  },
  count_txt: {
    color: "#363636",
    fontSize: moderateScale(16),
    fontFamily: font_type.FontBold,
    textAlign: 'center'
  },
  label_txt: {
    color: "#959595",
    fontSize: moderateScale(12),
    textAlign: 'center'
  },
  divide_vertical: {
    backgroundColor: "#d7d7d7",
    width: (Dimensions.get('window').width) * 0.003,
    height: (Dimensions.get('window').height) * 0.03,
    alignSelf: 'flex-end',
    marginBottom: (Dimensions.get('window').height) * 0.007
  },
  add_user_bg: {
    backgroundColor: "#f4f4f4",
    width: (Dimensions.get('window').width) * 0.14,
    height: (Dimensions.get('window').width) * 0.14,
    borderRadius: (Dimensions.get('window').width) * 0.07,
    justifyContent: 'center',
    alignItems: 'center'
  },
  comment_bg: {
    backgroundColor: "#f7412d",
    width: (Dimensions.get('window').width) * 0.14,
    height: (Dimensions.get('window').width) * 0.14,
    marginLeft: (Dimensions.get('window').width) * 0.04,
    borderRadius: (Dimensions.get('window').width) * 0.07,
    justifyContent: 'center',
    alignItems: 'center'
  },
  call_bg: {
    backgroundColor: "#00c160",
    width: (Dimensions.get('window').width) * 0.14,
    height: (Dimensions.get('window').width) * 0.14,
    marginLeft: (Dimensions.get('window').width) * 0.04,
    borderRadius: (Dimensions.get('window').width) * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: (Dimensions.get('window').height) * 0.007
  },
  user_comment_image: {
    width: (Dimensions.get('window').width) * 0.06,
    height: (Dimensions.get('window').height) * 0.06,
    alignSelf: 'center',
    resizeMode: 'contain',
    transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]
  },
  details_view:{
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
    flexDirection: 'column',
    height: (Dimensions.get('window').height) * 0.50
  },
  addUser_comment_call_view:{
    width: (Dimensions.get('window').width) * 0.60,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: (Dimensions.get('window').height) * 0.04,
    alignItems: 'center',
    justifyContent:'center'
  },
  bottom_view:{
    bottom: 0,
    position: 'absolute',
    width: Dimensions.get('window').width,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  divider_horizontal:{
    width: (Dimensions.get('window').width),
    height: (Dimensions.get('window').height) * 0.001,
    backgroundColor: "#e6e6e6"
  },
  about_description_txt: {
    color: "#d2d2d2",
    fontSize: moderateScale(14),
    marginLeft: (Dimensions.get('window').width) * 0.03,
    marginRight: (Dimensions.get('window').width) * 0.03,
    marginBottom: (Dimensions.get('window').width) * 0.03,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: (Dimensions.get('window').height) * 0.05
  },
});
// END TO MAKE STYLE
