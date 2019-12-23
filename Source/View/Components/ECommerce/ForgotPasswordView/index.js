import React, { Component } from 'react';
import { Text, View, Image, StatusBar,TouchableOpacity, Platform,StyleSheet,Dimensions, I18nManager} from 'react-native';
import { Content,Container, Right, Header, Left, Body} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FloatingLabelInput from '../FloatingLabelInput';

// BEGIN TO SETUP FONT-TYPE AND FONTSIZE
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const scale = size => (Dimensions.get("window").width / guidelineBaseWidth) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const font_type = {
    FontLight: 'Helvetica',
    FontBold : 'Helvetica-Bold'
};
// END TO SETUP FONT-TYPE AND FONTSIZE

export default class ForgotPassword extends Component {

  constructor(props) {
    super(props);
    // BEGIN TO SETUP STATE
    this.state = {
      email: '',
    };
    // END TO SETUP STATE
  }


  render(){
    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW

    return(
      <Container style={styles.container}>
      {/* BEGIN TO SETUP HEADER VIEW */}
        <Header androidStatusBarColor={"#0e1130"} style={styles.header}>
          {/* BEGIN TO SETUP LEFT VIEW */}
            <Left style={styles.left}>
              <TouchableOpacity style={styles.back_arrow} onPress={()=> this.props.navigation.goBack()}>
                <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="white" style={{paddingRight: 20}}/>
              </TouchableOpacity>
            </Left>
          {/* END TO SETUP LEFT VIEW */}

          {/* BEGIN TO SETUP BODY VIEW */}
            <Body style={styles.body}>
              <Text style={styles.text_title}>Forgot Password</Text>
            </Body>
          {/* END TO SETUP BODY VIEW */}

          {/* BEGIN TO SETUP RIGHT VIEW */}
            <Right style={styles.right}></Right>
          {/* END TO SETUP RIGHT VIEW */}
        </Header>
      {/* END TO SETUP HEADER VIEW */}
        <Content>
        {/* BEGIN TO SETUP RESETPASSWORD TEXT VIEW */}
          <View>
          <Text style={styles.notice_text}>Enter your email address to reset your password.</Text>
          </View>
        {/* END TO SETUP RESETPASSWORD TEXT VIEW */}
          <View style={[styles.divider,{marginTop: Dimensions.get("window").height * 0.001}]}></View>

        {/* BEGIN TO SETUP EMAIL VIEW */}
          <View style={styles.floating_view}>
          <FloatingLabelInput
							label="Email"
							value={this.state.email}
							keyboardType='email-address'
							returnKeyType='done'
							maxLength={40}
							selectionColor={'#959595'}
							autoCapitalize='none'
							onChangeText={(email) => this.setState({email})}/>
              <View style={{height:10}}/>
          </View>
          {/* END TO SETUP EMAIL VIEW */}
        </Content>

        <View style={styles.divider}></View>

        {/* BEGIN TO SETUP SEND VIEW */}
        <View style={styles.bottom_view}>
          <TouchableOpacity style={styles.send_btn_bg} onPress={() =>alert('Send Click')}>
            <Text style={styles.send_txt}>Send</Text>
          </TouchableOpacity>
        </View>
        {/* END TO SETUP SEND VIEW */}
      </Container>
    )
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: 'white'
  },
  header: {
    backgroundColor: "#ff6347",
    height: Dimensions.get("window").height * 0.1,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {
        paddingTop: (Dimensions.get("window").height * 0.02),
      },
      android: {
        paddingTop: Dimensions.get("window").width * 0.04
      }
    }),
    elevation: 0,
    paddingLeft: (Dimensions.get("window").width * 0.05),
    paddingRight: (Dimensions.get("window").width * 0.05),
  },
  left: {
    flex: 0.5,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  back_arrow: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  text_title: {
    color: 'white',
    fontSize: moderateScale(20),
    alignSelf: 'center',
    fontFamily: font_type.FontLight,
  },
  right: {
    flex: 0.5,
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    ...Platform.select({
      ios: {
      },
      android: {
        paddingTop: Dimensions.get("window").width * 0.02
      }
    }),
  },
  notice_text: {
    padding: 10,
    fontFamily: font_type.FontLight,
    fontSize: moderateScale(18),
    color: "#0e1130"
  },
  divider: {
		backgroundColor: "#d8d8d8",
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").width * 0.003
	},
  floating_view:{
		alignSelf:'center',
		width: Dimensions.get("window").width * 0.94,
		justifyContent: 'center',
		marginTop: Dimensions.get("window").height * 0.015
	},
  send_btn_bg: {
    backgroundColor: "#ff6347",
    width: Dimensions.get("window").width * 0.94,
    alignSelf: 'center',
    paddingTop: Dimensions.get("window").height * 0.012,
    paddingBottom: Dimensions.get("window").height * 0.012,
    borderRadius: 5
	},
  send_txt: {
    color: "#ffffff",
    fontSize: moderateScale(15),
    fontFamily: font_type.FontLight,
    textAlign: 'center'
	},
  bottom_view: {
		width: Dimensions.get("window").width,
		alignItems: 'center',
		justifyContent: 'center',
		height: Dimensions.get("window").height * 0.1
	},
});
// END TO MAKE STYLE
