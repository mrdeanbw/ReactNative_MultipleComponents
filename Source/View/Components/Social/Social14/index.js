import React, { Component } from "react";
import {Text,Image,StatusBar,Platform,ImageBackground,Dimensions,TouchableOpacity,ListView,I18nManager,StyleSheet} from "react-native";
import {Container,Button,Right,Left,Content,Body,Header} from "native-base";
import { TabViewAnimated, TabBar, SceneMap } from "react-native-tab-view";
import { View } from "react-native-animatable";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
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

export default class Social14 extends Component {
  constructor(props) {
    super(props);

    //BEGIN TO SETUP DATAOBJECTS
    const dataObjects = [
      {
        id: 1,
        cardBgImage: GlobalInclude.Image1,
        likeCount: 1,
        likeUserImages: [
          { img: GlobalInclude.Image2 },
          { img: GlobalInclude.Image3 },
          { img: GlobalInclude.Image4 }
        ]
      },
      {
        id: 2,
        cardBgImage:GlobalInclude.Image5,
        likeCount: 2,
        likeUserImages: [{ img: GlobalInclude.Image6} ]
      },
      {
        id: 3,
        cardBgImage:GlobalInclude.Image7,
        likeCount: 3,
        likeUserImages: [{ img: GlobalInclude.Image8 }]
      },
      {
        id: 4,
        cardBgImage:GlobalInclude.Image9,
        likeCount: 4,
        likeUserImages: [
          { img: GlobalInclude.Image10},
          { img: GlobalInclude.Image1 }
        ]
      },
      {
        id: 5,
        cardBgImage:GlobalInclude.Image2,
        likeCount: 5,
        likeUserImages: [
          { img: GlobalInclude.Image3 },
          { img: GlobalInclude.Image4 }
        ]
      },
      {
        id: 6,
        cardBgImage:GlobalInclude.Image5,
        likeCount: 6,
        likeUserImages: [
          { img: GlobalInclude.Image6 },
          { img: GlobalInclude.Image7 },
          { img: GlobalInclude.Image8 }
        ]
      }
    ];
    //END TO SETUP DATAOBJECTS

    //BEGIN TO SETUP LISTVIEW ROWSET
    const rowHasChanged = (r1, r2) => r1 !== r2;
    const ds = new ListView.DataSource({ rowHasChanged });
    this.state = {
      isLoading: true,
      dataSource: ds.cloneWithRows(dataObjects)
    };
    //END TO SETUP LISTVIEW ROWSET
  }

  //BEGIN TO SETUP RENDERROW
  _renderRow(rowData) {
    return (
      <View style={styles.row_main}>
      {/* BEGIN TO SETUP IMAGEBACKGROUND VIEW */}
        <ImageBackground source={rowData.cardBgImage} style={styles.image_bg}>
          <View style={styles.card_content}>
          {/* BEGIN TO SETUP LIKE VIEW */}
            <TouchableOpacity style={styles.like_image} onPress={() => alert("Like Button Click")}>
              <FontAwesome name="heart" size={16} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.like_count_text}>{rowData.likeCount}</Text>
          {/* END TO SETUP LIKE VIEW */}

          {/* BEGIN TO SETUP PROFILEIMAGE VIEW */}
            <Right>
              <View style={styles.profile_container}>
                {rowData.likeUserImages.map((item, index) => {
                  return (
                    <View key={index} style={styles.profile_img_view}>
                      <Image style={styles.profile_img} source={item.img} />
                    </View>
                  );
                })}
              </View>
            </Right>
          {/* END TO SETUP PROFILEIMAGE VIEW */}
          </View>
        </ImageBackground>
      {/* END TO SETUP IMAGEBACKGROUND VIEW */}
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

    return (
      <Container style={styles.main}>
      {/* BEGIN TO SETUP HEADER VIEW */}
        <Header style={styles.header}>
        {/* BEGIN TO SETUP LEFT VIEW */}
          <Left style={styles.left}>
            <TouchableOpacity style={styles.back_arrow} onPress={() => this.props.navigation.goBack()}>
              <View style={styles.menuBtnView}>
                {I18nManager.isRTL ? (
                  <MaterialIcons name="chevron-right" size={25} color="white" />
                ) : (
                  <MaterialIcons name="chevron-left" size={25} color="white" />
                )}
                <View style={styles.alertRed} />
              </View>
            </TouchableOpacity>
          </Left>
        {/* END TO SETUP LEFT VIEW */}

        {/* BEGIN TO SETUP BODY VIEW */}
          <Body style={styles.body}>
            <Text style={styles.text_title}>Timeline</Text>
          </Body>
        {/* END TO SETUP BODY VIEW */}

        {/* BEGIN TO SETUP RIGHT VIEW */}
          <Right style={styles.right}>
            <TouchableOpacity onPress={() => alert("Search Button Click")}>
              <Ionicons name="ios-search" size={25} color="white" />
            </TouchableOpacity>
          </Right>
        {/* END TO SETUP RIGHT VIEW */}
        </Header>
      {/* END TO SETUP HEADER VIEW */}

      {/* BEGIN TO SETUP SCROLLABLETAB VIEW */}
        <ScrollableTabView
          initialPage={0}
          tabBarUnderlineStyle={styles.tab_under_line}
          tabBarBackgroundColor={"#ff6347"}
          tabBarActiveTextColor={"white"}
          tabBarInactiveTextColor={"rgba(255,255,255,0.4)"}
          tabBarTextStyle={styles.tabText}
          renderTabBar={() => <ScrollableTabBar />}>
        {/* BEGIN TO SETUP TAB 1 LIST VIEW */}
          <View tabLabel="Tab 1">
            <ListView
              contentContainerStyle={styles.list_content}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow.bind(this)}
              renderSeparator={this._renderSeparator}
              enableEmptySections
              pageSize={4}/>
          </View>
        {/* END TO SETUP TAB 1 LIST VIEW */}

        {/* BEGIN TO SETUP TAB 2 LIST VIEW */}
          <View tabLabel="Tab 2">
            <ListView
              contentContainerStyle={styles.list_content}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow.bind(this)}
              renderSeparator={this._renderSeparator}
              enableEmptySections
              pageSize={4}/>
          </View>
        {/* END TO SETUP TAB 2 LIST VIEW */}

        {/* BEGIN TO SETUP TAB 3 LIST VIEW */}
          <View tabLabel="Tab 3">
            <ListView
              contentContainerStyle={styles.list_content}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow.bind(this)}
              renderSeparator={this._renderSeparator}
              enableEmptySections
              pageSize={4}/>
          </View>
        {/* END TO SETUP TAB 3 LIST VIEW */}

        {/* BEGIN TO SETUP TAB 4 LIST VIEW */}
          <View tabLabel="Tab 4">
            <ListView
              contentContainerStyle={styles.list_content}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow.bind(this)}
              renderSeparator={this._renderSeparator}
              enableEmptySections
              pageSize={4}/>
          </View>
        {/* END TO SETUP TAB 4 LIST VIEW */}
        </ScrollableTabView>
      {/* END TO SETUP SCROLLABLETAB VIEW */}
      </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ff6347',
    height: Dimensions.get("window").height * 0.1,
    borderBottomWidth: 0,
    paddingTop: (Dimensions.get("window").height * 0.03),
    elevation: 0,
    paddingLeft: (Dimensions.get("window").width * 0.05),
    paddingRight: (Dimensions.get("window").width * 0.05),
  },
  back_arrow:{
  	width: 30,
  	justifyContent: 'flex-start',
  	alignItems: 'flex-start',
  },
  left: {
    flex: 0.5,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  body: {
    flex: 3,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  text_title: {
    color: 'white',
    fontSize: moderateScale(16),
    marginTop: (Dimensions.get("window").height * 0.001),
    alignSelf: 'center',
    fontFamily: font_type.FontLight,
  },
  right: {
    flex: 0.5
  },
  container: {
      flex: 1,
  },
  main: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: "#F2F2F2",
    flexDirection: 'column'
  },
  label: {
    fontSize: moderateScale(16),
    fontFamily: font_type.FontLight,
  },
  main: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: "#F2F2F2",
    flexDirection: 'column'
  },
  list_content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal:(Dimensions.get("window").width * 0.025),
    marginVertical:(Dimensions.get("window").height * 0.015),
    alignItems:'flex-start',
    alignContent:'flex-start',
    justifyContent: 'space-between',
    paddingBottom: (Dimensions.get("window").height * 0.030)
  },
  row_main:{
    backgroundColor:'rgba(0,0,0,0.5)',
    width: (Dimensions.get("window").width * 0.440),
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
    borderColor: 'white',
    resizeMode: 'cover',
  },
  like_count_text: {
    fontFamily: font_type.FontLight,
    fontSize: moderateScale(16),
    marginLeft: (Dimensions.get("window").width * 0.015),
    color: 'white',
    ...Platform.select({
        ios: {
            marginBottom: (Dimensions.get("window").height * 0.01)
        },
        android: {
            marginBottom: (Dimensions.get("window").height * 0.01)
        }
    }),
  },
  like_image: {
    ...Platform.select({
        ios: {
            marginBottom: (Dimensions.get("window").height * 0.015),
        },
        android: {
            marginBottom: (Dimensions.get("window").height * 0.015),
        }
    }),
  },
  profile_img_view:{
    width: (Dimensions.get("window").width) * 0.042
  },
  tab_under_line:{
    backgroundColor: 'white'
  },
});
// END TO MAKE STYLE
