import React, { Component } from 'react';
import { Text, View, Image, StatusBar,TouchableOpacity, Platform, BackHandler, I18nManager,StyleSheet,Dimensions} from 'react-native';
import { Content,Container, Right, Header, Left, Body, Title } from 'native-base';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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

export default class FAQGeneralEnquiries extends Component {

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
                <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={35} color="white" style={{paddingRight: 20}}/>
              </TouchableOpacity>
            </Left>
          {/* END TO SETUP LEFT VIEW */}

          {/* BEGIN TO SETUP BODY VIEW */}
            <Body style={styles.body}>
              <Text style={styles.text_title}>General Enquiries</Text>
            </Body>
          {/* END TO SETUP BODY VIEW */}

          {/* BEGIN TO SETUP RIGHT VIEW */}
            <Right style={styles.right}>
            <TouchableOpacity style={styles.back_arrow} onPress={()=>alert('Search Button Click')}>
              <EvilIcons name="search" size={30} color="white"/>
            </TouchableOpacity>
            </Right>
          {/* END TO SETUP RIGHT VIEW */}
        </Header>
      {/* END TO SETUP HEADER VIEW */}

        <Content>
          <View style={styles.main_view}>
          {/* BEGIN TO SETUP ORDER VIEW */}
            <Text style={styles.text_row_que}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            <Text style={[styles.text_row_ans, {marginTop: Dimensions.get("window").height * 0.015}]}>
              Nunc a ultricies orci. Morbi id iaculis diam. Vestibulum laoreet, magna in commodo egestas, elit metus congue est, vitae hendrerit tortor augue a nisl.
              <Text style={styles.text_phone_no}> +91 1234 5678 </Text>
              Vivamus nisi elit, laoreet id blandit venenatis, vulputate ut leo. Praesent suscipit eu orci sed efficitur. Praesent consequat convallis ultricies.
            </Text>
          {/* END TO SETUP ORDER VIEW */}

          {/* BEGIN TO SETUP ACCOUNT VIEW */}
            <Text style={[styles.text_row_que, {marginTop: Dimensions.get("window").height * 0.04}]}>Maecenas vitae dolor ut dui feugiat placerat a in justo.</Text>
            <Text style={[styles.text_row_ans, {marginTop: Dimensions.get("window").height * 0.015}]}>Nulla pellentesque tortor in nibh placerat bibendum.</Text>
          {/* END TO SETUP ACCOUNT VIEW */}

          {/* BEGIN TO SETUP LOGIN VIEW */}
            <View style={[styles.step_view, {marginTop: Dimensions.get("window").height * 0.05}]}>
                <View style={styles.arrow_view}>
                    <FontAwesome name="chevron-right" size={10} color="#ffffff"/>
                </View>
                <Text style={styles.text_row_ans}>Lorem Ipsum</Text>
            </View>
          {/* END TO SETUP LOGIN VIEW */}

          {/* BEGIN TO SETUP SELECTREGISTER VIEW */}
            <View style={[styles.step_view, {marginTop: Dimensions.get("window").height * 0.020}]}>
                <View style={styles.arrow_view}>
                    <FontAwesome name="chevron-right" size={10} color="#ffffff"/>
                </View>
                <Text style={styles.text_row_ans}>Lorem Ipsum</Text>
            </View>
          {/* END TO SETUP SELECTREGISTER VIEW */}

          {/* BEGIN TO SETUP SUBMIT VIEW */}
            <View style={[styles.step_view, {marginTop: Dimensions.get("window").height * 0.020}]}>
                <View style={styles.arrow_view}>
                    <FontAwesome name="chevron-right" size={10} color="#ffffff"/>
                </View>
                <Text style={styles.text_row_ans}>Lorem Ipsum</Text>
            </View>
          {/* END TO SETUP SUBMIT VIEW */}

          {/* BEGIN TO SETUP DISCOUNT VIEW */}
            <Text style={[styles.text_row_que, {marginTop: Dimensions.get("window").height * 0.05}]}>Vestibulum id urna ac metus venenatis efficitur.</Text>
            <Text style={[styles.text_row_ans, {marginTop: Dimensions.get("window").height * 0.015}]}>Vivamus ornare venenatis quam, in sollicitudin enim maximus vitae.</Text>
          {/* END TO SETUP DISCOUNT VIEW */}
            </View>
        </Content>
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
  main_view:{
    paddingTop: Dimensions.get("window").height * 0.04,
    paddingBottom: Dimensions.get("window").height * 0.04,
    paddingLeft: Dimensions.get("window").width * 0.045,
    paddingRight: Dimensions.get("window").width * 0.045
  },
  text_row_que:{
    fontSize: moderateScale(16),
    fontFamily: font_type.FontLight,
    color: '#362f2d',
    textAlign: 'left'
  },
  text_row_ans:{
    fontSize: moderateScale(16),
    fontFamily: font_type.FontLight,
    color: '#111111',
    textAlign: 'left'
  },
  step_view:{
    flexDirection: 'row',
    marginLeft: Dimensions.get("window").width * 0.09,
    alignItems: 'center',
  },
  text_phone_no:{
    fontSize: moderateScale(16),
    fontFamily: font_type.FontLight,
    color: '#ff6347'
  },
  arrow_view:{
    width: Dimensions.get("window").height * 0.024,
    height : Dimensions.get("window").height * 0.024,
    backgroundColor: '#000000',
    borderRadius: Dimensions.get("window").height * 0.012,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: (I18nManager.isRTL) ? 0 : Dimensions.get("window").height * 0.003,
    marginRight: (I18nManager.isRTL) ? 0 : Dimensions.get("window").height * 0.022,
    paddingRight: (I18nManager.isRTL) ? Dimensions.get("window").height * 0.003 : 0,
  }
});
// END TO MAKE STYLE
