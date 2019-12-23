/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text,SafeAreaView,ScrollView,View,Image} from 'react-native';
import {Container} from "native-base";
import {Avatar} from 'react-native-material-ui';
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";
type Props = {};

export default class MaterialAvtar extends Component<Props> {

  render() {

    return (
      <Container style={{backgroundColor:'#E8EAF6'}}>

            {/* BEGIN HEADER VIEW */}
            <GlobalInclude.Header header_name={this.props.navigation.getParam('menu_title', global.menu_title)} navigation = {this.props.navigation}/>
            {/* END HEADER VIEW */}

            <SafeAreaView style={{flex: 1,backgroundColor: '#E8EAF6'}}>

                  <ScrollView style={GlobalInclude.GlobalStyle.scroll}>

                      {/* BEGIN TO MAKE AVTAR VIEW FOR IMAGE, ICON AND TEXT */}
                      <View style={[GlobalInclude.GlobalStyle.card,{flexDirection:'row'}]}>

                          {/* BEGIN TO MAKE AVTAR VIEW FOR IMAGE */}
                          <View style={GlobalInclude.GlobalStyle.avtarContainerView}>
                              <Text style={GlobalInclude.GlobalStyle.textStyle}>Image</Text>
                              <Avatar
                              size={40}
                              image={<Image
                                source={GlobalInclude.Image2} style={{width:70,height:70,alignSelf:'center',marginTop:20,borderRadius:35}} />
                              } />
                          </View>
                          {/* END TO MAKE AVTAR VIEW FOR IMAGE */}

                          {/* BEGIN TO MAKE AVTAR VIEW FOR ICON */}
                          <View style={GlobalInclude.GlobalStyle.avtarContainerView}>
                            <Text style={GlobalInclude.GlobalStyle.textStyle}>Icon</Text>
                            <Avatar icon="grade" />
                          </View>
                          {/* END TO MAKE AVTAR VIEW FOR ICON */}

                          {/* BEGIN TO MAKE AVTAR VIEW FOR TEXT */}
                          <View style={GlobalInclude.GlobalStyle.avtarContainerView}>
                            <Text style={GlobalInclude.GlobalStyle.textStyle}>Text</Text>
                            <Avatar text="Test" />
                          </View>
                          {/* END TO MAKE AVTAR VIEW FOR TEXT */}

                      </View>
                      {/* END TO MAKE AVTAR VIEW FOR IMAGE, ICON AND TEXT */}

                      <View style={[GlobalInclude.GlobalStyle.card,{flexDirection:'row'}]}>

                          {/* BEGIN TO MAKE AVTAR VIEW FOR ICON COLOR */}
                          <View style={GlobalInclude.GlobalStyle.avtarContainerView}>
                              <Text style={GlobalInclude.GlobalStyle.textStyle}>Icon Color</Text>
                              <Avatar icon="person" iconColor="blue" />
                          </View>
                          {/* END TO MAKE AVTAR VIEW FOR ICON COLOR */}

                          {/* BEGIN TO MAKE AVTAR VIEW FOR ICON SIZE */}
                          <View style={GlobalInclude.GlobalStyle.avtarContainerView}>
                              <Text style={GlobalInclude.GlobalStyle.textStyle}>Icon Size</Text>
                              <Avatar icon="history" iconSize={20} />
                          </View>
                          {/* END TO MAKE AVTAR VIEW FOR ICON SIZE */}

                          {/* BEGIN TO MAKE AVTAR VIEW FOR ICON SIZE & COLOR */}
                          <View style={GlobalInclude.GlobalStyle.avtarContainerView}>
                              <Text style={GlobalInclude.GlobalStyle.textStyle}>Icon Size & Color</Text>
                              <Avatar icon="mic" size={75} iconColor="red" iconSize={45}/>
                          </View>
                          {/* END TO MAKE AVTAR VIEW FOR ICON SIZE & COLOR */}


                      </View>
                  </ScrollView>
            </SafeAreaView>
      </Container>
    );
  }
}
