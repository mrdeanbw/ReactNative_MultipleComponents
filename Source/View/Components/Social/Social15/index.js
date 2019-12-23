import React, { Component } from 'react';
import { Text,Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity,View,I18nManager,StyleSheet} from 'react-native';
import { Container, Button,Right,Left,Content,Body,Header,Icon,Title} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
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

export default class Social15 extends Component {

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
      {/* BEGIN TO SETUP IMAGEBACKGROUND VIEW */}
        <ImageBackground source={GlobalInclude.Image1} style={styles.img_container}>
      {/* BEGIN TO SETUP HEADER VIEW */}
        <Header style={styles.header}>
        {/* BEGIN TO SETUP LEFT VIEW */}
            <Left style={styles.left}>
              <TouchableOpacity  style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
              {
                (I18nManager.isRTL)
                ?
                    <FontAwesome name="angle-right" size={25} color='#000000'/>
                :
                    <FontAwesome name="angle-left" size={25} color='#000000'/>
              }
              </TouchableOpacity>
            </Left>
        {/* END TO SETUP LEFT VIEW */}

        {/* BEGIN TO SETUP BODY VIEW */}
            <Body style={styles.body}>
              <Title style={styles.title_text}>Lorem Ipsum</Title>
            </Body>
        {/* END TO SETUP BODY VIEW */}

        {/* BEGIN TO SETUP RIGHT VIEW */}
            <Right style={styles.right}>
              <Button transparent></Button>
            </Right>
        {/* END TO SETUP RIGHT VIEW */}
          </Header>
      {/* END TO SETUP HEADER VIEW */}
          <View style={styles.space_bg}>
            <View style={styles.profile_view}>
            {/* BEGIN TO SETUP PROFILE IMAGE VIEW */}
              <Image style={styles.profile_img} source={GlobalInclude.Image3}/>
            {/* END TO SETUP PROFILE IMAGE VIEW */}

            {/* BEGIN TO SETUP NAME AND ADDRESS VIEW */}
              <View style={styles.name_address_view}>
                <Text style={styles.name}>Lorem ipsum</Text>
                <View style={styles.address_view}>
                  <TouchableOpacity>
                    <Entypo name="location-pin" size={16} color="#ffffff" />
                  </TouchableOpacity>
                  <Text style={styles.address}>Lorem ipsum</Text>
                </View>
              </View>
            {/* END TO SETUP NAME AND ADDRESS VIEW */}
            </View>
            {/* BEGIN TO SETUP DESCRIPTION VIEW */}
              <Text style={styles.desc_txt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ullamcorper, nulla id efficitur dignissim, odio nisl porta tortor, sit amet dictum quam massa sit amet justo</Text>
            {/* END TO SETUP DESCRIPTION VIEW */}

            {/* BEGIN TO SETUP LIKE AND COMMENT AND MORE VIEW */}
            <View style={styles.like_comment_view}>
            {/* BEGIN TO SETUP LIKE VIEW */}
              <View style={styles.like_view}>
                <TouchableOpacity onPress={()=>alert("Like Button Click")}>
                  <FontAwesome name="heart" size={16} color="#ffffff" />
                </TouchableOpacity>
                <Text style={styles.like_comment_text}>1</Text>
              </View>
             {/* END TO SETUP LIKE VIEW */}

             {/* BEGIN TO SETUP COMMENT VIEW */}
              <View style={styles.like_view}>
                <TouchableOpacity onPress={()=>alert("Comment Button Click")}>
                  <Image style={styles.like_comment_image} source={require('./ic_comment_white.png')}/>
                </TouchableOpacity>
                <Text style={styles.like_comment_text}>2</Text>
              </View>
             {/* END TO SETUP COMMENT VIEW */}

             {/* BEGIN TO SETUP MORE VIEW */}
              <Right>
                <TouchableOpacity onPress={()=>alert("More Button Click")}>
                  <Ionicons name="ios-more" size={30} color="#ffffff" />
                </TouchableOpacity>
              </Right>
             {/* END TO SETUP MORE VIEW */}
            </View>
           {/* END TO SETUP LIKE AND COMMENT AND MORE VIEW */}
          </View>
        </ImageBackground>
      {/* END TO SETUP IMAGEBACKGROUND VIEW */}
      </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  img_container: {
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
  },
  main: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: "#F2F2F2",
    flexDirection: 'column'
  },
  left:{
    flex: 1
  },
  back_arrow:{
    width: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  title_text:{
    marginTop: 2,
    color: '#000000',
    fontSize: moderateScale(16),
    fontFamily: font_type.FontBold
  },
  right:{
    flex: 1
  },
  header: {
    elevation: 0,
    backgroundColor: 'rgba(0,0,0,0)',
    height: (Dimensions.get("window").height) * 0.1,
    width: Dimensions.get("window").width,
    flexDirection: 'row',
    borderBottomColor: 'rgba(0,0,0,0)',
    ...Platform.select({
        ios: {
            paddingTop: (Dimensions.get("window").height) * 0.015,
        },
        android: {
          marginTop: (Dimensions.get("window").height) * 0.020,
        }
    }),
  },
  space_bg: {
    position: 'absolute',
    bottom:0,
    width: (Dimensions.get("window").width),
    marginBottom: (Dimensions.get("window").height) * 0.015
  },
  profile_img: {
    width: (Dimensions.get("window").width) * 0.12,
    height: (Dimensions.get("window").width) * 0.12,
    borderRadius: (Dimensions.get("window").width) * 0.06,
    alignSelf: 'flex-start',
    borderWidth: 2,
    borderColor: 'white'
  },
  desc_txt: {
    color: 'white',
    fontSize: moderateScale(18),
    fontFamily: font_type.FontBold,
    marginLeft: (Dimensions.get("window").width) * 0.06,
    marginRight: (Dimensions.get("window").width) * 0.05,
    marginTop: (Dimensions.get("window").height) * 0.022,
    backgroundColor: 'rgba(0,0,0,0)',
    textAlign: 'left'
  },
  like_comment_text: {
    fontFamily: font_type.FontBold,
    fontSize: moderateScale(16),
    marginLeft: (Dimensions.get("window").width) * 0.03,
    color: 'white'
  },
  like_comment_image: {
    width: (Dimensions.get("window").width) * 0.047,
    height: (Dimensions.get("window").width) * 0.047,
    resizeMode: 'contain',
  },
  profile_view:{
    marginLeft: (Dimensions.get("window").width) * 0.06,
    marginRight: (Dimensions.get("window").width) * 0.06,
    flexDirection: 'row'
  },
  name_address_view:{
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: (Dimensions.get("window").width) * 0.03,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  name:{
    fontFamily: font_type.FontBold,
    fontSize: moderateScale(16),
    color: 'white',
  },
  address_view:{
    flexDirection: 'row'
  },
  address:{
    color: 'white',
    fontFamily: font_type.FontLight,
    fontSize: moderateScale(14),
    marginLeft: (Dimensions.get("window").width) * 0.015,
  },
  like_comment_view:{
    flexDirection: 'row',
    marginLeft: (Dimensions.get("window").width) * 0.06,
    marginRight: (Dimensions.get("window").width) * 0.06,
    marginTop: (Dimensions.get("window").height) * 0.030,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  like_view:{
    flexDirection: 'row',
    width: (Dimensions.get("window").width) * 0.25
  },
});
// END TO MAKE STYLE
