import React, { Component } from "react";
import {View,Image,StatusBar,Platform,ImageBackground,Dimensions,TouchableOpacity,Keyboard,KeyboardAvoidingView,ListView,I18nManager,StyleSheet} from "react-native";
import {Container,Header,Content,Button,Left,Right,Body,Title,Icon,List,Text,Item,Input,Footer} from "native-base";
import LinearGradient from "react-native-linear-gradient";
import { Actions } from "react-native-router-flux";
import Foundation from "react-native-vector-icons/Foundation";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import GlobalInclude from "../../../../../Global/GlobalInclude/globalinclude.js";

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

export default class PersonalChat extends Component {
  constructor(props) {
    super(props);

    //BEGIN TO SETUP DATAOBJECTS
    const dataObjects = [
      {
        id: 1,
        userId: 1,
        profile: GlobalInclude.Image3,
        message: "Lorem Ipsum.",
        currentMsg: false
      },
      {
        id: 2,
        userId: 1,
        profile: GlobalInclude.Image4,
        message: "Lorem Ipsum",
        currentMsg: true
      },
      {
        id: 3,
        userId: 2,
        profile: GlobalInclude.Image5,
        message: "Lorem Ipsum",
        currentMsg: true
      },
      {
        id: 4,
        userId: 1,
        profile: GlobalInclude.Image6,
        message: "Lorem Ipsum",
        currentMsg: true
      },
      {
        id: 5,
        userId: 2,
        profile:GlobalInclude.Image7,
        message: "Lorem Ipsum",
        currentMsg: true
      },
      {
        id: 6,
        userId: 1,
        profile: GlobalInclude.Image8,
        message: "Lorem Ipsum",
        currentMsg: true
      },
      {
        id: 7,
        userId: 2,
        profile:  GlobalInclude.Image9,
        message: "Lorem Ipsum",
        currentMsg: true
      },
      {
        id: 8,
        userId: 1,
        profile:  GlobalInclude.Image10,
        message: "Lorem Ipsum",
        currentMsg: true
      },
      {
        id: 9,
        userId: 2,
        profile:  GlobalInclude.Image1,
        message: "Lorem Ipsum",
        currentMsg: false
      },
      {
        id: 10,
        userId: 2,
        profile: GlobalInclude.Image2,
        message: "Lorem Ipsum",
        currentMsg: true
      }
    ];
    //END TO SETUP DATAOBJECTS

    //BEGIN TO SETUP LISTVIEWROW
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(dataObjects),
      replyTxt: ""
    };
    //END TO SETUP LISTVIEWROW
  }

  //BEGIN TO SETUP ONMESSAGE
  onMessage() {
    if (this.state.replyTxt == "") {
      alert("Enter Message");
      return false;
    } else {
      this._closeKeyboard();
      this.setState({ replyTxt: "" });
      alert("Message Sent");
    }
  }
  //END TO SETUP ONMESSAGE

  //BEGIN TO SETUP CLOSEKEYBOARD
  _closeKeyboard() {
    Keyboard.dismiss();
  }
  //END TO SETUP CLOSEKEYBOARD

  //BEGIN TO SETUP RENDERROW
  _renderRow(rowData) {
    return (
      <View style={styles.row_main}>
        {rowData.userId == 1 ? (
          <View style={[styles.right_chat_main,rowData.currentMsg
                ? { marginBottom: Dimensions.get("window").height * 0.016, marginTop: 1.5 }
                : { marginVertical: 1.5 }
            ]}>
          {/* BEGIN TO SETUP LINEARGRADIENT VIEW */}
            <LinearGradient
              locations={[0.1, 0.75]}
              colors={["#f87362", "#fa6982"]}
              style={styles.right_chat_box}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}>
              <Text style={styles.msg_sent_txt}>{rowData.message}</Text>
            </LinearGradient>
          {/* END TO SETUP LINEARGRADIENT VIEW */}
            {rowData.currentMsg == true ? (
              <View style={styles.right_indicator_main}>
                <Image source={require('./icon_rightchat_indicator.png')} style={styles.right_indicator} />
                <Image source={rowData.profile} style={[styles.profile, { alignSelf: "flex-end" }]}/>
              </View>
            ) : null}
          </View>
        ) : (
          <View style={[styles.left_chat_main, rowData.currentMsg ? { marginBottom: Dimensions.get("window").height * 0.016, marginTop: 1.5 }
                : { marginVertical: 1.5 }
            ]}>
            {rowData.currentMsg == true ? (
              <View style={styles.left_indicator_main}>
              {/* BEGIN TO SETUP PROFILE AND CHATINDICATOR VIEW */}
                <Image source={rowData.profile} style={styles.profile} />
                <Image source={require('./icon_leftchat_indicator.png')} style={styles.left_indicator}/>
              {/* END TO SETUP PROFILE AND CHATINDICATOR VIEW */}
              </View>
            ) : null}
            <View style={[styles.left_chat_box,rowData.currentMsg ? { marginLeft: Dimensions.get("window").height * 0.003 } : { marginLeft: Dimensions.get("window").height * 0.045 }]}>
            {/* BEGIN TO SETUP MESSAGE VIEW */}
              <Text style={styles.msg_receive_txt}>{rowData.message}</Text>
            {/* END TO SETUP MESSAGE VIEW */}
            </View>
          </View>
        )}
      </View>
    );
  }
  //END TO SETUP RENDERROW

  render() {

    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    return (
      <Container>
      {/* BEGIN TO SETUP IMAGEBACKGROUND VIEW */}
        <ImageBackground source={require('./gradient_bg.png')} style={styles.header}>
        {/* BEGIN TO SETUP HEADER VIEW */}
          <Header androidStatusBarColor={'rgba(0,0,0,0)'} style={styles.header}>
          {/* BEGIN TO SETUP LEFT VIEW */}
            <Left style={{ flex: 1.5 }}>
              <TouchableOpacity onPress={Actions.pop} style={styles.left}>
                {I18nManager.isRTL ? (
                  <FontAwesome name="angle-right" size={30} color="white" />
                ) : (
                  <FontAwesome name="angle-left" size={30} color="white" />
                )}
              </TouchableOpacity>
            </Left>
          {/* END TO SETUP LEFT VIEW */}

          {/* BEGIN TO SETUP BODY VIEW */}
            <Body style={styles.body}>
              <Title style={styles.headet_txt}>Emma Roberts</Title>
            </Body>
          {/* END TO SETUP BODY VIEW */}

          {/* BEGIN TO SETUP RIGHT VIEW */}
            <Right style={styles.right} />
          {/* END TO SETUP RIGHT VIEW */}
          </Header>
        {/* END TO SETUP HEADER VIEW */}
        </ImageBackground>
      {/* END TO SETUP IMAGEBACKGROUND VIEW */}

      {/* BEGIN TO SETUP LISTVIEW VIEW */}
        {Platform.OS === "ios" ? (
          <ListView
            style={styles.list_bg}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
            enableEmptySections
            pageSize={4}/>
        ) : (
          <Content style={styles.content}>
            <ListView
              style={styles.list_bg}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow.bind(this)}
              enableEmptySections
              pageSize={4}/>
          </Content>
        )}
      {/* END TO SETUP LISTVIEW VIEW */}

        {Platform.OS === "ios" ? (
          <KeyboardAvoidingView behavior="padding">
          {/* BEGIN TO SETUP FOOTER VIEW */}
            <Footer style={styles.footer_style}>
            {/* BEGIN TO SETUP LEFT VIEW */}
              <Left style={styles.footer_left}>
                <TouchableOpacity onPress={() => alert("Upload Image")} style={styles.footer_left_content}>
                  <Foundation name="camera" size={25} color="#848d99" />
                </TouchableOpacity>
              </Left>
            {/* END TO SETUP LEFT VIEW */}

            {/* BEGIN TO SETUP IMESSAGE VIEW */}
              <Body style={{ flex: 2.8 }}>
                <Item regular style={styles.message_box}>
                  <Input
                    placeholder="iMessage"
                    placeholderTextColor="#c7c7cc"
                    textAlign={I18nManager.isRTL ? "right" : "left"}
                    keyboardType="default"
                    returnKeyType="send"
                    style={{ color: "#363636" }}
                    value={this.state.replyTxt}
                    onChangeText={replyTxt => this.setState({ replyTxt })}
                    onSubmitEditing={() => this.onMessage()}/>
                </Item>
              </Body>
            {/* END TO SETUP IMESSAGE VIEW */}

            {/* BEGIN TO SETUP IMESSAGE ICON VIEW */}
              <Right style={styles.footer_right}>
                <TouchableOpacity onPress={() => this.onMessage()} style={styles.footer_right_content}>
                  <Image source={require('./icon_emoji.png')} style={styles.icon_size_footer} />
                </TouchableOpacity>
              </Right>
            {/* END TO SETUP IMESSAGE ICON VIEW */}
            </Footer>
          {/* END TO SETUP FOOTER VIEW */}
          </KeyboardAvoidingView>
        ) : (
          <Footer style={styles.footer_style}>
          {/* BEGIN TO SETUP CAMERA VIEW */}
            <Left style={styles.footer_left}>
              <TouchableOpacity onPress={() => alert("Upload Image")} style={styles.footer_left_content}>
                <Foundation name="camera" size={25} color="#848d99" />
              </TouchableOpacity>
            </Left>
          {/* END TO SETUP CAMERA VIEW */}

          {/* BEGIN TO SETUP IMESSAGE VIEW */}
            <Body style={{ flex: 2.8 }}>
              <Item regular style={styles.message_box}>
                <Input
                  placeholder="iMessage"
                  placeholderTextColor="#c7c7cc"
                  textAlign={I18nManager.isRTL ? "right" : "left"}
                  keyboardType="default"
                  returnKeyType="send"
                  style={{ color: "#363636" }}
                  value={this.state.replyTxt}
                  onChangeText={replyTxt => this.setState({ replyTxt })}
                  onSubmitEditing={() => this.onMessage()}/>
              </Item>
            </Body>
          {/* END TO SETUP IMESSAGE VIEW */}

          {/* BEGIN TO SETUP IMESSAGE ICON VIEW */}
            <Right style={styles.footer_right}>
              <TouchableOpacity onPress={() => this.onMessage()} style={styles.footer_right_content}>
                <Image source={require('./icon_emoji.png')} style={styles.icon_size_footer} />
              </TouchableOpacity>
            </Right>
          {/* END TO SETUP IMESSAGE ICON VIEW */}
          </Footer>
        )}
      </Container>
    );
  }
}

//BEGIN TO SETUP STYLE
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(0,0,0,0)',
  	height: (Dimensions.get("window").height * 0.14),
  	width: Dimensions.get("window").width,
  	flexDirection: 'row',
    borderBottomColor: 'rgba(0,0,0,0)',
    paddingTop: (Dimensions.get("window").width * 0.02),
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  left_msg: {
    fontFamily: font_type.FontLight,
    fontSize: moderateScale(14),
    color: 'white'
  },
  body: {
    flex: 1.8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  right: {
    flex: 1.1,
    alignItems: 'center',
    marginRight: (Dimensions.get("window").width * 0.02),
    paddingTop: (Platform.OS === 'ios')? 5 : 0,
  },
  content: {
    backgroundColor: 'white',
    paddingTop: (Dimensions.get("window").height*0.04),
  },
  row_main: {
    marginHorizontal:(Dimensions.get("window").width * 0.03),
  },
  icon_size: {
    width: (Dimensions.get("window").height * 0.03),
    fontSize: moderateScale(30),
    color: 'white'
  },
  icon_size_footer: {
    height: (Dimensions.get("window").height * 0.04),
    width: (Dimensions.get("window").height * 0.04),
    resizeMode: 'contain'
  },
  footer_style: {
    borderTopWidth: 1,
    borderColor:'#848d99',
    backgroundColor: 'white'
  },
  footer_left: {
    flex:0.6,
    alignItems: 'center'
  },
  footer_left_content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  message_box: {
    height:(Dimensions.get("window").height * 0.045),
    width:(Dimensions.get("window").width * 0.69),
    borderWidth: 1,
    borderColor: '#c7c7cc',
    borderRadius: 4
  },
  footer_right: {
    flex:0.6,
    alignItems: 'center'
  },
  footer_right_content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  right_chat_main: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    marginRight: (Dimensions.get("window").width * 0.03),
    marginLeft: (Dimensions.get("window").width * 0.07)
  },
  left_chat_main: {
    flexDirection: 'row',
    marginRight: (Dimensions.get("window").width * 0.25)
  },
  right_chat_box: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingVertical: (Dimensions.get("window").height*0.012),
    paddingHorizontal: (Dimensions.get("window").width * 0.05),
    borderRadius: 16,
    marginRight: (Dimensions.get("window").height*0.028),
    zIndex:10
  },
  left_chat_box: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingVertical: (Dimensions.get("window").height*0.012),
    paddingHorizontal: (Dimensions.get("window").width * 0.05),
    backgroundColor:'#e5e5ea',
    borderRadius: 16,
    zIndex:10
  },
  right_indicator_main: {
    alignSelf: 'flex-end',
    height:(Dimensions.get("window").height*0.025),
    width:(Dimensions.get("window").height*0.025),
    position: 'absolute',
    right:0,
    flexDirection: 'row'
  },
  left_indicator_main: {
    alignSelf: 'flex-end',
    flexDirection: 'row'
  },
  right_indicator: {
    alignSelf: 'flex-end',
    resizeMode:'contain',
    height:(Dimensions.get("window").height*0.025),
    width:(Dimensions.get("window").height*0.025),
    marginRight: (Dimensions.get("window").height*0.019),
    position: 'absolute',
    zIndex:5,
    right:0,
    bottom:1,
    transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]
  },
  left_indicator: {
    resizeMode:'contain',
    height:(Dimensions.get("window").height*0.025),
    width:(Dimensions.get("window").height*0.025),
    marginLeft: (Platform.OS == 'ios')?(Dimensions.get("window").height*0.036):(Dimensions.get("window").height*0.0365),
    position: 'absolute',
    zIndex:5,
    bottom:1,
    transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]
  },
  profile: {
    resizeMode:'cover',
    height:(Dimensions.get("window").height*0.04),
    width:(Dimensions.get("window").height*0.04),
    borderRadius:(Dimensions.get("window").height*0.02),
    margin: 1
  },
  msg_sent_txt: {
    color:'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: moderateScale(16)
  },
  msg_receive_txt: {
    color:'black',
    fontSize: moderateScale(16)
  },
  list_bg: {
    paddingBottom: (Dimensions.get("window").height*0.05)
  },
  headet_txt: {
    color: 'white'
  }
});
//END TO SETUP STYLE
