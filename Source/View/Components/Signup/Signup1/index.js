import React, { PropTypes, Component } from "react";
import {Text,View,Platform,StatusBar,Image,TextInput,TouchableOpacity,ImageBackground,BackHandler,I18nManager,Dimensions,StyleSheet,Alert} from "react-native";
import {Container,Content,Right,Form,Item,Label,Input,Header,Title,Left,Icon,Body} from "native-base";
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

import FontAwesome from "react-native-vector-icons/FontAwesome";
import FloatingLabelInput from "./FloatingLabel";

export default class Signup1 extends Component {
  constructor(props) {
    super(props);
    // BEGIN TO SETUP STATE
    this.state = {
      email: "",
      password: "",
      confirmPassword: ""
    };
    // END TO SETUP STATE
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
      <Container style={styles.container}>
        {/* BEGIN TO SETUP IMAGE AS A BACKGROUND */}
        <ImageBackground style={styles.img_container} source={GlobalInclude.Image1}>

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
                <Text style={styles.text_title}>Sign Up</Text>
              </Body>
  						{/* END TO SETUP HEADER BODY VIEW */}

  						{/* BEGIN TO SETUP HEADER RIGHT VIEW */}
              <Right style={styles.right} />
  						{/* END TO SETUP HEADER RIGHT VIEW */}
  				</Header>
  				{/* END TO SETUP HEADER VIEW */}

          {/* BEGIN TO SETUP PROFILE VIEW */}
          <Image
            style={styles.profile_image}
            source={GlobalInclude.Image5}
          />
          {/* END TO SETUP PROFILE VIEW */}

          <View style={styles.floating_view}>
            {/* BEGIN TO SETUP EMAIL TEXTFIELD VIEW */}
            <FloatingLabelInput
              label="Enter Email"
              value={this.state.email}
              keyboardType="email-address"
              returnKeyType="done"
              maxLength={40}
              selectionColor={"#ffffff"}
              autoCapitalize="none"
              onChangeText={email => this.setState({ email })}
            />
            {/* END TO SETUP EMAIL TEXTFIELD VIEW */}


            <View style={{ height: 10 }} />
            {/* BEGIN TO SETUP PASSWORD TEXTFIELD VIEW */}
            <FloatingLabelInput
              secureTextEntry={true}
              label="Enter Password"
              value={this.state.password}
              keyboardType="default"
              returnKeyType="done"
              maxLength={15}
              selectionColor={"#ffffff"}
              autoCapitalize="none"
              onChangeText={password => this.setState({ password })}
            />
            {/* END TO SETUP PASSWORD TEXTFIELD VIEW */}

            <View style={{ height: 10 }} />
            {/* BEGIN TO SETUP RE-PASSWORD TEXTFIELD VIEW */}
            <FloatingLabelInput
              secureTextEntry={true}
              label="Confirm Password"
              value={this.state.confirmPassword}
              keyboardType="default"
              returnKeyType="done"
              maxLength={15}
              selectionColor={"#ffffff"}
              autoCapitalize="none"
              onChangeText={confirmPassword =>
                this.setState({ confirmPassword })
              }
            />
            {/* END TO SETUP RE-PASSWORD TEXTFIELD VIEW */}
          </View>

          {/* BEGIN TO SETUP SIGNUP BUTTON VIEW */}
          <TouchableOpacity style={styles.button_register} onPress={() => alert("Register Now button clicked.")} >
            <Text style={styles.text_white}>Register now</Text>
          </TouchableOpacity>
          {/* END TO SETUP SIGNUP BUTTON VIEW */}

          {/* BEGIN TO SETUP REGISTER INFO VIEW */}
          <View style={styles.t_and_c_main_view}>
            <Text style={styles.text_policy_description}>
              Clicking register means that you agree to the
            </Text>
            <View style={styles.t_and_c_view}>
              <TouchableOpacity onPress={() => alert("Terms & Conditions button clicked.")}>
                <Text style={styles.text_terms_condition}>
                  Terms & Conditions
                </Text>
              </TouchableOpacity>
              <Text style={styles.and}> and </Text>
              <TouchableOpacity onPress={() => alert("Privacy Policy button clicked.")}>
                <Text style={styles.text_terms_condition}>Privacy Policy</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* END TO SETUP REGISTER INFO VIEW */}
        </ImageBackground>
        {/* END TO SETUP IMAGE AS A BACKGROUND */}
      </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: "transparent"
  },
  img_container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: "relative"
  },
  header: {
    backgroundColor: 'rgba(0,0,0,0)',
    height: 56,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
        marginTop: 10
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
  body: {
    flex: 2,
    alignItems: "center",
    backgroundColor: "transparent"
  },
  right: {
    flex: 0.5
  },
  back_arrow: {
    width: 30,
    alignItems: "center"
  },
  main: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: "transparent"
  },
  text_title: {
    color: "black",
    fontSize: moderateScale(16),
    alignSelf: "center",
    textAlign: "center"
  },
  profile_image: {
    width: Dimensions.get('window').height * 0.15,
    height: Dimensions.get('window').height * 0.15,
    borderRadius: Dimensions.get('window').height * 0.075,
    borderColor: "white",
    borderWidth: 3,
    alignSelf: "center",
    marginBottom: Dimensions.get('window').height * 0.08
  },
  floating_view: {
    alignSelf: "center",
    width: Dimensions.get('window').width * 0.85,
    justifyContent: "center",
    marginTop: Dimensions.get('window').height * 0.015
  },
  button_register: {
    backgroundColor: '#ff6347',
    borderRadius: 20,
    alignItems: "center",
    alignSelf: "center",
    width: Dimensions.get('window').width * 0.85,
    height: Dimensions.get('window').height * 0.065,
    shadowOffset: { width: 2, height: 5 },
    shadowColor: "#116384",
    shadowOpacity: 1.0,
    shadowRadius: 10,
    elevation: 10,
    justifyContent: "center",
    marginTop: Dimensions.get('window').height * 0.065
  },
  text_white: {
    color: "white",
    fontSize: moderateScale(16),
    fontFamily: font_type.FontBold
  },
  text_policy_description: {
    color: "white",
    fontSize: moderateScale(11),
    fontFamily: font_type.FontLight,
    alignSelf: "center"
  },
  text_terms_condition: {
    color: "white",
    fontSize: moderateScale(12),
    fontFamily: font_type.FontBold
  },
  t_and_c_view: {
    flexDirection: "row",
    width: Dimensions.get('window').width,
    justifyContent: "center"
  },
  and: {
    color: "white",
    fontSize: moderateScale(12),
    fontFamily: font_type.FontLight
  },
  t_and_c_main_view: {
    marginTop: Dimensions.get('window').height * 0.08
  }
});
// END TO MAKE STYLE
