import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform,StyleSheet,Dimensions,TouchableOpacity,BackHandler, I18nManager} from 'react-native';
import { Container,Header,Left,Body,Right } from 'native-base';
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

export default class WalkthroughInvestment extends Component {

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
        image: GlobalInclude.Image5,
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
     {/* BEGIN TO SETUP HEADER VIEW */}
      <Header style={styles.header}>
      {/* BEGIN TO SETUP LEFT VIEW */}
         <Left style={styles.left}>
           <TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
             <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={25} color='white'/>
           </TouchableOpacity>
         </Left>
      {/* END TO SETUP LEFT VIEW */}

      {/* BEGIN TO SETUP BODY VIEW */}
         <Body style={styles.body}>
         </Body>
      {/* END TO SETUP HEADER VIEW */}
         <Right style={styles.right}/>
       </Header>
    {/* END TO SETUP HEADER VIEW */}

    {/* BEGIN TO SETUP SWIPER VIEW */}
       <View style={styles.slidesec}>
         <Swiper showsButtons={true}
           autoplay={false}
           autoplayTimeout={2.5}
           active_dot={<View style={styles.active_dot} />}
           dot={<View style={styles.dot} />}
           nextButton={<Text style={styles.next_txt}>Next</Text>}
           prevButton={<Text></Text>}>
             {
              data.map((item, index) => {
                 return (
                   <View style={styles.slide} key={index}>
                     <Image source={item.image} style={styles.slider_image}/>
                     <View style={styles.content_style}>
                       <Text style={styles.headertext}>
                        {item.title}
                       </Text>
                       <Text style={styles.desctext}>
                        {item.description}
                       </Text>
                     </View>
                   </View>
                 )
               })
             }
         </Swiper>
    {/* END TO SETUP SWIPER VIEW */}

    {/* BEGIN TO SETUP SKIP BUTTON VIEW */}
         <View style={styles.skip_btn_bg}>
          <TouchableOpacity onPress={()=> alert("Skip is clicked")}>
            <Text style={styles.skip_txt}>Skip</Text>
          </TouchableOpacity>
         </View>
    {/* END TO SETUP SKIP BUTTON VIEW */}
       </View>
    </Container>
  );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  container: {
		backgroundColor: '#ff6347',
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
  slidesec:{
			height: (Dimensions.get("window").height) * 0.90,
			position: 'relative',
			paddingLeft: (Dimensions.get("window").width * 0.08),
			paddingRight: (Dimensions.get("window").width * 0.08),
	},
  slide: {
		backgroundColor: 'white',
		height: (Dimensions.get("window").height) * 0.7,
	},
  slider_image: {
		resizeMode: 'cover',
		height: (Dimensions.get("window").height * 0.45),
		width: Dimensions.get("window").width,
	},
	content_style: {
		marginTop: (Dimensions.get("window").height * 0.06),
	},
	headertext: {
		fontFamily: font_type.FontBold,
		backgroundColor: 'rgba(0,0,0,0)',
		textAlign:'center',
		alignSelf:'center',
		fontSize: moderateScale(18),
		width : (Dimensions.get("window").width) * .70,
		color:'#363636',
	},
  desctext: {
		fontFamily: font_type.FontLight,
		backgroundColor:'rgba(0,0,0,0)',
		textAlign:'center',
		alignSelf:'center',
		fontSize: moderateScale(12),
		width : (Dimensions.get("window").width) * .70,
		color:'#6f6f6f',
		marginTop: (Dimensions.get("window").height * 0.02),
	},
	dot:{
		backgroundColor:'#8796a6',
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
  next_txt: {
		fontFamily: font_type.FontBold,
		fontSize: moderateScale(18),
		marginTop:(Dimensions.get("window").height * 0.75),
		color: 'white',
		alignSelf: 'flex-end'
	},
  skip_btn_bg: {
		position: 'absolute',
		bottom: (Dimensions.get("window").height * 0.055),
		paddingLeft:(Dimensions.get("window").width * 0.08)
	},
  skip_txt: {
		fontFamily: font_type.FontBold,
		fontSize: moderateScale(18),
		color: 'white'
	}
});
// END TO MAKE STYLE
