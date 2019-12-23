import React, { Component } from 'react';
import {Text, View, Image, StatusBar, Platform,Dimensions,TouchableOpacity,ScrollView,StyleSheet,I18nManager} from 'react-native';
import {Container, Button, Icon, Right,Header,Left, Body, Title, Content} from 'native-base';
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

export default class Social10 extends Component {

  //BEGIN TO SETUP RENDERIMAGE
  _renderImage(postImage) {
    <View style={styles.post_image_view}>
    {
      postImage.map((item, index) => {
        return (
          <View style={{flexDirection: 'row'}} key={index}>
            <Text>Hello</Text>
          </View>
        )
      })
    }
    </View>
  }
  //END TO SETUP RENDERIMAGE

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
        profile: GlobalInclude.Image6,
        notification: 'Lorem ipsum',
        comment: '',
        time: 'Just now',
        postImage: '',
      },
      {
        id: 2,
        name: 'Lorem ipsum',
        profile: GlobalInclude.Image8,
        notification: 'Lorem ipsum',
        comment: 'Lorem ipsum dolor sit amet, conses adipisi, sed do eiusmod tempor ince idunt ut labore et dolore.',
        time: '1 mins ago',
        postImage: '',
      },
      {
        id: 3,
        name: 'Lorem ipsum',
        profile: GlobalInclude.Image9,
        notification: 'Lorem ipsum',
        comment: '',
        time: '2 mins ago',
        postImage: '',
      },
      {
        id: 4,
        name: 'Lorem ipsum',
        profile: GlobalInclude.Image1,
        notification: 'Lorem ipsum',
        comment: '',
        time: '3 hours ago',
        postImage: '',
      },
      {
        id: 5,
        name: 'Lorem ipsum',
        profile: GlobalInclude.Image2,
        notification: 'Lorem ipsum',
        comment: '',
        time: '00:35 PM',
        postImage: [
          {image:GlobalInclude.Image7, id:10},
          {image:GlobalInclude.Image8, id:20},
          {image:GlobalInclude.Image9, id:30},
          {image:GlobalInclude.Image10, id:40},
        ],
      },
      {
        id: 6,
        name: 'Lorem ipsum',
        profile: GlobalInclude.Image3,
        notification: 'Lorem ipsum',
        comment: 'Lorem ipsum dolor sit amet, conses adipisi, sed do eiusmod tempor ince idunt ut labore et dolore ali quare eprehenderit.',
        time: '00:23 PM',
        postImage: '',
      },
    ]
    //END TO SETUP DATA

    return(
     <Container style={styles.main}>
       <View style={styles.logosec}>
       {/* BEGIN TO SETUP HEADER VIEW */}
         <Header style={styles.header}>
         {/* BEGIN TO SETUP LEFT VIEW */}
           <Left style={styles.left}>
             <TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
             {
               (I18nManager.isRTL)
               ?
                   <Icon name="ios-arrow-forward" style={styles.back_arrow}/>
               :
                   <Icon name="ios-arrow-back" style={styles.back_arrow}/>
             }
             </TouchableOpacity>
           </Left>
         {/* END TO SETUP LEFT VIEW */}

         {/* BEGIN TO SETUP BODY VIEW */}
           <Body style={styles.body}>
             <Title style={styles.header_title}>Notification</Title>
           </Body>
         {/* END TO SETUP BODY VIEW */}

         {/* BEGIN TO SETUP RIGHT VIEW */}
           <Right style={styles.right}>
             <Button transparent></Button>
           </Right>
         {/* END TO SETUP RIGHT VIEW */}
         </Header>
       {/* END TO SETUP HEADER VIEW */}
       </View>
       <Content style={styles.slidesec}>
        {
          data.map((item, index) => {
            return (
              <View style={styles.post_main_row} key={index}>
                <View style={styles.slide}>
                {/* BEGIN TO SETUP PROFILE IMAGE VIEW */}
                  <Image source={item.profile} style={styles.image_style}/>
                {/* END TO SETUP PROFILE IMAGE VIEW */}

                {/* BEGIN TO SETUP NAME AND NOTIFICATION VIEW */}
                  <View style={styles.notification_content}>
                    <View style={styles.title_bar}>
                      <Text style={styles.name}>{item.name}</Text>
                      <Text style={styles.notification}>{item.notification}</Text>
                    </View>
                 {/* END TO SETUP NAME AND NOTIFICATION VIEW */}

                 {/* BEGIN TO SETUP COMMENT VIEW */}
                    {
                      (item.comment == '') ? null :
                      <Text style={styles.comments}>{item.comment}</Text>
                    }
                  {/* END TO SETUP COMMENT VIEW */}

                  {/* BEGIN TO SETUP POST IMAGE VIEW */}
                    {
                      (item.postImage == '') ? null :
                      <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={styles.post_image_content}>
                        {
                          item.postImage.map((itemImage, index) => {
                            return (
                              <View style={styles.post_image_view} key={index}>
                                <Image source={itemImage.image} style={styles.posted_image}/>
                              </View>
                            )
                          })
                        }
                      </ScrollView>
                    }
                  {/* END TO SETUP POST IMAGE VIEW */}

                  {/* BEGIN TO SETUP TIME VIEW */}
                    <View style={styles.bottombar}>
                      <Ionicons name="md-time" size={15} color="#d4d4d4" />
                      <Text style={styles.time}>{item.time}</Text>
                    </View>
                  {/* END TO SETUP TIME VIEW */}
                  </View>
                </View>
                <View style={styles.separatoe_style}></View>
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
	main:{
		backgroundColor: '#2d324f'
	},
  back_arrow:{
		width: 30,
		justifyContent: 'flex-start',
		alignItems: 'center',
    color: 'white',
    fontSize: moderateScale(25)
  },
	logosec:{
		height: (Dimensions.get("window").height*0.095),
		marginTop: (Platform.OS === 'ios')? 0 : (Dimensions.get("window").height*0.035),
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row'
	},
	slidesec:{
		height: (Dimensions.get("window").height*0.905),
		position: 'relative',
		backgroundColor: 'white',
	},
	header: {
		backgroundColor: '#ff6347',
		height: (Dimensions.get("window").height) * 0.1,
		width: Dimensions.get("window").width,
		flexDirection: 'row',
		borderBottomColor: '#2d324f',
		...Platform.select({
			ios: {
				marginTop:(Dimensions.get("window").height) * 0.007,
				paddingTop: 1,
			},
			android: {}
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
	  fontSize : moderateScale(17),
	  letterSpacing: 0.7
	},
  post_image_content:{
		flexDirection: 'row',
		paddingVertical: (Dimensions.get("window").height*0.01),
	},
  name: {
		color: '#363636',
		fontSize: moderateScale(15),
		fontFamily: font_type.FontBold,
		marginRight: (Dimensions.get("window").width) * 0.015
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
  posted_image: {
		height:(Dimensions.get("window").height*0.09),
		width:(Dimensions.get("window").height*0.09)
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
		marginLeft: (Dimensions.get("window").width) * 0.02
	},
  separatoe_style: {
		height: (Dimensions.get("window").height) * 0.001,
		backgroundColor: '#b7b7b7'
	},
  post_image_view:{
		height:(Dimensions.get("window").height*0.2),
		backgroundColor: 'white',
		padding:(Dimensions.get("window").width*0.02)
	},
  post_main_row:{
		backgroundColor: 'white',
		paddingLeft: (Dimensions.get("window").width * 0.04)
	},
});
// END TO MAKE STYLE
