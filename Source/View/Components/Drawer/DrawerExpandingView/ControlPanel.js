import React, { Component } from 'react';
import { View, Text, ScrollView,StyleSheet,Dimensions } from 'react-native';
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
        color: '#ff308e',
        micon: require('./icon_dariy.png'),
        details: [
          {
            submenu: 'Submenu 1',
          },
          {
            submenu: 'Submenu 2',
          }
        ],
      },
      {
        title: 'Lorem Ipsum',
        color: '#20cbf3',
        micon: require('./icon_meat.png'),
        details: [
          {
            submenu: 'Submenu 1',
          },
          {
            submenu: 'Submenu 2',
          }
        ],
      },
      {
        title: 'Lorem Ipsum',
        color: '#fa9301',
        micon: require('./icon_fruits.png'),
        details: [
          {
            submenu: 'Submenu 1',
          },
          {
            submenu: 'Submenu 2',
          }
        ],
      },
      {
        title: 'Lorem Ipsum',
        color: '#49cc5c',
        micon: require('./icon_vegitable.png'),
        details: [
          {
            submenu: 'Submenu 1',
          },
          {
            submenu: 'Submenu 2',
          }
        ],
      },
      {
        title: 'Lorem Ipsum',
        color: '#6f26fa',
        micon: require('./icon_fish.png'),
        details: [
          {
            submenu: 'Submenu 1',
          },
          {
            submenu: 'Submenu 2',
          }
        ],
      },
      {
        title: 'Lorem Ipsum',
        color: '#f8d411',
        micon: require('./icon_bread_pastries.png'),
        details: [
          {
            submenu: 'Submenu 1',
          },
          {
            submenu: 'Submenu 2',
          }
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
    width: Dimensions.get("window").width * 0.865,
    paddingTop: 15,
    alignSelf: 'center',
    height: Dimensions.get("window").height,
    backgroundColor: "#241445",
    paddingBottom: 10,
  },
  menu_list:{
    width: Dimensions.get("window").width * 0.42,
    height: Dimensions.get("window").width * 0.35,
    padding: 15,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawercontainer:{
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: '#2d324f',
  },
});
// END TO MAKE STYLE
