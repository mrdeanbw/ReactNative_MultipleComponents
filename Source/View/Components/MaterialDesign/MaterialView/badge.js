/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text,View,ScrollView,SafeAreaView,TouchableOpacity} from 'react-native';
import {Container} from "native-base";
import {Badge,Button,Icon,Avatar} from 'react-native-material-ui';
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";

type Props = {};

export default class MaterialBadge extends Component<Props> {
  render() {
    return (
      <Container style={{backgroundColor:'#E8EAF6'}}>

            {/* BEGIN HEADER VIEW */}
            <GlobalInclude.Header header_name={this.props.navigation.getParam('menu_title', global.menu_title)} navigation = {this.props.navigation}/>
            {/* END HEADER VIEW */}

            <SafeAreaView style={{flex: 1,backgroundColor: '#E8EAF6'}}>
                <ScrollView style={GlobalInclude.GlobalStyle.scroll}>
                      {/* BEGIN TO MAKE BADGE WITH ICON */}
                      <View style={[GlobalInclude.GlobalStyle.card,{height:120}]}>
                         <Text style={GlobalInclude.GlobalStyle.textStyle}>Badge with icons</Text>
                         <View style={GlobalInclude.GlobalStyle.rowContainer}>
                                <View>
                                    <Badge text="3" >
                                        <Icon name="star" />
                                    </Badge>
                                </View>
                                <View style={GlobalInclude.GlobalStyle.badgeContainer}>
                                    <Badge
                                        text="13"
                                        accent
                                    >
                                        <Icon name="person" />
                                    </Badge>
                                </View>
                                <View style={GlobalInclude.GlobalStyle.badgeContainer}>
                                    <Badge accent >
                                        <Icon name="warning" />
                                    </Badge>
                                </View>
                                <View style={GlobalInclude.GlobalStyle.badgeContainer}>
                                    <Badge
                                        text="13"
                                        accent
                                        style={{ container: { bottom: -8, right: -12 } }}
                                    >
                                        <Icon name="star" />
                                    </Badge>
                                </View>
                          </View>
                     </View>
                     {/* END TO MAKE BADGE WITH ICON */}

                      {/* BEGIN TO MAKE BADGE WITH BUTTON */}
                      <View style={[GlobalInclude.GlobalStyle.card,{height:130}]}>
                          <Text style={GlobalInclude.GlobalStyle.textStyle}>Badge with button</Text>
                          <View style={GlobalInclude.GlobalStyle.rowContainer}>
                                <View>
                                    <Badge accent text="8" >
                                        <Button text="Flat" />
                                    </Badge>
                                </View>
                                <View style={GlobalInclude.GlobalStyle.badgeContainer}>
                                    <Badge
                                        text="5"
                                        accent
                                        style={{ container: { top: -12, right: -20 } }}
                                    >
                                        <Button
                                            raised
                                            primary
                                            text="Raised"
                                        />
                                    </Badge>
                                </View>
                          </View>
                      </View>
                      {/* END TO MAKE BADGE WITH BUTTON */}

                      {/* BEGIN TO MAKE BADGE WITH TEXT */}
                      <View style={[GlobalInclude.GlobalStyle.card,{height:110}]}>
                          <Text style={GlobalInclude.GlobalStyle.textStyle}>Badge with text</Text>
                          <View style={GlobalInclude.GlobalStyle.rowContainer}>
                              <View>
                                  <Badge text="2" >
                                      <Text style={{ padding: 8 }}>Text badge</Text>
                                  </Badge>
                              </View>
                          </View>
                      </View>
                      {/* END TO MAKE BADGE WITH TEXT */}

                      {/* BEGIN TO MAKE BADGE WITH ICON AND TEXT */}
                      <View style={[GlobalInclude.GlobalStyle.card,{height:140}]}>
                          <Text style={GlobalInclude.GlobalStyle.textStyle}>Badge icon with text</Text>
                          <View style={GlobalInclude.GlobalStyle.rowContainer}>
                                  <View>
                                      <Badge
                                          size={24}
                                          icon="star"
                                          style={{ container: { bottom: -8, right: -12 } }}
                                      >
                                          <Avatar text="IN" />
                                      </Badge>
                                  </View>
                                  <View style={GlobalInclude.GlobalStyle.badgeContainer}>
                                      <Badge
                                          size={24}
                                          accent
                                          icon={{
                                              name: 'speaker-notes',
                                              color: 'white',
                                          }}
                                          style={{ container: { top: -8, right: -12 } }}
                                      >
                                          <Avatar text="TR" />
                                      </Badge>
                                  </View>
                           </View>
                      </View>
                      {/* END TO MAKE BADGE WITH ICON AND TEXT */}

                      {/* BEGIN TO MAKE BADGE WITH ICON AND STROKES */}
                      <View style={[GlobalInclude.GlobalStyle.card,{height:140}]}>
                          <Text style={GlobalInclude.GlobalStyle.textStyle}>Badge with strokes</Text>
                          <View style={GlobalInclude.GlobalStyle.rowContainer}>
                                  <View style={GlobalInclude.GlobalStyle.badgeContainer}>
                                      <Badge
                                          size={24}
                                          stroke={4}
                                          icon="star"
                                          style={{ strokeContainer: { bottom: -8, right: -12 } }}
                                      >
                                          <Avatar text="IN" />
                                      </Badge>
                                  </View>
                                  <View style={GlobalInclude.GlobalStyle.badgeContainer}>
                                      <Badge
                                          size={24}
                                          stroke={8}
                                          accent
                                          icon={{
                                              name: 'speaker-notes',
                                              color: 'white',
                                          }}
                                          style={{ strokeContainer: { top: -8, right: -12 } }}
                                      >
                                          <Avatar text="TR" />
                                      </Badge>
                                  </View>
                                  <View style={GlobalInclude.GlobalStyle.badgeContainer}>
                                      <Badge
                                          accent
                                          size={12}
                                          stroke={4}
                                          style={{ strokeContainer: { top: 0, right: 0 } }}
                                      >
                                          <Icon name="notifications" />
                                      </Badge>
                                  </View>
                            </View>
                      </View>
                      {/* END TO MAKE BADGE WITH STROKES */}

              </ScrollView>
         </SafeAreaView>
      </Container>
    );
  }
}
