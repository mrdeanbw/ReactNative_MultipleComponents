/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet,Text,View,ScrollView,SafeAreaView,TouchableOpacity} from 'react-native';
import {Container} from "native-base";
import {TextButton,RaisedTextButton} from 'react-native-material-buttons';
import {Button} from 'react-native-material-ui';
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";

type Props = {};

/* eslint-disable react/prop-types */
let Strong = ({ children, ...props }) =>
  <Text style={styles.bold} {...props}>{children}</Text>
/* eslint-enable */

export default class MaterialButton extends Component<Props> {
  render() {


    return (
      <Container style={{backgroundColor:'#E8EAF6'}}>

            {/* BEGIN HEADER VIEW */}
            <GlobalInclude.Header header_name={this.props.navigation.getParam('menu_title', global.menu_title)} navigation = {this.props.navigation}/>
            {/* END HEADER VIEW */}

            <SafeAreaView style={{flex: 1,backgroundColor: '#E8EAF6'}}>
                <ScrollView style={GlobalInclude.GlobalStyle.scroll}>
                      {/* BEGIN TO START DEFAULT BUTTON CARD VIEW */}
                      <View style={GlobalInclude.GlobalStyle.button_card}>
                            <View style={styles.content}>
                              <Text style={styles.display}>default</Text>
                              <Text style={styles.text}>Buttons with default props, raised or flat, enabled or <Strong>disabled</Strong></Text>
                            </View>

                            <RaisedTextButton style={{ marginVertical: 4 }} title="default button" />
                            <RaisedTextButton style={{ marginVertical: 4 }} title="disabled button" disabled />
                            <TextButton style={{ marginVertical: 4 }} title="default flat button" />
                            <TextButton style={{ marginVertical: 4 }} title="disabled flat button" disabled />
                     </View>
                     {/* END TO START DEFAULT BUTTON CARD VIEW */}

                      {/* BEGIN TO START RAISED BUTTON CARD VIEW */}
                      <View style={GlobalInclude.GlobalStyle.button_card}>
                            <View style={styles.content}>
                              <Text style={styles.display}>raised</Text>
                              <Text style={styles.text}>Buttons with custom <Strong>color</Strong>, <Strong>titleColor</Strong>, increased <Strong>rippleDuration</Strong> and <Strong>rippleOpacity</Strong></Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                              <RaisedTextButton style={styles.button} rippleDuration={600} rippleOpacity={0.54} title='flat'   color='#039BE5' titleColor='white' />
                              <RaisedTextButton style={styles.button} rippleDuration={600} rippleOpacity={0.54} title='is'     color='#0288D1' titleColor='white' />
                              <RaisedTextButton style={styles.button} rippleDuration={600} rippleOpacity={0.54} title='boring' color='#0277BD' titleColor='white' />
                            </View>
                      </View>
                      {/* END TO START RAISED BUTTON CARD VIEW */}

                      {/* BEGIN TO START FLAT BUTTON CARD VIEW */}
                      <View style={GlobalInclude.GlobalStyle.button_card}>
                            <View style={styles.content}>
                              <Text style={styles.display}>flat</Text>
                              <Text style={styles.text}>Buttons with custom <Strong>titleColor</Strong> and <Strong>color</Strong></Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                              <TextButton style={{ margin: 4, marginLeft: 0 }} titleColor='#00796B' title='decline' />
                              <TextButton style={{ margin: 4 }} titleColor='#00695C' color='rgba(0, 0, 0, .05)' title='accept' />
                            </View>
                      </View>
                      {/* END TO START FLAT BUTTON CARD VIEW */}

                      {/* BEGIN TO MAKE FLAT BUTTON VIEW */}
                      <View style={[GlobalInclude.GlobalStyle.card,{height: 170}]}>
                          <Text style={GlobalInclude.GlobalStyle.textStyle}>Flat buttons</Text>
                                <View style={GlobalInclude.GlobalStyle.rowContainer}>
                                      <View style={{marginHorizontal: 8}}>
                                          <Button primary text="Primary" />
                                      </View>
                                      <View style={{marginHorizontal: 8}}>
                                          <Button accent text="Accent" />
                                      </View>
                                  </View>
                                  <View style={GlobalInclude.GlobalStyle.rowContainer}>
                                      <View style={{marginHorizontal: 8}}>
                                          <Button text="Default" />
                                      </View>
                                      <View style={{marginHorizontal: 8}}>
                                          <Button disabled text="Disabled" />
                                      </View>
                                  </View>
                      </View>
                      {/* END TO MAKE FLAT BUTTON VIEW */}

                      {/* BEGIN TO MAKE RAISED BUTTON VIEW */}
                      <View style={[GlobalInclude.GlobalStyle.card,{height: 170}]}>
                          <Text style={GlobalInclude.GlobalStyle.textStyle}>Raised buttons</Text>
                                <View style={GlobalInclude.GlobalStyle.rowContainer}>
                                      <View style={{marginHorizontal: 8}}>
                                          <Button raised primary text="Primary" />
                                      </View>
                                      <View style={{marginHorizontal: 8}}>
                                          <Button raised accent text="Accent" />
                                      </View>
                                </View>
                                <View style={GlobalInclude.GlobalStyle.rowContainer}>
                                    <View style={{marginHorizontal: 8}}>
                                        <Button raised text="Default" />
                                    </View>
                                    <View style={{marginHorizontal: 8}}>
                                        <Button raised disabled text="Disabled" />
                                    </View>
                                </View>
                      </View>
                      {/* END TO MAKE RAISED BUTTON VIEW */}

                      {/* BEGIN TO MAKE BUTTON WITH ICONS VIEW */}
                      <View style={[GlobalInclude.GlobalStyle.card,{height: 170}]}>
                          <Text style={GlobalInclude.GlobalStyle.textStyle}>With icons</Text>
                                <View style={GlobalInclude.GlobalStyle.rowContainer}>
                                      <View style={{marginHorizontal: 8}}>
                                          <Button primary text="Accept" icon="done" />
                                      </View>
                                      <View style={{marginHorizontal: 8}}>
                                          <Button accent text="Dismiss" icon="clear" />
                                      </View>
                                </View>
                                <View style={GlobalInclude.GlobalStyle.rowContainer}>
                                    <View style={{marginHorizontal: 8}}>
                                        <Button raised primary text="Done" icon="done" />
                                    </View>
                                    <View style={{marginHorizontal: 8}}>
                                        <Button raised accent text="Clear" icon="clear" />
                                    </View>
                                </View>
                      </View>
                      {/* END TO MAKE BUTTON WITH ICONS VIEW */}

              </ScrollView>
         </SafeAreaView>

      </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  button: {
    margin: 4,
  },
  display: {
    paddingHorizontal: 8,
    fontSize: 17,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, .87)',
  },
  text: {
    padding: 8,
    fontSize: 15,
    color: 'rgba(0, 0, 0, .54)',
  },
  content: {
    flex: 1,
    paddingVertical: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
});
// END TO MAKE STYLE
