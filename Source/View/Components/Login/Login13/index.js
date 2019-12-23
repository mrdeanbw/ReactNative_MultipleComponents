import React, { Component } from "react";
import {Dimensions,Modal,TouchableHighlight,StyleSheet,ImageBackground,Image,View,StatusBar,Platform,TouchableOpacity,BackHandler,I18nManager,Alert} from "react-native";
import {Container,Text,Content,Form,Item,Button,Input,Body,Header,Left,Right,Title} from "native-base";
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
import EvilIcons from "react-native-vector-icons/EvilIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CheckBox from "react-native-check-box";

export default class Login13 extends Component<{}> {
  state = {
    modalVisible: false,
    isChecked: false
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
      <ImageBackground source={GlobalInclude.Image1} style={styles.screen_bg}>

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
              <Text style={styles.textTitle} />
            </Body>
            {/* END TO SETUP HEADER BODY VIEW */}

            {/* BEGIN TO SETUP HEADER RIGHT VIEW */}
            <Right style={styles.right} />
            {/* END TO SETUP HEADER RIGHT VIEW */}
        </Header>
        {/* END TO SETUP HEADER VIEW */}


        {/* BEGIN TO SETUP MODAL VIEW */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}
        >
          <View style={styles.model_main}>
            <View style={styles.model_center}>

              {/* BEGIN TO SETUP CLOSE BUTTON VIEW */}
              <View style={styles.close}>
                <TouchableHighlight onPress={() => { this.setModalVisible(!this.state.modalVisible); }} >
                  <EvilIcons name="close" size={30} color="grey" />
                </TouchableHighlight>
              </View>
              {/* END TO SETUP CLOSE BUTTON VIEW */}

              {/* BEGIN TO SETUP TITLE VIEW */}
              <Text style={styles.txt_sing_in}>Log In</Text>
              {/* END TO SETUP TITLE VIEW */}


              {/* BEGIN TO SETUP EMAIL TEXTFIELD VIEW */}
              <Item regular style={styles.item}>
                <Input
                  placeholder="Enter Email"
                  keyboardType="email-address"
                  style={styles.input}
                />
              </Item>
              {/* END TO SETUP EMAIL TEXTFIELD VIEW */}

              {/* BEGIN TO SETUP PASSWORD TEXTFIELD VIEW */}
              <Item regular style={styles.item}>
                <Input
                  placeholder="Enter Password"
                  secureTextEntry={true}
                  style={styles.input}
                />
              </Item>
              {/* END TO SETUP PASSWORD TEXTFIELD VIEW */}


              <View style={styles.remem_view}>
                {/* BEGIN TO SETUP REMEMBER BUTTON WITH CHECKBOX VIEW */}
                <CheckBox
                  isChecked={this.state.isChecked}
                  onClick={() => {
                    this.setState({
                      isChecked: !this.state.isChecked
                    });
                  }}
                  checkedImage={
                    <MaterialIcons name="check-box" size={25} color="#4cd964" />
                  }
                  unCheckedImage={
                    <MaterialIcons
                      name="check-box-outline-blank"
                      size={25}
                      color="#4cd964"
                    />
                  }
                />
                <Text style={styles.remem}>Remember me</Text>
                {/* END TO SETUP REMEMBER BUTTON WITH CHECKBOX VIEW */}

                {/* BEGIN TO SETUP FORGOT PASSWORD VIEW */}
                <TouchableOpacity onPress={() => alert("Forgot Password button clicked.")}>
                  <Text style={styles.forgot}>Forgot password?</Text>
                </TouchableOpacity>
                {/* END TO SETUP FORGOT PASSWORD VIEW */}
              </View>

              {/* BEGIN TO SETUP SIGNUP BUTTON VIEW */}
              <TouchableOpacity info style={styles.button_dialog_signup} onPress={() => alert("Log In button clicked.")} >
                <Text autoCapitalize="words" style={styles.model_sign_up}>
                  Log In
                </Text>
              </TouchableOpacity>
              {/* END TO SETUP SIGNUP BUTTON VIEW */}
            </View>
          </View>
        </Modal>
        {/* END TO SETUP MODAL VIEW */}

        <View style={styles.container}>
          {/* BEGIN TO SETUP LOGO VIEW */}
          <Image source={GlobalInclude.Image2} style={styles.logo_style} />
          {/* END TO SETUP LOGO VIEW */}

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
            <TouchableHighlight info style={styles.button_login} onPress={() => { this.setModalVisible(true); }} >
              <Text autoCapitalize="words" style={styles.btn_text}>
                Login
              </Text>
            </TouchableHighlight>
            {/* END TO SETUP LOGIN BUTTON VIEW */}

            {/* BEGIN TO SETUP SIGNUP BUTTON VIEW */}
            <TouchableOpacity info style={styles.button_signup} onPress={() => alert("Sign Up button clicked.")} >
              <Text autoCapitalize="words" style={styles.btn_text}>
                Sign Up
              </Text>
            </TouchableOpacity>
            {/* END TO SETUP SIGNUP BUTTON VIEW */}

          </Form>
        </View>
      </ImageBackground>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  screen_bg: {
		width:  Dimensions.get('window').width,
		height: Dimensions.get('window').height,
		backgroundColor:'black',
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
		elevation: 0,
	},
	back_arrow: {
		justifyContent: 'center',
		alignItems: 'center',
    width: 30
  },
	left: {
		flex: 0.5,
		backgroundColor: 'transparent',
	},
	body: {
		flex: 3,
		alignItems: 'center',
		backgroundColor: 'transparent'
	},
	model_main:{
		height: Dimensions.get('window').height,
		width: Dimensions.get('window').width,
		justifyContent:'center',
		alignItems:'center'
	},
	logo_style: {
		alignSelf:'center',
		width:Dimensions.get('window').width*0.35,
		height: Dimensions.get('window').height*0.15
	},
	header_text: {
		fontFamily: font_type.FontBold,
		backgroundColor:'transparent',
		textAlign:'center',
		alignSelf:'center',
		fontSize:30,
		width :Dimensions.get('window').width*0.90,
		color:'white',
		marginTop:Dimensions.get('window').height*0.08
	},
	container:{
		justifyContent:'center' ,
		alignItems:'center',
	},
	desc_text:{
		fontFamily: font_type.FontBold,
		backgroundColor:'transparent',
		textAlign:'center',
		alignSelf:'center',
		fontSize:16,
		width :Dimensions.get('window').width* .65,
		color:'white',
		marginTop:Dimensions.get('window').height*0.04
	},
	form:{
		alignSelf:'center',
		margin:20 ,
		marginTop:Dimensions.get('window').height*0.05
	},
	button_login:{
		backgroundColor:'#ff6347',
		alignSelf:'center',
		height: Dimensions.get('window').height*0.08,
		width: Dimensions.get('window').width*0.4,
		borderRadius:40,
		alignItems: 'center',
		justifyContent: 'center'
	},
	button_signup:{
		borderWidth: 1,
		borderColor: '#ffffff',
		backgroundColor:'transparent',
		alignSelf:'center',
		height: Dimensions.get('window').height*0.08,
		width: Dimensions.get('window').width*0.4,
		borderRadius:40,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: Dimensions.get('window').height*0.03
	},
	button_dialog_signup:{
		backgroundColor:'#ff6347',
		alignSelf:'center',
		borderRadius:40,
		height:Dimensions.get('window').height*0.07,
		width:Dimensions.get('window').width*0.80,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: Dimensions.get('window').height*0.03
	},
	btn_text:{
		fontFamily: font_type.FontBold,
		color:'white'
	},
	model_center:{
		borderRadius:5,
		height:Dimensions.get('window').height*0.48,
		width:Dimensions.get('window').width*0.95,
		backgroundColor:'white',
		padding:10
	},
	close:{
		alignItems:'flex-end'
	},
	txt_sing_in:{
		fontSize:25,
		fontFamily: font_type.FontLight,
		justifyContent:'center',
		alignSelf:'center',
		marginBottom: 5
	},
	item:{
		justifyContent:'center',
		alignSelf:'center',
		marginTop:8,
		width:Dimensions.get('window').width*0.80,
		height:40
	},
	input:{
		fontFamily:font_type.FontLight,
		color:'#b7b7b7'
	},
	remem_view:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop:20,
		width:Dimensions.get('window').width*0.80,
		alignSelf:'center'
	},
	remem:{
		marginLeft: 5,
		fontSize: 15,
		fontFamily:font_type.FontLight
	},
	forgot:{
		alignSelf:'flex-end',
		fontSize: 15,
		justifyContent:'flex-end',
		fontFamily:font_type.FontLight
	},
	model_sign_up:{
		alignSelf:'center',
		fontFamily:font_type.FontLight,
		color:'white'
	}
});
// END TO MAKE STYLE
