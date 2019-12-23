import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform,Dimensions,TouchableOpacity, StyleSheet,ListView, ScrollView, I18nManager} from 'react-native';
import { Container, Button, Icon, Right,Header, Left, Body, Title, Content} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
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

export default class Social12 extends Component {

  constructor(props) {
 		super(props);
    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged})

    const dataObjects = [
      {
        id: 1,
        name: 'Lorem Ipsum',
        profile: GlobalInclude.Image3,
        uploadImage: GlobalInclude.Image8,
        comment: 'Lorem Ipsum is not simply random text.',
        location: 'Lorem Ipsum',
        time: '1 mins',
      },
      {
        id: 2,
        name: 'Lorem Ipsum',
        profile:GlobalInclude.Image8,
        uploadImage: GlobalInclude.Image9,
        comment: 'Lorem Ipsum is not simply random text.',
        location: 'Lorem Ipsum',
        time: '2 mins',
      },
      {
        id: 3,
        name: 'Lorem Ipsum',
        profile:GlobalInclude.Image1,
        uploadImage:GlobalInclude.Image2,
        comment: 'Lorem Ipsum is not simply random text.',
        location: 'Lorem Ipsum',
        time: '3 mins',
      },
      {
        id: 4,
        name: 'Lorem Ipsum',
        profile: GlobalInclude.Image3,
        uploadImage: GlobalInclude.Image9,
        comment: 'Lorem Ipsum is not simply random text.',
        location: 'Lorem Ipsum',
        time: '4 mins',
      },
    ]

 		this.state = {
      dataSource: ds.cloneWithRows(dataObjects),
    };
 	}

  //BEGIN TO SETUP RENDERROW
  _renderRow (rowData) {
    return (
      <View style={styles.row_main}>
       {/* BEGIN TO SETUP IMAGE VIEW */}
        <Image source={rowData.uploadImage} style={styles.row_image}/>
        <View style={styles.row_con_title}>
         {/* BEGIN TO SETUP COMMENT VIEW */}
          <Text numberOfLines={2} style={styles.row_title}>{rowData.comment}</Text>
         {/* END TO SETUP COMMENT VIEW */}

         {/* BEGIN TO SETUP LOCATION VIEW */}
          <View style={styles.row_location}>
            <TouchableOpacity>
              <Entypo name="location-pin" size={16} color="#d4d4d4" />
            </TouchableOpacity>
            <Text numberOfLines={1} style={styles.location_text}>{rowData.location}</Text>
          </View>
        {/* END TO SETUP LOCATION VIEW */}
        </View>
        <View style={styles.rowdevider}/>
        <View style={styles.row_profile}>
        {/* BEGIN TO SETUP PROFILE IMAGE VIEW */}
          <Image source={rowData.profile} style={styles.row_pro_image}/>
        {/* END TO SETUP PROFILE IMAGE VIEW */}
        {/* BEGIN TO SETUP NAME AND TIME VIEW */}
          <View style={styles.sub_row}>
            <Text numberOfLines={1} style={styles.profile_name}>{rowData.name}</Text>
            <Text style={styles.time_text}>{rowData.time}</Text>
          </View>
        {/* END TO SETUP NAME AND TIME VIEW */}
        </View>
      </View>
    )
  }

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
             <TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
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
       </View>
       <Content style={styles.slidesec}>
        {/* BEGIN TO SETUP LIST VIEW */}
         <ListView
            contentContainerStyle={styles.list_content}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
            enableEmptySections
            pageSize={4}/>
        {/* END TO SETUP LIST VIEW */}
       </Content>
    </Container>

    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  main:{
  	backgroundColor: '#2d324f'
  },
  search_icon:{
  	 color: 'white',
  	 fontSize: moderateScale(22)
  },
  back_arrow:{
  	width: 30,
  	justifyContent: 'flex-start',
  	alignItems: 'flex-start',
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
  name: {
  	color: '#363636',
  	fontSize: moderateScale(16),
  	marginRight: (Dimensions.get("window").width*0.015)
  },
  list_content: {
  	flexDirection: 'row',
  	flexWrap: 'wrap',
  	alignItems:'flex-start',
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
  row_con_title: {
  	margin: (Dimensions.get("window").width * 0.03),
  	justifyContent: 'space-between'
  },
  row_title: {
  	color: '#6f6f6f',
  	fontFamily: font_type.FontLight,
  	fontSize: moderateScale(15),
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
  	fontSize: moderateScale(12),
  },
  rowdevider: {
  	backgroundColor: '#f2f2f2',
  	width: (Dimensions.get("window").width * 0.445),
  	height: (Dimensions.get("window").height) * 0.001,
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
  	fontSize: moderateScale(15),
  },
  time_text: {
  	color: '#b7b7b7',
  	fontFamily: font_type.FontLight,
  	fontSize: moderateScale(12),
  	textAlign: 'left'
  },
  search_icon:{
  	marginRight: 10,
  	color: '#fff',
  	fontSize:24
  },
});
// END TO MAKE STYLE
