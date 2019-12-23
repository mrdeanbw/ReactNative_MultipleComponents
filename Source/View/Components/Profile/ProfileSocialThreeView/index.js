import React, { Component } from "react";
import {Text,Image,StatusBar,Platform,ImageBackground,StyleSheet,Dimensions,TouchableOpacity,View,Alert,I18nManager} from "react-native";
import {Container,Button,Right,Left,Content,Body,Header,Icon,Title} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
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


export default class ProfileSocialThree extends Component {
  constructor(props) {
    super(props);
    // BEGIN TO SETUP STATE
    this.state = {};
    // END TO SETUP STATE
  }

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
        profileImage: GlobalInclude.Image10,
        name: "Lorem ipsum",
        designation: "Lorem ipsum"
      },
      {
        id: 2,
        profileImage: GlobalInclude.Image5,
        name: "Lorem ipsums",
        designation: "Graphic Design"
      }
    ];
    //END TO SETUP DATA
    return (
      <Container style={styles.main}>
      {/* BEGIN TO SETUP HEADER VIEW */}
        <Header androidStatusBarColor={"#FFFFFF"} style={styles.header}>
      {/* BEGIN TO SETUP LEFT VIEW */}
          <Left style={styles.left}>
            <TouchableOpacity style={styles.back_arrow} onPress={() => this.props.navigation.goBack()}>
              <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="black"/>
            </TouchableOpacity>
          </Left>
      {/* END TO SETUP LEFT VIEW */}

      {/* BEGIN TO SETUP BODY VIEW */}
          <Body style={styles.body}>
            <Title style={styles.title}>Profiles</Title>
          </Body>
      {/* END TO SETUP BODY VIEW */}

      {/* BEGIN TO SETUP RIGHT VIEW */}
          <Right style={styles.left}>
            <Button transparent />
          </Right>
      {/* END TO SETUP RIGHT VIEW */}
        </Header>
      {/* END TO SETUP HEADER VIEW */}
        <Content>
      {/* BEGIN TO SETUP PROFILEIMAGE AND CAMERA VIEW */}
          <View style={styles.proimg}>
            <Image style={styles.profile_img} source={GlobalInclude.Image3} />
            <TouchableOpacity style={styles.camera_icon} onPress={() => alert("Edit Profile Picture button clicked.")}>
              <SimpleLineIcons name="camera" size={18} color="white" style={{backgroundColor: "transparent",justifyContent: "center"}}/>
            </TouchableOpacity>
          </View>
      {/* END TO SETUP PROFILEIMAGE AND CAMERA VIEW */}

      {/* BEGIN TO SETUP NAME AND DESIGNATION VIEW */}
          <Text style={styles.name_txt}>Lorem ipsum</Text>
          <Text style={styles.designtaion_txt}>Lorem ipsum</Text>
      {/* END TO SETUP NAME AND DESIGNATION VIEW */}
          <View style={styles.follower_follwing_like_bg}>
      {/* BEGIN TO SETUP FOLLOWERS VIEW */}
            <View style={{ flexDirection: "row" }}>
              <View style={styles.count_label_bg}>
                <Text style={styles.count_txt}>1111</Text>
                <Text style={styles.label_txt}>Followers</Text>
              </View>
              <View style={styles.divide_vertical} />
            </View>
      {/* END TO SETUP FOLLOWERS VIEW */}

      {/* BEGIN TO SETUP FOLLOWING VIEW */}
            <View style={{ flexDirection: "row" }}>
              <View style={styles.count_label_bg}>
                <Text style={styles.count_txt}>2222</Text>
                <Text style={styles.label_txt}>Following</Text>
              </View>
              <View style={styles.divide_vertical} />
            </View>
      {/* END TO SETUP FOLLOWING VIEW */}

      {/* BEGIN TO SETUP LIKES VIEW */}
            <View style={styles.count_label_bg}>
              <Text style={styles.count_txt}>3333</Text>
              <Text style={styles.label_txt}>Likes</Text>
            </View>
      {/* END TO SETUP LIKES VIEW */}
          </View>
          <View style={styles.divider_grey} />
          <View style={styles.photosview}>
            {/* BEGIN TO SETUP PHOTOS VIEW */}
              <View style={styles.photod_header}>
                <Text style={styles.photos_friends_txt}>Photos</Text>
                <TouchableOpacity style={styles.imgsview} onPress={() => alert("See More Photos button clicked.")}>
                  <Text style={styles.photos_friendscount_txt}>45</Text>
                  <FontAwesome name={I18nManager.isRTL ? "angle-left" : "angle-right"} size={20} color="#d6d6d6"/>
                </TouchableOpacity>
              </View>
            {/* END TO SETUP PHOTOS VIEW */}

            {/* BEGIN TO SETUP GALLERYIMAGE VIEW */}
              <View style={styles.myimg}>
                <Image
                  style={styles.gallery_img}
                  source={GlobalInclude.Image9}/>
                <View style={styles.img} />
                <Image
                  style={styles.gallery_img}
                  source={GlobalInclude.Image8}/>
                <View style={styles.img} />
                <Image
                  style={styles.gallery_img}
                  source={GlobalInclude.Image7}/>
              </View>
            {/* END TO SETUP GALLERYIMAGE VIEW */}
            </View>
            <View style={styles.divider_grey} />
            <View style={styles.friendsview}>
          {/* BEGIN TO SETUP FRIENDS VIEW */}
            <View style={styles.imgview}>
              <Text style={styles.photos_friends_txt}>Friends</Text>
              <TouchableOpacity
                style={styles.frdscount}
                onPress={() => alert("See List of Friends button clicked.")}>
                <Text style={styles.photos_friendscount_txt}>55</Text>
                  <FontAwesome name={I18nManager.isRTL ? "angle-left" : "angle-right"} size={20} color="#d6d6d6"/>
              </TouchableOpacity>
            </View>
          {/* END TO SETUP FRIENDS VIEW */}
            {data.map((item, index) => {
              return (
                <View key={index}>
                  <View style={styles.frdsview}>
                    <Image style={styles.frdsimg} source={item.profileImage} />
                  {/* BEGIN TO SETUP NAME AND DESIGNATION VIEW */}
                    <View style={styles.frdsinfo}>
                      <Text style={styles.rowname_txt}>{item.name}</Text>
                      <Text style={styles.row_designation_txt}>
                        {item.designation}
                      </Text>
                    </View>
                  {/* END TO SETUP NAME AND DESIGNATION VIEW */}
                  </View>
                  <View
                    style={
                      index === data.length - 1
                        ? null
                        : styles.divider_horizontal
                    }/>
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

  main: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: "#FFFFFF",
    flexDirection: 'column'
  },
  back_arrow: {
  	width: 30,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  header: {
    backgroundColor: '#FFFFFF',
    height: 65,
    width: Dimensions.get("window").width,
    flexDirection: 'row',
    borderBottomColor: 'transparent',
    elevation: 0,
    ...Platform.select({
        ios: {
          paddingTop: 12,
        },
        android: {
          paddingTop: 15
        }
    }),
  },
  left:{
    flex:1
  },
  body:{
    flex:2,
    alignItems:'center'
  },
  title:{
    marginTop: 2,
    color: "#363636",
    fontSize: moderateScale(18),
    fontFamily: font_type.FontBold
  },
  proimg:{
    flexDirection: 'row',
    alignSelf: 'center'
  },
  photosview:{
    backgroundColor: "#fff",
    width: (Dimensions.get("window").width),
    flexDirection: 'column',
    marginTop: (Dimensions.get("window").height) * 0.02,
    marginBottom: (Dimensions.get("window").height) * 0.03
  },
  imgsview:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  friendsview:{
    backgroundColor: "#fff",
    width: (Dimensions.get("window").width),
    flexDirection: 'column',
    marginTop: (Dimensions.get("window").height) * 0.02
  },
  myimg:{
    flexDirection: 'row',
    width: (Dimensions.get("window").width) * 0.93,
    alignSelf: 'center',
    marginTop: (Dimensions.get("window").height) * 0.025
  },
  imgview:{
    flexDirection: 'row',
    width: (Dimensions.get("window").width) * 0.93,
    alignSelf: 'center',
    justifyContent: 'space-between'
  },
  img:{
    width: (Dimensions.get("window").width) * 0.028,
    height: (Dimensions.get("window").height) * 0.18,
    backgroundColor: 'transparent'
  },
  frdsview:{
    flexDirection: 'row',
    width: (Dimensions.get("window").width) * 0.93,
    alignSelf: 'center',
    marginTop: (Dimensions.get("window").height) * 0.02,
    marginBottom: (Dimensions.get("window").height) * 0.02
  },
  frdsimg:{
    width: (Dimensions.get("window").width) * 0.12,
    height: (Dimensions.get("window").width) * 0.12,
    borderRadius: (Dimensions.get("window").width) * 0.06
  },
  frdsinfo:{
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: (Dimensions.get("window").width) * 0.03
  },
  frdscount:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  profile_img: {
    width: (Dimensions.get("window").width) * 0.30,
    height: (Dimensions.get("window").width) * 0.30,
    borderRadius: (Dimensions.get("window").width) * 0.15,
    borderWidth: 1,
    borderColor: "#fff",
    alignSelf: 'center',
    marginTop: (Dimensions.get("window").height) * 0.02,
    },

  camera_icon: {
    width: (Dimensions.get("window").width) * 0.08,
    height: (Dimensions.get("window").width) * 0.08,
    borderRadius: (Dimensions.get("window").width) * 0.04,
    alignSelf: 'flex-end',
    marginLeft: -((Dimensions.get("window").width) * 0.08),
    marginBottom: ((Dimensions.get("window").width) * 0.01),
    backgroundColor: '#0691ce',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth:1
  },

  name_txt: {
    color: "#6f6f6f",
    fontSize: moderateScale(18),
    textAlign: 'center',
    fontFamily: font_type.FontBold,
    marginTop: (Dimensions.get("window").height) * 0.025
  },

  designtaion_txt: {
    color: "#b7b7b7",
    fontSize: moderateScale(14),
    textAlign: 'center',
    fontFamily: font_type.FontLight
  },

  follower_follwing_like_bg: {
      flexDirection: 'row',
      width: (Dimensions.get("window").width) * 0.87,
      alignSelf: 'center',
      marginTop: (Dimensions.get("window").height) * 0.06,
      marginBottom: (Dimensions.get("window").height) * 0.04
  },

  count_label_bg: {
    flexDirection: 'column',
    width: (Dimensions.get("window").width) * 0.29,
    justifyContent: 'center'
  },

  count_txt: {
    color: "#363636",
    fontSize: moderateScale(16),
    fontFamily: font_type.FontBold,
    textAlign: 'center'
  },

  label_txt: {
    color: "#959595",
    fontSize: moderateScale(12),
    textAlign: 'center'
  },

  divide_vertical: {
    backgroundColor: "#d7d7d7",
    width: 1,
    height: (Dimensions.get("window").height) * 0.03,
    alignSelf: 'flex-end',
    marginBottom: 5
  },

  divider_horizontal: {
    backgroundColor: "#d7d7d7",
    width: (Dimensions.get("window").width) * 0.965,
    height: 1,
    alignSelf: 'flex-end',
  },

  divider_grey: {
    backgroundColor: "#e6e6e6",
    height: (Dimensions.get("window").height) * 0.02
  },

  photod_header: {
    flexDirection: 'row',
    width: (Dimensions.get("window").width) * 0.93,
    alignSelf: 'center',
    justifyContent: 'space-between'
  },

  photos_friends_txt: {
    color: "#6f6f6f",
    fontSize: moderateScale(15)
  },

  photos_friendscount_txt: {
    color: "#b7b7b7",
    fontSize: moderateScale(14),
    marginRight: 10
  },

  gallery_img: {
    width: (Dimensions.get("window").width) * 0.29,
    height: (Dimensions.get("window").height) * 0.18,
    resizeMode: 'cover'
  },

  rowname_txt: {
    color: "#363636",
    fontSize: moderateScale(15),
    fontFamily: font_type.FontBold,
    textAlign: 'left'
  },

  row_designation_txt: {
    color: "#b7b7b7",
    fontSize: moderateScale(12),
    fontFamily: font_type.FontLight,
    textAlign: 'left'
  }
});
// END TO MAKE STYLE
