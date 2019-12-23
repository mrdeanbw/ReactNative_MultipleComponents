import React, { Component } from "react";
import {Text,View,Image,StatusBar,Platform,ImageBackground,Dimensions,StyleSheet,TouchableOpacity,ListView,Alert} from "react-native";
import {Container,Button,Icon,Right,Header,Left,Body,Title} from "native-base";
import RNSwiper from "./RNSwiper.js";
import LinearGradient from "react-native-linear-gradient";
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";

const activeindicator = 0;

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

export default class CarouselListView extends Component {
  constructor(props) {
    super(props);
    // BEGIN TO SETUP STATE
    this.state = {
      index: ""
    };
    // END TO SETUP STATE

    const dataObjects = [{ flag: true }, { flag: false }, { flag: false }];
    const rowHasChanged = (r1, r2) => r1 !== r2;

    //BEGIN DATASOURCE CONFIGURED
    const ds = new ListView.DataSource({ rowHasChanged });
    this.state = {
      dataSource: ds.cloneWithRows(dataObjects),
      activeindicator: 0
    };
    //END DATASOURCE CONFIGURED
  }

  //BEGIN ONSWIPEUP METHOD
  onSwipeUp(index) {
    console.log("first clicked.");
    console.log(index);
  }
  //END ONSWIPEUP METHOD

  //BEGIN ONSWIPEDOWN METHOD
  onSwipeDown(index) {
    console.log("second clicked.");
    console.log(index);
  }
  //END ONSWIPEDOWN METHOD

  //BEGIN ONSWIPELEFT METHOD
  onSwipeLeft(index) {
    console.log("third clicked.");
    this.setState({ activeindicator: this.state.activeindicator + 1 });
    console.log(index);
  }
  //END ONSWIPELEFT METHOD

  //BEGIN ONSWIPERIGHT METHOD
  onSwipeRight(index) {
    console.log("forth clicked.");
    this.setState({ activeindicator: this.state.activeindicator - 1 });
    console.log(index);
  }
  //END ONSWIPERIGHT METHOD

  //BEGIN ONPRESS METHOD
  onPress(index) {
    console.log("Third clicked.");
    console.log(index);
  }
  //END ONPRESS METHOD


  render() {
    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW

    var data = [
      {
        id: 1,
        image: require('./background_img_1.jpg'),
        profileImg: GlobalInclude.Image10,
        name: "Lorem Ipsum",
        designation: "Graphic design",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        flag: true
      },
      {
        id: 2,
        image: require('./background_img_2.jpg'),
        profileImg: GlobalInclude.Image1,
        name: "Lorem Ipsum",
        designation: "Graphic design",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: 3,
        image: require('./background_img_3.jpg'),
        profileImg: GlobalInclude.Image4,
        name: "Lorem Ipsum",
        designation: "Graphic design",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: 4,
        image: require('./background_img_4.jpg'),
        profileImg: GlobalInclude.Image5,
        name: "Lorem Ipsum",
        designation: "Graphic design",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ];

    return (
      <Container style={{ backgroundColor: "#2d324f" }}>
        <View style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <View style={styles.slidesec}>
          {/* BEGIN TO SETUP SWIPER VIEW */}
            <RNSwiper
              minimumScale={0.9}
              minimumOpacity={0.5}
              overlap={0}
              cardWidth={Dimensions.get('window').width * 0.8}
              duration={100}
              swipeThreshold={100}
              onSwipeUp={this.onSwipeUp}
              onSwipeDown={this.onSwipeDown}
              onSwipeRight={() => this.onSwipeRight()}
              onSwipeLeft={() => this.onSwipeLeft()}
              onPress={this.onPress}
              swiperDetails={data}>
              {data.map((item, index) => {
                return (
                  <View style={styles.slide} key={index}>
                    {/* BEGIN TO SETUP slider_image VIEW */}
                    <Image source={item.image} style={styles.slider_image} />
                    {/* END TO SETUP slider_image VIEW */}

                    {/* BEGIN TO SETUP PROFILEIMAGE VIEW */}
                    <Image source={item.profileImg} style={styles.profile_img} />
                    {/* END TO SETUP PROFILEIMAGE VIEW */}

                    {/* BEGIN TO SETUP NAME AND DESIGNATION VIEW */}
                    <Text style={styles.name_txt}>{item.name}</Text>
                    <Text style={styles.designation_txt}>
                      {item.designation}
                    </Text>
                    {/* END TO SETUP NAME AND DESIGNATION VIEW */}

                    {/* BEGIN TO SETUP DESCRIPTION VIEW */}
                    <View style={styles.description_bg}>
                      <Text numberOfLines={4} style={styles.description_txt}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut quis urna ultrices, egestas ex in, accumsan turpis.
                        Donec feugiat eu leo vitae faucibus.
                      </Text>
                      <LinearGradient locations={[0.5, 1]} colors={["transparent", "#0004"]} style={styles.shadow_bg}/>
                    </View>
                    {/* END TO SETUP DESCRIPTION VIEW */}

                    {/* BEGIN TO SETUP FOLLOWING AND MESSAGE BUTTON VIEW */}
                    <View style={styles.btn_sec}>
                      <TouchableOpacity style={styles.following_bg} onPress={() => alert("FOLLOWING BUTTON CLICK")}>
                        <Text style={styles.following_txt}>FOLLOWING</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.message_bg} onPress={() => alert("MESSAGE BUTTON CLICK")}>
                        <Text style={styles.message_txt}>MESSAGE</Text>
                      </TouchableOpacity>
                    </View>
                    {/* END TO SETUP FOLLOWING AND MESSAGE BUTTON VIEW */}
                  </View>
                );
              })}
            </RNSwiper>
          {/* END TO SETUP SWIPER VIEW */}
          </View>
        </View>
      </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  slidesec:{
			height: (Dimensions.get('window').height*0.90),
	    width: (Dimensions.get('window').width),
	    backgroundColor: '#e6e6e6',
	    flexDirection: 'column',
  },
  slide: {
		height: (Dimensions.get('window').height*0.65),
		width: (Dimensions.get('window').width*0.8),
		backgroundColor: 'rgba(0,0,0,0)',
	  marginTop: (Dimensions.get('window').height) * 0.06,
	  alignItems: 'center',
	  alignSelf: 'center',
		elevation: 5, // android shadow
		shadowColor: '#000',
		shadowOpacity: 0.5,
		shadowOffset: {
		height: 5,
		width: 0,
		},
	},
  slider_image: {
		resizeMode: 'cover',
		height: (Dimensions.get('window').height * 0.65),
	  width: (Dimensions.get('window').width*0.8),
		alignSelf:'center',
	  bottom: 0,
	  position: 'absolute',
	  borderRadius: 10
	},
  profile_img: {
    width: (Dimensions.get('window').width) * 0.20,
    height: (Dimensions.get('window').width) * 0.20,
    borderRadius: (Dimensions.get('window').width) * 0.10,
    borderWidth: 2,
    borderColor: 'white',
    alignSelf: 'center',
    marginTop: (Dimensions.get('window').height) * 0.06,
  },
  name_txt: {
    marginTop: (Dimensions.get('window').height) * 0.02,
    color: 'white',
    fontFamily: font_type.FontBold,
    fontSize: moderateScale(20),
    textAlign: 'center'
  },
  designation_txt: {
    marginTop: (Dimensions.get('window').height) * 0.003,
    color: "#FFFFFF80",
    fontFamily: font_type.FontBold,
    fontSize: moderateScale(14),
    textAlign: 'center'
  },
  description_txt: {
    color: 'white',
    fontSize: moderateScale(15),
    fontFamily: font_type.FontBold,
    width: (Dimensions.get('window').width) * 0.60,
    alignSelf: 'center',
    textAlign: 'center',
    marginRight: (Dimensions.get('window').width) * 0.045,
  },
  following_txt: {
		color: 'white',
		fontSize: moderateScale(12),
		fontFamily:  font_type.FontBold,
		paddingTop: (Dimensions.get('window').height) * 0.01,
		paddingBottom: (Dimensions.get('window').height) * 0.01
	},
  message_txt: {
		color: "#0691ce",
		fontSize: moderateScale(12),
		fontFamily: font_type.FontBold,
		paddingTop: (Dimensions.get('window').height) * 0.01,
		paddingBottom: (Dimensions.get('window').height) * 0.01
	},
  following_bg: {
		width: (Dimensions.get('window').width) * 0.31,
		borderRadius: 20,
		backgroundColor: "#0691ce",
		justifyContent: 'center',
		alignItems: 'center'
	},
  message_bg: {
		width: (Dimensions.get('window').width) * 0.31,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: "#0691ce",
		backgroundColor: 'rgba(0,0,0,0)',
		justifyContent: 'center',
		alignItems: 'center'
	},
  description_bg: {
		width: (Dimensions.get('window').width) * 0.8,
		height: (Dimensions.get('window').height) * 0.15,
		marginTop: (Dimensions.get('window').height) * 0.03
	},
  shadow_bg: {
		width: (Dimensions.get('window').width) * 0.8,
		height: (Dimensions.get('window').height) * 0.15,
		position: 'absolute',
		bottom:0
	},
  btn_sec: {
		width: (Dimensions.get('window').width) * 0.66,
		alignSelf: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: (Dimensions.get('window').height) * 0.04
	}

});
// END TO MAKE STYLE
