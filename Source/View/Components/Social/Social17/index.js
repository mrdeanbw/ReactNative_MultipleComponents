import React, { Component } from 'react';
import {Text,Image, StatusBar, Platform,Dimensions,TouchableOpacity,ListView, I18nManager,StyleSheet} from 'react-native';
import {Container, Button,Right,Left,Content,Body,Header,Icon} from 'native-base';
import {View} from 'react-native-animatable';
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


export default class Social17 extends Component {

  constructor(props) {
 		super(props);

    //BEGIN TO SETUP DATA STATE
    this.state = {
      data: [
        {
          id: 1,
          profileImage:GlobalInclude.Image1,
          name: 'Lorem Ipsum',
          post: 'Lorem Ipsum',
          isSelected: true
        },
        {
          id: 2,
          profileImage:GlobalInclude.Image2,
          name: 'Lorem Ipsum',
          post: 'Lorem Ipsum',
          isSelected: false
        },
        {
          id: 3,
          profileImage: GlobalInclude.Image3,
          name: 'Lorem Ipsum',
          post: 'Lorem Ipsum',
          isSelected: false
        },
        {
          id: 4,
          profileImage:GlobalInclude.Image4,
          name: 'Lorem Ipsum',
          post: 'Lorem Ipsum',
          isSelected: false
        },
        {
          id: 5,
          profileImage:GlobalInclude.Image5,
          name: 'Lorem Ipsum',
          post: 'Lorem Ipsum',
          isSelected: false
        },
        {
          id: 6,
          profileImage: GlobalInclude.Image6,
          name: 'Lorem Ipsum',
          post: 'Lorem Ipsum',
          isSelected: false
        },
        {
          id: 7,
          profileImage:GlobalInclude.Image7,
          name: 'Lorem Ipsum',
          post: 'Lorem Ipsum',
          isSelected: false
        },
        {
          id: 8,
          profileImage: GlobalInclude.Image8,
          name: 'Lorem Ipsum',
          post: 'Lorem Ipsum',
          isSelected: false
        },
        {
          id: 9,
          profileImage:GlobalInclude.Image9,
          name: 'Lorem Ipsum',
          post: 'Lorem Ipsum',
          isSelected: false
        },
      ]
    };
    //END TO SETUP DATA STATE
 	}

  render(){

    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW

    //BEGIN TO SETUP DATA
    var data = [
      {
        id: 1,
        profileImage:GlobalInclude.Image1,
        name: 'Lorem Ipsum',
        post: 'Lorem Ipsum',
        isSelected: 'true'
      },
      {
        id: 2,
        profileImage: GlobalInclude.Image2,
        name: 'Lorem Ipsum',
        post: 'Lorem Ipsum',
        isSelected: 'false'
      },
      {
        id: 3,
        profileImage: GlobalInclude.Image3,
        name: 'Lorem Ipsum',
        post: 'Lorem Ipsum',
        isSelected: 'false'
      },
      {
        id: 4,
        profileImage: GlobalInclude.Image4,
        name: 'Lorem Ipsum',
        post: 'Lorem Ipsum',
        isSelected: 'false'
      },
      {
        id: 5,
        profileImage: GlobalInclude.Image5,
        name: 'Lorem Ipsum',
        post: 'Lorem Ipsum',
        isSelected: 'false'
      },
      {
        id: 6,
        profileImage:GlobalInclude.Image6,
        name: 'Lorem Ipsum',
        post: 'Lorem Ipsum',
        isSelected: 'false'
      },
      {
        id: 7,
        profileImage: GlobalInclude.Image7,
        name: 'Lorem Ipsum',
        post: 'Lorem Ipsum',
        isSelected: 'false'
      },
      {
        id: 8,
        profileImage: GlobalInclude.Image8,
        name: 'Lorem Ipsum',
        post: 'Lorem Ipsum',
        isSelected: 'false'
      },
      {
        id: 9,
        profileImage: GlobalInclude.Image9,
        name: 'Lorem Ipsum',
        post: 'Lorem Ipsum',
        isSelected: 'false'
      },
    ]
    //END TO SETUP DATA

    return(
      <Container style={styles.main}>
      {/* BEGIN TO SETUP HEADER VIEW */}
        <Header style={styles.header}>
        {/* BEGIN TO SETUP LEFT VIEW */}
            <Left style={styles.left}>
              <TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
              {
                (I18nManager.isRTL)
                ?
                    <FontAwesome name="angle-right" size={25} color='white'/>
                :
                    <FontAwesome name="angle-left" size={25} color='white'/>
              }
              </TouchableOpacity>
            </Left>
        {/* END TO SETUP LEFT VIEW */}

        {/* BEGIN TO SETUP BODY VIEW */}
            <Body style={styles.body}>
              <Text style={styles.text_title}>People</Text>
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
        <Content>
        <View style={styles.list_main_view} animation="zoomInDown" duration={1100} delay={1400}>
        {
          this.state.data.map((item, index) => {
           return (
             <View style={styles.row_bg} key={index}>
               <View style={styles.row_view}>
               {/* BEGIN TO SETUP PROFILEIMAGE VIEW */}
                 <Image source={item.profileImage} style={styles.profile_img}/>
               {/* END TO SETUP PROFILEIMAGE VIEW */}

               {/* BEGIN TO SETUP NAME AND POST VIEW */}
                 <View style={styles.name_post_view}>
                    <Text style={styles.row_name_txt}>{item.name}</Text>
                    <Text style={styles.row_designation_txt}>{item.post}</Text>
                 </View>
               {/* END TO SETUP NAME AND POST VIEW */}

               {/* BEGIN TO SETUP FOLLOW VIEW */}
                 <View style={{justifyContent: 'center'}}>
                   {
                     (item.isSelected == true) ?
                      <TouchableOpacity style={styles.follow_bg_selected} onPress = {() => this._fnChangeItem(item.id)}><Text style={styles.follow_txt_selected}>Follow</Text></TouchableOpacity> :
                      <TouchableOpacity style={styles.follow_bg_not_selected} onPress = {() => this._fnChangeItem(item.id)}><Text style={styles.follow_txt_not_selected}>Follow</Text></TouchableOpacity>
                   }
                 </View>
               {/* END TO SETUP FOLLOW VIEW */}
               </View>
               <View style={ (index === data.length - 1) ? null : styles.divider_horizontal}/>
            </View>
            )
          })
        }
        </View>
      </Content>
    </Container>
    );
  }

  //BEGIN TO SETUP FNCHANGEITEM
  _fnChangeItem(listId){
    const newArray = this.state.data;
    for(var i = 0 ; i< this.state.data.length; i++){
       if(this.state.data[i].id == listId){
         const newArray1 = [];
        for(var i = 0 ; i< this.state.data.length; i++){
           if(this.state.data[i].id == listId){
             newArray1.push({
                 id: this.state.data[i].id,
                 profileImage: this.state.data[i].profileImage,
                 name: this.state.data[i].name,
                 post: this.state.data[i].post,
                 isSelected: !this.state.data[i].isSelected
               },
             );
           } else {
             newArray1.push({
                 id: this.state.data[i].id,
                 profileImage: this.state.data[i].profileImage,
                 name: this.state.data[i].name,
                 post: this.state.data[i].post,
                 isSelected: this.state.data[i].isSelected
               },
             );
           }
         }
      this.setState({ data: newArray1 });
       }
     }
  }
}
//END TO SETUP FNCHANGEITEM

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
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
    backgroundColor: 'rgba(0,0,0,0)',
  },
  back_arrow:{
    width: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  body: {
    flex: 3,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  text_title: {
    color: 'white',
    fontSize: moderateScale(16),
    marginTop: (Dimensions.get("window").height * 0.001),
    alignSelf: 'center',
    fontFamily: font_type.FontLight,
  },
  right: {
    flex: 0.5
  },
  main: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: 'white',
    flexDirection: 'column'
  },
  row_bg: {
    width: (Dimensions.get("window").width),
    backgroundColor: 'white',
    marginLeft: (Dimensions.get("window").width) * 0.045,
    marginTop: (Dimensions.get("window").height) * 0.015,
  },
  profile_img: {
    width: (Dimensions.get("window").width) * 0.12,
    height: (Dimensions.get("window").width) * 0.12,
    borderRadius: (Dimensions.get("window").width) * 0.06,
    alignSelf: 'flex-start',
  },
  row_name_txt: {
    color: "#6f6f6f",
    fontSize: moderateScale(16),
    fontFamily: font_type.FontBold,
    textAlign: 'left'
  },
  row_designation_txt: {
    color: "#b7b7b7",
    fontSize: moderateScale(13),
    fontFamily: font_type.FontLight,
    textAlign: 'left'
  },
  divider_horizontal: {
    width: ((Dimensions.get("window").width) * 0.99) + 5,
    height: (Dimensions.get("window").height) * 0.001,
    backgroundColor: "#D7D7D7",
    alignSelf: 'flex-end',
  },
  follow_bg_not_selected: {
    width: (Dimensions.get("window").width) * 0.18,
    height: (Dimensions.get("window").height) * 0.035,
    borderRadius: (Dimensions.get("window").height) * 0.045,
    borderWidth: 1,
    borderColor: "#0691ce",
    marginRight: (Dimensions.get("window").width) * 0.03,
    justifyContent:'center'
  },
  follow_bg_selected: {
    width: (Dimensions.get("window").width) * 0.18,
    height: (Dimensions.get("window").height) * 0.035,
    borderRadius: (Dimensions.get("window").height) * 0.045,
    backgroundColor: "#0691ce",
    marginRight: (Dimensions.get("window").width) * 0.03,
    justifyContent:'center'
  },
  follow_txt_selected: {
    fontSize: moderateScale(11),
    fontFamily: font_type.FontLight,
    color: 'white',
    alignSelf: 'center',
  },
  follow_txt_not_selected: {
    fontSize: moderateScale(11),
    fontFamily: font_type.FontLight,
    color: "#0691ce",
    alignSelf: 'center',
  },
  list_main_view:{
    width: (Dimensions.get("window").width)
  },
  row_view:{
    flexDirection: 'row',
    marginBottom:(Dimensions.get("window").height) * 0.015
  },
  name_post_view:{
    flexDirection: 'column',
    marginLeft: (Dimensions.get("window").width) * 0.045,
    width: (Dimensions.get("window").width) * 0.58,
    justifyContent: 'center'
  },
});
// END TO MAKE STYLE
