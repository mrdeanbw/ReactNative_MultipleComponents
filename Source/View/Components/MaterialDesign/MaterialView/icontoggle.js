/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet,Text,View,ScrollView,SafeAreaView} from 'react-native';
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";
import {Container} from "native-base";
import {Avatar,IconToggle} from 'react-native-material-ui';

type Props = {};

export default class MaterialIconToggle extends Component<Props> {

  render() {

    return (
      <Container style={{backgroundColor:'#E8EAF6'}}>

            {/* BEGIN HEADER VIEW */}
            <GlobalInclude.Header header_name={this.props.navigation.getParam('menu_title', global.menu_title)} navigation = {this.props.navigation}/>
            {/* END HEADER VIEW */}

            <SafeAreaView style={{flex: 1,backgroundColor: '#E8EAF6'}}>
                <ScrollView style={GlobalInclude.GlobalStyle.scroll}>

                      {/* BEGIN TO MAKE ICON TOGGLE WITH DEFAULT, COLORED AND DISABLED */}
                      <View style={[GlobalInclude.GlobalStyle.card,{height:100}]}>
                          <Text style={GlobalInclude.GlobalStyle.textStyle}>Basic (default, colored, disabled)</Text>
                          <View style={styles.rowContainer}>
                                <IconToggle name="star" />
                                <IconToggle name="star" color={'red'} />
                                <IconToggle name="star" disabled />
                          </View>
                      </View>
                      {/* END TO MAKE ICON TOGGLE WITH DEFAULT, COLORED AND DISABLED */}

                      {/* BEGIN TO MAKE ICON TOGGLE WITH DEFAULT, COLORED AND DISABLED */}
                      <View style={[GlobalInclude.GlobalStyle.card,{height:140}]}>
                          <Text style={GlobalInclude.GlobalStyle.textStyle}>Different size (24, 35, 45)</Text>
                          <View style={styles.rowContainer}>
                                <IconToggle name="person" />
                                <IconToggle name="person" size={35} />
                                <IconToggle
                                    name="person"
                                    style={{ icon: { width: 45, height: 45 } }}
                                />
                          </View>
                      </View>
                      {/* END TO MAKE ICON TOGGLE WITH DEFAULT, COLORED AND DISABLED */}

              </ScrollView>
         </SafeAreaView>
      </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        paddingLeft: 4,
    },
});
// BEGIN TO MAKE STYLE
