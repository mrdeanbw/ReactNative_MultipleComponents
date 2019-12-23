import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform,Dimensions,TouchableOpacity, StyleSheet, BackHandler, I18nManager} from 'react-native';
import { Container, Icon, Right, Header, Left, Body } from 'native-base';
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


export default class WalkthroughChatApp extends Component {

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
        title: 'Welcome to the App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        image: GlobalInclude.Image2,
        title: 'Welcome to the App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 3,
        image: GlobalInclude.Image3,
        title: 'Welcome to the App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 4,
        image: GlobalInclude.Image4,
        title: 'Welcome to the App',
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
       <View style={styles.slidesec}>

       {/* BEGIN TO SETUP SWIPER VIEW */}
         <Swiper
           showsButtons={false}
           autoplay={true}
           autoplayTimeout={2.5}
           active_dot={<View style={styles.active_dot} />}
           dot={<View style={styles.dot} />} >
           {
            data.map((item, index) => {
               return (
                 <View style={styles.slide} key={index}>
                   <Image style={styles.logo_style} source={GlobalInclude.Image6}/>
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

                  {/* BEGIN TO SETUP IMAGES VIEW */}
                   <View style={styles.image_content}>
                      <View style={styles.image_shadow}>
                      <Image style={styles.image_style} source={GlobalInclude.Image7}/>
                      </View>

                      <View style={styles.image_shadow}>
                      <Image style={styles.image_style} source={GlobalInclude.Image8}/>
                      </View>

                      <View style={styles.image_shadow}>
                      <Image style={styles.image_style} source={GlobalInclude.Image9}/>
                      </View>
                   </View>
                  {/* END TO SETUP IMAGES VIEW */}

                  {/* BEGIN TO SETUP GETSTARTED VIEW */}
                   <TouchableOpacity style={styles.btnsec} onPress={()=>alert("Get started!")}>
                     <Text style={styles.button_text}>GET STARTED</Text>
                   </TouchableOpacity>
                  {/* END TO SETUP GETSTARTED VIEW */}
                 </View>
               )
             })
           }
         </Swiper>
        {/* END TO SETUP SWIPER VIEW */}
       </View>
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
  slidesec:{
		height: (Dimensions.get("window").height*0.9),
		position: 'relative',
  },
  btnsec:{
  	height: (Dimensions.get("window").height*0.09),
  	width: (Dimensions.get("window").width*0.84),
  	borderWidth: 0,
  	bottom: 0,
  	position: 'absolute',
  	backgroundColor: '#BD26FF',
  	justifyContent: 'center',
  	borderBottomLeftRadius: 5,
  	borderBottomRightRadius: 5,
  },
  slide: {
  	backgroundColor: 'white',
  	height: (Dimensions.get("window").height*0.66),
  	marginHorizontal: (Dimensions.get("window").width*0.08),
  	marginTop: (Dimensions.get("window").height * 0.07),
  	borderRadius: 5,
  	elevation: 5,
  	shadowColor: 'black',
  	shadowOpacity: 0.3,
  	shadowRadius: (Dimensions.get("window").width * 0.03),
  	shadowOffset: {
  		height: 5,
  		width: 0
  	},
  },
  content_style: {
  	marginTop: (Dimensions.get("window").height * 0.03),
  },
  headertext: {
  	fontFamily: font_type.FontBold,
  	backgroundColor:'rgba(0,0,0,0)',
  	textAlign:'center',
  	alignSelf:'center',
  	fontSize:moderateScale(18),
  	width: (Dimensions.get("window").width * 0.7),
  	color:'#363636',
  },
  desctext: {
  	fontFamily: font_type.FontLight,
  	backgroundColor:'rgba(0,0,0,0)',
  	textAlign:'center',
  	alignSelf:'center',
  	fontSize:moderateScale(11),
  	width: (Dimensions.get("window").width * 0.68),
  	color:'#6f6f6f',
  	marginTop:(Dimensions.get("window").height * 0.025)
  },
  button_text: {
  	fontFamily: font_type.FontBold,
  	textAlign:'center',
  	alignSelf:'center',
  	fontSize:moderateScale(18),
  	color:'white',
  },
  dot:{
  	backgroundColor:'#000000',
  	marginTop: (Dimensions.get("window").height * 0.015),
  	width:  (Dimensions.get("window").width * 0.02),
  	height: (Dimensions.get("window").width * 0.02),
  	borderRadius: (Dimensions.get("window").width * 0.01),
  	marginBottom: (Dimensions.get("window").height * 0.025),
  	marginLeft: (Dimensions.get("window").width * 0.005),
  	marginRight: (Dimensions.get("window").width * 0.005),
  },
  active_dot:{
  	backgroundColor:'#4cd964',
  	marginTop: (Dimensions.get("window").height * 0.015),
  	width:  (Dimensions.get("window").width * 0.02),
  	height: (Dimensions.get("window").width * 0.02),
  	borderRadius: (Dimensions.get("window").width * 0.01),
  	marginBottom: (Dimensions.get("window").height * 0.025),
  	marginLeft: (Dimensions.get("window").width * 0.005),
  	marginRight: (Dimensions.get("window").width * 0.005),
  },
  logo_style: {
  	width: (Dimensions.get("window").width * 0.25),
  	height: (Dimensions.get("window").width * 0.25),
  	alignSelf: 'center',
  	marginTop: (Dimensions.get("window").height * 0.04),
  	resizeMode: 'contain'
  },
  image_content: {
  	alignSelf: 'center',
  	alignItems: 'center',
  	marginTop: (Dimensions.get("window").height * 0.065),
  	flexDirection: 'row',
  	marginLeft: (Dimensions.get("window").width * 0.035),
  },
  image_style: {
  	width: (Dimensions.get("window").width * 0.12),
  	height: (Dimensions.get("window").width * 0.12),
  	borderRadius: (Dimensions.get("window").width * 0.06),
  	resizeMode: 'cover',
  	borderColor: 'white',
  	borderWidth: 2,
  },
  image_shadow: {
  	width: (Dimensions.get("window").width * 0.12),
  	height: (Dimensions.get("window").width * 0.12),
  	marginLeft: -(Dimensions.get("window").width * 0.035),
  	borderRadius: (Dimensions.get("window").width * 0.06),
  	elevation: 5,
  	shadowColor: 'black',
  	shadowOpacity: 0.3,
  	shadowRadius: (Dimensions.get("window").width * 0.005),
  	shadowOffset: {
  		height: 0,
  		width: -1
  	},
  }
});
// END TO MAKE STYLE
