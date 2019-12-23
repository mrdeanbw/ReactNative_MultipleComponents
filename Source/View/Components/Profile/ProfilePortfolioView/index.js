import React, { Component } from 'react';
import {Text,View,Image,StatusBar,Platform,ImageBackground,Dimensions,TouchableOpacity,ListView,ScrollView,Alert,I18nManager,StyleSheet} from 'react-native';
import {Container,Button,Icon,Right,Item,Input,Header,Footer,FooterTab,Left,Body,Title,Content,Form,Label} from 'native-base';
import {TabBar, SceneMap } from 'react-native-tab-view';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import ScrollableTabView, {ScrollableTabBar} from "../../../ThirdPartyModule/react-native-scrollable-tab-view";
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

// BEGIN TO SETUP INITIAL LAYOUT
const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};
// END TO SETUP INITIAL LAYOUT

export default class ProfilePortfolio extends Component {

  constructor(props) {
    super(props);

    //BEGIN TO SETUP DATA
    const dataObjects = [
      {
        id: 1,
        cardBgImage: GlobalInclude.Image1,
        imageTitle: 'Lorem ipsum',
      },
      {
        id: 2,
        cardBgImage: GlobalInclude.Image2,
        imageTitle: 'Lorem ipsum',
      },
      {
        id: 3,
        cardBgImage: GlobalInclude.Image3,
        imageTitle: 'Lorem ipsum',
      },
      {
        id: 4,
        cardBgImage: GlobalInclude.Image4,
        imageTitle: 'Lorem ipsum',
      },
    ]
    //END TO SETUP DATA

    //BEGIN TO SETUP LISTDATA ROW
    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged})

    this.state = {
      isLoading: true,
      dataSource: ds.cloneWithRows(dataObjects),
    };
  }
    //END TO SETUP LISTDATA ROW

  //BEGIN TO SETUP LISTVIEW ROW
  _renderRow(rowData) {
    return(
      <View style={styles.row_main}>
        <Image style={styles.card_image} source={rowData.cardBgImage}/>
        <Text style={styles.image_text}>{rowData.imageTitle}</Text>
      </View>
    )
  }
  //END TO SETUP LISTVIEW ROW

  //BEGIN TO SETUP LISTVIEW LABEL
  _renderLabel = ({route}) => {
    return(
      <View>
        <Text style={(route.id == this.state.index)?styles.active_label:styles.normal_label}>{route.title}</Text>
      </View>
    )
  }
  //END TO SETUP LISTVIEW LABEL

  _getLabelText = ({ route }) => route.title;


  //BEGIN TO SETUP TAB HEADERVIEW
  _renderHeader = props => <TabBar
                            {...props}
                            renderLabel={this._renderLabel}
                            indicatorStyle={{backgroundColor: "transparent"}}
                            style={styles.tab_view} />;
  //END TO SETUP TAB HEADERVIEW



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
       <View>
        {/* BEGIN TO SETUP IMAGEBACKGROUND VIEW */}
         <ImageBackground source={GlobalInclude.Image3} style={styles.header_image_bg}>
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
                 <Text style={styles.text_title}>Profiles</Text>
            </Body>
        {/* END TO SETUP BODY VIEW */}

        {/* BEGIN TO SETUP RIGHT VIEW */}
            <Right style={styles.right}>
                 <TouchableOpacity onPress={()=>alert("Setting Button Click")}>
                   <Image source={require('./setting_icon.png')} style={styles.setting_icon}/>
                 </TouchableOpacity>
            </Right>
        {/* END TO SETUP RIGHT VIEW */}
           </Header>
        {/* END TO SETUP HEADER VIEW */}

        {/* BEGIN TO SETUP CAMERAICON VIEW */}
           <TouchableOpacity style={styles.choose_image} onPress={()=>alert("Choose image Click")}>
             <SimpleLineIcons name="camera" size={20} color='white' />
           </TouchableOpacity>
        {/* END TO SETUP CAMERAICON VIEW */}
          </ImageBackground>
        {/* END TO SETUP IMAGEBACKGROUND VIEW */}

        {/* BEGIN TO SETUP PROFILEIMAGE AND CAMERA VIEW */}
           <View style={styles.profile_content} >
             <Image source={GlobalInclude.Image1} style={styles.profile_image}/>
             <TouchableOpacity style={styles.change_image} onPress={()=>alert("Change image Click")}>
               <SimpleLineIcons name="camera" color='white' style={{backgroundColor: 'rgba(0,0,0,0)', fontSize: moderateScale(16)}} />
             </TouchableOpacity>
           </View>
        {/* END TO SETUP PROFILEIMAGE AND CAMERA VIEW */}

         <View style={styles.profile_detail_main}>
        {/* BEGIN TO SETUP NAME AND POST VIEW */}
           <Text style={styles.name}>Lorem ipsum</Text>
           <Text style={styles.post}>Lorem ipsum</Text>
        {/* END TO SETUP NAME AND POST VIEW */}

        {/* BEGIN TO SETUP FOLLOW AND MESSAGE VIEW */}
           <View style={styles.social_buttons}>
             <TouchableOpacity style={(this.state.isFollow) ? styles.active_button : styles.normal_button} onPress={()=>this.setState({isFollow: !this.state.isFollow})}>
               <Text style={(this.state.isFollow) ? styles.active_button_txt : styles.normal_button_txt}>{(this.state.isFollow) ? 'FOLLOWING' : 'FOLLOW'}</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.normal_button} onPress={()=>alert("Create Message Click")}>
               <Text style={styles.normal_button_txt}>MESSAGE</Text>
             </TouchableOpacity>
           </View>
        {/* END TO SETUP FOLLOW AND MESSAGE VIEW */}

           <View style={styles.separator_style}/>

        {/* BEGIN TO SETUP FOLLOW AND FOLLOWING AND LIKES VIEW */}
           <View style={styles.follow_container}>
           {/* BEGIN TO SETUP FOLLOW VIEW */}
             <View style={styles.follow_sec}>
               <Text style={styles.follow_count}>1111</Text>
               <Text style={styles.follow_text}>Followers</Text>
             </View>
            {/* END TO SETUP FOLLOW VIEW */}

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
               </View>
              {/* END TO SETUP LIKES VIEW */}

            <View style={styles.separator_style}/>
           </View>
          {/* END TO SETUP FOLLOW AND FOLLOWING AND LIKES VIEW */}
         </View>

         {/* BEGIN TO SETUP SCROLLTAB VIEW */}
           <ScrollableTabView
             initialPage={0}
             tabBarUnderlineStyle={{backgroundColor: 'transparent'}}
             tabBarBackgroundColor={'transparent'}
             tabBarActiveTextColor={'#0691ce'}
             tabBarInactiveTextColor={'#b7b7b7'}
             tabBarTextStyle={styles.tabText}
             renderTabBar={() => <ScrollableTabBar
                                   style={{shadowColor: '#000',
                                   shadowOffset: { width: 0, height: 0 },
                                   shadowOpacity: 0,
                                   shadowRadius: 0,
                                   elevation: 0,
                                   borderWidth: 0,
                                   borderColor: 'transparent'}}/>}>
          {/* BEGIN TO SETUP PHOTOS TAB */}
              <View tabLabel='Photos'>
                 <ListView
                    horizontal={true}
                    contentContainerStyle={styles.list_Content}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                    renderSeparator={this._renderSeparator}
                    enableEmptySections
                    pageSize={4}/>
               </View>
          {/* END TO SETUP PHOTOS TAB */}

          {/* BEGIN TO SETUP VIDEOS TAB */}
               <View tabLabel='Videos'>
                 <ListView
                    horizontal={true}
                    contentContainerStyle={styles.list_Content}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                    renderSeparator={this._renderSeparator}
                    enableEmptySections
                    pageSize={4}/>
               </View>
          {/* END TO SETUP VIDEOS TAB */}

          {/* BEGIN TO SETUP EVENTS TAB */}
               <View tabLabel='Events'>
                 <ListView
                    horizontal={true}
                    contentContainerStyle={styles.list_Content}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                    renderSeparator={this._renderSeparator}
                    enableEmptySections
                    pageSize={4}/>
               </View>
          {/* END TO SETUP EVENTS TAB */}

          {/* BEGIN TO SETUP BOOKS TAB */}
               <View tabLabel='Books'>
                 <ListView
                    horizontal={true}
                    contentContainerStyle={styles.list_Content}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                    renderSeparator={this._renderSeparator}
                    enableEmptySections
                    pageSize={4}/>
               </View>
          {/* END TO SETUP BOOKS TAB */}
           </ScrollableTabView>
      {/* END TO SETUP SCROLLTAB VIEW */}
        </Container>

    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
	header: {
		backgroundColor: 'rgba(0,0,0,0)',
		height: Dimensions.get("window").height * 0.1,
		borderBottomWidth: 0,
		paddingTop: (Dimensions.get("window").height * 0.03),
		elevation: 0,
		paddingLeft: (Dimensions.get("window").width * 0.05),
		paddingRight: (Dimensions.get("window").width * 0.05),
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
	text_title: {
		color: 'white',
		fontSize: moderateScale(17),
		marginTop: (Dimensions.get("window").height * 0.001),
		alignSelf: 'center',
		fontFamily: font_type.FontBold,
	},
	right: {
		flex: 0.5
	},
  container: {
	   flex: 1,
  },
  setting_icon: {
  	height:(Dimensions.get("window").height*0.028),
  	width:(Dimensions.get("window").height*0.028),
  	resizeMode: 'contain'
  },
  header_image_bg: {
  	height:(Dimensions.get("window").height*0.255),
  	width:(Dimensions.get("window").width),
  	backgroundColor: 'gray'
  },
  choose_image: {
  	width:(Dimensions.get("window").width*0.125),
  	height:(Dimensions.get("window").height*0.06),
  	backgroundColor: 'rgba(0,0,0,0)',
  	bottom:0,
  	position: 'absolute',
  	alignSelf: 'flex-end',
  	alignItems: 'center',
  	justifyContent: 'center'
  },
  change_image: {
  	width:(Dimensions.get("window").height*0.045),
  	height:(Dimensions.get("window").height*0.045),
  	borderRadius:(Dimensions.get("window").height*0.0225),
  	borderWidth: 1.5,
  	borderColor: 'white',
  	backgroundColor: '#0691ce',
  	right:(Dimensions.get("window").width*0.025),
  	bottom:(Dimensions.get("window").height*0.012),
  	position: 'absolute',
  	alignItems: 'center',
  	justifyContent: 'center'
  },
  profile_content: {
  	width:(Dimensions.get("window").width * 0.35),
  	height:(Dimensions.get("window").height * 0.17),
  	flexDirection: 'row',
  	alignItems: 'center',
  	justifyContent: 'center',
  	alignSelf: 'center',
  	marginTop: (Dimensions.get("window").height * 0.17),
  	position: 'absolute'
  },
  profile_image: {
  	width:(Dimensions.get("window").height * 0.165),
  	height:(Dimensions.get("window").height * 0.165),
  	borderRadius:(Dimensions.get("window").height*0.0825),
  	borderWidth: 2.5,
  	borderColor: 'white',
  	resizeMode: 'cover',
  	alignSelf: 'center'
  },
  profile_detail_main: {
  	width:(Dimensions.get("window").width),
  	marginTop:(Dimensions.get("window").height * 0.1),
  	alignItems: 'center',
  	justifyContent: 'center'
  },
  name: {
  	color:'#6f6f6f',
  	fontFamily: font_type.FontBold,
  	fontSize: moderateScale(18)
  },
  post: {
  	color:'#b7b7b7',
  	fontFamily: font_type.FontLight,
  	fontSize: moderateScale(12),
  	marginTop:(Platform.OS == 'ios')?(Dimensions.get("window").height * 0.005) :0,
  },
  social_buttons: {
  	flexDirection: 'row',
  	marginVertical:(Dimensions.get("window").height * 0.042),
  },
  active_button: {
  	height:(Dimensions.get("window").height * 0.042),
  	width:(Dimensions.get("window").width * 0.275),
  	borderRadius:(Dimensions.get("window").height * 0.02),
  	marginHorizontal:(Dimensions.get("window").width * 0.015),
  	backgroundColor: '#ff6347',
  	alignItems: 'center',
  	justifyContent: 'center',
  	overflow: 'hidden'
  },
  normal_button: {
  	height:(Dimensions.get("window").height * 0.042),
  	width:(Dimensions.get("window").width * 0.275),
  	borderRadius:(Dimensions.get("window").height * 0.02),
  	marginHorizontal:(Dimensions.get("window").width * 0.015),
  	borderWidth: 1,
  	borderColor: '#ff6347',
  	alignItems: 'center',
  	justifyContent: 'center',
  	overflow: 'hidden'
  },
  active_button_txt: {
  	fontFamily: font_type.FontLight,
  	fontSize: moderateScale(12),
  	color: 'white',
  },
  normal_button_txt: {
  	fontFamily: font_type.FontLight,
  	fontSize: moderateScale(12),
  	color: '#ff6347',
  },
  separator_style: {
  	height: (Dimensions.get("window").height) * 0.001,
  	width:(Dimensions.get("window").width),
  	backgroundColor: '#d7d7d7'
  },
  follow_container: {
  	flexDirection: 'row',
  	alignItems: 'center',
  	justifyContent: 'center',
  	paddingVertical: (Dimensions.get("window").height * 0.015)
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
  	height: (Dimensions.get("window").height*0.025),
  	width: (Dimensions.get("window").width) * 0.003,
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
  tab_view:{
  	backgroundColor: "transparent",
  	paddingVertical:(Dimensions.get("window").height) * 0.012
  },
  list_Content: {
  	marginHorizontal:(Dimensions.get("window").width * 0.015),
  	flexDirection: 'row',
  	flexWrap: 'wrap',
  	alignItems:'flex-start',
  },
  row_main:{
  	marginHorizontal:(Dimensions.get("window").width * 0.015),
  },
  card_image: {
  	height:(Dimensions.get("window").height*0.27),
  	width:(Dimensions.get("window").height*0.21),
  	borderRadius: 3
  },
  image_text: {
  	margin:(Dimensions.get("window").height*0.012),
  	color: 'white',
  	fontSize: moderateScale(12),
  	fontFamily: font_type.FontLight,
  	bottom:0,
  	position: 'absolute',
  }
});
// END TO MAKE STYLE
