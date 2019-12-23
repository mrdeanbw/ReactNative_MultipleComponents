/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, {Component} from 'react';
import {Text,SafeAreaView,ScrollView,View,Alert} from 'react-native';
import {Container} from "native-base";
import {ActionButton} from 'react-native-material-ui';
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";

type Props = {};

export default class ActionButtonClass extends Component<Props> {

  render() {

    return (
      <Container style={{backgroundColor:'#E8EAF6'}}>

            {/* BEGIN HEADER VIEW */}
            <GlobalInclude.Header header_name={this.props.navigation.getParam('menu_title', global.menu_title)} navigation = {this.props.navigation}/>
            {/* END HEADER VIEW */}

            <SafeAreaView style={{flex: 1,backgroundColor: '#E8EAF6'}}>
                <ScrollView style={GlobalInclude.GlobalStyle.scroll}>
                    {/* BEGIN TO MAKE TOOLBAR ACTION BUTTON */}
                    <View style={[GlobalInclude.GlobalStyle.card,{height:150,flexDirection:'row'}]}>
                          <Text style={[GlobalInclude.GlobalStyle.textStyle,{paddingTop:5}]}>Toolbar Style</Text>
                          <ActionButton
                            actions={['email', { icon: 'phone', label: 'Phone' }, 'sms', 'favorite']}
                            icon="home"
                            transition="toolbar"
                            onPress={(text) => alert(`You have clicked ${text}.`)}
                          />
                    </View>
                    {/* END TO MAKE TOOLBAR ACTION BUTTON */}

                    {/* BEGIN TO MAKE SPEEDDIAL ACTION BUTTON */}
                    <View style={[GlobalInclude.GlobalStyle.card,{height:350,flexDirection:'row'}]}>
                          <Text style={[GlobalInclude.GlobalStyle.textStyle,{paddingTop:5}]}>SpeedDial Style</Text>
                          <ActionButton
                            actions={['email', { icon: 'phone', label: 'Phone' }, 'sms', 'favorite']}
                            icon="share"
                            transition="speedDial"
                            onPress={(text) => alert(`You have clicked ${text}.`)}
                          />
                    </View>
                    {/* END TO MAKE SPEEDDIAL ACTION BUTTON */}
                </ScrollView>
            </SafeAreaView>
      </Container>
    );
  }
}
