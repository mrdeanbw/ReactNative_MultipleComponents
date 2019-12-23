/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet,Text,View,ScrollView,SafeAreaView,Alert} from 'react-native';
import {Container} from "native-base";
import {Card,CardTitle,CardContent,CardAction,CardButton,CardImage} from 'react-native-material-cards'
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";

type Props = {};

export default class MaterialCard extends Component<Props> {
  render() {

    return (
      <Container style={{backgroundColor:'#E8EAF6'}}>

            {/* BEGIN HEADER VIEW */}
            <GlobalInclude.Header header_name={this.props.navigation.getParam('menu_title', global.menu_title)} navigation = {this.props.navigation}/>
            {/* END HEADER VIEW */}

            <SafeAreaView style={{flex: 1,backgroundColor: '#E8EAF6'}}>
                <ScrollView style={GlobalInclude.GlobalStyle.scroll}>

                      {/* BEGIN TO MAKE CARD VIEW */}
                      <Card>
                            <CardImage
                              source={GlobalInclude.Image3} // source={{uri: 'http://placehold.it/480x270'}}
                              title="Lorem Ipsum"
                            />
                            <CardTitle
                              title="This is a title"
                              subtitle="This is subtitle"
                             />
                            <CardContent text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat, metus non aliquam viverra, neque velit semper mi, ac suscipit nunc lorem eget leo. Vivamus tempor nec risus eu feugiat. Sed nec enim a lacus bibendum hendrerit in vel nisi." />
                            <CardAction
                              separator={true}
                              inColumn={false}>
                                  <CardButton
                                    onPress={() => alert('You pressed Cancel button.')}
                                    title="cancel"
                                    color="red"
                                  />
                                  <CardButton
                                    onPress={() => alert('You pressed Done button.')}
                                    title="Done"
                                    color="green"
                                  />
                            </CardAction>
                          </Card>
                     {/* END TO MAKE CARD VIEW */}

              </ScrollView>
         </SafeAreaView>
      </Container>
    );
  }
}
