import React, { PropTypes, Component } from "react";
import {Text,View,Dimensions,Image,TextInput,TouchableOpacity,ImageBackground,StatusBar,Platform,BackHandler,I18nManager,StyleSheet,Alert} from "react-native";
import {Container,Content,Right,Form,Item,Label,Input,Left,Icon,Header,Body} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
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

export default class Signup9 extends Component {

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
              <TouchableOpacity onPress={() => alert("Next button clicked.")}>
                <Text style={styles.text_next}>Next</Text>
              </TouchableOpacity>
            </Right>
            {/* END TO SETUP HEADER RIGHT VIEW */}
        </Header>
        {/* END TO SETUP HEADER VIEW */}

        <View style={styles.form_view}>
          <Form style={styles.input_label}>
            {/* BEGIN TO SETUP FULL NAME TEXTFIELD VIEW */}
            <Item underline style={styles.item_email}>
              <SimpleLineIcons name="user" color="#b7b7b7" size={17} />
              <Input
                placeholderTextColor="#b7b7b7"
                textAlign={I18nManager.isRTL ? "right" : "left"}
                placeholder="Full Name"
                style={styles.input_email}
              />
            </Item>
            {/* END TO SETUP FULL NAME TEXTFIELD VIEW */}

            {/* BEGIN TO SETUP EMAIL TEXTFIELD VIEW */}
            <Item underline style={styles.item_email}>
              <MaterialIcons name="mail-outline" color="#b7b7b7" size={19} />
              <Input
                placeholderTextColor="#b7b7b7"
                textAlign={I18nManager.isRTL ? "right" : "left"}
                placeholder="Email"
                style={styles.input_email}
              />
            </Item>
            {/* END TO SETUP EMAIL TEXTFIELD VIEW */}

            {/* BEGIN TO SETUP PASSWORD TEXTFIELD VIEW */}
            <Item underline style={styles.item_password}>
              <SimpleLineIcons name="lock-open" color="#b7b7b7" size={17} />
              <Input
                placeholderTextColor="#b7b7b7"
                textAlign={I18nManager.isRTL ? "right" : "left"}
                secureTextEntry={true}
                placeholder="Password"
                style={styles.input_password}
              />
            </Item>
            {/* END TO SETUP PASSWORD TEXTFIELD VIEW */}

            {/* BEGIN TO SETUP RE-PASSWORD TEXTFIELD VIEW */}
            <Item underline style={styles.item_confirm_password}>
              <SimpleLineIcons name="lock-open" color="#b7b7b7" size={17} />
              <Input
                placeholderTextColor="#b7b7b7"
                textAlign={I18nManager.isRTL ? "right" : "left"}
                secureTextEntry={true}
                placeholder="Confirm Password"
                style={styles.input_password}
              />
            </Item>
            {/* END TO SETUP RE-PASSWORD TEXTFIELD VIEW */}
          </Form>

          {/* BEGIN TO SETUP REGISTER INFO VIEW */}
          <Text style={styles.text_policy_description}>
            By registering, you agree to our
          </Text>
          <View style={styles.t_and_c}>
            <TouchableOpacity onPress={() => alert("Terms & Condition button clicked.")}>
              <Text style={styles.text_terms_condition}>Terms & Conditions</Text>
            </TouchableOpacity>
            <Text style={styles.and}> and </Text>
            <TouchableOpacity onPress={() => alert("Privacy Policy button clicked.")}>
              <Text style={styles.text_terms_condition}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
          {/* END TO SETUP REGISTER INFO VIEW */}
        </View>
      </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: "white"
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
    color: "#000",
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
  text_title: {
    color: '#6f6f6f',
    fontSize: moderateScale(16),
    alignSelf: "center",
    fontFamily: font_type.FontBold
  },
  text_next: {
    color: '#6f6f6f',
    fontSize: moderateScale(18),
    fontFamily: font_type.FontBold
  },
  input_label: {
    alignSelf: "center",
    width: Dimensions.get('window').width,
    backgroundColor: "white",
    marginTop: 18
  },
  form_view: {
    backgroundColor: "#e6e6e6",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  input_email: {
    marginLeft: 10,
    marginTop: 2,
    fontFamily: font_type.FontLight,
    color: '#b7b7b7'
  },
  t_and_c: {
    flexDirection: "row",
    width: Dimensions.get('window').width,
    justifyContent: "center"
  },
  and: {
    color: '#6f6f6f',
    fontSize: moderateScale(12),
    fontFamily: font_type.FontLight
  },
  item_email: {
    alignSelf: "center",
    width: Dimensions.get('window').width * 0.8,
    height: 50
  },
  input_password: {
    marginLeft: 10,
    marginTop: 2,
    fontFamily: font_type.FontLight,
    color: '#b7b7b7'
  },
  item_password: {
    alignSelf: "center",
    marginTop: 5,
    width: Dimensions.get('window').width * 0.8,
    height: 50
  },
  item_confirm_password: {
    alignSelf: "center",
    marginTop: 5,
    width: Dimensions.get('window').width * 0.8,
    height: 50,
    borderColor: "rgba(255,255,255,.4)"
  },
  text_policy_description: {
    color: '#6f6f6f',
    fontSize: moderateScale(12),
    fontFamily: font_type.FontLight,
    alignSelf: "center",
    marginTop: 20
  },
  text_terms_condition: {
    color: '#ff6347',
    fontSize: moderateScale(12),
    fontFamily: font_type.FontBold
  }
});
// END TO MAKE STYLE
