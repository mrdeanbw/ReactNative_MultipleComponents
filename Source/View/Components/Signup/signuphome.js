
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

// BEGIN TO START SETUP MENU LIST
let renderMenuRow = [
 {
   "title":"Sign Up O1",
   "route":'Signup1'
 },
 {
   "title":"Sign Up O2",
   "route":'Signup2'
 },
 {
   "title":"Sign Up O3",
   "route":'Signup3'
 },
 {
   "title":"Sign Up 04",
   "route":'Signup4'
 },
 {
   "title":"Sign Up 05",
   "route":'Signup5'
 },
 {
   "title":"Sign Up 06",
   "route":'Signup6'
 },
 {
   "title":"Sign Up 07",
   "route":'Signup7'
 },
 {
   "title":"Sign Up 08",
   "route":'Signup8'
 },
 {
   "title":"Sign Up 09",
   "route":'Signup9'
 },
 {
   "title":"Sign Up 10",
   "route":'Signup10'
 },
 {
   "title":"Sign Up 11",
   "route":'Signup11'
 },
 {
   "title":"Sign Up 12",
   "route":'Signup12'
 },
 {
   "title":"Sign Up 13",
   "route":'Signup13'
 },
 {
   "title":"Sign Up 14",
   "route":'Signup14'
 },
 {
   "title":"Sign Up 15",
   "route":'Signup15'
 }
]
// END TO START SETUP MENU LIST

export default class SignupHome extends Component<Props> {

  // BEGIN TO SETUP REDIRECT TO FORM VIEW
  onMenuRow(data){
    this.props.navigation.navigate(data.route)
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
    height:renderMenuRow.length * 59,
    marginBottom:5
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
