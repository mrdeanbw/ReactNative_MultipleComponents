import React, { Component } from "react";
import {Text,Image,StatusBar,Platform,Dimensions,TouchableOpacity,View,TextInput,BackHandler,StyleSheet,I18nManager} from "react-native";
import {Container,Button,Right,Left,Content,Body,Footer,FooterTab,Icon,Header} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ContainTabNearBy from "./ContainTabNearBy.js";
import ContainTabCategory from "./ContainTabCategory.js";
import ContainTabDiscovery from "./ContainTabDiscovery.js";
import ContainTabGift from "./ContainTabGift.js";
import ContainTabProfile from "./ContainTabProfile.js";

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

export default class DrawerEcomTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "Discovery"
    };
  }



  renderSelectedTab() {
    switch (this.state.selectedTab) {
      case "Home":
        return <ContainTabNearBy {...this.props} />;
        break;
      case "Category":
        return <ContainTabCategory {...this.props} />;
        break;
      case "Discovery":
        return <ContainTabDiscovery {...this.props} />;
        break;
      case "Gift":
        return <ContainTabGift {...this.props} />;
        break;
      case "Profile":
        return <ContainTabProfile {...this.props} />;
        break;
      default:
    }
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
      <Container style={styles.main}>
        <View style={styles.header}>

      {/* BEGIN TO SETUP SEARCH VIEW */}
          <View style={styles.searcg_bar_bg}>
          <Ionicons
              name="ios-search"
              size={22}
              color="#a0a0a0"
              style={styles.search_icon} />
            <TextInput
              style={styles.search_input}
              placeholder="I'm looking for..."
              placeholderTextColor="#a0a0a0"
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              keyboardType="default"
              selectionColor="#a0a0a0"/>
              </View>
          {/* END TO SETUP SEARCH VIEW */}

          {/* BEGIN TO SETUP CART VIEW */}
            <TouchableOpacity style={styles.cart_img_bg} onPress={() => alert("Cart Button Click")}>
              <Image style={styles.cart_image} source={require('./cart_icon.png')} />
            </TouchableOpacity>
          {/* END TO SETUP CART VIEW */}
        </View>
          {/* BEGIN TO SETUP SELECTEDTAB VIEW */}
            <Content>{this.renderSelectedTab()}</Content>
          {/* END TO SETUP SELECTEDTAB VIEW */}
          <Footer>
            <FooterTab style={styles.footer_tab_bg}>
            {/* BEGIN TO SETUP HOMETAB VIEW */}
              <Button vertical onPress={() => this.setState({ selectedTab: "Home" })}>
                {this.state.selectedTab == "Home" ? (
                  <Image source={require('./icon_active_home.png')} style={styles.tab_icon} />
                ) : (
                  <Image source={require('./icon_normal_home.png')} style={styles.tab_icon} />
                )}
                <Text
                  style={
                    this.state.selectedTab == "Home"
                      ? [
                          styles.active_tab_text,
                          { marginTop: Dimensions.get("window").width * 0.01 }
                        ]
                      : [
                          styles.normal_tab_text,
                          { marginTop: Dimensions.get("window").width * 0.01 }
                        ]
                  }>
                  Nearby
                </Text>
              </Button>
            {/* END TO SETUP HOMETAB VIEW */}

            {/* BEGIN TO SETUP CATEGORYTAB VIEW */}
              <Button vertical onPress={() => this.setState({ selectedTab: "Category" })}>
                {this.state.selectedTab == "Category" ? (
                  <Image source={require('./icon_active_category.png')} style={styles.tab_icon} />
                ) : (
                  <Image source={require('./icon_normal_category.png')} style={styles.tab_icon} />
                )}
                <Text
                  style={
                    this.state.selectedTab == "Category"
                      ? [
                          styles.active_tab_text,
                          { marginTop: Dimensions.get("window").width * 0.01 }
                        ]
                      : [
                          styles.normal_tab_text,
                          { marginTop: Dimensions.get("window").width * 0.01 }
                        ]
                  }>Category
                </Text>
              </Button>
            {/* END TO SETUP CATEGORYTAB VIEW */}

            {/* BEGIN TO SETUP DISCOVERYTAB VIEW */}
              <Button vertical onPress={() => this.setState({ selectedTab: "Discovery" })}>
                {this.state.selectedTab == "Discovery" ? (
                  <Ionicons
                    name="ios-albums"
                    size={24}
                    color="#00bff3"
                    style={{ justifyContent: "center" }}/>
                  ) : (
                  <Ionicons name="ios-albums" size={24} color="#929292" />
                  )}
                  <Text
                    style={
                      this.state.selectedTab == "Discovery"
                        ? styles.active_tab_text
                        : styles.normal_tab_text
                    }>Discovery
                </Text>
              </Button>
            {/* END TO SETUP DISCOVERYTAB VIEW */}

            {/* BEGIN TO SETUP GIFTTAB VIEW */}
              <Button vertical onPress={() => this.setState({ selectedTab: "Gift" })}>
                {this.state.selectedTab == "Gift" ? (
                  <Image source={require('./icon_active_gift.png')} style={styles.tab_icon} />
                ) : (
                  <Image source={require('./icon_normal_gift.png')} style={styles.tab_icon} />
                )}
                <Text
                  style={
                    this.state.selectedTab == "Gift"
                      ? [
                          styles.active_tab_text,
                          { marginTop: Dimensions.get("window").width * 0.01 }
                        ]
                      : [
                          styles.normal_tab_text,
                          { marginTop: Dimensions.get("window").width * 0.01 }
                        ]
                  }>Gift
                </Text>
              </Button>
            {/* END TO SETUP GIFTTAB VIEW */}

            {/* BEGIN TO SETUP PROFILETAB VIEW */}
              <Button vertical onPress={() => this.setState({ selectedTab: "Profile" })}>
                {this.state.selectedTab == "Profile" ? (
                  <EvilIcons name="user" size={30} color="#00bff3" />
                ) : (
                  <EvilIcons name="user" size={30} color="#929292" />
                )}
                <Text
                  style={
                    this.state.selectedTab == "Profile"
                      ? styles.active_tab_text
                      : styles.normal_tab_text
                  }>Profile
                </Text>
              </Button>
            {/* END TO SETUP PROFILETAB VIEW */}
            </FooterTab>
          </Footer>
        </Container>
    );
  }
}
// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  main: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'column'
  },
  header_sec: {
    backgroundColor: "#ff6347",
    height: Dimensions.get("window").height * 0.1,
    borderBottomWidth: 0,
    paddingTop: (Dimensions.get("window").height * 0.05),
    elevation: 0,
    paddingLeft: (Dimensions.get("window").width* 0.05),
    paddingRight: (Dimensions.get("window").width* 0.05),
  },
  back_arrow: {
    width:30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  left: {
    flex: 0.5,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  header: {
    backgroundColor: '#ff6347',
    height: (Dimensions.get("window").height * 0.1),
    width: Dimensions.get("window").width,
    flexDirection: 'row',
    borderBottomColor: 'white',
    justifyContent: 'space-between',
    paddingTop: (Dimensions.get("window").height * 0.045),
  },
  tab_icon: {
    height: (Dimensions.get("window").height * 0.03),
    width: (Dimensions.get("window").height * 0.03),
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  active_tab_text: {
    fontSize: moderateScale(12),
    color:'#00bff3'
  },
  normal_tab_text: {
    fontSize: moderateScale(12),
    color:'#929292'
  },
  search_input: {
    color: "#a0a0a0",
    fontSize: moderateScale(16),
    fontFamily: font_type.FontLight,
    width: (Dimensions.get("window").width * 0.75),
    marginLeft: (Dimensions.get("window").width * 0.02),
    textAlignVertical: 'top',
    ...Platform.select({
      ios: {
      },
      android: {
        paddingTop: 5,
        paddingBottom: 0
			}
    }),
  },
  search_icon: {
    marginLeft: (Dimensions.get("window").width) * 0.02
  },
  cart_img_bg: {
    width:(Dimensions.get("window").width * 0.15),
    marginBottom: (Dimensions.get("window").height * 0.01),
    alignItems: 'center',
    justifyContent: 'center'
  },
  cart_image: {
    width: Dimensions.get("window").width * 0.075,
    height: Dimensions.get("window").width * 0.075,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  searcg_bar_bg: {
    alignItems: 'center',
    flexDirection: 'row',
    width: Dimensions.get("window").width * 0.82,
    backgroundColor: '#f3f3f3',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#e1e1e1",
    marginLeft: (Dimensions.get("window").width * 0.03),
    marginBottom: (Dimensions.get("window").height * 0.01)
  },
  footer_tab_bg: {
    backgroundColor: 'white'
  }

});
// END TO MAKE STYLE
