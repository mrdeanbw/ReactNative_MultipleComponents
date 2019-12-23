import React, { Component } from "react";
import {Dimensions,StyleSheet,Image,View,Platform,TouchableOpacity,I18nManager} from "react-native";
import {Container,Text,Header,Content,Icon} from "native-base";
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";

// BEGIN TO SETUP FONTTYPE AND FONTSIZE
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const scale = size => (Dimensions.get("window").width / guidelineBaseWidth) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const font_type = {
    FontLight: 'Helvetica',
    FontBold : 'Helvetica-Bold'
};
// END TO SETUP FONTTYPE AND FONTSIZE
export default class ControlPanel extends Component {

  //BEGIN TO SETUP HANDLEPRESS
  _handlePress(text) {
    alert(text);
  }
  //END TO SETUP HANDLEPRESS

render() {
  return (
    <Container style={{ backgroundColor: "#222222" }}>
      {/* BEGIN TO SETUP HEADER VIEW */}
        <Header style={styles.header_modal}>
          <TouchableOpacity onPress={this.props.closeDrawer}
            style={{
              backgroundColor: 'rgba(0,0,0,0)',
              width: Dimensions.get("window").width,
              paddingLeft: Dimensions.get("window").width * 0.06
            }}>
            {I18nManager.isRTL ? (
              <Icon
                name="md-arrow-round-forward"
                style={{
                  color: "white",
                  height: Dimensions.get("window").height * 0.1,
                  width: Dimensions.get("window").height * 0.1
                }}/>
            ) : (
              <Icon name="md-arrow-round-back" style={{ color: "white" }} />
            )}
          </TouchableOpacity>
        </Header>
      {/* END TO SETUP HEADER VIEW */}
        <Content>
          <View style={styles.mainview}>
          {/* BEGIN TO SETUP HOME VIEW */}
            <TouchableOpacity onPress={() => this._handlePress("Home Button Click")} style={styles.listrow}>
              <Text style={styles.rowtxt}>Home</Text>
            </TouchableOpacity>
          {/* END TO SETUP HOME VIEW */}

          {/* BEGIN TO SETUP ARTICLES VIEW */}
            <TouchableOpacity onPress={() => this._handlePress("Articles Button Click")} style={styles.listrow}>
              <Text style={styles.rowtxt}>Articles</Text>
            </TouchableOpacity>
          {/* END TO SETUP ARTICLES VIEW */}

          {/* BEGIN TO SETUP MESSAGE VIEW */}
            <TouchableOpacity onPress={() => this._handlePress("Message Button Click")} style={styles.listrow}>
              <Text style={styles.rowtxt}>Message</Text>
              <View style={styles.badgeview}>
                <Text style={styles.badgetext}>10</Text>
              </View>
            </TouchableOpacity>
          {/* END TO SETUP MESSAGE VIEW */}

          {/* BEGIN TO SETUP ACTIVITY VIEW */}
            <TouchableOpacity onPress={() => this._handlePress("Activity Button Click")} style={styles.listrow}>
              <Text style={styles.rowtxt}>Activity</Text>
            </TouchableOpacity>
          {/* END TO SETUP ACTIVITY VIEW */}

          {/* BEGIN TO SETUP FAVOURITE VIEW */}
            <TouchableOpacity onPress={() => this._handlePress("Favourite Button Click")} style={styles.listrow}>
              <Text style={styles.rowtxt}>Favourite</Text>
            </TouchableOpacity>
          {/* END TO SETUP FAVOURITE VIEW */}

          {/* BEGIN TO SETUP FRIENDS VIEW */}
            <TouchableOpacity onPress={() => this._handlePress("Friends Button Click")} style={styles.listrow}>
              <Text style={styles.rowtxt}>Friends</Text>
            </TouchableOpacity>
          {/* END TO SETUP FRIENDS VIEW */}

          {/* BEGIN TO SETUP LOGOUT VIEW */}
            <TouchableOpacity onPress={() => this._handlePress("Logout Button Click")} style={styles.listrow}>
              <Text style={styles.rowtxt}>Logout</Text>
            </TouchableOpacity>
          {/* END TO SETUP LOGOUT VIEW */}
          </View>
        </Content>
        <View style={styles.user_info__view}>
        {/* BEGIN TO SETUP IMAGE VIEW */}
          <View style={styles.profile_view}>
            <Image source={GlobalInclude.Image6} style={styles.userpic} />
          </View>
        {/* END TO SETUP IMAGE VIEW */}

        {/* BEGIN TO SETUP NAME AND ADDRESS VIEW */}
          <View style={styles.name_address_view}>
            <Text style={styles.name}>lorem ipsum</Text>
            <Text style={styles.address}>lorem ipsum</Text>
          </View>
        {/* END TO SETUP NAME AND ADDRESS VIEW */}

        {/* BEGIN TO SETUP NOTIFICATION VIEW */}
          <TouchableOpacity style={styles.noti_view} onPress={() => alert("Notification Button Click")}>
            <Image source={require('./icon_notification.png')} style={styles.noti_icon} />
          </TouchableOpacity>
        {/* END TO SETUP NOTIFICATION VIEW */}
        </View>
      </Container>
    );
  }
}
// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
	text_title: {
    color: "#fff",
    fontSize: moderateScale(16),
    marginTop: 5,
    alignSelf: 'center',
	  fontFamily: font_type.FontBold,
  },
  mainview:{
    marginTop: 25,
    alignItems: 'center',
  },
  screen_bg: {
  	flex: 1,
  	width: Dimensions.get("window").width,
  	height: Dimensions.get("window").height,
  	position: 'absolute'
  },
  badgetext:{
    color:'#00bff3',
    fontSize: moderateScale(13),
    backgroundColor: 'transparent'
  },
  badgeview:{
    backgroundColor: 'white',
    marginLeft: 10,
    borderRadius: 10,
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  listrow:{
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginBottom: 22,
    alignItems: 'center',
    justifyContent: 'center'
  },
  userpic:{
    width: (Dimensions.get("window").width) * 0.13,
    height: (Dimensions.get("window").width) * 0.13,
    borderRadius: (Dimensions.get("window").width)* 0.065,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    alignSelf: 'center',
    marginLeft: (Dimensions.get("window").width) * 0.1,
  },
  rowtxt:{
    color:'white',
    fontSize: moderateScale(23),
    backgroundColor: 'transparent',
    marginLeft: 20,
    textAlign: 'center',
    fontFamily: font_type.FontLight
  },
  header_modal: {
    backgroundColor: '#ff6347',
    height: 60,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
				paddingTop:10
			}
    }),
		elevation: 0,
  },
  text_title: {
    color: "#fff",
    fontSize: moderateScale(16),
    marginTop: 5,
    alignSelf: 'center',
	  fontFamily: font_type.FontBold
  },
	screen_bg: {
    flex:3,
    width: '100%',
    height: '100%',
    backgroundColor:'black',
  },
  user_info__view:{
    zIndex: 111,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'#ff6347'
  },
  profile_view:{
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: Dimensions.get("window").width*0.22
  },
  name_address_view:{
    backgroundColor: 'transparent',
    alignItems: 'flex-start',
    width: Dimensions.get("window").width*0.3,
    height: 70,
    justifyContent: 'center',
    marginLeft: 10
  },
  name:{
    fontSize: moderateScale(15),
    color:'white'
  },
  address:{
    fontSize: moderateScale(15),
    color:'#9b9a9f'
  },
  noti_view:{
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    width: Dimensions.get("window").width*0.43,
    alignItems:   'flex-end'
  },
  noti_icon:{
    height: 20,
    width: 20,
    resizeMode:'contain',
    transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]
  },
});
// END TO MAKE STYLE
