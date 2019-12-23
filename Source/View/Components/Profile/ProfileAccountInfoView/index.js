import React, { Component } from "react";
import {Text,Image,StatusBar,Platform,TouchableOpacity,View,ListView,BackHandler,I18nManager,StyleSheet,Dimensions,Alert} from "react-native";
import {Container,Button,Right,Left,Content,Body,Header,Icon,Title} from "native-base";
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";

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


export default class ProfileAccountInfo extends Component {

  constructor(props) {
    super(props);
    // BEGIN TO SETUP STATE
 		this.state = {};
    // END TO SETUP STATE
  }

  render() {

    // BEGIN TO SETUP STATUSBAR
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#ff6347", true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR

    return (
      <Container style={styles.main_cont}>

        {/* BEGIN TO SETUP HEADER VIEW */}
        <Header androidStatusBarColor={"#ff6347"} style={styles.header}>
          {/* BEGIN TO SETUP HEADER LEFT VIEW */}
          <Left style={styles.left}>
            <TouchableOpacity style={styles.backArrow} onPress={() => this.props.navigation.goBack()} >
              <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="white" />
            </TouchableOpacity>
          </Left>
          {/* END TO SETUP HEADER LEFT VIEW */}

          {/* BEGIN TO SETUP HEADER BODY TITLE VIEW */}
          <Body style={styles.body}>
            <Title style={styles.title}>User Profile</Title>
          </Body>
          {/* END TO SETUP HEADER BODY TITLE VIEW */}

          {/* BEGIN TO SETUP HEADER RIGHT VIEW */}
          <Right style={styles.left}>
            <TouchableOpacity onPress={() => alert("Settings butto pressed.")}>
              <Ionicons name="md-settings" size={22} color="white" />
            </TouchableOpacity>
          </Right>
          {/* END TO SETUP HEADER RIGHT VIEW */}

        </Header>
        {/* END TO SETUP HEADER VIEW */}

        <Content>
                {/* SETUP IMAGE VIEW */}
                <Image source={GlobalInclude.Image4} style={styles.profile_img} />

                {/* SETUP NAME VIEW */}
                <Text style={styles.name_txt}>Lorem Ipsum</Text>
                {/* SETUP DESIGNATION VIEW */}
                <Text style={styles.designation_txt}>Lorem Ipsum</Text>

                {/* SETUP DESC. VIEW */}
                <Text style={styles.desc_txt}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper
                  non quam sed.
                </Text>

                {/* BEGIN SETUP TWITTER BUTTON VIEW */}
                <TouchableOpacity style={styles.connect_with_twitter_bg} onPress={() => alert("Login with Twitter button pressed.")} >
                  <Text style={styles.connect_with_twitter_fb_txt}>
                    Login with Twitter
                  </Text>
                </TouchableOpacity>
                {/* END SETUP TWITTER BUTTON VIEW */}

                {/* BEGIN SETUP FACEBOOK BUTTON VIEW */}
                <TouchableOpacity style={styles.connect_with_facebook_bg} onPress={() => alert("Login with Facebook button pressed.")}>
                  <Text style={styles.connect_with_twitter_fb_txt}>
                    Login with Facebook
                  </Text>
                </TouchableOpacity>
                {/* END SETUP FACEBOOK BUTTON VIEW */}

                <View style={styles.divider_horizontal} />
                    {/* BEGIN SETUP ACCOUNT VIEW */}
                    <View style={styles.account_info_bg}>
                      <Text style={styles.account_info_txt}>Account Information</Text>
                    </View>
                    {/* END SETUP ACCOUNT VIEW */}

                    {/* BEGIN SETUP ACCOUNT HOLDER NAME */}
                    <View style={styles.divider_horizontal} />
                    <View style={{ flexDirection: "column" }}>
                      <View style={styles.info_field_bg}>
                        <Text style={styles.info_field_title_txt}>Name</Text>
                        <Text style={styles.info_field_detail_txt}>Lorem Ipsum</Text>
                      </View>
                      <View style={styles.field_divider} />
                    </View>
                    {/* END SETUP ACCOUNT HOLDER NAME */}

                    {/* BEGIN SETUP ACCOUNT HOLDER EMAIL */}
                    <View style={{ flexDirection: "column" }}>
                        <View style={styles.info_field_bg}>
                          <Text style={styles.info_field_title_txt}>Email</Text>
                          <Text style={styles.info_field_detail_txt}>
                            lorem_ipsum@gmail.com
                          </Text>
                        </View>
                        <View style={styles.field_divider} />
                    </View>
                    {/* END SETUP ACCOUNT HOLDER EMAIL */}

                    {/* BEGIN SETUP ACCOUNT HOLDER PHONE NUMBER */}
                    <View style={{ flexDirection: "column" }}>
                      <View style={styles.info_field_bg}>
                        <Text style={styles.info_field_title_txt}>Phone</Text>
                        <Text style={styles.info_field_detail_txt}>+1 900 0000 234</Text>
                      </View>
                      <View style={styles.field_divider} />
                    </View>
                    {/* END SETUP ACCOUNT HOLDER PHONE NUMBER */}

                    {/* BEGIN SETUP ACCOUNT HOLDER ADDRESS */}
                    <View style={styles.info_field_bg}>
                      <Text style={styles.info_field_title_txt}>Address</Text>
                      <Text style={styles.info_field_detail_txt}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper
                      non quam sed.
                      </Text>
                    </View>
                    {/* END SETUP ACCOUNT HOLDER ADDRESS */}
        </Content>
      </Container>
    );
  }

}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  main_cont: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: "#FFFFFF",
    flexDirection: 'column'
  },
  header: {
    backgroundColor: '#ff6347',
    height: 65,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    borderBottomColor: 'transparent',
    paddingTop: 15,
  },
  left:{
    flex:1
  },
  backArrow: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  body:{
    flex:2,
    alignItems:'center'
  },
  title:{
    marginTop: 2,
    color:'white',
    fontSize: moderateScale(18),
    fontFamily: font_type.FontBold
  },
  profile_img: {
    width: (Dimensions.get('window').width) * 0.24,
    height: (Dimensions.get('window').width) * 0.24,
    borderRadius: (Dimensions.get('window').width) * 0.12,
    alignSelf: 'center',
    marginTop: (Dimensions.get('window').height) * 0.03
  },
  name_txt: {
      color: "#6f6f6f",
      fontFamily: font_type.FontLight,
      fontSize: moderateScale(18),
      alignSelf: 'center',
      marginTop: (Dimensions.get('window').height) * 0.01
  },
  designation_txt: {
      color: "#b7b7b7",
      fontSize: moderateScale(12),
      fontFamily: font_type.FontLight,
      marginTop: 3,
      alignSelf: 'center'
  },
  desc_txt: {
    width: (Dimensions.get('window').width) * 0.75,
    alignSelf: 'center',
    color: "#6f6f6f",
    fontSize: moderateScale(14),
    fontFamily: font_type.FontLight,
    textAlign: 'center',
    marginTop: (Dimensions.get('window').width) * 0.045,
  },
  connect_with_twitter_bg: {
    backgroundColor: "#0691ce",
    width: (Dimensions.get('window').width) * 0.82,
    ...Platform.select({
      android: {
        height: (Dimensions.get('window').height) * 0.07,
      },
      ios:{
        height: (Dimensions.get('window').height) * 0.06,
      }
    }),
    alignSelf: 'center',
    marginTop: (Dimensions.get('window').height) * 0.03,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  connect_with_facebook_bg: {
    backgroundColor: "#3b5999",
    width: (Dimensions.get('window').width) * 0.82,
    ...Platform.select({
      android: {
        height: (Dimensions.get('window').height) * 0.07,
      },
      ios:{
        height: (Dimensions.get('window').height) * 0.06,
      }
    }),
    alignSelf: 'center',
    marginTop: (Dimensions.get('window').height) * 0.015,
    marginBottom: (Dimensions.get('window').height) * 0.04,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  connect_with_twitter_fb_txt: {
    color: "#fff",
    textAlign: 'center',
    fontSize: moderateScale(15),
    fontFamily: font_type.FontLight,
    marginTop: -1
  },
  divider_horizontal: {
    backgroundColor: "#d6d6d6",
    height: 1,
    width: (Dimensions.get('window').width),
    alignSelf: 'center'
  },
  account_info_bg: {
    backgroundColor: "#f1f1f1",
    height: (Dimensions.get('window').height) * 0.072,
    width: Dimensions.get('window').width
  },
  account_info_txt: {
    color: "#adadad",
    fontSize: moderateScale(17),
    width: (Dimensions.get('window').width) * 0.82,
    paddingTop: (Dimensions.get('window').height) * 0.035,
    paddingLeft: I18nManager.isRTL ? 0 : (Dimensions.get('window').width) * 0.09,
    paddingRight: I18nManager.isRTL ? (Dimensions.get('window').width) * 0.09 : 0,
    fontFamily: font_type.FontLight,
    textAlign: 'left'
  },
  info_field_bg: {
    width: (Dimensions.get('window').width) * 0.82,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'column'
  },
  info_field_title_txt: {
    color: "#b7b7b7",
    fontSize: moderateScale(12),
    fontFamily: font_type.FontLight,
    textAlign: 'left'
  },
  info_field_detail_txt: {
    color: "#6f6f6f",
    textAlign: 'left',
    ...Platform.select({
      android: {
        fontSize: moderateScale(18),
      },
      ios: {
        fontSize: moderateScale(16),
      }
    }),
    fontFamily: font_type.FontLight
  },
  field_divider: {
    backgroundColor: "#f2f2f2",
    width: (Dimensions.get('window').width) * 0.91,
    alignSelf: 'flex-end',
    height: 1,
  }
});
// END TO MAKE STYLE
