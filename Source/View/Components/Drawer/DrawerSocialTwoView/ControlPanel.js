import React, { Component } from "react";
import {View,Text,TouchableOpacity,ImageBackground,Image,StyleSheet,Dimensions,Platform} from "react-native";
import {Container,Header,Content,Icon,Left,Right,Body} from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
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
        <View style={{ backgroundColor: "#222222", flex: 1 }}>
        {/* BEGIN TO SETUP HEADER VIEW */}
          <Header androidStatusBarColor={"#ff6347"} style={styles.header_menu}>
          {/* BEGIN TO SETUP LEFT VIEW */}
            <Left style={{ flex: 1 }}>
              <TouchableOpacity style={styles.rowicon_bg} onPress={() => alert("Search Button Click")}>
                <Image source={require('./icon_search.png')} style={styles.rowicon} />
              </TouchableOpacity>
            </Left>
          {/* END TO SETUP LEFT VIEW */}
            <Body style={{ flex: 2, alignItems: "center" }} />
            <Right style={{ flex: 1 }} transparent />
          </Header>
        {/* END TO SETUP HEADER VIEW */}
          <View style={{ backgroundColor: "#292c40", height: 0.3 }} />

          <Content>
            <View style={styles.menumainview}>
            {/* BEGIN TO SETUP HOME VIEW */}
              <TouchableOpacity onPress={() => alert("Home Button Click")}>
                <View style={styles.listrow}>
                  <Ionicons name="md-home" color="#ffffff" size={20} />
                  <Text style={styles.rowtxt}>Home</Text>
                </View>
              </TouchableOpacity>
            {/* END TO SETUP HOME VIEW */}

            {/* BEGIN TO SETUP ARTICLES VIEW */}
              <TouchableOpacity onPress={() => alert("Articles Button Click")}>
                <View style={styles.listrow}>
                  <MaterialCommunityIcons
                    name="file-outline"
                    color="#ffffff"
                    size={20}/>
                  <Text style={styles.rowtxt}>Articles</Text>
                </View>
              </TouchableOpacity>
            {/* END TO SETUP ARTICLES VIEW */}

            {/* BEGIN TO SETUP MESSAGE VIEW */}
              <TouchableOpacity onPress={() => alert("Message Button Click")}>
                <View style={styles.listrow}>
                  <SimpleLineIcons name="bubbles" color="#ffffff" size={20} />
                  <Text style={styles.rowtxt}>Message</Text>
                  <View style={styles.noti_count_sec}>
                    <Text style={styles.noti_count}>10</Text>
                  </View>
                </View>
              </TouchableOpacity>
            {/* END TO SETUP MESSAGE VIEW */}

            {/* BEGIN TO SETUP ACTIVITY VIEW */}
              <TouchableOpacity onPress={() => alert("Activity Button Click")}>
                <View style={styles.listrow}>
                  <SimpleLineIcons name="bell" color="#ffffff" size={20} />
                  <Text style={styles.rowtxt}>Activity</Text>
                </View>
              </TouchableOpacity>
            {/* END TO SETUP ACTIVITY VIEW */}

            {/* BEGIN TO SETUP FAVOURITE VIEW */}
              <TouchableOpacity onPress={() => alert("Favourite Button Click")}>
                <View style={styles.listrow}>
                  <FontAwesome name="star" color="#ffffff" size={20} />
                  <Text style={styles.rowtxt}>Favourite</Text>
                </View>
              </TouchableOpacity>
            {/* END TO SETUP FAVOURITE VIEW */}

            {/* BEGIN TO SETUP FRIENDS VIEW */}
              <TouchableOpacity onPress={() => alert("Friends Button Click")}>
                <View style={styles.listrow}>
                  <SimpleLineIcons name="people" color="#ffffff" size={20} />
                  <Text style={styles.rowtxt}>Friends</Text>
                  <View style={styles.noti_count_sec}>
                    <Text style={styles.noti_count}>15</Text>
                  </View>
                </View>
              </TouchableOpacity>
            {/* END TO SETUP FRIENDS VIEW */}

            {/* BEGIN TO SETUP LOGOUT VIEW */}
              <TouchableOpacity onPress={() => alert("Logout Button Click")}>
                <View style={styles.listrow}>
                  <SimpleLineIcons name="logout" color="#ffffff" size={20} />
                  <Text style={styles.rowtxt}>Logout</Text>
                </View>
              </TouchableOpacity>
            {/* END TO SETUP LOGOUT VIEW */}
            </View>
          </Content>

          <View style={styles.profile_container}>
            <View style={styles.profile_body}>
              <Image source={GlobalInclude.Image6} style={styles.profile_image}/>
            {/* BEGIN TO SETUP NAME AND SETTING AND PLACE VIEW */}
              <View style={styles.profile_detail}>
                <View style={styles.profile_detail_style}>
                  <Text style={styles.name}>lorem ipsum</Text>
                  <TouchableOpacity onPress={() => alert("Settings Button Click")}>
                    <Image source={require('./icon_setting.png')} style={styles.rowicon} />
                  </TouchableOpacity>
                </View>
                <Text style={styles.place}>lorem ipsum</Text>
              </View>
            {/* END TO SETUP NAME AND SETTING AND PLACE VIEW */}
            </View>
          </View>
        </View>
      </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  menu_container: {
    backgroundColor: "#11142a",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  menumainview: {
    marginLeft: Dimensions.get("window").height * 0.045,
    marginTop: Dimensions.get("window").height * 0.15,
    marginBottom: Dimensions.get("window").height * 0.15
  },
  listrow: {
    backgroundColor: "transparent",
    flexDirection: "row",
    marginBottom: 15
  },
  rowtxt: {
    color: 'white',
    fontSize: moderateScale(18),
    backgroundColor: "transparent",
    marginLeft: moderateScale(15),
    textAlign: "center",
    fontFamily: font_type.FontLight
  },
  noti_count_sec: {
    backgroundColor: "#ffffff",
    marginLeft: moderateScale(10),
    marginTop: moderateScale(3),
    borderRadius: moderateScale(10),
    height: moderateScale(17),
    width: moderateScale(40),
    alignItems: "center",
    justifyContent: "center"
  },
  noti_count: {
    color: '#222222',
    fontSize: moderateScale(13)
  },
  profile_container: {
    bottom: Dimensions.get("window").height * 0.03,
    width: Dimensions.get("window").width,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    bottom: Dimensions.get("window").height * 0.045,
    left: Dimensions.get("window").height * 0.035
  },
  profile_body: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  profile_image: {
    height: Dimensions.get("window").height * 0.1,
    width: Dimensions.get("window").height * 0.1,
    borderRadius: Dimensions.get("window").height * 0.05,
    borderWidth: 2.5,
    borderColor: "white"
  },
  profile_detail: {
    marginLeft: Dimensions.get("window").width * 0.04
  },
  profile_detail_style: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("window").width * 0.5
  },
  name: {
    fontFamily: font_type.FontVBold,
    fontSize: moderateScale(18),
    color: 'white',
    backgroundColor: "transparent"
  },
  rowicon: {
    tintColor: 'white',
    height: Dimensions.get("window").height * 0.035,
    resizeMode: "contain",
    alignSelf: "center",
    alignItems: "center"
  },
  rowicon_bg: {
    marginLeft: Dimensions.get("window").width * 0.05,
    height: Dimensions.get("window").height * 0.035
  },
  place: {
    fontFamily: font_type.FontLight,
    fontSize: moderateScale(13),
    color: "#797a87",
    backgroundColor: "transparent",
    marginTop: Dimensions.get("window").height * 0.004,
    textAlign: "left"
  },
  header_menu: {
    backgroundColor: "#ff6347",
    height: 56,
    marginLeft: -(Dimensions.get("window").width * 0.05),
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
        height: 66,
        paddingTop: Dimensions.get("window").height * 0.02
      }
    }),
    elevation: 0
  }
});
// END TO MAKE STYLE
