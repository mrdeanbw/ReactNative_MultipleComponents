
import React, {Component} from 'react';
import {StyleSheet,View,ScrollView,SafeAreaView,Image,Dimensions,ImageBackground,I18nManager,TouchableOpacity,Platform} from 'react-native';
import { TextButton } from 'react-native-material-buttons';
import LinearGradient from "react-native-linear-gradient";
import {Container,Text} from "native-base";
import SvgImageView from 'react-native-svg-img';
import Ripple from 'react-native-material-ripple';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import GlobalInclude from "../../../Global/GlobalInclude/globalinclude.js";

type Props = {};

let renderMenuRow = [
              {
                "title" : "Avtar",
                "route" : "MaterialAvtar",
                "more_info" : "https://github.com/xotahal/react-native-material-ui/blob/master/docs/Avatar.md",
                "demo" : "https://github.com/xotahal/react-native-material-ui-demo-app/blob/master/src/Avatar/index.js"
              },
              {
                "title" : "Action Button",
                "route" : "MaterialActionButton",
                "more_info" : "https://github.com/xotahal/react-native-material-ui/blob/master/docs/ActionButton.md",
                "demo" : "https://github.com/xotahal/react-native-material-ui-demo-app/blob/master/src/ActionButton/index.js"
              },
              {
                "title" : "All Icon",
                "route" : "AllIcon",
                "more_info" : "https://github.com/xotahal/react-native-material-ui/blob/master/docs/IconToggle.md",
                "demo" : "https://github.com/xotahal/react-native-material-ui-demo-app/blob/master/src/IconToggle/index.js"
              },
              {
                "title" : "Badge",
                "route" : "MaterialBadge",
                "more_info" : "https://github.com/xotahal/react-native-material-ui/blob/master/docs/Badge.md",
                "demo" : "https://github.com/xotahal/react-native-material-ui-demo-app/blob/master/src/Badge"
              },
              {
                "title" : "Button",
                "route" : "MaterialButton",
                "more_info" : "",
                "demo" : "https://github.com/n4kz/react-native-material-buttons AND https://github.com/xotahal/react-native-material-ui-demo-app/blob/master/src/Button/index.js"
              },
              {
                "title" : "Bottom Navigation",
                "route" : "BottomNavigation",
                "more_info" : "https://github.com/xotahal/react-native-material-ui/blob/master/docs/BottomNavigation.md",
                "demo" : "https://github.com/xotahal/react-native-material-ui-demo-app/blob/master/src/BottomNavigation,https://github.com/timomeh/react-native-material-bottom-navigation/blob/master/docs/Usage.md"
              },
              {
                "title" : "Card",
                "route" : "Card",
                "more_info" : "https://github.com/xotahal/react-native-material-ui/blob/master/docs/Card.md",
                "demo" : "https://github.com/xotahal/react-native-material-ui-demo-app/tree/master/src/Card"
              },
              {
                "title" : "Check Box",
                "route" : "Checkbox",
                "more_info" : "https://github.com/xotahal/react-native-material-ui/blob/master/docs/Checkbox.md",
                "demo" : "https://github.com/xotahal/react-native-material-ui-demo-app/blob/master/src/Checkbox/index.js"
              },
              {
                "title" : "Dialog",
                "route" : "Dialog",
                "more_info" : "https://github.com/xotahal/react-native-material-ui/blob/master/docs/Dialog.md",
                "demo" : "https://github.com/xotahal/react-native-material-ui-demo-app/blob/master/src/Dialog/index.js"
              },
              {
                "title" : "Icon Toggle",
                "route" : "IconToggle",
                "more_info" : "https://github.com/xotahal/react-native-material-ui/blob/master/docs/IconToggle.md",
                "demo" : "https://github.com/xotahal/react-native-material-ui-demo-app/blob/master/src/IconToggle/index.js"
              },
              {
                "title" : "ListView",
                "route" : "ListView",
                "more_info" : "https://github.com/xotahal/react-native-material-ui/blob/master/docs/ListItem.md",
                "demo" : "https://github.com/xotahal/react-native-material-ui-demo-app/blob/master/src/List/index.js"
              },
              {
                "title" : "Menu",
                "route" : "Menu",
                "more_info" : "https://github.com/mxck/react-native-material-menu",
                "demo" : "https://github.com/mxck/react-native-material-menu"
              },
              {
                "title" : "Radio Button",
                "route" : "RadioButton",
                "more_info" : "https://github.com/xotahal/react-native-material-ui/blob/master/docs/RadioButton.md",
                "demo" : "https://github.com/xotahal/react-native-material-ui-demo-app/blob/master/src/RadioButton/index.js"
              },
              {
                "title" : "Switch",
                "route" : "SwitchView",
                "more_info" : "https://github.com/recr0ns/react-native-material-switch",
                "demo" : "https://github.com/recr0ns/react-native-material-switch"
              },
              {
                "title" : "Textfield",
                "route" : "Textfield",
                "more_info" : "https://github.com/n4kz/react-native-material-textfield/blob/master/example/app.js",
                "demo" : "https://github.com/n4kz/react-native-material-textfield/blob/master/example/app.js"
              }
]
//END RENDERROW DATA


export default class SignupHome extends Component<Props> {

  // BEGIN TO SETUP REDIRECT TO FORM VIEW
  onMenuRow(data){
    this.props.navigation.navigate(data.route,{menu_title:data.title})
  }
  // END TO SETUP REDIRECT TO FORM VIEW

  componentWillMount(){
  }

  // BEGIN TO SETUP MENU BUTTON VIEW
  renderMenuRow(id,data) {
    return (
      <TouchableOpacity info style={styles.button} onPress={() => this.onMenuRow(data)} >
        <Text autoCapitalize="words" style={styles.btn_text}>
          {data.title}
        </Text>
      </TouchableOpacity>

    );
  }
  // END TO SETUP MENU BUTTON VIEW

  render() {
    return (
      <Container style={styles.container}>
      {/* BEGIN TO SETUP IMAGEBACKGROUND VIEW */}
        <ImageBackground source={GlobalInclude.Image7} style={styles.img_container}>
          {/* BEGIN TO SETUP LINEARGRADIENT VIEW */}
          <LinearGradient
            locations={[0.01, 0.4, 0.6]}
            colors={[ "rgba(0, 0, 0, 0.6)", "rgba(0, 0, 0, 0.4)","rgba(0, 0, 0, 0.3)"]}
            style={styles.gradient}>
                <SafeAreaView>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.menuRow}>
                              {
                                  renderMenuRow.map((datum,index) => { // This will render a row for each data element.
                                      return this.renderMenuRow(index,datum);
                                  })
                              }
                       </View>
                    </ScrollView>
                </SafeAreaView>
            </LinearGradient>
          {/* END TO SETUP LINEARGRADIENT VIEW */}
          </ImageBackground>
          {/* END TO SETUP IMAGEBACKGROUND VIEW */}

          {/* BEGIN TO SETUP BACK BUTTON VIEW */}
          <View style={styles.left_button}>
            <Ripple style={{width:60,height:60,justifyContent:'center',alignItems:'center'}} onPress={() => this.props.navigation.goBack()} >
                <SvgImageView source={GlobalInclude.ArrowIcon} width={25} height={25}/>
              </Ripple>
            </View>
          {/* END TO SETUP BACK BUTTON VIEW */}

        </Container>
      );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'column'
  },
  menuRow:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height:renderMenuRow.length * 60,
    marginBottom:7
  },
  gradient:{
    height:(Dimensions.get("window").height),
    width:(Dimensions.get("window").width),
    position: 'absolute'
  },
  img_container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  left_button: {
    position:'absolute',
    top:15,
    left:0,
    width:50,
    height:50,
    backgroundColor:'transparent',
    justifyContent:'center',
    alignSelf:'center'
  },
	button:{
		borderWidth: 1,
		borderColor: '#ffffff',
		backgroundColor:'transparent',
		alignSelf:'center',
		height: 45,
		width: 230,
		borderRadius:40,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 10
	},
	btn_text:{
		fontFamily: 'Helvetica-Bold',
		color:'white',
    fontSize:14
	}
});
// END TO MAKE STYLE
