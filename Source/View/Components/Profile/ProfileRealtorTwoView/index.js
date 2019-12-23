import React, { Component } from "react";
import {Text,Image,StatusBar,Platform,ImageBackground,Dimensions,TouchableOpacity,StyleSheet,View,ListView,Alert,I18nManager} from "react-native";
import {Container,Button,Right,Left,Content,Body,Header,Icon,Title} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
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



export default class ProfileRealtorTwo extends Component {

  constructor(props) {
    super(props);

    //BEGIN TO SETUP LISTVIEW DATA
    const dataObjects = [
      {
        id: 1,
        cardBgImage: GlobalInclude.Image4,
        profileImage: GlobalInclude.Image5,
        title: "Lorem Ipsum",
        addrss: "Lorem Ipsum",
        name: "Lorem Ipsum",
        time: "8 mins"
      },
      {
        id: 2,
        cardBgImage: GlobalInclude.Image6,
        profileImage: GlobalInclude.Image7,
        title: "Lorem Ipsum",
        addrss: "Lorem Ipsum",
        name: "Lorem Ipsum",
        time: "30 mins"
      },
      {
        id: 3,
        cardBgImage: GlobalInclude.Image8,
        profileImage: GlobalInclude.Image9,
        title: "Lorem Ipsum",
        addrss: "Lorem Ipsum",
        name: "Lorem Ipsum",
        time: "27 mins"
      },
      {
        id: 4,
        cardBgImage: GlobalInclude.Image10,
        profileImage: GlobalInclude.Image9,
        title: "Lorem Ipsum",
        addrss: "Lorem Ipsum",
        name: "Lorem Ipsum",
        time: "56 mins"
      },
      {
        id: 5,
        cardBgImage: GlobalInclude.Image1,
        profileImage: GlobalInclude.Image2,
        title: "Lorem Ipsum",
        addrss: "Lorem Ipsum",
        name: "Lorem Ipsum",
        time: "5 mins"
      },
      {
        id: 6,
        cardBgImage: GlobalInclude.Image3,
        profileImage: GlobalInclude.Image4,
        title: "Lorem Ipsum",
        addrss: "Lorem Ipsum",
        name: "Lorem Ipsum",
        time: "19 mins"
      },
      {
        id: 5,
        cardBgImage: GlobalInclude.Image6,
        profileImage: GlobalInclude.Image5,
        title: "Lorem Ipsum",
        addrss: "Lorem Ipsum",
        name: "Lorem Ipsum",
        time: "5 mins"
      },
      {
        id: 6,
        cardBgImage: GlobalInclude.Image7,
        profileImage: GlobalInclude.Image3,
        title: "Lorem Ipsum",
        addrss: "Lorem Ipsum",
        name: "Lorem Ipsum",
        time: "19 mins"
      }
    ];
    //END TO SETUP LISTVIEW DATA

    //BEGIN TO SETUP LISTVIEW ROWDATA
    const rowHasChanged = (r1, r2) => r1 !== r2;
    const ds = new ListView.DataSource({ rowHasChanged });

    this.state = {
      isLoading: true,
      dataSource: ds.cloneWithRows(dataObjects)
    };
    //END TO SETUP LISTVIEW ROWDATA
  }

  //BEGIN TO SETUP LISTVIEW ROW
  _renderRow(rowData) {
    return (
      <View style={styles.row_main}>
      {/* BEGIN TO SETUP IMAGE VIEW */}
        <Image source={rowData.cardBgImage} style={styles.card_bg_image} />
      {/* BEGIN TO SETUP IMAGE VIEW */}
        <View style={styles.card_content}>
      {/* BEGIN TO SETUP TITLE AND ADDRESS ICON VIEW */}
          <Text style={styles.title_txt}>{rowData.title}</Text>
          <View style={styles.address_bg}>
            <Ionicons name="ios-pin" size={16} color="grey" style={{justifyContent: "center",backgroundColor: "transparent",alignItems: "center",alignSelf: "center"}}/>
            <Text style={styles.address_txt}>{rowData.addrss}</Text>
          </View>
      {/* END TO SETUP TITLE AND ADDRESS ICON VIEW */}
          <View style={styles.divider_horizontal} />
      {/* BEGIN TO SETUP PROFILEIMAGE AND NAME AND TIME VIEW */}
          <View style={styles.profile_bg}>
            <Image source={rowData.profileImage} style={styles.profile_img} />
            <View style={styles.name_time_bg}>
              <Text style={styles.name_txt}>{rowData.name}</Text>
              <Text style={styles.time_txt}>{rowData.time}</Text>
            </View>
          </View>
      {/* END TO SETUP PROFILEIMAGE AND NAME AND TIME VIEW */}
        </View>
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

    var data = [
      {
        id: 1,
        profileImage: GlobalInclude.Image4,
        name: "Lorem ipsum",
        designation: "Lorem ipsum"
      },
      {
        id: 2,
        profileImage: GlobalInclude.Image3,
        name: "Lorem ipsum",
        designation: "Lorem ipsum"
      }
    ];

    return (
      <Container style={styles.mains}>
        {/* BEGIN TO SETUP HEADER VIEW */}
          <Header androidStatusBarColor={"#FFFFFF"} style={styles.header}>
        {/* BEGIN TO SETUP LEFT VIEW */}
            <Left style={styles.left}>
              <TouchableOpacity style={styles.back_arrow} onPress={() => this.props.navigation.goBack()}>
                <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="black"/>
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
        {/* END TO SETUP BODY VIEW */}
          </Header>
        {/* END TO SETUP HEADER VIEW */}

        <Content style={styles.content}>
        {/* BEGIN TO SETUP PROFILEIMAGE AND CAMERA VIEW */}
          <View style={styles.proimg}>
            <Image style={styles.profile_imgs} source={GlobalInclude.Image4} />
            <TouchableOpacity style={styles.camera_icon} onPress={() => alert("Edit Profile Picture button clicked.")}>
              <SimpleLineIcons name="camera" size={18} color="white" style={{backgroundColor: "transparent",justifyContent: "center"}}/>
            </TouchableOpacity>
          </View>
        {/* END TO SETUP PROFILEIMAGE AND CAMERA VIEW */}

        {/* BEGIN TO SETUP NAME AND DESIGNATION VIEW */}
          <Text style={styles.name_txts}>Lorem ipsum</Text>
          <Text style={styles.designtaion_txt}>Lorem ipsum</Text>
        {/* END TO SETUP NAME AND DESIGNATION VIEW */}

        {/* BEGIN TO SETUP FOLLOWERS AND FOLLOWING AND LIKES VIEW */}
          <View style={styles.follower_follwing_like_bg}>
            {/* BEGIN TO SETUP FOLLOWERS VIEW */}
              <View style={{ flexDirection: "row" }}>
                <View style={styles.count_label_bg}>
                  <Text style={styles.count_txt}>11</Text>
                  <Text style={styles.label_txt}>Followers</Text>
                </View>
                <View style={styles.divider_vertical} />
              </View>
            {/* END TO SETUP FOLLOWERS VIEW */}

            {/* BEGIN TO SETUP FOLLOWING VIEW */}
              <View style={{ flexDirection: "row" }}>
                <View style={styles.count_label_bg}>
                  <Text style={styles.count_txt}>33</Text>
                  <Text style={styles.label_txt}>Following</Text>
                </View>
                <View style={styles.divider_vertical} />
              </View>
            {/* END TO SETUP FOLLOWING VIEW */}

            {/* BEGIN TO SETUP LIKES VIEW */}
              <View style={styles.count_label_bg}>
                <Text style={styles.count_txt}>55</Text>
                <Text style={styles.label_txt}>Likes</Text>
              </View>
            {/* END TO SETUP LIKES VIEW */}
              </View>
            {/* END TO SETUP FOLLOWERS AND FOLLOWING AND LIKES VIEW */}
        </Content>

        <View style={styles.divider_grey} />
      {/* BEGIN TO SETUP LISTVIEW */}
        <Container style={styles.main}>
          <ListView
            contentContainerStyle={styles.list_content}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
            enableEmptySections
            pageSize={4}/>
        </Container>
      {/* END TO SETUP LISTVIEW */}
      </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  mains: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: "#FFFFFF",
    flexDirection: 'column'
  },
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
    backgroundColor: '#FFFFFF',
    height: 65,
    width: Dimensions.get("window").width,
    flexDirection: 'row',
    borderBottomColor: 'transparent',
    elevation: 0,
    ...Platform.select({
        ios: {
          paddingTop: 12,
        },
        android: {
          paddingTop: 15
        }
    }),
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
    color: "#363636",
    fontSize: moderateScale(18),
    fontFamily: font_type.FontBold
  },
  proimg:{
    flexDirection: 'row',
    alignSelf: 'center'
  },
  profile_imgs: {
    width: (Dimensions.get("window").width) * 0.30,
    height: (Dimensions.get("window").width) * 0.30,
    borderRadius: (Dimensions.get("window").width) * 0.15,
    borderWidth: 1,
    borderColor: "#fff",
    alignSelf: 'center',
    marginTop: (Dimensions.get("window").height) * 0.02,
    },
  camera_icon: {
    width: (Dimensions.get("window").width) * 0.08,
    height: (Dimensions.get("window").width) * 0.08,
    borderRadius: (Dimensions.get("window").width) * 0.04,
    alignSelf: 'flex-end',
    marginLeft: -((Dimensions.get("window").width) * 0.08),
    marginBottom: ((Dimensions.get("window").width) * 0.01),
    backgroundColor: '#0691ce',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth:1
  },
  name_txts: {
    color: "#6f6f6f",
    fontSize: moderateScale(18),
    textAlign: 'center',
    fontFamily: font_type.FontBold,
    marginTop: (Dimensions.get("window").height) * 0.025
  },
  designtaion_txt: {
    color: "#b7b7b7",
    fontSize: moderateScale(14),
    textAlign: 'center',
    fontFamily: font_type.FontLight
  },
  follower_follwing_like_bg: {
      flexDirection: 'row',
      width: (Dimensions.get("window").width) * 0.87,
      alignSelf: 'center',
      marginTop: (Dimensions.get("window").height) * 0.03,
  },
  count_label_bg: {
    flexDirection: 'column',
    width: (Dimensions.get("window").width) * 0.29,
    justifyContent: 'center'
  },
  count_txt: {
    color: "#363636",
    fontSize: moderateScale(16),
    fontFamily: font_type.FontBold,
    textAlign: 'center'
  },
  label_txt: {
    color: "#959595",
    fontSize: moderateScale(12),
    textAlign: 'center'
  },
  divider_vertical: {
    backgroundColor: "#d7d7d7",
    width: 1,
    height: (Dimensions.get("window").height) * 0.03,
    alignSelf: 'flex-end',
    marginBottom: 5
  },
  divider_horizontal: {
    backgroundColor: "#d7d7d7",
    width: (Dimensions.get("window").width) * 0.965,
    height: 1,
    alignSelf: 'flex-end',
  },
  divider_grey: {
    backgroundColor: "#e6e6e6",
    height: (Dimensions.get("window").height) * 0.02
  },
  rowDesignationTxt: {
    color: "#b7b7b7",
    fontSize: moderateScale(12),
    fontFamily: font_type.FontLight
  },
  main: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: "#e6e6e6",
    flexDirection: 'column',
    paddingBottom: (Dimensions.get("window").height * 0.030),
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
  card_bg_image: {
    width: (Dimensions.get("window").width * 0.445),
    height: (Dimensions.get("window").height * 0.24),
    borderRadius: 5
  },
  card_content: {
    flexDirection: 'column',
    width: (Dimensions.get("window").width * 0.445),
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
      width: (Dimensions.get("window").width * 0.445),
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
      width: (Dimensions.get("window").width) * 0.10,
      height: (Dimensions.get("window").width) * 0.10,
      borderRadius: (Dimensions.get("window").width) * 0.05,
      alignSelf: 'flex-start',
  },
  name_time_bg: {
      flexDirection: 'column',
      marginLeft: 10,
      justifyContent: 'center'
  },
  name_txt: {
    color: "#363636",
    width: (Dimensions.get("window").width) * 0.28,
    fontSize: moderateScale(14),
    textAlign: 'left'
  },
  time_txt: {
    color: "#b7b7b7",
    fontSize: moderateScale(13),
    textAlign: 'left'
  }
});
// END TO MAKE STYLE
