import React, { Component } from 'react';
import { Text,Image, StatusBar, StyleSheet,Platform,Dimensions,TouchableOpacity,ListView,BackHandler,I18nManager} from 'react-native';
import { Container, Button,Right,Left,Content,Body,List, Header} from 'native-base';
import { View } from 'react-native-animatable';
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

export default class Social07 extends Component {

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
        name: 'Lorem ipsum',
        profileImage: GlobalInclude.Image3,
        postImage: '',
        time: '1 mins',
        likeCount: 1,
        commentCount: 1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        name: 'Lorem ipsum',
        profileImage: GlobalInclude.Image1,
        postImage: GlobalInclude.Image2,
        time: '2 mins',
        likeCount: 2,
        commentCount: 2,
        description: 'Sed iaculis elit velit, at faucibus metus imperdiet sed. Sed dictum, nunc et tempor accumsan, libero turpis ullamcorper quam, ut efficitur dolor augue sed sapien.',
      },
      {
        id: 3,
        name: 'Lorem ipsum',
        profileImage: GlobalInclude.Image4,
        postImage: '',
        time: '3 mins',
        likeCount: 3,
        commentCount: 3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere, nibh id pellentesque hendrerit, massa dui fermentum massa, eget fermentum libero nisl convallis elit. ',
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
                (I18nManager.isRTL)
                ?
                    <MaterialIcons name="chevron-right" size={25} color='white'/>
                :
                    <MaterialIcons name="chevron-left" size={25} color='white'/>
              }
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
              <TouchableOpacity onPress={()=>alert("Search Button Click")}>
                <Ionicons name="ios-search" size={25} color='white'/>
              </TouchableOpacity>
            </Right>
          {/* END TO SETUP RIGHT VIEW */}
        </Header>
      {/* END TO SETUP HEADER VIEW */}
        <Content>
        <View style={styles.main_list_view} animation="zoomInDown" duration={1100} delay={1400}>
        {
          data.map((item, index) => {
           return (
             <View style={styles.row_bg} key={index}>
               <View style={styles.row_view}>
                {/* BEGIN TO SETUP PROFILE IAMGE VIEW */}
                 <Image source={item.profileImage} style={styles.profile_img}/>
                {/* END TO SETUP PROFILE IMAGE VIEW */}
                 <View style={styles.name_desc_view}>
                  {/* BEGIN TO SETUP NAME AND TIME VIEW */}
                   <View style={styles.name_view}>
                     <Text style={styles.row_name_txt}>{item.name}</Text>
                     <Right><View><Text style={styles.row_time_txt}>{item.time}</Text></View></Right>
                   </View>
                  {/* END TO SETUP NAME AND TIME VIEW */}

                  {/* BEGIN TO SETUP DESCRIPTION VIEW */}
                   <Text style={styles.row_desc_txt}>{item.description}</Text>
                  {/* END TO SETUP DESCRIPTION VIEW */}

                  {/* BEGIN TO SETUP POSTIMAGE VIEW */}
                   {
                     (item.postImage == '') ? null :
                     <Image source={item.postImage} style={styles.post_desc_img}/>
                   }
                  {/* END TO SETUP POSTIMAGE VIEW */}

                  {/* BEGIN TO SETUP LIKE AND COMMENT VIEW */}
                   <View style={styles.like_comment_view}>
                   {/* BEGIN TO SETUP LIKE VIEW */}
                     <View style={styles.like_view}>
                       <TouchableOpacity onPress={()=>alert("Like Button Click")}>
                         <FontAwesome name="heart" size={15} color="#d4d4d4" />
                       </TouchableOpacity>
                       <Text style={styles.like_comment_text}>{item.likeCount}</Text>
                     </View>
                   {/* END TO SETUP LIKE VIEW */}

                   {/* BEGIN TO SETUP COMMENT VIEW */}
                     <View style={styles.like_view}>
                       <TouchableOpacity onPress={()=>alert("Comment Button Click")}>
                         <Image style={styles.like_comment_share_image} source={require('./ic_comments.png')}/>
                       </TouchableOpacity>
                       <Text style={styles.like_comment_text}>{item.commentCount}</Text>
                     </View>
                   {/* END TO SETUP COMMENT VIEW */}
                   </View>
                  {/* END TO SETUP LIKE AND COMMENT VIEW */}
                 </View>
               </View>
               <View style={ (index === data.length - 1) ? null : styles.divider_horizontal}/>
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
    backgroundColor: 'white',
    flexDirection: 'column'
  },
  row_bg: {
    width: (Dimensions.get("window").width),
    backgroundColor: 'white',
    marginLeft: (Dimensions.get("window").width) * 0.045,
    marginTop: (Dimensions.get("window").height) * 0.015
  },
  divider_horizontal: {
    width: ((Dimensions.get("window").width) * 0.99) + 5,
    height: (Dimensions.get("window").height) * 0.001,
    backgroundColor: "#D7D7D7",
    alignSelf: 'flex-end',
  },
  profile_img: {
    width: (Dimensions.get("window").width) * 0.14,
    height: (Dimensions.get("window").width) * 0.14,
    borderRadius: (Dimensions.get("window").width) * 0.07,
    justifyContent: 'flex-start'
  },
  row_name_txt: {
    color: "#363636",
    fontSize: moderateScale(16),
    fontFamily: font_type.FontBold,
    marginTop: (Dimensions.get("window").height) * 0.007
  },
  row_time_txt: {
    color: "#b7b7b7",
    fontSize: moderateScale(14),
    fontFamily: font_type.FontLight,
  },
  row_desc_txt: {
    color: "#6f6f6f",
    fontSize: moderateScale(14),
    fontFamily: font_type.FontLight,
    marginTop: (Dimensions.get("window").height) * 0.011,
    textAlign: 'left'
  },
  like_comment_text: {
    fontFamily: font_type.FontLight,
    fontSize: moderateScale(14),
    marginLeft: (Dimensions.get("window").width) * 0.02,
    color: "#6f6f6f"
  },
  main_list_view:{
    width: (Dimensions.get("window").width)
  },
  row_view:{
    flexDirection: 'row'
  },
  name_desc_view:{
    flexDirection: 'column',
    marginLeft: (Dimensions.get("window").width) * 0.045,
    width: (Dimensions.get("window").width) * 0.75
  },
  name_view:{
    flexDirection: 'row'
  },
  post_desc_img:{
    resizeMode: 'cover',
    height: (Dimensions.get("window").height) * 0.20,
    marginTop: (Dimensions.get("window").height) * 0.015,
  },
  like_comment_view:{
    flexDirection: 'row',
    marginTop: (Dimensions.get("window").height) * 0.015,
    marginBottom: (Dimensions.get("window").height) * 0.020
  },
  like_view:{
    flexDirection: 'row',
    width: (Dimensions.get("window").width) * 0.18
  },
  like_comment_share_image: {
    width: (Dimensions.get("window").width) * 0.05,
    height: (Dimensions.get("window").height) * 0.022,
    resizeMode: 'contain',
    marginTop: (Dimensions.get("window").height) * 0.004
  },
});
// END TO MAKE STYLE
