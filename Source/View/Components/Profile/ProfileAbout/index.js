import React, { Component } from 'react';
import {Text,Image,StyleSheet,Dimensions,TouchableOpacity,View,I18nManager,StatusBar,Platform,Alert} from 'react-native';
import {Container,Button,Right,Left,Content,Body,Header,Icon,Title} from "native-base";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";
import Ionicons from "react-native-vector-icons/Ionicons";

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

export default class ProfileAbout extends Component {

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
      <Container style={styles.main_cont}>

      {/* BEGIN TO SETUP HEADER VIEW */}
      <Header androidStatusBarColor={"#ff6347"} style={styles.header}>
        {/* BEGIN TO SETUP HEADER LEFT VIEW */}
        <Left style={styles.left}>
          <TouchableOpacity style={styles.backArrow} onPress={() => this.props.navigation.goBack()} >
            <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="white" />
          </TouchableOpacity>
        </Left>
        {/* END TO SETUP HEADER LEFT VIEW */}

        {/* BEGIN TO SETUP HEADER BODY TITLE VIEW */}
        <Body style={styles.body}>
          <Title style={styles.title}>About</Title>
        </Body>
        {/* END TO SETUP HEADER BODY TITLE VIEW */}

        {/* BEGIN TO SETUP HEADER RIGHT VIEW */}
        <Right style={styles.left}>
          <TouchableOpacity onPress={() => alert("Settings butto pressed.")}>
            <Ionicons name="md-settings" size={22} color="white" />
          </TouchableOpacity>
        </Right>
        {/* END TO SETUP HEADER RIGHT VIEW */}

      </Header>
      {/* END TO SETUP HEADER VIEW */}

        <Content style={styles.content_bg}>

        <View style={styles.header_container}>
          <View style={styles.profile_container}>
          {/* BEGIN TO SETUP PROFILEIMAGE AND NAME AND POST VIEW */}
              <View style={styles.profile_body_sec}>
                <Image source={GlobalInclude.Image1} style={styles.profile_image}/>
                <View style={styles.profile_detail}>
                  <Text style={styles.profile_name}>Lorem Ipsum</Text>
                  <Text style={styles.post}>Lorem Ipsum</Text>
                </View>
              </View>
          {/* END TO SETUP PROFILEIMAGE AND NAME AND POST VIEW */}

          {/* BEGIN TO SETUP FOLLOW VIEW */}
            <TouchableOpacity style={(this.state.isFavorite) ? styles.active_button : styles.normal_button} onPress={()=>this.setState({isFavorite: !this.state.isFavorite})}>
              <Text style={(this.state.isFavorite) ? styles.active_button_txt : styles.normal_button_txt}>Follow</Text>
            </TouchableOpacity>
          {/* END TO SETUP FOLLOW VIEW */}
          </View>

          <View style={styles.follow_container}>
            {/* BEGIN TO SETUP FOLLOWRS VIEW */}
              <View style={styles.follow_sec}>
                <Text style={styles.follow_count}>1111</Text>
                <Text style={styles.follow_text}>Followers</Text>
              </View>
                <View style={styles.vertical_separator}/>
            {/* END TO SETUP FOLLOWRS VIEW */}

            {/* BEGIN TO SETUP FOLLOWING VIEW */}
                <View style={styles.vertical_separator} />
                <View style={styles.follow_sec}>
                  <Text style={styles.follow_count}>2222</Text>
                  <Text style={styles.follow_text}>Following</Text>
                </View>
                <View style={styles.vertical_separator}/>
            {/* END TO SETUP FOLLOWING VIEW */}

            {/* BEGIN TO SETUP LIKES VIEW */}
                <View style={styles.vertical_separator} />
                <View style={styles.follow_sec}>
                  <Text style={styles.follow_count}>3333</Text>
                  <Text style={styles.follow_text}>Likes</Text>
                </View>
              </View>
            {/* END TO SETUP LIKES VIEW */}
            </View>

        <View style={styles.card_bg}>
          {/* BEGIN TO SETUP ABOUT AND DESCRIPTION VIEW */}
            <Text style={styles.about_label_txt}>About</Text>
            <Text style={styles.about_description_txt}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan lacus lectus, in pellentesque est vehicula a. Donec venenatis commodo porttitor. Sed mollis enim pellentesque tincidunt posuere.
            </Text>
          {/* END TO SETUP ABOUT AND DESCRIPTION VIEW */}
            <View style={styles.divider_horizontal}/>

          <View style={styles.fb_twitter_google_linkedin_view}>
            {/* BEGIN TO SETUP FACEBOOK VIEW */}
              <TouchableOpacity onPress={()=>alert("Facebook button clicked.")}>
                <View style={styles.fb_view}>
                  <FontAwesome name="facebook" size={25} color='#2d324f'/>
                </View>
              </TouchableOpacity>
            {/* END TO SETUP FACEBOOK VIEW */}

            {/* BEGIN TO SETUP TWITTER VIEW */}
              <TouchableOpacity onPress={()=>alert("Twitter button clicked.")}>
                <View style={styles.fb_view}>
                  <FontAwesome name="twitter" size={25} color='#2d324f'/>
                </View>
              </TouchableOpacity>
            {/* END TO SETUP TWITTER VIEW */}

            {/* BEGIN TO SETUP GOOGLE VIEW */}
              <TouchableOpacity onPress={()=>alert("Google Plus button clicked.")}>
                <View style={styles.fb_view}>
                  <Image source={require('./google_icon.png')} style={styles.google_img}/>
                </View>
              </TouchableOpacity>
            {/* END TO SETUP GOOGLE VIEW */}

            {/* BEGIN TO SETUP LINKEDIN VIEW */}
              <TouchableOpacity onPress={()=>alert("LinkedIn button clicked.")}>
                <View style={styles.fb_view}>
                  <FontAwesome name="linkedin" size={25} color='#2d324f'/>
                </View>
              </TouchableOpacity>
            {/* END TO SETUP LINKEDIN VIEW */}
          </View>
        </View>

        <View style={styles.card_bg}>
        {/* BEGIN TO SETUP SOCIAL VIEW */}
          <View style={styles.connect_text_view}>
            <Text style={styles.connection_photos_txt}>Social</Text>
            <TouchableOpacity style={styles.connect_count_view} onPress={()=>alert('See More Connections clicked.')}>
              <Text style={styles.connection_photos_count_txt}>20</Text>
              <FontAwesome name={I18nManager.isRTL ? "angle-left" : "angle-right"} size={20} color='#d6d6d6' />
            </TouchableOpacity>
          </View>
        {/* END TO SETUP SOCIAL VIEW */}

          <View style={styles.connection_img_view}>
        {/* BEGIN TO SETUP CONNECTIMAGE VIEW */}
            <View style={styles.connect_img}>
              <Image source={GlobalInclude.Image3} style={styles.connection_user_img}/>
              <TouchableOpacity onPress={()=>alert("Facebook button clicked.")} style={[styles.social_bg, {backgroundColor: '#4c70aa'}]}>
                <FontAwesome name="facebook" size={10} color='#ffffff'/>
              </TouchableOpacity>
            </View>
        {/* END TO SETUP CONNECTIMAGE VIEW */}

        {/* BEGIN TO SETUP CONNECTIMAGE VIEW */}
            <View style={styles.connect_img}>
              <Image source={GlobalInclude.Image1} style={styles.connection_user_img}/>
              <TouchableOpacity onPress={()=>alert("Twitter button clicked.")} style={[styles.social_bg, {backgroundColor: '#00b6ee'}]}>
                <FontAwesome name="twitter" size={10} color='#ffffff'/>
              </TouchableOpacity>
            </View>
        {/* END TO SETUP CONNECTIMAGE VIEW */}

        {/* BEGIN TO SETUP CONNECTIMAGE VIEW */}
            <View style={styles.connect_img}>
              <Image source={GlobalInclude.Image4} style={styles.connection_user_img}/>
              <TouchableOpacity onPress={()=>alert("Twitter button clicked.")} style={[styles.social_bg, {backgroundColor: '#00b6ee'}]}>
                <FontAwesome name="twitter" size={10} color='#ffffff'/>
              </TouchableOpacity>
            </View>
        {/* END TO SETUP CONNECTIMAGE VIEW */}

        {/* BEGIN TO SETUP CONNECTIMAGE VIEW */}
            <View style={styles.connect_img}>
              <Image source={GlobalInclude.Image5} style={styles.connection_user_img}/>
              <TouchableOpacity onPress={()=>alert("Facebook button clicked.")} style={[styles.social_bg, {backgroundColor: '#4c70aa'}]}>
                <FontAwesome name="facebook" size={10} color='#ffffff'/>
              </TouchableOpacity>
            </View>
        {/* END TO SETUP CONNECTIMAGE VIEW */}

        {/* BEGIN TO SETUP CONNECTIMAGE VIEW */}
            <View style={styles.connect_img}>
              <Image source={GlobalInclude.Image6} style={styles.connection_user_img}/>
              <TouchableOpacity onPress={()=>alert("Twitter button clicked.")} style={[styles.social_bg, {backgroundColor: '#00b6ee'}]}>
                <FontAwesome name="twitter" size={10} color='#ffffff'/>
              </TouchableOpacity>
            </View>
        {/* END TO SETUP CONNECTIMAGE VIEW */}
          </View>
        </View>

        <View style={styles.card_bg}>
        {/* BEGIN TO SETUP PHOTOS VIEW */}
          <View style={styles.photod_header}>
            <Text style={styles.connection_photos_txt}>Photos</Text>
            <TouchableOpacity style={styles.connect_count_view} onPress={()=>alert('See More Photos clicked')}>
              <Text style={styles.connection_photos_count_txt}>10</Text>
              <FontAwesome name={I18nManager.isRTL ? "angle-left" : "angle-right"} size={20} color='#d6d6d6' />
            </TouchableOpacity>
          </View>
        {/* END TO SETUP PHOTOS VIEW */}

        {/* BEGIN TO SETUP PHOTOSIMAGE VIEW */}
          <View style={styles.photo_img_view}>
            <Image style={styles.gallery_img} source={GlobalInclude.Image7}/>
            <View style={styles.img_view}/>
            <Image style={styles.gallery_img} source={GlobalInclude.Image8}/>
            <View style={styles.img_view}/>
            <Image style={styles.gallery_img} source={GlobalInclude.Image9}/>
          </View>
        {/* END TO SETUP PHOTOSIMAGE VIEW */}
        </View>

        </Content>
      </Container>
    )
  }

}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  main_cont: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
    flexDirection: 'column'
  },
  header: {
    backgroundColor: '#ff6347',
    height: 65,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    borderBottomColor: 'transparent',
    paddingTop: 15,
  },
  left:{
    flex:1
  },
  backArrow: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  body:{
    flex:2,
    alignItems:'center'
  },
  title:{
    marginTop: 2,
    color:'white',
    fontSize: moderateScale(18),
    fontFamily: font_type.FontBold
  },
  divider_horizontal:{
    height: (Dimensions.get('window').height) * 0.001,
    width: Dimensions.get('window').width * 0.950,
    backgroundColor: '#e1e1e1',
    justifyContent: 'center',
    alignSelf:'center',
    alignItems: 'center'
  },
  header_container: {
    marginTop: (Dimensions.get('window').height) * 0.001,
  	width:(Dimensions.get('window').width),
  	padding: (Dimensions.get('window').height * 0.017),
  	backgroundColor: 'white',
  },
  profile_container: {
  	paddingBottom: (Dimensions.get('window').height * 0.03),
  	flexDirection: 'row',
  	justifyContent: 'space-between',
  	alignItems: 'center',
  },
  profile_body_sec: {
  	flexDirection: 'row',
  	justifyContent: 'flex-start',
  	alignItems: 'center'
  },
  profile_image: {
  	height:(Dimensions.get('window').height * 0.08),
  	width:(Dimensions.get('window').height * 0.08),
  	borderRadius:(Dimensions.get('window').height * 0.04),
  },
  profile_detail: {
  	marginLeft: (Dimensions.get('window').width * 0.03)
  },
  profile_name: {
  	fontFamily: font_type.FontBold,
  	fontSize: moderateScale(17),
  	color:'#363636',
  },
  post: {
  	fontFamily: font_type.FontLight,
  	fontSize: moderateScale(12),
  	color:'#b7b7b7',
  	backgroundColor: 'rgba(0,0,0,0)',
  	marginTop: (Dimensions.get('window').height * 0.004),
    textAlign: 'left'
  },
  active_button: {
  	height:(Dimensions.get('window').height * 0.055),
  	width:(Dimensions.get('window').width * 0.3),
  	borderRadius:(Dimensions.get('window').height * 0.0275),
  	backgroundColor: '#ff6347',
  	alignItems: 'center',
  	justifyContent: 'center',
  	overflow: 'hidden'
  },
  normal_button: {
  	height:(Dimensions.get('window').height * 0.055),
  	width:(Dimensions.get('window').width * 0.3),
  	borderRadius:(Dimensions.get('window').height * 0.0275),
  	borderWidth: 1.5,
  	borderColor: '#ff6347',
  	alignItems: 'center',
  	justifyContent: 'center',
  	overflow: 'hidden'
  },
  active_button_txt: {
  	fontFamily: font_type.FontLight,
  	fontSize: moderateScale(17),
  	color: 'white',
  },
  normal_button_txt: {
  	fontFamily: font_type.FontLight,
  	fontSize: moderateScale(17),
  	color: '#000000',
  },
  follow_container: {
  	flexDirection: 'row',
  	alignItems: 'center',
  	justifyContent: 'center',
    borderRadius: (Dimensions.get('window').height) * 0.060,
    borderWidth: 1,
    borderColor: '#e1e1e1'
  },
  follow_sec: {
  	flex:1,
  	alignItems: 'center',
  	justifyContent: 'center',
    paddingTop: (Dimensions.get('window').height * 0.008),
    paddingBottom: (Dimensions.get('window').height) * 0.008,
  },
  follow_count: {
  	fontFamily: font_type.FontBold,
  	fontSize: moderateScale(17),
  	color: '#363636'
  },
  follow_text: {
  	fontFamily: font_type.FontLight,
  	fontSize: moderateScale(12),
  	color: '#959595'
  },
  vertical_separator:{
    width: (Dimensions.get('window').height) * 0.001,
    backgroundColor:'#e1e1e1',
    height: (Dimensions.get('window').height) * 0.07
  },
  content_bg:{
    backgroundColor: '#e6e6e6'
  },
  card_bg: {
    backgroundColor: 'white',
    width: (Dimensions.get('window').width),
    alignSelf: 'center',
    marginTop: (Dimensions.get('window').height) * 0.02
  },
  about_label_txt: {
    margin: (Dimensions.get('window').width) * 0.03,
    color: "#595959",
    fontSize: moderateScale(14),
    textAlign: 'left'
  },
  about_description_txt: {
    color: "#d2d2d2",
    fontSize: moderateScale(14),
    marginLeft: (Dimensions.get('window').width) * 0.03,
    marginRight: (Dimensions.get('window').width) * 0.03,
    marginBottom: (Dimensions.get('window').width) * 0.03,
    textAlign: 'left'
  },
  fb_twitter_google_linkedin_view:{
    flexDirection: 'row',
    marginTop: (Dimensions.get('window').width) * 0.04,
    marginLeft: (Dimensions.get('window').width) * 0.03,
    marginRight: (Dimensions.get('window').width) * 0.03,
    marginBottom: (Dimensions.get('window').width) * 0.04
  },
  fb_view:{
    width: (Dimensions.get('window').width) * 0.22,
    alignItems: 'center',
    justifyContent: 'center'
  },
  google_img:{
    height: (Dimensions.get('window').height) * 0.035,
    width: (Dimensions.get('window').width) * 0.070,
    resizeMode: 'contain'
  },
  connect_text_view:{
    margin: (Dimensions.get('window').width) * 0.03,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  connection_photos_txt: {
    color: "#6f6f6f",
    fontSize: moderateScale(15)
  },
  connect_count_view:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  connection_photos_count_txt: {
    color: "#b7b7b7",
    fontSize: moderateScale(14),
    marginRight: (Dimensions.get('window').width) * 0.012
  },
  connection_img_view:{
    flexDirection: 'row',
    marginLeft: (Dimensions.get('window').width) * 0.03,
    marginRight: (Dimensions.get('window').width) * 0.03,
    marginTop: (Dimensions.get('window').width) * 0.02,
    marginBottom: (Dimensions.get('window').width) * 0.04
  },
  connect_img:{
    width: (Dimensions.get('window').width) * 0.176,
    flexDirection: 'row',
    marginLeft: (Dimensions.get('window').height) * 0.004
  },
  connection_user_img: {
    width: (Dimensions.get('window').width) * 0.14,
    height: (Dimensions.get('window').width) * 0.14,
    borderRadius: (Dimensions.get('window').width) * 0.07,
    resizeMode: 'cover'
  },
  social_bg: {
  	width:(Dimensions.get('window').height*0.035),
  	height:(Dimensions.get('window').height*0.035),
  	borderRadius:(Dimensions.get('window').height*0.0175),
  	borderWidth: 1.5,
  	borderColor: 'white',
  	right:(Dimensions.get('window').width*0.015),
  	bottom:(Dimensions.get('window').height*0.009),
  	position: 'absolute',
  	alignItems: 'center',
  	justifyContent: 'center'
  },
  photod_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: (Dimensions.get('window').width) * 0.03
  },
  photo_img_view:{
   flexDirection: 'row',
   margin: (Dimensions.get('window').width) * 0.03
  },
  gallery_img: {
    width: (Dimensions.get('window').width) * 0.3,
    height: (Dimensions.get('window').height) * 0.18,
    resizeMode: 'cover'
  },
  img_view:{
    width: (Dimensions.get('window').width) * 0.02,
    height: (Dimensions.get('window').height) * 0.18,
    backgroundColor: 'rgba(0,0,0,0)'
  },
});
// END TO MAKE STYLE
