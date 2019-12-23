import React, { Component } from "react";
import {View,Text,TouchableOpacity,ImageBackground,I18nManager,StyleSheet,Dimensions} from "react-native";
import { Container, Content} from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
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
      <View>
      {/* BEGIN TO SETUP IMAGEBACKGROUND VIEW */}
        <ImageBackground source={GlobalInclude.Image3} style={styles.menuimage_bg}>
        {/* BEGIN TO SETUP CLOSE VIEW */}
          <View style={styles.menu_close}>
            <TouchableOpacity onPress={() => {this.props.closeDrawer()}}>
              <Ionicons
                name="ios-close"
                color="#ffffff"
                size={65}
                style={{ backgroundColor: "transparent" }}/>
            </TouchableOpacity>
          </View>
        {/* END TO SETUP CLOSE VIEW */}
          <View style={styles.menu_list_sec}>
            <View style={{ flexDirection: "row" }}>
            {/* BEGIN TO SETUP ARTICLES VIEW */}
              <TouchableOpacity onPress={() => alert("Articles Button Click")}>
                <View
                  style={[styles.menu_list,{ borderBottomWidth: 0.5, borderColor: "#53afe3" }]}>
                  <MaterialCommunityIcons
                    name="file-outline"
                    color="#ffffff"
                    size={30}/>
                  <Text style={styles.menu_item_text}>Articles</Text>
                </View>
              </TouchableOpacity>
            {/* END TO SETUP ARTICLES VIEW */}

            {/* BEGIN TO SETUP PROFILE VIEW */}
              <TouchableOpacity onPress={() => alert("Profile Button Click")}>
                <View
                  style={[styles.menu_list,
                    {
                      borderLeftWidth: I18nManager.isRTL ? 0 : 0.5,
                      borderRightWidth: I18nManager.isRTL ? 0.5 : 0,
                      borderBottomWidth: 0.5,
                      borderColor: "#53afe3"
                    }
                  ]}>
                  <SimpleLineIcons name="user" color="#ffffff" size={30} />
                  <Text style={styles.menu_item_text}>Profile</Text>
                </View>
              </TouchableOpacity>
            {/* END TO SETUP PROFILE VIEW */}
            </View>

            <View style={{ flexDirection: "row" }}>
            {/* BEGIN TO SETUP MESSAGE VIEW */}
              <TouchableOpacity onPress={() => alert("Message Button Click")}>
                <View style={styles.menu_list}>
                  <View>
                    <Text style={styles.menumsg_count}>7</Text>
                    <SimpleLineIcons name="bubbles" color="#ffffff" size={30} />
                  </View>
                  <Text style={styles.menu_item_text}>Message</Text>
                </View>
              </TouchableOpacity>
            {/* END TO SETUP MESSAGE VIEW */}

            {/* BEGIN TO SETUP SETTING VIEW */}
              <TouchableOpacity onPress={() => alert("Settings Button Click")}>
                <View
                  style={[styles.menu_list,
                    {
                      borderLeftWidth: I18nManager.isRTL ? 0 : 0.5,
                      borderRightWidth: I18nManager.isRTL ? 0.5 : 0,
                      borderColor: "#53afe3"
                    }
                  ]}>
                  <SimpleLineIcons name="settings" color="#ffffff" size={30} />
                  <Text style={styles.menu_item_text}>Settings</Text>
                </View>
              </TouchableOpacity>
            {/* END TO SETUP SETTING VIEW */}
            </View>
          </View>
        </ImageBackground>
      {/* END TO SETUP IMAGEBACKGROUND VIEW */}
      </View>
    );
  }
}
// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  menuimage_bg:{
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  menu_close:{
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.10,
    paddingTop: moderateScale(10),
    paddingLeft: I18nManager.isRTL ? 0 : moderateScale(25),
    paddingRight: I18nManager.isRTL ? moderateScale(25) : 0,
    marginBottom: moderateScale(10),
  },
  menu_list_sec:{
    width: Dimensions.get("window").width * 0.84,
    alignSelf: 'center',
  },
  menu_list:{
    width: Dimensions.get("window").width * 0.42,
    height: Dimensions.get("window").width * 0.35,
    padding: 15,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  menu_item_text:{
    marginTop: moderateScale(6),
    color: '#ffffff',
    fontFamily: font_type.FontLight
  },
  menumsg_count:{
    backgroundColor: '#ef4836',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ef4836',
    overflow: 'hidden',
    color: 'white',
    borderRadius: 7,
    width: 14,
    height: 14,
    fontSize: 9,
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1111
  },
});
// END TO MAKE STYLE
