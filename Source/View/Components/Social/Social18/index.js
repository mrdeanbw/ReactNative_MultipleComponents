import React, { Component } from 'react';
import {Text,Image, StatusBar, Platform,Dimensions,TouchableOpacity, BackHandler,StyleSheet,I18nManager} from 'react-native';
import {Container, Button,Right,Left,Content,Body,Header,Icon,Title} from 'native-base';
import {View} from 'react-native-animatable';
import Stars from 'react-native-stars';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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

export default class Social18 extends Component {

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
       rating: 1,
       name: 'Lorem ipsum',
       date: 'April 1,2016',
       post: 'Lorem ipsum',
       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
     },
     {
       id: 2,
       rating: 2,
       name: 'Lorem ipsum',
       date: 'April 2,2016',
       post: 'Lorem ipsum',
       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
     },
     {
       id: 3,
       rating: 3,
       name: 'Lorem ipsum',
       date: 'April 3,2016',
       post: 'Lorem ipsum',
       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
     },
     {
       id: 4,
       rating: 4,
       name: 'Lorem ipsum',
       date: 'April 4,2016',
       post: 'Lorem ipsum',
       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
     }
   ]
   //END TO SETUP DATA

    return(
      <Container style={styles.main}>
      {/* BEGIN TO SETUP HEADER VIEW */}
          <Header style={styles.header}>
            {/* BEGIN TO SETUP LEFT VIEW */}
              <Left style={styles.left}>
                <TouchableOpacity  style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
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
                <Text style={styles.text_title}>Reviews</Text>
              </Body>
            {/* END TO SETUP BODY VIEW */}

            {/* BEGIN TO SETUP RIGHT VIEW */}
              <Right style={styles.right}></Right>
            {/* END TO SETUP RIGHT VIEW */}
          </Header>
          {/* END TO SETUP HEADER VIEW */}
          <Content>
          <View style={styles.list_main_view} animation="zoomInDown" duration={1100} delay={1400}>
          {
            data.map((item, index) => {
             return (
              <View style={ (index === data.length - 1) ? styles.lastrow_bg : styles.row_bg} key={index}>
                <View style={styles.rating_bar_view}>
                {/* BEGIN TO SETUP RATING VIEW */}
                  <View style={styles.rating_text_bg}>
                    <Text style={styles.rating_text}>{item.rating}</Text>
                  </View>
                 {/* END TO SETUP RATING VIEW */}
                  <View style={styles.rating_view}>
                    <View style={styles.rating_date_view}>
                    {/* BEGIN TO SETUP RATING STAR VIEW */}
                      <View style={styles.rating_star}>
                         <Stars
                           half={true}
                           rating={item.rating}
                           update={(val)=>{this.setState({stars: val})}}
                           spacing={4}
                           starSize={20}
                           count={5}
                           disabled={true}
                           fullStar={require('./icon_star_filled.png')}
                           emptyStar={require('./icon_star_empty.png')}
                           halfStar={require('./icon_star_half.png')} />
                       </View>
                     {/* END TO SETUP RATING STAR VIEW */}

                     {/* BEGIN TO SETUP DATE VIEW */}
                       <Right><Text style={styles.row_date_txt}>{item.date}</Text></Right>
                     {/* END TO SETUP DATE VIEW */}
                    </View>

                    {/* BEGIN TO SETUP NAME AND BY VIEW */}
                      <View style={styles.reviewer_name_view}>
                        <Text style={styles.by}>by</Text>
                        <Text style={styles.row_name_txt}>{item.name}</Text>
                      </View>
                    {/* END TO SETUP NAME AND BY VIEW */}
                  </View>
                </View>
                <View style={styles.divider_horizontal}/>

                {/* BEGIN TO SETUP POST AND DESCRIPTION VIEW */}
                <Text style={styles.row_post_text}>{item.post}</Text>
                <Text style={styles.row_desc_txt}>{item.description}</Text>
                {/* END TO SETUP POST AND DESCRIPTION VIEW */}
              </View>
              )
            })
          }
          </View>
        </Content>
      </Container>
    );
  }
}

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
    backgroundColor: "#ecedeb",
    flexDirection: 'column'
  },
  row_bg: {
    width: Dimensions.get("window").width,
    backgroundColor: 'white',
    marginBottom: (Dimensions.get("window").height) * 0.018,
    flexDirection: 'column'
  },
  lastrow_bg: {
    width: Dimensions.get("window").width,
    backgroundColor: 'white',
    flexDirection: 'column'
  },
  rating_text_bg: {
    width: (Dimensions.get("window").width) * 0.14,
    height: (Dimensions.get("window").width) * 0.14,
    backgroundColor: "#0691ce",
    justifyContent: 'center'
  },
  rating_text: {
    color: 'white',
    fontSize: moderateScale(16),
    fontFamily: font_type.FontBold,
    alignSelf: 'center',
  },
  row_name_txt: {
    color: "#363636",
    fontFamily: font_type.FontLight,
    fontSize: moderateScale(18),
    marginLeft: (Dimensions.get("window").width) * 0.015,
  },
  row_date_txt: {
    color: "#adadad",
    fontSize: moderateScale(15),
    fontFamily: font_type.FontLight,
  },
  divider_horizontal: {
    width: (Dimensions.get("window").width) * 0.95,
    height: (Dimensions.get("window").height) * 0.001,
    backgroundColor: "#e6e6e6",
    marginTop: (Dimensions.get("window").height) * 0.022,
    marginBottom: (Dimensions.get("window").height) * 0.022,
    alignSelf: 'center'
  },
  row_post_text: {
    color: "#0691ce",
    marginLeft: (Dimensions.get("window").width) * 0.03,
    marginRight: (Dimensions.get("window").width) * 0.03,
    fontSize: moderateScale(18),
    fontFamily: font_type.FontLight,
    textAlign: 'left'
  },
  row_desc_txt: {
    color: "#6f6f6f",
    marginLeft: (Dimensions.get("window").width) * 0.03,
    marginRight: (Dimensions.get("window").width) * 0.03,
    marginBottom: (Dimensions.get("window").height) * 0.022,
    marginTop: (Dimensions.get("window").height) * 0.018,
    fontSize: moderateScale(18),
    fontFamily: font_type.FontLight,
    textAlign: 'left'
  },
  list_main_view:{
    width: (Dimensions.get("window").width)
  },
  rating_bar_view:{
    flexDirection: 'row',
    marginLeft: (Dimensions.get("window").width) * 0.03,
    marginRight: (Dimensions.get("window").width) * 0.03,
    marginTop: (Dimensions.get("window").height) * 0.022,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  rating_view:{
    flexDirection: 'column'
  },
  rating_date_view:{
    flexDirection: 'row',
    marginLeft: (Dimensions.get("window").width) * 0.045,
    justifyContent: 'flex-start',
    width: (Dimensions.get("window").width) * 0.75
  },
  rating_star:{
    alignItems:'center'
  },
  reviewer_name_view:{
    flexDirection: 'row',
    marginLeft: (Dimensions.get("window").width) * 0.045,
    justifyContent: 'flex-start',
    marginTop: (Dimensions.get("window").height) * 0.007
  },
  by:{
    color: "#adadad",
    fontSize: moderateScale(16),
    fontFamily: font_type.FontLight
  },
});
// END TO MAKE STYLE
