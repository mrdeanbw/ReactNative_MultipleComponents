import React, { Component } from 'react';
import {Text, View, Image, StatusBar, Platform,Dimensions,TouchableOpacity, ListView, ScrollView,I18nManager,StyleSheet} from 'react-native';
import {Container, Button, Icon, Right, Header, Left, Body, Title, Content} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
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

export default class Social11 extends Component {

  constructor(props) {
 		super(props);
    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged})

    //BEGIN TO SETUP DATA
    const dataObjects = [
      {
        id: 1,
        profile:GlobalInclude.Image1,
        uploadImage:GlobalInclude.Image2,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipisi, sed do',
        likes: 1,
        comments:1,
      },
      {
        id: 2,
        profile: GlobalInclude.Image3,
        uploadImage:GlobalInclude.Image4,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipisi, sed do',
        likes: 2,
        comments: 2,
      },
      {
        id: 3,
        profile:GlobalInclude.Image5,
        uploadImage:GlobalInclude.Image6,
        comment: 'Lorem ipsum dolor sit amet, consectetur ',
        likes: 3,
        comments: 3,
      },
      {
        id: 4,
        profile:GlobalInclude.Image7,
        uploadImage:GlobalInclude.Image8,
        comment: 'Lorem ipsum dolor sit amet, consectetur ',
        likes: 4,
        comments:4,
      },
    ]
    //END TO SETUP DATA

 		this.state = {
      dataSource: ds.cloneWithRows(dataObjects),
    };
 	}

  //BEGIN TO SETUP RENDERROW
  _renderRow (rowData) {
    return (
      <View style={styles.row_main}>
      {/* BEGIN TO SETUP UPLOADIMAGE VIEW */}
        <Image source={rowData.uploadImage} style={styles.row_image}/>
      {/* END TO SETUP UPLOADIMAGE VIEW */}

      {/* BEGIN TO SETUP PROFILEIMAGE VIEW */}
        <Image source={rowData.profile} style={styles.row_pro_image}/>
      {/* END TO SETUP PROFILEIMAGE VIEW */}

      {/* BEGIN TO SETUP COMMENT VIEW */}
        <View style={styles.rowConTitle}>
          <Text style={styles.row_title}>{rowData.comment}</Text>
        </View>
      {/* END TO SETUP COMMENT VIEW */}
        <View style={styles.rowdevider}/>
        <View style={styles.row_count}>
        {/* BEGIN TO SETUP LIKE VIEW */}
          <View style={styles.sub_row}>
            <TouchableOpacity onPress={()=>alert("Like Button Click")}>
              <FontAwesome name="heart" size={16} color="#d4d4d4" />
            </TouchableOpacity>
            <Text style={styles.count_size}>{rowData.likes}</Text>
          </View>
        {/* END TO SETUP LIKE VIEW */}
          <View style={styles.verticaldevider}/>

        {/* BEGIN TO SETUP COMMENT VIEW */}
          <View style={styles.sub_row}>
            <TouchableOpacity onPress={()=>alert("Comment Button Click")}>
              <Image style={styles.icon_size} source={require('./ic_comments.png')}/>
            </TouchableOpacity>
            <Text style={styles.count_size}>{rowData.comments}</Text>
          </View>
        {/* END TO SETUP COMMENT VIEW */}
        </View>
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
       <View style={styles.logosec}>
       {/* BEGIN TO SETUP HEADER VIEW */}
         <Header style={styles.header}>
         {/* BEGIN TO SETUP LEFT VIEW */}
           <Left style={styles.left}>
             <TouchableOpacity style={styles.back_arrow} onPress={()=> this.props.navigation.goBack()}>
             {
               (I18nManager.isRTL)
               ?
                   <Icon name="ios-arrow-forward" style={styles.search_icon}/>
               :
                   <Icon name="ios-arrow-back" style={styles.search_icon}/>
             }
             </TouchableOpacity>
           </Left>
         {/* END TO SETUP LEFT VIEW */}

         {/* BEGIN TO SETUP BODY VIEW */}
           <Body style={styles.body}>
             <Title style={styles.header_title}>Home</Title>
           </Body>
         {/* END TO SETUP BODY VIEW */}

         {/* BEGIN TO SETUP RIGHT VIEW */}
           <Right style={styles.right}>
             <TouchableOpacity onPress={()=>alert("Search Button Click")}>
               <Icon name="ios-search" style={styles.search_icon}/>
             </TouchableOpacity>
           </Right>
         {/* END TO SETUP RIGHT VIEW */}
         </Header>
        {/* END TO SETUP HEADER VIEW */}
       </View>
      {/* BEGIN TO SETUP LIST VIEW */}
       <Content style={styles.slidesec}>
         <ListView
            contentContainerStyle={styles.list_content}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
            enableEmptySections
            pageSize={4}/>
       </Content>
      {/* END TO SETUP LIST VIEW */}
    </Container>

    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  main:{
  	backgroundColor: '#2d324f'
  },
  back_arrow:{
  	width: 30,
  	justifyContent: 'flex-start',
  	alignItems: 'flex-start',
  },
  search_icon:{
  	color: 'white',
  	fontSize: moderateScale(22)
  },
  logosec:{
  	height: (Dimensions.get("window").height*0.095),
  	marginTop: (Platform.OS === 'ios')? 0 : (Dimensions.get("window").height*0.035),
  	alignItems: 'center',
  	justifyContent: 'center',
  	flexDirection: 'row'
  },
  slidesec:{
  	height: (Dimensions.get("window").height*0.905),
  	position: 'relative',
  	backgroundColor: 'white',
  },
  header: {
  	backgroundColor: '#ff6347',
  	height: (Dimensions.get("window").height) * 0.1,
  	width: Dimensions.get("window").width,
  	flexDirection: 'row',
  	borderBottomColor: '#2d324f',
  	...Platform.select({
  		ios: {
  			marginTop: (Dimensions.get("window").height) * 0.007,
  			paddingTop: 1,
  		},
  		android: {}
  	}),
  },
  left: {
    flex: 1,
    paddingTop: (Platform.OS === 'ios')? 15 : 0,
  },
  body: {
    flex: 2,
    alignItems: 'center',
  },
  right: {
    flex: 1,
    paddingTop: (Platform.OS === 'ios')? 15 : 0,
  },
  header_title: {
    color: 'white',
    fontFamily: font_type.FontBold,
    paddingTop: (Platform.OS === 'ios')? 15 : 0,
    fontSize : moderateScale(17),
    letterSpacing: 0.7
  },
  comments: {
  	color: '#6f6f6f',
  	fontSize: moderateScale(17),
  	marginVertical: (Dimensions.get("window").height*0.005)
  },
  list_content: {
  	flexDirection: 'row',
  	flexWrap: 'wrap',
  	alignItems:'center',
  	margin: (Dimensions.get("window").height * 0.01)
  },
  row_main:{
  	backgroundColor: 'white',
  	width: (Dimensions.get("window").width * 0.445),
  	margin:(Dimensions.get("window").width * 0.0165),
  	borderRadius:2,
  	alignItems:'flex-start',
  	alignContent:'flex-start',
  	elevation: 5,
  	shadowColor: 'black',
  	shadowOpacity: 0.2,
  	shadowRadius: 2,
  	shadowOffset: {
  		height: (Dimensions.get("window").height) * 0.002,
  		width: 0,
  	},
  },
  row_image: {
  	width: (Dimensions.get("window").width * 0.445),
  	height: (Dimensions.get("window").width * 0.445),
  	borderRadius: 2,
  	resizeMode: 'cover',
  },
  row_pro_image: {
  	width: (Dimensions.get("window").width * 0.08),
  	height: (Dimensions.get("window").width * 0.08),
  	borderRadius: (Dimensions.get("window").width * 0.04),
  	position: 'absolute',
  	resizeMode: 'cover',
  	marginLeft: (Dimensions.get("window").width * 0.03),
  	marginTop: (Dimensions.get("window").width * 0.4),
  	borderWidth: 1.5,
  	borderColor: 'white',
  	zIndex: 10,
  },
  row_title: {
  	color: '#6f6f6f',
  	fontFamily: font_type.FontLight,
  	fontSize: moderateScale(15),
  	marginTop: (Dimensions.get("window").height * 0.03),
  	marginHorizontal: (Dimensions.get("window").width * 0.03),
  	textAlign: 'left'
  },
  rowdevider: {
  	backgroundColor: '#f2f2f2',
  	width: (Dimensions.get("window").width * 0.445),
  	height: (Dimensions.get("window").height) * 0.001,
  	marginTop: (Dimensions.get("window").height * 0.02),
  },
  row_count: {
  	flexDirection: 'row',
  	marginVertical: (Dimensions.get("window").width * 0.03),
  },
  sub_row: {
  	flexDirection: 'row',
  	width: (Dimensions.get("window").width * 0.22),
  	alignItems: 'center',
  	justifyContent: 'center',
  },
  icon_size: {
  	width: (Dimensions.get("window").width * 0.04),
  	height: (Dimensions.get("window").width * 0.04),
  	marginRight: (Dimensions.get("window").width * 0.02),
  	resizeMode: 'contain',
  },
  count_size: {
  	color: '#6f6f6f',
  	fontFamily: font_type.FontLight,
  	fontSize: moderateScale(15),
  	marginLeft: (Dimensions.get("window").width) * 0.015
  },
  verticaldevider: {
  	backgroundColor: '#d4d4d4',
  	height: (Dimensions.get("window").height * 0.028),
  	width: (Dimensions.get("window").width) * 0.003,
  	alignSelf: 'center'
  },
  search_icon:{
  	marginRight: 10,
  	color: '#fff',
  	fontSize:24
  },
});
// END TO MAKE STYLE
