import React, { Component } from "react";
import {Image, StatusBar, View, TouchableOpacity, Alert,Platform,ScrollView,StyleSheet,Dimensions} from "react-native";
import {Text} from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";

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

  constructor (props) {
    super(props);
    this.state = {
      langId: 1,
      activeMenu: 'SignUp',
    }
  }

  render() {
    const {activeMenuImage} = this.state
    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW

    return (
      <View style={styles.img_container}>
        <View style={styles.list_profile_container}>
        {/* BEGIN TO SETUP PROFILEIMAGE AND ADDRESS VIEW */}
           <View style={styles.profile_data_bg}>
            <Image source={GlobalInclude.Image2} style={styles.profile_img}/>
            <View style={styles.nameaddress_txt}>
              <Text style={styles.name_txt}>Lorem Ipsum</Text>
              <Text style={styles.address_txt}>Lorem Ipsum</Text>
            </View>
           </View>
         {/* END TO SETUP PROFILEIMAGE AND ADDRESS  VIEW */}
         <View style={styles.scroll_bg}>
         <ScrollView style={styles.menu_list_bg}>
         {/* BEGIN TO SETUP HOME VIEW */}
           <TouchableOpacity style={{flexDirection:'row',alignItems: 'center'}} onPress={() => alert('Home Button Click')}>
              <SimpleLineIcons name="home" size={20} color="#919cae"/>
              <Text style={styles.menu_list_item}>Home</Text>
            </TouchableOpacity>
          {/* END TO SETUP HOME VIEW */}

          {/* BEGIN TO SETUP ARTICLES VIEW */}
            <TouchableOpacity style={styles.menu_list_item_bg} onPress={() => alert('Articles Button Click')}>
              <Ionicons name="ios-person-add" size={28} color="#919cae"/>
              <Text style={[styles.menu_list_item,{marginLeft: (Dimensions.get("window").width * 0.05)}]}>User</Text>
            </TouchableOpacity>
          {/* END TO SETUP ARTICLES VIEW */}

          {/* BEGIN TO SETUP MESSAGE VIEW */}
            <TouchableOpacity style={styles.menu_list_item_bg} onPress={() => alert('Message Button Click')}>
              <SimpleLineIcons name="bubbles" size={20} color="#919cae"/>
              <Text style={styles.menu_list_item}>Message</Text>
              <View style={styles.row_count_bg}>
                <Text style={styles.row_count_text}>55</Text>
              </View>
            </TouchableOpacity>
          {/* END TO SETUP MESSAGE VIEW */}

          {/* BEGIN TO SETUP ACTIVITY VIEW */}
            <TouchableOpacity style={styles.menu_list_item_bg} onPress={() => alert('Activity Button Click')}>
              <SimpleLineIcons name="bell" size={20} color="#919cae"/>
              <Text style={styles.menu_list_item}>Activity</Text>
            </TouchableOpacity>
          {/* END TO SETUP ACTIVITY VIEW */}

          {/* BEGIN TO SETUP FAVORITE VIEW */}
            <TouchableOpacity style={styles.menu_list_item_bg} onPress={() => alert('Favorite Button Click')}>
              <SimpleLineIcons name="star" size={20} color="#919cae"/>
              <Text style={styles.menu_list_item}>Favorite</Text>
            </TouchableOpacity>
          {/* END TO SETUP FAVORITE VIEW */}

          {/* BEGIN TO SETUP FRIENDS VIEW */}
            <TouchableOpacity style={styles.menu_list_item_bg} onPress={() => alert('Friends Button Click')}>
              <SimpleLineIcons name="people" size={20} color="#919cae"/>
              <Text style={styles.menu_list_item}>Friends</Text>
            </TouchableOpacity>
          {/* END TO SETUP FRIENDS VIEW */}
           </ScrollView>
           </View>
          </View>
          {/* BEGIN TO SETUP LOGOUT VIEW */}
            <TouchableOpacity  onPress={() => alert('Logout Button Click')}>
            <View style={styles.bottom_view_bg}>
              <Image style={styles.logout_image} source={require('./icon_logout.png')}/>
              <Text style={[styles.menu_list_item,{paddingTop: (Dimensions.get("window").height * 0.01)}]}>Logout</Text>
            </View>
            </TouchableOpacity>
          {/* END TO SETUP LOGOUT VIEW */}
          </View>
    );
  }
}
// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  menu_list_item: {
    marginLeft: (Dimensions.get("window").width * 0.03),
    color: "#2d324f",
    fontSize: moderateScale(18),
    fontFamily: font_type.FontLight,
  },
  menu_icon: {
    width: (Dimensions.get("window").width * 0.06),
    height: (Dimensions.get("window").width * 0.06),
    resizeMode: 'contain'
  },
  img_container: {
    height: (Dimensions.get("window").height),
    backgroundColor: 'white'
  },
  list_profile_container: {
    height: (Dimensions.get("window").height * 0.85),
    backgroundColor: 'white'
  },
  profile_data_bg: {
    flexDirection: 'row',
    marginTop: (Dimensions.get("window").height * 0.1),
    alignItems: 'center',
    marginLeft: (Dimensions.get("window").width * 0.1),
    backgroundColor: 'rgba(0,0,0,0)'
  },
  profile_img: {
    width: (Dimensions.get("window").width) * 0.16,
    height: (Dimensions.get("window").width) * 0.16,
    borderRadius: (Dimensions.get("window").width) * 0.08,
    borderColor: 'white',
    borderWidth: 2,
    resizeMode: 'cover'
  },
  name_txt: {
    fontSize: moderateScale(15),
    fontFamily: font_type.FontBold,
    color: "#2d324f"
  },
  address_txt: {
    fontSize: moderateScale(12),
    fontFamily: font_type.FontLight,
    color: "#919cae",
    textAlign: 'left'
  },
  nameaddress_txt: {
    flexDirection: 'column',
    marginLeft: (Dimensions.get("window").width * 0.03)
  },
  menu_list_bg: {
    marginTop: (Dimensions.get("window").height * 0.1),
    marginLeft: (Dimensions.get("window").width * 0.12),
    backgroundColor: 'rgba(0,0,0,0)'
  },
  menu_list_item_bg: {
    flexDirection:'row',
    marginTop: (Dimensions.get("window").height * 0.04),
    alignItems: 'center'
  },
  bottom_view_bg: {
    flexDirection: 'row',
    height: (Dimensions.get("window").height * 0.15),
    backgroundColor: 'rgba(0,0,0,0)',
    paddingLeft: (Dimensions.get("window").width * 0.12),
    paddingTop: (Dimensions.get("window").width * 0.04),
  },
  logout_image: {
    width: (Dimensions.get("window").width * 0.05),
    height: (Dimensions.get("window").height * 0.06),
    resizeMode: 'contain'
  },
  scroll_bg: {
    height:(Dimensions.get("window").height * 0.65),
    backgroundColor: 'rgba(0,0,0,0)'
  },
  row_count_text:{
   color:'white',
   fontSize: moderateScale(12),
   backgroundColor: 'rgba(0,0,0,0)',
   textAlign: 'center',
   fontFamily: font_type.FontLight,
   paddingLeft: (Dimensions.get("window").height * 0.015),
   paddingRight: (Dimensions.get("window").height * 0.015),
 },
 row_count_bg:{
    backgroundColor: '#00bff3',
    borderRadius: 20,
    marginLeft:(Dimensions.get("window").height * 0.025),
    justifyContent: 'center',
    alignItems: 'center',
    height: (Dimensions.get("window").height) * 0.028
 },
});
// END TO MAKE STYLE
