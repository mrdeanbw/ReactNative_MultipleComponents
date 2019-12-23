import React, { Component } from "react";
import {Text,Image,StatusBar,Platform,ImageBackground,Dimensions,TouchableOpacity,View,StyleSheet,ListView,I18nManager,Alert} from "react-native";
import {Container,Button,Right,Left,Content,Body,Header,Icon,Title,RegularText} from "native-base";
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";
const { width, height } = Dimensions.get("window");
import FontAwesome from "react-native-vector-icons/FontAwesome";

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


export default class ProfileGallery extends Component {

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
      <Container style={styles.main}>
        <View style={styles.profile_detail_bg}>
        {/* BEGIN TO SETUP HEADER VIEW */}
          <Header style={styles.header}>
            {/* BEGIN TO SETUP HEADER LEFT VIEW */}
              <Left style={styles.left}>
                <TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
                  <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={25} color="white"/>
                </TouchableOpacity>
              </Left>
            {/* END TO SETUP HEADER LEFT VIEW */}

            {/* BEGIN TO SETUP HEADER BODY VIEW */}
              <Body style={styles.body}>
                <Text style={styles.text_title}>Profile</Text>
              </Body>
            {/* END TO SETUP HEADER BODY VIEW */}

            {/* BEGIN TO SETUP HEADER RIGHT VIEW */}
              <Right style={styles.right}>
                <TouchableOpacity onPress={() => alert("Edit button clicked.")}>
                  <Text style={styles.text_title}>Edit</Text>
                </TouchableOpacity>
              </Right>
            {/* END TO SETUP HEADER RIGHT VIEW */}
          </Header>
        {/* END TO SETUP HEADER VIEW */}

        {/* BEGIN TO SETUP IMAGE AND NAME AND DESC VIEW */}
          <Image source={GlobalInclude.Image5} style={styles.profile_img} />
          <Text style={styles.name_txt}>Lorem Ipsum</Text>
          <Text style={styles.designation_txt}>Lorem Ipsum</Text>
        {/* END TO SETUP IMAGE AND NAME AND DESC VIEW */}
        </View>
        <Content>
          <View style={{ flexDirection: "row", margin: Dimensions.get('window').width * 0.015 }}>
            {/* BEGIN TO SETUP GALLERYIMAGE1 VIEW */}
            <Image source={GlobalInclude.Image4} style={styles.galleryimg_one} />
            {/* END TO SETUP GALLERYIMAGE1 VIEW */}
            <View style={styles.galleryimg_view} />
            {/* BEGIN TO SETUP GALLERYIMAGE2 VIEW */}
              <View style={{ flexDirection: "column" }}>
                <Image source={GlobalInclude.Image6} style={styles.galleryimg_two} />
                <View style={styles.photos_horizontal_divider} />
                <View style={{ flexDirection: "row" }}>
                  <Image style={styles.galleryimg_three} source={GlobalInclude.Image9}/>
                  <View style={styles.photos_vertical_divider} />
                  <TouchableOpacity style={styles.photoscount_bg} onPress={() => alert("See More Photos button clicked.")}>
                    <Text style={styles.photocount_txt}>+165</Text>
                    <Text style={styles.photos_txt}>Photos</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* END TO SETUP GALLERYIMAGE2 VIEW */}

          <View style={styles.divider_horizontal} />
          {/* BEGIN TO SETUP ACCOUNT BUTTON VIEW */}
            <TouchableOpacity style={styles.field_divider_bg} onPress={() => alert("Accout Button Click.")}>
              <View style={styles.field_bg}>
                <Text style={styles.field_title}>Account</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.mail_txt}>lorem@ipsum.com</Text>
                  <FontAwesome name={I18nManager.isRTL ? "angle-left" : "angle-right"} size={20} color="#d6d6d6"/>
                </View>
              </View>
              <View style={styles.field_divider} />
            </TouchableOpacity>
          {/* END TO SETUP ACCOUNT BUTTON VIEW */}

          {/* BEGIN TO SETUP CHANGEPASSWORD BUTTON VIEW */}
            <TouchableOpacity onPress={() => alert("Change Password Button Clicked.")} style={styles.field_divider_bg}>
              <View style={styles.field_bg}>
                <Text style={styles.field_title}>Change Password</Text>
                <FontAwesome name={I18nManager.isRTL ? "angle-left" : "angle-right"} size={20} color="#d6d6d6"/>
              </View>
              <View style={styles.field_divider} />
            </TouchableOpacity>
          {/* END TO SETUP CHANGEPASSWORD BUTTON VIEW */}

          {/* BEGIN TO SETUP PAYMENT BUTTON VIEW */}
            <TouchableOpacity onPress={() => alert("Payment Button clicked.")} style={styles.field_divider_bg}>
              <View style={styles.field_bg}>
                <Text style={styles.field_title}>Payment</Text>
                <FontAwesome name={I18nManager.isRTL ? "angle-left" : "angle-right"} size={20} color="#d6d6d6"/>
              </View>
              <View style={styles.field_divider} />
            </TouchableOpacity>
          {/* END TO SETUP PAYMENT BUTTON VIEW */}

          {/* BEGIN TO SETUP TERMSOFSERVICE BUTTON VIEW */}
            <TouchableOpacity style={styles.field_divider_bg} onPress={() => alert("Terms of Service Button clicked.")}>
              <View style={styles.field_bg}>
                <Text style={styles.field_title}>Terms of Service</Text>
                <FontAwesome name={I18nManager.isRTL ? "angle-left" : "angle-right"} size={20} color="#d6d6d6"/>
              </View>
              <View style={styles.field_divider} />
            </TouchableOpacity>
          {/* END TO SETUP TERMSOFSERVICE BUTTON VIEW */}

          {/* BEGIN TO SETUP SUPPORT BUTTON VIEW */}
            <TouchableOpacity style={styles.field_divider_bg} onPress={() => alert("Support Button clicked.")}>
              <View style={styles.field_bg}>
                <Text style={styles.field_title}>Support</Text>
                <FontAwesome name={I18nManager.isRTL ? "angle-left" : "angle-right"} size={20} color="#d6d6d6"/>
              </View>
              <View style={styles.field_divider} />
            </TouchableOpacity>
          {/* END TO SETUP SUPPORT BUTTON VIEW */}
        </Content>
      </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(0,0,0,0)',
    height: Dimensions.get('window').height * 0.1,
    borderBottomWidth: 0,
    paddingTop: Dimensions.get('window').height * 0.03,
    elevation: 0,
    paddingLeft: Dimensions.get('window').width * 0.05,
    paddingRight: Dimensions.get('window').width * 0.05
  },
  left: {
    flex: 0.5,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  body: {
    flex: 3,
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0)'
  },
  back_arrow: {
    width: 30,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  text_title: {
    color: 'white',
    fontSize: moderateScale(17),
    marginTop: Dimensions.get('window').height * 0.001,
    alignSelf: "center",
    fontFamily: font_type.FontBold
  },
  right: {
    flex: 0.5
  },
  main: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: "column"
  },
  profile_detail_bg: {
    width: Dimensions.get('window').width,

    ...Platform.select({
      android: {
        height: Dimensions.get('window').height * 0.45
      },
      ios: {
        height: Dimensions.get('window').height * 0.4
      }
    }),
    backgroundColor: "#ff6347"
  },
  profile_img: {
    width: Dimensions.get('window').width * 0.26,
    height: Dimensions.get('window').width * 0.26,
    borderRadius: Dimensions.get('window').width * 0.13,
    borderWidth: 3,
    borderColor: 'white',
    alignSelf: "center",
    marginTop: Dimensions.get('window').height * 0.03
  },
  name_txt: {
    color: 'white',
    fontFamily: font_type.FontBold,
    fontSize: moderateScale(18),
    alignSelf: "center",
    marginTop: Dimensions.get('window').height * 0.02
  },
  designation_txt: {
    color: "#9699a7",
    fontSize: moderateScale(12),
    fontFamily: font_type.FontLight,
    marginTop: Dimensions.get('window').height * 0.003,
    alignSelf: "center"
  },
  galleryimg_one: {
    width: Dimensions.get('window').width * 0.58,
    height: Dimensions.get('window').height * 0.26,
    resizeMode: "cover"
  },
  galleryimg_two: {
    height: Dimensions.get('window').height * 0.1225,
    width: Dimensions.get('window').width * 0.375,
    resizeMode: "cover"
  },
  galleryimg_three: {
    width: Dimensions.get('window').width * 0.18,
    height: Dimensions.get('window').height * 0.1225,
    resizeMode: "cover"
  },
  photocount_txt: {
    fontFamily: font_type.FontBold,
    fontSize: moderateScale(14),
    textAlign: "center",
    color: 'white'
  },
  photos_txt: {
    fontFamily: font_type.FontLight,
    fontSize: moderateScale(12),
    textAlign: "center",
    color: 'white',
    marginTop: -(Dimensions.get('window').height * 0.005)
  },
  photoscount_bg: {
    width: Dimensions.get('window').width * 0.18,
    height: Dimensions.get('window').height * 0.1225,
    backgroundColor: "#2d324f",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  photos_vertical_divider: {
    width: Dimensions.get('window').width * 0.015,
    height: Dimensions.get('window').height * 0.1225,
    backgroundColor: 'white'
  },
  photos_horizontal_divider: {
    height: Dimensions.get('window').height * 0.015,
    width: Dimensions.get('window').width * 0.375,
    backgroundColor: 'white'
  },
  field_divider_bg: {
    marginLeft: Dimensions.get('window').width * 0.025,
    flexDirection: "column"
  },
  field_bg: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: Dimensions.get('window').width * 0.015,
    marginTop: Dimensions.get('window').height * 0.018,
    marginBottom: Dimensions.get('window').height * 0.018,
    alignItems: "center"
  },
  field_title: {
    color: "#b7b7b7",
    fontSize: moderateScale(16),
    fontFamily: font_type.FontLight
  },
  field_divider: {
    backgroundColor: "#d7d7d7",
    alignSelf: "flex-end",
    height: Dimensions.get('window').height * 0.001,
    width: Dimensions.get('window').width * 0.975
  },
  mail_txt: {
    color: "#6f6f6f",
    fontFamily: font_type.FontLight,
    fontSize: moderateScale(16),
    marginRight: Dimensions.get('window').width * 0.015
  },
  galleryimg_view: {
    width: Dimensions.get('window').width * 0.015,
    backgroundColor: 'white',
    height: Dimensions.get('window').height * 0.25
  },
  divider_horizontal: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.001,
    backgroundColor: "#d7d7d7",
    marginTop: Dimensions.get('window').width * 0.005
  }
});
// END TO MAKE STYLE
