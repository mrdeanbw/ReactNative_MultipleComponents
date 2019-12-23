import React, { Component } from "react";
import {Text,Image,StatusBar,Platform,ImageBackground,Dimensions,TouchableOpacity,View,StyleSheet,ListView,Alert,I18nManager} from "react-native";
import {Container,Button,Right,Left,Content,Body,Header,Icon,Title} from "native-base";
import ReadMore from "react-native-read-more-text";
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
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


export default class ProfileOverlay extends Component {

  constructor(props) {
    super(props);

    //BEGIN TO SETUP FRIENDS DATA
    const friendsObject = [
      {
        id: 1,
        profileImage: GlobalInclude.Image3,
        socialImage: "facebook",
        color: "#4c70aa"
      },
      {
        id: 2,
        profileImage: GlobalInclude.Image4,
        socialImage: "twitter",
        color: "#00b6ee"
      },
      {
        id: 3,
        profileImage: GlobalInclude.Image5,
        socialImage: "twitter",
        color: "#00b6ee"
      },
      {
        id: 4,
        profileImage: GlobalInclude.Image6,
        socialImage: "facebook",
        color: "#4c70aa"
      },
      {
        id: 5,
        profileImage: GlobalInclude.Image7,
        socialImage: "twitter",
        color: "#00b6ee"
      }
    ];
    //END TO SETUP FRIENDS DATA

    //BEGIN TO SETUP HOBBIES DATA
    const hobbiesObject = [
      {
        id: 1,
        hobbieName: "Hobbie 1"
      },
      {
        id: 2,
        hobbieName: "Hobbie 2"
      },
      {
        id: 3,
        hobbieName: "Hobbie 3"
      },
      {
        id: 4,
        hobbieName: "Hobbie 4"
      },
      {
        id: 5,
        hobbieName: "Hobbie 5"
      },
      {
        id: 6,
        hobbieName: "Hobbie 6"
      }
    ];
    //END TO SETUP HOBBIES DATA

    //BEGIN TO SETUP LISTVIEW DATA
    const rowHasChanged = (r1, r2) => r1 !== r2;
    const ds = new ListView.DataSource({ rowHasChanged });

    this.state = {
      isLoading: true,
      friendsSource: ds.cloneWithRows(friendsObject),
      hobbiesSource: ds.cloneWithRows(hobbiesObject)
    };
  }
  //END TO SETUP LISTVIEW DATA

  //BEGIN TO SETUP FRIENDSLISTVIEW ROW VIEW
  _renderFriendsRow(rowData) {
    var count = rowData.getRowCount;
    return (
      <View style={styles.friend_view}>
        <Image style={styles.friends_img} source={rowData.profileImage} />
        <TouchableOpacity style={[styles.social_bg, { backgroundColor: rowData.color }]}>
          <FontAwesome name={rowData.socialImage} size={10} color="#ffffff" />
        </TouchableOpacity>
        <View style={{ marginRight: Dimensions.get("window").height * 0.02 }} />
      </View>
    );
  }
  //END TO SETUP FRIENDSLISTVIEW ROW VIEW

  //BEGIN TO SETUP hobbies_list_view ROW VIEW
  _renderHobbiesRow(rowData) {
    return (
      <TouchableOpacity
        onPress={() => alert(rowData.hobbieName)}
        style={[
          styles.hobbies_view,
          { marginRight: rowData.id == 6 ? 0 : Dimensions.get("window").height * 0.015 }
        ]}>
        <Text style={styles.hobby_text}>{rowData.hobbieName}</Text>
      </TouchableOpacity>
    );
  }
 //END TO SETUP hobbies_list_view ROW VIEW

  render() {
    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW

    return (
      <Container style={styles.main}>
      {/* BEGIN TO SETUP IMAGEBACKGROUND VIEW */}
        <ImageBackground source={GlobalInclude.Image1} style={styles.img_container}>
      {/* BEGIN TO SETUP LINEARGRADIENT VIEW */}
          <LinearGradient
            locations={[0.01, 0.4, 0.6]}
            colors={["transparent", "rgba(45, 50, 79, 0.9)", "black"]}
            style={styles.gradient}>
            <Content>
          {/* BEGIN TO SETUP HEADER VIEW */}
              <Header style={styles.header}>
          {/* BEGIN TO SETUP LEFT VIEW */}
                <Left style={styles.left}>
                  <TouchableOpacity style={styles.back_arrow} onPress={() => this.props.navigation.goBack()}>
                    <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={25} color="white"/>
                  </TouchableOpacity>
                </Left>
          {/* END TO SETUP LEFT VIEW */}

          {/* BEGIN TO SETUP BODY AND RIGHT VIEW */}
                <Body style={styles.body} />
                <Right style={styles.right} />
          {/* END TO SETUP BODY AND RIGHT VIEW */}
              </Header>
          {/* END TO SETUP HEADER VIEW */}
          {/* BEGIN TO SETUP NAME AND DESIGNATION VIEW */}
              <Text style={styles.name_txt}>Lorem ipsum</Text>
              <Text style={styles.designation_txt}>Lorem ipsum</Text>
          {/* END TO SETUP NAME AND DESIGNATION VIEW */}
              <View style={styles.follow_bg}>
          {/* BEGIN TO SETUP FOLLOWERS VIEW */}
                <View style={styles.follower_view}>
                  <Text style={styles.follow_count_txt}>11</Text>
                  <Text style={styles.follow_label_txt}>Followers</Text>
                </View>
          {/* END TO SETUP FOLLOWERS VIEW */}
                <View style={styles.extra_view} />
          {/* BEGIN TO SETUP FOLLOWING VIEW */}
                <View style={styles.follower_view}>
                  <Text style={styles.follow_count_txt}>33</Text>
                  <Text style={styles.follow_label_txt}>Following</Text>
                </View>
          {/* END TO SETUP FOLLOWING VIEW */}
                <View style={styles.extra_view} />
          {/* BEGIN TO SETUP LIKES VIEW */}
                <View style={styles.follower_view}>
                  <Text style={styles.follow_count_txt}>55</Text>
                  <Text style={styles.follow_label_txt}>Likes</Text>
                </View>
          {/* END TO SETUP LIKES VIEW */}
          {/* BEGIN TO SETUP FOLLOW BUTTON CLICK VIEW */}
                <View style={styles.extra_view} />
                <TouchableOpacity
                  style={styles.follow_btn_view}
                  onPress={() => alert("FOLLOW button clicked.")}>
                  <Text style={styles.follow_txt}>FOLLOW</Text>
                </TouchableOpacity>
              </View>
            {/* END TO SETUP FOLLOW BUTTON CLICK VIEW */}


              <View style={styles.divider_horizontal} />
              <Text style={styles.abount_me_txt}>ABOUT ME</Text>
            {/* BEGIN TO SETUP DESCRIPTION VIEW */}
              <View style={styles.desc_view}>
                <ReadMore numberOfLines={4}
                  renderTruncatedFooter={this._renderTruncatedFooter}
                  renderRevealedFooter={this._renderRevealedFooter}>
                  <Text style={styles.aboutme_description_txt}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis semper non quam sed scelerisque. Vestibulum pharetra
                    dignissim nibh, ut tincidunt magna hendrerit sit amet.
                    Integer sit amet venenatis sem, sit amet ullamcorper nisi.
                    Vivamus dictum facilisis velit, quis commodo magna iaculis
                    sed.
                  </Text>
                </ReadMore>
              </View>
            {/* END TO SETUP DESCRIPTION VIEW */}

            {/* BEGIN TO SETUP FRIENDS VIEW */}
              <Text style={styles.abount_me_txt}>FRIENDS</Text>
              <ListView
                style={styles.friend_list_view}
                horizontal={true}
                dataSource={this.state.friendsSource}
                renderRow={this._renderFriendsRow.bind(this)}
                showsHorizontalScrollIndicator={false}/>
            {/* END TO SETUP FRIENDS VIEW */}

            {/* BEGIN TO SETUP HOBBIES VIEW */}
              <Text style={styles.abount_me_txt}>HOBBIES</Text>
              <ListView
                style={styles.hobbies_list_view}
                horizontal={true}
                dataSource={this.state.hobbiesSource}
                renderRow={this._renderHobbiesRow.bind(this)}
                showsHorizontalScrollIndicator={false}/>
            {/* END TO SETUP HOBBIES VIEW */}
            </Content>
          </LinearGradient>
        {/* END TO SETUP LINEARGRADIENT VIEW */}
        </ImageBackground>
      {/* END TO SETUP IMAGEBACKGROUND VIEW */}
      </Container>
    );
  }

  //BEGIN TO SETUP FOOTER VIEW
  _renderTruncatedFooter = handlePress => {
    return (
      <Text style={styles.view_moreless_txt} onPress={handlePress}>
        View more
      </Text>
    );
  };
  //END TO SETUP FOOTER VIEW

  //BEGIN TO SETUP FOOTER VIEW
  _renderRevealedFooter = handlePress => {
    return (
      <Text style={styles.view_moreless_txt} onPress={handlePress}>
        View less
      </Text>
    );
  };
  //END TO SETUP FOOTER VIEW
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
  back_arrow: {
	  width: 30,
	  justifyContent: 'center',
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
  right: {
    flex: 0.5
  },
  main: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'column'
  },
  img_container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  name_txt: {
    color: 'white',
    fontFamily:font_type.FontBold,
    fontSize: moderateScale(24),
    width: (Dimensions.get("window").width) * 0.88,
    alignSelf: 'center',
    marginTop: (Dimensions.get("window").height) * 0.28,
    textAlign: 'left'
  },
  designation_txt: {
    color: "#8a8c92",
    fontSize: moderateScale(12),
    fontFamily: font_type.FontLight,
    width: (Dimensions.get("window").width) * 0.88,
    alignSelf: 'center',
    textAlign: 'left'
  },
  follow_bg: {
    flexDirection: 'row',
    width: (Dimensions.get("window").width) * 0.88,
    alignSelf: 'center',
    marginTop: (Dimensions.get("window").height) * 0.02,
    marginBottom: (Dimensions.get("window").height) * 0.02,
    backgroundColor: 'rgba(0,0,0,0)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  follow_count_txt: {
    color: "#00b6ee",
    fontFamily: font_type.FontBold,
    fontSize: moderateScale(18),
    textAlign: 'center',
  },
  follow_label_txt: {
    color: "#959595",
    fontSize: moderateScale(12),
    fontFamily: font_type.FontLight,
    textAlign: 'center',
    marginTop: ((Dimensions.get("window").height) * 0.002)
  },
  follow_txt: {
    color: 'white',
    fontSize: moderateScale(10),
    fontFamily: font_type.FontBold
  },
  abount_me_txt: {
    color: 'white',
    fontFamily: font_type.FontBold,
    width: (Dimensions.get("window").width) * 0.88,
    alignSelf: 'center',
    fontSize: moderateScale(15),
    textAlign: 'left'
  },
  aboutme_description_txt: {
    color: "#a6a6a6",
    fontFamily: font_type.FontLight,
    width: (Dimensions.get("window").width) * 0.88,
    alignSelf: 'center',
    fontSize: moderateScale(15)
  },
  view_moreless_txt: {
    color: "#00b6ee",
    fontSize: moderateScale(15),
    fontFamily: font_type.FontLight
  },
  friends_img: {
    width: (Dimensions.get("window").width) * 0.14,
    height: (Dimensions.get("window").width) * 0.14,
    borderRadius: (Dimensions.get("window").width) * 0.07,
    resizeMode: 'cover',
    marginTop: (Dimensions.get("window").height) * 0.01
  },
  friend_view:{
    flexDirection: 'row'
  },
  hobbies_view:{
    marginBottom: (Dimensions.get("window").height) * 0.03,
    marginTop: (Dimensions.get("window").height) * 0.01,
    width: (Dimensions.get("window").width) * 0.18,
    height: (Dimensions.get("window").height) * 0.04,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#0691ce",
    alignItems: 'center',
    justifyContent: 'center'
  },
  hobby_text:{
    fontSize: moderateScale(10),
    fontFamily: font_type.FontLight,
    color: "#0691ce"
  },
  gradient:{
    height:(Dimensions.get("window").height),
    width:(Dimensions.get("window").width),
    position: 'absolute'
  },
  follower_view:{
    width: (Dimensions.get("window").width) * 0.15,
  },
  extra_view:{
    width: (Dimensions.get("window").width) * 0.06,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  follow_btn_view:{
    width: (Dimensions.get("window").width) * 0.25,
    height: (Dimensions.get("window").height) * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#0691ce",
    borderRadius: 20
  },
  divider_horizontal:{
    width: (Dimensions.get("window").width) * 0.88,
    alignSelf: 'center',
    backgroundColor: "#272932",
    height: (Dimensions.get("window").height) * 0.001,
    marginTop: (Dimensions.get("window").height) * 0.02,
    marginBottom: (Dimensions.get("window").height) * 0.02
  },
  desc_view:{
    width: (Dimensions.get("window").width) * 0.88,
    alignSelf: 'center',
    marginTop: (Dimensions.get("window").height) * 0.02,
    marginBottom: (Dimensions.get("window").height) * 0.04
  },
  friend_list_view:{
    width: (Dimensions.get("window").width) * 0.88,
    alignSelf: 'center',
    marginBottom: (Dimensions.get("window").height) * 0.04
  },
  hobbies_list_view:{
    width: (Dimensions.get("window").width) * 0.88,
    alignSelf: 'center'
  },
  social_bg: {
  	width:(Dimensions.get("window").height*0.035),
  	height:(Dimensions.get("window").height*0.035),
  	borderRadius:(Dimensions.get("window").height*0.0175),
  	borderWidth: 1.5,
  	borderColor: 'white',
  	right:(Dimensions.get("window").width*0.015),
  	bottom:(Dimensions.get("window").height*0.009),
  	position: 'absolute',
  	alignItems: 'center',
  	justifyContent: 'center'
  }
});
// END TO MAKE STYLE
