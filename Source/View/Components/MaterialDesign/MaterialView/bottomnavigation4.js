/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text,View} from 'react-native';
import BottomNavigation, {ShiftingTab,Badge} from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";

type Props = {};

export default class MaterialBottomNavigatinStyle4 extends Component {

  // BEGIN TO MAKE HEADER
  static navigationOptions = ({navigation}) => {
     const {params = {}} = navigation.state;
       return {
           headerTitle: "Style 4",
           headerTintColor: 'white',
           headerStyle: {
                     backgroundColor: '#ff6347'}
         };
  };
  // END TO MAKE HEADER

    // BEGIN TO STORE INITIAL TAB NAME
    state = {
      activeTab: 'games'
    }
    // END TO STORE INITIAL TAB NAME

    // BEGIN TO MAKE TAB LIST ARRAY
    tabs = [
        {
          key: 'games',
          label: 'Games',
          barColor: '#388E3C',
          pressColor: 'rgba(255, 255, 255, 0.16)',
          icon: 'gamepad-variant'
        },
        {
          key: 'movies-tv',
          label: 'Movies & TV',
          barColor: '#00695C',
          pressColor: 'rgba(255, 255, 255, 0.16)',
          icon: 'movie'
        },
        {
          key: 'music',
          label: 'Music',
          barColor: '#6A1B9A',
          pressColor: 'rgba(255, 255, 255, 0.16)',
          icon: 'music-note'
        },
        {
          key: 'books',
          label: 'Books',
          barColor: '#1565C0',
          pressColor: 'rgba(255, 255, 255, 0.16)',
          icon: 'book'
        }
    ]
    // END TO MAKE TAB LIST ARRAY

    // BEGIN TO RENDER METHOD FOR ICON
    renderIcon = icon => ({ isActive }) => (
      <Icon size={24} color="white" name={icon} />
    )
    // BEGIN TO RENDER METHOD FOR ICON

    // BEGIN TO RENDER METHOD FOR ICON TAB
    renderTab = ({ tab, isActive }) => (
      <ShiftingTab
        isActive={isActive}
        showBadge={tab.key === 'movies-tv'}
        renderBadge={() => <Badge>2</Badge>}
        key={tab.key}
        label={tab.label}
        renderIcon={this.renderIcon(tab.icon)}
      />
    )
    // END TO RENDER METHOD FOR ICON TAB

  render() {

    return (
      <View style={{ flex: 1 }}>

            {/* BEGIN TO DISPLAY CURRENT TAB */}
            <View style={{ flex: 1,alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{fontSize:17,fontWeight: 'bold'}}>{this.state.activeTab}</Text>
            </View>
            {/* END TO DISPLAY CURRENT TAB */}

            {/* BEGIN TO DISPLAY BOTTOM NAVIGATION */}
            <BottomNavigation
                      tabs={this.tabs}
                      activeTab={this.state.activeTab}
                      onTabPress={newTab => this.setState({ activeTab: newTab.key })}
                      renderTab={this.renderTab}
                      useLayoutAnimation
            />
            {/* END TO DISPLAY BOTTOM NAVIGATION */}
      </View>
    );
  }
}
