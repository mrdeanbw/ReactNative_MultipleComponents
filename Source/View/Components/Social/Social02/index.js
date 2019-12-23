import React, { Component } from "react";
import {Text,Image,StatusBar,Platform,ImageBackground,Dimensions,TouchableOpacity,ListView,FlatList,BackHandler,I18nManager,StyleSheet} from "react-native";
import {Container,Button,Right,Left,ListItem,Content,Body,Header} from "native-base";
import Swiper from "react-native-swiper";
import { View } from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
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

export default class Social02 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
        name: "Lorem ipsum",
        postImage: "",
        profileImage: GlobalInclude.Image5,
        time: "8 mins",
        status: "Lorem ipsum",
        statusBgColor: "#4cd964",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: 2,
        name: "Lorem ipsum",
        postImage: GlobalInclude.Image1,
        profileImage:GlobalInclude.Image2,
        time: "15 mins",
        status: "Lorem ipsum",
        statusBgColor: "#f7941d",
        description:
          "Sed iaculis elit velit, at faucibus metus imperdiet sed. Sed dictum, nunc et tempor accumsan, libero turpis ullamcorper quam, ut efficitur dolor augue sed sapien."
      },
      {
        id: 3,
        name: "Lorem ipsum",
        postImage: "",
        profileImage:GlobalInclude.Image3,
        time: "20 mins",
        status: "Lorem ipsum",
        statusBgColor: "#0691ce",
        description:
          "Sed iaculis elit velit, at faucibus metus imperdiet sed. Sed dictum, nunc et tempor accumsan, libero turpis ullamcorper quam, ut efficitur dolor augue sed sapien."
      }
    ];

    return (
      <Container style={styles.main}>
      {/* BEGIN TO SETUP HEADER VIEW */}
        <Header style={styles.header}>
        {/* BEGIN TO SETUP LEFT VIEW*/}
          <Left style={styles.left}>
            <TouchableOpacity style={styles.back_arrow} onPress={() => this.props.navigation.goBack()}>
              <View style={styles.menu_btn_view}>
                {I18nManager.isRTL ? (
                  <MaterialIcons name="chevron-right" size={25} color="white" />
                ) : (
                  <MaterialIcons name="chevron-left" size={25} color="white" />
                )}
              </View>
            </TouchableOpacity>
          </Left>
        {/* END TO SETUP LEFT VIEW*/}

        {/* BEGIN TO SETUP BODY VIEW */}
          <Body style={styles.body}>
            <Text style={styles.text_title}>News Feed</Text>
          </Body>
        {/* END TO SETUP BODY VIEW */}

        {/* BEGIN TO SETUP RIGHT VIEW */}
          <Right style={styles.right}>
            <TouchableOpacity onPress={() => alert("Search Button Click")}>
              <Ionicons name="ios-search" size={25} color="white" />
            </TouchableOpacity>
          </Right>
        {/* END TO SETUP RIGHT VIEW */}
        </Header>
      {/* END TO SETUP HEADER VIEW */}
        <Content>
          <View animation="bounceInUp" duration={1100} delay={1400}>
            {data.map((item, index) => {
              return (
                <View style={index === data.length - 1 ? styles.lastrow_bg : styles.row_bg} key={index}>
                  <View style={styles.row_header_view}>
                    <Image style={styles.profile_img} source={item.profileImage}/>
                    {/* BEGIN TO SETUP NAME AND TIME VIEW */}
                    <View style={styles.row_header_name_view}>
                      <Text style={styles.row_name_txt}>{item.name}</Text>
                      <Text style={styles.row_time_txt}>{item.time}</Text>
                    </View>
                    {/* END TO SETUP NAME AND TIME VIEW */}

                  {/* BEGIN TO SETUP RIGHT VIEW */}
                    <Right>
                      <TouchableOpacity onPress={() => alert(item.status)} style={[styles.status_view,{ backgroundColor: item.statusBgColor }]}>
                        <Text style={styles.status_txt}>{item.status}</Text>
                      </TouchableOpacity>
                    </Right>
                  {/* END TO SETUP RIGHT VIEW */}
                  </View>
                  <View style={[styles.divider_horizontal,{ marginTop: Dimensions.get("window").height * 0.015 }]}/>
                {/* BEGIN TO SETUP DESCRIPTION VIEW */}
                  <View style={styles.description_view}>
                    <Text style={styles.row_desc_txt}>{item.description}</Text>
                  </View>
                {/* END TO SETUP DESCRIPTION VIEW */}

                {/* BEGIN TO SETUP POSTIMAGE VIEW */}
                  {item.postImage == "" ? null : (
                    <Image style={styles.post_desc_image} source={item.postImage}/>
                  )}
                {/* END TO SETUP POSTIMAGE VIEW */}

                  <View style={[styles.divider_horizontal,{marginTop: Dimensions.get("window").height * 0.022 }]}/>
                {/* BEGIN TO SETUP LIKE AND COMMENT AND SHARE VIEW */}
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
                {/* END TO SETUP LIKE AND COMMENT AND SHARE VIEW */}
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  body: {
    flex: 3,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  text_title: {
    color: 'white',
    fontSize: moderateScale(16),
    marginTop: (Dimensions.get("window").height * 0.001),
    alignSelf: 'center',
    fontFamily: font_type.FontLight,
  },
  right: {
    flex: 0.5
  },
  menu_btn_view:{
    flexDirection: 'row'
  },
  alert_red:{
    backgroundColor:'red',
    height: (Dimensions.get("window").height) * 0.012,
    width: (Dimensions.get("window").height) * 0.012,
    borderRadius: (Dimensions.get("window").height) * 0.006,
    marginLeft: -(Dimensions.get("window").height) * 0.010,
    marginTop:(Dimensions.get("window").height) * 0.003
  },
  main: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: "#F2F2F2",
    flexDirection: 'column'
  },
  row_bg: {
    width: (Dimensions.get("window").width),
    backgroundColor: 'white',
    justifyContent: 'center',
    marginBottom: (Dimensions.get("window").height) * 0.018,
  },
  lastrow_bg: {
    width: (Dimensions.get("window").width),
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  profile_img: {
    width: (Dimensions.get("window").width) * 0.12,
    height: (Dimensions.get("window").width) * 0.12,
    borderRadius: (Dimensions.get("window").width) * 0.06,
    alignSelf: 'flex-start',
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
    width: (Dimensions.get("window").width) * 0.90,
    height: (Dimensions.get("window").height) * 0.001,
    backgroundColor: "#F2F2F2",
    alignSelf: 'center',
  },
  like_comment_share_text: {
    fontFamily: font_type.FontLight,
    fontSize: moderateScale(17),
    marginLeft: (Dimensions.get("window").width) * 0.03,
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
  status_view:{
    borderRadius: (Dimensions.get("window").height) * 0.030,
    marginTop: -(Dimensions.get("window").height) * 0.030,
    marginRight: -(Dimensions.get("window").height) * 0.010
  },
  status_txt: {
    color: 'white',
    fontSize: moderateScale(10),
    fontFamily: font_type.FontLight,
    marginLeft: (Dimensions.get("window").width) * 0.05,
    marginRight: (Dimensions.get("window").width) * 0.05,
    marginTop: (Dimensions.get("window").height) * 0.004,
    marginBottom: (Dimensions.get("window").height) * 0.004,
  },
  row_header_view:{
    flexDirection: 'row',
    marginTop: (Dimensions.get("window").height) * 0.022,
    width: (Dimensions.get("window").width) * 0.85,
    alignSelf: 'center'
  },
  row_header_name_view:{
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: (Dimensions.get("window").width) * 0.03
  },
  description_view:{
    width: (Dimensions.get("window").width) * 0.85,
    alignSelf: 'center'
  },
  post_desc_image:{
    width: (Dimensions.get("window").width) * 0.85,
    height: (Dimensions.get("window").height) * 0.20,
    alignSelf: 'center',
    marginTop: (Dimensions.get("window").height) * 0.015,
    resizeMode:'stretch'
  },
  like_comment_share_view:{
    flexDirection: 'row',
    width: (Dimensions.get("window").width) * 0.85,
    alignSelf: 'center',
    marginTop: (Dimensions.get("window").height) * 0.015,
    marginBottom: (Dimensions.get("window").height) * 0.015,
  },
  like_view:{
    flexDirection: 'row',
    width: (Dimensions.get("window").width) * 0.23,
    alignItems: 'center'
  },
  comment_view:{
    flexDirection: 'row',
    width: (Dimensions.get("window").width) * 0.34,
    alignItems: 'center',
    marginLeft: (Dimensions.get("window").width) * 0.045
  },
  share_view:{
    flexDirection: 'row',
    width: (Dimensions.get("window").width) * 0.28,
    alignItems: 'center',
    marginLeft: (Dimensions.get("window").width) * 0.045
  }
});
// END TO MAKE STYLE
