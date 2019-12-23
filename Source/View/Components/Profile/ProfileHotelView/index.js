import React, { Component } from 'react';
import {ScrollView,Platform,StatusBar,Text,View,Image,TouchableOpacity,ImageBackground,Dimensions,ListView,I18nManager,StyleSheet,Alert} from 'react-native';
import {Container,Button,Right,Left,Content,Body,Header,Icon,Title} from 'native-base';
import {TabViewAnimated,TabBar,SceneMap,TabView } from 'react-native-tab-view';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";
import TabList from './TabListview.js'

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

// BEGIN TO SETUP INITIAL LAYOUT
const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};
// END TO SETUP INITIAL LAYOUT

const Tab1Route = () => <View style={[ styles.container, { backgroundColor: '#71d4ff' } ]}></View>;
const Tab2Route = () => <View style={[ styles.container, { backgroundColor: '#D8D8D8' } ]}></View>;
const Tab3Route = () => <View style={[ styles.container, { backgroundColor: '#fb5f26' } ]}></View>;
const Tab4Route = () => <View style={[ styles.container, { backgroundColor: '#F7F7F7' } ]}></View>;

export default class ProfileHotelScreen extends Component {

    constructor(props) {
      super(props);
      // BEGIN TO SETUP STATE
      this.state = {
        index: 0,
        routes: [
          {id:0, key: 'tab1', title: 'TAB 1'},
          {id:1, key: 'tab2', title: 'TAB 2'},
          {id:2, key: 'tab3', title: 'TAB 3'},
          {id:3, key: 'tab4', title: 'TAB 4'},
        ],
      };
      // END TO SETUP STATE
    }

    //BEGIN SETUP TO TITLE VIEW
    _renderTitle = ({ route }) => {
      return(
        <View>
          <Text style={(route.id == this.state.index)?styles.active_label:styles.normal_label}>{route.title}</Text>
        </View>
      )
    }
    //END SETUP TO TITLE VIEW


    _handleIndexChange = index => this.setState({ index });


    //BEGIN SETUP TO HEADER VIEW
    _renderHeader = props => <TabBar
                              {...props}
                              renderLabel={this._renderTitle}
                              indicatorStyle={{backgroundColor: "transparent"}}
                              style={{backgroundColor: "#e6e6e6",elevation:0}} />;
    //END SETUP TO HEADER VIEW

    //BEGIN SETUP TO SCENCE VIEW
    _renderScene = SceneMap({
      tab1: Tab1Route,
      tab2: Tab2Route,
      tab3: Tab3Route,
      tab4: Tab4Route,
    });
    //END SETUP TO SCENCE VIEW


    render() {
      // BEGIN TO SETUP STATUSBAR VIEW
      StatusBar.setBarStyle('light-content', true);
      if(Platform.OS === 'android') {
        StatusBar.setBackgroundColor('transparent',true);
        StatusBar.setTranslucent(true);
      }
      // END TO SETUP STATUSBAR VIEW

      return (
          <View style={styles.main}>
            {/* BEGIN TO SETUP IMAGEBACKGROUND VIEW */}
            <ImageBackground style={styles.img_container} source={GlobalInclude.Image2}>
              <View style={styles.top_content}>
              {/* BEGIN TO SETUP HEADER VIEW */}
                  <Header androidStatusBarColor={"transparent"} style={styles.header}>
                {/* BEGIN TO SETUP LEFT VIEW */}
                  <Left style={styles.left}>
                    <TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
                      <Icon name={I18nManager.isRTL ? "ios-arrow-forward" : "ios-arrow-back"} style={styles.back_arrow2}/>
                    </TouchableOpacity>
                  </Left>
                {/* END TO SETUP LEFT VIEW */}

                {/* BEGIN TO SETUP BODY VIEW */}
                  <Body style={styles.body}>
                    <Title style={styles.header_txt}>Lorem Ipsum</Title>
                  </Body>
                {/* END TO SETUP BODY VIEW */}

                {/* BEGIN TO SETUP RIGHT VIEW */}
                  <Right style={styles.right}>
                    <Button transparent>
                    </Button>
                  </Right>
                {/* END TO SETUP RIGHT VIEW */}
                </Header>
              {/* END TO SETUP HEADER VIEW */}

              {/* BEGIN TO SETUP PROFILEIMAGE VIEW */}
                <View style={styles.shadowtwoprofile_img}>
                  <View style={styles.shadowoneprofile_img}>
                    <Image source={GlobalInclude.Image10} style={styles.profile_img}/>
                  </View>
                </View>
              {/* END TO SETUP PROFILEIMAGE VIEW */}

                <View style={styles.btn_sec}>
                {/* BEGIN TO SETUP ADDUSERBUTTON CLICK VIEW */}
                  <TouchableOpacity onPress={() => alert('Add User Button Click')} style={styles.adduser_bg}>
                    <Image source={require('./add_user_icon.png')} style={styles.usercomment_image}/>
                  </TouchableOpacity>
                {/* END TO SETUP ADDUSERBUTTON CLICK VIEW */}
                {/* BEGIN TO SETUP COMMENTBUTTON CLICK VIEW */}
                  <TouchableOpacity onPress={() => alert('Comment Button Click')} style={styles.comment_bg}>
                    <FontAwesome name="comment" size={20} color="white"/>
                  </TouchableOpacity>
                {/* END TO SETUP COMMENTBUTTON CLICK VIEW */}
                {/* BEGIN TO SETUP CALLBUTTON CLICK VIEW */}
                  <TouchableOpacity onPress={() => alert('Call Button Click')} style={styles.call_bg}>
                    <Ionicons name="ios-call" size={27} color="white"/>
                  </TouchableOpacity>
                {/* END TO SETUP CALLBUTTON CLICK VIEW */}
                </View>


                <View style={styles.follower_following_detailsbg}>
                {/* BEGIN TO SETUP FOLLOWERS AND DIVIDERLINE VIEW */}
                  <View style={styles.count_label_bg}>
                    <View style={styles.follower_followingbg}>
                      <Text style={styles.count_txt}>111</Text>
                      <Text style={styles.label_txt}>Followers</Text>
                    </View>
                    <View style={styles.divider}/>
                  </View>
                {/* END TO SETUP FOLLOWERS AND DIVIDERLINE VIEW */}

                {/* BEGIN TO SETUP FOLLOWEING AND DIVIDERLINE VIEW */}
                  <View style={styles.count_label_bg}>
                    <View style={styles.follower_followingbg}>
                      <Text style={styles.count_txt}>222</Text>
                      <Text style={styles.label_txt}>Following</Text>
                    </View>
                    <View style={styles.divider}/>
                  </View>
                {/* END TO SETUP FOLLOWEING AND DIVIDERLINE VIEW */}

                {/* BEGIN TO SETUP LIKES AND DIVIDERLINE VIEW */}
                  <View style={styles.like_bg}>
                    <Text style={styles.count_txt}>333</Text>
                    <Text style={styles.label_txt}>Likes</Text>
                  </View>
                </View>
                {/* END TO SETUP LIKES VIEW */}
                {/* BEGIN TO SETUP BOTTOM VIEW */}
                <View style={styles.image_bottombg}>
                </View>
                {/* END TO SETUP BOTTOM VIEW */}
              </View>

            </ImageBackground>
            {/* END TO SETUP IMAGEBACKGROUND VIEW */}

            {/* BEGIN TO SETUP TABANIMATED VIEW */}
            <View style={styles.bottom_content}>
            <TabView
              style={styles.container}
              navigationState={this.state}
              renderScene={this._renderScene}
              renderHeader={this._renderHeader}
              onIndexChange={this._handleIndexChange}
              initialLayout={initialLayout}/>
            </View>
            {/* END TO SETUP TABANIMATED VIEW */}
          </View>
      );
    }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  main: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  back_arrow: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  img_container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.6
  },
  top_content: {
    flexDirection: 'column',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.6,
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  bottom_content: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.4
  },
  header: {
    backgroundColor:'rgba(0,0,0,0)',
    height: Dimensions.get('window').height * 0.1,
    borderBottomWidth: 0,
    paddingTop: (Dimensions.get('window').height * 0.05),
    elevation: 0,
    paddingLeft: (Dimensions.get('window').width * 0.05),
    paddingRight: (Dimensions.get('window').width * 0.05),
  },
  left: {
    flex:1
  },
  body: {
    flex:2,
    alignItems:'center'
  },
  right: {
    flex: 1
  },
  back_arrow2: {
    color: 'white',
  },
  header_txt: {
    marginTop: 2,
    color: 'white',
    fontSize: moderateScale(18),
    fontFamily: font_type.FontBold,
  },
  profile_img: {
    width: (Dimensions.get('window').width) * 0.18,
    height: (Dimensions.get('window').width) * 0.18,
    borderRadius: (Dimensions.get('window').width) * 0.09,
    alignSelf: 'center',
  },
  shadowoneprofile_img: {
    width: (Dimensions.get('window').width) * 0.22,
    height: (Dimensions.get('window').width) * 0.22,
    borderRadius: (Dimensions.get('window').width) * 0.11,
    alignSelf: 'center',
    backgroundColor: "#FFFFFF08",
    justifyContent: 'center'
  },
  shadowtwoprofile_img: {
    width: (Dimensions.get('window').width) * 0.26,
    height: (Dimensions.get('window').width) * 0.26,
    borderRadius: (Dimensions.get('window').width) * 0.13,
    alignSelf: 'center',
    backgroundColor: "#FFFFFF15",
    justifyContent: 'center',
    marginTop: (Dimensions.get('window').width * 0.1)
  },
  btn_sec: {
    width: (Dimensions.get('window').width) * 0.42,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: (Dimensions.get('window').height) * 0.05,
    alignItems: 'center',
    justifyContent:'center'
  },
  adduser_bg: {
    backgroundColor: "#0691ce",
    width: (Dimensions.get('window').width) * 0.12,
    height: (Dimensions.get('window').width) * 0.12,
    borderRadius: (Dimensions.get('window').width) * 0.06,
    justifyContent: 'center',
    alignItems: 'center'
  },
  comment_bg: {
    backgroundColor: "#f7412d",
    width: (Dimensions.get('window').width) * 0.12,
    height: (Dimensions.get('window').width) * 0.12,
    marginLeft: (Dimensions.get('window').width) * 0.04,
    borderRadius: (Dimensions.get('window').width) * 0.06,
    justifyContent: 'center',
    alignItems: 'center'
  },
  call_bg: {
    backgroundColor: "#00c160",
    width: (Dimensions.get('window').width) * 0.12,
    height: (Dimensions.get('window').width) * 0.12,
    marginLeft: (Dimensions.get('window').width) * 0.04,
    borderRadius: (Dimensions.get('window').width) * 0.06,
    justifyContent: 'center',
    alignItems: 'center'
  },
  usercomment_image: {
    width: (Dimensions.get('window').width) * 0.06,
    height: (Dimensions.get('window').height) * 0.06,
    alignSelf: 'center',
    resizeMode: 'contain',
    transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]
  },
  follower_followingbg: {
    width: (Dimensions.get('window').width) * 0.26,
    flexDirection:'column'
  },
  like_bg: {
    flexDirection:'column',
    width: (Dimensions.get('window').width) * 0.27
  },
  divider: {
    width: 1,
    height: (Dimensions.get('window').height) * 0.04,
    backgroundColor: "#d7d7d7"
  },
  follower_following_detailsbg: {
    borderRadius: 5,
    backgroundColor: "#2d324f",
    width: (Dimensions.get('window').width) * 0.81,
    alignSelf: 'center',
    flexDirection: 'row',
    paddingTop: (Dimensions.get('window').height) * 0.015,
    paddingBottom: (Dimensions.get('window').height) * 0.015,
    position: 'absolute',
    bottom: 0,
    zIndex: 10
  },
  count_label_bg: {
    width: (Dimensions.get('window').width) * 0.27,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  label_txt: {
    color: 'white',
    fontFamily: font_type.FontLight,
    fontSize: moderateScale(12),
    alignSelf: 'center'
  },
  count_txt: {
    color: 'white',
    fontFamily:font_type.FontBold,
    fontSize: moderateScale(15),
    alignSelf: 'center'
  },
  container: {
      flex: 1
    },
  active_label: {
  	color: '#595959',
  	fontFamily: font_type.FontLight,
  	fontSize: moderateScale(15)
  },
  normal_label: {
  	color: '#c6c6c6',
  	fontFamily: font_type.FontLight,
  	fontSize: moderateScale(15)
  },
  image_bottombg: {
    backgroundColor: "#e6e6e6",
    position: 'absolute',
    bottom: 0,
    height: Dimensions.get('window').height * 0.05,
    width: (Dimensions.get('window').width)
  }
});
// END TO MAKE STYLE
