import React, { Component } from "react";
import {Text,Image,StatusBar,Platform,ImageBackground,Dimensions,StyleSheet,TouchableOpacity,ListView,I18nManager} from "react-native";
import {Container,Button,Right,Left,ListItem,Content,Body,Icon,Header} from "native-base";
import {TabBar, SceneMap } from "react-native-tab-view";
import { View } from "react-native-animatable";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ScrollableTabView, {ScrollableTabBar} from "../../../ThirdPartyModule/react-native-scrollable-tab-view";
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";

const initialLayout = {
  height: 0,
  width: Dimensions.get("window").width
};

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

export default class ProfileRealtor extends Component {

  constructor(props) {
    super(props);
    const rowHasChanged = (r1, r2) => r1 !== r2;
    const ds = new ListView.DataSource({ rowHasChanged });

    //BEGIN TO SETUP DATA
    const dataObjects = [
      {
        id: 1,
        name: "Lorem ipsum",
        profile:GlobalInclude.Image8,
        uploadImage:GlobalInclude.Image7,
        comment: "Lorem Ipsum is not simply random text",
        location: "Lorem Ipsum",
        time: "8 mins"
      },
      {
        id: 2,
        name: "Lorem ipsum",
        profile:GlobalInclude.Image6,
        uploadImage:GlobalInclude.Image5,
        comment: "Lorem Ipsum is not simply random text",
        location: "Lorem Ipsum",
        time: "30 mins"
      },
      {
        id: 3,
        name: "Lorem ipsum",
        profile:GlobalInclude.Image4,
        uploadImage:GlobalInclude.Image3,
        comment: "Lorem Ipsum is not simply random text",
        location: "Lorem Ipsum",
        time: "8 mins"
      },
      {
        id: 4,
        name: "Lorem ipsum",
        profile:GlobalInclude.Image2,
        uploadImage:GlobalInclude.Image7,
        comment: "Lorem Ipsum is not simply random text",
        location: "Lorem Ipsum",
        time: "8 mins"
      }
    ];
    //END TO SETUP DATA

    //BEGIN TO SETUP LISTVIEW DATA
    this.state = {
      dataSource: ds.cloneWithRows(dataObjects)
    };
    //BEGIN TO SETUP LISTVIEW DATA
  }

  //BEGIN TO SETUP LISTVIEW LABEL
  _getLabelText = ({ route }) => route.title;
  //END TO SETUP LISTVIEW LABEL

  //BEGIN TO SETUP LISTVIEW HEADER
  _renderHeader = props => (
    <TabBar
      {...props}
      pressLabelColor="#FFFFFF"
      getLabelText={this._getLabelText}
      tabBarSelectedButtonColor="#FFFFFF"
      tabBarButtonColor="#9c9ead"
      labelStyle={styles.label}
      indicatorStyle={styles.indicatorstyles}
      style={styles.tabbarstyle}
    />
  );
  //END TO SETUP LISTVIEW HEADER

  //BEGIN TO SETUP LISTVIEW ROW
  _renderRow(rowData) {
    return (
      <View style={styles.row_main}>
      {/* BEGIN TO SETUP UPLOADIMAGE VIEW */}
        <Image source={rowData.uploadImage} style={styles.row_image} />
      {/* END TO SETUP UPLOADIMAGE VIEW */}

      {/* BEGIN TO SETUP COMMENT AND LOCATION VIEW */}
        <View style={styles.row_con_title}>
          <Text numberOfLines={2} style={styles.row_title}>
            {rowData.comment}
          </Text>
          <View style={styles.row_location}>
            <Image source={require('./location_icon.png')} style={styles.icon_size} />
            <Text numberOfLines={1} style={styles.location_text}>
              {rowData.location}
            </Text>
          </View>
        </View>
      {/* END TO SETUP COMMENT AND LOCATION VIEW */}
        <View style={styles.row_devider} />
      {/* BEGIN TO SETUP PROFILE IMAGE AND NAME AND TIME VIEW */}
        <View style={styles.row_profile}>
          <Image source={rowData.profile} style={styles.row_pro_image} />
          <View style={styles.sub_row}>
            <Text numberOfLines={1} style={styles.profile_name}>
              {rowData.name}
            </Text>
            <Text style={styles.time_text}>{rowData.time}</Text>
          </View>
        </View>
      {/* END TO SETUP PROFILE IMAGE AND NAME AND TIME VIEW */}
      </View>
    );
  }
  //END TO SETUP LISTVIEW ROW

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
       <ImageBackground source={GlobalInclude.Image1} style={styles.header_image_bg}>
       {/* BEGIN TO SETUP HEADER VIEW */}
          <Header style={styles.header}>
       {/* BEGIN TO SETUP LEFT VIEW */}
           <Left style={styles.left}>
                <TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
                  <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={25} color='white'/>
                </TouchableOpacity>
           </Left>
       {/* END TO SETUP LEFT VIEW */}

       {/* BEGIN TO SETUP BODY VIEW */}
           <Body style={styles.body}>
                <Text style={styles.text_title}>Profile</Text>
           </Body>
       {/* END TO SETUP BODY VIEW */}

       {/* BEGIN TO SETUP RIGHT VIEW */}
           <Right style={styles.right}>

           </Right>
       {/* END TO SETUP RIGHT VIEW */}
          </Header>
       {/* END TO SETUP HEADER VIEW */}

          <View style={styles.header_container}>
        {/* BEGIN TO SETUP IMAGE AND NAME AND EMAIL VIEW */}
            <View style={styles.profile_body_sec}>
              <Image
                source={GlobalInclude.Image7}
                style={styles.profile_image}/>
              <View style={styles.profile_detail}>
                <Text style={styles.names}>Lorem ipsum</Text>
                <Text style={styles.email}>lorem@ipsum.com</Text>
              </View>
            </View>
        {/* END TO SETUP IMAGE AND NAME AND EMAIL VIEW */}

        {/* BEGIN TO SETUP HEART ICON VIEW */}
            <TouchableOpacity
              style={
                this.state.isFavorite
                  ? styles.activeButton
                  : styles.normalButton
              }
              onPress={() =>
                this.setState({ isFavorite: !this.state.isFavorite })
              }>
              <Icon name="ios-heart" style={styles.socialIcon} />
            </TouchableOpacity>
          {/* END TO SETUP HEART ICON VIEW */}
            </View>
          </ImageBackground>
        {/* END TO SETUP IMAGEBACKGROUND VIEW */}

        {/* BEGIN TO SETUP SCROLLABLETAB VIEW */}
          <ScrollableTabView
            initialPage={0}
            tabBarUnderlineStyle={styles.tab_under_line}
            tabBarBackgroundColor={"#383d5a"}
            tabBarActiveTextColor={"white"}
            tabBarInactiveTextColor={"#9c9ead"}
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

        {/* BEGIN TO SETUP PHOTOS VIEW */}
          <View tabLabel="Photos">
            <ListView
              contentContainerStyle={styles.list_content}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow.bind(this)}
              renderSeparator={this._renderSeparator}
              enableEmptySections
              pageSize={4}/>
          </View>
        {/* END TO SETUP PHOTOS VIEW */}

        {/* BEGIN TO SETUP VIDEOS VIEW */}
          <View tabLabel="Videos">
            <ListView
              contentContainerStyle={styles.list_content}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow.bind(this)}
              renderSeparator={this._renderSeparator}
              enableEmptySections
              pageSize={4}/>
          </View>
        {/* END TO SETUP VIDEOS VIEW */}

        {/* BEGIN TO SETUP EVENTS VIEW */}
          <View tabLabel="Events">
            <ListView
              contentContainerStyle={styles.list_content}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow.bind(this)}
              renderSeparator={this._renderSeparator}
              enableEmptySections
              pageSize={4}/>
          </View>
        {/* END TO SETUP EVENTS VIEW */}

        {/* BEGIN TO SETUP BOOKS VIEW */}
          <View tabLabel="Books">
            <ListView
              contentContainerStyle={styles.list_content}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow.bind(this)}
              renderSeparator={this._renderSeparator}
              enableEmptySections
              pageSize={4}/>
          </View>
        {/* END TO SETUP BOOKS VIEW */}
          </ScrollableTabView>
      {/* END TO SETUP SCROLLABLETAB VIEW */}
      </Container>
    );
  }
}
// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({

  content:{
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
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
  title:{
    marginTop: 2,
    color: "#363636",
    fontSize: moderateScale(18),
    fontFamily: 'SFUIDisplay-Semibold'
  },
  count_txt: {
    color: "#363636",
    fontSize: moderateScale(16),
    fontFamily: font_type.FontBold,
    textAlign: 'center'
  },
  divider_horizontal: {
    backgroundColor: "#d7d7d7",
    width: (Dimensions.get("window").width) * 0.965,
    height: 1,
    alignSelf: 'flex-end',
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
    flex: 1,
    paddingTop: (Platform.OS === 'ios')? 15 : 0,
  },
  main: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: "#e6e6e6",
    flexDirection: 'column',
    paddingBottom: (Dimensions.get("window").height * 0.030),
  },
  header_image_bg: {
  	height:(Dimensions.get("window").height*0.255),
  	width:(Dimensions.get("window").width),
  	backgroundColor: 'gray'
  },
  list_content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal:(Dimensions.get("window").width * 0.025),
    marginVertical:(Dimensions.get("window").height * 0.015),
    alignItems:'flex-start',
    alignContent:'flex-start',
    justifyContent: 'space-between'
  },
  names: {
    fontFamily: font_type.FontBold,
    fontSize: 18,
    color:'white',
    backgroundColor: 'transparent',
    textAlign: 'left'
  },
  email: {
    fontFamily: font_type.FontLight,
    fontSize: 12,
    color:'#fff8',
    backgroundColor: 'transparent',
    marginTop: (Dimensions.get("window").height * 0.004)
  },
  row_main:{
    backgroundColor:'transparent',
    width: (Dimensions.get("window").width * 0.445),
    alignItems:'center',
    margin:(Dimensions.get("window").width * 0.015),
    alignItems:'flex-start',
    alignContent:'flex-start',
    flexDirection: 'column',
    shadowOffset:{width: 3,  height: 3},
    shadowColor: '#6F6F6F',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5
  },
  divider_horizontal: {
      width: (Dimensions.get("window").width * 0.445),
      height: 1,
      marginTop: 20,
      backgroundColor: "#f2f2f2"
  },
  row_image: {
  	width: (Dimensions.get("window").width * 0.445),
  	height: (Dimensions.get("window").height * 0.445),
  	borderRadius: 2,
  	resizeMode: 'cover',
  },
  icon_size: {
  	width: (Dimensions.get("window").width * 0.035),
  	height: (Dimensions.get("window").height * 0.035),
  	marginRight: (Dimensions.get("window").width * 0.01),
  	resizeMode: 'contain',
  },
  row_con_title: {
  	margin: (Dimensions.get("window").width * 0.03),
  	justifyContent: 'space-between'
  },
  row_title: {
  	color: '#6f6f6f',
  	fontFamily: font_type.FontLight,
  	fontSize: 15,
  	textAlign: 'left'
  },
  row_location: {
  	flexDirection: 'row',
  	marginTop: (Dimensions.get("window").height * 0.01),
  	alignItems: 'center'
  },
  location_text: {
  	color: '#adadad',
  	fontFamily: font_type.FontLight,
  	fontSize: 12,
  },
  row_devider: {
  	backgroundColor: '#f2f2f2',
  	width: (Dimensions.get("window").width * 0.445),
  	height: 1,
  	marginTop: (Dimensions.get("window").height * 0.01),
  },
  row_profile: {
  	flexDirection: 'row',
  	marginHorizontal: (Dimensions.get("window").width * 0.03),
  	marginVertical: (Dimensions.get("window").width * 0.015),
  	justifyContent: 'center',
  	alignItems: 'center'
  },
  row_pro_image: {
  	width: (Dimensions.get("window").width * 0.08),
  	height: (Dimensions.get("window").width * 0.08),
  	borderRadius: (Dimensions.get("window").width * 0.04),
  	resizeMode: 'cover',
  	marginRight: (Dimensions.get("window").width * 0.02),
  },
  sub_row: {
  	justifyContent: 'center',
  },
  profile_name: {
  	color: '#363636',
  	fontFamily: font_type.FontBold,
  	fontSize: 15,
  },
  time_text: {
  	color: '#b7b7b7',
  	fontFamily: font_type.FontLight,
  	fontSize: 12,
  	textAlign: 'left'
  },
  header_container: {
    bottom:(Dimensions.get("window").height * 0.03),
    width:(Dimensions.get("window").width * 0.9),
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center'
  },
  profile_body_sec: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  profile_image: {
    height:(Dimensions.get("window").height * 0.09),
    width:(Dimensions.get("window").height * 0.09),
    borderRadius:(Dimensions.get("window").height * 0.045),
    borderWidth: 2.5,
    borderColor: 'white'
  },
  tab_under_line:{
    backgroundColor: '#0691ce',
  },
  profile_detail: {
    marginLeft: (Dimensions.get("window").width * 0.04)
  },
  text_title:{
    color:'white',
    fontSize:17
  }
});
// END TO MAKE STYLE
