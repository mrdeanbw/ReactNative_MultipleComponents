import React, { Component } from "react";
import {Image,StatusBar,View,TouchableOpacity,Alert,Platform,ImageBackground,StyleSheet,Dimensions} from "react-native";
import {Text,Container,Content,Icon} from "native-base";
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
    <Container style={{ backgroundColor: "#0e1130" }}>
      {/* BEGIN TO SETUP IMAGEBACKGROUND VIEW */}
        <ImageBackground source={GlobalInclude.Image3} style={{ height: Dimensions.get("window").height }}>
          <Image source={GlobalInclude.Image2} style={styles.profile_image} />
          <Content style={styles.mainview}>
          {/* BEGIN TO SETUP HOME VIEW */}
            <TouchableOpacity style={styles.listrow} onPress={() => alert("Home Button Click")}>
              <Text style={styles.rowtxt}>Home</Text>
            </TouchableOpacity>
          {/* END TO SETUP HOME VIEW */}

          {/* BEGIN TO SETUP ARTICLES VIEW */}
            <TouchableOpacity style={styles.listrow} onPress={() => alert("Articles Button Click")}>
              <Text style={styles.rowtxt}>Articles</Text>
            </TouchableOpacity>
          {/* END TO SETUP ARTICLES VIEW */}

          {/* BEGIN TO SETUP MESSAGE VIEW */}
            <TouchableOpacity style={styles.listrow} onPress={() => alert("Message Button Click")}>
              <Text style={styles.rowtxt}>Message</Text>
              <View style={styles.row_count_bg}>
                <Text style={styles.row_count_text}>111</Text>
              </View>
            </TouchableOpacity>
          {/* END TO SETUP MESSAGE VIEW */}

          {/* BEGIN TO SETUP ACTIVITY VIEW */}
            <TouchableOpacity style={styles.listrow} onPress={() => alert("Activity Button Click")}>
              <Text style={styles.rowtxt}>Activity</Text>
            </TouchableOpacity>
          {/* END TO SETUP ACTIVITY VIEW */}

          {/* BEGIN TO SETUP FAVOURITE VIEW */}
            <TouchableOpacity style={styles.listrow} onPress={() => alert("Favorite Button Click")}>
              <Text style={styles.rowtxt}>Favorite</Text>
            </TouchableOpacity>
          {/* END TO SETUP FAVOURITE VIEW */}

          {/* BEGIN TO SETUP FRIENDS VIEW */}
            <TouchableOpacity style={styles.listrow} onPress={() => alert("Friends Button Click")}>
              <Text style={styles.rowtxt}>Friends</Text>
            </TouchableOpacity>
          {/* END TO SETUP FRIENDS VIEW */}
          </Content>
        </ImageBackground>
      {/* END TO SETUP IMAGEBACKGROUND VIEW */}
      </Container>
    );
  }
}
// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  mainview:{
    marginLeft: (Dimensions.get("window").height * 0.035),
    marginTop: (Dimensions.get("window").height * 0.06),
  },
  listrow:{
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginBottom: (Dimensions.get("window").height * 0.03),
    alignItems: 'center'
  },
  rowtxt:{
    color:'white',
    fontSize: moderateScale(20),
    backgroundColor: 'transparent',
    marginLeft: (Dimensions.get("window").height * 0.025),
    textAlign: 'center',
    fontFamily: font_type.FontBold
  },
  row_count_text:{
    color:'white',
    fontSize: moderateScale(16),
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontFamily: font_type.FontLight,
    paddingLeft: (Dimensions.get("window").height * 0.015),
    paddingRight: (Dimensions.get("window").height * 0.015),
  },
  row_count_bg:  {
     backgroundColor: '#ff6347',
     borderRadius: 20,
     marginLeft:(Dimensions.get("window").height * 0.025),
     justifyContent: 'center',
     alignItems: 'center',
     height: (Dimensions.get("window").height) * 0.045
  },
  profile_image: {
    height:(Dimensions.get("window").height * 0.14),
    width:(Dimensions.get("window").height * 0.14),
    borderRadius:(Dimensions.get("window").height * 0.070),
    borderWidth: 2.5,
    borderColor: 'white',
    marginBottom: (Dimensions.get("window").height * 0.025),
    marginTop : (Dimensions.get("window").height * 0.099),
    marginLeft: (Dimensions.get("window").height * 0.045)
  },
});
// END TO MAKE STYLE
