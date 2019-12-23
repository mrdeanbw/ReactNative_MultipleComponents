import React, { Component } from "react";
import {Text,Image,StatusBar,Platform,ImageBackground,Dimensions,StyleSheet,TouchableOpacity,Alert,I18nManager,ListView} from "react-native";
import {Container,Button,Right,Left,ListItem,Content,Body,Title,Icon,Header} from "native-base";
import {TabBar} from "react-native-tab-view";
import LinearGradient from "react-native-linear-gradient";
import { View } from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
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
// END TO SETUP FONT-TYPE AND FONT-SIZ



export default class ProfileSocialTwo extends Component {

  constructor(props) {
    super(props);

    //BEGIN TO SETUP PROFILEDETAILS
    const profileDetails = [
      {
        id: 1,
        profileImage: GlobalInclude.Image5,
        name: 'Lorem ipsum',
        designation: 'Lorem ipsum'
      },
      {
        id: 2,
        profileImage: GlobalInclude.Image4,
        name: 'Lorem ipsum',
        designation: 'Lorem ipsum'
      },
      {
        id: 3,
        profileImage: GlobalInclude.Image8,
        name: 'Lorem ipsum',
        designation: 'Lorem ipsum'
      },
      {
        id: 4,
        profileImage: GlobalInclude.Image9,
        name: 'Lorem ipsum',
        designation: 'Lorem ipsum'
      },
      {
        id: 5,
        profileImage: GlobalInclude.Image10,
        name: 'Lorem ipsum',
        designation:'Lorem ipsum'
      },
      {
        id: 6,
        profileImage: GlobalInclude.Image7,
        name: 'Lorem ipsum',
        designation: 'Lorem ipsum'
      },
      {
        id: 7,
        profileImage: GlobalInclude.Image2,
        name: 'Lorem ipsum',
        designation:'Lorem ipsum'
      },
      {
        id: 8,
        profileImage: GlobalInclude.Image1,
        name: 'Lorem ipsum',
        designation:'Lorem ipsum'
      },
      {
        id: 9,
        profileImage: GlobalInclude.Image2,
        name: 'Lorem ipsum',
        designation: 'Lorem ipsum'
      },
      {
        id: 10,
        profileImage: GlobalInclude.Image3,
        name: 'Lorem ipsum',
        designation: 'Lorem ipsum'
      },
      {
        id: 11,
        profileImage: GlobalInclude.Image4,
        name: 'Lorem ipsum',
        designation: 'Lorem ipsum'
      },
      {
        id: 12,
        profileImage: GlobalInclude.Image5,
        name: 'Lorem ipsum',
        designation: 'Lorem ipsum'
      },
      {
        id: 13,
        profileImage: GlobalInclude.Image6,
        name: 'Lorem ipsum',
        designation:'Lorem ipsum'
      },
      {
        id: 14,
        profileImage: 7,
        name: 'Lorem ipsum',
        designation:'Lorem ipsum'
      }
    ];
    //END TO SETUP PROFILEDETAILS

    //BEGIN TO SETUP LISTVIEW ROW DATA
    const rowHasChanged = (r1, r2) => r1 !== r2;
    const ds = new ListView.DataSource({ rowHasChanged });

    this.state = {
      isLoading: true,
      dataSource: ds.cloneWithRows(profileDetails)
    };
  }
  //END TO SETUP LISTVIEW ROW DATA

  //BEGIN TO SETUP LISTVIEW ROW VIEW
  _renderProfileDetailRow(rowData) {
    return (
      <View style={styles.rowdetail}>
        <Image source={rowData.profileImage} style={styles.profile_img} />
        {/* BEGIN TO SETUP NAME AND DESIGNATION VIEW */}
          <View style={styles.names}>
            <View style={styles.prodetail}>
              <Text style={styles.name_txt}>{rowData.name}</Text>
              <Text style={styles.designation_txt}>{rowData.designation}</Text>
            </View>
          </View>
        {/* END TO SETUP NAME AND DESIGNATION VIEW */}

        {/* BEGIN TO SETUP FOLLOW VIEW */}
          <Right>
            <View style={styles.followbtn}>
              <Text style={styles.txt_follow}>Follow</Text>
            </View>
          </Right>
        {/* END TO SETUP FOLLOW VIEW */}
      </View>
    );
  }
  //END TO SETUP LISTVIEW ROW VIEW

  render() {
    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW
    return (
      <Container style={styles.mains}>
       {/* BEGIN TO SETUP IMAGEBACKGROUND VIEW */}
        <ImageBackground style={styles.img_container} source={GlobalInclude.Image3}>
       {/* BEGIN TO SETUP LINEARGRADIENTS VIEW */}
          <LinearGradient
            locations={[0.1, 1]}
            colors={["transparent", "black"]}
            style={styles.gred}>
            <LinearGradient
              locations={[0.5, 2.5]}
              colors={["transparent", "black"]}
              style={styles.gred_top}>
          {/* BEGIN TO SETUP HEADER VIEW */}
              <Header androidStatusBarColor={"transparent"} style={styles.header}>

          {/* BEGIN TO SETUP LEFT VIEW */}
                <Left style={styles.left}>
                  <TouchableOpacity style={styles.back_arrow} onPress={() => this.props.navigation.goBack()}>
                    <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30}  color="white"/>
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
                  <Button transparent />
                </Right>
          {/* END TO SETUP RIGHT VIEW */}
              </Header>
          {/* END TO SETUP HEADER VIEW */}

          {/* BEGIN TO SETUP PROFILEIMAGE AND NAME AND ADDRESS AND FOLLOW VIEW */}
              <View style={styles.topview}>
                <Image style={styles.profile_imgs} source={GlobalInclude.Image10}/>
                <Text style={styles.name_txts}>Lorem ipsum</Text>
                <Text style={styles.address_txt}>
                  Lorem Ipsum is not simply random text
                </Text>
                <TouchableOpacity style={styles.follow_bg} onPress={() => alert("FOLLOWING button clicked.")}>
                  <Text style={styles.follow_txt}>FOLLOWING</Text>
                </TouchableOpacity>
              </View>
          {/* END TO SETUP PROFILEIMAGE AND NAME AND ADDRESS AND FOLLOW VIEW */}
            </LinearGradient>

          {/* BEGIN TO SETUP SCROLLABLETABVIEW VIEW */}
            <ScrollableTabView
              initialPage={0}
              tabBarUnderlineStyle={styles.tabUnderLine}
              tabBarBackgroundColor={"white"}
              tabBarActiveTextColor={"#6f6f6f"}
              tabBarInactiveTextColor={"#6f6f6f"}
              tabBarTextStyle={styles.tabText}
              style={{
                width: Dimensions.get("window").width * 0.95,
                backgroundColor: "transparent"}}
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
              {/* BEGIN TO SETUP PHOTOSTAB VIEW */}
                <View tabLabel="Photos">
                  <ListView
                    contentContainerStyle={styles.list_content}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderProfileDetailRow.bind(this)}
                    renderSeparator={this._renderSeparator}
                    enableEmptySections
                    pageSize={4}/>
                </View>
              {/* END TO SETUP PHOTOSTAB VIEW */}

              {/* BEGIN TO SETUP VIDEOS VIEW */}
                <View tabLabel="Videos">
                  <ListView
                    contentContainerStyle={styles.list_content}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderProfileDetailRow.bind(this)}
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
                    renderRow={this._renderProfileDetailRow.bind(this)}
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
                    renderRow={this._renderProfileDetailRow.bind(this)}
                    renderSeparator={this._renderSeparator}
                    enableEmptySections
                    pageSize={4}/>
                </View>
              {/* END TO SETUP BOOKS VIEW */}
            </ScrollableTabView>
          {/* END TO SETUP SCROLLABLETABVIEW */}
            </LinearGradient>
          {/* END TO SETUP LINEARGRADIENTS VIEW */}
            </ImageBackground>
         {/* END TO SETUP IMAGEBACKGROUND VIEW */}
      </Container>
    );
  }
}
// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height*0.6,
    borderRadius: 10,
    width: (Dimensions.get("window").width) * 0.95,
    alignSelf: 'center',
    backgroundColor: "transparent",
  },
  topview:{
    height: Dimensions.get("window").height*0.4,
    width: (Dimensions.get("window").width) ,
  },
  back_arrow: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  gred:{
    height: Dimensions.get("window").height,
    width: (Dimensions.get("window").width) ,
    alignItems:'center'
  },
  gred_top:{
    height: Dimensions.get("window").height*0.5,
    width: (Dimensions.get("window").width) ,
  },
  left:{
    flex:1
  },
  body:{
    flex:2,
    alignItems:'center'
  },
  title:{
    marginTop: 2,
    color: 'white',
    fontSize: moderateScale(18),
    fontFamily: font_type.FontBold
  },
  mains: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: "transparent",
    alignItems: 'center',
    justifyContent: 'center'
  },
  img_container: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    flexDirection: 'column'
  },
  profile_imgs: {
    width: (Dimensions.get("window").height) * 0.12,
    height: (Dimensions.get("window").height) * 0.12,
    borderRadius: (Dimensions.get("window").height) * 0.06,
    borderColor: "#fff",
    borderWidth: 2.5,
    marginTop: (Dimensions.get("window").height) * 0.05,
    alignSelf: 'center'
  },
  name_txts: {
    color: "#fff",
    fontSize: moderateScale(18),
    fontFamily: font_type.FontBold,
    alignSelf: 'center',
    marginTop: (Dimensions.get("window").height) * 0.02,
    backgroundColor: 'transparent'
  },
  address_txt: {
    color: "#b3b3b4",
    width: (Dimensions.get("window").width) * 0.50,
    alignSelf: 'center',
    fontSize: moderateScale(12),
    fontFamily: font_type.FontBold,
    marginTop: (Dimensions.get("window").height) * 0.01,
    textAlign: 'center',
    backgroundColor: 'transparent'
  },
  label_txt: {
    fontSize: moderateScale(12),
    fontFamily: font_type.FontLight,
    color: "#959595",
    textAlign: 'center'
  },
  count_txt: {
    fontSize: moderateScale(14),
    fontFamily: font_type.FontBold,
    color: "#363636",
    textAlign: 'center'
  },
  rowdetail:{
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  list_content: {
    backgroundColor: 'white',
    width: (Dimensions.get("window").width) * 0.95,
    justifyContent: 'center',
    alignItems: 'center',
  },
  names:{
    marginLeft: 15,
    flexDirection: 'column'
  },
  prodetail:{
    flexDirection:'column',
    justifyContent:'center'
  },
  txt_follow:{
    color: "#ff6347",
    alignSelf: 'center',
    fontSize: moderateScale(12),
    backgroundColor: 'transparent'
  },
  header: {
    backgroundColor: 'transparent',
    height: 65,
    width: Dimensions.get("window").width,
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
    elevation: 0
},
  designation_txt: {
      color: "#b7b7b7",
      fontSize: moderateScale(12),
      marginTop: 2,
      textAlign: 'left',
      backgroundColor: 'transparent'
  },
  follow_bg: {
    borderColor: "#ff6347",
    borderRadius: 20,
    backgroundColor: "transparent",
    borderWidth: 1,
    width: (Dimensions.get("window").width) * 0.40,
    height: (Dimensions.get("window").height) * 0.06,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: (Dimensions.get("window").height) * 0.02,
    marginBottom: (Dimensions.get("window").height) * 0.02,
  },
  prodetail:{
    flexDirection:'column',
    justifyContent:'center'
  },
  followbtn:{
    justifyContent: 'center',
    marginRight: (Dimensions.get("window").width) * 0.045,
    width: (Dimensions.get("window").width) * 0.20,
    height: (Dimensions.get("window").height) * 0.034,
    borderWidth: 1,
    borderColor: "#ff6347",
    borderRadius: 20
  },
  profile_img: {
    width: (Dimensions.get("window").width) * 0.10,
    height: (Dimensions.get("window").width) * 0.10,
    borderRadius: (Dimensions.get("window").width) * 0.05
  },
  name_txt: {
      color: "#363636",
      fontSize: moderateScale(14),
      fontFamily: font_type.FontBold,
      textAlign: 'left',
      backgroundColor: 'transparent'
  },
  follow_txt: {
    fontFamily: font_type.FontBold,
    fontSize: moderateScale(18),
    color: "#ff6347",
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: 'transparent',
    width: (Dimensions.get("window").width) * 0.32,
  }
});
// END TO MAKE STYLE
