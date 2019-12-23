import React, { Component } from 'react';
import {Text,Image,StatusBar,Platform,Dimensions,TouchableOpacity,KeyboardAvoidingView,TextInput,I18nManager,StyleSheet} from 'react-native';
import {Container,Button,Right,Left,Content,Body,Header,Icon,Title} from 'native-base';
import {View} from 'react-native-animatable';
import Foundation from 'react-native-vector-icons/Foundation';
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";

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

export default class Social09 extends Component {

  render(){

    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW

    //BEGIN TO SETUP DATA
    var data = [
      {
        id: 1,
        name: 'Lorem ipsum',
        profileImage: GlobalInclude.Image7,
        time: '1 mins',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        name: 'Lorem ipsum',
        profileImage: GlobalInclude.Image5,
        time: '2 mins',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 3,
        name: 'Lorem ipsum',
        profileImage: GlobalInclude.Image6,
        time: '3 mins',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 4,
        name: 'Lorem ipsum',
        profileImage:GlobalInclude.Image7,
        time: '4 mins',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 5,
        name: 'Lorem ipsum',
        profileImage: GlobalInclude.Image8,
        time: '5 mins',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      }
    ]
    //END TO SETUP DATA

    return(
      <Container style={styles.main}>
      {/* BEGIN TO SETUP HEADER VIEW */}
        <Header style={styles.header}>
        {/* BEGIN TO SETUP LEFT VIEW */}
          <Left style={styles.left}>
            <TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
            {
              (I18nManager.isRTL)
              ?
                  <Icon name="ios-arrow-forward" style={styles.back_arrow}/>
              :
                  <Icon name="ios-arrow-back" style={styles.back_arrow}/>
            }
            </TouchableOpacity>
          </Left>
        {/* END TO SETUP LEFT VIEW */}

        {/* BEGIN TO SETUP BODY VIEW */}
          <Body style={styles.body}>
            <Title style={styles.title_text}>Comments</Title>
          </Body>
        {/* END TO SETUP BODY VIEW */}

        {/* BEGIN TO SETUP RIGHT VIEW */}
          <Right style={styles.right}>
            <Button transparent></Button>
          </Right>
        {/* END TO SETUP RIGHT VIEW */}
        </Header>
      {/* END TO SETUP HEADER VIEW */}
      
        <Content>
        <View style={styles.list_main_view} animation="zoomInDown" duration={1100} delay={1400}>
        {
          data.map((item, index) => {
           return (
             <View style={styles.row_bg} key={index}>
               <View style={{flexDirection: 'row'}}>
               {/* BEGIN TO SETUP PROFILEIMAGE VIEW */}
                 <Image source={item.profileImage} style={styles.profile_img}/>
                {/* END TO SETUP PROFILEIMAGE VIEW */}

                 <View style={styles.name_time_main_view}>
                 {/* BEGIN TO SETUP NAME AND TIME VIEW */}
                   <View style={styles.name_time_view}>
                     <Text style={styles.row_name_txt}>{item.name}</Text>
                     <Right><View><Text style={styles.row_time_txt}>{item.time}</Text></View></Right>
                   </View>
                  {/* END TO SETUP NAME AND TIME VIEW */}

                  {/* BEGIN TO SETUP DESCRIPTION VIEW */}
                   <Text style={styles.row_desc_txt}>{item.description}</Text>
                  {/* END TO SETUP DESCRIPTION VIEW */}
                 </View>
               </View>
               <View style={ (index === data.length - 1) ? null : styles.divider_horizontal}/>
            </View>
            )})
        }
        </View>
      </Content>
    {
      (Platform.OS === 'ios') ?
      <KeyboardAvoidingView behavior="padding">
      {/* BEGIN TO SETUP BOTTOM VIEW */}
        <View style={styles.bottom_main_view}>
      {/* BEGIN TO SETUP CAMERA AND COMMENT AND VOICE VIEW */}
        <View style={styles.bottom_view}>

        {/* BEGIN TO SETUP CAMERA VIEW */}
          <TouchableOpacity onPress={()=>alert("Camera Button Click")}>
            <Foundation name="camera" size={35} color="#d4d4d4" />
          </TouchableOpacity>
        {/* END TO SETUP CAMERA VIEW */}

        {/* BEGIN TO SETUP COMMENT VIEW */}
          <TextInput
              style={styles.comment_text}
              placeholder = "Enter your comments..."
              placeholderTextColor = "#c7c7cc"
              underlineColorAndroid = "transparent"
              autoCapitalize = "none"
              keyboardType = "default"
              textAlign= {I18nManager.isRTL ? 'right' : 'left'}
              selectionColor={'#6f6f6f'}>
          </TextInput>
        {/* END TO SETUP COMMENT VIEW */}

        {/* BEGIN TO SETUP VOICERECORDER VIEW */}
            <TouchableOpacity onPress={()=>alert("Voice Recorder Button Click")}>
              <Image source={require('./icon_voice.png')} style={styles.mic_img}/>
            </TouchableOpacity>
        {/* END TO SETUP VOICERECORDER VIEW */}
        </View>
      {/* END TO SETUP CAMERA AND COMMENT AND VOICE VIEW */}
        </View>
      {/* END TO SETUP BOTTOM VIEW */}
      </KeyboardAvoidingView>
      :
      <View style={styles.bottom_main_view}>
      {/* BEGIN TO SETUP CAMERA AND COMMENT AND VOICE VIEW */}
        <View style={styles.bottom_view}>
        {/* BEGIN TO SETUP CAMERA VIEW */}
          <TouchableOpacity onPress={()=>alert("Camera Button Click")}>
              <Foundation name="camera" size={35} color="#d4d4d4" />
           </TouchableOpacity>
         {/* END TO SETUP CAMERA VIEW */}

         {/* BEGIN TO SETUP COMMENT VIEW */}
            <TextInput
              style={styles.comment_text}
              placeholder = "Enter your comments..."
              placeholderTextColor = "#c7c7cc"
              underlineColorAndroid = "transparent"
              autoCapitalize = "none"
              keyboardType = "default"
              textAlign= {I18nManager.isRTL ? 'right' : 'left'}
              selectionColor={'#6f6f6f'}>
            </TextInput>
          {/* END TO SETUP COMMENT VIEW */}

          {/* BEGIN TO SETUP VOICERECORDER VIEW */}
            <TouchableOpacity onPress={()=>alert("Voice Recorder Button Click")}>
              <Image source={require('./icon_voice.png')} style={styles.mic_img}/>
            </TouchableOpacity>
          {/* END TO SETUP VOICERECORDER VIEW */}
        </View>
      {/* END TO SETUP CAMERA AND COMMENT AND VOICE VIEW */}
      </View>
    }
    </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  main: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: 'white',
    flexDirection: "column"
  },
  left: {
    paddingTop: 5,
    flex: 1
  },
  back_arrow: {
    width: 30,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    color: 'white',
    fontSize: moderateScale(25)
  },
  title_text: {
    color: 'white'
  },
  right: {
    flex: 1
  },
  header: {
    backgroundColor: "#ff6347",
    height: Dimensions.get("window").height * 0.1,
    borderBottomWidth: 0,
    paddingTop: Dimensions.get("window").height * 0.03,
    elevation: 0,
    paddingLeft: Dimensions.get("window").width * 0.05,
    paddingRight: Dimensions.get("window").width * 0.05
  },
  row_bg: {
    width: Dimensions.get("window").width,
    backgroundColor: 'white',
    marginLeft: Dimensions.get("window").width * 0.03,
    marginTop: Dimensions.get("window").height * 0.015
  },
  profile_img: {
    width: Dimensions.get("window").width * 0.12,
    height: Dimensions.get("window").width * 0.12,
    borderRadius: Dimensions.get("window").width * 0.06,
    alignSelf: "flex-start"
  },
  row_name_txt: {
    color: "#6f6f6f",
    fontSize: moderateScale(17),
    fontFamily: font_type.FontBold
  },
  row_time_txt: {
    color: "#b7b7b7",
    fontSize: moderateScale(14),
    fontFamily: font_type.FontLight
  },
  row_desc_txt: {
    color: "#6f6f6f",
    fontSize: moderateScale(15),
    fontFamily: font_type.FontLight,
    marginTop: Dimensions.get("window").height * 0.015,
    marginBottom: Dimensions.get("window").height * 0.015,
    textAlign: "left"
  },
  divider_horizontal: {
    width: Dimensions.get("window").width * 0.99 + 5,
    height: Dimensions.get("window").height * 0.001,
    backgroundColor: "#D7D7D7",
    alignSelf: "flex-end"
  },
  bottom_main_view: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.1,
    backgroundColor: "#f7f7f7",
    justifyContent: "center"
  },
  bottom_view: {
    flexDirection: "row",
    marginTop: Dimensions.get("window").height * 0.015,
    marginBottom: Dimensions.get("window").height * 0.015,
    marginLeft: Dimensions.get("window").width * 0.035,
    marginRight: Dimensions.get("window").width * 0.035
  },
  comment_text: {
    backgroundColor: "#FAFAFA",
    marginLeft: Dimensions.get("window").width * 0.03,
    padding: Dimensions.get("window").height * 0.0012,
    paddingLeft: 5,
    borderRadius: 5,
    borderWidth: Dimensions.get("window").height * 0.001,
    borderColor: "#c8c9cd",
    fontSize: moderateScale(14),
    fontFamily: font_type.FontLight,
    color: "#c7c7cc",
    width: Dimensions.get("window").width * 0.7
  },
  mic_img: {
    width: Dimensions.get("window").height * 0.045,
    height: Dimensions.get("window").height * 0.045,
    marginLeft: Dimensions.get("window").width * 0.03,
    marginTop: Dimensions.get("window").height * 0.007
  },
  name_time_main_view: {
    flexDirection: "column",
    marginLeft: Dimensions.get("window").width * 0.045,
    width: Dimensions.get("window").width * 0.77
  },
  name_time_view: {
    flexDirection: "row"
  },
  list_main_view: {
    width: Dimensions.get("window").width
  }
});
// END TO MAKE STYLE
