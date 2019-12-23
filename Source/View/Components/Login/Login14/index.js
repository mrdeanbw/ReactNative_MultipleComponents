import React, { Component } from "react";
import {Dimensions,StyleSheet,ImageBackground,Image,View,StatusBar,Platform,TouchableOpacity,BackHandler,I18nManager,Alert} from "react-native";
import {Container,Text,Content,Form,Item,Button,Input,CheckBox,Body,Header,Left,Right,Title} from "native-base";
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";
import FontAwesome from "react-native-vector-icons/FontAwesome";

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

export default class Login14 extends Component<{}> {

  render() {

    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }


    return (
      <ImageBackground source={GlobalInclude.Image1} style={styles.screen_bg}>
        <View style={styles.container}>
          <View style={styles.overlay}>
            {/* BEGIN TO SETUP HEADER VIEW */}
            <Header style={styles.header}>

                {/* BEGIN TO SETUP HEADER LEFT VIEW */}
                <Left style={styles.left}>
                  <TouchableOpacity style={styles.back_arrow} onPress={() => this.props.navigation.goBack()} >
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
                  <Text style={styles.text_title}>Sign In</Text>
                </Body>
                {/* END TO SETUP HEADER BODY VIEW */}

                {/* BEGIN TO SETUP HEADER RIGHT VIEW */}
                <Right style={styles.right} />
                {/* END TO SETUP HEADER RIGHT VIEW */}
            </Header>
            {/* END TO SETUP HEADER VIEW */}

            {/* BEGIN TO SETUP CONNECT TEXT VIEW */}
            <Text style={styles.header_text}>
              Connect with us and see our awesome UI Kit
            </Text>
            <Text style={styles.desc_text}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod
            </Text>
            {/* END TO SETUP CONNECT TEXT VIEW */}

            <Form style={styles.form}>
              {/* BEGIN TO SETUP EMAIL TEXTFIELD VIEW */}
              <Item rounded style={styles.item}>
                <Input
                  placeholderTextColor="#929597"
                  placeholder="lorem_ipsum@gmail.com"
                  style={styles.input_email}
                />
              </Item>
              {/* END TO SETUP EMAIL TEXTFIELD VIEW */}

              {/* BEGIN TO SETUP GET STARTED VIEW */}
              <TouchableOpacity info style={styles.btn_get} onPress={() => alert("Get Started button clicked.")} >
                <Text autoCapitalize="words" style={styles.button_get_text}>
                  Get Started
                </Text>
              </TouchableOpacity>
              {/* END TO SETUP GET STARTED VIEW */}
            </Form>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  screen_bg: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: "black"
  },
  back_arrow: {
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "transparent",
    width: 30
  },
  header: {
    backgroundColor: 'rgba(0,0,0,0)',
    height: Dimensions.get('window').width * 0.15,
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
  right: {
    flex: 0.5,
    backgroundColor: "transparent"
  },
  body: {
    flex: 3,
    alignItems: "center",
    backgroundColor: "transparent"
  },
  text_title: {
    color: "black",
    fontSize: moderateScale(20),
    alignSelf: "center",
    fontFamily: font_type.FontBold,
    textAlign: "center",
    justifyContent: "center"
  },
  container: {
    alignItems: "center",
    flex: 1
  },
  header_text: {
    fontFamily: font_type.FontBold,
    backgroundColor: "transparent",
    textAlign: "center",
    alignSelf: "center",
    fontSize: 30,
    width: Dimensions.get('window').width * 0.9,
    color: "#ffffff",
    marginTop: Dimensions.get('window').height * 0.1
  },
  desc_text: {
    fontFamily: font_type.FontLight,
    backgroundColor: "transparent",
    textAlign: "center",
    alignSelf: "center",
    fontSize: 16,
    width: Dimensions.get('window').width * 0.9,
    color: '#8e9396',
    marginTop: Dimensions.get('window').width * 0.05
  },
  form: {
    alignSelf: "center",
    marginTop: Dimensions.get('window').width * 0.03
  },
  input_email: {
    textAlign: "center",
    fontFamily: font_type.FontLight,
    color: "white"
  },
  button_get_text: {
    alignSelf: "center",
    fontFamily: font_type.FontBold,
    color: "white"
  },
  item: {
    justifyContent: "center",
    alignSelf: "center",
    width: Dimensions.get('window').width * 0.8,
    marginTop: Dimensions.get('window').width * 0.01,
    height: Dimensions.get('window').width * 0.12
  },
  btn_get: {
    backgroundColor: "#ff6347",
    alignSelf: "center",
    width: Dimensions.get('window').width * 0.8,
    marginTop: Dimensions.get('window').width * 0.05,
    height: Dimensions.get('window').width * 0.12,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center"
  }
});
// END TO MAKE STYLE
