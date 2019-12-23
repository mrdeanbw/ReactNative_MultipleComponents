import React, { Component } from 'react';
import {Text,View,Image, StatusBar, Platform, TouchableOpacity,BackHandler, I18nManager,StyleSheet,Dimensions} from 'react-native';
import {Container } from 'native-base';
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

export default class WalkthroughDiscoverPlace extends Component {

  constructor(props) {
 		super(props);
 		this.state = {};
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
        image: GlobalInclude.Image1,
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        image: GlobalInclude.Image7,
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 3,
        image: GlobalInclude.Image3,
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 4,
        image: GlobalInclude.Image4,
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ]

    return(
     <Container style={styles.container}>
        <View style={styles.slidesec}>
        {/* BEGIN TO SETUP SWIPER VIEW */}
         <Swiper showsButtons={false}
           autoplay={true}
           autoplayTimeout={2.5}
           active_dot={<View style={styles.active_dot} />}
           dot={<View style={styles.dot} />}>
             {
              data.map((item, index) => {
                 return (
                   <View style={styles.slide} key={index}>
                     <Image source={item.image} style={styles.slider_image}/>
                    {/* BEGIN TO SETUP TITLE AND DESCRIPTION VIEW */}
                     <View style={styles.content_style}>
                       <Text style={styles.headertext}>
                        {item.title}
                       </Text>
                       <Text style={styles.desctext}>
                        {item.description}
                       </Text>
                     </View>
                    {/* END TO SETUP TITLE AND DESCRIPTION VIEW */}
                   </View>
                 )
               })
             }
         </Swiper>
      {/* END TO SETUP SWIPER VIEW */}
       </View>
      {/* BEGIN TO SETUP BACK VIEW */}
       <TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
         <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="black"/>
       </TouchableOpacity>
      {/* BEGIN TO SETUP BACK VIEW */}
    </Container>

    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  container: {
			backgroundColor: 'white',
			height: Dimensions.get("window").height,
			width: Dimensions.get("window").width
	},
	back_arrow:{
		width: 30,
		marginLeft: 20,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	slidesec: {
		backgroundColor: 'white',
		height: (Dimensions.get("window").height * 0.95),
		backgroundColor: 'rgba(0,0,0,0)'
	},
  slide: {
		backgroundColor: 'white',
		height: (Dimensions.get("window").height * 0.9),
		backgroundColor: 'rgba(0,0,0,0)'
	},
  slider_image: {
		resizeMode: 'cover',
		height: (Dimensions.get("window").height * 0.68),
		width: Dimensions.get("window").width,
		backgroundColor: 'grey'
	},
  content_style: {
		marginTop: (Dimensions.get("window").height * 0.04),
	},
  headertext: {
		fontFamily: font_type.FontLight,
		backgroundColor:'rgba(0,0,0,0)',
		textAlign:'center',
		alignSelf:'center',
		fontSize:moderateScale(21),
		width :(Dimensions.get("window").width) * .86,
		color:'#363636',
	},
	desctext: {
		fontFamily: font_type.FontLight,
		backgroundColor:'rgba(0,0,0,0)',
		textAlign:'center',
		alignSelf:'center',
		fontSize:moderateScale(11),
		width :(Dimensions.get("window").width) * .70,
		color:'#6f6f6f',
		marginTop:(Dimensions.get("window").height * 0.025)
	},
  dot:{
		backgroundColor:'#d4d4d4',
		width:  (Dimensions.get("window").width * 0.02),
		height: (Dimensions.get("window").width * 0.02),
		borderRadius: (Dimensions.get("window").width * 0.01),
		marginLeft: (Dimensions.get("window").width * 0.005),
		marginRight: (Dimensions.get("window").width * 0.005),
		marginBottom: (Dimensions.get("window").width * 0.008),
	},
	active_dot:{
		backgroundColor:'#6f6f6f',
		width:  (Dimensions.get("window").width * 0.02),
		height: (Dimensions.get("window").width * 0.02),
		borderRadius: (Dimensions.get("window").width * 0.01),
		marginLeft: (Dimensions.get("window").width * 0.005),
		marginRight: (Dimensions.get("window").width * 0.005),
		marginBottom: (Dimensions.get("window").width * 0.008),
	},
});
// END TO MAKE STYLE
