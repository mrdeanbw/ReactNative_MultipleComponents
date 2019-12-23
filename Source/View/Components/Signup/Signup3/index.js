import React, { PropTypes, Component } from "react";
import {Text,StatusBar,Platform,View,Image,TextInput,TouchableOpacity,ImageBackground,ScrollView,BackHandler,I18nManager,Dimensions,StyleSheet,Alert} from "react-native";
import {Container,Content,Right,Form,Item,Label,Input,Header,Left,Body,Title} from "native-base";
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

export default class Signup3 extends Component {

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
        <ImageBackground style={styles.img_container} source={GlobalInclude.Image6}>

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

        </ImageBackground>
        {/* END TO SETUP IMAGE AS A BACKGROUND */}

        <ScrollView>
          {/* BEGIN TO SETUP FULL NAME TEXTFIELD */}
          <TextInput
            style={styles.text_input}
            placeholder="Full name"
            placeholderTextColor={'#b7b7b7'}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            keyboardType="default"
            textAlign={I18nManager.isRTL ? "right" : "left"}
            tiniColor={'#0691ce'}
          />
          {/* END TO SETUP FULL NAME TEXTFIELD */}

          {/* BEGIN TO SETUP EMAIL TEXTFIELD */}
          <TextInput
            style={styles.text_input}
            placeholder="Email"
            placeholderTextColor={'#b7b7b7'}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            keyboardType="email-address"
            textAlign={I18nManager.isRTL ? "right" : "left"}
            tiniColor={'#0691ce'}
          />
          {/* END TO SETUP EMAIL TEXTFIELD */}

          {/* BEGIN TO SETUP PASSWORD TEXTFIELD */}
          <TextInput
            style={styles.text_input}
            placeholder="Password"
            placeholderTextColor={'#b7b7b7'}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            keyboardType="default"
            secureTextEntry={true}
            textAlign={I18nManager.isRTL ? "right" : "left"}
            tiniColor={'#0691ce'}
          />
          {/* END TO SETUP PASSWORD TEXTFIELD */}

          {/* BEGIN TO SETUP RE-PASSWORD TEXTFIELD */}
          <TextInput
            style={styles.text_input}
            placeholder="Confirm Password"
            placeholderTextColor={'#b7b7b7'}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            keyboardType="default"
            secureTextEntry={true}
            textAlign={I18nManager.isRTL ? "right" : "left"}
            tiniColor={'#0691ce'}
          />
          {/* END TO SETUP RE-PASSWORD TEXTFIELD */}

          {/* BEGIN TO SETUP SIGNUP BUTTON */}
          <TouchableOpacity style={styles.button_sign_up} onPress={() => alert("Sign Up button clicked.")} >
            <Text style={styles.text_white}>Sign Up</Text>
          </TouchableOpacity>
          {/* END TO SETUP SIGNUP BUTTON */}

          {/* BEGIN TO SETUP TERMS AND CONDITION VIEW */}
          <View style={styles.t_and_c_view}>
              <TouchableOpacity onPress={() => alert("Terms & Condition button clicked.")}>
                <Text style={styles.text_terms_condition}>Terms & Conditions</Text>
              </TouchableOpacity>
              <Text style={styles.ands}> and </Text>
              <TouchableOpacity onPress={() => alert("Privacy Policy button clicked.")}>
                <Text style={styles.text_terms_condition}>Privacy Policy</Text>
              </TouchableOpacity>
          </View>
          {/* END TO SETUP TERMS AND CONDITION VIEW */}

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
  img_container: {
    width: Dimensions.get('window').width,
    height: ((Dimensions.get('window').height)*0.40),
  },
  main: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'white'
  },
  text_title: {
    color: "white",
    fontSize: moderateScale(20),
    marginTop: 5,
    alignSelf: 'center',
    marginTop: -1
  },
  back_arrow: {
    width: 30,
    alignItems: 'center',
  },
  text_input: {
    borderWidth: 0.5,
    borderColor: '#cccccc',
    borderRadius: 5,
    alignSelf: 'center',
    height:  (Dimensions.get('window').width * 0.12),
    width: (Dimensions.get('window').width * 0.85),
    fontFamily: font_type.FontLight,
    color:'#0691ce',
    marginTop: (Dimensions.get('window').width * 0.05),
    backgroundColor: 'transparent',
    paddingLeft: 15
  },
  button_sign_up: {
    backgroundColor: '#ff6347',
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
    width: (Dimensions.get('window').width * 0.90),
    marginTop: Dimensions.get('window').height*0.050,
    height: Dimensions.get('window').height*0.07,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset:{width: 0,  height: 3},
    shadowColor: '#b7b7b7',
    shadowOpacity: 1.0,
    shadowRadius: 5,
    elevation: 1
  },
  text_white: {
    color: "white",
    fontSize: moderateScale(14),
    fontFamily: font_type.FontBold,
  },
  text_terms_condition:{
    color: '#0691ce',
    fontSize: moderateScale(12),
    fontFamily: font_type.FontBold,
  },
  header: {
    backgroundColor: 'rgba(0,0,0,0)',
    height: 56,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
				marginTop:10
			}
    }),
		elevation: 0
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
  t_and_c_view:{
    flexDirection: 'row',
    width: (Dimensions.get('window').width),
    justifyContent: 'center',
    marginTop: Dimensions.get('window').height*0.05,
  },
  ands:{
    color: '#6f6f6f',
    fontSize: moderateScale(12),
    fontFamily: font_type.FontLight,
  }
});
// END TO MAKE STYLE
