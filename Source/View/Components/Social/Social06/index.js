import React, { Component } from "react";
import {Text,Image,StatusBar,Platform,Dimensions,TouchableOpacity,TextInput,I18nManager,StyleSheet} from "react-native";
import {Container,Button,Right,Left,Content,Body,Header} from "native-base";
import { View } from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Foundation from "react-native-vector-icons/Foundation";
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


export default class Social06 extends Component {

  render() {

    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW

    //BEGIN TO SETUP DATA
    var data = [
      {
        id: 1,
        name: "Lorem ipsum",
        postImage: GlobalInclude.Image1,
        profileImage: GlobalInclude.Image2,
        time: "1 mins",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: 2,
        name: "Lorem ipsum",
        postImage: GlobalInclude.Image3,
        profileImage: GlobalInclude.Image4,
        time: "2 mins",
        description:
          "Sed iaculis elit velit, at faucibus metus imperdiet sed. Sed dictum, nunc et tempor accumsan, libero turpis ullamcorper quam, ut efficitur dolor augue sed sapien."
      },
      {
        id: 3,
        name: "Lorem ipsum",
        postImage:GlobalInclude.Image5,
        profileImage: GlobalInclude.Image6,
        time: "3 mins",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ];
    //END TO SETUP DATA

    return (
      <Container style={styles.main}>
      {/* BEGIN TO SETUP HEADER VIEW */}
        <Header style={styles.header}>
        {/* BEGIN TO SETUP LEFT VIEW */}
          <Left style={styles.left}>
            <TouchableOpacity style={styles.back_arrow} onPress={() => this.props.navigation.goBack()}>
              {I18nManager.isRTL ? (
                <FontAwesome name="angle-right" size={25} color="white" />
              ) : (
                <FontAwesome name="angle-left" size={25} color="white" />
              )}
            </TouchableOpacity>
          </Left>
        {/* END TO SETUP LEFT VIEW */}

        {/* BEGIN TO SETUP BODY VIEW */}
          <Body style={styles.body}>
          {/* BEGIN TO SETUP SEARCH VIEW */}
            <View style={styles.search_view}>
              <Ionicons name="ios-search" size={18} color="#9c9c9c" />
            </View>

            <TextInput
              style={styles.search_text}
              placeholder="I'm looking for..."
              placeholderTextColor="#c3c3c3"
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              keyboardType="default"
              selectionColor={"#6f6f6f"}/>
          {/* END TO SETUP SEARCH VIEW */}
          </Body>
        {/* END TO SETUP BODY VIEW */}

        {/* BEGIN TO SETUP RIGHT VIEW */}
          <Right style={styles.right}>
            <TouchableOpacity onPress={() => alert("User Group Button Click")}>
              <Image style={styles.user_group_icon} source={require('./ic_user.png')} />
            </TouchableOpacity>
          </Right>
        {/* END TO SETUP RIGHT VIEW */}
        </Header>
      {/* END TO SETUP HEADER VIEW */}

      {/* BEGIN TO SETUP PROFILE VIEW */}
        <View style={styles.profile_pic_view}>
          <Image style={styles.profile_img} source={GlobalInclude.Image6} />
          <Text style={styles.header_text}>What's on your mind?</Text>
        {/* BEGIN TO SETUP CAMERA VIEW */}
          <Right>
            <TouchableOpacity style={styles.camera_view} onPress={() => alert("Camera Button Click")}>
              <Foundation name="camera" size={30} color="#d4d4d4" />
            </TouchableOpacity>
          </Right>
        {/* END TO SETUP CAMERA VIEW */}
        </View>
      {/* END TO SETUP PROFILE VIEW */}
        <Content>
          <View style={styles.main_list_view} animation="zoomIn" duration={1100} delay={700}>
            {data.map((item, index) => {
              return (
                <View style={styles.row_bg} key={index}>
                  <View style={styles.row_header_view}>
                  {/* BEGIN TO SETUP PROFILE IMAGE VIEW */}
                    <Image style={styles.profile_img} source={item.profileImage}/>
                  {/* END TO SETUP PROFILE IMAGE VIEW */}

                  {/* BEGIN TO SETUP NAME AND TIME VIEW */}
                    <View style={styles.row_header_name_view}>
                      <Text style={styles.row_name_txt}>{item.name}</Text>
                      <Text style={styles.row_time_txt}>{item.time}</Text>
                    </View>
                  {/* END TO SETUP NAME AND TIME VIEW */}

                  {/* BEGIN TO SETUP MORE VIEW */}
                    <Right style={styles.more_icon}>
                      <TouchableOpacity onPress={() => alert("More Button Click")}>
                        <Ionicons name="ios-more" size={25} color="#d4d4d4" />
                      </TouchableOpacity>
                    </Right>
                  {/* END TO SETUP MORE VIEW */}
                  </View>
                  <View style={styles.divider_horizontal} />
                  {/* BEGIN TO SETUP DESCRIPTION VIEW */}
                    <View style={styles.row_description_view}>
                      <Text style={styles.row_desc_txt}>{item.description}</Text>
                    </View>
                  {/* END TO SETUP DESCRIPTION VIEW */}

                  {/* BEGIN TO SETUP POST IMAGE VIEW */}
                    {item.postImage == "" ? null : (
                      <Image style={styles.post_desc_img} source={item.postImage} />
                    )}
                  {/* END TO SETUP POST IMAGE VIEW */}
                  <View style={styles.divider_horizontal} />

                  <View style={styles.like_comment_share_view}>
                  {/* BEGIN TO SETUP LIKE VIEW */}
                    <View style={styles.like_view}>
                      <TouchableOpacity onPress={() => alert("Like Button Click")}>
                        <FontAwesome name="heart" size={18} color="#d4d4d4" />
                      </TouchableOpacity>
                      <Text style={styles.like_comment_share_text}>Like</Text>
                      <Right>
                        <View style={styles.divider_vertical} />
                      </Right>
                    </View>
                  {/* END TO SETUP LIKE VIEW */}

                  {/* BEGIN TO SETUP COMMENT VIEW */}
                    <View style={styles.comment_view}>
                      <TouchableOpacity onPress={() => alert("Comment Button Click")}>
                        <Image style={styles.like_comment_share_image} source={require('./ic_comments.png')}/>
                      </TouchableOpacity>
                      <Text style={styles.like_comment_share_text}>Comment</Text>
                      <Right>
                        <View style={styles.divider_vertical} />
                      </Right>
                    </View>
                  {/* END TO SETUP COMMENT VIEW */}

                  {/* BEGIN TO SETUP SHARE VIEW */}
                    <View style={styles.share_view}>
                      <TouchableOpacity onPress={() => alert("Share Button Click")}>
                        <MaterialIcons name="share" size={18} color="#d4d4d4" />
                      </TouchableOpacity>
                      <Text style={styles.like_comment_share_text}>Share</Text>
                    </View>
                  {/* END TO SETUP SHARE VIEW */}
                  </View>
                </View>
              );
            })}
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
    height: (Dimensions.get("window").height * 0.1),
    borderBottomWidth: 0,
    paddingTop: (Dimensions.get("window").height * 0.03),
    elevation: 0,
    paddingLeft: (Dimensions.get("window").width * 0.05),
    paddingRight: (Dimensions.get("window").width * 0.05),
  },
  back_arrow: {
    width: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  left: {
    flex: 0.5,
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: (Dimensions.get("window").height) * 0.007
  },
  body: {
    flex: 3.7,
    flexDirection:'row',
    backgroundColor: 'white',
    borderRadius:5,
    height: (Dimensions.get("window").height * 0.055),
    marginTop: (Dimensions.get("window").height * 0.012)
  },
  right: {
    flex: 0.5,
    marginLeft: (Dimensions.get("window").width) * 0.06,
    backgroundColor: 'transparent'
  },
  main: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: "#F2F2F2",
    flexDirection: 'column'
  },
  user_group_icon: {
    width: (Dimensions.get("window").width) * 0.09,
    height: (Dimensions.get("window").width) * 0.09,
    alignSelf: 'flex-end',
    resizeMode: 'contain',
    marginTop: (Dimensions.get("window").height) * 0.007
  },
  row_bg: {
    width: (Dimensions.get("window").width) * 0.92,
    alignSelf: 'center' ,
    backgroundColor: 'white',
    marginBottom: (Dimensions.get("window").height) * 0.015,
    justifyContent: 'center',
    shadowOffset:{width: 3,  height: 3},
    shadowColor: '#DFDFDF',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5
  },
  profile_img: {
    width: (Dimensions.get("window").width) * 0.12,
    height: (Dimensions.get("window").width) * 0.12,
    borderRadius: (Dimensions.get("window").width) * 0.06,
    alignSelf: 'flex-start',
  },
  more_icon: {
    marginTop: -(Dimensions.get("window").height) * 0.015
  },
  row_name_txt: {
    color: "#6f6f6f",
    fontSize: moderateScale(17),
    fontFamily: font_type.FontBold,
  },
  row_time_txt: {
    color: "#b7b7b7",
    fontSize: moderateScale(14),
    fontFamily: font_type.FontLight,
    textAlign: 'left'
  },
  row_desc_txt: {
    color: "#6f6f6f",
    fontSize: moderateScale(15),
    fontFamily: font_type.FontLight,
    marginTop: (Dimensions.get("window").height) * 0.015,
    textAlign: 'left'
  },
  divider_horizontal: {
    width: (Dimensions.get("window").width) * 0.95,
    height: 1,
    backgroundColor: "#F2F2F2",
    alignSelf: 'center',
    marginTop: (Dimensions.get("window").height) * 0.022
  },
  like_comment_share_text: {
    fontFamily: font_type.FontLight,
    fontSize: moderateScale(15),
    marginLeft: (Dimensions.get("window").width) * 0.025,
    color: "#6f6f6f"
  },
  like_comment_share_image: {
    width: (Dimensions.get("window").width) * 0.06,
    height: (Dimensions.get("window").height) * 0.03,
    resizeMode: 'contain'
  },
  divider_vertical: {
    width: (Dimensions.get("window").width) * 0.003,
    height: (Dimensions.get("window").height) * 0.04,
    backgroundColor: "#F2F2F2",
    alignSelf: 'flex-end'
  },
  search_text:{
    flex:2,
    height:(Dimensions.get("window").height) * 0.066,
    marginLeft: (Dimensions.get("window").width) * 0.02,
    fontSize: moderateScale(15),
    fontFamily: font_type.FontLight,
    color: "#c3c3c3",
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'transparent',
  },
  profile_pic_view:{
    width: (Dimensions.get("window").width),
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: (Dimensions.get("window").width) * 0.03,
    marginBottom: (Dimensions.get("window").height) * 0.015,
    alignItems: 'center',
    shadowOffset:{width: 2,  height: 2},
    shadowColor: '#DFDFDF',
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2
  },
  header_text:{
    fontFamily: font_type.FontLight,
    fontSize: moderateScale(18),
    color: "#bfbfbf",
    marginLeft: (Dimensions.get("window").height) * 0.015
  },
  row_header_view:{
    flexDirection: 'row',
    marginTop: (Dimensions.get("window").height) * 0.015,
    width: (Dimensions.get("window").width) * 0.84,
    alignSelf: 'center',
  },
  row_header_name_view:{
    flexDirection: 'column',
    marginLeft: (Dimensions.get("window").width) * 0.03
  },
  row_description_view:{
    width: (Dimensions.get("window").width) * 0.84,
    alignSelf: 'center'
  },
  post_desc_img:{
    width: (Dimensions.get("window").width) * 0.84,
    height: (Dimensions.get("window").height) * 0.20,
    alignSelf: 'center',
    marginTop: (Dimensions.get("window").height) * 0.015,
    resizeMode: 'cover'
  },
  like_comment_share_view:{
    flexDirection: 'row',
    marginTop: (Dimensions.get("window").height) * 0.015,
    marginBottom: (Dimensions.get("window").height) * 0.015,
    marginLeft: (Dimensions.get("window").width) * 0.045
  },
  like_view:{
    flexDirection: 'row',
    width: (Dimensions.get("window").width) * 0.21,
    alignItems: 'center'
  },
  comment_view:{
    flexDirection: 'row',
    width: (Dimensions.get("window").width) * 0.33,
    alignItems: 'center',
    marginLeft: (Dimensions.get("window").width) * 0.06
  },
  share_view:{
    flexDirection: 'row',
    width: (Dimensions.get("window").width) * 0.21,
    alignItems: 'center',
    marginLeft: (Dimensions.get("window").width) * 0.06
  },
  search_view:{
    justifyContent:'center',
    alignItems:'center',
    marginLeft: (Dimensions.get("window").width) * 0.03,
    backgroundColor: 'transparent',
    height:30
  },
  camera_view:{
    marginRight: (Dimensions.get("window").height) * 0.007
  },
  main_list_view:{
    width: (Dimensions.get("window").width)
  }
});
// END TO MAKE STYLE
