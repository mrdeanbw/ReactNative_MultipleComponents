/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text,View,ScrollView,SafeAreaView} from 'react-native';
import {Container,Toast} from "native-base";
import {ListItem} from 'react-native-material-ui';
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";
type Props = {};

export default class MaterialListView extends Component<Props> {

  render() {

    return (
      <Container style={{backgroundColor:'#E8EAF6'}}>

            {/* BEGIN HEADER VIEW */}
            <GlobalInclude.Header header_name={this.props.navigation.getParam('menu_title', global.menu_title)} navigation = {this.props.navigation}/>
            {/* END HEADER VIEW */}

            <SafeAreaView style={{flex: 1,backgroundColor: '#E8EAF6'}}>
                <ScrollView style={GlobalInclude.GlobalStyle.scroll}>

                      {/* BEGIN TO MAKE LIST VIEW WITH ONE LINE */}
                      <View style={[GlobalInclude.GlobalStyle.card,{height:50}]}>
                          <Text style={[GlobalInclude.GlobalStyle.textStyle,{paddingTop:10}]}>One line</Text>
                      </View>
                          <ListItem
                              divider
                              centerElement="Center element as a text"
                              onPress={() => {}}
                          />
                          <ListItem
                              divider
                              centerElement={{
                                  primaryText: 'Center element as an object',
                              }}
                              onPress={() => {}}
                          />
                          <ListItem
                              divider
                              centerElement="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                          />
                          <ListItem
                              divider
                              dense
                              centerElement="Center element as a text (dense)"
                          />
                      {/* END TO MAKE LIST VIEW WITH ONE LINE */}

                      {/* BEGIN TO MAKE LIST VIEW WITH TWO LINE */}
                      <View style={[GlobalInclude.GlobalStyle.card,{height:50}]}>
                          <Text style={[GlobalInclude.GlobalStyle.textStyle,{paddingTop:10}]}>Two lines</Text>
                      </View>
                          <ListItem
                              divider
                              dense
                              centerElement={{
                                  primaryText: 'Center element as an object (dense)',
                                  secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum',
                              }}
                          />
                          <ListItem
                              divider
                              centerElement={{
                                  primaryText: 'Center element as an object',
                                  secondaryText: 'Subtext',
                              }}
                          />
                      {/* END TO MAKE LIST VIEW WITH TWO LINE */}

                      {/* BEGIN TO MAKE LIST VIEW WITH TWO LINES WITH ICON */}
                      <View style={[GlobalInclude.GlobalStyle.card,{height:50}]}>
                          <Text style={[GlobalInclude.GlobalStyle.textStyle,{paddingTop:10}]}>Two lines with icon</Text>
                      </View>
                          <ListItem
                              divider
                              leftElement="person"
                              centerElement={{
                                  primaryText: 'Center element as an object',
                                  secondaryText: 'Subtext',
                              }}
                          />
                          <ListItem
                              divider
                              leftElement="person"
                              centerElement={{
                                  primaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                                  secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum',
                              }}
                              rightElement="info"
                              onPress={() => Toast.show({text: "List item pressed",buttonText: "Okay",duration: 2000})}
                              onRightElementPress={() => {
                                      Toast.show({text: "Right element pressed!",buttonText: "Okay",duration: 2000})
                              }}
                          />
                        {/* END TO MAKE LIST VIEW WITH TWO LINES WITH ICON */}

                        {/* BEGIN TO MAKE LIST VIEW WITH THREE LINES */}
                        <View style={[GlobalInclude.GlobalStyle.card,{height:50}]}>
                            <Text style={[GlobalInclude.GlobalStyle.textStyle,{paddingTop:10}]}>Three lines</Text>
                        </View>
                          <ListItem
                              divider
                              leftElement="person"
                              centerElement={{
                                  primaryText: 'Center element as an object',
                                  secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                              }}
                              numberOfLines={3}
                          />
                          <ListItem
                              divider
                              leftElement="person"
                              centerElement={{
                                  primaryText: 'Center element as an object',
                                  secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                                  tertiaryText: 'Praesent in ipsum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
                              }}
                          />
                          <ListItem
                              divider
                              leftElement="person"
                              centerElement={{
                                  primaryText: 'Ali Connors',
                                  secondaryText: 'Brunch this weekend?',
                                  tertiaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum.',
                              }}
                              style={{
                                  secondaryText: { color: 'gray' },
                              }}
                          />
                        {/* END TO MAKE LIST VIEW WITH THREE LINES */}

                        {/* BEGIN TO MAKE LIST VIEW WITH DYNAMIC NUMBER OF LINES */}
                        <View style={[GlobalInclude.GlobalStyle.card,{height:50}]}>
                            <Text style={[GlobalInclude.GlobalStyle.textStyle,{paddingTop:10}]}>Dynamic number Of Lines</Text>
                        </View>
                            <ListItem
                                divider
                                leftElement="person"
                                numberOfLines="dynamic"
                                centerElement={{
                                      primaryText: 'With dynamic second line',
                                      secondaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing. Pellentesque commodo ultrices diam. Praesent in ipsum',
                                }}
                                onPress={() => {}}
                            />
                        {/* END TO MAKE LIST VIEW WITH DYNAMIC NUMBER OF LINES */}

                        {/* BEGIN TO MAKE LIST VIEW WITH CUSTOM */}
                        <View style={[GlobalInclude.GlobalStyle.card,{height:50}]}>
                            <Text style={[GlobalInclude.GlobalStyle.textStyle,{paddingTop:10}]}>Custom</Text>
                        </View>
                            <ListItem
                                divider
                                leftElement="person"
                                centerElement={<Text>Custom center element</Text>}
                            />
                        {/* END TO MAKE LIST VIEW WITH CUSTOM */}

              </ScrollView>
         </SafeAreaView>
      </Container>
    );
  }
}
