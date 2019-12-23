import React, { Component } from 'react';
import {Text,View,Image,StyleSheet,StatusBar,Platform,ImageBackground,Dimensions,TouchableOpacity,ListView,ScrollView,I18nManager} from 'react-native';
import {Container,Button,Icon,Right,Item,Input,Header,Footer,FooterTab,Left,Body,Title,Content,Form,Label} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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

//BEGIN TO SETUP INITALLAYOUT
const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};
//END TO SETUP INITALLAYOUT

export default class ProfileNewsFeedThree extends Component {

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
        image: GlobalInclude.Image1,
        notifications: 10,
        color: '#f7a235'
      },
      {
        id: 2,
        image: GlobalInclude.Image2,
        notifications: 20,
        color: '#76cf25'
      },
      {
        id: 3,
        image: GlobalInclude.Image3,
        notifications: 30,
        color: '#ed1c24'
      },
      {
        id: 4,
        image: GlobalInclude.Image4,
        notifications: 40,
        color: '#c5559d'
      },
      {
        id: 5,
        image: GlobalInclude.Image5,
        notifications: 50,
        color: '#0691ce'
      },
      {
        id: 6,
        image: GlobalInclude.Image6,
        notifications: 60,
        color: '#f7a235'
      },
      {
        id: 7,
        image: GlobalInclude.Image1,
        notifications: 10,
        color: '#f7a235'
      },
      {
        id: 8,
        image: GlobalInclude.Image2,
        notifications: 20,
        color: '#76cf25'
      },
      {
        id: 3,
        image: GlobalInclude.Image3,
        notifications: 30,
        color: '#ed1c24'
      },
      {
        id: 9,
        image: GlobalInclude.Image4,
        notifications: 40,
        color: '#c5559d'
      },
      {
        id: 10,
        image: GlobalInclude.Image5,
        notifications: 50,
        color: '#0691ce'
      },
      {
        id: 11,
        image: GlobalInclude.Image6,
        notifications: 60,
        color: '#f7a235'
      }
    ]

    var dataFriends = [
      {
        id: 1,
        name: 'Lorem ipsum',
        profile: GlobalInclude.Image3,
        notification: 'Lorem ipsum',
        comment: '',
        time: 'Just now',
      },
      {
        id: 2,
        name: 'Lorem ipsum',
        profile: GlobalInclude.Image10,
        notification: 'Lorem ipsum',
        comment: 'Lorem ipsum dolor sit amet, conses adipisi, sed do eiusmod tempor ince idunt ut labore et dolore.',
        time: '25 mins ago',
      },
      {
        id: 3,
        name: 'Lorem ipsum',
        profile: GlobalInclude.Image9,
        notification: 'Lorem ipsum',
        comment: '',
        time: '45 mins ago',
      },
      {
        id: 4,
        name: 'Lorem ipsum',
        profile: GlobalInclude.Image8,
        notification: 'Lorem ipsum',
        comment: '',
        time: '2 hours ago',
      },
      {
        id: 5,
        name: 'Lorem ipsum',
        profile: GlobalInclude.Image7,
        notification: 'Lorem ipsum',
        comment: '',
        time: '01:35 PM',
      },
      {
        id: 6,
        name: 'Lorem ipsum',
        profile: GlobalInclude.Image6,
        notification: 'Lorem ipsum',
        comment: 'Lorem ipsum dolor sit amet, conses adipisi, sed do eiusmod tempor ince idunt ut labore et dolore ali quare eprehenderit.',
        time: '04:23 PM',
      },
    ]

    return(
     <Container style={styles.main}>
      <Content>
        {/* BEGIN TO SETUP IMAGEBACKGROUND VIEW */}
          <ImageBackground source={GlobalInclude.Image3} style={styles.header_image_bg}>
        {/* END TO SETUP IMAGEBACKGROUND VIEW */}
        {/* BEGIN TO SETUP HEADER VIEW */}
           <Header style={styles.header}>
        {/* BEGIN TO SETUP LEFT VIEW */}
               <Left style={styles.left}>
                 <TouchableOpacity style={styles.back_arrow}  onPress={()=>this.props.navigation.goBack()}>
                   <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={25} color='white'/>
                 </TouchableOpacity>
               </Left>
        {/* END TO SETUP LEFT VIEW */}
        {/* BEGIN TO SETUP BODY VIEW */}
               <Body style={styles.body}>
                 <Text style={styles.text_title}>Lorem ipsum</Text>
               </Body>
        {/* END TO SETUP BODY VIEW */}
        {/* BEGIN TO SETUP RIGHT VIEW */}
               <Right style={styles.right}>
               </Right>
        {/* END TO SETUP RIGHT VIEW */}
           </Header>
        {/* END TO SETUP HEADER VIEW */}
          </ImageBackground>
        {/* END TO SETUP IMAGEBACKGROUND VIEW */}

        {/* BEGIN TO SETUP LEVEL VIEW */}
           <View style={styles.profile_content}>
             <Text style={styles.level}>LEVEL</Text>
             <Text style={styles.level_no}>7</Text>
           </View>
        {/* END TO SETUP LEVEL VIEW */}

        {/* BEGIN TO SETUP DESCRIPTION VIEW */}
          <View style={styles.level_desc_view}>
            <Text style={styles.desc_txt}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</Text>
        {/* BEGIN TO SETUP FRIENDS VIEW */}
             <View style={styles.friend_view}>
              <Text style={styles.friend_txt}>Friends(50)</Text>
               <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scroll_view}>
               {
                 data.map((item,index)=>{
                   return(
                     <View key={index} style={styles.friend_list_view}>
                       <Image source={item.image} style={styles.img_view}/>
                       <View style={[styles.noti_view, {backgroundColor: item.color}]}>
                         <Text style={styles.noti_text}>{item.notifications}</Text>
                       </View>
                     </View>
                   )
                 })
               }
               </ScrollView>
             </View>
        {/* END TO SETUP FRIENDS VIEW */}
           </View>
        {/* END TO SETUP DESCRIPTION VIEW */}

        {/* BEGIN TO SETUP FRIENDSLIST VIEW */}
           <View style={styles.list_main_view}>
            {
              dataFriends.map((item, index) => {
                return (
                  <View style={styles.row_bg} key={index}>
                    <View style={styles.slide}>
                      {/* BEGIN TO SETUP PROFILEIMAGE VIEW */}
                        <Image source={item.profile} style={styles.image_style}/>
                      {/* END TO SETUP PROFILEIMAGE VIEW */}

                      {/* BEGIN TO SETUP NOTIFICATIONCONTENT VIEW */}
                        <View style={styles.notification_content}>
                      {/* BEGIN TO SETUP NAME AND NOTIFICATION AND COMMENT VIEW */}
                            <View style={styles.title_bar}>
                              <Text style={styles.name}>{item.name}</Text>
                              <Text style={styles.notification}>{item.notification}</Text>
                            </View>
                          {
                            (item.comment == '') ? null :
                            <Text style={styles.comments}>{item.comment}</Text>
                          }
                        {/* END TO SETUP NAME AND NOTIFICATION AND COMMENT VIEW */}

                        {/* BEGIN TO SETUP TIME VIEW */}
                          <View style={styles.bottombar}>
                            <Ionicons name="md-time" size={12} color="#d4d4d4" />
                            <Text style={styles.time}>{item.time}</Text>
                          </View>
                        {/* END TO SETUP TIME VIEW */}
                          </View>
                        </View>
                      {/* END TO SETUP NOTIFICATIONCONTENT VIEW */}
                    <View style={styles.separatoe_style}></View>
                  </View>
                )
              })
            }
           </View>
       {/* END TO SETUP FRIENDSLIST VIEW */}
         </Content>
      </Container>

    );
  }
}
// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  header: {
		backgroundColor: 'rgba(0,0,0,0)',
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
	  justifyContent: 'center',
	  alignItems: 'flex-start'
	},
	body: {
		flex: 3,
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0)'
	},
  text_title: {
		color: 'white',
		fontSize: moderateScale(17),
		marginTop: (Dimensions.get("window").height * 0.001),
		alignSelf: 'center',
		fontFamily: font_type.FontBold,
	},
	right: {
		flex: 0.5
	},
  header_image_bg: {
  	height:(Dimensions.get("window").height * 0.385),
  	width:(Dimensions.get("window").width),
  	backgroundColor: 'gray'
  },
  profile_content: {
  	width:(Dimensions.get("window").height * 0.14),
  	height:(Dimensions.get("window").height * 0.14),
  	borderRadius:(Dimensions.get("window").height*0.07),
  	marginTop: (Dimensions.get("window").height * 0.315),
  	borderWidth: 2.5,
  	borderColor: 'white',
  	backgroundColor: '#0691ce',
  	alignSelf: 'center',
  	alignItems: 'center',
  	justifyContent: 'center',
  	position: 'absolute',
  	zIndex:10,
  },
  slide: {
  	marginVertical: (Dimensions.get("window").height * 0.02),
  	flexDirection: 'row',
  },
  image_style: {
  	width: (Dimensions.get("window").height * 0.06),
  	height: (Dimensions.get("window").height * 0.06),
  	borderRadius: (Dimensions.get("window").height * 0.03),
  	marginRight: (Dimensions.get("window").width * 0.04),
  	resizeMode: 'cover',
  	...Platform.select({
  		ios: {
  		backgroundColor: 'gray'
  		},
  	}),
  },
  notification_content: {
  	marginTop: (Dimensions.get("window").width * 0.005),
  	marginRight: (Dimensions.get("window").width * 0.02),
  	width: (Dimensions.get("window").width * 0.8),
  },
  title_bar: {
  	flexDirection: 'row',
  	alignItems: 'flex-end'
  },
  name: {
  	color: '#363636',
  	fontSize: moderateScale(15),
  	fontFamily: font_type.FontBold,
  	marginRight: (Dimensions.get("window").width*0.015)
  },
  notification: {
  	color: '#b7b7b7',
  	fontFamily: font_type.FontLight,
  	fontSize: moderateScale(12),
  },
  comments: {
  	color: '#6f6f6f',
  	fontSize: moderateScale(15),
  	fontFamily: font_type.FontLight,
  	width:(Dimensions.get("window").width * 0.75),
  	marginVertical: (Dimensions.get("window").height*0.005),
  	textAlign: 'left'
  },
  bottombar: {
  	flexDirection: 'row',
  	alignItems: 'center',
  	justifyContent: 'flex-start',
  	marginTop: (Platform.OS === 'ios')? (Dimensions.get("window").height * 0.005) : 0,
  },
  time: {
  	color: '#b7b7b7',
  	fontFamily: font_type.FontLight,
  	fontSize: moderateScale(12),
  	marginLeft: (Dimensions.get("window").width) * 0.005
  },
  separatoe_style: {
  	height: (Dimensions.get("window").height) * 0.001,
  	backgroundColor: '#d7d7d7'
  },
  main:{
	  backgroundColor:'#e6e6e6'
  },
  level:{
  	color:'white',
  	fontFamily: font_type.FontLight,
  	fontSize: moderateScale(16),
  	backgroundColor: 'rgba(0,0,0,0)',
  	...Platform.select({
  			 ios: {
  			 		marginTop:(Dimensions.get("window").height * 0.015),
  			 },
  			 android:{
  				 marginTop:(Dimensions.get("window").height * 0.035),
  			 }
   	 }),
  },
  level_no:{
  	color:'white',
  	fontFamily: font_type.FontBold,
  	fontSize: (Platform.OS == 'ios')? moderateScale(46) : moderateScale(40),
  	backgroundColor: 'rgba(0,0,0,0)',
  	...Platform.select({
  			 ios: {

  			 },
  			 android:{
  				 marginTop: -(Dimensions.get("window").height * 0.015),
  			 }
   	 }),
  },
  level_desc_view:{
  	paddingTop: (Dimensions.get("window").height * 0.092),
  	alignItems: 'center',
  	justifyContent: 'center',
  	backgroundColor: 'white'
  },
  desc_txt:{
  	marginHorizontal: (Dimensions.get("window").width * 0.1),
  	marginBottom: (Dimensions.get("window").height * 0.04),
  	textAlign: 'center',
  	fontSize: moderateScale(12),
  	color:'#b7b7b7',
  	fontFamily: font_type.FontLight
  },
  friend_view:{
  	width:(Dimensions.get("window").width),
  	paddingVertical: (Dimensions.get("window").width * 0.03),
  	paddingLeft: (Dimensions.get("window").width * 0.03),
  	borderTopWidth: 1,
  	borderColor: '#d7d7d7'
  },
  friend_txt:{
  	color:'#363636',
  	fontFamily: font_type.FontLight,
  	fontSize: moderateScale(12),
  	textAlign: 'left'
  },
  scroll_view:{
  	flexDirection: 'row',
  	marginTop:(Dimensions.get("window").height * 0.035)
  },
  friend_list_view:{
  	height:(Dimensions.get("window").height * 0.075),
  	width:(Dimensions.get("window").height * 0.085),
  	flexDirection: 'row',
  	marginRight:(Dimensions.get("window").width * 0.035)
  },
  img_view:{
  	height:(Dimensions.get("window").height * 0.075),
  	width:(Dimensions.get("window").height * 0.075),
  	borderRadius:(Dimensions.get("window").height * 0.0375),
   	...Platform.select({
  	 ios: {
  	 		backgroundColor: 'gray'
  	 },
   }),
 },
 noti_view:{
  	height:(Dimensions.get("window").height * 0.035),
  	width:(Dimensions.get("window").height * 0.035),
  	borderRadius:(Dimensions.get("window").height * 0.0175),
  	borderWidth: 1.5,
  	borderColor: 'white',
  	position: 'absolute',
  	alignItems: 'center',
  	justifyContent: 'center',
  	right:0,
  },
 noti_text:{
  	color:'white',
  	fontSize: moderateScale(12),
  	fontFamily: font_type.FontLight,
  	backgroundColor: 'rgba(0,0,0,0)'
  },
 list_main_view:{
  	marginTop:(Dimensions.get("window").height * 0.02),
  	backgroundColor: 'white'
  },
  row_bg:{
		backgroundColor: 'white',
		paddingLeft: (Dimensions.get("window").width * 0.04)
  },
});
// END TO MAKE STYLE
