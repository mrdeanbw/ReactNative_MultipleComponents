import React, { PropTypes, Component } from "react";
import {Text,View,Image,TextInput,TouchableOpacity,StatusBar,Platform,BackHandler,I18nManager,Dimensions,StyleSheet,Alert} from "react-native";
import {Container,Content,Right,Form,Item,Label,Input,Body,Header,Left} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FloatingLabelInput from "./FloatingLabelInput";
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

export default class Signup10 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
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

        {/* BEGIN TO SETUP HEADER VIEW */}
        <Header style={styles.header}>

            {/* BEGIN TO SETUP HEADER LEFT VIEW */}
            <Left style={styles.left}>
              <TouchableOpacity style={styles.back_arrow} onPress={() => this.props.navigation.goBack()} >
                <FontAwesome
                  name={I18nManager.isRTL ? "angle-right" : "angle-left"}
                  size={30}
                  color="#6f6f6f"
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
            <Right style={styles.right}>
              <TouchableOpacity onPress={() => alert("Done button clicked.")}>
                <Text style={styles.text_next}>Done</Text>
              </TouchableOpacity>
            </Right>
            {/* END TO SETUP HEADER RIGHT VIEW */}
        </Header>
        {/* END TO SETUP HEADER VIEW */}

        <View style={styles.floating_view}>
          {/* BEGIN TO SETUP FULL NAME TEXTFIELD VIEW */}
          <FloatingLabelInput
            label="FULL NAME"
            value={this.state.fullName}
            keyboardType="default"
            returnKeyType="done"
            maxLength={40}
            selectionColor={"#b7b7b7"}
            autoCapitalize="none"
            onChangeText={fullName => this.setState({ fullName })}
          />
          {/* END TO SETUP FULL NAME TEXTFIELD VIEW */}

          {/* BEGIN TO SETUP EMAIL TEXTFIELD VIEW */}
          <View style={{ height: 10 }} />
          <FloatingLabelInput
            label="EMAIL"
            value={this.state.email}
            keyboardType="email-address"
            returnKeyType="done"
            maxLength={40}
            selectionColor={"#b7b7b7"}
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
          />
          {/* END TO SETUP EMAIL TEXTFIELD VIEW */}

          {/* BEGIN TO SETUP PASSWORD TEXTFIELD VIEW */}
          <View style={{ height: 10 }} />
          <FloatingLabelInput
            secureTextEntry={true}
            label="Password"
            value={this.state.password}
            keyboardType="default"
            returnKeyType="done"
            maxLength={15}
            selectionColor={"#b7b7b7"}
            autoCapitalize="none"
            onChangeText={password => this.setState({ password })}
          />
          {/* END TO SETUP PASSWORD TEXTFIELD VIEW */}

          {/* BEGIN TO SETUP RE-PASSWORD TEXTFIELD VIEW */}
          <View style={{ height: 10 }} />
          <FloatingLabelInput
            secureTextEntry={true}
            label="Confirm Password"
            value={this.state.confirmPassword}
            keyboardType="default"
            returnKeyType="done"
            maxLength={15}
            selectionColor={"#b7b7b7"}
            autoCapitalize="none"
            onChangeText={confirmPassword => this.setState({ confirmPassword })}
          />
        </View>
        {/* END TO SETUP RE-PASSWORD TEXTFIELD VIEW */}

        {/* BEGIN TO SETUP REGISTER INFO VIEW */}
        <View style={styles.form_view}>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.text_policy_description}>
              By registering, you agree to our
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
        </View>
        {/* END TO SETUP REGISTER INFO VIEW */}

      </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#e6e6e6'
  },
  header: {
    backgroundColor: "white",
    height: Dimensions.get('window').width * 0.15,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
        paddingTop: 25
      }
    }),
    elevation: 0
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
    flex: 3,
    alignItems: "center",
    backgroundColor: "transparent",
    justifyContent: "center"
  },
  text_title: {
    color: "black",
    fontSize: moderateScale(16),
    marginTop: 5,
    alignSelf: "center",
    fontFamily: font_type.FontBold
  },
  right: {
    flex: 0.5,
    backgroundColor: "transparent"
  },
  main: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: "transparent"
  },
  form_view: {
    backgroundColor: '#e6e6e6',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  floating_view: {
    alignSelf: "center",
    width: Dimensions.get('window').width,
    justifyContent: "center",
    marginTop: Dimensions.get('window').height * 0.015,
    backgroundColor: "#ffffff"
  },
  lbl: {
    paddingLeft: 15
  },
  text_next: {
    color: '#ff6347',
    fontSize: moderateScale(16)
  },
  text_title: {
    color: '#6f6f6f',
    fontSize: moderateScale(16),
    alignSelf: "center",
    fontFamily: font_type.FontBold
  },
  text_policy_description: {
    color: '#6f6f6f',
    fontSize: moderateScale(12),
    fontFamily: font_type.FontLight,
    alignSelf: "center"
  },
  t_and_c_view: {
    flexDirection: "row",
    width: Dimensions.get('window').width,
    justifyContent: "center"
  },
  text_terms_condition: {
    color: '#363636',
    fontSize: moderateScale(12),
    fontFamily: font_type.FontBold
  },
  and: {
    color: '#6f6f6f',
    fontSize: moderateScale(12),
    fontFamily: font_type.FontLight
  }
});
// END TO MAKE STYLE
