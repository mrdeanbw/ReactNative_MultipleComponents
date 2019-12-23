import React, { Component } from "react";
import {Text,Image,StatusBar,Platform,ImageBackground,Dimensions,TouchableOpacity,StyleSheet,ListView,Alert,I18nManager} from "react-native";
import {Container,Button,Header,Body,Right,Left,Title,Icon,ListItem,Content} from "native-base";
import { TabViewAnimated, TabBar, SceneMap } from "react-native-tab-view";
import { View } from "react-native-animatable";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
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


export default class ProfileMusic extends Component {


  constructor(props) {
    super(props);

    //BEGIN INITALIZE DATA
    const dataObjects = [
      {
        id: 1,
        cardBgImage: GlobalInclude.Image1,
        likeCount: 12,
        likeUserImages: [
          { img: GlobalInclude.Image2 },
          { img: GlobalInclude.Image3 },
          { img: GlobalInclude.Image4 }
        ]
      },
      {
        id: 2,
        cardBgImage: GlobalInclude.Image5,
        likeCount: 1,
        likeUserImages: [{ img: GlobalInclude.Image6 }]
      },
      {
        id: 3,
        cardBgImage: GlobalInclude.Image7,
        likeCount: 1,
        likeUserImages: [{ img: GlobalInclude.Image8 }]
      },
      {
        id: 4,
        cardBgImage: GlobalInclude.Image9,
        likeCount: 2,
        likeUserImages: [
          { img: GlobalInclude.Image10 },
          { img: GlobalInclude.Image1 }
        ]
      },
      {
        id: 5,
        cardBgImage: GlobalInclude.Image4,
        likeCount: 2,
        likeUserImages: [
          { img: GlobalInclude.Image3 },
          { img: GlobalInclude.Image2 }
        ]
      },
      {
        id: 6,
        cardBgImage: GlobalInclude.Image1,
        likeCount: 5,
        likeUserImages: [
          { img: GlobalInclude.Image2 },
          { img: GlobalInclude.Image3 },
          { img: GlobalInclude.Image4 }
        ]
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
        <ImageBackground source={rowData.cardBgImage} style={styles.image_bg}>
          <View style={styles.card_content}>
          {/* BEGIN TO SETUP LIKE VIEW */}
            <FontAwesome name="heart" size={17} style={{ alignSelf: "center" }} color="white"/>
            <Text style={styles.like_count_text}>{rowData.likeCount}</Text>
          {/* END TO SETUP LIKE VIEW */}

          {/* BEGIN TO SETUP LIKEUSERLIST VIEW */}
            <Right>
              <View style={styles.profile_container}>
                {rowData.likeUserImages.map((item, index) => {
                  return (
                    <View key={index} style={styles.imgview}>
                      <Image style={styles.profile_img} source={item.img} />
                    </View>
                  );
                })}
              </View>
            </Right>
          {/* END TO SETUP LIKEUSERLIST VIEW */}
          </View>
        </ImageBackground>
      {/* END TO SETUP IMAGEBACKGROUND VIEW */}
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
      {/* BEGIN TO SETUP HEADER VIEW */}
        <Header style={styles.header}>
      {/* BEGIN TO SETUP LEFT VIEW */}
          <Left style={styles.left}>
            <TouchableOpacity style={styles.back_arrow} onPress={() => this.props.navigation.goBack()}>
              <Icon name={I18nManager.isRTL ? "ios-arrow-forward" : "ios-arrow-back"} style={{ color: "#fff" }}/>
            </TouchableOpacity>
          </Left>
      {/* END TO SETUP LEFT VIEW */}

      {/* BEGIN TO SETUP BODY VIEW */}
          <Body style={styles.body}>
            <Title style={styles.header_title}>Profiles</Title>
          </Body>
      {/* END TO SETUP BODY VIEW */}

      {/* BEGIN TO SETUP RIGHT VIEW */}
          <Right style={styles.right}>
            <TouchableOpacity onPress={() => alert("Settings button clicked.")}>
              <Ionicons name="ios-settings" size={20} color="white" />
            </TouchableOpacity>
          </Right>
      {/* BEGIN TO SETUP RIGHT VIEW */}
        </Header>
      {/* END TO SETUP HEADER VIEW */}
        <View style={styles.profile}>
      {/* BEGIN TO SETUP NAME AND ADDRESS AND IMAGE VIEW */}
          <Image source={GlobalInclude.Image3} style={styles.userimg} />
          <Text style={styles.name}>Lorem ipsum</Text>
          <Text style={styles.address}>Lorem ipsum</Text>
      {/* END TO SETUP NAME AND ADDRESS AND IMAGE VIEW */}

      {/* BEGIN TO SETUP FOLLOWING AND MESSAGE BUTTON VIEW */}
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.follow_txt_bg} onPress={() => alert("FOLLOWING BUTTON CLICK")}>
              <Text style={styles.follow_txt}>FOLLOWING</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.follow_txt_bgtrans} onPress={() => alert("MESSAGE BUTTON CLICK")}>
              <Text style={styles.follow_txt}>MESSAGE</Text>
            </TouchableOpacity>
          </View>
      {/* END TO SETUP FOLLOWING AND MESSAGE BUTTON VIEW */}
        </View>

      {/* BEGIN TO SETUP SCROLLTABVIEW VIEW */}
        <ScrollableTabView
          initialPage={0}
          tabBarUnderlineStyle={styles.tab_under_line}
          tabBarBackgroundColor={"rgba(255, 99, 71, 0.5)"}
          tabBarActiveTextColor={"#000000"}
          tabBarInactiveTextColor={"#fff8"}
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
              }}/>
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
  container: {
      flex: 1,
    },
  main: {
      height: Dimensions.get("window").height,
      width: Dimensions.get("window").width,
      backgroundColor: "#ff6347",
      flexDirection: 'column'
  },
  back_arrow: {
     width: 30,
     justifyContent: 'center',
     alignItems: 'flex-start'
  },
  header: {
    	backgroundColor: '#ff6347',
    	width: Dimensions.get("window").width,
    	flexDirection: 'row',
      borderBottomColor: 'transparent',
    	...Platform.select({
    		ios: {
    			paddingTop: 5,
    		},
    		android: {
    			paddingTop: (Dimensions.get("window").height*0.035),
        }
  	}),
    elevation: 0,
    justifyContent: 'center'
  },
 userimg:{
    height:(Dimensions.get("window").height * 0.13),
    width:(Dimensions.get("window").height * 0.13),
    borderRadius:(Dimensions.get("window").height * 0.065),
    borderWidth: 2,
    borderColor: 'white',
    marginVertical: (Dimensions.get("window").height * 0.020)
  },
 follow_txt_bg: {
    backgroundColor: "#000000",
    borderRadius: 20,
    width: (Dimensions.get("window").width) * 0.35,
    alignSelf: 'center',
    margin: 17,
    height: (Dimensions.get("window").height) * 0.05,
    justifyContent: 'center'
  },
follow_txt_bgtrans: {
    backgroundColor: "transparent",
    borderRadius: 20,
    width: (Dimensions.get("window").width) * 0.35,
    alignSelf: 'center',
    margin: 17,
    borderWidth: 2,
    borderColor: '#000000',
    height: (Dimensions.get("window").height) * 0.05,
    justifyContent: 'center'
  },
 follow_txt: {
    color: "#fff",
    fontSize: moderateScale(12),
    fontFamily: font_type.FontBold,
    alignSelf: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
 left: {
    flex: 1,
    paddingTop: (Platform.OS === 'ios')? 15 : 0,
  },
 body: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
 right: {
    flex: 1,
    paddingTop: (Platform.OS === 'ios')? 15 : 0,
  },
 header_title: {
    color: 'white',
    fontFamily: font_type.FontBold,
    paddingTop: (Platform.OS === 'ios')? 15 : 0,
    fontSize : 17,
    letterSpacing:0.7,
    marginVertical: (Dimensions.get("window").height * 0.01)
  },
 profile:{
    backgroundColor: '#ff6347',
    width: Dimensions.get("window").width,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#2d324f',
    ...Platform.select({
    ios: {
      paddingTop: 5,
    },
    android: {
      paddingTop: (Dimensions.get("window").height*0.035),
    }
  }),
},
 label: {
    fontSize: moderateScale(15),
    fontFamily: font_type.FontLight,
},
 name:{
    fontSize:18,
    fontFamily: font_type.FontBold,
    color:'white'
},
 address:{
    fontSize:12,
    fontFamily:font_type.FontLight,
    color:'#fff8',
    textAlign: 'center',
    marginVertical: (Dimensions.get("window").height * 0.005),
    width: Dimensions.get("window").width*0.5
  },
 main: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: "#F2F2F2",
    flexDirection: 'column'
  },
 imgview:{width: (Dimensions.get("window").width) * 0.042,},
 list_content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal:(Dimensions.get("window").width * 0.025),
    marginVertical:(Dimensions.get("window").height * 0.015),
    paddingBottom: (Dimensions.get("window").height * 0.030),
    alignItems:'flex-start',
    alignContent:'flex-start',
    justifyContent: 'space-between'
  },
 row_main:{
    backgroundColor:'rgba(0,0,0,0.5)',
    width: (Dimensions.get("window").width * 0.445),
    height: (Dimensions.get("window").width * 0.445),
    alignItems:'center',
    margin:(Dimensions.get("window").width * 0.015),
    alignItems:'flex-start',
    alignContent:'flex-start',
  },
 image_bg: {
    width: (Dimensions.get("window").width * 0.445),
    height: (Dimensions.get("window").width * 0.445)
  },
 card_content: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    bottom:0,
    position: 'absolute',
    marginLeft: (Dimensions.get("window").width * 0.03),
    marginRight: (Dimensions.get("window").width * 0.04)
  },
 profile_container: {
    flexDirection:'row',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: (Dimensions.get("window").height * 0.01)
  },
 profile_img: {
    width: (Dimensions.get("window").width * 0.065),
    height: (Dimensions.get("window").width * 0.065),
    borderRadius: (Dimensions.get("window").width * 0.0325),
    borderWidth: 1,
    borderColor: "#FFFFFF",
    resizeMode: 'cover',
  },
 like_count_text: {
    fontFamily: font_type.FontLight,
    fontSize: moderateScale(16),
    marginLeft: 5,
    color: "#FFFFFF",
    alignSelf: 'center',
    justifyContent: 'center'
  },
 tab_under_line:{
    backgroundColor: '#000000',
  },
});
// END TO MAKE STYLE
