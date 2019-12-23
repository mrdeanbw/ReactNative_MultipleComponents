import React, { Component } from "react";
import {View,Text,Image,StatusBar,Platform,ImageBackground,Dimensions,TouchableOpacity,ListView,AsyncStorage,StyleSheet} from "react-native";
import {Container,Button,Right,Left,Content,Body,Header,Title,Footer,FooterTab,Icon} from "native-base";
import Swiper from "react-native-swiper";
import LinearGradient from "react-native-linear-gradient";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import GlobalInclude from "../../../../../Global/GlobalInclude/globalinclude.js";

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


export default class NearByDetail extends Component {
  constructor(){
      super()
      this.state = {
          Name:'',WatchCount:'',Distance:''
      }
  }
  componentWillMount() {
    AsyncStorage.multiGet(["Name", "WatchCount", "Distance"]).then(data => {
      this.setState({
        Name: data[0][1],
        WatchCount: data[1][1],
        Distance: data[2][1]
      });
    });
  }

  render() {
    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW

    //BEGIN TO SETUP DATACONTENT
    var dataContent = [
      {
        id: 1,
        cardBg:GlobalInclude.Image1,
        profileImage:GlobalInclude.Image2
      },
      {
        id: 2,
        cardBg:GlobalInclude.Image3,
        profileImage:GlobalInclude.Image4
      },
      {
        id: 3,
        cardBg: GlobalInclude.Image5,
        profileImage:GlobalInclude.Image6
      }
    ];
    //END TO SETUP DATACONTENT

    return (
      <Container style={styles.main}>
      {/* BEGIN TO SETUP HEADER VIEW */}
        <Header androidStatusBarColor={"#fa6b7b"} style={styles.header}>
        {/* BEGIN TO SETUP LEFT VIEW */}
          <Left style={styles.left}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Ionicons name="ios-arrow-round-down" size={30} color="white" />
            </TouchableOpacity>
          </Left>
        {/* END TO SETUP LEFT VIEW */}

        {/* BEGIN TO SETUP BODY VIEW */}
          <Body style={styles.body}>
            <Title style={{ color: 'white' }}>Emma Roberts</Title>
          </Body>
        {/* END TO SETUP BODY VIEW */}

        {/* BEGIN TO SETUP RIGHT VIEW */}
          <Right style={styles.right}>
            <TouchableOpacity onPress={() => alert("clicked")}>
              <SimpleLineIcons
                name="options-vertical"
                size={16}
                color="white"/>
            </TouchableOpacity>
          </Right>
        {/* END TO SETUP RIGHT VIEW */}
        </Header>
      {/* END TO SETUP HEADER VIEW */}
        <View style={styles.swipe_container}>
        {/* BEGIN TO SETUP SWIPER VIEW */}
          <Swiper
            showsButtons={false}
            autoplay={true}
            autoplayTimeout={2.5}
            activeDot={<View />}
            dot={<View />}>
            {dataContent.map((item, index) => {
              return (
                <View style={styles.slide_container} key={index}>
                  <Image source={item.cardBg} style={styles.image_container} />
                {/* BEGIN TO SETUP LINEARGRADIENT VIEW */}
                  <LinearGradient
                    locations={[0.5, 1]}
                    colors={["transparent", "black"]}
                    style={styles.shadow_bg}>
                    <View style={styles.swipe_image_count_bg}>
                      <Image source={require('./icon_album.png')} style={styles.album_icon}/>
                      <Text style={styles.gallery_img_txt}>{item.id}/3</Text>
                    </View>
                  </LinearGradient>
                {/* END TO SETUP LINEARGRADIENT VIEW */}
                </View>
              );
            })}
          </Swiper>
        {/* END TO SETUP SWIPER VIEW */}

          <View style={styles.profile_detail_bg}>
            <Image source={GlobalInclude.Image6} style={styles.profile_image}/>
            <View style={{ flexDirection: "column", marginLeft: 20 }}>
            {/* BEGIN TO SETUP NAME VIEW */}
              <Text style={styles.name_txt}>{this.state.Name}</Text>
            {/* END TO SETUP NAME VIEW */}

            {/* BEGIN TO SETUP MAP AND WATCH VIEW */}
              <View style={{ flexDirection: "row" }}>
                <Image source={require('./icon_watch.png')} style={styles.watch_icon} />
                <Text style={styles.watch_distance_txt}>
                  {this.state.WatchCount}
                </Text>
                <View style={styles.map_pin}>
                  <FontAwesome name="map-marker" size={18} color="white" />
                </View>
                <Text style={styles.watch_distance_txt}>
                  {this.state.Distance}
                </Text>
              </View>
            {/* END TO SETUP MAP AND WATCH VIEW */}
            </View>
           {/* BEGIN TO SETUP LIKE VIEW */}
            <Right style={styles.like_icon}>
              <SimpleLineIcons name="heart" size={30} color="white" />
            </Right>
          {/* END TO SETUP LIKE VIEW */}
          </View>
        </View>
      </Container>
    );
  }
}

//BEGIN TO SETUP STYLE
const styles = StyleSheet.create({
  main: {
    height: Dimensions.get("window").height * 0.9,
    width: Dimensions.get("window").width,
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'column'
  },
  header: {
    backgroundColor: "#fa6b7b",
  	height: (Dimensions.get("window").height * 0.1),
  	width: Dimensions.get("window").width,
  	flexDirection: 'row',
    borderBottomColor: "#fa6b7b",
    paddingTop: (Dimensions.get("window").width * 0.05),
  },
  left: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -15
  },
  body: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  right: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  swipe_container: {
    width: Dimensions.get("window").width ,
    height: (Dimensions.get("window").height) * 0.83,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  shadow_bg: {
    width: Dimensions.get("window").width,
    height: (Dimensions.get("window").height) * 0.83,
    bottom: 0,
    position:'absolute',
  },
  profile_image: {
    width: (Dimensions.get("window").width) * 0.14,
    height: (Dimensions.get("window").width) * 0.14,
    borderRadius: (Dimensions.get("window").width) * 0.07,
    borderColor: 'white',
    borderWidth: 1
  },
  like_icon: {
    marginTop: -(Dimensions.get("window").width * 0.02),
  },
  name_txt: {
    fontSize: moderateScale(20),
    color: 'white',
    fontFamily: font_type.FontLight,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  watch_icon: {
    width: (Dimensions.get("window").width * 0.045),
    height: (Dimensions.get("window").width * 0.045),
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: (Dimensions.get("window").width * 0.02),
  },
  watch_distance_txt: {
    fontSize: moderateScale(16),
    color: 'white',
    fontFamily: font_type.FontLight,
    backgroundColor: 'rgba(0,0,0,0)',
    marginLeft: (Dimensions.get("window").width * 0.02),
    marginTop: (Dimensions.get("window").width * 0.008),
  },
  map_pin: {
    marginLeft: Dimensions.get("window").width * 0.08,
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: (Dimensions.get("window").width * 0.012),
  },
  album_icon: {
    width: (Dimensions.get("window").width * 0.06),
    height: (Dimensions.get("window").width * 0.06),
  },
  gallery_img_txt: {
    color: 'white',
    fontSize: moderateScale(18),
    fontFamily: font_type.FontLight,
    marginLeft: 8
  },
  slide_container: {
    width: Dimensions.get("window").width,
    height: (Dimensions.get("window").height) * 0.84,
    bottom: 0,
    position:'absolute'
  },
  image_container: {
    width: Dimensions.get("window").width,
    height: (Dimensions.get("window").height) * 0.84,
    bottom: 0,
    position:'absolute',
    resizeMode: 'cover'
  },
  swipe_image_count_bg: {
    flexDirection: 'row',
    marginLeft: (Dimensions.get("window").width * 0.05),
    marginTop: (Dimensions.get("window").height) * 0.10
  },
  profile_detail_bg: {
    flexDirection: 'row',
    marginLeft: (Dimensions.get("window").width) * 0.04,
    marginRight: (Dimensions.get("window").width) * 0.04,
    position: 'absolute',
    bottom: (Dimensions.get("window").width * 0.08),
    backgroundColor: 'transparent'
  }
});
//END TO SETUP STYLE
