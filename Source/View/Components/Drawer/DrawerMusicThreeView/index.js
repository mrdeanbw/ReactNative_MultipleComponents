import React, { Component } from 'react';
import {View,StatusBar,Platform,TouchableOpacity,ScrollView,Image, I18nManager,StyleSheet,Dimensions} from 'react-native';
import { Container,Text,Header,Left, Body,Right} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// BEGIN TO SETUP FONT-TYPE AND FONT-SIZE
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const scale = size => (Dimensions.get("window").width / guidelineBaseWidth) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const font_type = {
    FontLight: 'Helvetica',
    FontBold : 'Helvetica-Bold'
};
// END TO SETUP FONT-TYPE AND FONT-SIZE

export default class DrawerMusicThree extends Component {
  constructor() {
  	super();
    this.state = {
    }
  }

  render() {
    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW
    return (

    <Container style={styles.container}>
      {/* BEGIN TO SETUP HEADER VIEW */}
        <Header style={styles.header}>
        {/* BEGIN TO SETUP LEFT VIEW */}
          <Left style={styles.left}>
            <TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
            {
              (I18nManager.isRTL)
              ?
                <FontAwesome name="angle-right" size={30} color="white"/>
              :
                <FontAwesome name="angle-left" size={30} color="white"/>
            }

            </TouchableOpacity>
          </Left>
        {/* END TO SETUP HEADER VIEW */}

        {/* BEGIN TO SETUP BODY VIEW */}
          <Body style={styles.body}>
          </Body>
        {/* END TO SETUP BODY VIEW */}
          <Right style={styles.right}/>
          </Header>
        {/* END TO SETUP HEADER VIEW */}
        <Text style={styles.maintxt}>TAP ON THE CATEGORY YOU LIKE</Text>
      <ScrollView horizontal={true}  style={styles.main_scroll}>
        {/* BEGIN TO SETUP OLDIES VIEW */}
          <View style={styles.mainview}>
            <View style={styles.oldies}>
              <TouchableOpacity onPress={() => alert('OLDIES BUTTON CLICK')} >
              <Text style={styles.txtmusic}>OLDIES</Text>
              </TouchableOpacity>
            </View>
          {/* END TO SETUP OLDIES VIEW */}

          {/* BEGIN TO SETUP POP VIEW */}
            <View style={styles.popbig}>
              <TouchableOpacity onPress={() => alert('POP BUTTON CLICK')} >
              <Text style={[styles.txtmusic,{fontSize: 25}]}>POP</Text>
              </TouchableOpacity>
            </View>
          {/* END TO SETUP POP VIEW */}

          {/* BEGIN TO SETUP REGGAE VIEW */}
            <View style={styles.reggae}>
              <TouchableOpacity onPress={() => alert('REGGAE BUTTON CLICK')} >
              <Text style={styles.txtmusic}>REGGAE</Text>
              </TouchableOpacity>
            </View>
          {/* END TO SETUP REGGAE VIEW */}

          {/* BEGIN TO SETUP REGGAE VIEW */}
            <View style={styles.electronic}>
              <TouchableOpacity onPress={() => alert('ELECTRONIC BUTTON CLICK')} >
              <Text style={{color: 'white',fontSize: 12}}>ELECTRONIC</Text>
              </TouchableOpacity>
            </View>
          {/* END TO SETUP REGGAE VIEW */}

          {/* BEGIN TO SETUP ROCK VIEW */}
            <View style={styles.rock}>
              <TouchableOpacity onPress={() => alert('ROCK BUTTON CLICK')} >
              <Text style={styles.txtmusic}>ROCK</Text>
              </TouchableOpacity>
            </View>
          {/* END TO SETUP ROCK VIEW */}

          {/* BEGIN TO SETUP POP VIEW */}
            <View style={styles.popsmall}>
              <TouchableOpacity onPress={() => alert('POP BUTTON CLICK')} >
              <Text style={styles.txtmusic}>POP</Text>
              </TouchableOpacity>
            </View>
          {/* END TO SETUP REGGAE VIEW */}

          {/* BEGIN TO SETUP LATIN VIEW */}
            <View style={styles.latin}>
              <TouchableOpacity onPress={() => alert('LATIN BUTTON CLICK')} >
              <Text style={styles.txtmusic}>LATIN</Text>
              </TouchableOpacity>
            </View>
          {/* END TO SETUP LATIN VIEW */}

          {/* BEGIN TO SETUP COUNTRY VIEW */}
            <View style={styles.country}>
              <Image style={styles.countryimg} source={require('./icon_country.png')}/>
                <TouchableOpacity onPress={() => alert('COUNTRY BUTTON CLICK')} >
                <Text style={styles.txtmusic}>COUNTRY</Text>
                </TouchableOpacity>
            </View>
          {/* END TO SETUP COUNTRY VIEW */}

          {/* BEGIN TO SETUP CLASSICAL VIEW */}
            <View style={styles.classical}>
              <TouchableOpacity onPress={() => alert('CLASSICAL BUTTON CLICK')} >
              <Text style={{color: 'white', fontSize: 12}}>CLASSICAL</Text>
              </TouchableOpacity>
            </View>
          {/* END TO SETUP CLASSICAL VIEW */}

          {/* BEGIN TO SETUP HEAVYMETAL VIEW */}
            <View style={styles.heavymetal}>
              <Image style={styles.countryimg} source={require('./icon_heavymetal.png')}/>
              <TouchableOpacity onPress={() => alert('HEAVY METAL BUTTON CLICK')} >
              <Text style={styles.txtmusic}>HEAVY METAL</Text>
              </TouchableOpacity>
            </View>
          {/* END TO SETUP HEAVYMETAL VIEW */}

          {/* BEGIN TO SETUP KPOP VIEW */}
            <View style={styles.kpop}>
              <TouchableOpacity onPress={() => alert('K-POP BUTTON CLCIK')} >
              <Text style={styles.txtmusic}>K-POP</Text>
              </TouchableOpacity>
            </View>
          {/* END TO SETUP KPOP VIEW */}

          {/* BEGIN TO SETUP RB VIEW */}
            <View style={styles.randb}>
              <TouchableOpacity onPress={() => alert('R&B BUTTON CLICK')} >
              <Text style={styles.txtmusic}>R&B</Text>
              </TouchableOpacity>
            </View>
          {/* END TO SETUP RB VIEW */}

          {/* BEGIN TO SETUP OPERA VIEW */}
            <View style={styles.opera}>
              <TouchableOpacity onPress={() => alert('OPERA BUTTON CLICK')} >
                <Text style={styles.txtmusic}>OPERA</Text>
              </TouchableOpacity>
            </View>
          {/* END TO SETUP OPERA VIEW */}

          {/* BEGIN TO SETUP FOLK VIEW */}
            <View style={styles.folk}>
              <TouchableOpacity onPress={() => alert('FOLK BUTTON CLICK')} >
              <Text style={styles.txtmusic}>FOLK</Text>
              </TouchableOpacity>
            </View>
          {/* END TO SETUP FOLK VIEW */}

          {/* BEGIN TO SETUP BLUES VIEW */}
            <View style={styles.blues}>
              <TouchableOpacity onPress={() => alert('BLUES BUTTON CLICK')} >
              <Text style={styles.txtmusic}>BLUES</Text>
              </TouchableOpacity>
            </View>
          {/* END TO SETUP BLUES VIEW */}

          {/* BEGIN TO SETUP JAZZ VIEW */}
            <View style={styles.jazz}>
              <TouchableOpacity onPress={() => alert('JAZZ BUTTON CLICK')} >
              <Text style={[styles.txtmusic,{fontSize: 25}]}>JAZZ</Text>
              </TouchableOpacity>
            </View>
          {/* END TO SETUP JAZZ VIEW */}

          {/* BEGIN TO SETUP TECHNO VIEW */}
            <View style={styles.techno}>
              <TouchableOpacity onPress={() => alert('TECHNO BUTTON CLICK')} >
              <Text style={styles.txtmusic}>TECHNO</Text>
              </TouchableOpacity>
            </View>
          {/* END TO SETUP TECHNO VIEW */}

          {/* BEGIN TO SETUP RAP VIEW */}
            <View style={styles.rap}>
              <TouchableOpacity onPress={() => alert('RAP BUTTON CLICK')} >
              <Text style={styles.txtmusic}>RAP</Text>
              </TouchableOpacity>
            </View>
          {/* END TO SETUP RAP VIEW */}

          {/* BEGIN TO SETUP FUNK VIEW */}
            <View style={styles.funk}>
              <TouchableOpacity onPress={() => alert('FUNK BUTTON CLICK')} >
              <Text style={styles.txtmusic}>FUNK</Text>
              </TouchableOpacity>
            </View>
          {/* END TO SETUP FUNK VIEW */}

          {/* BEGIN TO SETUP DISO VIEW */}
            <View style={styles.disco}>
              <TouchableOpacity onPress={() => alert('DISCO BUTTON CLCIK')} >
              <Text style={styles.txtmusic}>DISCO</Text>
              </TouchableOpacity>
            </View>
          {/* END TO SETUP DISO VIEW */}
          </View>
        </ScrollView>
      </Container>



    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff6347'
  },
  back_arrow: {
    width:30,
		justifyContent: 'center',
		alignItems: 'center'
  },
  header: {
    backgroundColor: 'transparent',
    height: 70,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
				paddingTop:10
			}
    }),
		elevation: 0
  },
  left: {
    flex: 0.5,
		backgroundColor: 'transparent',
  },
  right: {
    flex: 0.5
  },
  main_scroll:{
    height:Dimensions.get("window").height,
    backgroundColor: '#ff6347',
    marginTop: Dimensions.get("window").height*0.02,
  },
  mainview:{
    width:Dimensions.get("window").width*1.65,
    height:Dimensions.get("window").height,
    marginLeft: Dimensions.get("window").width*0.05,
  },
  maintxt:{
    fontSize: moderateScale(25),
    color: 'white',
    width:Dimensions.get("window").width*0.8,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Dimensions.get("window").width*0.1,
    backgroundColor: '#ff6347',
    marginRight: Dimensions.get("window").width*0.1,
	  fontFamily: font_type.FontBold,
  },
  txtmusic:{
    color: 'white',
	  fontFamily: font_type.FontBold,
    backgroundColor: 'transparent'
  },
  popbig:{
    backgroundColor: '#f29ac2',
    width:Dimensions.get("window").height*0.2,
    height:Dimensions.get("window").height*0.2,
    borderRadius: Dimensions.get("window").height*0.1,
    marginTop: Dimensions.get("window").height*0.135,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
  oldies:{
     backgroundColor: '#ff308e',
     width:Dimensions.get("window").height*0.14,
     height:Dimensions.get("window").height*0.14,
     borderRadius: Dimensions.get("window").height*0.070,
     marginLeft:  Dimensions.get("window").height*0.12,
     marginTop: Dimensions.get("window").height*0.01,
     position: 'absolute',
     justifyContent: 'center',
     alignItems: 'center'
  },
  reggae:{
      backgroundColor: '#8e44ad',
      width:Dimensions.get("window").height*0.14,
      height:Dimensions.get("window").height*0.14,
      borderRadius: Dimensions.get("window").height*0.07,
      marginTop: Dimensions.get("window").height*0.34,
      position: 'absolute',
      marginLeft:  Dimensions.get("window").height*0.06,
      justifyContent: 'center',
      alignItems: 'center'
   },
   electronic:{
      backgroundColor: '#a01252',
      width:Dimensions.get("window").height*0.14,
      height:Dimensions.get("window").height*0.14,
      borderRadius: Dimensions.get("window").height*0.07,
      marginLeft:  Dimensions.get("window").height*0.21,
      marginTop: Dimensions.get("window").height*0.13,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'
   },
   rock:{
      backgroundColor: '#ff308e',
      width:Dimensions.get("window").height*0.14,
      height:Dimensions.get("window").height*0.14,
      borderRadius: Dimensions.get("window").height*0.07,
      marginLeft:  Dimensions.get("window").height*0.19,
      marginTop: Dimensions.get("window").height*0.275,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'
   },
   popsmall:{
      backgroundColor: '#f971af',
      width:Dimensions.get("window").height*0.14,
      height:Dimensions.get("window").height*0.14,
      borderRadius: Dimensions.get("window").height*0.07,
      marginLeft:  Dimensions.get("window").height*0.125,
      marginTop: Dimensions.get("window").height*0.48,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'
   },
   latin:{
      backgroundColor: '#bb0c45',
      width:Dimensions.get("window").height*0.14,
      height:Dimensions.get("window").height*0.14,
      borderRadius: Dimensions.get("window").height*0.07,
      marginLeft:  Dimensions.get("window").height*0.245,
      marginTop: Dimensions.get("window").height*0.405,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'
   },
   country:{
     backgroundColor: '#ff308e',
     width:Dimensions.get("window").height*0.2,
     height:Dimensions.get("window").height*0.2,
     borderRadius: Dimensions.get("window").height*0.1,
     marginTop: Dimensions.get("window").height*0.546,
     marginLeft:  Dimensions.get("window").height*0.243,
     position: 'absolute',
     justifyContent: 'center',
     alignItems: 'center',

   },
   countryimg:{
     width:Dimensions.get("window").height*0.1,
     height:Dimensions.get("window").height*0.1,
     position: 'absolute'
   },
   classical:{
      backgroundColor: '#f971af',
      width:Dimensions.get("window").height*0.14,
      height:Dimensions.get("window").height*0.14,
      borderRadius: Dimensions.get("window").height*0.07,
      marginLeft:  Dimensions.get("window").height*0.323,
      marginTop: Dimensions.get("window").height*0.22,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'
   },
   heavymetal:{
     backgroundColor: '#ff308e',
     width:Dimensions.get("window").height*0.2,
     height:Dimensions.get("window").height*0.2,
     borderRadius: Dimensions.get("window").height*0.1,
     marginTop: Dimensions.get("window").height*0.022,
     marginLeft:  Dimensions.get("window").height*0.335,
     position: 'absolute',
     justifyContent: 'center',
     alignItems: 'center'
   },
   kpop:{
      backgroundColor: '#ff308e',
      width:Dimensions.get("window").height*0.14,
      height:Dimensions.get("window").height*0.14,
      borderRadius: Dimensions.get("window").height*0.07,
      marginLeft:  Dimensions.get("window").height*0.377,
      marginTop: Dimensions.get("window").height*0.349,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'
   },
   randb:{
      backgroundColor: '#f971af',
      width:Dimensions.get("window").height*0.14,
      height:Dimensions.get("window").height*0.14,
      borderRadius: Dimensions.get("window").height*0.07,
      marginLeft:  Dimensions.get("window").height*0.42,
      marginTop: Dimensions.get("window").height*0.483,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'
   },
   opera:{
      backgroundColor: '#ff308e',
      width:Dimensions.get("window").height*0.14,
      height:Dimensions.get("window").height*0.14,
      borderRadius: Dimensions.get("window").height*0.07,
      marginLeft:  Dimensions.get("window").height*0.465,
      marginTop: Dimensions.get("window").height*0.195,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'
   },
   folk:{
      backgroundColor: '#a01252',
      width:Dimensions.get("window").height*0.14,
      height:Dimensions.get("window").height*0.14,
      borderRadius: Dimensions.get("window").height*0.07,
      marginLeft:  Dimensions.get("window").height*0.52,
      marginTop: Dimensions.get("window").height*0.33,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'
   },
   blues:{
      backgroundColor: '#f29ac2',
      width:Dimensions.get("window").height*0.12,
      height:Dimensions.get("window").height*0.12,
      borderRadius: Dimensions.get("window").height*0.06,
      marginLeft:  Dimensions.get("window").height*0.562,
      marginTop: Dimensions.get("window").height*0.472,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'
   },
   jazz:{
     backgroundColor: '#8e44ad',
     width:Dimensions.get("window").height*0.24,
     height:Dimensions.get("window").height*0.24,
     borderRadius: Dimensions.get("window").height*0.12,
     marginLeft:  Dimensions.get("window").height*0.54,
     position: 'absolute',
     justifyContent: 'center',
     alignItems: 'center',
   },
   techno:{
      backgroundColor: '#bb0c45',
      width:Dimensions.get("window").height*0.14,
      height:Dimensions.get("window").height*0.14,
      borderRadius: Dimensions.get("window").height*0.07,
      marginLeft:  Dimensions.get("window").height*0.63,
      marginTop: Dimensions.get("window").height*0.24,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'
   },
   rap:{
      backgroundColor: '#8e44ad',
      width:Dimensions.get("window").height*0.15,
      height:Dimensions.get("window").height*0.15,
      borderRadius: Dimensions.get("window").height*0.075,
      marginLeft:  Dimensions.get("window").height*0.662,
      marginTop: Dimensions.get("window").height*0.379,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'
   },
   funk:{
      backgroundColor: '#ff308e',
      width:Dimensions.get("window").height*0.13,
      height:Dimensions.get("window").height*0.13,
      borderRadius: Dimensions.get("window").height*0.065,
      marginLeft:  Dimensions.get("window").height*0.748,
      marginTop: Dimensions.get("window").height*0.166,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'
   },
   disco:{
      backgroundColor: '#ff308e',
      width:Dimensions.get("window").height*0.14,
      height:Dimensions.get("window").height*0.14,
      borderRadius: Dimensions.get("window").height*0.07,
      marginLeft:  Dimensions.get("window").height*0.785,
      marginTop: Dimensions.get("window").height*0.295,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'
   },
});
// END TO MAKE STYLE
