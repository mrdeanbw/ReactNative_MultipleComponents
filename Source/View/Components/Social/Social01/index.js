import React, { Component } from 'react';
import {Text,Image,StatusBar, Platform,Dimensions,TouchableOpacity, ListView,BackHandler,I18nManager,StyleSheet} from 'react-native';
import { Container, Button,Right,Left,Content,Body, Header} from 'native-base';
import {View} from 'react-native-animatable';
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


export default class Social01 extends Component {
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

    var data = [
      {
        id: 1,
        name: 'Lorem ipsum',
        postImage: '',
        profileImage:GlobalInclude.Image5,
        time: '11 mins',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        name: 'Lorem ipsum',
        postImage: GlobalInclude.Image1,
        profileImage: GlobalInclude.Image2,
        time: '12 mins',
        description: 'Sed iaculis elit velit, at faucibus metus imperdiet sed. Sed dictum, nunc et tempor accumsan, libero turpis ullamcorper quam, ut efficitur dolor augue sed sapien.',
      }
    ]

    return(
      <Container style={styles.main}>
      {/* BEGIN TO SETUP HEADER VIEW */}
        <Header style={styles.header}>
          {/* BEGIN TO SETUP LEFT VIEW*/}
            <Left style={styles.left}>
              <TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
                {(I18nManager.isRTL) ? <MaterialIcons name="chevron-right" size={25} color='white'/> : <MaterialIcons name="chevron-left" size={25} color='white'/>}
              </TouchableOpacity>
            </Left>
          {/* END TO SETUP LEFT VIEW*/}

          {/* BEGIN TO SETUP BODY VIEW*/}
            <Body style={styles.body}>
              <Text style={styles.text_title}>News Feed</Text>
            </Body>
          {/* END TO SETUP BODY VIEW*/}

          {/* BEGIN TO SETUP RIGHT VIEW*/}
            <Right style={styles.right}>
              <TouchableOpacity onPress={()=>alert("Search")}>
                <Ionicons name="ios-search" size={25} color='white'/>
              </TouchableOpacity>
            </Right>
          {/* END TO SETUP RIGHT VIEW*/}
        </Header>
      {/* END TO SETUP HEADER VIEW*/}

      {/* BEGIN TO SETUP MAIN VIEW*/}
        <View style={styles.main_row}>
          <Left>
            <View style={styles.main_row_text_view}>
              <Text style={styles.main_row_first_text}>Contrary to popular belief</Text>
              <Text style={styles.main_row_second_text}>Lorem Ipsum is not simply random text.</Text>
            </View>
          </Left>
          <View style={styles.suggested_people_imgview}>
            <Image style={styles.sugested_people_img_one} source={GlobalInclude.Image1}/>
            <Image style={styles.sugested_people_img_two} source={GlobalInclude.Image2}/>
            <Image style={styles.sugested_people_img_three} source={GlobalInclude.Image3}/>
          </View>
        </View>
      {/* END TO SETUP MAIN VIEW*/}
        <Content>

        <View style={styles.row_main_view} animation="bounceInLeft" duration={1100} delay={1400}>
        {
        data.map((item, index) => {
         return (
           <View style={styles.row_bg} key={index}>
             <View style={styles.row_header_view}>
               <Image style={styles.profile_img} source={item.profileImage}/>
              {/* BEGIN TO SETUP NAME AND TIME VIEW*/}
               <View style={styles.row_header_name_view}>
                 <Text style={styles.row_name_txt}>{item.name}</Text>
                 <Text style={styles.row_time_txt}>{item.time}</Text>
               </View>
              {/* END TO SETUP NAME AND TIME VIEW*/}

              {/* BEGIN TO SETUP MORE ICON VIEW*/}
                 <Right style={styles.more_icon}>
                  <TouchableOpacity onPress={()=>alert("More Button Click")}>
                    <Ionicons name="ios-more" size={25} color="#d4d4d4" />
                  </TouchableOpacity>
                 </Right>
              {/* END TO SETUP MORE ICON VIEW*/}
             </View>
             <View style={styles.divider_horizontal}/>

             {/* BEGIN TO SETUP DESCRIPTION VIEW*/}
               <View style={styles.row_description_view}>
                 <Text style={styles.row_desc_txt}>{item.description}</Text>
               </View>
             {/* END TO SETUP DESCRIPTION VIEW*/}
             {
               (item.postImage == '') ? null :
               <Image style={styles.post_desc_image} source={item.postImage}></Image>
             }

            <View style={styles.divider_horizontal}/>

             <View style={styles.like_comment_share_view}>
             {/* BEGIN TO SETUP LIKE VIEW*/}
               <View style={styles.like_view}>
                 <TouchableOpacity onPress={()=>alert("Like Button Click")}>
                   <FontAwesome name="heart" size={18} color="#d4d4d4" />
                 </TouchableOpacity>
                 <Text style={styles.like_comment_share_text}>Like</Text>
                 <Right><View style={styles.divider_vertical}/></Right>
               </View>
             {/* END TO SETUP LIKE VIEW*/}

             {/* BEGIN TO SETUP COMMENT VIEW*/}
               <View style={styles.comment_view}>
                 <TouchableOpacity onPress={()=>alert("Comment Button Click")}>
                   <Image style={styles.like_comment_share_image} source={require('./ic_comments.png')}/>
                 </TouchableOpacity>
                 <Text style={styles.like_comment_share_text}>Comment</Text>
                 <Right><View style={styles.divider_vertical}/></Right>
               </View>
             {/* END TO SETUP COMMENT VIEW*/}

             {/* BEGIN TO SETUP SHARE VIEW*/}
               <View style={styles.share_view}>
                 <TouchableOpacity onPress={()=>alert("Share Button Click")}>
                   <MaterialIcons name="share" size={18} color="#d4d4d4" />
                 </TouchableOpacity>
                 <Text style={styles.like_comment_share_text}>Share</Text>
               </View>
               </View>
             {/* END TO SETUP SHARE VIEW*/}
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
  sugested_people_img_three: {
    width: (Dimensions.get("window").width) * 0.12,
    height: (Dimensions.get("window").width) * 0.12,
    borderRadius: (Dimensions.get("window").width) * 0.06,
    borderWidth: 2,
    borderColor: 'white',
    marginLeft: -(Dimensions.get("window").width) * 0.03
  },
  sugested_people_img_two: {
    width: (Dimensions.get("window").width) * 0.12,
    height: (Dimensions.get("window").width) * 0.12,
    borderRadius: (Dimensions.get("window").width) * 0.06,
    borderWidth: 2,
    borderColor: 'white',
    marginLeft: -(Dimensions.get("window").width) * 0.03
  },
  sugested_people_img_one: {
    width: (Dimensions.get("window").width) * 0.12,
    height: (Dimensions.get("window").width) * 0.12,
    borderRadius: (Dimensions.get("window").width) * 0.06,
    borderWidth: 2,
    borderColor: 'white',
  },
  row_bg: {
    width: (Dimensions.get("window").width) * 0.95,
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
    marginLeft: (Dimensions.get("window").width) * 0.03
  },
  more_icon: {
    marginTop: -(Dimensions.get("window").height) * 0.018,
    marginRight: (Dimensions.get("window").height) * 0.015
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
    height: (Dimensions.get("window").height) * 0.001,
    backgroundColor: "#F2F2F2",
    alignSelf: 'center',
    marginTop: (Dimensions.get("window").height) * 0.02
  },
  like_comment_share_text: {
    fontFamily: font_type.FontLight,
    fontSize: moderateScale(16),
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
  main_row:{
    width: (Dimensions.get("window").width) * 0.95,
    alignSelf: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingTop:(Dimensions.get("window").height) * 0.015,
    paddingBottom: (Dimensions.get("window").height) * 0.015,
    justifyContent:'center',
    marginTop:(Dimensions.get("window").height) * 0.015,
    marginBottom: (Dimensions.get("window").height) * 0.015,
    shadowOffset:{width: 2,  height: 2},
    shadowColor: '#DFDFDF',
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2
  },
  main_row_text_view:{
    flexDirection:'column',
    marginLeft: (Dimensions.get("window").width) * 0.03
  },
  main_row_first_text:{
    fontSize: moderateScale(16),
    fontFamily: font_type.FontBold,
    color: "#6f6f6f",
    textAlign: 'left'
  },
  main_row_second_text:{
    fontSize: moderateScale(16),
    fontFamily: font_type.FontLight,
    color: "#bfbfbf",
    textAlign: 'left'
  },
  suggested_people_imgview:{
    flexDirection:'row',
    marginRight:(Dimensions.get("window").width) * 0.03
  },
  row_main_view:{
    width: (Dimensions.get("window").width)
  },
  row_header_view:{
    flexDirection: 'row',
    marginTop: (Dimensions.get("window").height) * 0.015
  },
  row_header_name_view:{
    flexDirection: 'column',
    marginLeft: (Dimensions.get("window").width) * 0.03
  },
  row_description_view:{
    width: (Dimensions.get("window").width) * 0.90,
    alignSelf: 'center'
  },
  post_desc_image:{
    width: (Dimensions.get("window").width) * 0.90,
    height: (Dimensions.get("window").height) * 0.20,
    alignSelf: 'center',
    marginTop: (Dimensions.get("window").height) * 0.015,
    resizeMode: 'stretch'
  },
  like_comment_share_view:{
    flexDirection: 'row',
    paddingLeft: (Dimensions.get("window").width) * 0.03,
    paddingRight: (Dimensions.get("window").width) * 0.03,
    marginTop: (Dimensions.get("window").height) * 0.015,
    marginBottom: (Dimensions.get("window").height) * 0.015
  },
  like_view:{
    flexDirection: 'row',
    width: (Dimensions.get("window").width) * 0.25,
    alignItems: 'center'
  },
  comment_view:{
    flexDirection: 'row',
    width: (Dimensions.get("window").width) * 0.35,
    alignItems: 'center',
    marginLeft: (Dimensions.get("window").width) * 0.045
  },
  share_view:{
    flexDirection: 'row',
    width: (Dimensions.get("window").width) * 0.30,
    alignItems: 'center',
    marginLeft: (Dimensions.get("window").width) * 0.045
  },
});
// END TO MAKE STYLE
