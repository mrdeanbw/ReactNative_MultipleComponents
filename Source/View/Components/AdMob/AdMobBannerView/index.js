import React, { Component } from "react";
import {Text,Image,StatusBar,Platform,ImageBackground,Dimensions,StyleSheet,TouchableOpacity,View,BackHandler,I18nManager} from "react-native";
import {Container,Button,Right,Left,Content,Body,Header,Icon,Title} from "native-base";
import { AdMobBanner } from "react-native-admob";
import FontAwesome from "react-native-vector-icons/FontAwesome";

let admob_banner_id = ''
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

export default class BannerAd extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW

    return (
      <View style={styles.main}>
      {/* BEGIN TO SETUP HEADER VIEW */}
        <Header style={styles.header}>
      {/* BEGIN TO SETUP LEFT VIEW */}
          <Left style={styles.left}>
            <TouchableOpacity style={styles.back_arrow} onPress={() => this.props.navigation.goBack()}>
              <FontAwesome
                name={I18nManager.isRTL ? "angle-right" : "angle-left"}
                size={25}
                color="white"/>
            </TouchableOpacity>
          </Left>
      {/* END TO SETUP LEFT VIEW */}

      {/* BEGIN TO SETUP BODY VIEW */}
          <Body style={styles.body}>
            <Text style={styles.text_title}>Banner Ad</Text>
          </Body>
      {/* END TO SETUP BODY VIEW */}
          <Right style={styles.right} />
        </Header>
      {/* END TO SETUP HEADER VIEW */}

      {/* BEGIN TO SETUP ADMOBBANNER VIEW */}
        <Content style={styles.container}>
          <View style={styles.main_view}>
        {/* BEGIN TO SETUP BANNER VIEW */}
            <AdMobBanner
              style={styles.ad_view}
              adSize="banner"
              adUnitID={admob_banner_id}/>
        {/* END TO SETUP BANNER VIEW */}

        {/* BEGIN TO SETUP LARGEBANNER VIEW */}
            <AdMobBanner
              style={styles.ad_view}
              adSize="largeBanner"
              adUnitID={admob_banner_id} />
        {/* END TO SETUP LARGEBANNER VIEW */}

        {/* BEGIN TO SETUP MEDIUMRECTANGLE VIEW */}
            <AdMobBanner
              style={styles.ad_view}
              adSize="mediumRectangle"
              adUnitID={admob_banner_id}/>
        {/* END TO SETUP MEDIUMRECTANGLE VIEW */}
          </View>

          {admob_banner_id == '' ?
              <Text style={{textAlign:'center',marginTop:-70}}>Please add AdMob Banner Id to see google ad.</Text>
          : null
          }

        </Content>
      {/* END TO SETUP ADMOBBANNER VIEW */}
      </View>
    );
  }
}
// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  main: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: 'white',
    flexDirection: "column"
  },
  back_arrow: {
    width: 30,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  header: {
    backgroundColor: "#ff6347",
    height: Dimensions.get("window").height * 0.1,
    borderBottomWidth: 0,
    paddingTop: Dimensions.get("window").height * 0.03,
    elevation: 0,
    paddingLeft: Dimensions.get("window").width * 0.05,
    paddingRight: Dimensions.get("window").width * 0.05
  },
  left: {
    flex: 0.5,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  body: {
    flex: 3,
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0)'
  },
  text_title: {
    color: "white",
    fontSize: moderateScale(17),
    marginTop: Dimensions.get("window").height * 0.001,
    alignSelf: "center",
    fontFamily: font_type.FontBold
  },
  right: {
    flex: 0.5
  },
  container: {
    backgroundColor: 'white'
  },
  main_view: {
    alignSelf: "center",
    alignItems: "center"
  },
  ad_view: {
    marginTop: Dimensions.get("window").height * 0.02,
    marginBottom: Dimensions.get("window").height * 0.02
  }
});
// END TO MAKE STYLE
