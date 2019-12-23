/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet,Text,SafeAreaView,TouchableOpacity,ScrollView,View,Image,StatusBar,Dimensions,I18nManager,Platform} from 'react-native';
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";
import {Header,Left,Body,Right} from "native-base";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
type Props = {};

export default class GlobalHeader extends Component<Props> {

  render() {

    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW

    return (



            <Header style={styles.header}>

                {/* BEGIN TO SETUP HEADER LEFT VIEW */}
                <Left style={styles.left}>
                  <TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
                    <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="#ffffff"/>
                  </TouchableOpacity>
                </Left>
                {/* END TO SETUP HEADER LEFT VIEW */}

                {/* BEGIN TO SETUP HEADER BODY VIEW */}
                <Body style={styles.body}>
                  <Text style={styles.text_title}>{this.props.navigation.getParam('menu_title')}</Text>
                </Body>
                {/* END TO SETUP HEADER BODY VIEW */}

                {/* BEGIN TO SETUP HEADER RIGHT VIEW */}
                <Right style={styles.right}/>
                {/* END TO SETUP HEADER RIGHT VIEW */}
            </Header>
    );
  }
}

// BEGIN TO SETUP STYLE
const styles = StyleSheet.create({

  list: {
    flex: 1,
    marginTop:10,
    backgroundColor:'white'
  },
  back_arrow: {
    width: 30,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  header: {
    backgroundColor: "#ff6347",
    height: Dimensions.get("window").height * 0.1,
    borderBottomWidth: 0,
    paddingTop: Dimensions.get("window").height * 0.03,
    elevation: 0,
    paddingLeft: Dimensions.get("window").width * 0.05,
    paddingRight: Dimensions.get("window").width * 0.05
  },
  left: {
    flex: 0.5,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  body: {
    flex: 3,
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0)'
  },
  text_title: {
    color: "white",
    fontSize:17,
    marginTop: Dimensions.get("window").height * 0.001,
    alignSelf: "center",

  },
  right: {
    flex: 0.5
  },
});
// END TO SETUP STYLE
