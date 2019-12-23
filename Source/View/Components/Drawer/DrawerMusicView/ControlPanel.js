import React, { Component } from "react";
import {Image,StatusBar,View,TouchableOpacity,Platform,ScrollView,Dimensions,StyleSheet} from "react-native";
import {Text,Container,List} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
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
  constructor(props) {
    super(props);
    this.state = {
      langId: 1,
      activeMenu: "SignUp"
    };
  }

  render() {
    const { activeMenuImage } = this.state;
    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW

    return (
      <Container style={styles.img_bg}>
        <View style={styles.img_container}>
          <View style={styles.list_profile_container}>
          {/* BEGIN TO SETUP IMAGE AND NAME AND ADDRESS VIEW */}
            <View style={styles.profile_data_bg}>
              <Image source={GlobalInclude.Image1} style={styles.profile_img} />
              <View style={styles.nameaddress_txt}>
                <Text style={styles.name_txt}>Lorem Ipsum</Text>
                <Text style={styles.address_txt}>Lorem Ipsum</Text>
              </View>
            </View>
          {/* END TO SETUP IMAGE AND NAME AND ADDRESS VIEW */}
            <View style={styles.scroll_bg}>
              <ScrollView style={styles.menu_list_bg}>
              {/* BEGIN TO SETUP ADDSONG VIEW */}
                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={() => alert("Add Song Button Click")}>
                  <Ionicons name="ios-musical-notes" size={30} color="white" />
                  <Text style={styles.menu_list_item}>Add Song</Text>
                </TouchableOpacity>
              {/* END TO SETUP ADDSONG VIEW */}

              {/* BEGIN TO SETUP PLAYLIST VIEW */}
                <TouchableOpacity style={styles.menu_list_item_bg} onPress={() => alert("Playlist Button Click")}>
                  <SimpleLineIcons name="playlist" size={20} color="white" />
                  <Text style={styles.menu_list_item}>Playlist</Text>
                </TouchableOpacity>
              {/* END TO SETUP PLAYLIST VIEW */}

              {/* BEGIN TO SETUP LIBARY VIEW */}
                <TouchableOpacity style={styles.menu_list_item_bg} onPress={() => alert("Library Button Click")}>
                  <Image source={require('./icon_library.png')} style={styles.menu_icon} />
                  <Text style={styles.menu_list_item}>Library</Text>
                </TouchableOpacity>
              {/* END TO SETUP LIBARY VIEW */}

              {/* BEGIN TO SETUP RADIO VIEW */}
                <TouchableOpacity style={styles.menu_list_item_bg} onPress={() => alert("Radio Button Click")}>
                  <Image source={require('./icon_radio.png')} style={styles.menu_icon} />
                  <Text style={styles.menu_list_item}>Radio</Text>
                </TouchableOpacity>
              {/* END TO SETUP RADIO VIEW */}

              {/* BEGIN TO SETUP FEED VIEW */}
                <TouchableOpacity style={styles.menu_list_item_bg} onPress={() => alert("Feed Button Click")}>
                  <Ionicons name="ios-albums" size={25} color="white" />
                  <Text style={styles.menu_list_item}>Feed</Text>
                </TouchableOpacity>
              {/* END TO SETUP FEED VIEW */}

              {/* BEGIN TO SETUP LIKES VIEW */}
                <TouchableOpacity style={styles.menu_list_item_bg} onPress={() => alert("My Likes Button Click")}>
                  <Image source={require('./icon_my_likes.png')} style={styles.menu_icon} />
                  <Text style={styles.menu_list_item}>My Likes</Text>
                </TouchableOpacity>
              {/* END TO SETUP LIKES VIEW */}

              {/* BEGIN TO SETUP SETTING VIEW */}
                <TouchableOpacity style={styles.menu_list_item_bg} onPress={() => alert("Settings Button Click")}>
                  <SimpleLineIcons name="settings" size={25} color="white" />
                  <Text style={styles.menu_list_item}>Settings</Text>
                </TouchableOpacity>
              {/* END TO SETUP SETTING VIEW */}
              </ScrollView>
            </View>
          </View>

          <View style={styles.bottom_view_bg}>
          {/* BEGIN TO SETUP IMAGE AND TEXT VIEW */}
            <View style={styles.bottom_image_data_bg}>
              <Image source={GlobalInclude.Image2} style={styles.bottom_image} />
              <View style={styles.bottom_data_bg}>
                <Text style={styles.imagine_dragon_txt}>Lorem Ipsum</Text>
                <Text style={styles.bottomname_txt}>Lorem Ipsum</Text>
              </View>
            </View>
          {/* END TO SETUP IMAGE AND TEXT VIEW */}

          {/* BEGIN TO SETUP MUSICICON VIEW */}
            <View style={styles.play_musicimg_bg}>
              <Image source={require('./icon_music.png')} style={styles.play_music_img} />
            </View>
          {/* END TO SETUP MUSICICON VIEW */}
          </View>
        </View>
      </Container>
    );
  }
}
// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  menu_list_item: {
    marginLeft: (Dimensions.get("window").width * 0.03),
    color: 'white',
    fontSize: moderateScale(20),
    fontFamily: font_type.FontLight,
  },
  menu_icon: {
    width: (Dimensions.get("window").width * 0.06),
    height: (Dimensions.get("window").width * 0.06),
    resizeMode: 'contain'
  },
  container: {
    height: (Dimensions.get("window").height),
    width: Dimensions.get("window").width,
    backgroundColor: 'white'
  },
  img_bg: {
    height: (Dimensions.get("window").height),
    backgroundColor: 'grey'
  },
  img_container: {
    height: (Dimensions.get("window").height),
  },
  list_profile_container: {
    height: (Dimensions.get("window").height * 0.90),
    backgroundColor: "#202022"
  },
  profile_data_bg: {
    flexDirection: 'row',
    marginTop: (Dimensions.get("window").height * 0.12),
    alignItems: 'center',
    marginLeft: (Dimensions.get("window").width * 0.1)
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
    color: 'white'
  },
  address_txt: {
    fontSize: moderateScale(12),
    fontFamily: font_type.FontLight,
    color: "#a9a9a9",
    textAlign: 'left'
  },
  nameaddress_txt: {
    flexDirection: 'column',
    marginLeft: (Dimensions.get("window").width * 0.03)
  },
  menu_list_bg: {
    marginTop: (Dimensions.get("window").height * 0.12),
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
    height: (Dimensions.get("window").height * 0.1),
    backgroundColor: "#19191a",
    alignItems:'center',
    justifyContent: 'space-between',
    paddingLeft: (Dimensions.get("window").width * 0.02),
    paddingRight: (Dimensions.get("window").width * 0.05)
  },
  bottom_image_data_bg: {
    flexDirection: 'row',
    alignItems:'center'
  },
  bottom_image: {
    width: (Dimensions.get("window").width * 0.12),
    height:(Dimensions.get("window").width * 0.12),
    borderRadius: (Dimensions.get("window").width * 0.06),
    borderWidth: 1,
    borderColor: 'white'
  },
  bottom_data_bg: {
    flexDirection: 'column',
    marginLeft: (Dimensions.get("window").width * 0.03)
  },
  imagine_dragon_txt: {
    color: 'white',
    fontSize: moderateScale(18),
    fontFamily: font_type.FontBold,
  },
  bottomname_txt: {
    color: "#919191",
    fontSize: moderateScale(13),
    fontFamily: font_type.FontLight,
    textAlign: 'left'
  },
  play_musicimg_bg: {
    width: (Dimensions.get("window").width * 0.08),
    height: (Dimensions.get("window").width * 0.08),
    borderRadius: (Dimensions.get("window").width * 0.04),
    borderWidth:1,
    borderColor: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  play_music_img: {
    width: (Dimensions.get("window").width * 0.04),
    height: (Dimensions.get("window").width * 0.04),
    resizeMode: 'contain'
  },
  scroll_bg: {
    height:(Dimensions.get("window").height * 0.62)
  }
});
// END TO MAKE STYLE
