import React, { Component } from "react";
import {StyleSheet,Text,Image,StatusBar,ListView,Platform,ImageBackground,Dimensions,TouchableOpacity,View,BackHandler,I18nManager,Alert} from "react-native";
import {Container,Button,Right,Left,Content,Body,Header,Icon,Title} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";
import ScrollableTabView, {ScrollableTabBar,DefaultTabBar} from "../../../ThirdPartyModule/react-native-scrollable-tab-view";

//GUIDELINE SIZES ARE BASED ON STANDARD ~5" SCREEN

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


export default class ProfileCollapse extends Component {

  constructor(props) {
    super(props);

    // BEGIN TO SETUP ALL DATA IN ARRAY
    const dataObjects = [
      {
        id: 1,
        profileImage: GlobalInclude.Image7,
        name: "Lorem Ipsum",
        designation: "Lorem ipsum dolor sit amet."
      },
      {
        id: 2,
        profileImage: GlobalInclude.Image3,
        name: "Lorem Ipsum",
        designation: "Lorem ipsum dolor sit amet."
      },
      {
        id: 3,
        profileImage: GlobalInclude.Image2,
        name: "Lorem Ipsum",
        designation: "Lorem ipsum dolor sit amet."
      },
      {
        id: 4,
        profileImage: GlobalInclude.Image1,
        name: "Lorem Ipsum",
        designation: "Lorem ipsum dolor sit amet."
      },
      {
        id: 5,
        profileImage: GlobalInclude.Image8,
        name: "Lorem Ipsum",
        designation: "Lorem ipsum dolor sit amet."
      },
      {
        id: 6,
        profileImage: GlobalInclude.Image9,
        name: "Lorem Ipsum",
        designation: "Lorem ipsum dolor sit amet."
      },
      {
        id: 7,
        profileImage: GlobalInclude.Image10,
        name: "Lorem Ipsum",
        designation: "Lorem ipsum dolor sit amet."
      }
    ];
    // END TO SETUP ALL DATA IN ARRAY

    // BEGIN TO SETUP LISTVIEW ACCORDING TO OUR DATA
    const rowHasChanged = (r1, r2) => r1 !== r2;
    const ds = new ListView.DataSource({ rowHasChanged });
    // END TO SETUP LISTVIEW ACCORDING TO OUR DATA

    // BEGIN TO SETUP STATE
    this.state = {
      isLoading: true,
      dataSource: ds.cloneWithRows(dataObjects)
    };
    // END TO SETUP STATE

  }

  // BEGIN TO SETUP ROW VIEW
  _renderRow(rowData) {
    return (
      <View style={{ flexDirection: "column" }}>
        <View style={styles.main_row}>
            {/* BEGIN TO SETUP PROFILE IMAGE VIEW */}
            <Image source={rowData.profileImage} style={styles.profile_img} />
            {/* END TO SETUP PROFILE IMAGE VIEW */}

            <View style={styles.name_designation_main_view}>
              {/* BEGIN TO SETUP NAME AND DESIGNATION VIEW */}
              <View style={styles.name_designation_view}>
                <Text style={styles.name_txt}>{rowData.name}</Text>
                <Text style={styles.designation_txt}>{rowData.designation}</Text>
              </View>
              {/* END TO SETUP NAME AND DESIGNATION VIEW */}
            </View>
        </View>
        <View style={styles.divider_horizontal} />
      </View>
    );
  }
  // END TO SETUP ROW VIEW



  render() {

    // BEGIN TO SETUP STATUSBAR VIEW
		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('transparent',true);
			StatusBar.setTranslucent(true);
		}
    // END TO SETUP STATUSBAR VIEW


    return (
      <Container style={styles.main_container}>
        {/* BEGIN TO SETUP IMAGE AS A BACKGROUND */}
        <ImageBackground source={GlobalInclude.Image3} style={styles.img_container}>

        {/* BEGIN TO SETUP BLANK COLOR VIEW IN BACKGROUND */}
        <View style={styles.blank_view}></View>
        {/* END TO SETUP BLANK COLOR VIEW IN BACKGROUND */}

        {/* BEGIN TO SETUP HEADER VIEW */}
        <Header style={styles.header}>

          {/* BEGIN TO SETUP HEADER LEFT VIEW */}
          <Left style={styles.left}>
            <TouchableOpacity style={styles.back_arrow} onPress={() => this.props.navigation.goBack()}>
              <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={25} color="#ffffff"/>
            </TouchableOpacity>
          </Left>
          {/* END TO SETUP HEADER LEFT VIEW */}

          {/* BEGIN TO SETUP HEADER BODY VIEW */}
          <Body style={styles.body} />
          {/* END TO SETUP HEADER BODY VIEW */}

          {/* BEGIN TO SETUP HEADER RIGHT VIEW */}
          <Right style={styles.right}>
            <TouchableOpacity onPress={() => alert("Setting button clicked.")}>
              <Image source={require('./setting_icon.png')} style={styles.setting_icon} />
            </TouchableOpacity>
          </Right>
          {/* END TO SETUP HEADER RIGHT VIEW */}

      </Header>
      {/* END TO SETUP HEADER VIEW */}

        <View style={styles.profile_header_main}>

                {/* BEGIN TO SETUP PROFILE IMAGE VIEW */}
                <View style={styles.profile_image_sec}>
                  <Image source={GlobalInclude.Image1} style={styles.profile_image} />
                </View>
                {/* END TO SETUP PROFILE IMAGE VIEW */}

                {/* BEGIN TO SETUP NAME AND ADDRESS VIEW */}
                <Text style={styles.name}>Lorem Ipsum</Text>
                <Text style={styles.address}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                {/* END TO SETUP NAME AND ADDRESS VIEW */}

                {/* BEGIN TO SETUP SOCIAL VIEW */}
                <View style={styles.fb_twitter_google_view}>
                      {/* BEGIN TO SETUP FACEBOOK BUTTON VIEW */}
                      <TouchableOpacity style={styles.fb_view} onPress={() => alert("Facebook button clicked.")}>
                        <FontAwesome name="facebook" size={15} color="white" />
                      </TouchableOpacity>
                      {/* END TO SETUP FACEBOOK BUTTON VIEW */}

                      {/* BEGIN TO SETUP TWITTER BUTTON VIEW */}
                      <TouchableOpacity style={styles.fb_view} onPress={() => alert("Twitter button clicked.")}>
                        <FontAwesome name="twitter" size={15} color="white" />
                      </TouchableOpacity>
                      {/* END TO SETUP TWITTER BUTTON VIEW */}

                      {/* BEGIN TO SETUP GOOGLE PLUS BUTTON VIEW */}
                      <TouchableOpacity style={styles.fb_view} onPress={() => alert("Google Plus button clicked.")}>
                        <Image source={require('./google_icon.png')} style={styles.google_img} />
                      </TouchableOpacity>
                      {/* END TO SETUP GOOGLE PLUS BUTTON VIEW */}
                </View>
                {/* END TO SETUP SOCIAL VIEW */}

            </View>
        </ImageBackground>
        {/* END TO SETUP IMAGE AS A BACKGROUND */}

        {/* BEGIN TO SETUP SCROLLABLE TAB VIEW */}
        <ScrollableTabView
          initialPage={0}
          tabBarUnderlineStyle={{ backgroundColor: "#ff6347" }}
          tabBarBackgroundColor={"#f7f7f7"}
          tabBarActiveTextColor={"#ff6347"}
          tabBarInactiveTextColor={"#d9d9d9"}
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
          )}
        >
          {/* BEGIN TO SETUP SCROLLABLE TAB VIEW 1 */}
          <View tabLabel="Lorem 1">
            <ListView
              contentContainerStyle={styles.list_content}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow.bind(this)}
              renderSeparator={this._renderSeparator}
              enableEmptySections
              pageSize={4}
            />
          </View>
          {/* END TO SETUP SCROLLABLE TAB VIEW 1 */}

          {/* BEGIN TO SETUP SCROLLABLE TAB VIEW 2 */}
          <View tabLabel="Lorem 2">
            <ListView
              contentContainerStyle={styles.list_content}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow.bind(this)}
              renderSeparator={this._renderSeparator}
              enableEmptySections
              pageSize={4}
            />
          </View>
          {/* END TO SETUP SCROLLABLE TAB VIEW 2 */}

          {/* BEGIN TO SETUP SCROLLABLE TAB VIEW 3 */}
          <View tabLabel="Lorem 3">
            <ListView
              contentContainerStyle={styles.list_content}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow.bind(this)}
              renderSeparator={this._renderSeparator}
              enableEmptySections
              pageSize={4}
            />
          </View>
          {/* END TO SETUP SCROLLABLE TAB VIEW 3 */}

          {/* BEGIN TO SETUP SCROLLABLE TAB VIEW 4 */}
          <View tabLabel="Lorem 4">
            <ListView
              contentContainerStyle={styles.list_content}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow.bind(this)}
              renderSeparator={this._renderSeparator}
              enableEmptySections
              pageSize={4}
            />
          </View>
          {/* END TO SETUP SCROLLABLE TAB VIEW 4 */}

          {/* BEGIN TO SETUP SCROLLABLE TAB VIEW 5 */}
          <View tabLabel="Lorem 5">
            <ListView
              contentContainerStyle={styles.list_content}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow.bind(this)}
              renderSeparator={this._renderSeparator}
              enableEmptySections
              pageSize={4}
            />
          </View>
          {/* END TO SETUP SCROLLABLE TAB VIEW 5 */}
        </ScrollableTabView>
        {/* END TO SETUP SCROLLABLE TAB VIEW */}

      </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  main_container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: '#e6e6e6',
    flexDirection: 'column'
  },
  header: {
		backgroundColor: 'rgba(0,0,0,0)',
		height: Dimensions.get('window').height * 0.1,
		borderBottomWidth: 0,
		paddingTop: (Dimensions.get('window').height * 0.03),
		elevation: 0,
		paddingLeft: (Dimensions.get('window').width * 0.05),
		paddingRight: (Dimensions.get('window').width * 0.05),
	},
  back_arrow: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'flex-start'
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
	right: {
		flex: 0.5
	},
  setting_icon: {
  	height:(Dimensions.get('window').height*0.03),
  	width:(Dimensions.get('window').height*0.03),
  	resizeMode: 'contain'
  },
  profile_header_main: {
  	backgroundColor: 'rgba(0,0,0,0)',
    ...Platform.select({
      ios:{
        height:(Dimensions.get('window').height * 0.4),
      },
      android:{
        height:(Dimensions.get('window').height * 0.42),
      }
    }),
  	alignItems: 'center',
  },
  profile_image_sec: {
  	justifyContent: 'center',
  	alignItems: 'center',
  	flexDirection: 'row',
  	paddingTop: (Dimensions.get('window').height * 0.03)
  },
  profile_image: {
  	height:(Dimensions.get('window').height * 0.14),
  	width:(Dimensions.get('window').height * 0.14),
  	marginHorizontal: (Dimensions.get('window').width * 0.08),
  	borderRadius: (Dimensions.get('window').height * 0.07),
  	borderWidth: 2.5,
  	borderColor: 'white',
  	resizeMode: 'cover'
  },
  name:{
    fontFamily: font_type.FontBold,
    fontSize: moderateScale(18),
    color: '#ffffff',
    marginTop:(Dimensions.get('window').height * 0.018)
  },
  address:{
    fontSize: moderateScale(12),
    fontFamily: font_type.FontLight,
    color:'#ffffff',
    textAlign: 'center',
    marginVertical: (Dimensions.get('window').height * 0.005),
    marginHorizontal: (Dimensions.get('window').height * 0.1)
  },
  fb_twitter_google_view:{
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').height) * 0.08,
    marginTop: (Dimensions.get('window').height) * 0.015,
    justifyContent:'center',
    alignSelf:'center',
    alignItems:'center',
    flexDirection: 'row',
  },
  fb_view:{
    justifyContent:'center',
    alignItems:'center',
    width: (Dimensions.get('window').height) * 0.05,
    height: (Dimensions.get('window').height) * 0.05,
    borderRadius: (Dimensions.get('window').height) * 0.025,
    backgroundColor:'#0691ce',
    marginRight: (Dimensions.get('window').height) * 0.015
  },
  google_img:{
    height: (Dimensions.get('window').height) * 0.022,
    width: (Dimensions.get('window').width) * 0.050,
    resizeMode: 'contain'
  },
  profile_img: {
    width: (Dimensions.get('window').width) * 0.10,
    height: (Dimensions.get('window').width) * 0.10,
    borderRadius: (Dimensions.get('window').width) * 0.05
  },
  name_txt: {
      color: "#363636",
      fontSize: moderateScale(14),
      fontFamily: font_type.FontBold,
      textAlign: 'left'
  },
  designation_txt: {
      color: "#b7b7b7",
      fontSize: moderateScale(12),
      marginTop: (Dimensions.get('window').height) * 0.002,
      textAlign: 'left'
  },
  main_row:{
    flexDirection: 'row',
    margin: (Dimensions.get('window').height) * 0.015,

    alignItems: 'center'
  },
  name_designation_main_view:{
    marginLeft: (Dimensions.get('window').width) * 0.045,
    flexDirection: 'column'
  },
  name_designation_view:{
    flexDirection:'column',
    justifyContent:'center'
  },
  divider_horizontal:{
    width: (Dimensions.get('window').width) * 0.95,
    height: (Dimensions.get('window').height) * 0.001,
    backgroundColor:'#e6e6e6',
    justifyContent:'center',
    alignSelf:'center'
  },
  list_content: {
    backgroundColor: 'white'
  },
  blank_view: {
    position:'absolute',
    top:0,
    bottom:0,
    left:0,
    right:0,
    backgroundColor:'rgba(0,0,0,0.2)'
  },
  img_container: {
  },
});
// END TO MAKE STYLE
