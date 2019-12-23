import React, { Component } from 'react';
import { Text, Image, StatusBar, Platform, StyleSheet,ImageBackground,Dimensions,TouchableOpacity, ListView,FlatList, BackHandler} from 'react-native';
import { Container, Button,Right,Left,ListItem,Content,Body, Header} from 'native-base';
import {View} from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

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

export default class Tablist extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render()
  {
    //BEGIN TO SETUP DATA
    var data = [
      {
        id: 1,
        name: 'Lorem Ipsum',
        postImage: '',
        profileImage: {uri:'https://www.gstatic.com/webp/gallery/1.png'},
        time: '8 mins',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        name: 'Lorem Ipsum',
        postImage: {uri:'https://www.gstatic.com/webp/gallery/4.png'},
        profileImage: {uri:'https://www.gstatic.com/webp/gallery/2.png'},
        time: '15 mins',
        description: 'Sed iaculis elit velit, at faucibus metus imperdiet sed. Sed dictum, nunc et tempor accumsan, libero turpis ullamcorper quam, ut efficitur dolor augue sed sapien.',
      }
    ]
    //END TO SETUP DATA
    return(
      <Container style={styles.main}>
        <Content>
        {/* BEGIN TO SETUP TABLIST VIEW */}
          <View style={styles.row_main_view}>
          {
          data.map((item, index) => {
           return (
             <View style={styles.row_bg} key={index}>
               <View style={styles.row_header_view}>
               {/* BEGIN TO SETUP PROFILEIMAGE VIEW */}
                 <Image style={styles.profile_img} source={item.profileImage}/>
               {/* BEGIN TO SETUP NAME AND TIME VIEW */}
                 <View style={styles.row_header_name_view}>
                   <Text style={styles.row_name_txt}>{item.name}</Text>
                   <Text style={styles.row_time_txt}>{item.time}</Text>
                 </View>
                {/* END TO SETUP NAME AND TIME VIEW */}
                {/* BEGIN TO SETUP MORE BUTTON VIEW */}
                   <Right style={styles.more_icon}>
                    <TouchableOpacity onPress={()=>alert("More")}>
                      <Ionicons name="ios-more" size={25} color="#d4d4d4" />
                    </TouchableOpacity>
                   </Right>
                {/* END TO SETUP MORE BUTTON VIEW */}
               </View>
               <View style={styles.divider_horizontal}/>
              {/* BEGIN TO SETUP DESCRIPTION VIEW */}
               <View style={styles.row_description_view}>
                 <Text style={styles.row_desc_txt}>{item.description}</Text>
               </View>
               {/* END TO SETUP DESCRIPTION VIEW */}
               {
                 (item.postImage == '') ? null :
                 <Image style={styles.postDescImage} source={item.postImage}></Image>
               }
              <View style={styles.divider_horizontal}/>
               <View style={styles.like_comment_share_view}>
                {/* BEGIN TO SETUP LIKE BUTTON VIEW */}
                 <View style={styles.like_view}>
                     <TouchableOpacity onPress={()=>alert("Like button clicked.")}>
                       <FontAwesome name="heart" size={18} color="#d4d4d4" />
                     </TouchableOpacity>
                     <Text style={styles.like_comment_share_text}>Like</Text>
                     <Right><View style={styles.divider_vertical}/></Right>
                   </View>
                 {/* END TO SETUP LIKE BUTTON VIEW */}

                 {/* BEGIN TO SETUP COMMENTS BUTTON VIEW */}
                     <View style={styles.comment_view}>
                       <TouchableOpacity onPress={()=>alert("Comment button clicked.")}>
                         <Image style={styles.like_comment_share_image} source={require('./comments_icon.png')}/>
                       </TouchableOpacity>
                       <Text style={styles.like_comment_share_text}>Comment</Text>
                       <Right><View style={styles.divider_vertical}/></Right>
                     </View>
                 {/* END TO SETUP COMMENTS BUTTON VIEW */}

                 {/* BEGIN TO SETUP SHARE BUTTON VIEW */}
                   <View style={styles.share_view}>
                     <TouchableOpacity onPress={()=>alert("Share button clicked.")}>
                       <MaterialIcons name="share" size={18} color="#d4d4d4" />
                     </TouchableOpacity>
                     <Text style={styles.like_comment_share_text}>Share</Text>
                   </View>
                 {/* END TO SETUP SHARE BUTTON VIEW */}
               </View>

            </View>
           )
          })
          }
          </View>
      {/* END TO SETUP TABLIST VIEW */}
        </Content>
      </Container>
    )
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  main: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: "#F2F2F2",
    flexDirection: 'column'
  },
  row_main_view:{
    width: (Dimensions.get("window").width)
  },
  row_bg: {
    width: (Dimensions.get("window").width) * 0.95,
    alignSelf: 'center' ,
    backgroundColor: 'white',
    marginTop: (Dimensions.get("window").height) * 0.015,
    marginBottom: (Dimensions.get("window").height) * 0.007,
    justifyContent: 'center',
    shadowOffset:{width: 3,  height: 3},
    shadowColor: '#DFDFDF',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5
  },
  row_header_view:{
    flexDirection: 'row',
    marginTop: (Dimensions.get("window").height) * 0.015
  },
  profile_img: {
    width: (Dimensions.get("window").width) * 0.12,
    height: (Dimensions.get("window").width) * 0.12,
    borderRadius: (Dimensions.get("window").width) * 0.06,
    alignSelf: 'flex-start',
    marginLeft: (Dimensions.get("window").width) * 0.03
  },
  row_header_name_view:{
    flexDirection: 'column',
    marginLeft: (Dimensions.get("window").width) * 0.03
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
  more_icon: {
    marginTop: -(Dimensions.get("window").height) * 0.018,
    marginRight: (Dimensions.get("window").height) * 0.015
  },
  divider_horizontal: {
    width: (Dimensions.get("window").width) * 0.95,
    height: (Dimensions.get("window").height) * 0.001,
    backgroundColor: "#F2F2F2",
    alignSelf: 'center',
    marginTop: (Dimensions.get("window").height) * 0.02
  },
  row_description_view:{
    width: (Dimensions.get("window").width) * 0.90,
    alignSelf: 'center'
  },
  row_desc_txt: {
    color: "#6f6f6f",
    fontSize: moderateScale(15),
    fontFamily: font_type.FontLight,
    marginTop: (Dimensions.get("window").height) * 0.015,
    textAlign: 'left'
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
  }
});
// END TO MAKE STYLE
