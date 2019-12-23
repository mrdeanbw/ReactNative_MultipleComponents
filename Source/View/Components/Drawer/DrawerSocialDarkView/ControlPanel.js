import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image,StyleSheet,Dimensions,Platform} from 'react-native';
import {Container, Content,Icon } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
      {/* BEGIN TO SETUP IMAGE AND DETAIL VIEW */}
        <View style={styles.user_profiles}>
          <View style={styles.user_profilestyle_sec}>
            <Image source={GlobalInclude.Image4} style={styles.user_image_style}/>
          </View>
          <View style={styles.user_details_style}>
            <Text style={styles.user_details_text}>lorem ipsum</Text>
            <Text style={styles.user_details_text}>lorem ipsum</Text>
          </View>
        </View>
      {/* END TO SETUP IMAGE AND DETAIL VIEW */}

        <Content>
          <View style={styles.menumainview}>
          {/* BEGIN TO SETUP HOME VIEW */}
            <TouchableOpacity onPress={() => alert('Home Button Click')} >
              <View style={styles.listrow}>
                <Ionicons name="md-home" color="#ffffff" size={20} />
                <Text style={styles.rowtxt}>Home</Text>
              </View>
            </TouchableOpacity>
          {/* END TO SETUP HOME VIEW */}

          {/* BEGIN TO SETUP ARITICLES VIEW */}
            <TouchableOpacity onPress={() => alert('Articles Button Click')} >
              <View style={styles.listrow}>
                <MaterialCommunityIcons name="file" color="#ffffff" size={20} />
                <Text style={styles.rowtxt}>Articles</Text>
              </View>
            </TouchableOpacity>
          {/* END TO SETUP ARTICLES VIEW */}

          {/* BEGIN TO SETUP MESSAGE VIEW */}
            <TouchableOpacity onPress={() => alert('Message Button Click')} >
              <View style={styles.listrow}>
                <SimpleLineIcons name="bubbles" color="#ffffff" size={20} />
                <Text style={styles.rowtxt}>Message</Text>
                <View style={styles.noti_count_sec}>
                 <Text style={styles.noti_count}>100</Text>
                </View>
              </View>
            </TouchableOpacity>
          {/* END TO SETUP MESSAGE VIEW */}

          {/* BEGIN TO SETUP ACTIVITY VIEW */}
            <TouchableOpacity onPress={() => alert('Activity Button Click')} >
              <View style={styles.listrow}>
                <SimpleLineIcons name="bell" color='#ffffff' size={20} />
                <Text style={styles.rowtxt}>Activity</Text>
              </View>
            </TouchableOpacity>
          {/* END TO SETUP ACTIVITY VIEW */}

          {/* BEGIN TO SETUP FAVOURITE VIEW */}
            <TouchableOpacity onPress={() => alert('Favourite Button Click')} >
              <View style={styles.listrow}>
                <FontAwesome name="star" color='#ffffff' size={20} />
                <Text style={styles.rowtxt}>Favourite</Text>
              </View>
            </TouchableOpacity>
          {/* END TO SETUP FAVOURITE VIEW */}

          {/* BEGIN TO SETUP FRIENDS VIEW */}
            <TouchableOpacity onPress={() => alert('Friends Button Click')} >
              <View style={styles.listrow}>
                <SimpleLineIcons name="people" color='#ffffff' size={20} />
                <Text style={styles.rowtxt}>Friends</Text>
                <View style={styles.noti_count_sec}>
                 <Text style={styles.noti_count}>150</Text>
                </View>
              </View>
            </TouchableOpacity>
          {/* END TO SETUP FRIENDS VIEW */}

          {/* BEGIN TO SETUP LOGOUT VIEW */}
            <TouchableOpacity onPress={() => alert('Logout Button Click')}>
              <View style={styles.listrow}>
                <SimpleLineIcons name="logout" color='#ffffff' size={20} />
                <Text style={styles.rowtxt}>Logout</Text>
              </View>
            </TouchableOpacity>
          {/* END TO SETUP LOGOUT VIEW */}
          </View>
          </Content>
        </Container>
    )
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  menu_container:{
    backgroundColor: '#222222',
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  user_profiles:{
    width: (Dimensions.get("window").width) * 0.84,
    paddingTop: moderateScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff6347'
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
    marginLeft: moderateScale(10),
    marginBottom: moderateScale(10),
  },
  user_details_text:{
    fontSize: moderateScale(15),
    color: 'white',
  },
  menumainview:{
    width: (Dimensions.get("window").width) * 0.84,
    marginTop: moderateScale(25),
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  listrow:{
    backgroundColor: 'transparent',
    flexDirection: 'row',
    width: (Dimensions.get("window").width) * 0.84,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: moderateScale(20),
    marginTop: moderateScale(10),
    marginBottom: moderateScale(10),
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
    backgroundColor: '#ff6347',
    marginLeft: 10,
    marginTop: 3,
    borderRadius: 10,
    height: 17,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 11111
  },
  noti_count:{
    color: 'white',
    fontSize: moderateScale(13),
  },
  user_profilestyle_sec:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: moderateScale(10),
  },
});
// END TO MAKE STYLE
