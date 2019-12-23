import React, { Component } from 'react';
import { Text, Image, StatusBar,StyleSheet, Platform, ImageBackground, Dimensions, TouchableOpacity , ListView, BackHandler, I18nManager} from 'react-native';
import { Container, Button, Content, Header, Body, Title, Right, Left, Icon } from 'native-base';
import { View} from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";
import ScrollableTabView, { ScrollableTabBar, } from '../../../ThirdPartyModule/react-native-scrollable-tab-view';

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


export default class Social05 extends Component {

    constructor(props) {
   		super(props);

      //BEGIN TO SETUP DATA
      const dataObjects = [
        {
          id: 1,
          name: 'Lorem Ipsum',
          comment: 'Lorem ipsum dolor sit amet, conses adipisi, sed do eiusmod tempor ince idunt ut labore et dolore.',
          likes: 1,
          comments: 5,
          image: GlobalInclude.Image1,
        },
        {
          id: 2,
          name: 'Lorem Ipsum',
          comment: 'Lorem ipsum dolor sit amet, conses adipisi, sed do eiusmod tempor ince idunt ut labore et dolore.',
          likes: 2,
          comments: 6,
          image: GlobalInclude.Image2,
        },
        {
          id: 3,
          name: 'Lorem Ipsum',
          comment: 'Lorem ipsum dolor sit amet, conses adipisi, sed do eiusmod tempor ince idunt ut labore et dolore.',
          likes: 3,
          comments: 7,
          image: GlobalInclude.Image3,
        },
        {
          id: 4,
          name: 'Lorem Ipsum',
          comment: 'Lorem ipsum dolor sit amet, conses adipisi, sed do eiusmod tempor ince idunt ut labore et dolore.',
          likes: 4,
          comments: 8,
          image:GlobalInclude.Image4,
        },
        {
          id: 5,
          name: 'Lorem Ipsum',
          comment: 'Lorem ipsum dolor sit amet, conses adipisi, sed do eiusmod tempor ince idunt ut labore et dolore.',
          likes: 5,
          comments: 9,
          image: GlobalInclude.Image5,
        },
      ]
      //END TO SETUP DATA

      //BEGIN TO SETUP LISTVIEW ROWDATA
      const rowHasChanged = (r1, r2) => r1 !== r2
      const ds = new ListView.DataSource({rowHasChanged})
   		this.state = {
  			isLoading: true,
        dataSource: ds.cloneWithRows(dataObjects),
      };
      //END TO SETUP LISTVIEW ROWDATA
   	}

    //BEGIN TO SETUP RENDERROW
    _renderRow(rowData) {
      return(
        <View>
        <View style={styles.row_main}>
        {/* BEGIN TO SETUP IMAGE VIEW */}
          <Image source={rowData.image} style={styles.images}/>
        {/* END TO SETUP IMAGE VIEW */}
          <View style={styles.news_content}>
          {/* BEGIN TO SETUP NAME AND COMMENT VIEW */}
            <Text numberOfLines={1} style={styles.name}>{rowData.name}</Text>
            <Text numberOfLines={3} style={styles.comment}>{rowData.comment}</Text>
          {/* END TO SETUP NAME AND COMMENT VIEW */}
            <View style={styles.follow_content}>
            {/* BEGIN TO SETUP LIKE VIEW */}
              <View style={styles.like_content}>
                <TouchableOpacity onPress={()=>alert("Like Button Click")}>
                  <FontAwesome name="heart" size={15} color="#d4d4d4" />
                </TouchableOpacity>
                <Text style={styles.text_style}>{rowData.likes}</Text>
              </View>
            {/* END TO SETUP LIKE VIEW */}

            {/* BEGIN TO SETUP COMMENT VIEW */}
              <View style={styles.like_content}>
                <TouchableOpacity onPress={()=>alert("Comment Button Click")}>
                  <Image style={styles.like_comment_share_image} source={require('./ic_comments.png')}/>
                </TouchableOpacity>
                <Text style={styles.text_style}>{rowData.comments}</Text>
              </View>
            {/* END TO SETUP COMMENT VIEW */}
            </View>
          </View>
        </View>
        <View style={styles.separator_style}/>
        </View>
      )
    }
    //END TO SETUP RENDERROW

  render(){
    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW

    return(
      <Container style={styles.main}>
      {/* BEGIN TO SETUP HEADER VIEW */}
        <Header style={styles.header}>
        {/* BEGIN TO SETUP LEFT VIEW */}
          <Left style={styles.left}>
            <TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
            {
              (I18nManager.isRTL)
              ? <MaterialIcons name="chevron-right" size={25} color='white'/>
              :<MaterialIcons name="chevron-left" size={25} color='white'/>
            }
            </TouchableOpacity>
          </Left>
        {/* END TO SETUP LEFT VIEW */}

        {/* BEGIN TO SETUP BODY VIEW */}
          <Body style={styles.body}>
            <Text style={styles.header_title}>News</Text>
          </Body>
        {/* END TO SETUP BODY VIEW */}

        {/* BEGIN TO SETUP RIGHT VIEW */}
          <Right style={styles.right}>
            <TouchableOpacity onPress={()=>alert("Search Button Click")}>
              <Ionicons name="ios-search" size={25} color='white'/>
            </TouchableOpacity>
          </Right>
        {/* END TO SETUP RIGHT VIEW */}
        </Header>
      {/* END TO SETUP HEADER VIEW */}

      {/* BEGIN TO SETUP SCROLLABLETABVIEW VIEW */}
        <ScrollableTabView
          initialPage={0}
          tabBarUnderlineStyle={styles.tab_under_line}
          tabBarBackgroundColor={'#ff6347'}
          tabBarActiveTextColor={'white'}
          tabBarInactiveTextColor={'rgba(255,255,255,0.9)'}
          tabBartext_style={styles.tab_text}
          renderTabBar={() => <ScrollableTabBar />} >
          {/* BEGIN TO SETUP TAB 1 VIEW */}
            <View tabLabel='Tab 1'>
              <ListView
                 contentContainerStyle={styles.listContent}
                 dataSource={this.state.dataSource}
                 renderRow={this._renderRow.bind(this)}
                 renderSeparator={this._renderSeparator}
                 enableEmptySections
                 pageSize={4}/>
            </View>
          {/* END TO SETUP TAB 1 VIEW */}

          {/* BEGIN TO SETUP TAB 2 VIEW */}
            <View tabLabel='Tab 2'>
              <ListView
                 contentContainerStyle={styles.listContent}
                 dataSource={this.state.dataSource}
                 renderRow={this._renderRow.bind(this)}
                 renderSeparator={this._renderSeparator}
                 enableEmptySections
                 pageSize={4}/>
            </View>
          {/* END TO SETUP TAB 2 VIEW */}

          {/* BEGIN TO SETUP TAB 3 VIEW */}
            <View tabLabel='Tab 3'>
              <ListView
                 contentContainerStyle={styles.listContent}
                 dataSource={this.state.dataSource}
                 renderRow={this._renderRow.bind(this)}
                 renderSeparator={this._renderSeparator}
                 enableEmptySections
                 pageSize={4}/>
            </View>
          {/* END TO SETUP TAB 3 VIEW */}

          {/* BEGIN TO SETUP TAB 4 VIEW */}
            <View tabLabel='Tab 4'>
              <ListView
                 contentContainerStyle={styles.listContent}
                 dataSource={this.state.dataSource}
                 renderRow={this._renderRow.bind(this)}
                 renderSeparator={this._renderSeparator}
                 enableEmptySections
                 pageSize={4}/>
            </View>
          {/* END TO SETUP TAB 4 VIEW */}

          {/* BEGIN TO SETUP TAB 5 VIEW */}
            <View tabLabel='Tab 5'>
              <ListView
                 contentContainerStyle={styles.listContent}
                 dataSource={this.state.dataSource}
                 renderRow={this._renderRow.bind(this)}
                 renderSeparator={this._renderSeparator}
                 enableEmptySections
                 pageSize={4}/>
            </View>
          {/* END TO SETUP TAB 5 VIEW */}
        </ScrollableTabView>
      {/* END TO SETUP SCROLLABLETABVIEW VIEW */}
      </Container>
    )
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  container: {
      flex: 1,
    },
  main: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: "#F2F2F2",
    flexDirection: 'column'
  },
  back_arrow: {
    width: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  header: {
    backgroundColor: '#ff6347',
    height: Dimensions.get("window").height * 0.1,
    borderBottomWidth: 0,
    paddingTop: (Dimensions.get("window").height * 0.03),
    elevation: 0,
    paddingLeft: (Dimensions.get("window").width * 0.05),
    paddingRight: (Dimensions.get("window").width * 0.05),
  },
  left: {
    flex: 0.5,
    paddingTop: (Platform.OS === 'ios')? 0 : 0,
  },
  body: {
    flex: 3,
    alignItems: 'center',
  },
  right: {
    flex: 0.5,
    paddingTop: (Platform.OS === 'ios')? 0 : 0,
  },
  header_title: {
    color: 'white',
    fontFamily: font_type.FontBold,
    paddingTop: (Platform.OS === 'ios')? 0 : 0,
    fontSize : moderateScale(17),
    letterSpacing:0.7
  },
  row_main:{
    margin:(Dimensions.get("window").width * 0.035),
    flexDirection: 'row'
  },
  images: {
    height: (Dimensions.get("window").height*0.15),
    width: (Dimensions.get("window").width*0.30),
    resizeMode: 'cover',
    marginTop: (Dimensions.get("window").height) * 0.007
  },
  news_content: {
    width: (Dimensions.get("window").width * 0.6),
    marginLeft: (Dimensions.get("window").width*0.05),
  },
  name: {
    fontFamily: font_type.FontBold,
    fontSize: moderateScale(17),
    color:'#363636',
    textAlign: 'left'
  },
  comment: {
    fontFamily: font_type.FontLight,
    fontSize: moderateScale(13),
    color: '#6f6f6f',
    marginTop: (Dimensions.get("window").height*0.005),
    textAlign: 'left'
  },
  follow_content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: (Dimensions.get("window").height*0.015)
  },
  like_content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: (Dimensions.get("window").width*0.1)
  },
  text_style: {
    fontFamily: font_type.FontLight,
    fontSize: moderateScale(13),
    color: '#6f6f6f',
    marginLeft: (Dimensions.get("window").width) * 0.020,
    textAlign: 'center'
  },
  separator_style: {
    height: (Dimensions.get("window").height * 0.001),
    backgroundColor: '#d7d7d7',
    marginLeft:(Dimensions.get("window").width * 0.035),
  },
  search_icon:{
    color: 'white',
    fontSize: moderateScale(24)
  },
  tab_under_line:{
    backgroundColor: 'white'
  },
  tab_under_linetrans:{
    backgroundColor: 'transparent'
  },
  tab_text:{
    fontSize: moderateScale(14),
  },
  like_comment_share_image: {
    width: (Dimensions.get("window").width) * 0.05,
    height: (Dimensions.get("window").height) * 0.02,
    resizeMode: 'contain'
  },
  search_icon:{
    marginRight: 10,
    color: '#fff',
    fontSize:24
  },
});
// END TO MAKE STYLE
