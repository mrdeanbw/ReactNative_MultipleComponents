import React, { Component } from 'react';
import {View,Text,Image,StatusBar,Platform,StyleSheet,ImageBackground,Dimensions,TouchableOpacity,ListView,Alert,I18nManager} from 'react-native';
import {Container,Button,Right,Left,Content,Body,Header,Icon,Title,RegularText} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
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

export default class ProfileSlideUp extends Component {

  constructor(props) {
 		super(props);
    this.state = {
      slideStatus : true,
      slideDownStatus: true,
    };
 	}

  _slideUp(){
    this.setState({slideStatus:false}),
    this.setState({slideDownStatus:true})
  }

  _slideDown(){
    this.setState({slideStatus:true}),
    this.setState({slideDownStatus:false})
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
        {
          this.state.slideStatus ?
            this.state.slideDownStatus ?
              <ImageBackground style={styles.img_container} source={GlobalInclude.Image3}>
            {/* BEGIN TO SETUP HEADER VIEW */}
              <Header style={styles.header}>
            {/* BEGIN TO SETUP LEFT VIEW */}
                 <Left style={styles.left}>
                   <TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
                     <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="white"/>
                   </TouchableOpacity>
                 </Left>
              {/* END TO SETUP HEADER VIEW */}

              {/* BEGIN TO SETUP BODY VIEW */}
                 <Body style={styles.body}>
                 </Body>
              {/* END TO SETUP BODY VIEW */}
                 <Right style={styles.right}/>
                 </Header>
              {/* END TO SETUP HEADER VIEW */}

              {/* BEGIN TO SETUP SLIDEUP VIEW */}
                  <View style={styles.slide_up_bg}>
                  <TouchableOpacity onPress={() =>this._slideUp()}>
                    <Image source={require('./slide_up_arrow_icon.png')} style={styles.slide_up_arrow_icon}/>
                  </TouchableOpacity>
                  </View>
              {/* END TO SETUP SLIDEUP VIEW */}
                  </ImageBackground>
              :
              <View animation="bounceInDown" duration={1100} delay={1400}>
              {
                <ImageBackground style={styles.img_container} source={GlobalInclude.Image1}>
              {/* BEGIN TO SETUP HEADER VIEW */}
                <Header style={styles.header}>
              {/* BEGIN TO SETUP LEFT VIEW */}
                   <Left style={styles.left}>
                     <TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
                       <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="white"/>
                     </TouchableOpacity>
                   </Left>
              {/* END TO SETUP LEFT VIEW */}

              {/* BEGIN TO SETUP BODY VIEW */}
                   <Body style={styles.body}>
                   </Body>
              {/* END TO SETUP BODY VIEW */}
                   <Right style={styles.right}/>
                 </Header>
              {/* END TO SETUP HEADER VIEW */}

              {/* BEGIN TO SETUP SLIDEUPARROW VIEW */}
                <View style={styles.slide_up_bg}>
                <TouchableOpacity onPress={() =>this._slideUp()}>
                  <Image source={require('./slide_up_arrow_icon.png')} style={styles.slide_up_arrow_icon}/>
                </TouchableOpacity>
                </View>
              {/* END TO SETUP SLIDEUPARROW VIEW */}
                </ImageBackground>
              }
              </View>
          :
          <View animation="bounceInUp" duration={1100} delay={1400}>
          {
          <ImageBackground source={GlobalInclude.Image4} style={styles.img_container}>
            <Content style={styles.content_style}>
            {/* BEGIN TO SETUP SLIDEUPARROW VIEW */}
              <TouchableOpacity onPress={() =>this._slideDown()} style={styles.slide_arrow_bg}>
                <Image source={require('./slide_up_arrow_icon.png')} style={styles.slide_arrow_icon}/>
              </TouchableOpacity>
            {/* END TO SETUP SLIDEUPARROW VIEW */}

            {/* BEGIN TO SETUP IMAGE AND NAME AND DESIGNATION VIEW */}
              <Image source={GlobalInclude.Image7} style={styles.profile_img}/>
              <Text style={styles.name_txt}>Lorem Ipsum</Text>
              <Text style={styles.designation_txt}>Lorem Ipsum</Text>
            {/* END TO SETUP IMAGE AND NAME AND DESIGNATION VIEW */}

                <View style={styles.details_bg}>
                <View style={styles.detail_one_bg}>
                {/* BEGIN TO SETUP FOLLOWRS VIEW */}
                  <View style={styles.follower_following_bg}>
                    <Text style={styles.count_txt}>1111</Text>
                    <Text style={styles.label_txt}>Followers</Text>
                  </View>
                {/* END TO SETUP FOLLOWRS VIEW */}

                {/* BEGIN TO SETUP FOLLOWING VIEW */}
                  <View style={styles.follower_following_bg}>
                    <Text style={styles.count_txt}>2222</Text>
                    <Text style={styles.label_txt}>Following</Text>
                  </View>
                {/* END TO SETUP FOLLOWRS VIEW */}

                {/* BEGIN TO SETUP FOLLOW BUTTON VIEW */}
                  <Right>
                    <TouchableOpacity style={styles.follow_bg} onPress={() => alert('FOLLOW CLICK button clicked.')}>
                      <Text style={styles.follow_txt}>FOLLOW</Text>
                    </TouchableOpacity>
                  </Right>
                {/* END TO SETUP FOLLOW BUTTON VIEW */}
                </View>

                <View style={styles.divider_horizontal}/>

                {/* BEGIN TO SETUP ABOUT VIEW */}
                  <View style={styles.about_bg}>
                    <Text style={styles.about_txt}>ABOUT</Text>
                    <Content>
                      <Text style={styles.about_description_txt}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien nisl, vestibulum in lorem id, fringilla volutpat eros. Quisque porta scelerisque metus sit amet tincidunt. In hac habitasse platea dictumst. Vestibulum eget nunc ante. Curabitur ut tincidunt quam.Donec accumsan aliquet varius. Duis ultricies velit neque, pellentesque luctus magna vulputate at.Nulla ut augue ut tortor scelerisque dapibus ut id felis. Nullam suscipit, tellus non interdum cursus, mi sapien viverra odio, nec pellentesque leo nulla id lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante eu nisi pulvinar aliquet.
                      </Text>
                    </Content>
                    <LinearGradient locations={[0.3,1]} colors={['#fff0', 'white']} style={styles.shadow_bg}/>
                  </View>
                {/* END TO SETUP ABOUT VIEW */}

                <View style={styles.divider_horizontal}/>

                <View style={styles.connection_bg}>
                {/* BEGIN TO SETUP CONNECTION VIEW */}
                  <View style={styles.connection_header_bg}>
                    <Text style={styles.connection_photos_txt}>CONNECTIONS</Text>
                    <TouchableOpacity style={styles.connection_photo_count_bg} onPress={() => alert('See More Connections Click')}>
                      <Text style={styles.connection_photoscount_txt}>66</Text>
                      <Ionicons name={I18nManager.isRTL ? "ios-arrow-back" : "ios-arrow-forward"} size={20} color="#d6d6d6"/>
                    </TouchableOpacity>
                  </View>
                {/* END TO SETUP CONNECTION VIEW */}


                  <View style={styles.connection_profile_bg}>
                  {/* BEGIN TO SETUP FACEBOOK VIEW */}
                    <View style={[styles.connection_profilesocial_bg,{marginLeft: 3}]}>
                      <Image source={GlobalInclude.Image2} style={styles.connection_user_img}/>
                      <View style={[styles.connection_social_icon_bg,{backgroundColor: "#4c70aa"}]}>
                        <FontAwesome name="facebook-f" size={9} color="white"/>
                      </View>
                    </View>
                  {/* END TO SETUP FACEBOOK VIEW */}

                  {/* BEGIN TO SETUP TWITTER VIEW */}
                    <View style={styles.connection_profilesocial_bg}>
                      <Image source={GlobalInclude.Image8} style={styles.connection_user_img}/>
                      <View style={[styles.connection_social_icon_bg,{backgroundColor: "#00b6ee"}]}>
                        <FontAwesome name="twitter" size={8} color="white"/>
                      </View>
                    </View>
                  {/* END TO SETUP TWITTER VIEW */}

                  {/* BEGIN TO SETUP TWITTER VIEW */}
                    <View style={styles.connection_profilesocial_bg}>
                      <Image source={GlobalInclude.Image10} style={styles.connection_user_img}/>
                      <View style={[styles.connection_social_icon_bg,{backgroundColor: "#00b6ee"}]}>
                        <FontAwesome name="twitter" size={8} color="white"/>
                      </View>
                    </View>
                  {/* END TO SETUP TWITTER VIEW */}

                  {/* BEGIN TO SETUP FACEBOOK VIEW */}
                    <View style={styles.connection_profilesocial_bg}>
                      <Image source={GlobalInclude.Image6} style={styles.connection_user_img}/>
                      <View style={[styles.connection_social_icon_bg,{backgroundColor: "#4c70aa"}]}>
                        <FontAwesome name="facebook-f" size={9} color="white"/>
                      </View>
                    </View>
                  {/* END TO SETUP FACEBOOK VIEW */}

                  {/* BEGIN TO SETUP TWITTER VIEW */}
                    <View style={styles.connection_profilesocial_bg}>
                      <Image source={GlobalInclude.Image3} style={styles.connection_user_img}/>
                      <View style={[styles.connection_social_icon_bg,{backgroundColor: "#00b6ee"}]}>
                        <FontAwesome name="twitter" size={8} color="white"/>
                      </View>
                    </View>
                  {/* END TO SETUP TWITTER VIEW */}
                  </View>

                </View>

                <View style={styles.divider_horizontal}/>
              {/* BEGIN TO SETUP PHOTOS VIEW */}
                <View style={styles.card_bg}>
                  <View style={styles.photod_header}>
                    <Text style={styles.connection_photos_txt}>Photos</Text>
                    <TouchableOpacity style={styles.connection_photo_count_bg} onPress={() => alert('See More Photos button clicked.')}>
                      <Text style={styles.connection_photoscount_txt}>26</Text>
                      <Ionicons name={I18nManager.isRTL ? "ios-arrow-back" : "ios-arrow-forward"} size={20} color="#d6d6d6"/>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.gallery_bg}>
                    <Image style={[styles.gallery_img,{marginRight: (Dimensions.get("window").width  * 0.02)}]} source={GlobalInclude.Image10}/>
                    <Image style={[styles.gallery_img,{marginRight: (Dimensions.get("window").width  * 0.02)}]} source={GlobalInclude.Image9}/>
                    <Image style={styles.gallery_img} source={GlobalInclude.Image1}/>
                  </View>
                </View>
              {/* END TO SETUP PHOTOS VIEW */}
              </View>
            </Content>
          </ImageBackground>
          }
          </View>
        }
      </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  header: {
		backgroundColor: 'rgba(0,0,0,0)',
		height: Dimensions.get("window").height  * 0.1,
		borderBottomWidth: 0,
		paddingTop: (Dimensions.get("window").height  * 0.05),
		elevation: 0,
		paddingLeft: (Dimensions.get("window").width  * 0.05),
		paddingRight: (Dimensions.get("window").width  * 0.05),
	},
	left: {
		flex: 0.5
	},
  back_arrow: {
   width: 30,
   justifyContent: 'center',
   alignItems: 'flex-start'
  },
	body: {
		flex: 3,
		alignSelf: 'center'
	},
	right: {
		flex: 0.5
	},
  img_container: {
    width: Dimensions.get("window").width ,
    height: Dimensions.get("window").height
  },
  slide_up_bg: {
    position: 'absolute',
    bottom: 10,
    width: (Dimensions.get("window").width ) * 0.15,
    height: (Dimensions.get("window").height ) * 0.05,
    alignSelf: 'center',
    marginTop: (Dimensions.get("window").height ) * 0.10
  },
  main: {
    height: Dimensions.get("window").height ,
    width: Dimensions.get("window").width ,
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'column'
  },
  card_bg: {
    backgroundColor: 'white',
    width: (Dimensions.get("window").width ) * 0.94,
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: (Dimensions.get("window").height ) * 0.03
  },
  content_style: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: Dimensions.get("window").width ,
    height: Dimensions.get("window").height
  },
  slide_up_arrow_icon: {
      width: (Dimensions.get("window").width ) * 0.15,
      height: (Dimensions.get("window").height ) * 0.05,
      resizeMode: 'contain',
  },
  slide_arrow_icon: {
      width: (Dimensions.get("window").width ) * 0.15,
      height: (Dimensions.get("window").height ) * 0.05,
      resizeMode: 'contain',
      alignSelf: 'center',
  },
  profile_img: {
    width: (Dimensions.get("window").width ) * 0.20,
    height: (Dimensions.get("window").width ) * 0.20,
    borderRadius: (Dimensions.get("window").width ) * 0.10,
    borderWidth: 3,
    borderColor: 'white',
    alignSelf: 'center',
    marginTop: (Dimensions.get("window").height ) * 0.018,
    resizeMode: 'cover'
  },
  name_txt: {
      color: 'white',
      fontFamily: font_type.FontBold,
      fontSize: moderateScale(19),
      alignSelf: 'center',
      marginTop: (Dimensions.get("window").height ) * 0.02
  },
  designation_txt: {
      color: "#9699a7",
      fontSize: moderateScale(13),
      fontFamily: font_type.FontLight,
      marginTop: 3,
      alignSelf: 'center'
  },
  details_bg: {
    width: (Dimensions.get("window").width ) * 0.94,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: (Dimensions.get("window").height ) * 0.04,
  },
  count_txt: {
    color: "#363636",
    fontSize: moderateScale(15),
    fontFamily: font_type.FontBold,
    textAlign: 'center'
  },
  label_txt: {
    color: "#959595",
    fontSize: moderateScale(12),
    fontFamily: font_type.FontLight,
    textAlign: 'center'
  },
  follow_txt: {
      color: 'white',
      fontSize: moderateScale(12),
      fontFamily: font_type.FontBold,
  },
  about_txt: {
    color: "#595959",
    fontSize: moderateScale(15),
    fontFamily: font_type.FontBold,
    marginBottom: (Dimensions.get("window").height ) * 0.02,
    textAlign: 'left'
  },
  connection_photos_txt: {
    color: "#6f6f6f",
    fontSize: moderateScale(15)
  },
  connection_photoscount_txt: {
    color: "#b7b7b7",
    fontSize: moderateScale(14),
    marginRight: 10
  },
  connection_user_img: {
    width: (Dimensions.get("window").width ) * 0.14,
    height: (Dimensions.get("window").width ) * 0.14,
    borderRadius: (Dimensions.get("window").width ) * 0.07,
    resizeMode: 'cover'
  },
  connection_social_icon_bg: {
    width: (Dimensions.get("window").width ) * 0.04,
    height: (Dimensions.get("window").width ) * 0.04,
    alignSelf: 'flex-end',
    marginLeft: -((Dimensions.get("window").width ) * 0.03),
    borderRadius: (Dimensions.get("window").width  * 0.02),
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  photod_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: (Dimensions.get("window").width ) * 0.03
  },
  gallery_img: {
    width: (Dimensions.get("window").width ) * 0.28,
    height: (Dimensions.get("window").height ) * 0.18,
    resizeMode: 'cover',
  },
  detail_one_bg: {
    flexDirection: 'row',
    marginLeft: (Dimensions.get("window").width ) * 0.02,
    marginRight: (Dimensions.get("window").width ) * 0.02,
    marginTop: (Dimensions.get("window").width ) * 0.03,
    marginBottom: (Dimensions.get("window").width ) * 0.03
  },
  follower_following_bg: {
    flexDirection: 'column',
    width: (Dimensions.get("window").width ) * 0.25
  },
  follow_bg: {
    width: (Dimensions.get("window").width ) * 0.25,
    height: (Dimensions.get("window").height ) * 0.05,
    backgroundColor: '#ff6347',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  divider_horizontal: {
    backgroundColor: "#ebebeb",
    height: 1,
    width: (Dimensions.get("window").width ) * 0.94
  },
  about_bg: {
    marginLeft: (Dimensions.get("window").width ) * 0.04,
    marginRight: (Dimensions.get("window").width ) * 0.04,
    height: (Dimensions.get("window").height ) * 0.25,
    marginTop: (Dimensions.get("window").width ) * 0.04,
    marginBottom: (Dimensions.get("window").width ) * 0.04
  },
  about_description_txt: {
    color: "#d7d7d7",
    fontSize: moderateScale(15),
    fontFamily: font_type.FontLight,
    textAlign: 'left'
  },
  connection_bg: {
    margin: (Dimensions.get("window").width ) * 0.04,
    width: (Dimensions.get("window").width ) * 0.94,
    alignSelf: 'center'
  },
  connection_header_bg: {
    margin: (Dimensions.get("window").width ) * 0.03,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  connection_photo_count_bg: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  connection_profile_bg: {
    flexDirection: 'row',
    marginLeft: (Dimensions.get("window").width ) * 0.03,
    marginRight: (Dimensions.get("window").width ) * 0.03,
    marginTop: (Dimensions.get("window").width ) * 0.02,
    marginBottom: (Dimensions.get("window").width ) * 0.04
  },
  gallery_bg: {
    flexDirection: 'row',
    margin: (Dimensions.get("window").width ) * 0.03
  },
  shadow_bg: {
    height: (Dimensions.get("window").height ) * 0.25,
    flexDirection: 'column',
    width: (Dimensions.get("window").width ) * 0.94,
    alignSelf: 'center',
    position:'absolute'
  },
  connection_profilesocial_bg: {
    width: (Dimensions.get("window").width ) * 0.176,
    flexDirection: 'row',
  },
  slide_arrow_bg: {
    width: (Dimensions.get("window").width ) * 0.17,
    height: (Dimensions.get("window").height ) * 0.07,
    alignSelf:'center',
    marginTop: (Dimensions.get("window").height ) * 0.1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
// END TO MAKE STYLE
