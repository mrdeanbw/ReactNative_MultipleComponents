import React, { Component } from "react";
import {Text,Image,StatusBar,Platform,ImageBackground,Dimensions,StyleSheet,TouchableOpacity,ListView,FlatList,Alert,TouchableHighlight,I18nManager} from "react-native";
import {Container,Button,Right,Left,ListItem,Content,Body,Header} from "native-base";
import {TabBar, SceneMap } from "react-native-tab-view";
import Tablist from "./Tablistview.js";
import { View } from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";
import ScrollableTabView, {ScrollableTabBar} from "../../../ThirdPartyModule/react-native-scrollable-tab-view";

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

//BEGIN TO SET INITALLAYOUT
const initialLayout = {
  height: 0,
  width: Dimensions.get("window").width
};
//END TO SET INITALLAYOUT

//BEGIN TO SET NEWSROUTE
  const NewsRoute = () => (
    <View style={[styles.container, { backgroundColor: "transparent" }]}>
      <Tablist />
    </View>
  );
//END TO SET NEWSROUTE

//BEGIN TO SET VIDEOROUTE
  const VideoRoute = () => (
    <View style={[styles.container, { backgroundColor: "transparent" }]}>
      <Tablist />
    </View>
  );
//END TO SET VIDEOROUTE

//BEGIN TO SET EVENTROUTE
  const EventRoute = () => (
    <View style={[styles.container, { backgroundColor: "transparent" }]}>
      <Tablist />
    </View>
  );
//END TO SET EVENTROUTE

//BEGIN TO SET BOOKSROUTE
  const BooksRoute = () => (
    <View style={[styles.container, { backgroundColor: "transparent" }]}>
      <Tablist />
    </View>
  );
//END TO SET BOOKSROUTE

export default class ProfileNewsFeedTwo extends Component {


  constructor(props) {
    super(props);

    //BEGIN TO SETUP DATA
    const dataObjects = [
      {
        id: 1,
        name: "Lorem ipsum",
        postImage: "",
        profileImage: GlobalInclude.Image5,
        time: "8 mins",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: 2,
        name: "Lorem ipsum",
        postImage: GlobalInclude.Image7,
        profileImage: GlobalInclude.Image8,
        time: "15 mins",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ];
    //END TO SETUP DATA

    //BEGIN TO SETUP LISTVIEW DATA
    const rowHasChanged = (r1, r2) => r1 !== r2;
    const ds = new ListView.DataSource({ rowHasChanged });

    this.state = {
      isLoading: true,
      dataSource: ds.cloneWithRows(dataObjects)
    };
  }
    //END TO SETUP LISTVIEW DATA

  //BEGIN TO SETUP LISTVIEW LABEL
  _renderLabel = ({ route }) => {
    return (
      <View style={styles.tab_name_view}>
        <Text
          style={
            route.id == this.state.index ? styles.label : styles.normal_label
          }>
          {route.title}
        </Text>
        {route.id == 3 ? null : <View style={styles.tab_vertical_divider} />}
      </View>
    );
  };
  //END TO SETUP LISTVIEW LABEL

  _getLabelText = ({ route }) => route.title;

  //BEGIN TO SETUP LISTVIEW HEADER
  _renderHeader = props => (
    <TabBar
      {...props}
      getLabelText={this._getLabelText}
      tabBarButtonColor="#D2D2D2"
      renderLabel={this._renderLabel}
      indicatorStyle={styles.indicator}
      style={styles.tab_bg}
    />
  );
  //END TO SETUP LISTVIEW HEADER

  _renderScene = SceneMap({
    news: NewsRoute,
    videos: VideoRoute,
    events: EventRoute,
    books: BooksRoute
  });

  //BEGIN TO SETUP LISTVIEW ROW
  _renderRow(rowData) {
    return (
      <Content>
        <View style={styles.row_main_view}>
          <View style={styles.row_bg}>
          {/* BEGIN TO SETUP HEADER VIEW */}
            <View style={styles.row_header_view}>
              {/* BEGIN TO SETUP PROFILEIMAGE VIEW */}
                <Image style={styles.profile_img} source={rowData.profileImage} />
              {/* END TO SETUP PROFILEIMAGE VIEW */}
              {/* BEGIN TO SETUP NAME AND TIME VIEW */}
                <View style={styles.row_header_name_view}>
                  <Text style={styles.rowname_txt}>{rowData.name}</Text>
                  <Text style={styles.row_time_txt}>{rowData.time}</Text>
                </View>
              {/* END TO SETUP NAME AND TIME VIEW */}
              {/* BEGIN TO SETUP MORE BUTTON VIEW */}
                <Right style={styles.more_icon}>
                  <TouchableOpacity onPress={() => alert("More button clicked.")}>
                    <Ionicons name="ios-more" size={25} color="#d4d4d4" />
                  </TouchableOpacity>
                </Right>
              {/* END TO SETUP MORE BUTTON VIEW */}
              </View>
            {/* END TO SETUP HEADER VIEW */}
            <View style={styles.divider_horizontal} />
            {/* BEGIN TO SETUP DESCRIPTION VIEW */}
              <View style={styles.row_description_view}>
                <Text style={styles.row_desc_txt}>{rowData.description}</Text>
              </View>
            {/* END TO SETUP DESCRIPTION VIEW */}
            {rowData.postImage == "" ? null : (
              <Image style={styles.postDescImage} source={rowData.postImage} />
            )}
            <View style={styles.divider_horizontal} />
            <View style={styles.like_comment_share_view}>
            {/* BEGIN TO SETUP LIKE BUTTON VIEW */}
              <TouchableOpacity style={styles.like_view} onPress={() => alert("Like Button Click")}>
                <TouchableOpacity onPress={() => alert("Like Button Click")}>
                  <FontAwesome name="heart" size={18} color="#d4d4d4" />
                </TouchableOpacity>
                <Text style={styles.like_comment_share_text}>Like</Text>
                <Right>
                  <View style={styles.divider_vertical} />
                </Right>
              </TouchableOpacity>
            {/* END TO SETUP LIKE BUTTON VIEW */}

            {/* BEGIN TO SETUP COMMENT BUTTON VIEW */}
              <TouchableOpacity style={styles.comment_view} onPress={() => alert("Comment button Click")}>
                <TouchableOpacity onPress={() => alert("Comment button Click")}>
                  <Image style={styles.like_comment_share_image} source={require('./comments_icon.png')}/>
                </TouchableOpacity>
                <Text style={styles.like_comment_share_text}>Comment</Text>
                <Right>
                  <View style={styles.divider_vertical} />
                </Right>
              </TouchableOpacity>
            {/* END TO SETUP COMMENT BUTTON VIEW */}

            {/* BEGIN TO SETUP SHARE BUTTON VIEW */}
              <TouchableOpacity style={styles.share_view} onPress={() => alert("Share button Click")}>
                <TouchableOpacity onPress={() => alert("Share button Click")}>
                  <MaterialIcons name="share" size={18} color="#d4d4d4" />
                </TouchableOpacity>
                <Text style={styles.like_comment_share_text}>Share</Text>
              </TouchableOpacity>
            {/* END TO SETUP COMMENT BUTTON VIEW */}
            </View>
          </View>
        </View>
      </Content>
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
              <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={28} color="#363636"/>
            </TouchableOpacity>
          </Left>
      {/* END TO SETUP LEFT VIEW */}
      {/* BEGIN TO SETUP BODY VIEW */}
          <Body style={styles.body}>
            <Text style={styles.text_title}>Profiles</Text>
          </Body>
      {/* END TO SETUP BODY VIEW */}
          <Right style={styles.right} />
        </Header>
      {/* END TO SETUP HEADER VIEW */}

        <View style={styles.img_view}>
      {/* BEGIN TO SETUP BACKGROUNDIMAGE VIEW */}
          <Image source={GlobalInclude.Image3} style={styles.background_img} />
      {/* END TO SETUP BACKGROUNDIMAGE VIEW */}

          <View style={styles.content_view}>
      {/* BEGIN TO SETUP PROFILEIMAGE AND EDIT BUTTON VIEW */}
            <View style={styles.profile_view}>
              <Image style={styles.profile_imgs} source={GlobalInclude.Image8} />
              <TouchableOpacity style={styles.camera_icon} onPress={() => alert("Edit Profile Picture button clicked.")}>
                <Image source={require('./camera_icon.png')} style={styles.camera_icon}/>
              </TouchableOpacity>
            </View>
      {/* END TO SETUP PROFILEIMAGE AND EDIT BUTTON VIEW */}

      {/* BEGIN TO SETUP NAME AND DESIGNATION VIEW */}
            <Text style={styles.name_txt}>Lorem Ipsum</Text>
            <Text style={styles.designtaion_txt}>Lorem Ipsum</Text>
      {/* END TO SETUP NAME AND DESIGNATION VIEW */}

            <View style={styles.follower_follwing_like_bg}>
      {/* BEGIN TO SETUP FOLLOWERS VIEW */}
              <View style={{ flexDirection: "row" }}>
                <View style={styles.count_label_bg}>
                  <Text style={styles.count_txt}>1111</Text>
                  <Text style={styles.label_txt}>Followers</Text>
                </View>
                <View style={styles.divide_vertical} />
              </View>
      {/* END TO SETUP FOLLOWERS VIEW */}

      {/* BEGIN TO SETUP FOLLOWING VIEW */}
              <View style={{ flexDirection: "row" }}>
                <View style={styles.count_label_bg}>
                  <Text style={styles.count_txt}>2222</Text>
                  <Text style={styles.label_txt}>Following</Text>
                </View>
                <View style={styles.divide_vertical} />
              </View>
      {/* END TO SETUP FOLLOWING VIEW */}

      {/* BEGIN TO SETUP LIKES VIEW */}
              <View style={styles.count_label_bg}>
                <Text style={styles.count_txt}>3333</Text>
                <Text style={styles.label_txt}>Likes</Text>
              </View>
      {/* END TO SETUP LIKES VIEW */}
            </View>
          </View>
        </View>

      {/* BEGIN TO SETUP SCROLLABLETAB VIEW */}
        <ScrollableTabView
          initialPage={0}
          tabBarUnderlineStyle={{ backgroundColor: "#0691ce" }}
          tabBarBackgroundColor={"white"}
          tabBarActiveTextColor={"#0691ce"}
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
            <View tabLabel="Photos">
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
            <View tabLabel="Videos">
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
            <View tabLabel="Events">
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
            <View tabLabel="Books">
              <ListView
                contentContainerStyle={styles.list_content}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
                renderSeparator={this._renderSeparator}
                enableEmptySections
                pageSize={4}/>
            </View>
          {/* END TO SETUP EVENTS TAB VIEW */}
        </ScrollableTabView>
      {/* END TO SETUP SCROLLABLETAB VIEW */}
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
    flexDirection: 'column'
  },
  back_arrow: {
	 width: 30,
	 justifyContent: 'center',
	 alignItems: 'flex-start'
	},
  header: {
    backgroundColor: 'rgba(0,0,0,0)',
    height: Dimensions.get("window").height * 0.1,
    borderBottomWidth: 0,
    paddingTop: (Dimensions.get("window").height * 0.03),
    elevation: 0,
    paddingLeft: (Dimensions.get("window").width * 0.05),
    paddingRight: (Dimensions.get("window").width * 0.05),
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
    color: '#363636',
    fontSize: moderateScale(18),
    marginTop: (Dimensions.get("window").height * 0.001),
    alignSelf: 'center',
    fontFamily: font_type.FontBold,
  },
  right: {
    flex: 0.5
  },
  img_view:{
    margin: (Dimensions.get("window").height) * 0.015,

    ...Platform.select({
      ios: {
        height: (Dimensions.get("window").height) * 0.32,
      },
      android:{
        height: (Dimensions.get("window").height) * 0.36,
      }
    }),
  },
  background_img:{
    borderRadius: (Dimensions.get("window").height) * 0.015,
    ...Platform.select({
      ios: {
        height: (Dimensions.get("window").height) * 0.32,
      },
      android:{
        height: (Dimensions.get("window").height) * 0.36,
      }
    }),
  },
  content_view: {
    ...Platform.select({
      ios: {
        height: (Dimensions.get("window").height) * 0.32,
      },
      android:{
        height: (Dimensions.get("window").height) * 0.36,
      }
    }),
      width: (Dimensions.get("window").width),
      position: 'absolute',
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0)',
      flexDirection: 'column',
  },
  profile_view:{
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: (Dimensions.get("window").height) * 0.022
  },
  profile_imgs: {
    width: (Dimensions.get("window").width) * 0.20,
    height: (Dimensions.get("window").width) * 0.20,
    borderRadius: (Dimensions.get("window").width) * 0.10,
    borderWidth: 2,
    borderColor: 'white',
    alignSelf: 'center',
    },
  camera_icon: {
    width: (Dimensions.get("window").width) * 0.06,
    height: (Dimensions.get("window").width) * 0.06,
    borderRadius: (Dimensions.get("window").width) * 0.03,
    alignSelf: 'flex-end',
    marginLeft: -((Dimensions.get("window").width) * 0.05),
    marginBottom: ((Dimensions.get("window").width) * 0.01)
  },
  name_txt: {
    color: 'white',
    fontSize: moderateScale(18),
    textAlign: 'center',
    fontFamily: font_type.FontBold,
    marginTop: (Dimensions.get("window").height) * 0.015
  },
  designtaion_txt: {
    color: "#959595",
    fontSize: moderateScale(14),
    textAlign: 'center',
    fontFamily: font_type.FontLight
  },
  follower_follwing_like_bg: {
      flexDirection: 'row',
      width: (Dimensions.get("window").width) * 0.87,
      alignSelf: 'center',
      marginTop: (Dimensions.get("window").height) * 0.03,
      marginBottom: (Dimensions.get("window").height) * 0.04,
  },
  count_label_bg: {
    flexDirection: 'column',
    width: (Dimensions.get("window").width) * 0.29,
    justifyContent: 'center'
  },
  count_txt: {
    color: 'white',
    fontSize: moderateScale(16),
    fontFamily: font_type.FontBold,
    textAlign: 'center'
  },
  label_txt: {
    color: "#959595",
    fontSize: moderateScale(12),
    textAlign: 'center'
  },
  divide_vertical: {
    backgroundColor: 'white',
    width: 1,
    height: (Dimensions.get("window").height) * 0.03,
    alignSelf: 'flex-end',
    marginBottom: (Dimensions.get("window").height) * 0.007
  },
  container: {
      flex: 1,
  },
  label: {
    fontSize: moderateScale(14),
    fontFamily: font_type.FontLight,
    color: "#0691ce",
    paddingLeft: (Dimensions.get("window").width) * 0.045
  },
  normal_label: {
    fontSize: moderateScale(14),
    fontFamily: font_type.FontLight,
    color: "#d2d2d2",
    paddingLeft:15
  },
  indicator:{
    backgroundColor: "#0691ce",
    width: (Dimensions.get("window").width) * 0.09,
    marginLeft: (Dimensions.get("window").width) * 0.070
  },
  tab_bg:{
    backgroundColor: 'rgba(0,0,0,0)'
  },
  tab_name_view:{
    flexDirection: 'row',
    width: 70,
    justifyContent: 'space-between',
  },
  tab_vertical_divider:{
    height: (Dimensions.get("window").height) * 0.03,
    width: (Dimensions.get("window").height) * 0.001,
    backgroundColor: '#e4e4e4',
  },
  main: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: "#F2F2F2",
    flexDirection: 'column'
  },
  row_main_view:{
    width: (Dimensions.get("window").width)
  },
  row_bg: {
    width: (Dimensions.get("window").width) * 0.95,
    alignSelf: 'center' ,
    backgroundColor: 'white',
    marginTop: (Dimensions.get("window").height) * 0.015,
    marginBottom: (Dimensions.get("window").height) * 0.007,
    justifyContent: 'center',
    shadowOffset:{width: 3,  height: 3},
    shadowColor: '#DFDFDF',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5
  },
  row_header_view:{
    flexDirection: 'row',
    marginTop: (Dimensions.get("window").height) * 0.015
  },
  profile_img: {
    width: (Dimensions.get("window").width) * 0.12,
    height: (Dimensions.get("window").width) * 0.12,
    borderRadius: (Dimensions.get("window").width) * 0.06,
    alignSelf: 'flex-start',
    marginLeft: (Dimensions.get("window").width) * 0.03
  },
  row_header_name_view:{
    flexDirection: 'column',
    marginLeft: (Dimensions.get("window").width) * 0.03
  },
  rowname_txt: {
    color: "#6f6f6f",
    fontSize: moderateScale(17),
    fontFamily: font_type.FontBold,
  },
  row_time_txt: {
    color: "#b7b7b7",
    fontSize: moderateScale(14),
    fontFamily: font_type.FontLight,
    textAlign: 'left'
  },
  more_icon: {
    marginTop: -(Dimensions.get("window").height) * 0.018,
    marginRight: (Dimensions.get("window").height) * 0.015
  },
  divider_horizontal: {
    width: (Dimensions.get("window").width) * 0.95,
    height: (Dimensions.get("window").height) * 0.001,
    backgroundColor: "#F2F2F2",
    alignSelf: 'center',
    marginTop: (Dimensions.get("window").height) * 0.02
  },
  row_description_view:{
    width: (Dimensions.get("window").width) * 0.90,
    alignSelf: 'center'
  },
  row_desc_txt: {
    color: "#6f6f6f",
    fontSize: moderateScale(15),
    fontFamily: font_type.FontLight,
    marginTop: (Dimensions.get("window").height) * 0.015,
    textAlign: 'left'
  },
  like_comment_share_view:{
    flexDirection: 'row',
    paddingLeft: (Dimensions.get("window").width) * 0.03,
    paddingRight: (Dimensions.get("window").width) * 0.03,
    marginTop: (Dimensions.get("window").height) * 0.015,
    marginBottom: (Dimensions.get("window").height) * 0.015
  },
  like_view:{
    flexDirection: 'row',
    width: (Dimensions.get("window").width) * 0.25,
    alignItems: 'center'
  },
  comment_view:{
    flexDirection: 'row',
    width: (Dimensions.get("window").width) * 0.35,
    alignItems: 'center',
    marginLeft: (Dimensions.get("window").width) * 0.045
  },
  share_view:{
    flexDirection: 'row',
    width: (Dimensions.get("window").width) * 0.30,
    alignItems: 'center',
    marginLeft: (Dimensions.get("window").width) * 0.045
  },
  like_comment_share_text: {
    fontFamily: font_type.FontLight,
    fontSize: moderateScale(16),
    marginLeft: (Dimensions.get("window").width) * 0.03,
    color: "#6f6f6f"
  },
  like_comment_share_image: {
    width: (Dimensions.get("window").width) * 0.06,
    height: (Dimensions.get("window").height) * 0.03,
    resizeMode: 'contain'
  },
  divider_vertical: {
    width: (Dimensions.get("window").width) * 0.003,
    height: (Dimensions.get("window").height) * 0.04,
    backgroundColor: "#F2F2F2",
    alignSelf: 'flex-end'
  },
  list_content: {
    paddingBottom: (Dimensions.get("window").height) * 0.015,
  }
});
// END TO MAKE STYLE
