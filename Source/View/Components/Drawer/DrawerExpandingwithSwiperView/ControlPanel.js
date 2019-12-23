import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, ScrollView ,StyleSheet,Dimensions} from 'react-native';
import AccordianMenu from './AccordianMenu';



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
    var data = [
      {
        title: 'Lorem Ipsum',
        details: [
          {
            submenu: '1',
          },
          {
            submenu: '2',
          },
          {
            submenu: '3',
          },
        ],
      },
      {
        title: 'Lorem Ipsum',
        details: [
          {
            submenu: '1',
          },
          {
            submenu: '2',
          },
          {
            submenu: '3',
          },
        ],
      },
      {
        title: 'Lorem Ipsum',
        details: [
          {
            submenu: '1',
          },
          {
            submenu: '2',
          },
          {
            submenu: '3',
          },
        ],
      },
      {
        title: 'Lorem Ipsum',
        details: [
          {
            submenu: '1',
          },
          {
            submenu: '2',
          },
          {
            submenu: '3',
          },
        ],
      },
      {
        title: 'Lorem Ipsum',
        details: [
          {
            submenu: '1',
          },
          {
            submenu: '2',
          },
          {
            submenu: '3',
          },
        ],
      },
      {
        title: 'Lorem Ipsum',
        details: [
          {
            submenu: '1',
          },
          {
            submenu: '2',
          },
          {
            submenu: '3',
          },
        ],
      },
    ]
    return (
      <View>
        <View style={styles.menu_list_sec}>
        {/* BEGIN TO SETUP ACCORDIANMENU VIEW */}
          <ScrollView>
            {
              data.map((menu,value)=>{
                return (
                  <AccordianMenu title={menu.title} bgColors={menu.color} submenuList={menu.details} menuIcon={menu.micon} key={"menuview_" + (value)}>
                  </AccordianMenu>
                );
              })
            }
          </ScrollView>
        {/* END TO SETUP ACCORDIANMENU VIEW */}
        </View>
      </View>
    )
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  menu_list_sec:{
    width: Dimensions.get("window").width,
    alignSelf: 'center',
    height: Dimensions.get("window").height * 0.92,
    backgroundColor: "#f2f2f2",
    paddingBottom: 10,
  },
});
// END TO MAKE STYLE
