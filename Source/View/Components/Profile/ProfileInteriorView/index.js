import React, { Component } from "react";
import {Text,ListView,Image,StatusBar,Platform,ImageBackground,Dimensions,StyleSheet,TouchableOpacity,Modal,TouchableHighlight,Alert,I18nManager} from "react-native";
import {Container,Button,Right,Left,ListItem,Content,Body,Header,Title,Icon} from "native-base";
import { TabViewAnimated, TabBar, SceneMap } from "react-native-tab-view";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View } from "react-native-animatable";
import ScrollableTabView, {ScrollableTabBar,DefaultTabBar} from "../../../ThirdPartyModule/react-native-scrollable-tab-view";
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

export default class ProfileInterior extends Component {
  constructor(props) {
    super(props);

    //BEGIN INITALIZE DATA
    const dataObjects = [
      {
        id: 1,
        cardBgImage: GlobalInclude.Image4,
        profileImage: GlobalInclude.Image5,
        title: "Lorem ipsum",
        addrss: "Lorem ipsum",
        name: "Lorem ipsum",
        time: "8 mins"
      },
      {
        id: 2,
        cardBgImage: GlobalInclude.Image1,
        profileImage: GlobalInclude.Image2,
        title: "Lorem ipsum",
        addrss: "Ojai,California",
        name: "Lorem ipsum",
        time: "30 mins"
      },
      {
        id: 3,
        cardBgImage: GlobalInclude.Image10,
        profileImage: GlobalInclude.Image9,
        title: "Lorem ipsum",
        addrss: "Lorem ipsum",
        name: "Lorem ipsum",
        time: "2 mins"
      },
      {
        id: 4,
        cardBgImage: GlobalInclude.Image8,
        profileImage: GlobalInclude.Image7,
        title: "Lorem ipsum",
        addrss: "Lorem ipsum",
        name: "Lorem ipsum",
        time: "60 mins"
      },
      {
        id: 5,
        cardBgImage: GlobalInclude.Image6,
        profileImage: GlobalInclude.Image5,
        title: "Lorem ipsum",
        addrss: "Lorem ipsum",
        name: "Lorem ipsum",
        time: "15 mins"
      },
      {
        id: 6,
        cardBgImage: GlobalInclude.Image10,
        profileImage: GlobalInclude.Image5,
        title: "Lorem ipsum",
        addrss: "Lorem ipsum",
        name: "Lorem ipsum",
        time: "29 mins"
      },
      {
        id: 5,
        cardBgImage: GlobalInclude.Image9,
        profileImage: GlobalInclude.Image6,
        title: "Lorem ipsum",
        addrss: "Lorem ipsum",
        name: "Lorem ipsum",
        time: "5 mins"
      },
      {
        id: 6,
        cardBgImage: GlobalInclude.Image8,
        profileImage: GlobalInclude.Image2,
        title: "Lorem ipsum",
        addrss: "Lorem ipsum",
        name: "Lorem ipsum",
        time: "19 mins"
      }
    ];
    //END INITALIZE DATA

    //BEGIN TO SETUP LISTVIEW ROW DATA
    const rowHasChanged = (r1, r2) => r1 !== r2;
    const ds = new ListView.DataSource({ rowHasChanged });
    this.state = {
      isLoading: true,
      dataSource: ds.cloneWithRows(dataObjects)
    };
  }
  //END TO SETUP LISTVIEW ROW DATA

  //BEGIN TO SETUP LISTVIEW ROW
  _renderRow(rowData) {
    return (
      <View style={styles.row_main}>
        {/* BEGIN TO SETUP IMAGEBACKGROUND VIEW */}
          <Image source={rowData.cardBgImage} style={styles.card_bg_image} />
        {/* END TO SETUP IMAGEBACKGROUND VIEW */}
        <View style={styles.card_content}>
        {/* BEGIN TO SETUP TITLE VIEW */}
          <Text style={styles.title_txt}>{rowData.title}</Text>
        {/* END TO SETUP TITLE VIEW */}

        {/* BEGIN TO SETUP ADDRESS VIEW */}
          <View style={styles.address_bg}>
            <Ionicons name="ios-pin" size={16} color="grey" style={{justifyContent: "center",backgroundColor: "transparent",alignItems: "center",alignSelf: "center"}}/>
            <Text style={styles.address_txt}>{rowData.addrss}</Text>
          </View>
        {/* END TO SETUP ADDRESS VIEW */}

          <View style={styles.divider_horizontal}/>
        {/* BEGIN TO SETUP POFILEIMAGE AND NAME AND TEXT VIEW */}
          <View style={styles.profile_bg}>
            <Image source={rowData.profileImage} style={styles.profile_img} />
            <View style={styles.name_time_bg}>
              <Text style={styles.name_txt}>{rowData.name}</Text>
              <Text style={styles.time_txt}>{rowData.time}</Text>
            </View>
          </View>
        {/* END TO SETUP POFILEIMAGE AND NAME AND TEXT VIEW */}
        </View>
      </View>
    );
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
      <Container style={styles.main}>
        {/* BEGIN TO SETUP IMAGEBACKGROUND VIEW */}
          <ImageBackground style={styles.mainimg} source={GlobalInclude.Image3}>
        {/* BEGIN TO SETUP HEADER VIEW */}
          <Header androidStatusBarColor={"transparent"} style={styles.header}>
        {/* BEGIN TO SETUP LEFT VIEW */}
            <Left style={styles.left}>
              <TouchableOpacity style={styles.back_arrow} onPress={() => this.props.navigation.goBack()}>
                <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="white"/>
              </TouchableOpacity>
            </Left>
        {/* END TO SETUP LEFT VIEW */}

        {/* BEGIN TO SETUP BODY VIEW */}
          <Body style={styles.body}>
              <Title style={styles.title}>Profile</Title>
            </Body>
        {/* END TO SETUP BODY VIEW */}

        {/* BEGIN TO SETUP RIGHT VIEW */}
          <Right style={styles.left}>
              <TouchableOpacity onPress={() => alert("Settings Button Click")}>
                <Ionicons name="ios-settings" size={20} color="white" />
              </TouchableOpacity>
            </Right>
        {/* END TO SETUP RIGHT VIEW */}
          </Header>
        {/* END TO SETUP HEADER VIEW */}
          <Image source={GlobalInclude.Image1} style={styles.userimg} />
          </ImageBackground>
        {/* END TO SETUP IMAGEBACKGROUND VIEW */}

        {/* BEGIN TO SETUP FOLLOWERS AND FOLLOWING VIEW */}
            <View style={styles.userinfo}>
              <View style={styles.follower_followingbg}>
                <Text style={styles.followerfollowing_counttxt}>50k</Text>
                <Text style={styles.follower_following_txt}>Followers</Text>
              </View>
            <View style={styles.follower_followingbg}>
              <Text style={styles.followerfollowing_counttxt}>55k</Text>
              <Text style={styles.follower_following_txt}>Following</Text>
            </View>
          </View>
        {/* END TO SETUP FOLLOWERS AND FOLLOWING VIEW */}

        {/* BEGIN TO SETUP NAME AND DESIGNATION AND FOLLOW VIEW */}
          <Text style={styles.name_txts}>Lorem ipsum</Text>
          <Text style={styles.designation_txt}>Lorem ipsum</Text>
          <TouchableOpacity style={styles.followtxt_bg} onPress={() => alert("FOLLOW BUTTON CLICK")}>
            <Text style={styles.follow_txt}>FOLLOW</Text>
          </TouchableOpacity>
        {/* END TO SETUP NAME AND DESIGNATION AND FOLLOW VIEW */}

        {/* BEGIN TO SETUP SCROLLTABVIEW VIEW */}
          <ScrollableTabView
            initialPage={0}
            tabBarUnderlineStyle={styles.tab_under_line}
            tabBarBackgroundColor={"transparent"}
            tabBarActiveTextColor={"#6f6f6f"}
            tabBarInactiveTextColor={"#6f6f6f"}
            tabBarTextStyle={styles.tabText}
            renderTabBar={() => (
              <ScrollableTabBar
                style={{
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 0 },
                  shadowOpacity: 0,
                  shadowRadius: 0,
                  elevation: 0,
                  borderWidth: 0,
                  borderColor: "transparent"
                }}
              />
            )}>
          {/* BEGIN TO SETUP PHOTOS TAB VIEW */}
            <View tabLabel="Tab 1">
              <ListView
                contentContainerStyle={styles.list_content}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
                renderSeparator={this._renderSeparator}
                enableEmptySections
                pageSize={4}/>
            </View>
          {/* END TO SETUP PHOTOS TAB VIEW */}

          {/* BEGIN TO SETUP VIDEOS TAB VIEW */}
            <View tabLabel="Tab 2">
              <ListView
                contentContainerStyle={styles.list_content}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
                renderSeparator={this._renderSeparator}
                enableEmptySections
                pageSize={4}/>
            </View>
          {/* END TO SETUP VIDEOS TAB VIEW */}

          {/* BEGIN TO SETUP EVENTS TAB VIEW */}
            <View tabLabel="Tab 3">
              <ListView
                contentContainerStyle={styles.list_content}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
                renderSeparator={this._renderSeparator}
                enableEmptySections
                pageSize={4}/>
            </View>
          {/* END TO SETUP EVENTS TAB VIEW */}

          {/* BEGIN TO SETUP BOOKS TAB VIEW */}
            <View tabLabel="Tab 4">
              <ListView
                contentContainerStyle={styles.list_content}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
                renderSeparator={this._renderSeparator}
                enableEmptySections
                pageSize={4}/>
            </View>
          {/* END TO SETUP BOOKS TAB VIEW */}
          </ScrollableTabView>
        {/* END TO SETUP SCROLLTABVIEW VIEW */}
      </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  main: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width ,
    backgroundColor: "transparent",
    flexDirection: 'column'
  },
  mainimg:{
    width: Dimensions.get("window").width ,
    height: (Dimensions.get("window").height) * 0.30
  },
  title:{
    color: "#fff",
    fontSize: moderateScale(18),
    fontFamily: font_type.FontBold,
    textAlign: 'center'
  },
  left: {
    flex:1
  },
  body:{
    flex:2,
    alignItems:'center'
  },
  userimg:{
    position:'absolute',
    bottom: -50,
    width: (Dimensions.get("window").width ) * 0.34,
    height: (Dimensions.get("window").width ) * 0.34,
    borderRadius: (Dimensions.get("window").width )* 0.17,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    alignSelf: 'center'
  },
  userinfo:{
    flexDirection: 'row',
    justifyContent:'space-between',
    marginLeft: 15,
    marginRight: 15
  },
  header: {
    backgroundColor: 'transparent',
    height: 65,
    width: Dimensions.get("window").width ,
    flexDirection: 'row',
    borderBottomColor: 'transparent',
    ...Platform.select({
        ios: {
          paddingTop: 12,
        },
        android: {
          paddingTop: 15
        }
    }),
  },
  back_arrow: {
     width: 30,
 		justifyContent: 'center',
 		alignItems: 'flex-start'
  },
  follower_followingbg: {
     width: (Dimensions.get("window").width ) * 0.33,
     marginTop: 10,
     backgroundColor: 'transparent',
     flexDirection: 'column'
   },
  followerfollowing_counttxt: {
     color: "#363636",
     fontSize: moderateScale(15),
     fontFamily: font_type.FontBold,
     textAlign: 'center',
   },
  follower_following_txt: {
     color: "#959595",
     fontSize: moderateScale(12),
     fontFamily: font_type.FontLight,
     textAlign: 'center',
     marginTop: -5
   },
  name_txts: {
     color: "#6f6f6f",
     fontSize: moderateScale(18),
     fontFamily: font_type.FontBold,
     alignSelf: 'center',
     ...Platform.select({
   		ios: {
   			marginTop: 20,
   		},
   		android: {
        marginTop: 15
      }
   	}),
   },
  designation_txt: {
     color: "#b7b7b7",
     fontSize: moderateScale(12),
     fontFamily: font_type.FontLight,
     alignSelf: 'center',
   },
  followtxt_bg: {
     backgroundColor: "#0691ce",
     borderRadius: 20,
     width: (Dimensions.get("window").width ) * 0.45,
     alignSelf: 'center',
     marginTop: 17
   },
  follow_txt: {
     color: "#fff",
     fontSize: moderateScale(18),
     fontFamily: font_type.FontBold,
     alignSelf: 'center',
     paddingTop: 5,
     paddingBottom: 5,
   },
  divider_horizontal: {
     backgroundColor: "#e6e6e6",
     height: 0.8,
     width: Dimensions.get("window").width ,
     marginTop: 20
   },
   label: {
     fontSize: moderateScale(16),
     fontFamily: font_type.FontLight,
     color: "#595959"
   },
   container: {
       flex: 1,
     },
   main: {
       height: Dimensions.get("window").height,
       width: Dimensions.get("window").width ,
       backgroundColor: "#e6e6e6",
       flexDirection: 'column'
     },
   list_content: {
       flexDirection: 'row',
       flexWrap: 'wrap',
       marginHorizontal:(Dimensions.get("window").width  * 0.025),
       marginVertical:(Dimensions.get("window").height * 0.015),
       paddingBottom: (Dimensions.get("window").height * 0.03),
       alignItems:'flex-start',
       alignContent:'flex-start',
       justifyContent: 'space-between'
     },
   row_main:{
       backgroundColor:'transparent',
       width: (Dimensions.get("window").width  * 0.445),
       alignItems:'center',
       margin:(Dimensions.get("window").width  * 0.015),
       alignItems:'flex-start',
       alignContent:'flex-start',
       flexDirection: 'column',
       shadowOffset:{width: 3,  height: 3},
       shadowColor: '#6F6F6F',
       shadowOpacity: 0.5,
       shadowRadius: 2,
       elevation: 5
     },
  card_bg_image: {
       width: (Dimensions.get("window").width  * 0.445),
       height: (Dimensions.get("window").height * 0.24),
       borderRadius: 5,
       backgroundColor: 'white'
     },
  card_content: {
       flexDirection: 'column',
       width: (Dimensions.get("window").width  * 0.445),
       backgroundColor: "#FFFFFF",
       marginTop: -5,
       borderBottomLeftRadius: 5,
       borderBottomRightRadius: 5
     },
  title_txt: {
       color: "#6f6f6f",
       fontSize: moderateScale(17),
       marginLeft: 10,
       marginRight: 10,
       marginTop: 10,
       textAlign: 'left'
     },
  address_bg: {
       marginLeft: 10,
       marginRight: 10,
       marginTop: 10,
       flexDirection: 'row'
     },
  address_txt: {
       color: "#adadad",
       fontSize: moderateScale(14),
       marginLeft: 10
     },
  divider_horizontal: {
       width: (Dimensions.get("window").width  * 0.445),
       height: 1,
       marginTop: 20,
       backgroundColor: "#f2f2f2"
     },
  profile_bg: {
       marginTop: 5,
       marginLeft: 10,
       flexDirection: 'row',
       marginBottom: 20,
     },
  profile_img: {
         width: (Dimensions.get("window").width ) * 0.10,
         height: (Dimensions.get("window").width ) * 0.10,
         borderRadius: (Dimensions.get("window").width ) * 0.05,
         alignSelf: 'flex-start',
     },
  name_time_bg: {
         flexDirection: 'column',
         marginLeft: 10,
         justifyContent: 'center'
     },
  name_txt: {
         color: "#363636",
         width: (Dimensions.get("window").width ) * 0.28,
         fontSize: moderateScale(14),
         textAlign: 'left'
     },
  time_txt: {
         color: "#b7b7b7",
         fontSize: moderateScale(13),
         textAlign: 'left'
     },
  tab_under_line:{
          backgroundColor: '#0691ce',
    },

});
// END TO MAKE STYLE
