import React, { Component } from "react";
import {Image,View,TouchableOpacity,Alert,StyleSheet,Dimensions,I18nManager} from "react-native";
import {Button,Text,Container,List} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";


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

export default class ControlPanel extends Component {

  //BEGIN TO SETUP HANDLEPRESS
  _handlePress(text) {
    alert(text);
  }
  //END TO SETUP HANDLEPRESS

  render() {
    return (
      <Container style={styles.bottom_modal}>
        <View style={styles.mainview}>
        {/* BEGIN TO SETUP HOME VIEW */}
          <TouchableOpacity onPress={() => this._handlePress("Home Click")}>
            <View style={styles.listrow}>
              <Ionicons
                name="ios-home"
                size={moderateScale(20)}
                color={"#919cae"}
                style={styles.rowicon}/>
              <Text style={styles.rowtxt}>Home</Text>
            </View>
          </TouchableOpacity>
        {/* END TO SETUP HOME VIEW */}

        {/* BEGIN TO SETUP ARTICLES VIEW */}
          <TouchableOpacity onPress={() => this._handlePress("Articles Click")}>
            <View style={styles.listrow}>
              <Ionicons
                name="ios-document"
                size={moderateScale(20)}
                color={"#919cae"}
                style={styles.rowicon}/>
              <Text style={styles.rowtxt}>Articles</Text>
            </View>
          </TouchableOpacity>
        {/* END TO SETUP ARTICLES VIEW */}

        {/* BEGIN TO SETUP MESSAGE VIEW */}
          <TouchableOpacity onPress={() => this._handlePress("Message Click")}>
            <View style={styles.listrow}>
              <Ionicons
                name="ios-chatbubbles"
                size={moderateScale(20)}
                color={"#919cae"}
                style={styles.rowicon}/>
              <Text style={styles.rowtxt}>Message</Text>
              <View style={styles.badgeview}>
                <Text style={styles.badgetext}>555</Text>
              </View>
            </View>
          </TouchableOpacity>
        {/* END TO SETUP MESSAGE VIEW */}

        {/* BEGIN TO SETUP ACTIVITY VIEW */}
          <TouchableOpacity onPress={() => this._handlePress("Activity Click")}>
            <View style={styles.listrow}>
              <Ionicons
                name="ios-notifications"
                size={moderateScale(20)}
                color={"#919cae"}
                style={styles.rowicon}/>
              <Text style={styles.rowtxt}>Activity</Text>
            </View>
          </TouchableOpacity>
        {/* END TO SETUP ACTIVITY VIEW */}

        {/* BEGIN TO SETUP FAVOURITE VIEW */}
          <TouchableOpacity onPress={() => this._handlePress("Favourite Click")}>
            <View style={styles.listrow}>
              <Ionicons
                name="ios-star"
                size={moderateScale(20)}
                color={"#919cae"}
                style={styles.rowicon}/>
              <Text style={styles.rowtxt}>Favourite</Text>
            </View>
          </TouchableOpacity>
        {/* END TO SETUP FAVOURITE VIEW */}

        {/* BEGIN TO SETUP FRIENDS VIEW */}
          <TouchableOpacity onPress={() => this._handlePress("Friends Click")}>
            <View style={styles.listrow}>
              <Ionicons
                name="ios-contacts"
                size={moderateScale(20)}
                color={"#919cae"}
                style={styles.rowicon}/>
              <Text style={styles.rowtxt}>Friends</Text>
            </View>
          </TouchableOpacity>
        {/* END TO SETUP FRIENDS VIEW */}

        {/* BEGIN TO SETUP CLOSEBUTTON VIEW */}
          <TouchableOpacity style={styles.closeview} onPress={this.props.closeDrawer}>
            <View style={styles.mainclose}>
              <Ionicons
                name="md-close"
                size={moderateScale(60)}
                color={"#FFFFFF"}
                style={styles.closeicon}/>
            </View>
          </TouchableOpacity>
        {/* END TO SETUP CLOSEBUTTON VIEW */}
        </View>
      </Container>
    );
  }
}
// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray"
  },
  left: {
    flex: 0.5,
    backgroundColor: "transparent"
  },
  right: {
    flex: 0.5
  },
  bottom_modal: {
    justifyContent: "flex-end",
    margin: 0
  },
  mainview: {
    alignItems: "flex-start",
    height: Dimensions.get("window").height * 0.5,
    bottom: 0,
    paddingTop: 15,
    backgroundColor: "white",
    paddingLeft: Dimensions.get("window").width * 0.1
  },
  listrow: {
    backgroundColor: "transparent",
    flexDirection: "row",
    marginBottom: 8,
    marginTop: 8,
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  badgetext: {
    color: "white",
    fontSize: 13,
    textAlign: "center",
    backgroundColor: "transparent"
  },
  badgeview: {
    backgroundColor: "#ff6347",
    marginLeft: 10,
    borderRadius: 10,
    height: 17,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  },
  rowicon: {
    height: 20,
    width: 20,
    textAlign: "center"
  },
  closeview: {
    borderTopLeftRadius: I18nManager.isRTL ? 0 : 180,
    borderTopRightRadius: I18nManager.isRTL ? 180 : 0,
    height: 90,
    width: 90,
    backgroundColor: "#ff6347",
    position: "absolute",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    bottom: 0,
    right: 0
  },
  mainclose: {
    height: 70,
    width: 50
  },
  closeicon: {
    color: "white",
    backgroundColor: "transparent",
    alignSelf: "flex-start"
  },
  rowtxt: {
    color: "#36343f",
    fontSize: moderateScale(20),
    backgroundColor: "transparent",
    marginLeft: 20,
    textAlign: "left",
    fontFamily: font_type.FontLight
  }
});
// END TO MAKE STYLE
