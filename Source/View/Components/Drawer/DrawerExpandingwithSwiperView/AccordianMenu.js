import React, { Component } from "react";
import {Platform,StyleSheet,Text,View,TouchableOpacity,Image,I18nManager,Dimensions} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Swiper from "react-native-swiper";


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

export default class AccordionMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }

  //BEGIN TO SETUP TOGGLE
  toggle() {
    this.setState({
      expanded: !this.state.expanded
    });
  }
  //END TO SETUP TOGGLE

  render() {
    var mainbg = "";
    var arrowIcon = "";
    if (this.state.expanded) {
      mainbg = "#21243a";
      arrowIcon = "ios-arrow-down";
    } else {
      mainbg = "#292d48";
      arrowIcon = I18nManager.isRTL ? "ios-arrow-back" : "ios-arrow-forward";
    }
    return (
      <View style={[styles.container, { backgroundColor: mainbg }]}>
      {/* BEGIN TO SETUP HEADERTITLE VIEW */}
        <View style={styles.title_container}>
          <TouchableOpacity
            onPress={this.toggle.bind(this)}
            underlayColor="transparent">
            <View style={styles.title_collapse}>
              <View style={styles.header_title}>
                <Text style={styles.header}>{this.props.title}</Text>
                <Ionicons name={arrowIcon} size={20} color="#54576d" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      {/* END TO SETUP HEADERTITLE VIEW */}

      {/* BEGIN TO SETUP EXPANDED VIEW */}
        {this.state.expanded && (
          <View style={styles.body}>
            <Text style={styles.sample_text}>CHOOSE A CATEGORIE</Text>
            <View>
              <View style={styles.wrapper_swiper}>
              {/* BEGIN TO SETUP SWIPER VIEW */}
                <Swiper
                  showsButtons={false}
                  autoplay={false}
                  autoplayTimeout={2.5}
                  activeDot={<View style={styles.active_dot} />}
                  dot={<View style={styles.dot} />}>
                  {this.props.submenuList.map((submenuTitle, value) => {
                    return (
                      <View key={"submenuview_" + value}>
                        <View>
                          <View style={styles.submenu_row}>
                          {/* BEGIN TO SETUP SOFAICON VIEW */}
                            <View
                              style={[
                                styles.swcat_sec,
                                { backgroundColor: "#f8d411" }
                              ]}>
                              <MaterialCommunityIcons
                                name="sofa"
                                color="#fff"
                                size={18}/>
                            </View>
                          {/* END TO SETUP SOFAICON VIEW */}

                          {/* BEGIN TO SETUP BUILDINGICON VIEW */}
                            <View
                              style={[
                                styles.swcat_sec,
                                { backgroundColor: "#6f26fa" }
                              ]}>
                              <FontAwesome
                                name="building"
                                color="#fff"
                                size={18}/>
                            </View>
                          {/* END TO SETUP BUILDINGICON VIEW */}

                          {/* BEGIN TO SETUP GLASSDOORICON VIEW */}
                            <View
                              style={[
                                styles.swcat_sec,
                                { backgroundColor: "#f23d5c" }
                              ]}>
                              <MaterialCommunityIcons
                                name="glassdoor"
                                color="#fff"
                                size={18}/>
                            </View>
                          {/* END TO SETUP GLASSDOORICON VIEW */}

                          {/* BEGIN TO SETUP FANICON VIEW */}
                            <View
                              style={[
                                styles.swcat_sec,
                                { backgroundColor: "#2874fb" }
                              ]}>
                              <MaterialCommunityIcons
                                name="fan"
                                color="#fff"
                                size={18}/>
                            </View>
                          {/* END TO SETUP FANICON VIEW */}
                            </View>
                            <View style={styles.submenu_row}>
                          {/* BEGIN TO SETUP BEDICON VIEW */}
                            <View
                              style={[
                                styles.swcat_sec,
                                { backgroundColor: "#ff308e" }
                              ]}>
                              <FontAwesome name="bed" color="#fff" size={18} />
                            </View>
                          {/* END TO SETUP BEDICON VIEW */}

                          {/* BEGIN TO SETUP TV VIEW */}
                            <View
                              style={[
                                styles.swcat_sec,
                                { backgroundColor: "#20cbf3" }
                              ]}>
                              <Entypo name="tv" color="#fff" size={18} />
                            </View>
                          {/* END TO SETUP TV VIEW */}

                          {/* BEGIN TO SETUP BATHTUB VIEW */}
                            <View
                              style={[
                                styles.swcat_sec,
                                { backgroundColor: "#fa9301" }
                              ]}>
                              <FontAwesome
                                name="bathtub"
                                color="#fff"
                                size={18}/>
                            </View>
                          {/* END TO SETUP BATHTUB VIEW */}

                          {/* BEGIN TO SETUP LIGHTBULD VIEW */}
                            <View
                              style={[
                                styles.swcat_sec,
                                { backgroundColor: "#49cc5c" }
                              ]}>
                              <Entypo
                                name="light-bulb"
                                color="#fff"
                                size={18}/>
                            </View>
                           {/* END TO SETUP LIGHTBULD VIEW */}
                          </View>
                        </View>
                      </View>
                    );
                  })}
                </Swiper>
              {/* END TO SETUP SWIPER VIEW */}
              </View>
            </View>
          </View>
        )}
    {/* END TO SETUP EXPANDED VIEW */}
      </View>
    );
  }
}

// BEGIN TO MAKE STYLE
var styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2"
  },
  title_container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#1a1d2e"
  },
  title_collapse: {
    flexDirection: "row"
  },
  header_title: {
    width: Dimensions.get("window").width ,
    flexDirection: "row",
    padding: 7,
    paddingLeft: 15,
    alignItems: "center"
  },
  header: {
    width: Dimensions.get("window").width  * 0.9,
    paddingTop: 10,
    paddingBottom: 10,
    color: "#fff",
    fontSize: 16,
    textAlign: "left"
  },
  body: {
    paddingLeft: 15,
    paddingRight: 5,
    paddingTop: 0,
    width: Dimensions.get("window").width  * 0.9
  },
  wrapper_swiper: {
    width: Dimensions.get("window").width  * 0.9,
    height: Dimensions.get("window").width  * 0.55,
    marginTop: 10
  },
  dot: {
    backgroundColor: "#4d5061",
    width: 7,
    height: 7,
    borderRadius: 5,
    marginLeft: 2,
    marginRight: 2
  },
  active_dot: {
    backgroundColor: "#fff",
    width: 7,
    height: 7,
    borderRadius: 5,
    marginLeft: 2,
    marginRight: 2
  },
  submenu_row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  swcat_sec: {
    width: Dimensions.get("window").width  * 0.18,
    height: Dimensions.get("window").width  * 0.18,
    borderRadius: Dimensions.get("window").width  * 0.09,
    borderColor: "transparent",
    marginTop: 10,
    marginLeft: 6,
    marginRight: 6,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  sample_text: {
    color: "#495078",
    fontFamily: font_type.FontLight ,
    fontSize: 10,
    marginTop: 10
  }
});
// END TO MAKE STYLE
