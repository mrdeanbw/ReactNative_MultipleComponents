import React, { Component } from "react";
import {StyleSheet,Text,Image,StatusBar,Platform,ImageBackground,Dimensions,TouchableOpacity,View,BackHandler,I18nManager,Alert} from "react-native";
import {Container,Button,Right,Left,Content,Body,Header,Title} from "native-base";
import ReadMore from "react-native-read-more-text";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";

//GUIDELINE SIZES ARE BASED ON STANDARD ~5" SCREEN

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

export default class ProfileBlog extends Component {
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


    return (
      <Container style={styles.main_container}>
        {/* BEGIN TO SETUP IMAGE AS A BACKGROUND */}
        <ImageBackground source={GlobalInclude.Image5} style={styles.img_container}>

            {/* BEGIN TO SETUP HEADER VIEW */}
            <Header androidStatusBarColor={"transparent"} style={styles.header}>

                  {/* BEGIN TO SETUP HEADER LEFT VIEW */}
                  <Left style={styles.left}>
                    <TouchableOpacity style={styles.back_arrow} onPress={() => this.props.navigation.goBack()}>
                      <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="white" />
                    </TouchableOpacity>
                  </Left>
                  {/* END TO SETUP HEADER LEFT VIEW */}

                  {/* BEGIN TO SETUP HEADER BODY VIEW */}
                  <Body style={styles.body}>
                    <Title style={styles.title}>User Profile</Title>
                  </Body>
                  {/* END TO SETUP HEADER BODY VIEW */}

                  {/* BEGIN TO SETUP HEADER RIGHT VIEW */}
                  <Right style={styles.left}>
                    <Button transparent />
                  </Right>
                  {/* END TO SETUP HEADER RIGHT VIEW */}

            </Header>
            {/* END TO SETUP HEADER VIEW */}

          <View style={styles.profile_data_bg}>
            {/* BEGIN TO DISPLAY PROFILE IMAGE VIEW */}
            <Image source={GlobalInclude.Image3} style={styles.profile_img} />
            {/* END TO DISPLAY PROFILE IMAGE VIEW */}

            <View style={styles.main_view}>

              {/* BEGIN TO DISPLAY PERSONAL INFO VIEW */}
              <View style={styles.personal_info_bg}>
                  {/* BEGIN TO DISPLAY USER NAME AND DESIGNATION VIEW */}
                  <View style={styles.detail}>
                    <Text style={styles.name_txt}>Lorem Ipsum</Text>
                    <Text style={styles.designation_txt}>Lorem Ipsum</Text>
                  </View>
                  {/* END TO DISPLAY USER NAME AND DESIGNATION VIEW */}

                  {/* BEGIN TO DISPLAY USER FOLLOW BUTTON VIEW */}
                  <Right>
                    <TouchableOpacity style={styles.follow_bg} onPress={() => alert("FOLLOW button clicked.")}>
                      <Text style={styles.follow_txt}>FOLLOW</Text>
                    </TouchableOpacity>
                  </Right>
                  {/* END TO DISPLAY USER FOLLOW BUTTON VIEW */}
              </View>
              {/* END TO DISPLAY PERSONAL INFO VIEW */}

              <View style={styles.divider_horizontal} />
                    {/* BEGIN TO SETUP FOLLOWS, FOLLOWING, LIKES VIEW */}
                    <View style={styles.count_bg}>
                          {/* BEGIN TO SETUP FOLLOWERS VIEW */}
                          <View style={styles.title_count_bg}>
                            <Text style={styles.count_txt}>1111</Text>
                            <Text style={styles.title_txt}>Followers</Text>
                          </View>
                          {/* END TO SETUP FOLLOWERS VIEW */}

                          {/* BEGIN TO SETUP FOLLOWING VIEW */}
                          <View style={styles.title_count_bg}>
                            <Text style={styles.count_txt}>2222</Text>
                            <Text style={styles.title_txt}>Following</Text>
                          </View>
                          {/* END TO SETUP FOLLOWING VIEW */}

                          {/* BEGIN TO SETUP LIKES VIEW */}
                          <View style={styles.title_count_bg}>
                            <Text style={styles.count_txt}>3333</Text>
                            <Text style={styles.title_txt}>Likes</Text>
                          </View>
                          {/* END TO SETUP LIKES VIEW */}
                    </View>
                    {/* END TO SETUP FOLLOWS, FOLLOWING, LIKES VIEW */}
                    <View style={styles.divider_horizontal} />

                    {/* BEGIN TO DISPLAY DESCRIPTION VIEW */}
                    <View style={styles.desc}>
                          {/* BEGIN TO DISPLAY READMORE CONTENT VIEW */}
                          <ReadMore
                            numberOfLines={5}
                            renderTruncatedFooter={this._renderTruncatedFooter}
                            renderRevealedFooter={this._renderRevealedFooter}
                          >
                            <Text style={styles.desc_txt}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Duis semper non quam sed scelerisque. Vestibulum pharetra
                              dignissim nibh, ut tincidunt magna hendrerit sit amet.
                              Integer sit amet venenatis sem, sit amet ullamcorper nisi.
                              Vivamus dictum facilisis velit, quis commodo magna iaculis
                              sed.
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Duis semper non quam sed scelerisque. Vestibulum pharetra
                              dignissim nibh, ut tincidunt magna hendrerit sit amet.
                              Integer sit amet venenatis sem, sit amet ullamcorper nisi.
                              Vivamus dictum facilisis velit, quis commodo magna iaculis
                              sed.
                            </Text>
                          </ReadMore>
                          {/* END TO DISPLAY READMORE CONTENT VIEW */}
                    </View>
                    {/* END TO DISPLAY DESCRIPTION VIEW */}
              </View>
          </View>
        </ImageBackground>
        {/* END TO SETUP IMAGE AS A BACKGROUND */}
      </Container>
    );
  }

  // BEGIN TO RENDER READMORE TRUNCATED FOOTER VIEW
  _renderTruncatedFooter = handlePress => {
    return (
      <Text style={styles.view_more_less_txt} onPress={handlePress}>
        View more
      </Text>
    );
  };
  // END TO RENDER READMORE TRUNCATED FOOTER VIEW

  // BEGIN TO RENDER READMORE REVEALED FOOTER VIEW
  _renderRevealedFooter = handlePress => {
    return (
      <Text style={styles.view_more_less_txt} onPress={handlePress}>
        View less
      </Text>
    );
  };
  // END TO RENDER READMORE REVEALED FOOTER VIEW
}


// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  img_container: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
  },
  main_container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: "transparent",
    flexDirection: 'column'
  },
  left:{
    flex:1
  },
  body:{
    flex:2,
    alignItems:'center'
  },
  back_arrow: {
    marginLeft: 2,
    width: 30,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  title:{
    marginTop: 2,
    color: 'white',
    fontSize: moderateScale(18),
    fontFamily: font_type.FontBold
  },
  main_view:{
    borderRadius: 10,
    backgroundColor:'#FFFFFF',
    top:30
  },
  detail:{
    flexDirection: 'column'
  },
  desc:{
    marginLeft:(Dimensions.get('window').width) * 0.06,
    marginRight:(Dimensions.get('window').width) * 0.06,
    marginBottom:(Dimensions.get('window').width) * 0.06,
    marginTop:(Dimensions.get('window').width) * 0.03
  },
  header: {
    backgroundColor: 'transparent',
    height: 65,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    borderBottomColor: 'transparent',
    ...Platform.select({
        ios: {
          paddingTop: 12,
        },
        android: {
          paddingTop: 15
        }
    }),
    elevation: 0
  },
  profile_img: {
    width: (Dimensions.get('window').width) * 0.18,
    height: (Dimensions.get('window').width) * 0.18,
    borderRadius: (Dimensions.get('window').width) * 0.09,
    marginLeft: (Dimensions.get('window').width) * 0.12,
    borderWidth: 2,
    borderColor: "#fff",
    position: 'absolute',
    zIndex: 30
  },
  profile_data_bg: {
    width: (Dimensions.get('window').width) * 0.94,
    alignSelf: 'center',
    flexDirection: 'column',
    bottom: 120,
    position: 'absolute'
  },
  personal_info_bg: {
      marginTop: (Dimensions.get('window').height) * 0.08,
      flexDirection: 'row',
      marginLeft: (Dimensions.get('window').width) * 0.06,
      marginRight: (Dimensions.get('window').width) * 0.06,
      marginBottom: (Dimensions.get('window').width) * 0.05,
  },
  name_txt: {
      color: "#363636",
      fontFamily: font_type.FontLight,
      fontSize: moderateScale(18),
      textAlign: 'left'
  },
  designation_txt: {
      color: "#bfbfbf",
      fontSize: moderateScale(12),
      fontFamily: font_type.FontLight,
      marginTop: 3,
      textAlign: 'left'
  },
  follow_bg: {
    backgroundColor: "#ff6347",
    borderRadius: 20,
    width: (Dimensions.get('window').width) * 0.32,
    height: (Dimensions.get('window').height) * 0.06,
    justifyContent: 'center'
  },
  follow_txt: {
    fontFamily: font_type.FontLight,
    fontSize: moderateScale(14),
    color: "#FFFFFF",
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: 'transparent',
    width: (Dimensions.get('window').width) * 0.28,
  },
  divider_horizontal: {
    backgroundColor: "#ebebeb",
    height: 1,
    width: (Dimensions.get('window').width) * 0.94,
    alignSelf: 'center'
  },
  count_bg: {
    flexDirection: 'row',
    marginLeft: (Dimensions.get('window').width) * 0.02,
    marginRight: (Dimensions.get('window').width) * 0.02,
    marginTop: (Dimensions.get('window').width) * 0.04,
    marginBottom: (Dimensions.get('window').width) * 0.04,
  },
  title_count_bg: {
    flexDirection: 'column',
    width: (Dimensions.get('window').width) * 0.30,
  },
  count_txt: {
    color: "#363636",
    fontSize: moderateScale(16),
    fontFamily: font_type.FontLight,
    textAlign: 'center'
  },
  title_txt: {
    color: "#959595",
    fontSize: moderateScale(12),
    fontFamily: font_type.FontLight,
    textAlign: 'center'
  },
  desc_txt: {
    color: "#6f6f6f",
    fontSize: moderateScale(15),
    fontFamily: font_type.FontLight,
    marginLeft: (Dimensions.get('window').width) * 0.02,
    marginRight: (Dimensions.get('window').width) * 0.02,
    textAlign: 'left'
  },
  view_more_less_txt: {
    color: "#0691ce",
    fontSize: moderateScale(16),
    fontFamily: font_type.FontLight
  }
});
// END TO MAKE STYLE
