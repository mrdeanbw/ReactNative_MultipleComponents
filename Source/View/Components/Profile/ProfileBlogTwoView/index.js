import React, { Component } from "react";
import {Text,Image,StatusBar,Platform,ImageBackground,Dimensions,TouchableOpacity,View,ListView,BackHandler,I18nManager,StyleSheet,Alert} from "react-native";
import {Container,Button,Right,Left,Content,Body,Header,Title} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";

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


export default class ProfileBlogTwo extends Component {

  constructor(props) {
    super(props);

    // BEGIN TO SETUP PROFILE IMAGES ARRAY
    const profileImages = [
      {
        id: 1,
        profileImage: GlobalInclude.Image1
      },
      {
        id: 2,
        profileImage: GlobalInclude.Image5
      },
      {
        id: 3,
        profileImage: GlobalInclude.Image2
      }
    ];
    // END TO SETUP PROFILE IMAGES ARRAY

    // BEGIN TO SETUP PROFILE DETAILS ARRAY
    const profileDetails = [
      {
        id: 1,
        profileImage: GlobalInclude.Image1,
        name: "Lorem Ipsum 1",
        status: " followed you",
        isTimeStatusOn: "true",
        timeStatus: "15min ago",
        description: ""
      },
      {
        id: 2,
        profileImage: GlobalInclude.Image9,
        name: "Lorem Ipsum 2",
        status: " commented your post",
        isTimeStatusOn: "false",
        timeStatus: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        id: 3,
        profileImage: GlobalInclude.Image8,
        name: "Lorem Ipsum 3",
        status: " followed you",
        isTimeStatusOn: "true",
        timeStatus: "1h ago",
        description: ""
      },
      {
        id: 4,
        profileImage: GlobalInclude.Image7,
        name: "Lorem Ipsum 4",
        status: " commented your post",
        isTimeStatusOn: "false",
        timeStatus: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper non quam sed scelerisque."
      },
      {
        id: 5,
        profileImage: GlobalInclude.Image5,
        name: "Lorem Ipsum 4",
        status: " started following you",
        isTimeStatusOn: "true",
        timeStatus: "5h ago",
        description: ""
      }
    ];
    // END TO SETUP PROFILE DETAILS ARRAY

    // BEGIN TO SETUP LISTVIEW ACCORDING TO OUR DATA
    const rowHasChanged = (r1, r2) => r1 !== r2;
    const ds = new ListView.DataSource({ rowHasChanged });
    // END TO SETUP LISTVIEW ACCORDING TO OUR DATA

    // BEGIN TO SETUP STATE
    this.state = {
      isLoading: true,
      profileSource: ds.cloneWithRows(profileImages),
      profileDetailsSource: ds.cloneWithRows(profileDetails)
    };
    // END TO SETUP STATE
  }

  // BEGIN TO RENDER PROFILE IMAGE ROW
  _renderProfileImageRow(rowData) {
    return (
      <View>
        {/* BEGIN TO DISLAY PROFILE IMAGE */}
        <Image
          style={
            rowData.id == "1"
              ? styles.suggested_people_img
              : styles.suggested_people_imgOther
          }
          source={rowData.profileImage}
        />
        {/* END TO DISLAY PROFILE IMAGE */}
      </View>
    );
  }
  // END TO RENDER PROFILE IMAGE ROW

  // BEGIN TO RENDER PROFILE DETAIL ROW
  _renderProfileDetailRow(rowData) {
    return (
      <View style={styles.main_view_row}>
            {/* BEGIN TO DISLAY PROFILE IMAGE */}
            <Image source={rowData.profileImage} style={styles.main_img_row} />
            {/* END TO DISLAY PROFILE IMAGE */}

            <View style={styles.row}>
                  {/* BEGIN TO DISLAY USER NAME AND STATUS VIEW */}
                  <View style={styles.details}>
                    <Text style={styles.name}>{rowData.name}</Text>
                    <Text style={styles.status}>{rowData.status}</Text>
                  </View>
                  {/* END TO DISLAY USER NAME AND STATUS VIEW */}

                  {/* BEGIN TO DISLAY USER TIME AND DESCRIPTION VIEW */}
                  {rowData.isTimeStatusOn == "true" ? (
                    <View style={styles.details}>
                      <Ionicons name="md-time" size={15} color="#b7b7b7" />
                      <Text style={styles.time}>{rowData.timeStatus}</Text>
                    </View>
                  ) : (
                    <Text style={styles.desc_row}>{rowData.description}</Text>
                  )}
                  {/* END TO DISLAY USER TIME AND DESCRIPTION VIEW */}
            </View>
      </View>
    );
  }
  // END TO RENDER PROFILE DETAIL ROW

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
        {/* BEGIN TO SETUP IMAGE AS A BACKGROUND */}
        <Image source={GlobalInclude.Image6} style={styles.img_container} />
        {/* END TO SETUP IMAGE AS A BACKGROUND */}

        {/* BEGIN TO SETUP HEADER VIEW */}
        <Header androidStatusBarColor={"transparent"} style={styles.header}>

              {/* BEGIN TO SETUP HEADER LEFT VIEW */}
              <Left style={styles.left}>
                <TouchableOpacity style={styles.back_arrow} onPress={() => this.props.navigation.goBack()}>
                  <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="white" />
                </TouchableOpacity>
              </Left>
              {/* END TO SETUP HEADER LEFT VIEW */}

              {/* BEGIN TO SETUP HEADER BODY VIEW */}
              <Body style={styles.body}>
                <Title style={styles.title}>Profile</Title>
              </Body>
              {/* END TO SETUP HEADER BODY VIEW */}

              {/* BEGIN TO SETUP HEADER RIGHT VIEW */}
              <Right style={styles.left}>
                <Button transparent />
              </Right>
              {/* END TO SETUP HEADER RIGHT VIEW */}

        </Header>
        {/* END TO SETUP HEADER VIEW */}

        <Content>
          <View style={styles.profile_data_bg}>
            {/* BEGIN TO DISPLAY PROFILE IMAGE VIEW */}
            <Image source={GlobalInclude.Image1} style={styles.profile_img} />
            {/* END TO DISPLAY PROFILE IMAGE VIEW */}

            <View style={styles.main_view}>
              <View style={styles.personal_info_bg}>
                    {/* BEGIN TO DISPLAY USER NAME AND DESIGNATION VIEW */}
                    <Text style={styles.name_txt}>Lorem Ipsum</Text>
                    <Text style={styles.designation_txt}>Lorem Ipsum</Text>
                    {/* END TO DISPLAY USER NAME AND DESIGNATION VIEW */}

                    {/* BEGIN TO DISPLAY USER FOLLOW BUTTON VIEW */}
                    <TouchableOpacity style={styles.follow_bg} onPress={() => alert("FOLLOW button clicked.")} >
                      <Text style={styles.follow_txt}>FOLLOW</Text>
                    </TouchableOpacity>
                    {/* END TO DISPLAY USER FOLLOW BUTTON VIEW */}

                    <View style={styles.divider_horizontal} />
                    {/* BEGIN TO SETUP FOLLOWS, FOLLOWING, LIKES VIEW */}
                    <View style={styles.count_bg}>
                            {/* BEGIN TO SETUP FOLLOWERS VIEW */}
                            <View style={styles.title_count_bg}>
                              <Text style={styles.count_txt}>1111</Text>
                              <Text style={styles.title_txt}>Followers</Text>
                            </View>
                            {/* END TO SETUP FOLLOWERS VIEW */}

                            {/* BEGIN TO SETUP FOLLOWING VIEW */}
                            <View style={styles.title_count_bg}>
                              <Text style={styles.count_txt}>2222</Text>
                              <Text style={styles.title_txt}>Following</Text>
                            </View>
                            {/* END TO SETUP FOLLOWING VIEW */}

                            {/* BEGIN TO SETUP LIKES VIEW */}
                            <View style={styles.title_count_bg}>
                              <Text style={styles.count_txt}>3333</Text>
                              <Text style={styles.title_txt}>Likes</Text>
                            </View>
                            {/* END TO SETUP LIKES VIEW */}
                    </View>
                    {/* END TO SETUP FOLLOWS, FOLLOWING, LIKES VIEW */}
                    <View style={styles.divider_horizontal} />
                    {/* BEGIN TO DISPLAY DESCRIPTION VIEW */}
                    <Text style={styles.desc_txt}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                      semper non quam sed scelerisque.
                    </Text>
                    {/* END TO DISPLAY DESCRIPTION VIEW */}
              </View>
            </View>

            {/* BEGIN TO DISPLAY SUGGESTED PEOPLE VIEW */}
            <View style={styles.suggested_people_bg}>
                  {/* BEGIN TO DISPLAY SUGGESTED PEOPLE HEADING VIEW */}
                  <View style={styles.suggest_connection_bg}>
                    <Text style={styles.suggest_connection_txt}>
                      Suggest people
                    </Text>
                    <Text style={styles.people_txt}>People that you may know</Text>
                  </View>
                  {/* END TO DISPLAY SUGGESTED PEOPLE HEADING VIEW */}

                  {/* BEGIN TO DISPLAY SUGGESTED PEOPLE PROFILE IMAGE VIEW */}
                  <View>
                    <ListView
                      horizontal={true}
                      dataSource={this.state.profileSource}
                      renderRow={this._renderProfileImageRow.bind(this)}
                      showsHorizontalScrollIndicator={false}
                    />
                  </View>
                  {/* END TO DISPLAY SUGGESTED PEOPLE PROFILE IMAGE VIEW */}
            </View>
            {/* END TO DISPLAY SUGGESTED PEOPLE VIEW */}

            {/* BEGIN TO DISPLAY PROFILE DETAIL VIEW */}
            <View style={styles.detail_profile_bg}>
                <ListView
                  dataSource={this.state.profileDetailsSource}
                  renderRow={this._renderProfileDetailRow.bind(this)}
                  scrollEnabled={false}
                />
            </View>
            {/* END TO DISPLAY PROFILE DETAIL VIEW */}
          </View>
        </Content>
      </Container>
    );
  }
}


// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  img_container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    bottom: 0
  },
  main_view_row:{
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center'
  },
  main_img_row:{
    width: (Dimensions.get('window').width) * 0.12,
    height: (Dimensions.get('window').width) * 0.12,
    borderRadius: (Dimensions.get('window').width) * 0.06
  },
  back_arrow: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  row:{
    marginLeft: 15,
    flexDirection: 'column'
  },
  details:{
    flexDirection:'row',
    alignItems:'center'
  },
  name:{
    color: "#363636",
    fontSize: moderateScale(15)
  },
  status:{
    color: "#b7b7b7",
    fontSize: moderateScale(12),
    alignSelf: 'flex-end'
  },
  left:{
    flex:1
  },
  body:{
    flex:2, alignItems:'center'
  },
  title:{
    marginTop: 2,
    color: 'white',
    fontSize: moderateScale(18),
    fontFamily: font_type.FontBold
  },
  time:{
    color: "#b7b7b7",
    fontSize: moderateScale(13),
    marginLeft: 2
  },
  desc_row:{
    color: "#6f6f6f",
    fontSize: moderateScale(15),
    marginTop: 3,
    textAlign: 'left'
  },
  main_view:{
    borderRadius: 10,
    backgroundColor:'#FFFFFF',
    top:50,
    marginBottom: 10
  },
  main: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: "transparent",
    flexDirection: 'column'
  },
  header: {
    backgroundColor: 'transparent',
    height: 65,
    width: Dimensions.get('window').width,
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
  profile_img: {
    width: (Dimensions.get('window').width) * 0.26,
    height: (Dimensions.get('window').width) * 0.26,
    borderRadius: (Dimensions.get('window').width) * 0.13,
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 10
  },
  profile_data_bg: {
    width: (Dimensions.get('window').width) * 0.94,
    alignSelf: 'center',
    flexDirection: 'column',
    marginTop: (Dimensions.get('window').height) * 0.03
  },
  personal_info_bg: {
      flexDirection: 'column',
      marginTop: (Dimensions.get('window').height) * 0.08,
  },
  name_txt: {
    color: "#363636",
    fontFamily: font_type.FontBold,
    fontSize: moderateScale(20),
    alignSelf: 'center'
  },
  designation_txt: {
    color: "#b7b7b7",
    fontSize: moderateScale(12),
    fontFamily: font_type.FontLight,
    marginTop: 3,
    alignSelf: 'center'
  },
  follow_bg: {
    borderColor: "#ff6347",
    borderRadius: 20,
    backgroundColor: "#ff6347",
    borderWidth: 1,
    width: (Dimensions.get('window').width) * 0.40,
    height: (Dimensions.get('window').height) * 0.06,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: (Dimensions.get('window').height) * 0.02,
    marginBottom: (Dimensions.get('window').height) * 0.02,
  },
  follow_txt: {
    fontFamily: font_type.FontBold,
    fontSize: moderateScale(18),
    color: "#ffffff",
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: 'transparent',
    width: (Dimensions.get('window').width) * 0.28,
  },
  divider_horizontal: {
    backgroundColor: "#ebebeb",
    height: 1,
    width: (Dimensions.get('window').width) * 0.94,
    alignSelf: 'center'
  },
  count_bg: {
    flexDirection: 'row',
    marginLeft: (Dimensions.get('window').width) * 0.02,
    marginRight: (Dimensions.get('window').width) * 0.02,
    marginTop: (Dimensions.get('window').width) * 0.04,
    marginBottom: (Dimensions.get('window').width) * 0.04,
  },
  title_count_bg: {
    flexDirection: 'column',
    width: (Dimensions.get('window').width) * 0.30,
  },
  count_txt: {
    color: "#363636",
    fontSize: moderateScale(16),
    fontFamily: font_type.FontBold,
    textAlign: 'center'
  },
  title_txt: {
    color: "#959595",
    fontSize: moderateScale(12),
    fontFamily: font_type.FontLight,
    textAlign: 'center'
  },
  desc_txt: {
    color: "#6f6f6f",
    fontSize: moderateScale(15),
    fontFamily: font_type.FontLight,
    marginLeft: (Dimensions.get('window').width) * 0.02,
    marginRight: (Dimensions.get('window').width) * 0.02,
    textAlign: 'center',
    marginTop: (Dimensions.get('window').width) * 0.03,
    marginBottom: (Dimensions.get('window').width) * 0.03,
  },
  suggested_people_bg: {
    flexDirection: 'row',
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: (Dimensions.get('window').width) * 0.03,
    marginTop: 50,
    marginBottom: 10,
    justifyContent: 'space-between'
  },
  suggest_connection_bg: {
    flexDirection: 'column',
  },
  suggest_connection_txt: {
    color: "#6f6f6f",
    fontSize: moderateScale(15),
    fontFamily: font_type.FontBold,
    textAlign: 'left'
  },
  people_txt: {
    color: "#b7b7b7",
    fontSize: moderateScale(15),
    fontFamily: font_type.FontLight,
    marginTop: 5
  },
  suggested_people_img: {
    width: (Dimensions.get('window').width * 0.12),
    height: (Dimensions.get('window').width * 0.12),
    borderRadius: (Dimensions.get('window').width * 0.06),
    borderWidth: 1,
    borderColor: "#FFFFFF",
    resizeMode: 'cover',
  },
  detail_profile_bg: {
    flexDirection: 'row',
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: (Dimensions.get('window').width) * 0.03,
    marginBottom: 10
  },
  suggested_people_imgOther: {
    width: (Dimensions.get('window').width * 0.12),
    height: (Dimensions.get('window').width * 0.12),
    borderRadius: (Dimensions.get('window').width * 0.06),
    borderWidth: 1,
    borderColor: "#FFFFFF",
    resizeMode: 'cover',
    marginLeft: -10
  },
});
// END TO MAKE STYLE
