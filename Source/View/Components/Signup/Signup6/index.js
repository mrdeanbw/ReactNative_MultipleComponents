import React, { Component } from "react";
import {TouchableHighlight,Modal,Dimensions,StyleSheet,ImageBackground,Image,View,StatusBar,Platform,TouchableOpacity,BackHandler,I18nManager,Alert} from "react-native";
import {Container,Text,Content,Form,Item,Button,Input,CheckBox,Body,Footer,Header,Left,Right,Title} from "native-base";
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";

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

export default class Signup6 extends Component {

  state = {
    modalVisible: false,
    checked: false
  };
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
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
      <ImageBackground source={GlobalInclude.Image5} style={styles.screen_bg}>

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
            <Body style={styles.body} />
            {/* END TO SETUP HEADER BODY VIEW */}

            {/* BEGIN TO SETUP HEADER RIGHT VIEW */}
            <Right style={styles.right} />
            {/* END TO SETUP HEADER RIGHT VIEW */}
        </Header>
        {/* END TO SETUP HEADER VIEW */}

        <View style={styles.container}>
          {/* BEGIN TO SETUP PROFILE VIEW */}
          <Image source={GlobalInclude.Image5} style={styles.logo_style} />
          {/* END TO SETUP PROFILE VIEW */}

          {/* BEGIN TO SETUP CONNECT TEXT VIEW */}
          <Text style={styles.header_text}>
            Connect with us and see our awesome UI Kit
          </Text>

          <Text style={styles.desc_text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.
          </Text>
          {/* END TO SETUP CONNECT TEXT VIEW */}

          <Form style={styles.form}>
            {/* BEGIN TO SETUP LOGIN BUTTON VIEW */}
            <TouchableHighlight info style={styles.button_login} onPress={() => alert("Login button clicked.")} >
              <Text autoCapitalize="words" style={styles.login_button}>
                Login
              </Text>
            </TouchableHighlight>
            {/* END TO SETUP LOGIN BUTTON VIEW */}

            {/* BEGIN TO SETUP SIGNUP BUTTON VIEW */}
            <TouchableHighlight info style={styles.button_sign_up} onPress={() => { this.setModalVisible(true); }} >
              <Text autoCapitalize="words" style={styles.signup_button}>
                Sign Up
              </Text>
            </TouchableHighlight>
            {/* END TO SETUP SIGNUP BUTTON VIEW */}

          </Form>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}
        >
          <View style={styles.view_2}>
            <View style={styles.view_3}>
              {/* BEGIN TO SETUP CLOSE BUTTON VIEW */}
              <View style={styles.view_4}>
                <TouchableHighlight onPress={() => {this.setModalVisible(!this.state.modalVisible); }} >
                  <Ionicons name="md-close" size={30} color="black" />
                </TouchableHighlight>
              </View>
              {/* END TO SETUP CLOSE BUTTON VIEW */}

              {/* BEGIN TO SETUP TITLE VIEW */}
              <Text style={styles.dialog_title}>Sign Up</Text>
              {/* END TO SETUP TITLE VIEW */}

              {/* BEGIN TO SETUP FULL NAME TEXTFIELD VIEW */}
              <Item rounded style={styles.item_name}>
                <Input
                  placeholderTextColor={'#cccccc'}
                  textAlign={I18nManager.isRTL ? "right" : "left"}
                  placeholder="Full Name"
                  style={styles.input_name}
                />
              </Item>
              {/* END TO SETUP FULL NAME TEXTFIELD VIEW */}

              {/* BEGIN TO SETUP EMAIL TEXTFIELD VIEW */}
              <Item rounded style={styles.item_name}>
                <Input
                  placeholderTextColor={'#cccccc'}
                  textAlign={I18nManager.isRTL ? "right" : "left"}
                  placeholder="Email"
                  keyboardType="email-address"
                  style={styles.input_name}
                />
              </Item>
              {/* END TO SETUP EMAIL TEXTFIELD VIEW */}

              {/* BEGIN TO SETUP PASSWORD TEXTFIELD VIEW */}
              <Item rounded style={styles.item_name}>
                <Input
                  placeholderTextColor={'#cccccc'}
                  textAlign={I18nManager.isRTL ? "right" : "left"}
                  placeholder="Password"
                  secureTextEntry={true}
                  style={styles.input_name}
                />
              </Item>
              {/* END TO SETUP PASSWORD TEXTFIELD VIEW */}

              {/* BEGIN TO SETUP RE-PASSWORD TEXTFIELD VIEW */}
              <Item rounded style={styles.item_name}>
                <Input
                  placeholderTextColor={'#cccccc'}
                  textAlign={I18nManager.isRTL ? "right" : "left"}
                  placeholder="Confirm password"
                  secureTextEntry={true}
                  style={styles.input_name}
                />
              </Item>
              {/* END TO SETUP RE-PASSWORD TEXTFIELD VIEW */}

              {/* BEGIN TO SETUP SIGNUP BUTTON VIEW */}
              <TouchableOpacity style={styles.button_dialog_signup} onPress={() => alert("Sign Up button clicked.")} >
                <Text autoCapitalize="words" style={styles.btn_txt}>
                  Sign Up
                </Text>
              </TouchableOpacity>
              {/* END TO SETUP SIGNUP BUTTON VIEW */}

              {/* BEGIN TO SETUP TERMS AND CONDITION VIEW */}
              <Text autoCapitalize="words" style={styles.terms}>
                Clicking Sign Up means that you agree to the
              </Text>

              <View style={{flexDirection: "row",width: Dimensions.get('window').width * 0.6,alignItems: "center",alignSelf: "center"}}>
                <TouchableOpacity onPress={() => alert("Terms & Condition button clicked.")}>
                  <Text style={styles.terms_two}>Terms & Conditions</Text>
                </TouchableOpacity>
                <Text style={styles.terms_three}> and</Text>
                <TouchableOpacity onPress={() => alert("Privacy Policy button clicked.")}>
                  <Text style={styles.terms_two}> Privacy Policy.</Text>
                </TouchableOpacity>
              </View>
              {/* END TO SETUP TERMS AND CONDITION VIEW */}

            </View>
          </View>
        </Modal>
      </ImageBackground>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  screen_bg: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  header: {
    backgroundColor: "transparent",
    height: 56,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
        paddingTop: 10
      }
    }),
    elevation: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  left: {
    flex: 0.5,
    backgroundColor: "transparent"
  },
  back_arrow: {
    width: 30,
    alignItems: "center"
  },
  body: {
    flex: 2,
    alignItems: "center",
    backgroundColor: "transparent"
  },
  right: {
    flex: 0.5
  },
  container: {
    alignItems: "center"
  },
  logo_style: {
    alignSelf: "center",
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').width * 0.3
  },
  header_text: {
    fontFamily: font_type.FontBold,
    backgroundColor: "transparent",
    textAlign: "center",
    alignSelf: "center",
    fontSize: 30,
    width: Dimensions.get('window').width * 0.9,
    color: "white",
    marginTop: Dimensions.get('window').height * 0.08
  },
  desc_text: {
    fontFamily: font_type.FontLight,
    backgroundColor: "transparent",
    textAlign: "center",
    alignSelf: "center",
    fontSize: 16,
    width: Dimensions.get('window').width * 0.65,
    color: "white",
    marginTop: Dimensions.get('window').height * 0.03
  },
  form: {
    alignSelf: "center",
    marginTop: Dimensions.get('window').height * 0.05
  },
  button_login: {
    backgroundColor: '#ff6347',
    alignSelf: "center",
    borderRadius: 40,
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').height * 0.1,
    justifyContent: "center"
  },
  login_button: {
    fontFamily: font_type.FontBold,
    color: "white",
    textAlign: "center"
  },
  button_sign_up: {
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "transparent",
    alignSelf: "center",
    marginTop: Dimensions.get('window').height * 0.03,
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').height * 0.1,
    borderRadius: 40,
    justifyContent: "center"
  },
  signup_button: {
    fontFamily: font_type.FontBold,
    color: "white",
    textAlign: "center"
  },
  view_2: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: "center",
    justifyContent: "center"
  },
  view_3: {
    borderRadius: 5,
    width: Dimensions.get('window').width * 0.95,
    height: Dimensions.get('window').height * 0.7,
    backgroundColor: "white",
    alignSelf: "center",
    justifyContent: "center"
  },
  view_4: {
    backgroundColor: "transparent",
    width: Dimensions.get('window').width * 0.85,
    top: 0,

    ...(I18nManager.isRTL
      ? {
          alignItems: "flex-start"
        }
      : {
          alignItems: "flex-end"
        }),
    alignSelf: "center"
  },
  dialog_title: {
    color: '#6f6f6f',
    fontSize: 25,
    fontFamily: font_type.FontLight,
    justifyContent: "center",
    alignSelf: "center"
  },
  item_name: {
    justifyContent: "center",
    alignSelf: "center",
    marginTop: Dimensions.get('window').height * 0.02,
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.065,
    borderRadius: 5
  },
  input_name: {
    marginLeft: 5,
    fontFamily: font_type.FontLight,
    color: '#b7b7b7'
  },
  terms: {
    alignSelf: "center",
    fontFamily: font_type.FontLight,
    color: '#6f6f6f',
    marginTop: Dimensions.get('window').height * 0.03,
    fontSize: 12,
    textAlign: "center",
    width: Dimensions.get('window').width * 0.8,
    lineHeight: 18
  },
  terms_two: {
    alignSelf: "center",
    fontFamily: font_type.FontLight,
    color: '#0691ce',
    fontSize: 12,
    textAlign: "center"
  },
  terms_three: {
    marginLeft: 5,
    fontFamily: font_type.FontLight,
    fontSize: 12,
    color: '#6f6f6f'
  },
  button_dialog_signup: {
    backgroundColor: '#ff6347',
    alignSelf: "center",
    marginTop: Dimensions.get('window').height * 0.04,
    borderRadius: 40,
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.08,
    justifyContent: "center"
  },
  btn_txt: {
    alignSelf: "center",
    fontFamily: font_type.FontBold,
    color: "white"
  }
});
// END TO MAKE STYLE
