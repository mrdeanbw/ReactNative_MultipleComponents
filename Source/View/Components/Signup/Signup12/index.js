import React, { Component } from "react";
import {TouchableHighlight,Dimensions,Image,View,StatusBar,Platform,Keyboard,TouchableOpacity,BackHandler,I18nManager,StyleSheet,Alert} from "react-native";
import {Container,Text,Content,Button,Input,Body,Header,Left,Right,Title,Item,Label} from "native-base";

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

export default class Signup12 extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: ""
    };
  }

  _onPressSignUp = () => {
    alert("Continue button clicked.");
  };

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
        <Header androidStatusBarColor={"transparent"} style={styles.header}>

            {/* BEGIN TO SETUP HEADER LEFT VIEW */}
            <Left style={styles.left}>
              <TouchableOpacity style={styles.back_arrow} onPress={() => this.props.navigation.goBack()} >
                <FontAwesome
                  name={I18nManager.isRTL ? "angle-right" : "angle-left"}
                  size={30}
                  color="grey"
                />
              </TouchableOpacity>
            </Left>
            {/* END TO SETUP HEADER LEFT VIEW */}

            {/* BEGIN TO SETUP HEADER BODY VIEW */}
            <Body style={styles.body}>
              <Title style={styles.title}>Sign Up</Title>
            </Body>
            {/* END TO SETUP HEADER BODY VIEW */}

            {/* BEGIN TO SETUP HEADER RIGHT VIEW */}
            <Right style={styles.right} />
            {/* END TO SETUP HEADER RIGHT VIEW */}
        </Header>
        {/* END TO SETUP HEADER VIEW */}

        <Content bounces={false}>
          <View style={styles.page_content}>
            {/* BEGIN TO SETUP PHONE NUMBER TEXTFIELD VIEW */}
            <Text style={styles.dark_text_style}>YOUR PHONE NUMBER , PLEASE</Text>
            <Input
              style={styles.text_input_style}
              value={this.state.phoneNumber}
              editable={true}
              keyboardType="numeric"
              placeholderTextColor="#b7b7b7"
              placeholder="Phone Number"
              textAlign={I18nManager.isRTL ? "center" : "center"}
              onChangeText={phoneNumber => this.setState({ phoneNumber })}
            />
            {/* END TO SETUP PHONE NUMBER TEXTFIELD VIEW */}

            {/* BEGIN TO SETUP CONTINUE BUTTON VIEW */}
            <TouchableHighlight info>
              <Button style={styles.button_style} onPress={this._onPressSignUp}>
                <Text style={styles.button_text}>CONTINUE</Text>
              </Button>
            </TouchableHighlight>
            {/* END TO SETUP CONTINUE BUTTON VIEW */}

            {/* BEGIN TO SETUP VERIFY TEXT VIEW */}
            <Text style={styles.light_text_style}>
              You’ll receive an SMS to verify identity{" "}
            </Text>
            {/* BEGIN TO SETUP VERIFY TEXT VIEW */}
          </View>
        </Content>
      </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  header: {
		borderColor: '#d7d7d7',
		width: Dimensions.get('window').width,
		backgroundColor: 'white',
		elevation: 0,
		...Platform.select({
			ios: {
				borderBottomWidth: 0.1,
			},
			android: {
				borderBottomWidth: 0.3,
				marginTop: 5
			}
		}),
	},
	back_arrow: {
		width: 30,
		alignItems: 'center',
	},
	body:{
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center'
	},
	title:{
		color: '#6f6f6f',
		fontSize: 18,
		fontFamily: font_type.FontBold,
		alignSelf:'center',
		textAlign: 'center'
	},
	right:{
		flex: 1
	},
	left:{
		flex:1
	},
	container:{
		justifyContent:'center' ,
		alignItems:'center',
		backgroundColor: 'white'
	},
	page_content: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: Dimensions.get('window').height*0.13,
		backgroundColor: 'white'
	},
	text_input_style: {
		fontFamily: font_type.FontLight,
		color: '#b7b7b7',
		textAlign: 'center',
		fontSize: 35,
		marginTop: Dimensions.get('window').height*0.02,
		backgroundColor: 'transparent',
		width: Dimensions.get('window').width*0.80,
		height: Dimensions.get('window').height*0.10,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
	},
	dark_text_style: {
		fontFamily: font_type.FontBold,
		textAlign:'center',
		color: '#6f6f6f',
		fontSize: 12,
	},
	light_text_style: {
		fontFamily: font_type.FontLight,
		textAlign:'center',
		color: '#6f6f6f',
		marginTop: 45,
		fontSize: 12,
		marginTop: Dimensions.get('window').height*0.15,
	},
	button_style: {
		marginTop: Dimensions.get('window').height * 0.05,
		height: (Dimensions.get('window').height * 0.075),
		width: (Dimensions.get('window').width * 0.5),
		borderRadius: 40,
		backgroundColor: '#ff6347',
		elevation: 0, // android shadow
	},
	button_text: {
		width: (Dimensions.get('window').width * 0.5),
		textAlign: 'center',
		fontFamily: font_type.FontBold,
		color: '#fff',
		fontSize: 16,
	}
});
// END TO MAKE STYLE
