/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet,Text,View,ScrollView,SafeAreaView} from 'react-native';
import {Container,Toast} from "native-base";
import {RadioButton} from 'react-native-material-ui';
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";

type Props = {};

export default class MaterialRadioButton extends Component<Props> {

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

                        {/* BEGIN TO MAKE RADIO BUTTON */}
                        <View style={styles.container}>
                            <RadioButton
                            label="Unchecked"
                            checked={this.state.checked}
                            value="Value"
                            onCheck={checked => this.setState({ checked })}
                            />

                            <RadioButton checked={true} label="Checked by default" checked value="Value" onCheck={checked => console.log(checked)}/>

                            <RadioButton
                            label="Custom icon"
                            checked
                            uncheckedIcon="star-border"
                            checkedIcon="star"
                            value="Value"
                             onCheck={checked => console.log(checked)}
                            />

                            <RadioButton label="Disabled unchecked" disabled value="Value"  onCheck={checked => console.log(checked)}/>

                            <RadioButton label="Disabled checked" checked disabled value="Value"  onCheck={checked => console.log(checked)}/>
                        </View>
                        {/* END TO MAKE RADIO BUTTON */}


              </ScrollView>
         </SafeAreaView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 4,
    },
});
