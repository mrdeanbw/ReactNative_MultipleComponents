import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, ScrollView,StyleSheet,Dimensions } from 'react-native';
import AccordianMenu from './AccordianMenu';

export default class ControlPanel extends Component {
  render() {
    var data = [
      {
        title: 'Lorem Ipsum',
        color: '#241445',
        micon: require('./icon_dariy.png'),
        details: [
          {
            submenu: 'Submenu 1',
          },
          {
            submenu: 'Submenu 2',
          },
          {
            submenu: 'Submenu 3',
          },
          {
            submenu: 'Submenu 4',
          },
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
          },
          {
            submenu: 'Submenu 3',
          },
          {
            submenu: 'Submenu 4',
          },
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
          },
          {
            submenu: 'Submenu 3',
          },
          {
            submenu: 'Submenu 4',
          },
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
          },
          {
            submenu: 'Submenu 3',
          },
          {
            submenu: 'Submenu 4',
          },
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
          },
          {
            submenu: 'Submenu 3',
          },
          {
            submenu: 'Submenu 4',
          },
        ],
      },
      {
        title: 'Lorem Ipsum',
        color: '#f8d411',
        micon: require('./icon_bread_pastries.png'),
        details: [
          {
            submenu: 'Bun',
          },
          {
            submenu: 'Poppy seed roll',
          },
          {
            submenu: 'Muffins',
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
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  menu_list_sec:{
    width: Dimensions.get("window").width,
    alignSelf: 'center',
    height: Dimensions.get("window").height * 0.92,
    backgroundColor: "#f2f2f2",
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
});
// END TO MAKE STYLE
