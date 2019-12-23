import React, { Component } from "react";
import {Text,View,Image,StatusBar,Platform,ImageBackground,Dimensions,TouchableOpacity,ScrollView,StyleSheet,BackHandler,I18nManager,Alert} from "react-native";
import {Container,Button,Icon,Right,Item,Header,Left,Body,Title,Content,List,ListItem} from "native-base";
import Swiper from "react-native-swiper";
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


export default class ProfileFriends extends Component {
  constructor(props) {
    super(props);
    // BEGIN TO SETUP STATE
    this.state = {
      isFollowed: true,
      selectedLots: 2
    };
    // END TO SETUP STATE
  }

  // BEGIN TO SETUP IMAGE PRESS EVENT
  onImagePress(id) {
    this.setState({
      selectedLots: id
    });

    if (id > 1) {
      const offsetX = id * (Dimensions.get('window').width * 0.05);
      this.refs.imageList.scrollTo({ x: offsetX });
    } else {
      const offsetX = Dimensions.get('window').width * 0;
      this.refs.imageList.scrollTo({ x: offsetX });
    }
  }
  // END TO SETUP IMAGE PRESS EVENT

  render() {
    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW

    // BEGIN TO SETUP DATA
    var dataContainer = [
      {
        id: 1,
        name: "Lorem Ipsum",
        post: "Lorem Ipsum",
        followers: 68,
        following: 45,
        likes: 34,
        status:
          "Lorem ipsum dolor sit amet, consectetur adipisli sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisli sed do eiusmod tempor",
        profilePicOne:GlobalInclude.Image3,
        profilePicTwo:GlobalInclude.Image5,
        profilePicThree:GlobalInclude.Image7,
        friendProfile:GlobalInclude.Image9,
        noOfPhoto: 11
      },
      {
        id: 2,
        name: "Lorem Ipsum",
        post: "Lorem Ipsum",
        followers: 99,
        following: 88,
        likes: 77,
        status:
          "Lorem ipsum dolor sit amet, consectetur adipisli sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
        profilePicOne:GlobalInclude.Image10,
        profilePicTwo:GlobalInclude.Image6,
        profilePicThree:GlobalInclude.Image2,
        friendProfile:GlobalInclude.Image1,
        noOfPhoto: 66
      },
      {
        id: 3,
        name: "Lorem Ipsum",
        post: "Lorem Ipsum",
        followers: 55,
        following: 44,
        likes: 33,
        status:
          "Lorem ipsum dolor sit amet, consectetur adipisli sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. Lorem ipsum dolor sit amet, consectetur adipisli sed do eiusmod tempor",
        profilePicOne:GlobalInclude.Image6,
        profilePicTwo:GlobalInclude.Image3,
        profilePicThree:GlobalInclude.Image7,
        friendProfile:GlobalInclude.Image5,
        noOfPhoto: 11
      },
      {
        id: 4,
        name: "Lorem Ipsum",
        post: "Lorem Ipsum",
        followers: 345,
        following: 123,
        likes: 432,
        status:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. Lorem ipsum dolor sit amet, consectetur adipisli sed do eiusmod tempor",
        profilePicOne:GlobalInclude.Image10,
        profilePicTwo:GlobalInclude.Image2,
        profilePicThree:GlobalInclude.Image3,
        friendProfile:GlobalInclude.Image4,
        noOfPhoto: 179
      },
      {
        id: 5,
        name: "Lorem Ipsum",
        post: "Lorem Ipsum",
        followers: 1111,
        following: 2222,
        likes: 523,
        status:
          "Lorem ipsum dolor sit amet, consectetur adipisli sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        profilePicOne:GlobalInclude.Image7,
        profilePicTwo:GlobalInclude.Image6,
        profilePicThree:GlobalInclude.Image5,
        friendProfile:GlobalInclude.Image4,
        noOfPhoto: 101
      }
    ];
      // END TO SETUP DATA

    return (
      <Container style={{ backgroundColor: "#f2f2f2" }}>
      {/* BEGIN TO SETUP IMAGE AS A BACKGROUND */}
      <ImageBackground source={GlobalInclude.Image3} style={styles.img_container}>

      {/* BEGIN TO SETUP HEADER VIEW */}
        <Header androidStatusBarColor='rgba(0,0,0,0)' style={styles.header}>
        {/* BEGIN TO SETUP HEADER LEFT VIEW */}
          <Left style={styles.left}>
            <TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
              <Icon name={I18nManager.isRTL ? "ios-arrow-forward" : "ios-arrow-back"} style={{ color: "#fff" }}/>
            </TouchableOpacity>
          </Left>
          {/* END TO SETUP HEADER LEFT VIEW */}

          {/* BEGIN TO SETUP HEADER BODY VIEW */}
            <Body style={styles.body}>
              <Title style={styles.header_title}>Profile</Title>
            </Body>
          {/* END TO SETUP HEADER BODY VIEW */}

          {/* BEGIN TO SETUP HEADER RIGHT VIEW */}
            <Right style={styles.right}>
              <Button transparent />
            </Right>
          {/* END TO SETUP HEADER RIGHT VIEW */}
        </Header>
      {/* END TO SETUP HEADER VIEW */}
        <View style={styles.slidesec}>
          <View style={styles.image_container_size}>
          {/* BEGIN TO SETUP HEADERIMAGE VIEW */}
            <ScrollView horizontal={true} ref="imageList" showsHorizontalScrollIndicator={false} style={styles.scroll_image}>
              {dataContainer.map((item, index) => {
                return (
                  <View key={index} style={{ alignItems: "center" }}>
                    <TouchableOpacity style={styles.image_container} onPress={() => this.onImagePress(item.id)}>
                      <Image source={item.friendProfile} style={this.state.selectedLots == item.id ? styles.active_image : styles.normal_image}/>
                    </TouchableOpacity>
                    {this.state.selectedLots == item.id ? (
                      <View style={styles.indicator_style}>
                        <Ionicons name="md-arrow-dropup" size={35} color="white"/>
                      </View>
                    ) : null}
                  </View>
                );
              })}
            </ScrollView>
          {/* END TO SETUP HEADERIMAGE VIEW */}
          </View>
          {/* BEGIN TO SETUP CONTAINER VIEW */}
          {dataContainer.map((item, index) => {
            return (
              <View key={index}>
                {item.id == this.state.selectedLots ? (
                  <View style={styles.slide_main}>
                    {/* BEGIN TO SETUP NAME AND POST VIEW */}
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.post}>{item.post}</Text>
                    {/* END TO SETUP NAME AND POST VIEW */}

                    {/* BEGIN TO SETUP FOLLOWBUTTON VIEW */}
                    <TouchableOpacity onPress={() => this.setState({ isFollowed: !this.state.isFollowed })}
                      style={
                        this.state.isFollowed
                          ? styles.follow_active
                          : styles.follow_normal
                      }>
                      <Text style={this.state.isFollowed
                            ? styles.follow_textActive
                            : styles.follow_textNormal
                        }>
                        FOLLOW
                      </Text>
                    </TouchableOpacity>
                    {/* END TO SETUP FOLLOWBUTTON VIEW */}

                    {/* BEGIN TO SETUP FOLLOWERS VIEW */}
                    <View style={styles.follow_container}>
                      <View style={styles.follow_sec}>
                        <Text style={styles.follow_count}>{item.followers}</Text>
                        <Text style={styles.follow_text}>Followers</Text>
                    </View>
                    {/* END TO SETUP FOLLOWERS VIEW */}

                    {/* BEGIN TO SETUP FOLLOWING VIEW */}
                      <View style={styles.follow_sec}>
                        <Text style={styles.follow_count}>{item.following}</Text>
                        <Text style={styles.follow_text}>Following</Text>
                      </View>
                    {/* END TO SETUP FOLLOWING VIEW */}

                    {/* BEGIN TO SETUP LIKES VIEW */}
                      <View style={styles.follow_sec}>
                        <Text style={styles.follow_count}>{item.likes}</Text>
                        <Text style={styles.follow_text}>Likes</Text>
                      </View>
                    {/* END TO SETUP LIKES VIEW */}
                    </View>

                    {/* BEGIN TO SETUP STATUS VIEW */}
                    <Text numberOfLines={4} style={styles.status}>
                      {item.status}
                    </Text>
                    {/* END TO SETUP STATUS VIEW */}

                    {/* BEGIN TO SETUP BOTTOMIMAGE VIEW */}
                    <View style={styles.photo_container}>
                      <Image source={item.profilePicOne} style={styles.image_large}/>
                      <View style={styles.rightimage_container}>
                        <Image source={item.profilePicTwo} style={styles.image_medium}/>
                      <View style={styles.image_bottom_container}>
                        <Image source={item.profilePicThree} style={styles.image_small}/>
                          <TouchableOpacity onPress={() => alert("See More Photos button clicked.")} style={styles.more_image}>
                            <Text style={styles.no_of_image}>
                              +{item.noOfPhoto}
                            </Text>
                            <Text style={styles.photo_text}>Photos</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                    {/* END TO SETUP BOTTOMIMAGE VIEW */}
                  </View>
                ) : null}
              </View>
            );
          })}
        </View>
        </ImageBackground>
      {/* END TO SETUP IMAGE AS A BACKGROUND */}
      </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  slidesec:{
  	height: (Dimensions.get('window').height*0.905),
  	paddingHorizontal: (Dimensions.get('window').width * 0.035),
  	paddingTop: (Dimensions.get('window').height*0.02),
  	position: 'relative',
  },
  img_container: {
  	height:(Dimensions.get('window').height),
  	width:(Dimensions.get('window').width),
  	backgroundColor: 'gray'
  },
  header: {
  	backgroundColor: "rgba(0,0,0,0)",
  	height: Dimensions.get('window').height * 0.1,
  	borderBottomWidth: 0,
  	paddingTop: (Dimensions.get('window').height * 0.05),
  	elevation: 0,
  	paddingLeft: (Dimensions.get('window').width * 0.05),
  	paddingRight: (Dimensions.get('window').width * 0.05),
  },
  back_arrow: {
  	width: 30,
  	justifyContent: 'center',
  	alignItems: 'flex-start'
  },
  left: {
    flex: 0.5,
  },
  body: {
    flex: 3,
    alignItems: 'center',
  },
  right: {
    flex: 0.5,
  },
  header_title: {
    color: 'white',
    fontFamily: font_type.FontBold,
    fontSize : moderateScale(17),
  },
  follow_container: {
  	height:(Dimensions.get('window').height * 0.085),
  	flexDirection:'row',
  	alignItems: 'center',
  	justifyContent: 'center',
  	borderBottomWidth: 1,
  	borderTopWidth: 1,
  	borderColor: '#ebebeb',
  	backgroundColor:'white'
  },
  follow_sec: {
  	flex:1,
  	alignItems: 'center',
  	justifyContent: 'center'
  },
  follow_count: {
  	color:'#363636',
  	fontSize: moderateScale(15),
  	fontFamily:font_type.FontBold,
  	backgroundColor: 'rgba(0,0,0,0)'
  },
  follow_text: {
  	color:'#959595',
  	fontSize: moderateScale(12),
  	fontFamily:font_type.FontBold,
  	backgroundColor: 'rgba(0,0,0,0)'
  },
  image_container_size: {
  	height:(Dimensions.get('window').height * 0.17),
  },
  scroll_image: {
  	flexDirection: 'row'
  },
  image_container: {
  	height:(Dimensions.get('window').height * 0.15),
  	marginHorizontal:(Dimensions.get('window').width * 0.035),
  	justifyContent: 'center',
  	alignItems: 'center',
  },
  active_image: {
  	height:(Dimensions.get('window').height * 0.08),
  	width:(Dimensions.get('window').height * 0.08),
  	borderRadius:(Dimensions.get('window').height * 0.04),
  	borderWidth:1.5,
  	borderColor:'white',
  	...Platform.select({
  		ios: {
  			backgroundColor:'gray'
  		},
  	}),
  },
  normal_image: {
  	height:(Dimensions.get('window').height * 0.06),
  	width:(Dimensions.get('window').height * 0.06),
  	borderRadius:(Dimensions.get('window').height * 0.03),
  	...Platform.select({
  		ios: {
  			backgroundColor:'gray'
  		},
  	}),
  	opacity: 0.3,
  },
  indicator_style: {
  	width: (Dimensions.get('window').width * 0.05),
  	height: (Dimensions.get('window').width * 0.05),
  	alignItems: 'center',
  	justifyContent: 'center'
  },
  slide_main: {
  	backgroundColor: 'white',
  	borderRadius: 6,
  },
  name: {
  	paddingTop:(Dimensions.get('window').height*0.02),
  	paddingBottom:(Dimensions.get('window').height*0.01),
  	alignSelf: 'center',
  	fontFamily: font_type.FontBold,
  	fontSize:moderateScale(18),
  	color:'#363636'
  },
  post: {
  	alignSelf: 'center',
  	fontFamily: font_type.FontLight,
  	fontSize:moderateScale(12),
  	color:'#b7b7b7'
  },
  follow_active: {
  	height:(Dimensions.get('window').height*0.053),
  	width:(Dimensions.get('window').width*0.3),
  	marginVertical:(Dimensions.get('window').height*0.03),
  	borderRadius:(Dimensions.get('window').height*0.05),
  	backgroundColor:'#ff6347',
  	alignSelf: 'center',
  	alignItems: 'center',
  	justifyContent: 'center'
  },
  follow_normal: {
  	height:(Dimensions.get('window').height*0.053),
  	width:(Dimensions.get('window').width*0.3),
  	marginVertical:(Dimensions.get('window').height*0.03),
  	borderRadius:(Dimensions.get('window').height*0.05),
  	borderColor:'#ff6347',
  	borderWidth: 1.5,
  	alignSelf: 'center',
  	alignItems: 'center',
  	justifyContent: 'center'
  },
  follow_textActive: {
  	fontFamily: font_type.FontBold,
  	fontSize:moderateScale(18),
  	color:'white'
  },
  follow_textNormal: {
  	fontFamily: font_type.FontBold,
  	fontSize:moderateScale(18),
  	color:'#ff6347'
  },
  status: {
  	padding:(Dimensions.get('window').height*0.012),
  	fontFamily: font_type.FontLight,
  	fontSize:moderateScale(15),
  	color:'#6f6f6f',
  	textAlign: 'left'
  },
  photo_container: {
  	marginHorizontal:(Dimensions.get('window').height*0.012),
  	marginTop:(Dimensions.get('window').height*0.012),
  	marginBottom:(Dimensions.get('window').height*0.02),
  	flexDirection: 'row',
  	justifyContent: 'space-between'
  },
  image_large: {
  	height:(Dimensions.get('window').height*0.2),
  	width:(Dimensions.get('window').width*0.51),
  	backgroundColor:'gray',
  	resizeMode: 'cover'
  },
  rightimage_container: {
  	justifyContent: 'space-between'
  },
  image_medium: {
  	height:(Dimensions.get('window').height*0.095),
  	width:(Dimensions.get('window').width*0.355),
  	backgroundColor:'gray',
  	resizeMode: 'cover'
  },
  image_bottom_container: {
  	flexDirection: 'row',
  	justifyContent: 'space-between'
  },
  image_small: {
  	height:(Dimensions.get('window').height*0.095),
  	width:(Dimensions.get('window').width*0.168),
  	backgroundColor:'gray',
  	resizeMode: 'cover'
  },
  more_image: {
  	height:(Dimensions.get('window').height*0.095),
  	width:(Dimensions.get('window').width*0.168),
  	backgroundColor:'#259ef8',
  	alignItems: 'center',
  	justifyContent: 'center'
  },
  no_of_image: {
  	fontFamily: font_type.FontBold,
  	fontSize:moderateScale(14),
  	color:'white'
  },
  photo_text: {
  	fontFamily: font_type.FontLight,
  	fontSize:moderateScale(12),
  	color:'white'
  }
});
// END TO MAKE STYLE
