import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Alert,StyleSheet,Dimensions} from "react-native";
import {Text, Container, Content} from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
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
      <Container style={{ width: Dimensions.get("window").width * 0.3, backgroundColor: '#302f39', height: Dimensions.get("window").height}}>
        {/* BEGIN TO SETUP PROFILEIMAGE VIEW */}
          <View style={styles.profile_body}>
            <Image source={GlobalInclude.Image5} style={styles.profile_image}/>
          </View>
        {/* BEGIN TO SETUP PROFILEIMAGE VIEW */}
        <Content style={styles.mainview} showsVerticalScrollIndicator={false}>

        {/* BEGIN TO SETUP HOME VIEW */}
          <TouchableOpacity style={styles.listrow} onPress={() => alert('Home Button Click')}>
            <View style={[styles.item_bg, {backgroundColor: '#ef4836'}]}>
              <Ionicons name="ios-document" size={moderateScale(30)} color="white" />
            </View>
          </TouchableOpacity>
        {/* END TO SETUP HOME VIEW */}

        {/* BEGIN TO SETUP CHAT VIEW */}
          <TouchableOpacity style={styles.listrow} onPress={() => alert('Chat Button Click')}>
            <View style={[styles.item_bg, {backgroundColor: '#8e44ad'}]}>
              <Ionicons name="ios-chatbubbles" size={moderateScale(30)} color="white" />
            </View>
          </TouchableOpacity>
        {/* END TO SETUP CHAT VIEW */}

        {/* BEGIN TO SETUP NOTIFICATION VIEW */}
          <TouchableOpacity style={styles.listrow} onPress={() => alert('Notification Button Click')}>
            <View style={[styles.item_bg, {backgroundColor: '#22a7f0'}]}>
              <Ionicons name="ios-notifications" size={moderateScale(30)} color="white" />
            </View>
          </TouchableOpacity>
        {/* END TO SETUP NOTIFICATION VIEW */}

        {/* BEGIN TO SETUP FAVORITE VIEW */}
          <TouchableOpacity style={styles.listrow} onPress={() => alert('Favorite Button Click')}>
            <View style={[styles.item_bg, {backgroundColor: '#2ecc71'}]}>
              <FontAwesome name="star" size={moderateScale(25)} color="white" />
            </View>
          </TouchableOpacity>
        {/* END TO SETUP FAVORITE VIEW */}

        {/* BEGIN TO SETUP FRIENDS VIEW */}
          <TouchableOpacity style={styles.listrow} onPress={() => alert('Friends Button Click')}>
            <View style={[styles.item_bg, {backgroundColor: '#f9bf3b'}]}>
              <Entypo name="users" size={moderateScale(20)} color="white" />
            </View>
          </TouchableOpacity>
        {/* END TO SETUP FRIENDS VIEW */}
        </Content>
      </Container>
    )
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  mainview:{
    backgroundColor: 'transparent',
  },
  back_arrowrow:{
    backgroundColor: '#36343f',
    flexDirection: 'column',
    paddingVertical: (Dimensions.get("window").height * 0.032),
    marginBottom: (Dimensions.get("window").height * 0.002),
  },
  item_bg: {
    height:(Dimensions.get("window").height * 0.1),
    width:(Dimensions.get("window").height * 0.1),
    borderRadius:(Dimensions.get("window").height * 0.05),
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },
  profile_body: {
    height: (Dimensions.get("window").height * 0.175),
    backgroundColor: '#302f39',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile_image: {
    height: (Dimensions.get("window").height * 0.1),
    width: (Dimensions.get("window").height * 0.1),
    borderRadius: (Dimensions.get("window").height * 0.05),
    borderWidth: (Dimensions.get("window").width * 0.0065),
    borderColor: 'white',
  },
});
// END TO MAKE STYLE
