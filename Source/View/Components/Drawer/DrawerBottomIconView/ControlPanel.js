import React, { Component } from 'react';
import { AsyncStorage, Image, StatusBar, View, TouchableOpacity,StyleSheet, Linking, Alert,Platform, Dimensions,ImageBackground} from "react-native";
import {Header, Button, Text, Container, List, ListItem, Content, Icon, top, Left, Right,Title,Body} from "native-base";

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

  render() {
    return (
      <Container style={styles.bottom_modal}>

      {/* BEGIN TO SETUP BOOTOMVIEW VIEW */}
          <View style={styles.main_view}>
        {/* BEGIN TO SETUP HEADERTEXT VIEW */}
          <View style={styles.header_bottom}>
            <Text STYLE={{color:'#292d48', textAlign:'center', justifyContent:'center'}}>
              BROWSE BY CATEGORY
            </Text>
          </View>
        {/* END TO SETUP HEADERTEXT VIEW */}
          <View style={styles.horizontal_line}></View>
          <View style={styles.semi_row}>
            {/* BEGIN TO SETUP LIVINGROOM VIEW */}
               <TouchableOpacity onPress={() => alert('Living Room icon Click')} >
                 <View style={styles.list_row}>
                    <Image source={require('./ic_livingroom_blue.png')} style={ styles.row_icon} />
                    <Text style={styles.row_txt}>Living Room</Text>
                 </View>
               </TouchableOpacity>
            {/* END TO SETUP LIVINGROOM VIEW */}
             <View style={styles.vertical_line}></View>

            {/* BEGIN TO SETUP DININGROOM VIEW */}
             <TouchableOpacity onPress={() => alert('Dining Room icon Click')} >
               <View style={styles.list_row}>
                <Image source={require('./ic_diningroom_blue.png')} style={ styles.row_icon} />
                <Text style={styles.row_txt}>Dining Room</Text>
               </View>
             </TouchableOpacity>
            {/* END TO SETUP DININGROOM VIEW */}
             <View style={styles.vertical_line}></View>

            {/* BEGIN TO SETUP BOOKCASE VIEW */}
             <TouchableOpacity onPress={() => alert('Bookcase icon Click')} >
               <View style={styles.list_row}>
                <Image source={require('./ic_bookcase_blue.png')} style={ styles.row_icon} />
                <Text style={styles.row_txt}>Bookcase</Text>
               </View>
             </TouchableOpacity>
            {/* END TO SETUP BOOKCASE VIEW */}
          </View>
            <View style={styles.horizontal_line}></View>
            <View style={styles.semi_row}>

            {/* BEGIN TO SETUP BEDROOM VIEW */}
             <TouchableOpacity onPress={() => alert('Bedroom icon Click')} >
                <View style={styles.list_row}>
                 <Image source={require('./ic_bedroom_blue.png')} style={ styles.row_icon} />
                 <Text style={styles.row_txt}>Bedroom</Text>
                </View>
             </TouchableOpacity>
            {/* END TO SETUP BEDROOM VIEW */}
            <View style={styles.vertical_line}></View>

            {/* BEGIN TO SETUP TVSTANDS VIEW */}
             <TouchableOpacity onPress={() => alert('TV Stands icon Click')} >
              <View style={styles.list_row}>
               <Image source={require('./ic_tv_stands_blue.png')} style={ styles.row_icon} />
               <Text style={styles.row_txt}>TV Stands</Text>
              </View>
             </TouchableOpacity>
            {/* END TO SETUP TVSTANDS VIEW */}
            <View style={styles.vertical_line}></View>

            {/* BEGIN TO SETUP BATHROOM VIEW */}
             <TouchableOpacity onPress={() => alert('Bathroom icon Click')} >
              <View style={styles.list_row}>
               <Image source={require('./ic_bathroom_blue.png')} style={ styles.row_icon} />
               <Text style={styles.row_txt}>Bathroom</Text>
              </View>
            </TouchableOpacity>
            {/* END TO SETUP BATHROOM VIEW */}
          </View>
        </View>
      {/* END TO SETUP BOOTOMVIEW VIEW */}
      </Container>
    )
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d324f',
  },
  left: {
    flex: 0.5,
    backgroundColor: 'transparent',
  },
  body: {
    flex: 3,
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  right: {
    flex: 0.5
  },
  bottom_modal: {
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    margin: 0,
  },
  main_view:{
    alignItems: 'flex-start',
    height: 300,
    bottom: 0,
    backgroundColor: 'white',
  },
  header_bottom:{
    height: 50,
    width: Dimensions.get("window").width,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'black'
  },
  semi_row:{
    width: Dimensions.get("window").width,
    height:125,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  horizontal_line:{
    height: 0.5,
    backgroundColor: '#f2f2f2',
    width: Dimensions.get("window").width
  },
  vertical_line:{
    height: 125,
    backgroundColor: '#f2f2f2',
    width: 0.5
  },
  list_row:{
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get("window").width*0.333,
    height: 125
  },
  body: {
		flex: 2,
		alignItems: 'center',
		backgroundColor: 'transparent'
  },
  row_icon:{
    backgroundColor: 'transparent',
    height: 20,
    width: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
    alignItems: 'center'
  },
  row_txt:{
    color:'#696c7f',
    fontSize: moderateScale(15),
    backgroundColor: 'transparent',
    textAlign: 'left',
    marginTop: 12,
    fontFamily: font_type.FontLight
  },
});
// END TO MAKE STYLE
