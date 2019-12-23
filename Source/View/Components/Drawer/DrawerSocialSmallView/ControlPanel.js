import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Alert,StyleSheet,Dimensions} from "react-native";
import {Header, Text, Container, Content, Icon} from "native-base";
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
            <Image source={GlobalInclude.Image3} style={styles.profile_image}/>
          </View>
        {/* END TO SETUP PROFILEIMAGE VIEW */}

        <Content style={styles.mainview} showsVerticalScrollIndicator={false}>
          {/* BEGIN TO SETUP ARTICLES VIEW */}
            <TouchableOpacity style={styles.listrow} onPress={() => alert('Articles Button Click')} >
              <Ionicons name="ios-document" size={moderateScale(20)} color="white" style={ styles.rowicon} />
              <Text style={styles.rowtxt}>Articles</Text>
            </TouchableOpacity>
          {/* BEGIN TO SETUP ARTICLES VIEW */}

          {/* BEGIN TO SETUP MESSAGE VIEW */}
            <TouchableOpacity style={styles.listrow} onPress={() => alert('Message Button Click')} >
              <Ionicons name="ios-chatbubbles" size={moderateScale(20)} color="white" style={ styles.rowicon} />
              <Text style={styles.rowtxt}>Message</Text>
            </TouchableOpacity>
          {/* END TO SETUP MESSAGE VIEW */}

          {/* BEGIN TO SETUP ACTIVITY VIEW */}
            <TouchableOpacity style={styles.listrow} onPress={() => alert('Activity Button Click')} >
              <Ionicons name="ios-notifications" size={moderateScale(20)} color="white" style={ styles.rowicon} />
              <Text style={styles.rowtxt}>Activity</Text>
            </TouchableOpacity>
          {/* END TO SETUP ACTIVITY VIEW */}

          {/* BEGIN TO SETUP FAVORITE VIEW */}
            <TouchableOpacity style={styles.listrow} onPress={() => alert('Favorite Button Click')} >
              <FontAwesome name="star" size={moderateScale(20)} color="white" style={ styles.rowicon} />
              <Text style={styles.rowtxt}>Favorite</Text>
            </TouchableOpacity>
          {/* END TO SETUP FAVORITE VIEW */}

          {/* BEGIN TO SETUP FRIENDS VIEW */}
            <TouchableOpacity style={styles.listrow} onPress={() => alert('Friends Button Click')} >
              <Entypo name="users" size={moderateScale(20)} color="white" style={ styles.rowicon} />
              <Text style={styles.rowtxt}>Friends</Text>
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
  listrow:{
    backgroundColor: '#36343f',
    flexDirection: 'column',
    paddingTop: (Dimensions.get("window").height * 0.04),
    paddingBottom: (Dimensions.get("window").height * 0.05),
    marginBottom: (Dimensions.get("window").height * 0.002),
  },
  rowicon:{
    height: (Dimensions.get("window").height * 0.035),
    alignSelf: 'center',
    alignItems: 'center',
  },
  rowtxt:{
    color:'white',
    fontSize: moderateScale(20),
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontFamily: font_type.FontLight
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
