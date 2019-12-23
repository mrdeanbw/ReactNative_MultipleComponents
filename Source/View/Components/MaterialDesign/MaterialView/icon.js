/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet,Text,View,ScrollView,SafeAreaView,TouchableOpacity} from 'react-native';
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";
import {Container} from "native-base";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Zocial from 'react-native-vector-icons/Zocial'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Props = {};

export default class MaterialIcon extends Component<Props> {

  render() {

    return (
      <Container style={{backgroundColor:'#E8EAF6'}}>

            {/* BEGIN HEADER VIEW */}
            <GlobalInclude.Header header_name={this.props.navigation.getParam('menu_title', global.menu_title)} navigation = {this.props.navigation}/>
            {/* END HEADER VIEW */}

            <SafeAreaView style={{flex: 1,backgroundColor: '#E8EAF6'}}>
              <ScrollView style={GlobalInclude.GlobalStyle.scroll}>

                      {/* BEGIN TO MAKE ICON OF AntDesign */}
                      <View style={[GlobalInclude.GlobalStyle.card,{height:90}]}>
                          <Text style={GlobalInclude.GlobalStyle.textStyle}>AntDesign</Text>
                          <View style={styles.rowContainer}>
                              <View style={{flex:1,padding:5}}>
                                <AntDesign name="linechart" size={30} color="#900"  style={{alignSelf:'center'}} />
                              </View>
                              <View style={{flex:1,padding:5}}>
                                <AntDesign name="alipay-square" size={30} color="#900"  style={{alignSelf:'center'}} />
                              </View>
                              <View style={{flex:1,padding:5}}>
                                <AntDesign name="android" size={30} color="#900"  style={{alignSelf:'center'}} />
                              </View>
                              <View style={{flex:1,padding:5}}>
                                <AntDesign name="pay-circle-o1" size={30} color="#900" style={{alignSelf:'center'}} />
                              </View>
                              <View style={{flex:1,padding:5}}>
                                <AntDesign name="dashboard" size={30} color="#900" style={{alignSelf:'center'}} />
                              </View>
                          </View>
                      </View>
                      {/* END TO MAKE ICON OF AntDesign */}

                      {/* BEGIN TO MAKE ICON OF Entypo */}
                      <View style={[GlobalInclude.GlobalStyle.card,{height:90}]}>
                          <Text style={GlobalInclude.GlobalStyle.textStyle}>Entypo</Text>
                          <View style={styles.rowContainer}>
                              <View style={{flex:1,padding:5}}>
                                <Entypo name="add-user" size={30} color="#900"  style={{alignSelf:'center'}} />
                              </View>
                              <View style={{flex:1,padding:5}}>
                                <Entypo name="aircraft" size={30} color="#900"  style={{alignSelf:'center'}} />
                              </View>
                              <View style={{flex:1,padding:5}}>
                                <Entypo name="app-store" size={30} color="#900"  style={{alignSelf:'center'}} />
                              </View>
                              <View style={{flex:1,padding:5}}>
                                <Entypo name="bucket" size={30} color="#900" style={{alignSelf:'center'}} />
                              </View>
                              <View style={{flex:1,padding:5}}>
                                <Entypo name="creative-commons-noncommercial-eu" size={30} color="#900" style={{alignSelf:'center'}} />
                              </View>
                          </View>
                      </View>
                      {/* END TO MAKE ICON OF AntDesign */}

                      {/* BEGIN TO MAKE ICON OF EvilIcons */}
                      <View style={[GlobalInclude.GlobalStyle.card,{height:90}]}>
                          <Text style={GlobalInclude.GlobalStyle.textStyle}>EvilIcons</Text>
                          <View style={styles.rowContainer}>
                              <View style={{flex:1,padding:5}}>
                                <EvilIcons name="sc-pinterest" size={45} color="#900"  style={{alignSelf:'center'}} />
                              </View>
                              <View style={{flex:1,padding:5}}>
                                <EvilIcons name="sc-skype" size={45} color="#900"  style={{alignSelf:'center'}} />
                              </View>
                              <View style={{flex:1,padding:5}}>
                                <EvilIcons name="sc-linkedin" size={45} color="#900"  style={{alignSelf:'center'}} />
                              </View>
                              <View style={{flex:1,padding:5}}>
                                <EvilIcons name="sc-github" size={45} color="#900" style={{alignSelf:'center'}} />
                              </View>
                              <View style={{flex:1,padding:5}}>
                                <EvilIcons name="sc-telegram" size={45} color="#900" style={{alignSelf:'center'}} />
                              </View>
                          </View>
                      </View>
                      {/* END TO MAKE ICON OF EvilIcons */}

                      {/* BEGIN TO MAKE ICON OF EvilIcons */}
                      <View style={[GlobalInclude.GlobalStyle.card,{height:90}]}>
                          <Text style={GlobalInclude.GlobalStyle.textStyle}>Feather</Text>
                          <View style={styles.rowContainer}>
                              <View style={{flex:1,padding:5}}>
                                <Feather name="aperture" size={30} color="#900"  style={{alignSelf:'center'}} />
                              </View>
                              <View style={{flex:1,padding:5}}>
                                <Feather name="battery-charging" size={30} color="#900"  style={{alignSelf:'center'}} />
                              </View>
                              <View style={{flex:1,padding:5}}>
                                <Feather name="codepen" size={30} color="#900"  style={{alignSelf:'center'}} />
                              </View>
                              <View style={{flex:1,padding:5}}>
                                <Feather name="cpu" size={30} color="#900" style={{alignSelf:'center'}} />
                              </View>
                              <View style={{flex:1,padding:5}}>
                                <Feather name="linkedin" size={30} color="#900" style={{alignSelf:'center'}} />
                              </View>
                          </View>
                      </View>
                      {/* END TO MAKE ICON OF EvilIcons */}

                      {/* BEGIN TO MAKE ICON OF FontAwesome */}
                      <View style={[GlobalInclude.GlobalStyle.card,{height:90}]}>
                          <Text style={GlobalInclude.GlobalStyle.textStyle}>FontAwesome</Text>
                          <View style={styles.rowContainer}>
                              <View style={{flex:1,padding:5}}>
                                <FontAwesome name="rocket" size={30} color="#900"  style={{alignSelf:'center'}} />
                              </View>
                              <View style={{flex:1,padding:5}}>
                                <FontAwesome name="home" size={30} color="#900"  style={{alignSelf:'center'}} />
                              </View>
                              <View style={{flex:1,padding:5}}>
                                <FontAwesome name="user" size={30} color="#900"  style={{alignSelf:'center'}} />
                              </View>
                              <View style={{flex:1,padding:5}}>
                                <FontAwesome name="phone" size={30} color="#900" style={{alignSelf:'center'}} />
                              </View>
                              <View style={{flex:1,padding:5}}>
                                <FontAwesome name="gear" size={30} color="#900" style={{alignSelf:'center'}} />
                              </View>
                          </View>
                      </View>
                      {/* END TO MAKE ICON OF FontAwesome */}

                    {/* BEGIN TO MAKE ICON OF FontAwesome5 */}
                    <View style={[GlobalInclude.GlobalStyle.card,{height:90}]}>
                        <Text style={GlobalInclude.GlobalStyle.textStyle}>FontAwesome5</Text>
                        <View style={styles.rowContainer}>
                            <View style={{flex:1,padding:5}}>
                              <FontAwesome5 name="acquisitions-incorporated" size={30} color="#900"  style={{alignSelf:'center'}} />
                            </View>
                            <View style={{flex:1,padding:5}}>
                              <FontAwesome5 name="american-sign-language-interpreting" size={30} color="#900"  style={{alignSelf:'center'}} />
                            </View>
                            <View style={{flex:1,padding:5}}>
                              <FontAwesome5 name="ambulance" size={30} color="#900"  style={{alignSelf:'center'}} />
                            </View>
                            <View style={{flex:1,padding:5}}>
                              <FontAwesome5 name="amazon-pay" size={30} color="#900" style={{alignSelf:'center'}} />
                            </View>
                            <View style={{flex:1,padding:5}}>
                              <FontAwesome5 name="avianex" size={30} color="#900" style={{alignSelf:'center'}} />
                            </View>
                        </View>
                    </View>
                    {/* END TO MAKE ICON OF FontAwesome */}

                  {/* BEGIN TO MAKE ICON OF Zocial */}
                  <View style={[GlobalInclude.GlobalStyle.card,{height:90}]}>
                      <Text style={GlobalInclude.GlobalStyle.textStyle}>Zocial</Text>
                      <View style={styles.rowContainer}>
                          <View style={{flex:1,padding:5}}>
                            <Zocial name="amazon" size={30} color="#900"  style={{alignSelf:'center'}} />
                          </View>
                          <View style={{flex:1,padding:5}}>
                            <Zocial name="bitbucket" size={30} color="#900"  style={{alignSelf:'center'}} />
                          </View>
                          <View style={{flex:1,padding:5}}>
                            <Zocial name="evernote" size={30} color="#900"  style={{alignSelf:'center'}} />
                          </View>
                          <View style={{flex:1,padding:5}}>
                            <Zocial name="foursquare" size={30} color="#900" style={{alignSelf:'center'}} />
                          </View>
                          <View style={{flex:1,padding:5}}>
                            <Zocial name="paypal" size={30} color="#900" style={{alignSelf:'center'}} />
                          </View>
                      </View>
                  </View>
                  {/* END TO MAKE ICON OF Zocial */}

                {/* BEGIN TO MAKE ICON OF Foundation */}
                <View style={[GlobalInclude.GlobalStyle.card,{height:90}]}>
                    <Text style={GlobalInclude.GlobalStyle.textStyle}>Foundation</Text>
                    <View style={styles.rowContainer}>
                        <View style={{flex:1,padding:5}}>
                          <Foundation name="wheelchair" size={30} color="#900"  style={{alignSelf:'center'}} />
                        </View>
                        <View style={{flex:1,padding:5}}>
                          <Foundation name="elevator" size={30} color="#900"  style={{alignSelf:'center'}} />
                        </View>
                        <View style={{flex:1,padding:5}}>
                          <Foundation name="social-myspace" size={30} color="#900"  style={{alignSelf:'center'}} />
                        </View>
                        <View style={{flex:1,padding:5}}>
                          <Foundation name="lightbulb" size={30} color="#900" style={{alignSelf:'center'}} />
                        </View>
                        <View style={{flex:1,padding:5}}>
                          <Foundation name="social-youtube" size={30} color="#900" style={{alignSelf:'center'}} />
                        </View>
                    </View>
                </View>
                {/* END TO MAKE ICON OF Foundation */}

              {/* BEGIN TO MAKE ICON OF Ionicons */}
              <View style={[GlobalInclude.GlobalStyle.card,{height:90}]}>
                  <Text style={GlobalInclude.GlobalStyle.textStyle}>Ionicons</Text>
                  <View style={styles.rowContainer}>
                      <View style={{flex:1,padding:5}}>
                        <Ionicons name="ios-person" size={30} color="#900"  style={{alignSelf:'center'}} />
                      </View>
                      <View style={{flex:1,padding:5}}>
                        <Ionicons name="ios-alarm" size={30} color="#900"  style={{alignSelf:'center'}} />
                      </View>
                      <View style={{flex:1,padding:5}}>
                        <Ionicons name="ios-headset" size={30} color="#900"  style={{alignSelf:'center'}} />
                      </View>
                      <View style={{flex:1,padding:5}}>
                        <Ionicons name="ios-mail-unread" size={30} color="#900" style={{alignSelf:'center'}} />
                      </View>
                      <View style={{flex:1,padding:5}}>
                        <Ionicons name="ios-pulse" size={30} color="#900" style={{alignSelf:'center'}} />
                      </View>
                  </View>
              </View>
              {/* END TO MAKE ICON OF Ionicons */}

              {/* BEGIN TO MAKE ICON OF MaterialIcons */}
              <View style={[GlobalInclude.GlobalStyle.card,{height:90}]}>
                  <Text style={GlobalInclude.GlobalStyle.textStyle}>MaterialIcons</Text>
                  <View style={styles.rowContainer}>
                      <View style={{flex:1,padding:5}}>
                        <MaterialIcons name="ac-unit" size={30} color="#900"  style={{alignSelf:'center'}} />
                      </View>
                      <View style={{flex:1,padding:5}}>
                        <MaterialIcons name="add-a-photo" size={30} color="#900"  style={{alignSelf:'center'}} />
                      </View>
                      <View style={{flex:1,padding:5}}>
                        <MaterialIcons name="airplanemode-inactive" size={30} color="#900"  style={{alignSelf:'center'}} />
                      </View>
                      <View style={{flex:1,padding:5}}>
                        <MaterialIcons name="bluetooth-connected" size={30} color="#900" style={{alignSelf:'center'}} />
                      </View>
                      <View style={{flex:1,padding:5}}>
                        <MaterialIcons name="child-friendly" size={30} color="#900" style={{alignSelf:'center'}} />
                      </View>
                  </View>
              </View>
              {/* END TO MAKE ICON OF MaterialIcons */}

              {/* BEGIN TO MAKE ICON OF SimpleLineIcons */}
              <View style={[GlobalInclude.GlobalStyle.card,{height:90}]}>
                  <Text style={GlobalInclude.GlobalStyle.textStyle}>SimpleLineIcons</Text>
                  <View style={styles.rowContainer}>
                      <View style={{flex:1,padding:5}}>
                        <SimpleLineIcons name="graduation" size={30} color="#900"  style={{alignSelf:'center'}} />
                      </View>
                      <View style={{flex:1,padding:5}}>
                        <SimpleLineIcons name="present" size={30} color="#900"  style={{alignSelf:'center'}} />
                      </View>
                      <View style={{flex:1,padding:5}}>
                        <SimpleLineIcons name="basket-loaded" size={30} color="#900"  style={{alignSelf:'center'}} />
                      </View>
                      <View style={{flex:1,padding:5}}>
                        <SimpleLineIcons name="camrecorder" size={30} color="#900" style={{alignSelf:'center'}} />
                      </View>
                      <View style={{flex:1,padding:5}}>
                        <SimpleLineIcons name="paypal" size={30} color="#900" style={{alignSelf:'center'}} />
                      </View>
                  </View>
              </View>
              {/* END TO MAKE ICON OF SimpleLineIcons */}

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
        justifyContent:'space-between',
        alignItems:'center'
    },
});
// BEGIN TO MAKE STYLE
