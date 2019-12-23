import React, { Component } from "react";
import {View,Text,TouchableOpacity,ImageBackground,Alert,StyleSheet,Dimensions,Platform,I18nManager} from "react-native";
import { Container, Header, Content, Item, Input, Icon } from "native-base";
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
      <View style={styles.menucontrol_panel}>
      {/* BEGIN TO SETUP IMAGEBACKGROUND VIEW */}
        <ImageBackground source={GlobalInclude.Image3} style={styles.menuimage_bg}>
        {/* BEGIN TO SETUP SEARCH VIEW */}
          <View style={styles.menusearch_sec}>
            <Item rounded style={styles.search_border}>
              <Input
                placeholder="Search"
                placeholderTextColor="white"
                keyboardType="default"
                style={styles.search_input_field}/>
              <TouchableOpacity onPress={() => alert("Search Button Click")}>
                <Ionicons
                  name="ios-search"
                  color="#ffffff"
                  size={20}
                  style={{ right: 15 }}/>
              </TouchableOpacity>
            </Item>
          </View>
        {/* END TO SETUP SEARCH VIEW */}
          <View style={styles.menu_list_sec}>

          {/* BEGIN TO SETUP ARTICLE VIEW */}
            <TouchableOpacity onPress={() => alert("Article Button Click")} style={styles.menu_list}>
              <MaterialCommunityIcons
                name="file-outline"
                color="#ffffff"
                size={18}/>
              <Text style={styles.menu_item_text}>Article</Text>
            </TouchableOpacity>
          {/* END TO SETUP ARTICLE VIEW */}

          {/* BEGIN TO SETUP MESSAGE VIEW */}
            <TouchableOpacity style={styles.menu_list} onPress={() => alert("Message Button Click")}>
              <SimpleLineIcons name="bubbles" color="#ffffff" size={18} />
              <Text style={styles.menu_item_text}>Message</Text>
              <View style={styles.msg_count_sec}>
                <Text style={styles.menumsg_count}>700</Text>
              </View>
            </TouchableOpacity>
          {/* END TO SETUP MESSAGE VIEW */}

          {/* BEGIN TO SETUP ACTIVITY VIEW */}
            <TouchableOpacity style={styles.menu_list} onPress={() => alert("Activity Button Click")}>
              <SimpleLineIcons name="bell" color="#ffffff" size={18} />
              <Text style={styles.menu_item_text}>Activity</Text>
            </TouchableOpacity>
          {/* END TO SETUP ACTIVITY VIEW */}

          {/* BEGIN TO SETUP FAVORITE VIEW */}
            <TouchableOpacity style={styles.menu_list} onPress={() => alert("Favorite Button Click")}>
              <SimpleLineIcons name="star" color="#ffffff" size={18} />
              <Text style={styles.menu_item_text}>Favorite</Text>
            </TouchableOpacity>
          {/* END TO SETUP FAVORITE VIEW */}

          {/* BEGIN TO SETUP FRIENDS VIEW */}
            <TouchableOpacity style={styles.menu_list} onPress={() => alert("Friends Button Click")}>
              <SimpleLineIcons name="people" color="#ffffff" size={18} />
              <Text style={styles.menu_item_text}>Friends</Text>
            </TouchableOpacity>
          {/* END TO SETUP FRIENDS VIEW */}
          </View>
        </ImageBackground>
      {/* END TO SETUP IMAGEBACKGROUND VIEW */}
      </View>
    );
  }
}
// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  menucontrol_panel: {
    flex: 1,
    backgroundColor: "transparent"
  },
  menuimage_bg: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    paddingTop: 25
  },
  menusearch_sec: {
    width: Dimensions.get("window").width * 0.84,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  search_border: {
    borderColor: "#ff6347",
    backgroundColor: "#ff6347"
  },
  search_input_field: {
    height: Platform.OS === "ios" ? 38 : 45,
    paddingLeft: 15,
    textAlign: I18nManager.isRTL ? "right" : "left"
  },
  menu_list_sec: {
    width: Dimensions.get("window").width * 0.84,
    alignSelf: "center",
    marginTop: 25
  },
  menu_list: {
    width: Dimensions.get("window").width * 0.84,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row"
  },
  menu_item_text: {
    marginLeft: 7,
    color: "#ffffff",
    fontFamily: font_type.FontLight
  },
  msg_count_sec: {
    position: "absolute",
    right: 0,
    bottom: 10
  },
  menumsg_count: {
    backgroundColor: "white",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "white",
    overflow: "hidden",
    borderRadius: 6,
    width: 20,
    height: 12,
    fontSize: 8
  },
  drawercontainer: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#2d324f"
  }
});
// END TO MAKE STYLE
