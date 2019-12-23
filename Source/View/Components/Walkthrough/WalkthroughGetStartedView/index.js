import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, ImageBackground,StyleSheet,Dimensions,TouchableOpacity, ListView,BackHandler, I18nManager} from 'react-native';
import { Container, Button, Right,Header,Left,Body,Title,Content, Form} from 'native-base';
import Swiper from 'react-native-swiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";

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

export default class WalkthroughGetStarted extends Component {

  constructor(props) {
 		super(props);
 		this.state = {
      header: 'Let\'s get started!'
    };
 	}


  render(){
    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW

    var data = [
      {
        id: 1,
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 3,
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 4,
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ]

    return(
     <Container style={styles.container}>
      {/* BEGIN TO SETUP HEADER VIEW */}
       <Header style={styles.header}>
        {/* BEGIN TO SETUP LEFT VIEW */}
          <Left style={styles.left}>
            <TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
              <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="white"/>
            </TouchableOpacity>
          </Left>
        {/* END TO SETUP LEFT VIEW */}

        {/* BEGIN TO SETUP BODY VIEW */}
          <Body style={styles.body}>
          </Body>
        {/* END TO SETUP BODY VIEW */}
          <Right style={styles.right}/>
          </Header>
       {/* END TO SETUP HEADER VIEW */}

      {/* BEGIN TO SETUP HEADERTEXT VIEW */}
       <View style={styles.headersec}>
        <Text style={styles.headertext}>{this.state.header}</Text>
       </View>
      {/* END TO SETUP HEADERTEXT VIEW */}

      {/* BEGIN TO SETUP SWIPER VIEW */}
       <View style={styles.slidesec}>
         <Swiper showsButtons={false}
           autoplay={true}
           autoplayTimeout={2.5}
           active_dot={<View style={styles.active_dot} />}
           dot={<View style={styles.dot} />}>
             {
              data.map((item, index) => {
                 return (
                   <View key={index}>
                     <Image source={GlobalInclude.Image5} style={styles.img_style}/>
                   </View>
                 )
               })
             }
         </Swiper>
       </View>
      {/* END TO SETUP SWIPER VIEW */}

      {/* BEGIN TO SETUP SIGNUP AND SIGNIN VIEW */}
       <View style={styles.btnsec}>
         <TouchableOpacity onPress={()=> alert('Sign Up button clicked.')}><Text style={styles.button_text}>New? Sign Up</Text></TouchableOpacity>
         <TouchableOpacity onPress={()=> alert('Sign In button clicked.')}><Text style={styles.button_text}>Sign In</Text></TouchableOpacity>
       </View>
      {/* END TO SETUP SIGNUP AND SIGNIN VIEW */}
    </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
	container: {
		backgroundColor: '#ff6347',
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height
	},
	back_arrow:{
		width: 30,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	header: {
		backgroundColor: 'rgba(0,0,0,0)',
		height: Dimensions.get("window").height * 0.1,
		borderBottomWidth: 0,
		paddingTop: (Dimensions.get("window").height * 0.05),
		elevation: 0,
		paddingLeft: (Dimensions.get("window").width * 0.05),
		paddingRight: (Dimensions.get("window").width * 0.05),
	},
  left: {
		flex: 0.5
	},
  body: {
		flex: 3,
		alignSelf: 'center'
	},
  right: {
		flex: 0.5
	},
  headersec: {
		height: (Dimensions.get("window").height*0.06),
		justifyContent: 'center'
	},
  slidesec:{
		height: (Dimensions.get("window").height*0.75),
	},
  slide: {
		height: (Dimensions.get("window").height*0.75),
		justifyContent: 'center',
	},
  btnsec:{
		height: (Dimensions.get("window").height*0.09),
		width: (Dimensions.get("window").width * 0.85),
		flexDirection:'row',
		alignSelf: 'center',
		justifyContent:'space-between',
		marginTop: (Dimensions.get("window").height*0.01),
	},
  headertext: {
		fontFamily: font_type.FontBold,
		backgroundColor:'rgba(0,0,0,0)',
		textAlign:'center',
		alignSelf:'center',
		fontSize: moderateScale(24),
		width :(Dimensions.get("window").width * .9),
		color:'white',
	},
	dot:{
		backgroundColor:'#6c7084',
		width:  (Dimensions.get("window").width * 0.02),
		height: (Dimensions.get("window").width * 0.02),
		borderRadius: (Dimensions.get("window").width * 0.01),
		marginLeft: (Dimensions.get("window").width * 0.005),
		marginRight: (Dimensions.get("window").width * 0.005),
	},
	active_dot:{
		backgroundColor:'white',
		width:  (Dimensions.get("window").width * 0.02),
		height: (Dimensions.get("window").width * 0.02),
		borderRadius: (Dimensions.get("window").width * 0.01),
		marginLeft: (Dimensions.get("window").width * 0.005),
		marginRight: (Dimensions.get("window").width * 0.005),
	},
	button_text: {
		color: 'white',
		fontSize:moderateScale(18),
		fontFamily: font_type.FontBold,
		alignSelf:'center',
	},
	img_style: {
		height:(Dimensions.get("window").height * 0.65),
		marginTop: (Dimensions.get("window").height * 0.03),
		resizeMode:'contain',
		width: (Dimensions.get("window").width * 0.75),
		alignSelf: 'center'
	}
});
// END TO MAKE STYLE
