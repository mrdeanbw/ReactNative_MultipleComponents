import React, { Component } from 'react';
import { Text, View, Image,StyleSheet, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity,BackHandler, I18nManager} from 'react-native';
import { Container, Right, Header, Left, Body } from 'native-base';
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


export default class WalkthroughFitness extends Component {

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
    {/* BEGIN TO SETUP IMAGEBACKGROUND VIEW */}
     <ImageBackground source={GlobalInclude.Image1} style={styles.image_container}>
      <View style={styles.slidesec}>
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
        {/* BEGIN TO SETUP BODY VIEW */}
         <Right style={styles.right}/>
       </Header>
       {/* END TO SETUP HEADER VIEW */}

      {/* BEGIN TO SETUP SWIPER VIEW */}
       <Swiper
         ref='swiper'
         showsButtons={false}
         loop={true}
         autoplay={false}
         active_dot={<View style={styles.active_dot} />}
         dot={<View style={styles.dot}/>}
         pagination_style={styles.pagination_style}>
           {
            data.map((item, index) => {
               return (
                 <View style={styles.slider} key={index}>
                     <Text style={styles.headertext}>{item.title}</Text>
                     <Text style={styles.desctext}>{item.description}</Text>
                </View>
               )
             })
           }
        </Swiper>
      {/* END TO SETUP SWIPER VIEW */}
       </View>
      </ImageBackground>
    {/* END TO SETUP IMAGEBACKGROUND VIEW */}

    {/* BEGIN TO SETUP NEXT BUTTON VIEW */}
      <TouchableOpacity style={styles.next_button}
          onPress = {() => this.refs.swiper.scrollBy(1)}>
          <Text style={styles.next_text}>NEXT</Text>
      </TouchableOpacity>
    {/* END TO SETUP NEXT BUTTON VIEW */}
    </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'column'
  },
  back_arrow:{
    width: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  image_container:{
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.91,
  },
  slidesec: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.91,
    backgroundColor: 'rgba(0,0,0,0.6)',
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
  next_button: {
    width: Dimensions.get("window").width,
    height: (Dimensions.get("window").height) * 0.09,
    backgroundColor: "#ff6347",
    justifyContent: 'center',
    alignItems: 'center',
  },
  next_text: {
    textAlign: 'center',
    color: 'white',
    alignSelf: 'center',
    fontSize: moderateScale(18),
    fontFamily: font_type.FontBold,
  },
  headertext: {
  	fontFamily: font_type.FontBold,
  	alignSelf:'center',
  	fontSize: moderateScale(24),
  	width :(Dimensions.get("window").width) * .85,
  	color:'white',
    marginTop: (Dimensions.get("window").height * 0.045),
    textAlign: 'left'
  },
  desctext: {
  	fontFamily: font_type.FontLight,
  	alignSelf:'center',
  	fontSize: moderateScale(14),
  	width :(Dimensions.get("window").width) * .85,
  	color:'white',
    marginTop: (Dimensions.get("window").height * 0.024),
    textAlign: 'left'
  },
  dot:{
  	backgroundColor:'#999999',
    width:  (Dimensions.get("window").width * 0.018),
		height: (Dimensions.get("window").width * 0.018),
		borderRadius: (Dimensions.get("window").width * 0.009),
		marginLeft: (Dimensions.get("window").width * 0.005),
		marginRight: (Dimensions.get("window").width * 0.005),
    marginBottom: (Dimensions.get("window").width * 0.008),
  },
  active_dot:{
  	backgroundColor:'#4cd964',
    width:  (Dimensions.get("window").width * 0.026),
		height: (Dimensions.get("window").width * 0.026),
		borderRadius: (Dimensions.get("window").width * 0.013),
		marginLeft: (Dimensions.get("window").width * 0.005),
		marginRight: (Dimensions.get("window").width * 0.005),
    marginBottom: (Dimensions.get("window").width * 0.008),
  },
  slider: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.28,
    bottom: 0,
    position: 'absolute',
    backgroundColor: 'transparent'
  },
  pagination_style: {
    left : (Dimensions.get("window").width * 0.068),
    right: null
  }
});
// END TO MAKE STYLE
