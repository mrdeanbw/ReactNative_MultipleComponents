import React, { Component } from "react";
import {AsyncStorage,Image,StatusBar,View,TouchableOpacity,Alert,Platform,TextInput,StyleSheet,Dimensions,I18nManager} from "react-native";
import {Text,Container,List,Content} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
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



export default class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      langId: 1,
      activeMenu: "SignUp",
      dataOnlineUser: [
        {
          id: 1,
          profileImg: GlobalInclude.Image4,
          name: "Lorem Ipsum",
          status: "online"
        },
        {
          id: 2,
          profileImg: GlobalInclude.Image5,
          name: "Lorem Ipsum",
          status: "mobile"
        },
        {
          id: 3,
          profileImg:  GlobalInclude.Image1,
          name: "Lorem Ipsum",
          status: "online"
        },
        {
          id: 4,
          profileImg:  GlobalInclude.Image3,
          name: "Lorem Ipsum",
          status: "online"
        },
        {
          id: 5,
          profileImg: GlobalInclude.Image5,
          name: "Lorem Ipsum",
          status: "mobile"
        },
        {
          id: 6,
          profileImg:  GlobalInclude.Image8,
          name: "Lorem Ipsum",
          status: "online"
        }
      ],
      dataRecentUser: [
        {
          id: 1,
          profileImg:  GlobalInclude.Image1,
          name: "Lorem Ipsum",
          time: "50 mins"
        },
        {
          id: 2,
          profileImg: GlobalInclude.Image9,
          name: "Lorem Ipsum",
          time: "24 mins"
        },
        {
          id: 3,
          profileImg:  GlobalInclude.Image5,
          name: "Lorem Ipsum",
          time: "25 mins"
        }
      ]
    };
  }

  componentWillMount() {
    AsyncStorage.multiGet([
      "langId",
      "siteLink",
      "siteText",
      "copyrighttext",
      "levelTitle"
    ]).then(data => {
      this.setState({
        langId: data[0][1],
        siteLink: data[1][1],
        siteText: data[2][1],
        copyrighttext: data[3][1],
        levelTitle: data[4][1]
      });
    });
  }


  render() {
    const { activeMenuImage } = this.state;
    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW

    return (
      <Container>
        <View style={styles.container}>
          <View style={styles.header_bg}>
          {/* BEGIN TO SETUP SEARCH VIEW */}
            <View style={styles.search_bar_bg}>
              <Ionicons name="ios-search" size={18} color="#868588" />
              <TextInput
                style={styles.search_input}
                placeholder="Search"
                placeholderTextColor="#6d6d71"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="default"
                selectionColor="#6d6d71"/>
            </View>
          {/* END TO SETUP SEARCH VIEW */}
            <View style={styles.header_divider} />

          {/* BEGIN TO SETUP ONLINEUSERS VIEW */}
            <View style={styles.header_title_bg}>
              <Text style={styles.header_title_txt}>ONLINE USERS</Text>
              <TouchableOpacity onPress={() => alert("EDIT CLICK")}>
                <Text style={styles.header_title_txt}>EDIT</Text>
              </TouchableOpacity>
            </View>
          {/* END TO SETUP ONLINEUSERS VIEW */}
          </View>
          {/* BEGIN TO SETUP TIME VIEW */}

          {/* BEGIN TO SETUP ONLINEUSER AND RECENTLYUSER VIEW */}
            <Content>
              {this.state.dataOnlineUser.map((item, index) => {
                return (
                  <View key={index} style={styles.list_bg}>
                    <View style={styles.menu_list_item}>
                    {/* BEGIN TO SETUP PROFILEIMAGE AND NAME VIEW */}
                      <View style={styles.name_profile_bg}>
                        <Image style={styles.profile_img} source={item.profileImg}/>
                        <TouchableOpacity onPress={() => alert(item.name)}>
                          <Text style={styles.name_txt}>{item.name}</Text>
                        </TouchableOpacity>
                      </View>
                    {/* END TO SETUP PROFILEIMAGE AND NAME VIEW */}

                    {/* BEGIN TO SETUP ONLINE VIEW */}
                      {item.status == "online" ? (
                        <View style={styles.online_status_icon} />
                      ) : (
                        <FontAwesome name="mobile" size={22} color="#737179" />
                      )}
                    {/* END TO SETUP ONLINE VIEW */}
                    </View>
                    <View style={index === this.state.dataOnlineUser.length - 1 ? null : styles.list_divider}/>
                  </View>
                );
              })}
              {/* BEGIN TO SETUP RECENTLY VIEW */}
                <View style={styles.recent_user_bg}>
                  <Text style={styles.recently_txt}>RECENTLY</Text>
                </View>
              {/* END TO SETUP RECENTLY VIEW */}


              {this.state.dataRecentUser.map((item, index) => {
                return (
                  <View key={index} style={styles.list_recent_bg}>
                    <View style={styles.menu_list_item}>
                    {/* BEGIN TO SETUP PROFILEIMAGE AND NAME VIEW */}
                      <View style={styles.name_profile_bg}>
                        <Image style={styles.profileImg} source={item.profileImg}/>
                        <TouchableOpacity onPress={() => alert(item.name)}>
                          <Text style={styles.name_txt}>{item.name}</Text>
                        </TouchableOpacity>
                      </View>
                    {/* END TO SETUP PROFILEIMAGE AND NAME VIEW */}

                    {/* BEGIN TO SETUP TIME VIEW */}
                      <Text style={styles.time_txt}>{item.time}</Text>
                    {/* END TO SETUP TIME VIEW */}
                    </View>
                    <View style={index === this.state.dataRecentUser.length - 1? null : styles.list_divider}/>
                  </View>
                );
              })}
              </Content>
         {/* END TO SETUP ONLINEUSER AND RECENTLYUSER VIEW */}
          </View>
        </Container>
    );
  }
}
// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  container: {
    height: (Dimensions.get("window").height),
    backgroundColor: "#36343f"
  },
  list_divider: {
    marginLeft: (Dimensions.get("window").width* 0.03),
    height: 0.8,
    backgroundColor: "#29282e",
    marginTop: (Dimensions.get("window").height * 0.01),
    marginBottom: (Dimensions.get("window").height * 0.01)
  },
  header_bg: {
    marginBottom: (Dimensions.get("window").height * 0.02),
    backgroundColor: "#312f38",
    ...Platform.select({
      ios: {
        height: (Dimensions.get("window").height * 0.17),
      },
      android: {
        height: (Dimensions.get("window").height * 0.21),
			}
    }),

  },
  search_bar_bg: {
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: "#222127",
    marginLeft: (Dimensions.get("window").width* 0.04),
    marginRight: (Dimensions.get("window").width* 0.04),
    ...Platform.select({
      ios: {
        marginTop:(Dimensions.get("window").height * 0.05),
      },
      android: {
        marginTop:(Dimensions.get("window").height * 0.06),
			}
    }),
    paddingLeft: (Dimensions.get("window").width* 0.03),
    paddingRight: (Dimensions.get("window").width* 0.03),
    paddingTop: (Dimensions.get("window").width* 0.01),
    paddingBottom: (Dimensions.get("window").width* 0.01),
    alignItems: 'center'
  },
  header_divider: {
    height: 1,
    backgroundColor: "#29282e",
    marginTop: (Dimensions.get("window").height * 0.01)
  },
  header_title_bg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: (Dimensions.get("window").height * 0.03),
    marginLeft: (Dimensions.get("window").width* 0.04),
    marginRight: (Dimensions.get("window").width* 0.04)
  },
  header_title_txt: {
    color:"#6b6a70",
    fontSize: moderateScale(13),
    fontFamily: font_type.FontLight,
  },
  list_bg: {
    flexDirection: 'column',
  },
  menu_list_item: {
    flexDirection: 'row',
    marginLeft: (Dimensions.get("window").width* 0.04),
    marginRight: (Dimensions.get("window").width* 0.04),
    justifyContent: 'space-between',
    alignItems:'center'
  },
  name_profile_bg: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  name_txt: {
    color: "#fff",
    fontFamily: font_type.FontBold,
    fontSize: moderateScale(14),
    marginLeft: (Dimensions.get("window").width* 0.03)
  },
  online_status_icon: {
    width: (Dimensions.get("window").width* 0.022),
    height: (Dimensions.get("window").width* 0.022),
    borderRadius: (Dimensions.get("window").width* 0.011),
    backgroundColor:"#39b54a"
  },
  recent_user_bg: {
    backgroundColor: "#312f38",
    marginTop: (Dimensions.get("window").width* 0.03),
    marginBottom: (Dimensions.get("window").height * 0.012)
  },
  recently_txt: {
    color: "#6f6e74",
    fontSize: moderateScale(12),
    fontFamily: font_type.FontLight,
    paddingLeft: I18nManager.isRTL ? 0 : (Dimensions.get("window").width* 0.04),
    paddingRight: I18nManager.isRTL ? (Dimensions.get("window").width* 0.04) : 0,
    textAlign: 'left',
    ...Platform.select({
      ios: {
        paddingTop: (Dimensions.get("window").width* 0.04),
        paddingBottom: (Dimensions.get("window").width* 0.02),
      },
      android: {
        paddingTop: (Dimensions.get("window").width* 0.045),
        paddingBottom: (Dimensions.get("window").width* 0.02),
			}
    }),
  },
  list_recent_bg: {
    flexDirection: 'column',
    paddingBottom: (Dimensions.get("window").width* 0.02)
  },
  time_txt: {
    color: "#737179",
    fontSize: moderateScale(10),
    fontFamily: font_type.FontLight,
  },
  search_input: {
    color: "#6d6d71",
    fontSize: moderateScale(15),
    fontFamily: font_type.FontLight,
    width: (Dimensions.get("window").width* 0.6),
    marginLeft: (Dimensions.get("window").width* 0.02),
    textAlignVertical: 'top',
    ...Platform.select({
      ios: {
      },
      android: {
        paddingTop: 5,
        paddingBottom: 0
			}
    }),
  },
  profile_img: {
    width: (Dimensions.get("window").width* 0.1),
    height: (Dimensions.get("window").width* 0.1),
    resizeMode: 'contain'
  }

});
// END TO MAKE STYLE
