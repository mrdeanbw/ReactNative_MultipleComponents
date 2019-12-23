import React, { Component } from 'react';
import {Text,View,Image,StatusBar,Platform,ImageBackground,StyleSheet,Dimensions,TouchableOpacity,ListView,ScrollView,I18nManager} from 'react-native';
import {Container,Button,Icon,Right,Item,Input,Header,Footer,FooterTab,Left,Body,Title,Content,Form,Label} from 'native-base';
import Swiper from 'react-native-swiper';
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
// END TO SETUP FONT-TYPE AND FONT-SIZ


export default class ProfileSocial extends Component {

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

    //BEGIN TO SETUP DATA
    var data = [
      {
        id: 1,
        name: 'Lorem ipsum',
        profile: GlobalInclude.Image10,
        thumbnail: '',
        comment: '',
        time: '18 mins',
        postImage: [
          {image:GlobalInclude.Image1, id:10},
          {image:GlobalInclude.Image2, id:20},
          {image:GlobalInclude.Image3, id:30},
          {image:GlobalInclude.Image4, id:40},
        ],
        likes: 12,
        comments: 35,
      },
      {
        id: 2,
        name: 'Lorem ipsum',
        profile: GlobalInclude.Image5,
        thumbnail: GlobalInclude.Image6,
        comment: 'Lorem ipsum dolor sit amet, conses adipisi, sed do eiusmod tempor ince idunt ut labore et dolore.',
        time: '20 mins',
        postImage: '',
        likes: 12,
        comments: 35,
      },
      {
        id: 3,
        name: 'Lorem ipsum',
        profile: GlobalInclude.Image7,
        thumbnail: '',
        comment: "Hey there, I'm using Social Midea",
        time: '5 hour',
        postImage: '',
        likes: 12,
        comments: 35,
      },
    ]
    //END TO SETUP DATA

    return(
     <Container style={{backgroundColor: '#2d324f'}}>
       {/* BEGIN TO SETUP HEADER VIEW */}
       <Header androidStatusBarColor={'#0000'} style={styles.header}>
       {/* BEGIN TO SETUP LEFT VIEW */}
         <Left style={styles.left}>
           <TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
            <Icon name={I18nManager.isRTL ? "ios-arrow-forward" : "ios-arrow-back"} style={{ color: '#fff' }}/>
           </TouchableOpacity>
         </Left>
       {/* END TO SETUP LEFT VIEW */}

       {/* BEGIN TO SETUP BODY VIEW */}
         <Body style={styles.body}>
           <Title style={styles.header_title}>
             Profiles
           </Title>
         </Body>
       {/* END TO SETUP LEFT VIEW */}

       {/* BEGIN TO SETUP RIGHT VIEW */}
         <Right style={styles.right}>
           <Button transparent>
           </Button>
         </Right>
       {/* END TO SETUP RIGHT VIEW */}
        </Header>
       {/* END TO SETUP HEADER VIEW */}
       <View style={styles.header_container}>
         <View style={styles.profile_container}>
         {/* BEGIN TO SETUP PROFILE IMAGE AND NAME AND POST VIEW */}
           <View style={styles.profile_body_sec}>
             <Image source={GlobalInclude.Image3} style={styles.profile_image}/>
             <View style={styles.profile_detail}>
               <Text style={styles.profile_name}>Lorem Ipsum</Text>
               <Text style={styles.post}>Lorem Ipsum</Text>
             </View>
           </View>
          {/* END TO SETUP PROFILE IMAGE AND NAME AND POST VIEW */}

          {/* BEGIN TO SETUP FOLLOW VIEW */}
           <TouchableOpacity style={(this.state.isFavorite) ? styles.active_button : styles.normal_button} onPress={()=>this.setState({isFavorite: !this.state.isFavorite})}>
             <Text style={(this.state.isFavorite) ? styles.active_button_txt : styles.normal_button_txt}>FOLLOW</Text>
           </TouchableOpacity>
          {/* END TO SETUP FOLLOW VIEW */}
         </View>
         <View style={styles.separator_style} />
         <View style={styles.follow_container}>
          {/* BEGIN TO SETUP FOLLOWERS VIEW */}
             <View style={styles.follow_sec}>
               <Text style={styles.follow_count}>1111</Text>
               <Text style={styles.follow_text}>Followers</Text>
             </View>
          {/* END TO SETUP FOLLOWERS VIEW */}
           <View style={styles.follow_separator} />

          {/* BEGIN TO SETUP FOLLOWING VIEW */}
           <View style={styles.follow_sec}>
             <Text style={styles.follow_count}>2222</Text>
             <Text style={styles.follow_text}>Following</Text>
           </View>
          {/* END TO SETUP FOLLOWING VIEW */}
           <View style={styles.follow_separator} />

          {/* BEGIN TO SETUP LIKES VIEW */}
           <View style={styles.follow_sec}>
             <Text style={styles.follow_count}>3333</Text>
             <Text style={styles.follow_text}>Likes</Text>
           </View>
          {/* END TO SETUP LIKES VIEW */}
         </View>
       </View>

       <Content style={styles.slidesec}>
        {
          data.map((item, index) => {
            return (
              <View style={styles.list_container} key={index}>
                <View style={styles.slide}>
                {/* BEGIN TO SETUP IMAGE VIEW */}
                  <Image source={item.profile} style={styles.image_style}/>
                {/* END TO SETUP IMAGE VIEW */}
                  <View style={styles.notification_content}>
                {/* BEGIN TO SETUP NAME AND TIME VIEW */}
                    <View style={styles.title_bar}>
                      <Text style={styles.name}>{item.name}</Text>
                      <Text style={styles.notification}>{item.time}</Text>
                    </View>
                {/* END TO SETUP NAME AND TIME VIEW */}

                {/* BEGIN TO SETUP COMMENT VIEW */}
                    {
                      (item.comment == '') ? null :
                      <Text style={styles.comments}>{item.comment}</Text>
                    }
                {/* END TO SETUP COMMENT VIEW */}

                {/* BEGIN TO SETUP IMAGE VIEW */}
                    {
                      (item.thumbnail == '') ? null :
                      <Image source={item.thumbnail} style={styles.thumbnail}/>
                    }
                {/* END TO SETUP IMAGE VIEW */}

                {/* BEGIN TO SETUP POSTIMAGE VIEW */}
                    {
                      (item.postImage == '') ? null :
                      <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={styles.post_image_content}>
                        {
                          item.postImage.map((itemImage, index) => {
                            return (
                              <View style={styles.imgs} key={index}>
                                <Image source={itemImage.image} style={styles.posted_image}/>
                              </View>
                            )
                          })
                        }
                      </ScrollView>
                    }
                {/* END TO SETUP POSTIMAGE VIEW */}

                {/* BEGIN TO SETUP LIKE AND COMMENTS VIEW */}
                    <View style={styles.bottombar}>
                      <View style={styles.like_content}>
                        <FontAwesome name="heart" size={15} color="#d4d4d4" style={styles.hearticon}/>
                        <Text style={styles.text_style}>{item.likes}</Text>
                      </View>
                      <View style={styles.like_content}>
                        <Ionicons name="md-chatboxes" size={17} color="#d4d4d4" style={styles.hearticon}/>
                        <Text style={styles.text_style}>{item.comments}</Text>
                      </View>
                    </View>
                {/* END TO SETUP LIKE AND COMMENTS VIEW */}
                  </View>
                </View>
                <View style={styles.separator_style}></View>
              </View>
            )
          })
        }
       </Content>
    </Container>

    );
  }
}
// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  imgs:{
  	paddingRight:(Dimensions.get("window").width*0.05)
  },
  back_arrow: {
   width: 30,
   justifyContent: 'center',
   alignItems: 'flex-start'
  },
  slidesec:{
  	height: ( Dimensions.get("window").height*0.905),
  	position: 'relative',
  	backgroundColor: 'white',
  	paddingTop: ( Dimensions.get("window").height*0.01)
  },
  hearticon:{
  	marginRight: 3
  },
  header: {
  	backgroundColor: '#ff6347',
  	height: ( Dimensions.get("window").height*0.095),
  	width: Dimensions.get("window").width,
  	flexDirection: 'row',
  	borderBottomColor: '#2d324f',
  	...Platform.select({
  		ios: {
  			paddingTop: 5
  		},
  		android: {
  			paddingTop: 15
  		}
  	}),
  },
  left: {
    flex: 1,
    paddingTop: (Platform.OS === 'ios')? 15 : 0,
  },
  body: {
    flex: 2,
    alignItems: 'center',
  },
  right: {
    flex: 1,
    paddingTop: (Platform.OS === 'ios')? 15 : 0,
  },
  header_title: {
    color: 'white',
    fontFamily: font_type.FontBold,
    paddingTop: (Platform.OS === 'ios')? 15 : 0,
    fontSize : 17,
    letterSpacing:0.7
  },
  header_container: {
  	width:(Dimensions.get("window").width),
  	padding: ( Dimensions.get("window").height * 0.015),
  	backgroundColor: 'white',
  	elevation: 5,
  	shadowColor: 'black',
  	shadowRadius: ( Dimensions.get("window").height * 0.005),
  	shadowOpacity: 0.12,
  	shadowOffset: {
  		height: ( Dimensions.get("window").height * 0.005),
  		width: 0,
  	},
  	zIndex: 10
  },
  profile_container: {
  	paddingBottom: ( Dimensions.get("window").height * 0.03),
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
  	height:(Dimensions.get("window").height * 0.08),
  	width:(Dimensions.get("window").height * 0.08),
  	borderRadius:( Dimensions.get("window").height * 0.04),
  },
  profile_detail: {
  	marginLeft: (Dimensions.get("window").width* 0.03)
  },
  profile_name: {
  	fontFamily: font_type.FontBold,
  	fontSize: 17,
  	color:'#363636',
  },
  post: {
  	fontFamily: font_type.FontLight,
  	fontSize: 12,
  	color:'#b7b7b7',
  	backgroundColor: 'transparent',
  	marginTop: ( Dimensions.get("window").height * 0.004),
  	textAlign: 'left'
  },
  active_button: {
  	height:(Dimensions.get("window").height * 0.055),
  	width:(Dimensions.get("window").width* 0.3),
  	borderRadius:( Dimensions.get("window").height * 0.0275),
  	backgroundColor: '#ff6347',
  	alignItems: 'center',
  	justifyContent: 'center',
  	overflow: 'hidden'
  },
  normal_button: {
  	height:(Dimensions.get("window").height * 0.055),
  	width:(Dimensions.get("window").width* 0.3),
  	borderRadius:( Dimensions.get("window").height * 0.0275),
  	borderWidth: 1.5,
  	borderColor: '#ff6347',
  	alignItems: 'center',
  	justifyContent: 'center',
  	overflow: 'hidden'
  },
  active_button_txt: {
  	fontFamily: font_type.FontLight,
  	fontSize: 17,
  	color: 'white',
  },
  normal_button_txt: {
  	fontFamily: font_type.FontLight,
  	fontSize: 17,
  	color: '#ff6347',
  },
  list_container: {
  	backgroundColor: 'white',
  	paddingLeft: (Dimensions.get("window").width* 0.04)
  },
  post_image_content:{
  	flexDirection: 'row',
  	paddingTop: ( Dimensions.get("window").height*0.015),
  	paddingBottom: ( Dimensions.get("window").height*0.01),
  },
  name: {
  	color: '#363636',
  	fontSize: 15,
  	fontFamily: font_type.FontBold,
  	marginRight: (Dimensions.get("window").width*0.015)
  },
  notification: {
  	color: '#b7b7b7',
  	fontFamily: font_type.FontLight,
  	fontSize: 12,
  },
  comments: {
  	color: '#6f6f6f',
  	fontSize: 15,
  	fontFamily: font_type.FontLight,
  	width:(Dimensions.get("window").width* 0.75),
  	marginVertical: ( Dimensions.get("window").height*0.01),
  	textAlign: 'left'
  },
  posted_image: {
  	height:( Dimensions.get("window").height*0.09),
  	width:( Dimensions.get("window").height*0.09)
  },
  slide: {
  	marginVertical: ( Dimensions.get("window").height * 0.0225),
  	flexDirection: 'row',
  },
  image_style: {
  	width: ( Dimensions.get("window").height * 0.06),
  	height: ( Dimensions.get("window").height * 0.06),
  	borderRadius: ( Dimensions.get("window").height * 0.03),
  	marginRight: (Dimensions.get("window").width* 0.04),
  	resizeMode: 'cover',
  },
  notification_content: {
  	marginTop: (Dimensions.get("window").width* 0.005),
  	marginRight: (Dimensions.get("window").width* 0.02),
  	width: (Dimensions.get("window").width* 0.78),
  },
  title_bar: {
  	flexDirection: 'row',
  	alignItems: 'flex-end',
  	justifyContent: 'space-between'
  },
  bottombar: {
  	flexDirection: 'row',
  	alignItems: 'center',
  	justifyContent: 'flex-start',
  	marginTop: (Platform.OS === 'ios')? ( Dimensions.get("window").height * 0.005) : 0,
  },
  like_content: {
  	flexDirection: 'row',
  	alignItems: 'center',
  	justifyContent: 'center',
  	marginRight: (Dimensions.get("window").width*0.1)
  },
  text_style: {
  	fontFamily: font_type.FontLight,
  	fontSize: 15,
  	color: '#6f6f6f'
  },
  separator_style: {
  	height: 0.5,
  	backgroundColor: '#d7d7d7'
  },
  follow_container: {
  	flexDirection: 'row',
  	alignItems: 'center',
  	justifyContent: 'center',
  	paddingTop: ( Dimensions.get("window").height * 0.015)
  },
  follow_sec: {
  	flex:1,
  	alignItems: 'center',
  	justifyContent: 'center'
  },
  follow_count: {
  	fontFamily: font_type.FontBold,
  	fontSize: 17,
  	color: '#363636'
  },
  follow_text: {
  	fontFamily: font_type.FontLight,
  	fontSize: 12,
  	color: '#959595'
  },
  follow_separator: {
  	height: ( Dimensions.get("window").height*0.025),
  	width: 0.5,
  	backgroundColor: '#d7d7d7'
  },
  thumbnail: {
  	marginVertical: ( Dimensions.get("window").height*0.01),
  	height:( Dimensions.get("window").height*0.2),
  	width:(Dimensions.get("window").width* 0.78),
  	resizeMode:'cover'
  }
});
// END TO MAKE STYLE
