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
import {RaisedTextButton} from 'react-native-material-buttons';
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";

type Props = {};


export default class MaterialBottomNavigation extends Component<Props> {

  render() {

    return (
      <Container style={{backgroundColor:'#E8EAF6'}}>

            {/* BEGIN HEADER VIEW */}
            <GlobalInclude.Header header_name={this.props.navigation.getParam('menu_title', global.menu_title)} navigation = {this.props.navigation}/>
            {/* END HEADER VIEW */}

            <SafeAreaView style={{flex: 1,backgroundColor: '#E8EAF6'}}>
                {/* BEGIN TO MAKE ALL BUTTON FOR STYLE */}
                <View style={GlobalInclude.GlobalStyle.button_card}>
                      <RaisedTextButton  style={{alignSelf:'center',width: 250,marginTop:10}} rippleDuration={600} rippleOpacity={0.54} title="Style 1"   color='rgba(255, 99, 71, 0.7)' titleColor='white' onPress={() =>this.props.navigation.navigate('BottomNavigation1')}/>
                      <RaisedTextButton  style={{alignSelf:'center',width: 250,marginTop:10}} rippleDuration={600} rippleOpacity={0.54} title="Style 2"   color='rgba(255, 99, 71, 0.7)' titleColor='white' onPress={() =>this.props.navigation.navigate('BottomNavigation2')}/>
                      <RaisedTextButton  style={{alignSelf:'center',width: 250,marginTop:10}} rippleDuration={600} rippleOpacity={0.54} title="Style 3"   color='rgba(255, 99, 71, 0.7)' titleColor='white' onPress={() =>this.props.navigation.navigate('BottomNavigation3')}/>
                      <RaisedTextButton  style={{alignSelf:'center',width: 250,marginTop:10,marginBottom:10}} rippleDuration={600} rippleOpacity={0.54} title="Style 4"   color='rgba(255, 99, 71, 0.7)' titleColor='white' onPress={() =>this.props.navigation.navigate('BottomNavigation4')}/>
               </View>
               {/* END TO MAKE ALL BUTTON FOR STYLE */}
           </SafeAreaView>
      </Container>
    );
  }
}
