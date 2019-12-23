import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, StyleSheet,Dimensions,TouchableOpacity,BackHandler, I18nManager } from 'react-native';
import { Container,Right, Header, Left, Body } from 'native-base';
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

export default class WalkthroughCoffeeShop extends Component {

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
        title: "Lorem ipsum",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        title: "Lorem ipsum",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 3,
        title: "Lorem ipsum",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 4,
        title: "Lorem ipsum",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ]

    return(
     <Container style={styles.main}>
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

      {/* BEGIN TO SETUP SWIPER VIEW */}
       <Swiper
          showsButtons={false}
          autoplay={true}
          autoplayTimeout={2.5}
          active_dot={<View style={styles.active_dot}/>}
          dot={<View style={styles.dot} />}>
          {
             data.map((item, index) => {
              return (
               <View style={styles.slider} key={index}>
               {/* BEGIN TO SETUP TITLE AND DESCRIPTION VIEW */}
                <Text style={styles.headertext}>{item.title}</Text>
                <Text style={styles.desctext}>{item.description}</Text>
               {/* END TO SETUP TITLE AND DESCRIPTION VIEW */}

               {/* BEGIN TO SETUP IMAGE VIEW */}
                <View style={styles.image_layout}>
                  <Image style={styles.slider_image} source={require('./1.jpg')}/>
                </View>
               {/* END TO SETUP IMAGE VIEW */}
               </View>
              )
            })
          }
       </Swiper>
      {/* END TO SETUP SWIPER VIEW */}
    </Container>

    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  main: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#ff6347"
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
  slider: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.9,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  image_layout: {
    width: Dimensions.get("window").width,
    backgroundColor: 'rgba(0,0,0,0)',
    bottom: 0,
    position: 'absolute'
  },
  slider_image: {
    width: (Dimensions.get("window").width),
    height: (Dimensions.get("window").height) * 0.68,
    resizeMode: 'contain'
  },
  headertext: {
  	fontFamily: font_type.FontBold,
  	textAlign:'center',
  	fontSize: moderateScale(21),
  	color:'white',
  },
  desctext: {
  	fontFamily: font_type.FontLight,
  	textAlign:'center',
  	alignSelf:'center',
  	fontSize: moderateScale(11),
  	width :(Dimensions.get("window").width) * .75,
  	color:'#fff8',
  	marginTop: (Dimensions.get("window").height * 0.025)
  },
  dot:{
  	backgroundColor:'#6c7084',
    width:  (Dimensions.get("window").width * 0.02),
		height: (Dimensions.get("window").width * 0.02),
		borderRadius: (Dimensions.get("window").width * 0.01),
		marginLeft: (Dimensions.get("window").width * 0.005),
		marginRight: (Dimensions.get("window").width * 0.005),
    ...Platform.select({
        ios: {
          marginBottom:(Dimensions.get("window").height * 0.08)
        },
        android: {
          marginBottom:(Dimensions.get("window").height * 0.06)
        }
    }),
  },
  active_dot:{
  	backgroundColor:'white',
    width:  (Dimensions.get("window").width * 0.02),
		height: (Dimensions.get("window").width * 0.02),
		borderRadius: (Dimensions.get("window").width * 0.01),
		marginLeft: (Dimensions.get("window").width * 0.005),
		marginRight: (Dimensions.get("window").width * 0.005),
    ...Platform.select({
        ios: {
          marginBottom:(Dimensions.get("window").height * 0.08)
        },
        android: {
          marginBottom:(Dimensions.get("window").height * 0.06)
        }
    }),
  },
});
// END TO MAKE STYLE
