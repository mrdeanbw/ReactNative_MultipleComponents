import React, { PropTypes, Component } from "react";
import {Text,View,Image,TextInput,TouchableOpacity,ImageBackground,Platform,StatusBar,BackHandler,I18nManager,Dimensions,StyleSheet,Alert} from "react-native";
import {Container,Button,Icon,Right,Item,Input,Header,Left,Body,Title} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CheckBox from "react-native-check-box";
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

export default class Login7 extends Component {
  constructor(props) {
    super(props);
    // BEGIN TO MAKE STATE
    this.state = {
      isChecked: true
    };
    // END TO MAKE STATE
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
      <Container>
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
                    color="#000000"
                  />
                </TouchableOpacity>
              </Left>
              {/* END TO SETUP HEADER LEFT VIEW */}

              {/* BEGIN TO SETUP HEADER BODY VIEW */}
              <Body style={styles.body}>
                <Text style={styles.text_title}>Log In</Text>
              </Body>
  						{/* END TO SETUP HEADER BODY VIEW */}

  						{/* BEGIN TO SETUP HEADER RIGHT VIEW */}
              <Right style={styles.right} />
  						{/* END TO SETUP HEADER RIGHT VIEW */}
  				</Header>
  				{/* END TO SETUP HEADER VIEW */}

          <View style={styles.input_field_sec}>
            {/* BEGIN TO MAKE EMAIL TEXT FIELD CONTAINER VIEW */}
            <TextInput
              style={styles.text_input}
              placeholder="Enter Email"
              placeholderTextColor="#b7b7b7"
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              textAlign={I18nManager.isRTL ? "right" : "left"}
              keyboardType="email-address"
            />
            {/* END TO MAKE EMAIL TEXT FIELD CONTAINER VIEW */}

            {/* BEGIN TO MAKE PASSWORD TEXT FIELD CONTAINER VIEW */}
            <TextInput
              style={styles.text_input}
              secureTextEntry={true}
              placeholder="Enter Password"
              placeholderTextColor="#b7b7b7"
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              textAlign={I18nManager.isRTL ? "right" : "left"}
              keyboardType="default"
            />
            {/* END TO MAKE PASSWORD TEXT FIELD CONTAINER VIEW */}
          </View>


          <View style={styles.check_box_conatiner}>
            {/* BEGIN TO MAKE REMEMBER ME WITH CHECK BOX VIEW */}
            <CheckBox
              style={styles.check_box_remember}
              onClick={() => {
                this.setState({
                  isChecked: !this.state.isChecked
                });
              }}
              isChecked={this.state.isChecked}
              checkedImage={
                <Image
                  source={require('./check_box_selected.png')}
                  style={{ height: 20, width: 20 }}
                />
              }
              unCheckedImage={
                <MaterialIcons
                  name="check-box-outline-blank"
                  size={25}
                  color="#FFF"
                />
              }
            />
            <Text style={styles.text_remember_me}>Remember me</Text>
            {/* END TO MAKE REMEMBER ME WITH CHECK BOX VIEW */}

            {/* BEGIN TO MAKE FORGOT PASSWORD VIEW */}
            <Right>
              <TouchableOpacity onPress={() => alert("Forgot Password button clicked.")}>
                <Text style={styles.text_forgot_password}>Forgot password?</Text>
              </TouchableOpacity>
            </Right>
            {/* END TO MAKE FORGOT PASSWORD VIEW */}
          </View>

          {/* BEGIN TO MAKE LOG IN BUTTON VIEW */}
          <TouchableOpacity style={styles.button_sign_in} onPress={() => alert("Log In button clicked.")} >
            <Text style={styles.text_white}>Log In</Text>
          </TouchableOpacity>
          {/* END TO MAKE LOG IN BUTTON VIEW */}

          {/* BEGIN TO MAKE CONNECT VIEW */}
          <View style={styles.connect_with}>
            <View style={styles.connect_sec}>
              <View style={styles.divider} />
              <Text style={styles.text_connect_with}> or connect with </Text>
              <View style={styles.divider} />
            </View>
          </View>
          {/* END TO MAKE CONNECT VIEW */}

          <View style={styles.fb_twitter}>
            {/* BEGIN TO MAKE FACEBOOK BUTTON VIEW */}
            <View>
              <TouchableOpacity onPress={() => alert("Facebook button clicked.")} style={styles.btn_fb} >
                <FontAwesome name="facebook" size={26} color="#ffffff" />
                <Text style={styles.fb_text}>Facebook</Text>
              </TouchableOpacity>
            </View>
            {/* END TO MAKE FACEBOOK BUTTON VIEW */}

            {/* BEGIN TO MAKE TWITTER BUTTON VIEW */}
            <View>
              <TouchableOpacity onPress={() => alert("Twitter button clicked.")} style={styles.btn_twitter} >
                <FontAwesome name="twitter" size={26} color="#ffffff" />
                <Text style={styles.twitter_text}>Twitter</Text>
              </TouchableOpacity>
            </View>
            {/* END TO MAKE TWITTER BUTTON VIEW */}
          </View>
        </ImageBackground>
        {/* END TO SETUP IMAGE AS A BACKGROUND */}
      </Container>
    );
  }
}


// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  img_container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
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
		backgroundColor: 'transparent',
  },
	back_arrow: {
		justifyContent: 'center',
		alignItems: 'center',
    width: 30
  },
	body: {
		flex: 3,
		alignItems: 'center',
		backgroundColor: 'transparent'
  },
	text_title: {
    color: 'black',
    fontSize: moderateScale(20),
    marginTop: 5,
    alignSelf: 'center',
	  fontFamily: font_type.FontBold,
  },
	right: {
    flex: 0.5
  },
  input_field_sec:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.33,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text_input: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    alignSelf: 'center',
    width: Dimensions.get('window').width * 0.84,
    fontSize: moderateScale(14),
    fontFamily: font_type.FontLight,
  },
  check_box_conatiner: {
    flexDirection: 'row',
    width: (Dimensions.get('window').width * 0.84),
    height: Dimensions.get('window').height * 0.10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  check_box_remember: {
    width: 25,
    height: 25,
    borderRadius: 10,
  },
  text_remember_me: {
    color: 'white',
    fontSize: moderateScale(16),
    fontFamily: font_type.FontLight,
    marginLeft: moderateScale(10),
  },
  text_forgot_password: {
    color: 'white',
    fontFamily: font_type.FontLight,
    fontSize: moderateScale(15),
    textAlign: 'right',
  },
  button_sign_in: {
    backgroundColor: "#ff6347",
    borderRadius: Dimensions.get('window').height * 0.04,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: Dimensions.get('window').width * 0.84,
    height: Dimensions.get('window').height * 0.08,
  },
  text_white: {
    color: 'white',
    fontSize: moderateScale(14),
    fontFamily: font_type.FontBold,
  },
  connect_with: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.15,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  connect_sec:{
    width: Dimensions.get('window').width * 0.84,
    alignItems: 'center',
    flexDirection: 'row',
  },
  divider: {
    width: Dimensions.get('window').width * 0.28,
    backgroundColor: 'white',
    height: 0.5,
  },
  text_connect_with: {
    color: 'white',
    fontSize: moderateScale(14),
    fontFamily: font_type.FontLight,
    paddingLeft: 3,
    paddingRight: 3
  },
  fb_twitter: {
    alignSelf: 'center',
    width: Dimensions.get('window').width * 0.84,
    height: Dimensions.get('window').height * 0.20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn_fb: {
    backgroundColor: "#3b5998",
    ...I18nManager.isRTL ?
    ({
      borderTopRightRadius: Dimensions.get('window').height * 0.04,
     borderBottomRightRadius: Dimensions.get('window').height * 0.04,
    })
      :
    ({
      borderTopLeftRadius: Dimensions.get('window').height * 0.04,
      borderBottomLeftRadius: Dimensions.get('window').height * 0.04,
    }),
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#3b5998',
    width: Dimensions.get('window').width * 0.41,
    height: Dimensions.get('window').height * 0.08,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fb_text: {
    color: 'white',
    fontSize: moderateScale(14),
    fontFamily: font_type.FontLight,
    marginLeft: moderateScale(5),
  },
  btn_twitter: {
    backgroundColor: "#55acee",
    borderColor: '#55acee',
    borderWidth: 1,
    ...I18nManager.isRTL ?
    ({
      borderTopLeftRadius: Dimensions.get('window').height * 0.04,
      borderBottomLeftRadius: Dimensions.get('window').height * 0.04,
    })
      :
    ({
      borderTopRightRadius: Dimensions.get('window').height * 0.04,
     borderBottomRightRadius: Dimensions.get('window').height * 0.04,
    }),
    flexDirection: 'row',
    width: Dimensions.get('window').width * 0.41,
    height: Dimensions.get('window').height * 0.08,
    justifyContent: 'center',
    alignItems: 'center'
  },
  lable:{
    fontFamily:font_type.FontLight,
    color: 'red',
    backgroundColor: 'green'
  },
  twitter_text: {
    color: 'white',
    fontSize: moderateScale(14),
    fontFamily: font_type.FontLight,
    marginLeft: moderateScale(5),
  }
});
// END TO MAKE STYLE
