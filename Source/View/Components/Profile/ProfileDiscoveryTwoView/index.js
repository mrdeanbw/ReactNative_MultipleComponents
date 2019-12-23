import React, { Component } from "react";
import {Text,Image,StatusBar,Platform,ImageBackground,Dimensions,StyleSheet,TouchableOpacity,ListView,View,BackHandler,I18nManager} from "react-native";
import {Container,Button,Right,Left,ListItem,Content,Body,Header,Title,Footer,FooterTab,Icon} from "native-base";
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import CarouselList from "./CarouselList.js";

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

export default class ProfileDiscoveryTwo extends Component {
  constructor(props) {
    super(props);
    // BEGIN TO SETUP STATE
    this.state = {
      selectedTab: "Tab 3"
    };
    // END TO SETUP STATE
  }

  // BEGIN TO SETUP SELECTED TAB VIEW
  renderSelectedTab() {
    switch (this.state.selectedTab) {
      case "Tab 1":
        return <CarouselList />;
        break;
      case "Tab 2":
        return <CarouselList />;
        break;
      case "Tab 3":
        return <CarouselList />;
        break;
      case "Tab 4":
        return <CarouselList />;
        break;
      case "Tab 5":
        return <CarouselList />;
        break;
      default:
    }
  }
  // END TO SETUP SELECTED TAB VIEW

  render() {
    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW

    return (
      <Container style={styles.main}>
      {/* BEGIN TO SETUP HEADER VIEW */}
        <Header style={styles.header}>
          {/* BEGIN TO SETUP HEADER LEFT VIEW */}
          <Left style={styles.left}>
            <TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
              <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={25} color="black"/>
            </TouchableOpacity>
          </Left>
          {/* END TO SETUP HEADER LEFT VIEW */}

          {/* BEGIN TO SETUP HEADER BODY VIEW */}
          <Body style={styles.body}>
            <Text style={styles.header_txt}>Profile</Text>
          </Body>
          {/* END TO SETUP HEADER BODY VIEW */}

          {/* BEGIN TO SETUP HEADER RIGHT VIEW */}
          <Right style={styles.right}>
            <Button transparent />
          </Right>
          {/* END TO SETUP HEADER RIGHT VIEW */}
        </Header>
      {/* END TO SETUP HEADER VIEW */}
        <View style={styles.main}>{this.renderSelectedTab()}</View>
      {/* BEGIN TO SETUP FOOTERTAB VIEW */}
        <FooterTab style={styles.footer_tab_bg}>
          {/* BEGIN TO SETUP NEARBY BUTTON VIEW */}
          <Button vertical active={this.setState.selectedTab === "Tab 1"} onPress={() => this.setState({ selectedTab: "Tab 1" })}>
            {this.state.selectedTab == "Tab 1" ? (
              <View style={{ justifyContent: "center" }}>
                <MaterialCommunityIcons name="map-marker-radius" size={22} color="#0691ce"/>
              </View>) : (
              <View style={{ justifyContent: "center" }}>
                <MaterialCommunityIcons name="map-marker-radius" size={22} color="#929292"/>
              </View>
            )}
            <Text style={[{ marginTop: 5 }, styles.footer_title]}>Tab 1</Text>
          </Button>
          {/* END TO SETUP NEARBY BUTTON VIEW */}

          {/* BEGIN TO SETUP MESSAGE BUTTON VIEW */}
          <Button vertical onPress={() => this.setState({ selectedTab: "Tab 2" })}>
            {this.state.selectedTab == "Tab 2" ? (
              <Image source={require('./message_icon.png')} style={styles.message_icon}/>
            ) : (
              <Image source={require('./message_icon.png')} style={styles.message_icon} />
            )}
            <Text style={styles.footer_title}>Tab 2</Text>
          </Button>
          {/* END TO SETUP MESSAGE BUTTON VIEW */}

          {/* BEGIN TO SETUP DISCOVERY BUTTON VIEW */}
          <Button vertical onPress={() => this.setState({ selectedTab: "Tab 3" })}>
            {this.state.selectedTab == "Tab 3" ? (
              <View style={{ justifyContent: "center" }}>
                <Ionicons name="ios-albums" size={22} color="#0691ce" />
              </View>) : (
              <View style={{ justifyContent: "center" }}>
                <Ionicons name="ios-albums" size={22} color="#929292" />
              </View>)}
            <Text style={[{ marginTop: 5 }, styles.footer_title]}>
              Tab 3
            </Text>
          </Button>
          {/* END TO SETUP DISCOVERY BUTTON VIEW */}

          {/* BEGIN TO SETUP FAVORITE BUTTON VIEW */}
          <Button vertical onPress={() => this.setState({ selectedTab: "Tab 4" })}>
            {this.state.selectedTab == "Tab 4" ? (
              <View style={{ justifyContent: "center" }}>
                <EvilIcons name="heart" size={28} color="#0691ce" />
              </View>) : (
              <View style={{ justifyContent: "center" }}>
                <EvilIcons name="heart" size={28} color="#929292" />
              </View>)}
            <Text style={[{ marginTop: 5 }, styles.footer_title]}>
              Tab 4
            </Text>
          </Button>
          {/* END TO SETUP FAVORITE BUTTON VIEW */}

          {/* BEGIN TO SETUP PROFILE BUTTON VIEW */}
          <Button vertical onPress={() => this.setState({ selectedTab: "Tab 5" })}>
            {this.state.selectedTab == "Tab 5" ? (
              <View style={{ justifyContent: "center" }}>
                <EvilIcons name="user" size={28} color="#0691ce" />
              </View>) : (
              <View style={{ justifyContent: "center" }}>
                <EvilIcons name="user" size={28} color="#929292" />
              </View>)}
            <Text style={[{ marginTop: 5 }, styles.footer_title]}>Tab 5</Text>
          </Button>
          {/* END TO SETUP PROFILE BUTTON VIEW */}
        </FooterTab>
     {/* END TO SETUP FOOTERTAB VIEW */}
      </Container>
    );
  }
}
// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  main: {
    height: Dimensions.get('window').height*0.78,
    width: Dimensions.get('window').width,
    backgroundColor:'rgba(0,0,0,0)',
    flexDirection: 'column'
  },
  header: {
    backgroundColor: 'rgba(0,0,0,0)',
    height: Dimensions.get('window').height * 0.1,
    borderBottomWidth: 0,
    paddingTop: (Dimensions.get('window').height * 0.03),
    elevation: 0,
    paddingLeft: (Dimensions.get('window').width * 0.05),
    paddingRight: (Dimensions.get('window').width * 0.05),
  },
  left: {
    flex: 0.5
  },
  body: {
    flex: 3,
    alignItems: 'center'
  },
  back_arrow:{
    alignItems: 'flex-start',
    width: 30,
  },
  right: {
    flex: 0.5
  },
  header_txt: {
    color: "#363636",
    fontSize: moderateScale(18),
    fontFamily: font_type.FontBold,
    textAlign: 'center'
  },
  footer_title: {
    fontSize: moderateScale(12)
  },
  message_icon: {
    height: (Dimensions.get('window').width * 0.04),
    width: (Dimensions.get('window').width * 0.045),
    justifyContent: 'center'
  },
  footer_tab_bg: {
    backgroundColor: 'white',
    marginBottom:0
  }
});
// END TO MAKE STYLE
