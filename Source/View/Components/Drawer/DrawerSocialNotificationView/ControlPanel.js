import React, { Component } from "react";
import {View,Text,TouchableOpacity,Image,StyleSheet,Dimensions} from "react-native";
import { Container, Header, Content, Icon } from "native-base";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
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
  render() {
    return (
      <Container style={styles.menu_container}>
        <View style={styles.user_profiles}>
          <View style={styles.user_profilestyle_sec}>

          {/* BEGIN TO SETUP NOTIFICATION VIEW */}
            <TouchableOpacity onPress={() => alert("Notification Button Click")}>
              <FontAwesome name="bell" size={14} color="#595b6a" />
            </TouchableOpacity>
          {/* END TO SETUP NOTIFICATION VIEW */}
            <Image source={GlobalInclude.Image5} style={styles.user_image_style}/>

          {/* BEGIN TO SETUP SETTING VIEW */}
            <TouchableOpacity onPress={() => alert("Settings")}>
              <SimpleLineIcons name="settings" color="#595b6a" size={14} />
            </TouchableOpacity>
          {/* END TO SETUP SETTING VIEW */}
          </View>
          {/* BEGIN TO SETUP USERDETAIL VIEW */}
            <View style={styles.user_details_style}>
              <Text style={styles.user_details_text}>lorem ipsum</Text>
              <Text style={styles.user_details_text}>lorem ipsum</Text>
            </View>
          {/* END TO SETUP USERDETAIL VIEW */}
        </View>
        <Content style={styles.menucontrol_panel}>
          <View style={styles.menumainview}>
          {/* BEGIN TO SETUP HOME VIEW */}
            <TouchableOpacity onPress={() => alert("Home Button Click")}>
              <View style={styles.listrow}>
                <Text style={styles.rowtxt}>Home</Text>
              </View>
            </TouchableOpacity>
          {/* END TO SETUP HOME VIEW */}

          {/* BEGIN TO SETUP ARTICLES VIEW */}
            <TouchableOpacity onPress={() => alert("Articles Button Click")}>
              <View style={styles.listrow}>
                <Text style={styles.rowtxt}>Articles</Text>
              </View>
            </TouchableOpacity>
          {/* END TO SETUP ARTICLES VIEW */}

          {/* BEGIN TO SETUP MESSAGE VIEW */}
            <TouchableOpacity onPress={() => alert("Message Button Click")}>
              <View style={styles.listrow}>
                <Text style={styles.rowtxt}>Message</Text>
                <View style={styles.noti_count_sec}>
                  <Text style={styles.noti_count}>100</Text>
                </View>
              </View>
            </TouchableOpacity>
          {/* END TO SETUP MESSAGE VIEW */}

          {/* BEGIN TO SETUP ACTIVITY VIEW */}
            <TouchableOpacity onPress={() => alert("Activity Button Click")}>
              <View style={styles.listrow}>
                <Text style={styles.rowtxt}>Activity</Text>
              </View>
            </TouchableOpacity>
          {/* END TO SETUP ACTIVITY VIEW */}

          {/* BEGIN TO SETUP FAVOURITE VIEW */}
            <TouchableOpacity onPress={() => alert("Favourite Button Click")}>
              <View style={styles.listrow}>
                <Text style={styles.rowtxt}>Favourite</Text>
              </View>
            </TouchableOpacity>
          {/* END TO SETUP FAVOURITE VIEW */}

          {/* BEGIN TO SETUP FRIENDS VIEW */}
            <TouchableOpacity onPress={() => alert("Friends Button Click")}>
              <View style={styles.listrow}>
                <Text style={styles.rowtxt}>Friends</Text>
              </View>
            </TouchableOpacity>
          {/* END TO SETUP FRIENDS VIEW */}
          </View>
        </Content>
        {/* BEGIN TO SETUP LOGOUT VIEW */}
          <TouchableOpacity onPress={() => alert("Logout Button Click")} style={styles.menumainview}>
            <View style={styles.listrow}>
              <Text style={styles.rowtxt}>Logout</Text>
            </View>
          </TouchableOpacity>
        {/* END TO SETUP LOGOUT VIEW */}
      </Container>
    );
  }
}
// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  menu_container:{
    backgroundColor: '#ff6347',
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    paddingTop: moderateScale(25),
  },
  menucontrol_panel: {
    paddingTop: moderateScale(25),
  },
  user_profiles:{
    width: (Dimensions.get("window").width) * 0.84,
    paddingTop: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  user_image_style:{
    width: (Dimensions.get("window").width) * 0.20,
    height: (Dimensions.get("window").width) * 0.20,
    borderRadius: (Dimensions.get("window").width)* 0.10,
    borderWidth: 2,
    borderColor: 'white',
    marginLeft: 10,
    marginRight: 10
  },
  user_details_style:{
    backgroundColor: 'transparent',
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    marginLeft: 10
  },
  user_details_text:{
    fontSize: moderateScale(15),
    color: 'white',
  },
  menumainview:{
    width: (Dimensions.get("window").width) * 0.84,
    marginTop: moderateScale(25),
    justifyContent: 'center',
    alignItems: 'center'
  },
  listrow:{
    backgroundColor: 'transparent',
    flexDirection: 'row',
    width: (Dimensions.get("window").width) * 0.60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  rowtxt:{
    color: 'white',
    fontSize: moderateScale(18),
    backgroundColor: 'transparent',
    marginLeft: moderateScale(15),
    textAlign: 'center',
    fontFamily: font_type.FontLight,
  },
  noti_count_sec:{
    backgroundColor: '#ffffff',
    marginLeft: 10,
    marginTop: 3,
    borderRadius: 10,
    height: 17,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    zIndex: 11111
  },
  noti_count:{
    color: '#ff6347',
    fontSize: moderateScale(13),
  },
  user_profilestyle_sec:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
// END TO MAKE STYLE
