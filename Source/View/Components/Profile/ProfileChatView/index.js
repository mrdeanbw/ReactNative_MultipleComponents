
import React, { Component } from 'react';
import {StyleSheet,Text,View,Image,StatusBar,Platform,ImageBackground,Dimensions,TouchableOpacity,ListView,ScrollView,BackHandler,I18nManager,Alert} from 'react-native';
import {Container,Button,Icon,Right,Item,Input,Header,Footer,FooterTab,Left,Body,Title,Content,Form,Label} from 'native-base';
import {TabBar,SceneMap,TabView} from 'react-native-tab-view';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Zocial from 'react-native-vector-icons/Zocial';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Tablistview from './Tablistview.js'
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

// BEGIN TO SETUP INITIAL LAYOUT
const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};
// END TO SETUP INITIAL LAYOUT

// BEGIN TO SETUP TAB ROUTE
const Tab1Route = () => <View style={[ styles.container, { backgroundColor: 'transparent' } ]}><Tablistview/></View>;
const Tab2Route = () => <View style={[ styles.container, { backgroundColor: 'transparent' } ]}><Tablistview/></View>;
const Tab3Route = () => <View style={[ styles.container, { backgroundColor: 'transparent' } ]}><Tablistview/></View>;
const Tab4Route = () => <View style={[ styles.container, { backgroundColor: 'transparent' } ]}><Tablistview/></View>;
// END TO SETUP TAB ROUTE

export default class ProfileChatScreen extends Component {

  constructor(props) {
 		super(props);

    // BEGIN TO SETUP STATE
 		this.state = {
      isFollow: true,
      index: 0,
      routes: [
        {id:0, key: 'test1', title: 'Tab 1'},
        {id:1, key: 'test2', title: 'Tab 2'},
        {id:2, key: 'test3', title: 'Tab 3'},
        {id:3, key: 'test4', title: 'Tab 4'},
      ],
    };
    // END TO SETUP STATE
 	}

  // BEGIN TO RENDER TAB LABEL
  _renderLabel = ({route}) => {
    return(
      <View>
        <Text style={(route.id == this.state.index)?styles.active_label:styles.normal_label}>{route.title}</Text>
      </View>
    )
  }
  // END TO RENDER TAB LABEL

  // BEGIN TO HANDLE TAB INDEX CHNAGE
  _handleIndexChange = index => this.setState({ index });
  // END TO HANDLE TAB INDEX CHNAGE

  // BEGIN TO RENDER TAB HEADER
  _renderHeader = props => <TabBar
                            {...props}
                            renderLabel={this._renderLabel}
                            indicatorStyle={{backgroundColor: "transparent"}}
                            style={styles.tab_bar_view} />;
  // END TO RENDER TAB HEADER

  // BEGIN TO RENDER TAB SCENE
  _renderScene = SceneMap({
    test1: Tab1Route,
    test2: Tab2Route,
    test3: Tab3Route,
    test4: Tab4Route,
  });
  // END TO RENDER TAB SCENE

  render(){

    // BEGIN TO SETUP STATUSBAR VIEW
		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('transparent',true);
			StatusBar.setTranslucent(true);
		}
    // END TO SETUP STATUSBAR VIEW


    return(
     <Container>
     <ScrollView>
       <View>
         {/* BEGIN TO SETUP IMAGE AS A BACKGROUND */}
         <ImageBackground source={GlobalInclude.Image7} style={styles.header_image_bg}>

               {/* BEGIN TO SETUP HEADER VIEW */}
               <Header style={styles.header}>

                   {/* BEGIN TO SETUP HEADER LEFT VIEW */}
                   <Left style={styles.left}>
                     <TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
                       <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={25} color='white'/>
                     </TouchableOpacity>
                   </Left>
                   {/* END TO SETUP HEADER LEFT VIEW */}

                   {/* BEGIN TO SETUP HEADER BODY VIEW */}
                   <Body style={styles.body}>
                     <Text style={styles.text_title}>Profile</Text>
                   </Body>
                   {/* END TO SETUP HEADER BODY VIEW */}

                   {/* BEGIN TO SETUP HEADER RIGHT VIEW */}
                   <Right style={styles.right}>
                     <TouchableOpacity onPress={()=>alert("Setting button clicked.")}>
                       <Image source={require('./setting_icon.png')} style={styles.setting_icon}/>
                     </TouchableOpacity>
                   </Right>
                   {/* END TO SETUP HEADER RIGHT VIEW */}

               </Header>
               {/* END TO SETUP HEADER VIEW */}

         </ImageBackground>
         {/* END TO SETUP IMAGE AS A BACKGROUND */}

         {/* BEGIN TO START PROFILE CONTENT VIEW */}
         <View style={styles.profile_content} >
               <View style={{flexDirection:'row'}}>
                   {/* BEGIN TO DISPLAY PROFILE IMAGE */}
                   <Image source={GlobalInclude.Image10} style={styles.profile_image}/>
                   {/* END TO DISPLAY PROFILE IMAGE */}

                   {/* BEGIN TO DISPLAY PROFILE NAME AND POST */}
                   <View style={styles.profile_info}>
                     <Text style={styles.name}>Lorem Ipsum</Text>
                     <Text style={styles.post}>Lorem Ipsum</Text>
                   </View>
                   {/* END TO DISPLAY PROFILE NAME AND POST */}
               </View>

               <View style={styles.social_icons}>
                   {/* BEGIN TO DISPLAY MESSAGE ICON */}
                   <TouchableOpacity onPress={()=> alert("Message button clicked.")} style={styles.normal_button}>
                       <FontAwesome name="comment-o" size={16} color='#0691ce' style={{transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]}}/>
                   </TouchableOpacity>
                   {/* END TO DISPLAY MESSAGE ICON */}

                   {/* BEGIN TO DISPLAY USER-FOLLOW ICON */}
                   <TouchableOpacity onPress={()=>this.setState({isFollow: !this.state.isFollow})} style={(this.state.isFollow) ? styles.active_button : styles.normal_button}>
                      <SimpleLineIcons name="user-follow" size={15} color={(this.state.isFollow)?'white':'#0691ce'} style={{transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]}}/>
                   </TouchableOpacity>
                   {/* END TO DISPLAY USER-FOLLOW ICON */}
               </View>
          </View>
          {/* END TO START PROFILE CONTENT VIEW */}

           {/* BEGIN TO START PROFILE CONTENT VIEW */}
           <View style={styles.about_profile}>
                   {/* BEGIN TO DISPLAY USER LOCATION VIEW */}
                   <View style={{flexDirection: 'row'}}>
                     <Entypo name="location-pin" size={18} color='#0691ce'/>
                     <Text style={styles.about_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                   </View>
                   {/* END TO DISPLAY USER LOCATION VIEW */}

                   {/* BEGIN TO DISPLAY USER EMAIL VIEW */}
                   <View style={styles.mail_container}>
                     <Zocial name="email" size={14} color='#0691ce' />
                     <Text style={styles.about_text}>lorem_ipsum@gmail.com</Text>
                   </View>
                   {/* END TO DISPLAY USER EMAIL VIEW */}

                   <View style={styles.separator_style} />
                   {/* BEGIN TO DISPLAY USER STATUS VIEW */}
                   <View>
                     <Text style={styles.status}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</Text>
                   </View>
                   {/* END TO DISPLAY USER STATUS VIEW */}
           </View>
           {/* END TO START PROFILE CONTENT VIEW */}

           {/* BEGIN TO SETUP FOLLOWS, FOLLOWING, LIKES VIEW */}
           <View style={styles.profile_detail_main}>
                   <View style={styles.follow_container}>
                    {/* BEGIN TO SETUP FOLLOWERS VIEW */}
                     <View style={styles.follow_sec}>
                       <Text style={styles.follow_count}>1111</Text>
                       <Text style={styles.follow_text}>Followers</Text>
                     </View>
                     {/* END TO SETUP FOLLOWERS VIEW */}

                     {/* BEGIN TO SETUP FOLLOWING VIEW */}
                     <View style={styles.vertical_separator} />
                     <View style={styles.follow_sec}>
                       <Text style={styles.follow_count}>2222</Text>
                       <Text style={styles.follow_text}>Following</Text>
                     </View>
                     {/* END TO SETUP FOLLOWING VIEW */}

                     {/* BEGIN TO SETUP LIKES VIEW */}
                     <View style={styles.vertical_separator} />
                     <View style={styles.follow_sec}>
                       <Text style={styles.follow_count}>3333</Text>
                       <Text style={styles.follow_text}>Likes</Text>
                     </View>
                     {/* END TO SETUP LIKES VIEW */}
                   </View>
         </View>
         {/* END TO SETUP FOLLOWS, FOLLOWING, LIKES VIEW */}
       </View>
       {/* END TO START PROFILE CONTENT VIEW */}

           {/* BEGIN TO DISPLAY TAB VIEW CONTENT */}
           <TabView
             style={styles.container}
             navigationState={this.state}
             renderScene={this._renderScene}
             renderHeader={this._renderHeader}
             onIndexChange={this._handleIndexChange}
             initialLayout={initialLayout}/>
            {/* END TO DISPLAY TAB VIEW CONTENT */}
         </ScrollView>
    </Container>

    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  header: {
		backgroundColor: 'rgba(0,0,0,0)',
		height: Dimensions.get('window').height * 0.1,
		borderBottomWidth: 0,
		paddingTop: (Dimensions.get('window').height * 0.03),
		elevation: 0,
		paddingLeft: (Dimensions.get('window').width * 0.05),
		paddingRight: (Dimensions.get('window').width * 0.05),
	},
	left: {
		flex: 0.5,
		backgroundColor: 'rgba(0,0,0,0)'
	},
	back_arrow: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
	body: {
		flex: 3,
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0)'
	},
	text_title: {
		color: 'white',
		fontSize: moderateScale(17),
		marginTop: (Dimensions.get('window').height * 0.001),
		alignSelf: 'center',
		fontFamily: font_type.FontBold,
	},
	right: {
		flex: 0.5
	},
  container: {
  	height: (Dimensions.get('window').height) * 0.38,
  },

  setting_icon: {
  	height:(Dimensions.get('window').height*0.028),
  	width:(Dimensions.get('window').height*0.028),
  	resizeMode: 'contain'
  },
  header_image_bg: {
  	height:(Dimensions.get('window').height*0.265),
  	width:(Dimensions.get('window').width),
  	backgroundColor: 'gray'
  },
  profile_content: {
  	width:(Dimensions.get('window').width),
  	height:(Dimensions.get('window').height * 0.13),
  	paddingHorizontal: (Dimensions.get('window').width * 0.06),
  	marginTop: (Dimensions.get('window').height * 0.19),
  	flexDirection: 'row',
  	alignSelf: 'flex-start',
  	justifyContent: 'space-between',
  	position: 'absolute',
  },
  profile_image: {
  	width:(Dimensions.get('window').height * 0.13),
  	height:(Dimensions.get('window').height * 0.13),
  	borderWidth: 2.5,
  	borderColor: 'white',
  	backgroundColor: 'gray',
  	resizeMode: 'cover',
  	alignSelf: 'center'
  },
  profile_detail_main: {
  	width:(Dimensions.get('window').width),
  	borderTopWidth: 0.5,
  	borderBottomWidth: 0.5,
  	borderColor: '#d7d7d7',
  	alignItems: 'center',
  	justifyContent: 'center'
  },
  name: {
  	color: 'white',
  	fontFamily: font_type.FontBold,
  	fontSize: moderateScale(18)
  },
  post: {
  	color: '#abaab2',
  	fontFamily: font_type.FontLight,
  	fontSize: moderateScale(12),
  	textAlign: 'left'
  },
  separator_style: {
  	height: 0.5,
  	marginVertical: (Dimensions.get('window').height * 0.015),
  	backgroundColor: '#d7d7d7'
  },
  follow_container: {
  	flexDirection: 'row',
  	alignItems: 'center',
  	justifyContent: 'center',
  	paddingVertical: (Dimensions.get('window').height * 0.015)
  },

  follow_sec: {
  	flex:1,
  	alignItems: 'center',
  	justifyContent: 'center'
  },
  follow_count: {
  	fontFamily: font_type.FontBold,
  	fontSize: moderateScale(16),
  	color: '#363636'
  },
  follow_text: {
  	fontFamily: font_type.FontLight,
  	fontSize: moderateScale(12),
  	color: '#959595'
  },
  vertical_separator: {
  	height: (Dimensions.get('window').height*0.025),
  	width: 0.5,
  	backgroundColor: '#d7d7d7'
  },
  active_label: {
  	color: '#0691ce',
  	fontFamily: font_type.FontLight,
  	fontSize: moderateScale(15)
  },
  normal_label: {
  	color: '#b7b7b7',
  	fontFamily: font_type.FontLight,
  	fontSize: moderateScale(15)
  },
  normal_button: {
  	height:(Dimensions.get('window').height * 0.04),
  	width:(Dimensions.get('window').height * 0.04),
  	borderRadius: 3,
  	borderWidth: 1,
  	borderColor: '#0691ce',
  	alignItems: 'center',
  	justifyContent: 'center'
  },
  active_button: {
  	height:(Dimensions.get('window').height * 0.04),
  	width:(Dimensions.get('window').height * 0.04),
  	borderRadius: 3,
  	backgroundColor: '#0691ce',
  	alignItems: 'center',
  	justifyContent: 'center'
  },
  about_profile: {
  	marginTop: (Dimensions.get('window').height * 0.065),
  	paddingHorizontal: (Dimensions.get('window').width * 0.06),
  	paddingVertical: (Dimensions.get('window').width * 0.05),
  	justifyContent: 'space-around',
  	backgroundColor: 'rgba(0,0,0,0)'
  },
  mail_container: {
  	flexDirection: 'row',
  	paddingTop:(Dimensions.get('window').height * 0.01)
  },
  about_text: {
  	color:'#959595',
  	fontFamily: font_type.FontLight,
  	fontSize: moderateScale(12),
  	width:(Dimensions.get('window').width * 0.5),
  	marginLeft:(Dimensions.get('window').width * 0.03),
  },
  profile_info: {
  	marginLeft:(Dimensions.get('window').height * 0.025),
  	backgroundColor: 'rgba(0,0,0,0)'
  },
  social_icons: {
  	width: (Dimensions.get('window').width * 0.165),
  	justifyContent: 'space-between',
  	alignItems: 'flex-end',
  	flexDirection: 'row',
  },
  status: {
  	color:'#959595',
  	fontFamily: font_type.FontLight,
  	fontSize: moderateScale(12),
  	textAlign: 'left'
  },
  tab_bar_view:{
  	backgroundColor: "transparent",
  	paddingVertical:(Dimensions.get('window').height*0.012)
  }
});
// END TO MAKE STYLE
