import React, { Component } from 'react';
import {Text,Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView, BackHandler, I18nManager,StyleSheet} from 'react-native';
import {Container, Button,Right,Left,ListItem,Content,Body, Header} from 'native-base';
import Swiper from 'react-native-swiper';
import { View} from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
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

export default class Social04 extends Component {

  render(){
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
        name:'Lorem ipsum',
        postImage:GlobalInclude.Image1,
        date: 'Oct 10,2016',
        likeCount: 10,
        commentCount: 5,
        shareCount: 55,
        postDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        name:'Lorem ipsum',
        postImage:GlobalInclude.Image3,
        date: 'Jan 21,2018',
        likeCount: 2,
        commentCount: 3,
        shareCount: 15,
        postDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        description: 'Sed iaculis elit velit, at faucibus metus imperdiet sed. Sed dictum, nunc et tempor accumsan, libero turpis ullamcorper quam, ut efficitur dolor augue sed sapien.',
      }
    ]
    //END TO SETUP DATA

  return(
  <Container style={styles.main}>
    {/* BEGIN TO SETUP HEADER VIEW */}
      <Header style={styles.header}>
        {/* BEGIN TO SETUP LEFT VIEW */}
          <Left style={styles.left}>
            <TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
            {
              (I18nManager.isRTL)?
              <MaterialIcons name="chevron-right" size={25} color='white'/>
              :<MaterialIcons name="chevron-left" size={25} color='white'/>
            }
            </TouchableOpacity>
          </Left>
        {/* END TO SETUP LEFT VIEW */}

        {/* BEGIN TO SETUP BODY VIEW */}
          <Body style={styles.body}>
            <Text style={styles.text_title}>News Feed</Text>
          </Body>
        {/* END TO SETUP BODY VIEW */}

        {/* BEGIN TO SETUP RIGHT VIEW */}
          <Right style={styles.right}>
            <TouchableOpacity onPress={()=>alert("Search")}>
              <Ionicons name="ios-search" size={25} color='white'/>
            </TouchableOpacity>
          </Right>
        {/* END TO SETUP RIGHT VIEW */}
        </Header>
     {/* END TO SETUP HEADER VIEW */}
        <Content>
        <View style={styles.row_main_view} animation="bounceInRight" duration={1100} delay={1400}>
        {
        data.map((item, index) => {
         return (
           <View style={ (index === data.length - 1) ? styles.last_row_bg : styles.row_bg} key={index}>
             {/* BEGIN TO SETUP POSTIMAGE VIEW */}
             {(item.postImage == '') ? null :
               <Image style={styles.post_desc_image} source={item.postImage}></Image>}
              {/* END TO SETUP POSTIMAGE VIEW */}
             <Text style={styles.row_post_description}>{item.postDescription}</Text>

            {/* BEGIN TO SETUP POSTDATE VIEW */}
             <View style={styles.post_date_view}>
              <Text style={[styles.post_author_date, {color: "#adadad"}]}>by</Text>
              <Text style={[styles.post_author_date, {color: "#0691ce", marginLeft: (Dimensions.get("window").width) * 0.010}]}>{item.name}</Text>
              <Text style={[styles.post_author_date, {color: "#6f6f6f", marginLeft: (Dimensions.get("window").width) * 0.025, marginTop: -(Dimensions.get("window").height) * 0.007}]}>.</Text>
              <Text style={[styles.post_author_date, {color: "#adadad", marginLeft: (Dimensions.get("window").width) * 0.025}]}>{item.date}</Text>
             </View>
             {/* END TO SETUP POSTDATE VIEW */}

             {/* BEGIN TO SETUP DESCRIPTION VIEW */}
               <View style={styles.row_desc_view}>
                 <Text style={styles.row_desc_txt}>{item.description}</Text>
               </View>
             {/* END TO SETUP DESCRIPTION VIEW */}
            <View style={styles.divider_horizontal}/>

            {/* BEGIN TO SETUP LIKE AND COMMENT AND SHARE VIEW */}
             <View style={styles.like_comment_share_view}>
             {/* BEGIN TO SETUP LIKE VIEW */}
               <View style={styles.like_view}>
                 <TouchableOpacity onPress={()=>alert("Like Button Click")}>
                   <FontAwesome name="heart" size={18} color="#d4d4d4" />
                 </TouchableOpacity>
                 <Text style={styles.like_comment_share_text}>{item.likeCount}</Text>
                 <Text style={styles.like_comment_share_text}>Like</Text>
                 <Right><View style={styles.divider_vertical}/></Right>
               </View>
             {/* END TO SETUP LIKE VIEW */}

             {/* BEGIN TO SETUP COMMENT VIEW */}
               <View style={styles.comment_view}>
                 <TouchableOpacity onPress={()=>alert("Comment Button Click")}>
                   <Image style={styles.like_comment_share_image} source={require('./ic_comments.png')}/>
                 </TouchableOpacity>
                 <Text style={styles.like_comment_share_text}>{item.commentCount}</Text>
                 <Text style={styles.like_comment_share_text}>Comment</Text>
                 <Right><View style={styles.divider_vertical}/></Right>
               </View>
             {/* END TO SETUP COMMENT VIEW */}

             {/* BEGIN TO SETUP SHARE VIEW */}
               <View style={styles.share_view}>
                 <TouchableOpacity onPress={()=>alert("Share Button Click")}>
                   <MaterialIcons name="share" size={18} color="#d4d4d4" />
                 </TouchableOpacity>
                 <Text style={styles.like_comment_share_text}>{item.shareCount}</Text>
                 <Text style={styles.like_comment_share_text}>Share</Text>
               </View>
             {/* END TO SETUP SHARE VIEW */}
             </View>
            {/* END TO SETUP LIKE AND COMMENT AND SHARE VIEW */}
   				</View>
         )
        })
      }
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
  back_arrow: {
    width: 30,
    justifyContent: 'flex-start',
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
    fontSize: moderateScale(16),
    marginTop: (Dimensions.get("window").height * 0.001),
    alignSelf: 'center',
    fontFamily: font_type.FontLight,
  },
  right: {
    flex: 0.5
  },
  main: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: "#F2F2F2",
    flexDirection: 'column'
  },
  last_row_bg: {
    width: (Dimensions.get("window").width),
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  row_bg: {
    width: (Dimensions.get("window").width),
    backgroundColor: 'white',
    justifyContent: 'center',
    marginBottom: (Dimensions.get("window").height) * 0.018,
  },
  row_post_description: {
    fontFamily: font_type.FontBold,
    fontSize: moderateScale(17),
    marginTop: (Dimensions.get("window").height) * 0.015,
    width: (Dimensions.get("window").width) *0.95,
    alignSelf: 'center',
    textAlign: 'left'
  },
  row_desc_txt: {
    color: "#6f6f6f",
    fontSize: moderateScale(13),
    fontFamily: font_type.FontLight,
    textAlign: 'left'
  },
  divider_horizontal: {
    width: (Dimensions.get("window").width) * 0.95,
    height: (Dimensions.get("window").height) * 0.001,
    backgroundColor: "#F2F2F2",
    alignSelf: 'center',
    marginTop: (Dimensions.get("window").height) * 0.022
  },
  like_comment_share_text: {
    fontFamily: font_type.FontLight,
    fontSize: moderateScale(15),
    marginLeft: (Dimensions.get("window").width) * 0.015,
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
    alignSelf: 'flex-end',
  },
  row_main_view:{
    width: (Dimensions.get("window").width)
  },
  post_desc_image:{
    width: (Dimensions.get("window").width),
    height: (Dimensions.get("window").height) * 0.35,
    alignSelf: 'center',
    resizeMode:'stretch'
  },
  post_date_view:{
    width: (Dimensions.get("window").width) * 0.95,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: (Dimensions.get("window").height) * 0.015,
    alignItems:'center'
  },
  post_author_date:{
    fontSize: moderateScale(12),
    fontFamily: font_type.FontLight
  },
  row_desc_view:{
    width: (Dimensions.get("window").width) * 0.95,
    alignSelf: 'center',
    marginTop: (Dimensions.get("window").height) * 0.015,
  },
  like_comment_share_view:{
    flexDirection: 'row',
    width: (Dimensions.get("window").width) * 0.95,
    alignSelf: 'center',
    marginTop: (Dimensions.get("window").height) * 0.015,
    marginBottom: (Dimensions.get("window").height) * 0.015,
  },
  like_view:{
    flexDirection: 'row',
    width: (Dimensions.get("window").width) * 0.26,
    alignItems: 'center'
  },
  comment_view:{
    flexDirection: 'row',
    width: (Dimensions.get("window").width) * 0.37,
    alignItems: 'center',
    marginLeft: (Dimensions.get("window").width) * 0.045
  },
  share_view:{
    flexDirection: 'row',
    width: (Dimensions.get("window").width) * 0.32,
    alignItems: 'center',
    marginLeft: (Dimensions.get("window").width) * 0.045
  },
});
// END TO MAKE STYLE
