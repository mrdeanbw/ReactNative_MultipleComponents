/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View,SafeAreaView} from 'react-native';
import {Container} from "native-base";
import {BottomNavigation,Icon} from 'react-native-material-ui';
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";

type Props = {};

export default class MaterialBottomNavigationStyle1 extends Component<Props> {

  static navigationOptions = ({navigation}) => {
     const {params = {}} = navigation.state;
       return {
           headerTitle: "Style 1",
           headerTintColor: 'white',
           headerStyle: {
                     backgroundColor: '#ff6347'}
         };
  };

  constructor(props) {
        super(props);
        // BEGIN TO STORE INITIAL TAB NAME
        this.state = { active: 'today' };
        // END TO STORE INITIAL TAB NAME
  }

  render() {

    return (
      <SafeAreaView style={{flex: 1,backgroundColor: '#E8EAF6'}}>

                {/* BEGIN TO MAKE ACTIVE TAB ICON VIEW */}
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={this.state.active} size={54} />
                </View>
                {/* END TO MAKE ACTIVE TAB ICON VIEW */}

                {/* BEGIN TO MAKE TAB VIEW */}
                <BottomNavigation active={this.state.active} >
                    <BottomNavigation.Action
                        key="home"
                        icon="home"
                        label="home"
                        onPress={() => this.setState({ active: 'home' })}
                    />
                    <BottomNavigation.Action
                        key="people"
                        icon="people"
                        label="People"
                        onPress={() => this.setState({ active: 'people' })}
                    />
                    <BottomNavigation.Action
                        key="today"
                        icon="today"
                        label="Today"
                        onPress={() => this.setState({ active: 'today' })}
                    />
                    <BottomNavigation.Action
                        key="settings"
                        icon="settings"
                        label="Settings"
                        onPress={() => this.setState({ active: 'settings' })}
                    />
                </BottomNavigation>
                {/* END TO MAKE TAB VIEW */}
           </SafeAreaView>

    );
  }
}
