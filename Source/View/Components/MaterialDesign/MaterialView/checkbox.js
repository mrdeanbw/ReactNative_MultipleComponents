/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet,Text,View,ScrollView,SafeAreaView} from 'react-native';
import {Container} from "native-base";
import {Checkbox} from 'react-native-material-ui';
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";

type Props = {};

export default class MaterialCheckbox extends Component<Props> {
  constructor(props) {
        super(props);
        // BEGIN TO MAKE STATE
        this.state = { checked: false };
        // END TO MAKE STATE
    }
  render() {

    return (
      <Container style={{backgroundColor:'#E8EAF6'}}>

            {/* BEGIN HEADER VIEW */}
            <GlobalInclude.Header header_name={this.props.navigation.getParam('menu_title', global.menu_title)} navigation = {this.props.navigation}/>
            {/* END HEADER VIEW */}

            <SafeAreaView style={{flex: 1,backgroundColor: '#E8EAF6'}}>
                <ScrollView style={GlobalInclude.GlobalStyle.scroll}>

                      {/* BEGIN TO MAKE CHECKBOX VIEW */}
                      <View style={GlobalInclude.GlobalStyle.card}>
                                  <Checkbox
                                      label= {this.state.checked == true ? "Checked" :"Unchecked"}
                                      checked={this.state.checked}
                                      value="Value"
                                      onCheck={checked => this.setState({ checked })}
                                  />
                                  <Checkbox label="Checked by default" checked value="Value" />
                                  <Checkbox
                                      label="Custom icon"
                                      checked
                                      uncheckedIcon="star-border"
                                      checkedIcon="star"
                                      value="Value"
                                  />
                                  <Checkbox label="Disabled unchecked" disabled value="Value" />
                                  <Checkbox label="Disabled checked" checked disabled value="Value" />
                                  <Checkbox label="I Agree" value="agree" checked={true}/>

                     </View>
                     {/* END TO MAKE CHECKBOX VIEW */}

              </ScrollView>
         </SafeAreaView>
      </Container>
    );
  }
}
