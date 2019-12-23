
import React, { Component } from 'react';
import {Text,View,Image,StatusBar,Platform,ImageBackground,Dimensions,TouchableHighlight,TouchableOpacity,BackHandler,I18nManager,StyleSheet,Alert} from 'react-native';
import {Container,Button,Icon,Right,Item,Input,Header,Footer,Left,Body,Title,Content,Form,Label} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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

export default class Signup13 extends Component {

  // BEGIN TO SETUP SOCIAL BUTTON CLICK METHOD
  SignUp = () =>
  {
      alert('Create Account button clicked.');
  }
  login = () =>
  {
      alert('I already have an account button clicked.');
  }
  // END TO SETUP SOCIAL BUTTON CLICK METHOD

  render(){

    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW

    return(
        <Container style={{}}>
        {/* BEGIN TO SETUP GRADIENT */}
        <LinearGradient colors={[ 'rgba(68,71,130,0.5)', 'rgba(80,68,148,0.75)', 'rgba(85,67,158,1.0)']} style={styles.image_background} >

            {/* BEGIN TO SETUP IMAGE AS A BACKGROUND */}
            <ImageBackground style={styles.image_background} source={GlobalInclude.Image3} >

                {/* BEGIN TO SETUP HEADER VIEW */}
                <Header style={styles.header}>
                    {/* BEGIN TO SETUP HEADER LEFT VIEW */}
                    <Left style={styles.left}>
                      <TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
                        <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="black"/>
                      </TouchableOpacity>
                    </Left>
                    {/* END TO SETUP HEADER LEFT VIEW */}

                    {/* BEGIN TO SETUP HEADER BODY VIEW */}
                    <Body style={styles.body}>
                    </Body>
                    {/* END TO SETUP HEADER BODY VIEW */}

                    {/* BEGIN TO SETUP HEADER RIGHT VIEW */}
                    <Right style={styles.right}/>
                    {/* END TO SETUP HEADER RIGHT VIEW */}
                </Header>
                {/* END TO SETUP HEADER VIEW */}

                <Content style={styles.content} >
                    {/* BEGIN TO SETUP PROFILE VIEW */}
                    <Image style={styles.profile_image} source={GlobalInclude.Image1}/>
                    {/* END TO SETUP PROFILE VIEW */}

                    <Form style={styles.form}>
                        {/* BEGIN TO SETUP FULL NAME TEXTFIELD VIEW */}
                        <Item fixedLabel style={styles.item_style} last>
                            <Input placeholder='Full Name' textAlign={I18nManager.isRTL ? 'right' : 'left'} placeholderTextColor='#b7b7b7' style={styles.input1}  />
                        </Item>
                        {/* END TO SETUP FULL NAME TEXTFIELD VIEW */}

                        {/* BEGIN TO SETUP EMAIL TEXTFIELD VIEW */}
                        <Item fixedLabel style={styles.item_style} last>
                            <Input placeholder='Email' textAlign={I18nManager.isRTL ? 'right' : 'left'} placeholderTextColor='#b7b7b7' style={styles.input1}  />
                        </Item>
                        {/* END TO SETUP EMAIL TEXTFIELD VIEW */}

                        {/* BEGIN TO SETUP PASSWORD TEXTFIELD VIEW */}
                        <Item fixedLabel style={styles.item_style} last>
                            <Input placeholder='Password' textAlign={I18nManager.isRTL ? 'right' : 'left'} secureTextEntry={true} placeholderTextColor='#b7b7b7' style={styles.input1}  />
                        </Item>
                        {/* END TO SETUP PASSWORD TEXTFIELD VIEW */}

                        {/* BEGIN TO SETUP RE-PASSWORD TEXTFIELD VIEW */}
                        <Item fixedLabel style={styles.item_style} last>
                            <Input placeholder='Confirm password' textAlign={I18nManager.isRTL ? 'right' : 'left'} secureTextEntry={true} placeholderTextColor='#b7b7b7' style={styles.input1}  />
                        </Item>
                        {/* END TO SETUP RE-PASSWORD TEXTFIELD VIEW */}
                    </Form>

                    {/* BEGIN TO SETUP CREATE ACCOUNT BUTTON VIEW */}
                    <TouchableHighlight  info style={styles.button_login} onPress={() => { this.SignUp() }}>
                        <Text autoCapitalize="words" style={styles.login_button}>Create Account</Text>
                    </TouchableHighlight>
                    {/* END TO SETUP CREATE ACCOUNT BUTTON VIEW */}

                    {/* BEGIN TO SETUP ALREADY HAVE AN ACCOUNT BUTTON VIEW */}
                    <TouchableHighlight  info style={styles.button_signup} onPress={() => {this.login()} }>
                        <Text autoCapitalize="words"  style={styles.signup_button}>I already have an account</Text>
                    </TouchableHighlight>
                    {/* END TO SETUP ALREADY HAVE AN ACCOUNT BUTTON VIEW */}
                </Content>

            </ImageBackground>
            {/* END TO SETUP IMAGE AS A BACKGROUND */}
        </LinearGradient>
        {/* END TO SETUP GRADIENT */}
        </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(0,0,0,0)',
    height: Dimensions.get('window').height * 0.1,
    borderBottomWidth: 0,
    paddingTop: Dimensions.get('window').height * 0.05,
    elevation: 0,
    paddingLeft: Dimensions.get('window').width * 0.05,
    paddingRight: Dimensions.get('window').width * 0.05
  },
  left: {
    flex: 0.5
  },
  body: {
    flex: 3,
    alignSelf: "center"
  },
  right: {
    flex: 0.5
  },
  title: {
    fontFamily: font_type.FontBold,
    textAlign: "center",
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 20,
    color: "white"
  },
  profile_image: {
    width: Dimensions.get('window').height * 0.15,
    height: Dimensions.get('window').height * 0.15,
    borderRadius: Dimensions.get('window').height * 0.075,
    borderColor: "white",
    borderWidth: 3,
    alignSelf: "center",
    marginBottom: Dimensions.get('window').height * 0.065,
    marginTop: Dimensions.get('window').height * 0.05
  },
  back_arrow: {
    width: 30,
    alignItems: "center"
  },
  image_background: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  content: {
    alignSelf: "center"
  },
  form: {
    width: Dimensions.get('window').width,
    alignItems: "center",
    backgroundColor: "#ebebeb"
  },
  input1: {
    color: "#828282",
    marginLeft: 30,
    fontSize: 14,
    fontFamily: font_type.FontLight
  },
  button_login: {
    backgroundColor: "#ff6347",
    alignSelf: "center",
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 40,
    marginTop: 40,
    width: Dimensions.get('window').width * 0.8
  },
  button_signup: {
    borderWidth: 1,
    borderColor: "#ffffff",
    backgroundColor: "transparent",
    alignSelf: "center",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 30,
    borderRadius: 40,
    width: Dimensions.get('window').width * 0.8
  },
  login_button: {
    fontFamily: font_type.FontBold,
    color: "white",
    alignSelf: "center"
  },
  signup_button: {
    fontFamily: font_type.FontBold,
    color: "white",
    alignSelf: "center"
  },
  item_style: { width: Dimensions.get('window').width }
});
// END TO MAKE STYLE
