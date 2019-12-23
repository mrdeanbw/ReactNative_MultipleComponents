import React, { PropTypes, Component } from "react";
import {Text,View,ScrollView,Platform,StatusBar,Image,TextInput,TouchableOpacity,ImageBackground,BackHandler,I18nManager,Dimensions,StyleSheet,Alert} from "react-native";
import {Container,Content,Right,Form,Item,Label,Input,Header,Title,Left,Icon,Body} from "native-base";

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

export default class Signup2 extends Component {

  render() {
    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW

    return (
      <Container style={styles.container}>

        {/* BEGIN TO SETUP HEADER VIEW */}
        <Header style={styles.header}>

            {/* BEGIN TO SETUP HEADER LEFT VIEW */}
            <Left style={styles.left}>
              <TouchableOpacity style={styles.back_arrow} onPress={() => this.props.navigation.goBack()} >
                <FontAwesome
                  name={I18nManager.isRTL ? "angle-right" : "angle-left"}
                  size={30}
                  color="white"
                />
              </TouchableOpacity>
            </Left>
            {/* END TO SETUP HEADER LEFT VIEW */}

            {/* BEGIN TO SETUP HEADER BODY VIEW */}
            <Body style={styles.body}>
              <Text style={styles.text_title}>Sign Up</Text>
            </Body>
            {/* END TO SETUP HEADER BODY VIEW */}

            {/* BEGIN TO SETUP HEADER RIGHT VIEW */}
            <Right style={styles.right} />
            {/* END TO SETUP HEADER RIGHT VIEW */}
        </Header>
        {/* END TO SETUP HEADER VIEW */}

        <ScrollView>
          <View style={{ marginTop: 30 }}>
            {/* BEGIN TO SETUP FULL NAME TEXTFIELD VIEW */}
            <TextInput
              style={styles.text_input}
              placeholder="Full name"
              placeholderTextColor="#b7b7b7"
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              keyboardType="default"
              textAlign={I18nManager.isRTL ? "right" : "left"}
              tintColor="#0691ce"
            />
            {/* END TO SETUP FULL NAME TEXTFIELD VIEW */}

            {/* BEGIN TO SETUP EMAIL TEXTFIELD VIEW */}
            <TextInput
              style={styles.text_input}
              placeholder="Email"
              placeholderTextColor="#b7b7b7"
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              keyboardType="email-address"
              textAlign={I18nManager.isRTL ? "right" : "left"}
              tintColor="#0691ce"
            />
            {/* END TO SETUP EMAIL TEXTFIELD VIEW */}

            {/* BEGIN TO SETUP PASSWORD TEXTFIELD VIEW */}
            <TextInput
              style={styles.text_input}
              placeholder="Password"
              placeholderTextColor="#b7b7b7"
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              keyboardType="default"
              textAlign={I18nManager.isRTL ? "right" : "left"}
              secureTextEntry={true}
              tintColor="#0691ce"
            />
            {/* END TO SETUP PASSWORD TEXTFIELD VIEW */}

            {/* BEGIN TO SETUP RE-PASSWORD TEXTFIELD VIEW */}
            <TextInput
              style={styles.text_input}
              placeholder="Confirm Password"
              placeholderTextColor="#b7b7b7"
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              keyboardType="default"
              textAlign={I18nManager.isRTL ? "right" : "left"}
              secureTextEntry={true}
              tintColor="#0691ce"
            />
            {/* END TO SETUP RE-PASSWORD TEXTFIELD VIEW */}

            {/* BEGIN TO SETUP SIGNUP BUTTON VIEW */}
            <TouchableOpacity style={styles.button_sign_up} onPress={() => alert("Sign Up button clicked.")} >
              <Text style={styles.text_white}>Sign Up</Text>
            </TouchableOpacity>
            {/* END TO SETUP SIGNUP BUTTON VIEW */}

            {/* BEGIN TO SETUP REGISTER INFO VIEW */}
            <View style={styles.tc_view}>
              <Text style={styles.text_policy_description}>
                Clicking register means that you agree to the
              </Text>
              <View style={styles.t_and_c_view}>
                <TouchableOpacity onPress={() => alert("Terms & Condition button clicked.")}>
                  <Text style={styles.text_terms_condition}>
                    Terms & Conditions
                  </Text>
                </TouchableOpacity>
                <Text style={styles.ands}> and </Text>
                <TouchableOpacity onPress={() => alert("Privacy Policy button clicked.")}>
                  <Text style={styles.text_terms_condition}>Privacy Policy</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* END TO SETUP REGISTER INFO VIEW */}

            {/* BEGIN TO SETUP ALREADY ACCOUNT VIEW */}
            <TouchableOpacity style={styles.view_already_have_account} onPress={() => alert("Already have an Account? button clicked.")} >
              <Text style={styles.text_already_have_account}>
                Already have an Account?
              </Text>
            </TouchableOpacity>
            {/* END TO SETUP ALREADY ACCOUNT VIEW */}
          </View>
        </ScrollView>
      </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor:'#ff6347' ,
    height: 56,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
        paddingTop:10
      }
    }),
    elevation: 0,
    alignItems: 'center'
  },
  back_arrow: {
    width: 30,
    alignItems: 'center',
  },
  left: {
    flex: 0.5,
     backgroundColor: 'transparent',
  },
  body: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  right: {
    flex: 0.5
  },
  main: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'white'
  },
  text_title: {
    color: "white",
    fontSize: moderateScale(16),
    alignSelf: 'center',
  },
  text_input: {
    borderWidth: 0.5,
    borderColor: '#cccccc',
    borderRadius: 5,
    height:Dimensions.get('window').height*0.07,
    alignSelf: 'center',
    width: (Dimensions.get('window').width * 0.90),
    fontSize: moderateScale(14),
    fontFamily: font_type.FontLight,
    color: '#0691ce',
    marginLeft: 15,
    paddingLeft: 15,
    marginTop: Dimensions.get('window').height*0.02,
  },
  ands:{
    color: '#6f6f6f',
    fontSize: moderateScale(12),
    fontFamily: font_type.FontLight,
  },
  button_sign_up: {
    backgroundColor: '#ff6347',
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
    width: (Dimensions.get('window').width * 0.85),
    height: Dimensions.get('window').height*0.065,
    marginTop: Dimensions.get('window').height*0.08,
    shadowOffset:{width: 0,  height: 3},
    shadowColor: '#b7b7b7',
    shadowOpacity: 1.0,
    shadowRadius: 5,
    justifyContent: 'center'
  },
  text_white: {
    color: "white",
    fontSize: moderateScale(14),
    fontFamily: font_type.FontBold,
  },
  text_policy_description: {
    color: '#6f6f6f',
    fontSize: moderateScale(11),
    fontFamily: font_type.FontLight,
    alignSelf: 'center'
  },
  text_terms_condition: {
    color: '#0691ce',
    fontSize: moderateScale(12),
    fontFamily: font_type.FontBold,
  },
  text_already_have_account: {
    color:'#6f6f6f',
    backgroundColor: "transparent",
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  view_already_have_account: {
    borderWidth: 0.5,
    borderColor: '#cccccc',
    borderRadius: 20,
    backgroundColor: "transparent",
    alignSelf: 'center',
    width: (Dimensions.get('window').width * 0.85),
    height: (Dimensions.get('window').height * 0.065),
    marginTop: (Dimensions.get('window').height * 0.075),
    justifyContent: 'center',
    alignItems: 'center'
  },
  t_and_c_view:{
    flexDirection: 'row',
    width: (Dimensions.get('window').width),
    justifyContent: 'center'
  },
  tc_view:{
    marginTop: Dimensions.get('window').height*0.07,
  }
});
// END TO MAKE STYLE
