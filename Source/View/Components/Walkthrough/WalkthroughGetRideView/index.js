import React, { Component } from 'react';
import {Text, View, Image, StatusBar,StyleSheet, Platform, ImageBackground,Dimensions,TouchableOpacity, BackHandler, I18nManager} from 'react-native';
import {Container, Right, Header,Left, Body } from 'native-base';
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


export default class WalkthroughGetRide extends Component {

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
        image: GlobalInclude.Image2,
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        image:  GlobalInclude.Image3,
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 3,
        image:  GlobalInclude.Image4,
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 4,
        image:  GlobalInclude.Image5,
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
            <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="#6f6f6f"/>
          </TouchableOpacity>
        </Left>
      {/* END TO SETUP LEFT VIEW */}

      {/* BEGIN TO SETUP BODY VIEW */}
        <Body style={styles.body}>
        </Body>
      {/* END TO SETUP BODY VIEW */}

      {/* BEGIN TO SETUP RIGHT VIEW */}
        <Right style={styles.right}>
          <TouchableOpacity onPress={()=> alert("Skip is clicked")}>
            <Text style={styles.skip_txt}>Skip</Text>
          </TouchableOpacity>
        </Right>
      {/* END TO SETUP RIGHT VIEW */}
       </Header>
    {/* END TO SETUP HEADER VIEW */}

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
       </View>
    {/* END TO SETUP SWIPER VIEW */}

    {/* BEGIN TO SETUP DISCOVER BUTTON VIEW */}
       <View style={styles.btnsec}>
         <TouchableOpacity onPress={()=> alert("Discover Button Click")} style={styles.discover_bg}>
           <Text style={styles.discover_txt}>DISCOVER</Text>
         </TouchableOpacity>
       </View>
    {/* END TO SETUP DISCOVER BUTTON VIEW */}
    </Container>
    );
  }
}
// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  container: {
		backgroundColor: 'white',
		width: (Dimensions.get("window").width),
		height: (Dimensions.get("window").height)
	},
	back_arrow:{
		width: 30,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	header: {
		backgroundColor: 'rgba(0,0,0,0)',
		width: Dimensions.get("window").width,
		flexDirection: 'row',
		borderBottomColor: 'rgba(0,0,0,0)',
		height: (Dimensions.get("window").height * 0.1),
		elevation: 0,
		paddingTop: (Dimensions.get("window").height * 0.05),
		paddingLeft: (Dimensions.get("window").width * 0.05),
		paddingRight: (Dimensions.get("window").width * 0.05),
	},
  left: {
		flex: 0.5,
	},
	right: {
		flex: 0.5
	},
	body: {
		flex: 3,
		alignSelf: 'center'
	},
	skip_txt: {
		fontFamily: font_type.FontBold,
		fontSize: moderateScale(16),
		color: '#6f6f6f',
		textAlign: 'right',
	},
  slidesec:{
		height: (Dimensions.get("window").height*0.78),
		backgroundColor: 'rgba(0,0,0,0)'
	},
  btnsec:{
		height: (Dimensions.get("window").height*0.12),
		justifyContent: 'center',
		backgroundColor: 'rgba(0,0,0,0)'
	},
  slide: {
		height: (Dimensions.get("window").height*0.78),
		backgroundColor: 'rgba(0,0,0,0)'
	},
  slider_image: {
		resizeMode: 'cover',
		height: (Dimensions.get("window").height * 0.44),
		width: (Dimensions.get("window").height * 0.44),
		borderRadius: (Dimensions.get("window").height * 0.22),
		alignSelf: 'center',
		...Platform.select({
        ios: {
          marginTop: (Dimensions.get("window").height * 0.04),
        },
        android: {
          marginTop: (Dimensions.get("window").height * 0.02),
        }
    }),
	},
  content_style: {
		marginTop: (Dimensions.get("window").height * 0.07),
	},
  headertext: {
		fontFamily: font_type.FontLight,
		backgroundColor:'rgba(0,0,0,0)',
		textAlign:'center',
		alignSelf:'center',
		fontSize:moderateScale(21),
		width :(Dimensions.get("window").width) * .85,
		color:'#363636',
	},
	desctext: {
		fontFamily: font_type.FontLight,
		backgroundColor:'rgba(0,0,0,0)',
		textAlign:'center',
		alignSelf:'center',
		fontSize:moderateScale(11),
		width :(Dimensions.get("window").width) * 0.7,
		color:'rgba(54,54,54,0.8)',
		marginTop: (Dimensions.get("window").height * 0.03)
	},
  dot:{
		backgroundColor:'rgba(111,111,111,0.3)',
		marginTop: (Dimensions.get("window").height * 0.005),
		width:  (Dimensions.get("window").width * 0.02),
		height: (Dimensions.get("window").width * 0.02),
		borderRadius: (Dimensions.get("window").width * 0.01),
		marginLeft: (Dimensions.get("window").width * 0.005),
		marginRight: (Dimensions.get("window").width * 0.005),
	},
	active_dot:{
		backgroundColor:'#6f6f6f',
		width:  (Dimensions.get("window").width * 0.02),
		height: (Dimensions.get("window").width * 0.02),
		borderRadius: (Dimensions.get("window").width * 0.01),
		marginLeft: (Dimensions.get("window").width * 0.005),
		marginRight: (Dimensions.get("window").width * 0.005),
		marginTop: (Dimensions.get("window").height * 0.005),
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
	},
  discover_txt: {
		fontFamily: font_type.FontBold,
		fontSize: moderateScale(12),
		color: 'white',
		textAlign: 'center'
	},
});
// END TO MAKE STYLE
