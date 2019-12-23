
import React, {Component} from 'react';
import {StyleSheet,View,ScrollView,SafeAreaView,Image,Dimensions,ImageBackground,I18nManager,TouchableOpacity,Platform} from 'react-native';
import { TextButton } from 'react-native-material-buttons';
import LinearGradient from "react-native-linear-gradient";
import {Container,Text} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import GlobalInclude from "../../Global/GlobalInclude/globalinclude.js";
type Props = {};

// BEGIN TO START SETUP MENU LIST
let renderMenuRow = [
 {
    "title":"Admob Design",
    "route":'AdMobHome'
 },
 {
   "title":"Profile Design",
   "route":'ProfileHome'
 },
 {
   "title":"Sign In / Login Design",
   "route":'LoginHome'
 },
 {
   "title":"Sign Up Design",
   "route":'SignupHome'
 },
 {
   "title":"TimeLine Design",
   "route":'TimeLineHome'
 },
 {
   "title":"Material Design",
   "route":'MaterialDesignHome'
 },
 {
   "title":"Drawer Design",
   "route":'DrawerHome'
 },
 {
   "title":"Walkthrough Design",
   "route":'WalkthroughHome'
 },
 {
   "title":"Ecommerce Design",
   "route":'EcommerceHome'
 },
 {
   "title":"Social",
   "route":'SocialHome'
 }
]
// END TO START SETUP MENU LIST

export default class Home extends Component<Props> {

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
          <ImageBackground source={GlobalInclude.Image2} style={styles.img_container}>
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
      height:renderMenuRow.length * 60
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
      fontSize:14,
      padding:5,
      textAlign:'center'
  	}
  });
  // END TO MAKE STYLE
