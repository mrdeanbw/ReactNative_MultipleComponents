import React, { Component } from "react";
import {View,Image,StatusBar,Platform,ImageBackground,Dimensions,TouchableOpacity,ListView,BackHandler,I18nManager,StyleSheet} from "react-native";
import {Container,Header,Content,Button,Left,Right,Body,Title,Icon,List,Text,Separator} from "native-base";
import { Actions } from "react-native-router-flux";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import EvilIcons from "react-native-vector-icons/EvilIcons";
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

export default class Message extends Component {
  constructor(props) {
    super(props);

    //BEGIN TO SETUP DATAOBJECTS
    const dataObjects = [
      {
        id: 1,
        profile: GlobalInclude.Image1,
        name: "Lorem Ipsum",
        recentMsg: "Lorem Ipsum",
        time: "00:00 AM"
      },
      {
        id: 2,
        profile: GlobalInclude.Image2,
        name: "Lorem Ipsum",
        recentMsg:"Lorem Ipsum",
        time: "00:00 AM"
      },
      {
        id: 3,
        profile: GlobalInclude.Image3,
        name: "Lorem Ipsum",
        recentMsg: "Lorem Ipsum",
        time: "00:00 PM"
      },
      {
        id: 4,
        profile: GlobalInclude.Image4,
        name: "Lorem Ipsum",
        recentMsg: "Lorem Ipsum",
        time: " 00:00 PM"
      },
      {
        id: 5,
        profile: GlobalInclude.Image5,
        name: "Lorem Ipsum",
        recentMsg: "Lorem Ipsum",
        time: "Lorem Ipsum"
      },
      {
        id: 6,
        profile: GlobalInclude.Image6,
        name: "Lorem Ipsum",
        recentMsg: "Lorem Ipsum",
        time: "Lorem Ipsum"
      },
      {
        id: 7,
        profile: GlobalInclude.Image7,
        name: "Lorem Ipsum",
        recentMsg: "Lorem Ipsum",
        time: "Lorem Ipsum"
      }
    ];
    //END TO SETUP DATAOBJECTS

    //BEGIN TO SETUP LISTVIEW ROW
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      basic: true,
      dataSource: ds.cloneWithRows(dataObjects)
    };
    //END TO SETUP LISTVIEW ROW
  }

  //BEGIN TO SETUP ONLEARNMORE
  onLearnMore = user => {
    Actions.tab_2_2();
  };
  //END TO SETUP ONLEARNMORE

  //BEGIN TO SETUP RENDERROW
  _renderRow(rowData) {
    return (
      <View style={styles.row_main}>
        <TouchableOpacity onPress={() => this.onLearnMore()}>
          <View style={styles.list_content}>
          {/* BEGIN TO SETUP PROFILE IMAGE VIEW */}
            <Image source={rowData.profile} style={styles.profile} />
          {/* END TO SETUP PROFILE IMAGE VIEW */}
            <View style={styles.sub_row}>
              <View style={styles.header_content}>
              {/* BEGIN TO SETUP NAME VIEW */}
                <Text style={styles.header_text}>{rowData.name}</Text>
              {/* END TO SETUP NAME VIEW */}

              {/* BEGIN TO SETUP TIME VIEW */}
                <View style={styles.header_right}>
                  <Text style={styles.time}>{rowData.time}</Text>
                  {I18nManager.isRTL ? (
                    <EvilIcons name="chevron-left" color="#c7c7cc" size={30} />
                  ) : (
                    <EvilIcons name="chevron-right" color="#c7c7cc" size={30} />
                  )}
                </View>
              {/* END TO SETUP TIME VIEW */}
              </View>
              {/* BEGIN TO SETUP RECENTMSG VIEW */}
                <Text numberOfLines={2} style={styles.recent_msg}>
                  {rowData.recentMsg}
                </Text>
              {/* END TO SETUP RECENTMSG VIEW */}
            </View>
          </View>
        </TouchableOpacity>
        <Separator style={styles.separator_style} />
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
            <Left style={{ flex: 1 }}>
              <TouchableOpacity onPress={Actions.pop}>
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
              <Title style={styles.title_txt}> Message </Title>
            </Body>
          {/* END TO SETUP BODY VIEW */}

          {/* BEGIN TO SETUP RIGHT VIEW */}
            <Right style={styles.right}>
              <TouchableOpacity onPress={() => alert("New Message Button Click")}>
                <Image source={require('./icon_crate_message.png')} style={styles.icon_size} />
              </TouchableOpacity>
            </Right>
          {/* END TO SETUP RIGHT VIEW */}
          </Header>
        {/* END TO SETUP HEADER VIEW */}
        </ImageBackground>
      {/* END TO SETUP IMAGEBACKGROUND VIEW */}
        <Content style={styles.content}>
          <List
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
            renderLeftHiddenRow={data => (
              <View style={styles.swipe_button}>
              {/* BEGIN TO SETUP CHAT VIEW */}
                <Button full
                  onPress={() => alert("chat button click")}
                  style={[styles.button_style, { backgroundColor: "#00aeef" }]}>
                  <Image source={require('./icon_chat.png')} style={styles.icon_size} />
                </Button>
              {/* END TO SETUP CHAT VIEW */}

              {/* BEGIN TO SETUP VIDEO VIEW */}
                <Button full
                  onPress={() => alert("Video call button click")}
                  style={[styles.button_style, { backgroundColor: "#0072bc" }]}>
                  <Image source={require('./icon_video.png')} style={styles.icon_size} />
                </Button>
              {/* END TO SETUP RIGHT VIEW */}
              </View>
            )}
            renderRightHiddenRow={(data, secId, rowId, rowMap) => (
              <View style={styles.swipe_button}>
              {/* BEGIN TO SETUP LOCK VIEW */}
                <Button onPress={() => alert("Lock Button Click")} style={[styles.button_style, { backgroundColor: "#ff8c00" }]}>
                  <EvilIcons name="lock" size={35} color="white" />
                </Button>
              {/* END TO SETUP LOCK VIEW */}

              {/* BEGIN TO SETUP DELETE VIEW */}
                <Button onPress={() => alert("delete Button Click")} style={[styles.button_style, { backgroundColor: "#e81123" }]}>
                  <FontAwesome name="trash-o" size={24} color="white" />
                </Button>
              {/* END TO SETUP DELETE VIEW */}
              </View>
            )}
            leftOpenValue={Dimensions.get("window").width  * 0.3}
            rightOpenValue={-(Dimensions.get("window").width  * 0.3)}
          />
        </Content>
      </Container>
    );
  }
}

//BEGIN TO SETUP STYLE
const styles = StyleSheet.create({
  main: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width ,
    backgroundColor: "#F2F2F2",
    flexDirection: 'column'
  },
  header: {
    backgroundColor: 'rgba(0,0,0,0)',
  	height: (Dimensions.get("window").height * 0.14),
  	width: Dimensions.get("window").width ,
  	flexDirection: 'row',
    borderBottomColor: 'rgba(0,0,0,0)',
    paddingTop: (Dimensions.get("window").width  * 0.02),
  },
  left: {
    flex: 1,
  },
  body: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title_txt: {
    color: 'white'
  },
  right: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'white',
  },
  row_main: {
    marginLeft:(Dimensions.get("window").width  * 0.08),
  },
  list_content: {
    height:(Dimensions.get("window").height*0.095),
    marginVertical: (Dimensions.get("window").height*0.01),
    flexDirection: 'row'
  },
  profile: {
    height: (Dimensions.get("window").height*0.07),
    width: (Dimensions.get("window").height*0.07),
    borderRadius: (Dimensions.get("window").height*0.035),
    marginRight: (Dimensions.get("window").width *0.03),
    alignSelf: 'center'
  },
  sub_row: {
    width:(Dimensions.get("window").width *0.73)
  },
  header_content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  header_text: {
    fontFamily: font_type.FontBold,
    fontSize: moderateScale(17),
    color: 'black'
  },
  header_right: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  time: {
    fontFamily: font_type.FontLight,
    fontSize: moderateScale(14),
    color: '#8f8f94',
    marginRight: (Dimensions.get("window").width *0.02)
  },
  recent_msg: {
    fontFamily: font_type.FontLight,
    fontSize: moderateScale(14),
    color: '#8f8f94',
    marginTop: (Platform.OS === 'ios')?(Dimensions.get("window").height*0.003):0,
    textAlign: 'left'
  },
  icon_size: {
    height: (Dimensions.get("window").height * 0.035),
    width: (Dimensions.get("window").height * 0.035),
    resizeMode: 'contain'
  },
  swipe_button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button_style: {
    alignItems: 'center',
    justifyContent: 'center',
    height:(Dimensions.get("window").height * 0.12)
  },
  separator_style: {
    height: 0.5,
    backgroundColor: '#c8c7cc',
  }
});
//END TO SETUP STYLE
