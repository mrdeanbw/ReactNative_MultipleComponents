import React, { Component } from "react";
import {Text,Image,StatusBar,Platform,Dimensions,TouchableOpacity,I18nManager,StyleSheet} from "react-native";
import {Container,Button,Right,Left,Content,Body,Header,Input} from "native-base";
const { width, height } = Dimensions.get("window");
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

export default class Social08 extends Component {
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
        profileImage:GlobalInclude.Image1,
        postImage: GlobalInclude.Image2,
        time: "1 mins",
        likeCount: 1,
        commentCount: 1
      },
      {
        id: 2,
        name: "Lorem ipsum",
        profileImage:GlobalInclude.Image3,
        postImage: GlobalInclude.Image5,
        time: "2 mins",
        likeCount: 2,
        commentCount: 2
      },
      {
        id: 3,
        name: "Lorem ipsum",
        profileImage:GlobalInclude.Image6,
        postImage:GlobalInclude.Image8,
        time: "3 mins",
        likeCount: 3,
        commentCount: 3
      },
      {
        id: 4,
        name: "Lorem ipsum",
        profileImage:GlobalInclude.Image9,
        postImage:GlobalInclude.Image7,
        time: "4 mins",
        likeCount: 4,
        commentCount: 4
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
                <MaterialIcons name="chevron-right" size={25} color="white" />
              ) : (
                <MaterialIcons name="chevron-left" size={25} color="white" />
              )}
            </TouchableOpacity>
          </Left>
        {/* END TO SETUP LEFT VIEW */}

        {/* BEGIN TO SETUP BODY VIEW */}
          <Body style={styles.body}>
            <Text style={styles.text_title}>Timeline</Text>
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
          <View style={styles.search_view_bg}>
          {/* BEGIN TO SETUP SEARCH VIEW */}
            <View style={styles.search_view}>
              <Ionicons name="ios-search" size={20} color="#8e8e93" style={{ marginLeft: 10 }}/>
              <Input
                style={styles.searchInput}
                placeholder="Search"
                placeholderTextColor="#8e8e93"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="default"
                selectionColor="#8e8e93"/>
            </View>
          {/* END TO SETUP SEARCH VIEW */}
          </View>
          <View style={styles.list_main_view} animation="zoomInUp" duration={1100} delay={1400}>
            {data.map((item, index) => {
              return (
                <View style={index === data.length - 1 ? styles.last_row_bg : styles.row_bg} key={index}>
                 {/* BEGIN TO SETUP POSTIMAGE VIEW */}
                  {item.postImage == "" ? null : (
                    <Image style={styles.post_desc_img} source={item.postImage} />
                  )}
                 {/* END TO SETUP POSTIMAGE VIEW */}
                  <View style={styles.post_info_view}>
                  {/* BEGIN TO SETUP PROFILEIMAGE VIEW */}
                    <Image style={styles.profile_img} source={item.profileImage}/>
                  {/* END TO SETUP PROFILEIMAGE VIEW */}

                  {/* BEGIN TO SETUP NAME AND TIME VIEW */}
                    <View style={styles.post_name_time_view}>
                      <Text style={styles.row_name_txt}>{item.name}</Text>
                      <Text style={styles.row_time_txt}>{item.time}</Text>
                    </View>
                  {/* END TO SETUP NAME AND TIME VIEW */}

                  {/* BEGIN TO SETUP LIKE VIEW */}
                    <View style={[styles.like_comment_view,{width: Dimensions.get("window").width * 0.16 }]}>
                      <TouchableOpacity onPress={() => alert("Like Button Click")}>
                        <FontAwesome name="heart" size={18} color="#d4d4d4" />
                      </TouchableOpacity>
                      <Text style={styles.like_comment_text}>
                        {item.likeCount}
                      </Text>
                    </View>
                  {/* END TO SETUP LIKE VIEW */}

                  {/* BEGIN TO SETUP COMMENT VIEW */}
                    <View style={[styles.like_comment_view,{width: Dimensions.get("window").width * 0.1 }]}>
                      <TouchableOpacity onPress={() => alert("Comment Button Click")}>
                        <Image style={styles.like_comment_image} source={require('./ic_comments.png')}/>
                      </TouchableOpacity>
                      <Text style={styles.like_comment_text}>
                        {item.commentCount}
                      </Text>
                    </View>
                  {/* END TO SETUP COMMENT VIEW */}
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
    backgroundColor: "#ff6347",
    height: Dimensions.get("window").height * 0.1,
    borderBottomWidth: 0,
    paddingTop: Dimensions.get("window").height * 0.03,
    elevation: 0,
    paddingLeft: Dimensions.get("window").width * 0.05,
    paddingRight: Dimensions.get("window").width * 0.05
  },
  back_arrow: {
    width: 30,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  left: {
    flex: 0.5,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  body: {
    flex: 3,
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0)'
  },
  text_title: {
    color: 'white',
    fontSize: moderateScale(16),
    marginTop: Dimensions.get("window").height * 0.001,
    alignSelf: "center",
    fontFamily: font_type.FontLight
  },
  right: {
    flex: 0.5
  },
  main: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: "#F2F2F2",
    flexDirection: "column"
  },
  last_row_bg: {
    width: Dimensions.get("window").width,
    backgroundColor: 'white',
    justifyContent: "center"
  },
  row_bg: {
    width: Dimensions.get("window").width,
    backgroundColor: 'white',
    justifyContent: "center",
    marginBottom: Dimensions.get("window").height * 0.025
  },
  profile_img: {
    width: Dimensions.get("window").width * 0.12,
    height: Dimensions.get("window").width * 0.12,
    borderRadius: Dimensions.get("window").width * 0.06,
    alignSelf: "flex-start"
  },
  row_name_txt: {
    color: "#363636",
    fontSize: moderateScale(16),
    fontFamily: font_type.FontBold,
    textAlign: "left"
  },
  row_time_txt: {
    color: "#b7b7b7",
    fontSize: moderateScale(14),
    fontFamily: font_type.FontLight
  },
  like_comment_text: {
    fontFamily: font_type.FontLight,
    fontSize: moderateScale(14),
    marginLeft: Dimensions.get("window").width * 0.02,
    color: "#6f6f6f"
  },
  like_comment_image: {
    width: Dimensions.get("window").width * 0.06,
    height: Dimensions.get("window").height * 0.03,
    resizeMode: "contain"
  },
  search_text: {
    color: "#a8a8a8",
    fontSize: moderateScale(15),
    fontFamily: font_type.FontLight,
    marginLeft: Dimensions.get("window").width * 0.03
  },
  list_main_view: {
    width: Dimensions.get("window").width,
    backgroundColor: "#f2f2f2"
  },
  post_desc_img: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.35,
    alignSelf: "center",
    resizeMode: "stretch"
  },
  post_info_view: {
    backgroundColor: 'white',
    flexDirection: "row",
    width: Dimensions.get("window").width * 0.92,
    alignSelf: "center",
    marginTop: Dimensions.get("window").height * 0.022,
    marginBottom: Dimensions.get("window").height * 0.022
  },
  post_name_time_view: {
    flexDirection: "column",
    marginLeft: Dimensions.get("window").width * 0.04,
    width: Dimensions.get("window").width * 0.5,
    alignSelf: "center"
  },
  like_comment_view: {
    flexDirection: "row",
    marginTop: Dimensions.get("window").height * 0.006
  },
  search_view_bg: {
    backgroundColor: "#e9e9e9",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.08,
    justifyContent: "center",
    alignItems: "center"
  },
  search_view: {
    backgroundColor: 'white',
    borderRadius: 5,
    width: Dimensions.get("window").width * 0.95,
    height: Dimensions.get("window").height * 0.06,
    alignItems: "center",
    flexDirection: "row"
  },
  search_text: {
    color: "#8e8e93",
    fontSize: moderateScale(15),
    fontFamily: font_type.FontLight,
    marginLeft: Dimensions.get("window").width * 0.03
  }
});
// END TO MAKE STYLE
