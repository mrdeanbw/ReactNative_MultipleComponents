import React, { Component } from "react";
import {Dimensions,StyleSheet,ImageBackground,Image,View,StatusBar,Platform,TouchableOpacity,BackHandler,I18nManager,Alert} from "react-native";
import {Container,Text,Content,Form,Item,Button,Input,CheckBox,Body,Header,Left,Right,Title} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";

//GUIDELINE SIZES ARE BASED ON STANDARD ~5" SCREEN

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

export default class Login11 extends Component {

  render() {
    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW

    return (
      <Container>
        {/* BEGIN TO SETUP IMAGE AS A BACKGROUND */}
        <ImageBackground style={styles.background_image} source={GlobalInclude.Image3}>

          {/* BEGIN TO SETUP HEADER VIEW */}
          <Header style={styles.header}>

              {/* BEGIN TO SETUP HEADER LEFT VIEW */}
              <Left style={styles.left}>
                <TouchableOpacity style={styles.back_arrow} onPress={() => this.props.navigation.goBack()}>
                  <FontAwesome
                    name={I18nManager.isRTL ? "angle-right" : "angle-left"}
                    size={30}
                    color="black"
                  />
                </TouchableOpacity>
              </Left>
              {/* END TO SETUP HEADER LEFT VIEW */}

              {/* BEGIN TO SETUP HEADER BODY VIEW */}
              <Body style={styles.body}>
                <Text />
              </Body>
  						{/* END TO SETUP HEADER BODY VIEW */}

  						{/* BEGIN TO SETUP HEADER RIGHT VIEW */}
              <Right style={styles.right} />
  						{/* END TO SETUP HEADER RIGHT VIEW */}
  				</Header>
  				{/* END TO SETUP HEADER VIEW */}

          {/* BEGIN TO SETUP LOGO VIEW */}
          <Image source={GlobalInclude.Image9} style={styles.logo} />
          {/* END TO SETUP LOGO VIEW */}

          {/* BEGIN TO SETUP CONNECT VIEW */}
          <Text style={styles.header_text}>
            Connect with us and see our awesome UI Kit
          </Text>
          {/* BEGIN TO SETUP LOGO VIEW */}

          {/* BEGIN TO SETUP GET STARTED VIEW */}
          <Button
            iconRight
            style={styles.gs_button}
            onPress={() => alert("GET STARTED button clicked.")}
          >
            <Text style={styles.gs_button_text}>GET STARTED</Text>
          </Button>
          {/* END TO SETUP GET STARTED VIEW */}
        </ImageBackground>
        {/* END TO SETUP IMAGE AS A BACKGROUND */}
      </Container>
    );
  }
}


// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  back_arrow: {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    marginTop: 10,
    marginLeft: 5
  },
  background_image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  header: {
    backgroundColor: 'rgba(0,0,0,0)',
    height: 55,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
        marginTop: moderateScale(25)
      }
    }),
    elevation: 0
  },
  left: {
    flex: 0.5,
    backgroundColor: "transparent"
  },
  body: {
    flex: 3,
    alignItems: "center",
    backgroundColor: "transparent"
  },
  right: {
    flex: 0.5
  },
  logo: {
    height: Dimensions.get('window').height * 0.15,
    width: Dimensions.get('window').width * 0.35,
    alignSelf: "center",
    marginTop: Dimensions.get('window').height * 0.01
  },
  header_text: {
    fontFamily: font_type.FontBold,
    backgroundColor: "transparent",
    textAlign: "center",
    alignSelf: "center",
    fontSize: moderateScale(33),
    width: Dimensions.get('window').width * 0.9,
    marginTop: Dimensions.get('window').height * 0.12,
    color: "white"
  },
  gs_button: {
    backgroundColor: "#0691ce",
    height: Dimensions.get('window').height * 0.1,
    width: Dimensions.get('window').width * 0.9,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
    bottom: Dimensions.get('window').height * 0.12
  },
  gs_button_text: {
    color: "white",
    fontSize: moderateScale(17),
    fontFamily: font_type.FontBold
  }
});
// END TO MAKE STYLE
