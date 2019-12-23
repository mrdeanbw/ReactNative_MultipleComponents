import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, Dimensions,TouchableOpacity,StyleSheet, I18nManager} from 'react-native';
import { Container, Right, Header,Left,Body } from 'native-base';
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


export default class WalkthroughJourney extends Component {

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
      },
      {
        id: 2,
        image: GlobalInclude.Image2,
      },
      {
        id: 3,
        image: GlobalInclude.Image3,
      },
    ]

    return(
     <Container style={styles.container}>
    {/* BEGIN TO SETUP HEADER VIEW */}
      <Header style={styles.header}>
      {/* BEGIN TO SETUP LEFT VIEW */}
        <Left style={styles.left}>
          <TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
            <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="#6f6f6f"/>
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
                   </View>
                 )
               })
             }
         </Swiper>
        {/* END TO SETUP SWIPER VIEW */}

        {/* BEGIN TO SETUP HEADER AND DESCRIPTION TEXT VIEW */}
         <View style={styles.content_style}>
           <Text style={styles.headertext}>
            Discover new place you will love
           </Text>
           <Text style={styles.desctext}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           </Text>
         </View>
        {/* END TO SETUP HEADER AND DESCRIPTION TEXT VIEW */}
       </View>
       <View style={styles.btnsec}>
        {/* BEGIN TO SETUP DISCOVER VIEW */}
         <TouchableOpacity onPress={()=> alert("Discover Click")} style={styles.discover_bg}>
           <Text style={styles.discover_txt}>DISCOVER</Text>
         </TouchableOpacity>
        {/* END TO SETUP DISCOVER VIEW */}

        {/* BEGIN TO SETUP SKIP VIEW */}
         <Right>
         <TouchableOpacity onPress={()=> alert("Skip is clicked")}>
           <Text style={styles.skipTxt}>Skip</Text>
         </TouchableOpacity>
         </Right>
        {/* END TO SETUP SKIP VIEW */}
       </View>
    </Container>

    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
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
		borderBottomColor: 'rgba(0,0,0,0)',
		paddingTop: (Dimensions.get("window").height * 0.05),
		elevation: 0,
		paddingLeft: (Dimensions.get("window").width * 0.05),
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
		height: (Dimensions.get("window").height * 0.75),
		paddingLeft: (Dimensions.get("window").width * 0.08),
		paddingRight: (Dimensions.get("window").width * 0.08),
		backgroundColor: 'rgba(0,0,0,0)'
	},
	btnsec:{
		height: (Dimensions.get("window").height*0.15),
		backgroundColor: 'rgba(0,0,0,0)',
		borderTopWidth: 0,
		bottom: 0,
		flexDirection: 'row',
		width: (Dimensions.get("window").width),
	},
  slide: {
		height: (Dimensions.get("window").height * 0.65),
		backgroundColor: 'rgba(0,0,0,0)'
	},
  slider_image: {
		resizeMode: 'cover',
		height: (Dimensions.get("window").height * 0.65),
		width: Dimensions.get("window").width,
		backgroundColor: 'grey'
	},
  content_style: {
		marginTop: (Dimensions.get("window").height * 0.06),
	},
	headertext: {
		fontFamily: font_type.FontLight,
		textAlign:'center',
		alignSelf:'center',
		fontSize:moderateScale(21),
		width :(Dimensions.get("window").width) * .85,
		color:'#363636',
	},
  desctext: {
		fontFamily: font_type.FontLight,
		textAlign:'center',
		alignSelf:'center',
		fontSize:moderateScale(11),
		width :(Dimensions.get("window").width) * 0.7,
		color:'#6f6f6f',
		marginTop:20
	},
  dot:{
		backgroundColor:'rgba(255,255,255,0.4)',
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
  discover_bg: {
		backgroundColor:'#ff6347',
		alignSelf: 'center',
		justifyContent: 'center',
		paddingLeft: (Dimensions.get("window").width * 0.08),
		paddingRight: (Dimensions.get("window").width * 0.08),
		paddingTop: (Dimensions.get("window").width * 0.02),
		paddingBottom: (Dimensions.get("window").width * 0.02),
		borderRadius: (Dimensions.get("window").width * 0.06),
		marginLeft: (Dimensions.get("window").width * 0.35)
	},
  discover_txt: {
		fontFamily: font_type.FontBold,
		fontSize:moderateScale(12),
		color: 'white',
		textAlign: 'center'
	},
  skipTxt: {
		fontFamily: font_type.FontBold,
		fontSize: moderateScale(16),
		color: '#6f6f6f',
		textAlign: 'right',
		marginRight: (Dimensions.get("window").width * 0.08),
	}
});
// END TO MAKE STYLE
