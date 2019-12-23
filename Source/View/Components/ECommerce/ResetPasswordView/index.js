import React, { Component } from 'react';
import { Text, View, Image, StatusBar,TouchableOpacity, Platform, StyleSheet,Dimensions,I18nManager} from 'react-native';
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

export default class ResetPassword extends Component {

  constructor(props) {
    super(props);
    // BEGIN TO SET STATE
    this.state = {
      newPassword: '',
      confirmPassword: ''
    };
    // END TO SET STATE
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
              <Text style={styles.text_title}>Reset Password</Text>
            </Body>
        {/* END TO SETUP BODY VIEW */}

        {/* BEGIN TO SETUP RIGHT VIEW */}
            <Right style={styles.right}>
            </Right>
        {/* END TO SETUP RIGHT VIEW */}
        </Header>
      {/* END TO SETUP HEADER VIEW */}
        <Content>
        {/* BEGIN TO SETUP NOTICE VIEW */}
          <View>
            <Text style={styles.notice_text}>You have requested to reset the password</Text>
          </View>
        {/* END TO SETUP NOTICE VIEW */}
          <View style={[styles.divider,{marginTop: Dimensions.get("window").height * 0.001}]}></View>
            <View style={styles.floating_view}>
          {/* BEGIN TO SETUP NEWPASSWORD VIEW */}
						<FloatingLabelInput
							label="New Password"
							value={this.state.newPassword}
							keyboardType='default'
              secureTextEntry={true}
							returnKeyType='done'
							maxLength={15}
							selectionColor={'#959595'}
							autoCapitalize='none'
							onChangeText={(newPassword) => this.setState({newPassword})}/>
            {/* END TO SETUP NEWPASSWORD VIEW */}
							<View style={{height:10}}/>

            {/* BEGIN TO SETUP CONFIRMPASSWORD VIEW */}
              <FloatingLabelInput
  							label="Confirm New Password"
  							value={this.state.confirmPassword}
  							keyboardType='default'
                secureTextEntry={true}
  							returnKeyType='done'
  							maxLength={15}
  							selectionColor={'#959595'}
  							autoCapitalize='none'
  							onChangeText={(confirmPassword) => this.setState({confirmPassword})}/>
            {/* END TO SETUP CONFIRMPASSWORD VIEW */}
						</View>
        </Content>

        {/* BEGIN TO SETUP DIVIDER VIEW */}
          <View style={styles.divider}>
          </View>
        {/* END TO SETUP DIVIDER VIEW */}

      {/* BEGIN TO SETUP RESETPASSWORD VIEW */}
        <View style={styles.bottom_view}>
          <TouchableOpacity style={styles.reset_btn_bg} onPress={() => alert('ResetPassword Button Click')}>
            <Text style={styles.reset_txt}>Reset Password</Text>
          </TouchableOpacity>
        </View>
      {/* END TO SETUP RESETPASSWORD VIEW */}
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
  reset_btn_bg: {
    backgroundColor: "#ff6347",
    width: Dimensions.get("window").width * 0.94,
    alignSelf: 'center',
    paddingTop: Dimensions.get("window").height * 0.012,
    paddingBottom: Dimensions.get("window").height * 0.012,
    borderRadius: 5
	},
	reset_txt: {
    color: "#ffffff",
    fontSize: moderateScale(15),
    fontFamily: font_type.FontLight,
    textAlign: 'center'
	},
  bottom_view: {
		width: Dimensions.get("window").width,
		alignItems: 'center',
		justifyContent: 'center',
		height: Dimensions.get("window").height * 0.08
	},
});
// END TO MAKE STYLE
