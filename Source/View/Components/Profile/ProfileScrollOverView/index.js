import React, { Component } from 'react';
import {Text,Image,StatusBar,Platform,ImageBackground,Dimensions,StyleSheet,TouchableOpacity,View,Alert,I18nManager} from 'react-native';
import {Container,Button,Right,Left,Content,Body,Header,Icon,Title} from 'native-base';
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


export default class ProfileScrollOver extends Component {

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

    //BEGIN TO SETUP LISTVIEW DATA
    var data = [
      {
        id: 1,
        profileImage: GlobalInclude.Image5,
        name: 'Lorem ipsum',
        designation: 'Lorem ipsum'
      },
      {
        id: 2,
        profileImage: GlobalInclude.Image8,
        name: 'Lorem ipsum',
        designation: 'Lorem ipsum'
      }
    ]
    //END TO SETUP LISTVIEW DATA
    return(
      <Container style={styles.main}>
        <View style={{flexDirection:'column'}}>
        {/* BEGIN TO SETUP HEADER VIEW */}
          <Header style={styles.header}>
          {/* BEGIN TO SETUP LEFT VIEW */}
              <Left style={styles.left}>
                <TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
                  <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={25} color='white'/>
                </TouchableOpacity>
              </Left>
           {/* BEGIN TO SETUP LEFT VIEW */}

           {/* BEGIN TO SETUP BODY VIEW */}
              <Body style={styles.body}>
                <Text style={styles.text_title}>Profiles</Text>
              </Body>
            {/* END TO SETUP BODY VIEW */}

            {/* BEGIN TO SETUP RIGHT VIEW */}
              <Right style={styles.right}>
                <TouchableOpacity onPress={()=>alert("Setting button clicked.")}>
                  <Image source={require('./setting_icon.png')} style={styles.setting_icon}/>
                </TouchableOpacity>
              </Right>
            {/* END TO SETUP RIGHT VIEW */}
            </Header>
          {/* END TO SETUP HEADER VIEW */}

          {/* BEGIN TO SETUP PROFILEIMAGE AND NAME AND DESIGNATION VIEW */}
            <View style={styles.profile_view}>
              <Image style={styles.profile_img} source={GlobalInclude.Image3}/>
              <Text style={styles.name_txt}>Lorem Ipsum</Text>
              <Text style={styles.designtaion_txt}>Lorem Ipsum</Text>
            </View>
          {/* END TO SETUP PROFILEIMAGE AND NAME AND DESIGNATION VIEW */}
            <View style={styles.back_bottom_view}/>
          </View>

        <Content style={styles.content_view}>
          <View style={styles.overlay_content_bg}>

            <View style={styles.card_bg}>
            {/* BEGIN TO SETUP ABOUT VIEW */}
              <Text style={styles.about_label_txt}>ABOUT</Text>
              <Text style={styles.about_description_txt}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan lacus lectus, in pellentesque est vehicula a. Donec venenatis commodo porttitor. Sed mollis enim pellentesque tincidunt posuere.
              </Text>
              <View style={styles.divider_horizontal}/>
            {/* END TO SETUP ABOUT VIEW */}

            {/* BEGIN TO SETUP FOLLOWERS AND FOLLOWING AND LIKES VIEW */}
              <View style={styles.follower_follwing_like_bg}>
                {/* BEGIN TO SETUP FOLLOWERS VIEW */}
                  <View style={styles.count_label_bg}>
                    <Text style={styles.count_txt}>1111</Text>
                    <Text style={styles.label_txt}>Followers</Text>
                  </View>
                {/* END TO SETUP FOLLOWERS VIEW */}

                {/* BEGIN TO SETUP FOLLOWING VIEW */}
                  <View style={styles.count_label_bg}>
                    <Text style={styles.count_txt}>2222</Text>
                    <Text style={styles.label_txt}>Following</Text>
                  </View>
                {/* END TO SETUP FOLLOWING VIEW */}

                {/* BEGIN TO SETUP LIKES VIEW */}
                  <View style={styles.count_label_bg}>
                    <Text style={styles.count_txt}>3333</Text>
                    <Text style={styles.label_txt}>Likes</Text>
                  </View>
                {/* END TO SETUP LIKES VIEW */}
                  </View>
                {/* END TO SETUP FOLLOWERS AND FOLLOWING AND LIKES VIEW */}
                  <View style={styles.divider_horizontal}/>
                  <View style={styles.fb_twitter_google_linkedin}>

              {/* BEGIN TO SETUP FACEBOOK BUTTON VIEW */}
                <TouchableOpacity onPress={()=>alert("Facebook Button Click")}>
                  <View style={styles.fb_view}>
                    <FontAwesome name="facebook" size={25} color='#2d324f'/>
                  </View>
                </TouchableOpacity>
              {/* END TO SETUP FACEBOOK BUTTON VIEW */}

              {/* BEGIN TO SETUP TWIITER BUTTON VIEW */}
                <TouchableOpacity onPress={()=>alert("Twitter Button Click")}>
                  <View style={styles.fb_view}>
                    <FontAwesome name="twitter" size={25} color='#2d324f'/>
                  </View>
                </TouchableOpacity>
              {/* END TO SETUP TWIITER BUTTON VIEW */}

              {/* BEGIN TO SETUP GOOGLE BUTTON VIEW */}
                <TouchableOpacity onPress={()=>alert("Google Plus button clicked.")}>
                  <View style={styles.fb_view}>
                    <Image source={require('./google_icon.png')} style={styles.google_img}/>
                  </View>
                </TouchableOpacity>
              {/* END TO SETUP GOOGLE BUTTON VIEW */}

              {/* BEGIN TO SETUP LINKEDIN BUTTON VIEW */}
                <TouchableOpacity onPress={()=>alert("LinkedIn button clicked.")}>
                  <View style={styles.fb_view}>
                    <FontAwesome name="linkedin" size={25} color='#2d324f'/>
                  </View>
                </TouchableOpacity>
              {/* END TO SETUP LINKEDIN BUTTON VIEW */}
              </View>
            </View>

            <View style={styles.card_bg}>
            {/* BEGIN TO SETUP CONNECTION VIEW */}
              <View style={styles.connect_text_view}>
                <Text style={styles.connection_photos_txt}>CONNECTIONS</Text>
                <TouchableOpacity style={styles.connect_count_view} onPress={()=>alert('See More Connections button clicked.')}>
                  <Text style={styles.connection_photoscount_txt}>45</Text>
                  <FontAwesome name={I18nManager.isRTL ? "angle-left" : "angle-right"} size={20} color='#d6d6d6' />
                </TouchableOpacity>
              </View>
            {/* END TO SETUP CONNECTION VIEW */}


              <View style={styles.connection_img_view}>
              {/* BEGIN TO SETUP CONNECTUSERIMAGE VIEW */}
                <View style={[styles.connect_img, {marginLeft: (Dimensions.get("window").height ) * 0.003}]}>
                  <Image source={GlobalInclude.Image1} style={styles.connection_user_img}/>
                  <TouchableOpacity style={[styles.social_bg, {backgroundColor: '#4c70aa'}]}>
                    <FontAwesome name="facebook" size={10} color='#ffffff'/>
                  </TouchableOpacity>
                  </View>
              {/* END TO SETUP CONNECTUSERIMAGE VIEW */}

              {/* BEGIN TO SETUP CONNECTUSERIMAGE VIEW */}
                <View style={styles.connect_img}>
                  <Image source={GlobalInclude.Image10} style={styles.connection_user_img}/>
                  <TouchableOpacity style={[styles.social_bg, {backgroundColor: '#00b6ee'}]}>
                    <FontAwesome name="twitter" size={10} color='#ffffff'/>
                  </TouchableOpacity>
                </View>
              {/* END TO SETUP CONNECTUSERIMAGE VIEW */}

              {/* BEGIN TO SETUP CONNECTUSERIMAGE VIEW */}
                <View style={styles.connect_img}>
                  <Image source={GlobalInclude.Image9} style={styles.connection_user_img}/>
                  <TouchableOpacity style={[styles.social_bg, {backgroundColor: '#00b6ee'}]}>
                    <FontAwesome name="twitter" size={10} color='#ffffff'/>
                  </TouchableOpacity>
                </View>
              {/* END TO SETUP CONNECTUSERIMAGE VIEW */}

              {/* BEGIN TO SETUP CONNECTUSERIMAGE VIEW */}
                <View style={styles.connect_img}>
                  <Image source={GlobalInclude.Image8} style={styles.connection_user_img}/>
                  <TouchableOpacity style={[styles.social_bg, {backgroundColor: '#4c70aa'}]}>
                    <FontAwesome name="facebook" size={10} color='#ffffff'/>
                  </TouchableOpacity>
                </View>
              {/* END TO SETUP CONNECTUSERIMAGE VIEW */}

              {/* BEGIN TO SETUP CONNECTUSERIMAGE VIEW */}
                <View style={styles.connect_img}>
                  <Image source={GlobalInclude.Image7} style={styles.connection_user_img}/>
                  <TouchableOpacity style={[styles.social_bg, {backgroundColor: '#00b6ee'}]}>
                    <FontAwesome name="twitter" size={10} color='#ffffff'/>
                  </TouchableOpacity>
                </View>
              {/* END TO SETUP CONNECTUSERIMAGE VIEW */}
              </View>
            </View>

          {/* BEGIN TO SETUP PHOTOS VIEW */}
            <View style={styles.card_bg}>
              <View style={styles.photod_header}>
                <Text style={styles.connection_photos_txt}>Photos</Text>
                <TouchableOpacity style={styles.connect_count_view} onPress={()=>alert('See More Photos button clicked.')}>
                  <Text style={styles.connection_photoscount_txt}>16</Text>
                  <FontAwesome name={I18nManager.isRTL ? "angle-left" : "angle-right"} size={20} color='#d6d6d6' />
                </TouchableOpacity>
              </View>
              <View style={styles.photo_img_view}>
                <Image style={styles.gallery_img} source={GlobalInclude.Image6}/>
                <View style={styles.img_view}/>
                <Image style={styles.gallery_img} source={GlobalInclude.Image5}/>
                <View style={styles.img_view}/>
                <Image style={styles.gallery_img} source={GlobalInclude.Image4}/>
              </View>
            </View>
          {/* END TO SETUP PHOTOS VIEW */}
          </View>
        </Content>
      </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  header: {
		backgroundColor: '#ff6347',
		height: Dimensions.get("window").height  * 0.1,
		borderBottomWidth: 0,
		paddingTop: (Dimensions.get("window").height  * 0.03),
		elevation: 0,
		paddingLeft: (Dimensions.get("window").width  * 0.05),
		paddingRight: (Dimensions.get("window").width  * 0.05),
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
  body: {
		flex: 3,
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0)'
	},
	text_title: {
		color: 'white',
		fontSize: moderateScale(17),
		marginTop: (Dimensions.get("window").height  * 0.001),
		alignSelf: 'center',
		fontFamily: font_type.FontBold,
	},
	right: {
		flex: 0.5
	},
  main: {
    height: Dimensions.get("window").height ,
    width: Dimensions.get("window").width ,
    backgroundColor: 'white',
  },
  setting_icon: {
  	height:(Dimensions.get("window").height *0.03),
  	width:(Dimensions.get("window").height *0.03),
  	resizeMode: 'contain'
  },
  profile_img: {
    width: (Dimensions.get("window").width ) * 0.26,
    height: (Dimensions.get("window").width ) * 0.26,
    borderRadius: (Dimensions.get("window").width ) * 0.13,
    borderWidth: 3,
    borderColor: 'white',
    alignSelf: 'center',
    marginTop: (Dimensions.get("window").height ) * 0.02,
    },
  name_txt: {
    color: 'white',
    fontSize: moderateScale(18),
    textAlign: 'center',
    fontFamily: font_type.FontBold,
    marginTop: (Dimensions.get("window").height ) * 0.025
  },
  designtaion_txt: {
    color: "#9699a7",
    fontSize: moderateScale(14),
    textAlign: 'center',
    fontFamily: font_type.FontLight
  },
  overlay_content_bg: {
    flexDirection: 'column',
    ...Platform.select({
      ios: {
        paddingTop: (Dimensions.get("window").height ) * 0.3,
      },
      android: {
        paddingTop: (Dimensions.get("window").height ) * 0.32,
      }
    }),
    width: (Dimensions.get("window").width ) * 0.94,
    alignSelf: 'center',
  },
  card_bg: {
    backgroundColor: 'white',
    width: (Dimensions.get("window").width ) * 0.94,
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: (Dimensions.get("window").height ) * 0.03
  },
  about_label_txt: {
    margin: (Dimensions.get("window").width ) * 0.03,
    color: "#595959",
    fontSize: moderateScale(14),
    textAlign: 'left'
  },
  about_description_txt: {
    color: "#d2d2d2",
    fontSize: moderateScale(14),
    marginLeft: (Dimensions.get("window").width ) * 0.03,
    marginRight: (Dimensions.get("window").width ) * 0.03,
    marginBottom: (Dimensions.get("window").width ) * 0.03,
    textAlign: 'left'
  },
  divider_horizontal: {
    backgroundColor: "#ebebeb",
    width: (Dimensions.get("window").width ) * 0.94,
    height: (Dimensions.get("window").height ) * 0.001,
    alignSelf: 'center',
    marginBottom: (Dimensions.get("window").width ) * 0.03
  },
  follower_follwing_like_bg: {
      flexDirection: 'row',
      width: (Dimensions.get("window").width ) * 0.87,
      alignSelf: 'center',
      marginBottom: (Dimensions.get("window").width ) * 0.03
  },
  count_label_bg: {
    flexDirection: 'column',
    width: (Dimensions.get("window").width ) * 0.29,
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
  connection_user_img: {
    width: (Dimensions.get("window").width ) * 0.14,
    height: (Dimensions.get("window").width ) * 0.14,
    borderRadius: (Dimensions.get("window").width ) * 0.07,
    resizeMode: 'cover'
  },
  photod_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: (Dimensions.get("window").width ) * 0.03
  },
  connection_photos_txt: {
    color: "#6f6f6f",
    fontSize: moderateScale(15)
  },
  connection_photoscount_txt: {
    color: "#b7b7b7",
    fontSize: moderateScale(14),
    marginRight: (Dimensions.get("window").width ) * 0.012
  },
  gallery_img: {
    width: (Dimensions.get("window").width ) * 0.28,
    height: (Dimensions.get("window").height ) * 0.18,
    resizeMode: 'cover'
  },
  rowname_txt: {
    color: "#363636",
    fontSize: moderateScale(15),
    fontFamily: font_type.FontBold
  },
  profile_view:{
    width: Dimensions.get("window").width ,
    height: (Dimensions.get("window").height ) * 0.4,
    backgroundColor: "#ff6347"
  },
  back_bottom_view:{
    width: Dimensions.get("window").width ,
    height: (Dimensions.get("window").height ) * 0.50,
    backgroundColor: "#e6e6e6"
  },
  content_view:{
    height: (Dimensions.get("window").height ) * 0.9,
    position: 'absolute',
    width: Dimensions.get("window").width ,
    bottom:0
  },
  fb_twitter_google_linkedin:{
    flexDirection: 'row',
    marginTop: (Dimensions.get("window").width ) * 0.02,
    marginLeft: (Dimensions.get("window").width ) * 0.03,
    marginRight: (Dimensions.get("window").width ) * 0.03,
    marginBottom: (Dimensions.get("window").width ) * 0.04
  },
  fb_view:{
    width: (Dimensions.get("window").width ) * 0.22,
    alignItems: 'center',
    justifyContent: 'center'
  },
  google_img:{
    height: (Dimensions.get("window").height ) * 0.035,
    width: (Dimensions.get("window").width ) * 0.070,
    resizeMode: 'contain'
  },
  connect_text_view:{
    margin: (Dimensions.get("window").width ) * 0.03,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  connect_count_view:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  connection_img_view:{
    flexDirection: 'row',
    marginLeft: (Dimensions.get("window").width ) * 0.03,
    marginRight: (Dimensions.get("window").width ) * 0.03,
    marginTop: (Dimensions.get("window").width ) * 0.02,
    marginBottom: (Dimensions.get("window").width ) * 0.04
  },
  connect_img:{
    width: (Dimensions.get("window").width ) * 0.176,
    flexDirection: 'row'
  },
  photo_img_view:{
   flexDirection: 'row',
   margin: (Dimensions.get("window").width ) * 0.03
  },
  img_view:{
    width: (Dimensions.get("window").width ) * 0.02,
    height: (Dimensions.get("window").height ) * 0.18,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  social_bg: {
  	width:(Dimensions.get("window").height *0.035),
  	height:(Dimensions.get("window").height *0.035),
  	borderRadius:(Dimensions.get("window").height *0.0175),
  	borderWidth: 1.5,
  	borderColor: 'white',
  	right:(Dimensions.get("window").width *0.015),
  	bottom:(Dimensions.get("window").height *0.009),
  	position: 'absolute',
  	alignItems: 'center',
  	justifyContent: 'center'
  }
});
// END TO MAKE STYLE
