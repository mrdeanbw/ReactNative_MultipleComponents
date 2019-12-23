import React, { Component } from "react";
import {Text,View,Image,StatusBar,Platform,ImageBackground,Dimensions,TouchableHighlight,TouchableOpacity,BackHandler,I18nManager,StyleSheet,Alert} from "react-native";
import {Container,Button,Icon,Right,Item,Input,Header,Footer,Left,Body,Title,Content,Form,Label,ListItem,InputGroup} from "native-base";
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";
import Swiper from "react-native-swiper";

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

/**
 *  Profile Screen
 */
export default class Signup11 extends Component {

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
        <ImageBackground style={styles.main_bg} source={GlobalInclude.Image1}>
          <Content>
            <View style={styles.logo_second}>
              <TouchableOpacity
                style={styles.back_arrow}
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon name="md-close" style={styles.back_icon} />
              </TouchableOpacity>
              <ImageBackground source={GlobalInclude.Image3} style={styles.logo} />
            </View>
            <View style={styles.slide_sec}>
              <View style={styles.input_group}>
                {/* BEGIN TO SETUP FULL NAME TEXTFIELD VIEW */}
                <InputGroup style={styles.txt_sec}>
                  <Input
                    inlineLabel
                    placeholder="Full Name"
                    style={styles.txt_input}
                    placeholderTextColor={'#83c8e7'}
                  />
                </InputGroup>
              </View>
              {/* END TO SETUP FULL NAME TEXTFIELD VIEW */}

              {/* BEGIN TO SETUP EMAIL TEXTFIELD VIEW */}
              <View style={styles.input_group}>
                <InputGroup style={styles.txt_sec}>
                  <Input
                    inlineLabel
                    placeholder="Email"
                    style={styles.txt_input}
                    placeholderTextColor={'#83c8e7'}
                  />
                </InputGroup>
              </View>
              {/* END TO SETUP EMAIL TEXTFIELD VIEW */}

              {/* BEGIN TO SETUP PASSWORD TEXTFIELD VIEW */}
              <View style={styles.input_group}>
                <InputGroup style={styles.txt_sec}>
                  <Input
                    inlineLabel
                    label="NAME"
                    placeholder="Password"
                    secureTextEntry={true}
                    style={styles.txt_input}
                    placeholderTextColor={'#83c8e7'}
                  />
                </InputGroup>
              </View>
              {/* END TO SETUP PASSWORD TEXTFIELD VIEW */}

              {/* BEGIN TO SETUP RE-PASSWORD TEXTFIELD VIEW */}
              <View style={styles.input_group}>
                <InputGroup style={styles.txt_sec}>
                  <Input
                    inlineLabel
                    label="NAME"
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    style={styles.txt_input}
                    placeholderTextColor={'#83c8e7'}
                  />
                </InputGroup>
              </View>
              {/* END TO SETUP RE-PASSWORD TEXTFIELD VIEW */}

              {/* BEGIN TO SETUP DATE OF BIRTH TEXTFIELD VIEW */}
              <View style={styles.input_group}>
                <InputGroup style={styles.txt_sec}>
                  <Input
                    inlineLabel
                    label="NAME"
                    placeholder="Date Of Birth"
                    style={styles.txt_input}
                    placeholderTextColor={'#83c8e7'}
                  />
                </InputGroup>
              </View>
              {/* END TO SETUP DATE OF BIRTH TEXTFIELD VIEW */}

              {/* BEGIN TO SETUP GENDER TEXTFIELD VIEW */}
              <View style={styles.input_group}>
                <InputGroup style={styles.txt_sec}>
                  <Input
                    inlineLabel
                    label="NAME"
                    placeholder="Gender"
                    style={styles.txt_input}
                    placeholderTextColor={'#83c8e7'}
                  />
                </InputGroup>
              </View>
              {/* END TO SETUP GENDER TEXTFIELD VIEW */}

              {/* BEGIN TO SETUP REGISTER INFO VIEW */}
              <View style={styles.tc_main}>
                <Text style={styles.text_policy_description}>
                  Clicking Sign Up means that you agree to the
                </Text>
                <View style={styles.tc_view}>
                  <TouchableOpacity onPress={() => alert("Terms & Conditions button clicked.")}>
                    <Text style={styles.text_terms_condition}>
                      Terms & Conditions
                    </Text>
                  </TouchableOpacity>
                  <Text style={styles.and}> and </Text>
                  <TouchableOpacity onPress={() => alert("Privacy Policy button clicked.")}>
                    <Text style={styles.text_terms_condition}>
                      Privacy Policy
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* END TO SETUP REGISTER INFO VIEW */}

          </Content>

          {/* BEGIN TO SETUP SIGNUP BUTTON VIEW */}
          <TouchableOpacity onPress={() => alert("Sign Up button clicked.")} style={styles.btn_sec} >
            <Text autoCapitalize="words" style={styles.btn_txt}>
              SIGN UP
            </Text>
          </TouchableOpacity>
          {/* END TO SETUP SIGNUP BUTTON VIEW */}

        </ImageBackground>
        {/* END TO SETUP IMAGE AS A BACKGROUND */}
      </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  logo_second:{
  		height: (Dimensions.get('window').height*0.27),
  		backgroundColor:'transparent'
  },
  back_arrow: {
  	marginTop: 25,
  	marginLeft: 15,
  	width: 30,
  	alignItems: 'center',
  },
  back_icon:{
  	color:'white',
  	backgroundColor: 'transparent',
  			...I18nManager.isRTL ?
  	    ({
  				alignItems:'flex-start',
  	    })
  	      :
  	    ({
  				alignItems:'flex-end',
  	    }),
  },
  slide_sec:{
  	height: (Dimensions.get('window').height*0.65),
  	backgroundColor:'transparent'
  },
  main_bg:{
  	width:Dimensions.get('window').width,
  	height:Dimensions.get('window').height
  },
  tc_view:{
  	flexDirection: 'row',
  	width: (Dimensions.get('window').width),
  	justifyContent: 'center'
  },
  txt_input:{
  	color:'white'
  },
  input_group:{
  	backgroundColor:'transparent'
  },
  and:{
  	color: "white",
  	fontSize: 12,
  	fontFamily: font_type.FontLight
  },
  tc_main:{
  	marginTop:Dimensions.get('window').height*0.07
  },
  logo:{
  	height:Dimensions.get('window').height*0.13,
  	width:Dimensions.get('window').width*0.30,
  	justifyContent: 'center',
  	alignSelf: 'center',
  	backgroundColor: 'transparent'
  },
  btn_sec:{
  	height: (Dimensions.get('window').height*0.08),
  	backgroundColor:'#ff6347',
  	alignItems: 'center',
  	justifyContent: 'center'
  },
  btn_txt:{
  	fontSize:20,
  	justifyContent: 'center',
  	color:'white',
  	backgroundColor: 'transparent'
  },
  txt_sec:{
  	borderColor:'#79bedd',
  	backgroundColor: 'transparent',
  	width: Dimensions.get('window').width*0.88,
  	alignSelf: 'center',
  	justifyContent: 'center',
  },
  text_policy_description:{
  	color: "white",
  	fontSize: 12,
  	fontFamily: font_type.FontLight,
  	alignSelf: 'center'
  },
  text_terms_condition:{
  	color: '#71d4ff',
  	fontSize: 12,
  	fontFamily: font_type.FontBold,
  }
});
// END TO MAKE STYLE
