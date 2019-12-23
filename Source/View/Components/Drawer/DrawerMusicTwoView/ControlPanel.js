import React, { Component } from "react";
import {Image,StatusBar,View,TouchableOpacity,Alert,Platform,ImageBackground,ScrollView,StyleSheet,Dimensions} from "react-native";
import {Text,Container,List,Icon} from "native-base";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
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
      <Container style={styles.container}>
        <ImageBackground style={styles.img_container} source={GlobalInclude.Image3}>
          <View style={styles.list_profile_container}>
          {/* BEGIN TO SETUP PROFILEIAMGE AND NAME AND ADDRESS VIEW */}
            <View style={styles.profile_data_bg}>
              <Image source={GlobalInclude.Image2} style={styles.profile_img} />
              <View style={styles.nameaddress_txt}>
                <Text style={styles.name_txt}>Lorem Ipsum</Text>
                <Text style={styles.address_txt}>Lorem Ipsum</Text>
              </View>
            </View>
          {/* END TO SETUP PROFILEIAMGE AND NAME AND ADDRESS VIEW */}
            <View style={styles.scroll_bg}>
             <ScrollView style={styles.menu_list_bg}>
              {/* BEGIN TO SETUP ADDSONG VIEW */}
                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={() => alert("Add Song")}>
                  <Ionicons name="ios-musical-notes" size={30} color="white" />
                  <Text style={styles.menu_list_item}>Add Song</Text>
                </TouchableOpacity>
              {/* END TO SETUP ADDSONG VIEW */}

              {/* BEGIN TO SETUP PLAYLIST VIEW */}
                <TouchableOpacity style={styles.menu_list_item_bg} onPress={() => alert("Playlist")}>
                  <SimpleLineIcons name="playlist" size={20} color="white" />
                  <Text style={styles.menu_list_item}>Playlist</Text>
                </TouchableOpacity>
              {/* END TO SETUP PLAYLIST VIEW */}

              {/* BEGIN TO SETUP LIBRARY VIEW */}
                <TouchableOpacity style={styles.menu_list_item_bg} onPress={() => alert("Library")}>
                  <Image source={require('./icon_library.png')} style={styles.menu_icon} />
                  <Text style={styles.menu_list_item}>Library</Text>
                </TouchableOpacity>
              {/* END TO SETUP LIBRARY VIEW */}

              {/* BEGIN TO SETUP RADIO VIEW */}
                <TouchableOpacity style={styles.menu_list_item_bg} onPress={() => alert("Radio")}>
                  <Image source={require('./icon_radio.png')} style={styles.menu_icon} />
                  <Text style={styles.menu_list_item}>Radio</Text>
                </TouchableOpacity>
              {/* END TO SETUP RADIO VIEW */}

              {/* BEGIN TO SETUP FEED VIEW */}
                <TouchableOpacity style={styles.menu_list_item_bg} onPress={() => alert("Feed")}>
                  <Ionicons name="ios-albums" size={25} color="white" />
                  <Text style={styles.menu_list_item}>Feed</Text>
                </TouchableOpacity>
              {/* END TO SETUP FEED VIEW */}

              {/* BEGIN TO SETUP LIKES VIEW */}
                <TouchableOpacity style={styles.menu_list_item_bg} onPress={() => alert("My Likes")}>
                  <Image source={require('./icon_my_likes.png')} style={styles.menu_icon} />
                  <Text style={styles.menu_list_item}>My Likes</Text>
                </TouchableOpacity>
              {/* BEGIN TO SETUP LIKES VIEW */}
              </ScrollView>
            </View>
          </View>

          <View style={styles.bottom_with_seekbar_bg}>
          {/* BEGIN TO SETUP MULTISLIDER VIEW */}
            <View style={styles.seekbar_bg}>
              <MultiSlider
                allowOverlap
                snapped
                selectedStyle={{ backgroundColor: "#fff" }}
                unselectedStyle={{ backgroundColor: "#fff4" }}
                marker_style={styles.marker_style}/>
            </View>
          {/* END TO SETUP MULTISLIDER VIEW */}

          {/* BEGIN TO SETUP BOTTOM VIEW */}
            <View style={styles.bottom_view_bg}>
              <View style={styles.bottom_image_data_bg}>
                <Image source={GlobalInclude.Image1} style={styles.bottom_image}/>
                <View style={styles.bottom_data_bg}>
                  <Text style={styles.imagine_dragon_txt}>Lorem Ipsum</Text>
                  <Text style={styles.bottomname_txt}>Lorem Ipsum</Text>
                </View>
              </View>
              {/* BEGIN TO SETUP MUSIC VIEW */}
                <View style={styles.play_music_imgBg}>
                  <Image source={require('./icon_music.png')} style={styles.play_music_img} />
                </View>
              {/* BEGIN TO SETUP MUSIC VIEW */}
            </View>
          {/* END TO SETUP BOTTOM VIEW */}
          </View>
        </ImageBackground>
      {/* END TO SETUP IMAGEBACKGROUND VIEW */}
      </Container>
    );
  }
}
// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  menu_list_item: {
    marginLeft: Dimensions.get("window").width * 0.03,
    color: 'white',
    fontSize: moderateScale(20),
    fontFamily: font_type.FontLight
  },
  menu_icon: {
    width: Dimensions.get("window").width * 0.06,
    height: Dimensions.get("window").width * 0.06,
    resizeMode: "contain"
  },
  container: {
    height: Dimensions.get("window").height,
    backgroundColor: "grey"
  },
  img_container: {
    height: Dimensions.get("window").height
  },
  list_profile_container: {
    height: Dimensions.get("window").height * 0.79,
    backgroundColor:'rgba(0,0,0,0)'
  },
  profile_data_bg: {
    flexDirection: "row",
    marginTop: Dimensions.get("window").height * 0.12,
    alignItems: "center",
    marginLeft: Dimensions.get("window").width * 0.1,
    backgroundColor:'rgba(0,0,0,0)'
  },
  profile_img: {
    width: Dimensions.get("window").width * 0.16,
    height: Dimensions.get("window").width * 0.16,
    borderRadius: Dimensions.get("window").width * 0.08,
    borderColor: 'white',
    borderWidth: 2,
    resizeMode: "cover"
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
    textAlign: "left"
  },
  nameaddress_txt: {
    flexDirection: "column",
    marginLeft: Dimensions.get("window").width * 0.03
  },
  menu_list_bg: {
    marginTop: Dimensions.get("window").height * 0.12,
    marginLeft: Dimensions.get("window").width * 0.12,
    backgroundColor:'rgba(0,0,0,0)'
  },
  menu_list_item_bg: {
    flexDirection: "row",
    marginTop: Dimensions.get("window").height * 0.04,
    alignItems: "center"
  },
  bottom_view_bg: {
    flexDirection: "row",
    height: Dimensions.get("window").height * 0.1,
    backgroundColor:'rgba(0,0,0,0)',
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: Dimensions.get("window").width * 0.02,
    paddingRight: Dimensions.get("window").width * 0.05,
    backgroundColor:'rgba(0,0,0,0)',
    marginTop: 20
  },
  bottom_image_data_bg: {
    flexDirection: "row",
    alignItems: "center"
  },
  bottom_image: {
    width: Dimensions.get("window").width * 0.12,
    height: Dimensions.get("window").width * 0.12,
    borderRadius: Dimensions.get("window").width * 0.06,
    borderWidth: 1,
    borderColor: 'white'
  },
  bottom_data_bg: {
    flexDirection: "column",
    marginLeft: Dimensions.get("window").width * 0.03
  },
  imagine_dragon_txt: {
    color: 'white',
    fontSize: moderateScale(18),
    fontFamily: font_type.FontBold
  },
  bottomname_txt: {
    color: "#919191",
    fontSize: moderateScale(13),
    fontFamily: font_type.FontLight,
    textAlign: "left"
  },
  play_music_img: {
    width: Dimensions.get("window").width * 0.04,
    height: Dimensions.get("window").width * 0.04,
    resizeMode: "contain"
  },
  bottom_with_seekbar_bg: {
    height: Dimensions.get("window").height * 0.18,
    flexDirection: "column",
    backgroundColor:'rgba(0,0,0,0)'
  },
  seekbar_bg: {
    height: Dimensions.get("window").height * 0.02,
    marginLeft: Dimensions.get("window").width * 0.06,
    marginTop: Dimensions.get("window").height * 0.04
  },
  scroll_bg: {
    height: Dimensions.get("window").height * 0.6
  },
  marker_style: {
    height: Dimensions.get("window").height * 0.03,
    width: Dimensions.get("window").height * 0.03,
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: "white"
  }
});
// END TO MAKE STYLE
