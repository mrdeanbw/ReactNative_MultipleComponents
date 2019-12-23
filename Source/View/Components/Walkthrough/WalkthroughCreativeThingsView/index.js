import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform,Dimensions,TouchableOpacity, BackHandler, I18nManager,StyleSheet} from 'react-native';
import { Container, Button, Right, Header, Left, Body } from 'native-base';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
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

export default class WalkthroughCreativeThings extends Component {

  constructor(props) {
 		super(props);
 		this.state = {
      index:0,
    };
 	}


  swipePages = () =>{
    if(this.state.index == 4){
      this.setState({index:0})
    }
    this.refs.swiper.scrollBy(1)
  }

  render(){
    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW

    var renderPagination = function(index, total) {
      return <View style={{}}><Text>{index}/{total}</Text></View>
    }



    var data = [
      {
        id: 1,
        image: GlobalInclude.Image1,
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        image:  GlobalInclude.Image2,
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 3,
        image:  GlobalInclude.Image3,
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 4,
        image:  GlobalInclude.Image4,
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 5,
        image:  GlobalInclude.Image5,
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ]

    return(
     <Container>
    {/* BEGIN TO SETUP LINEARGRADIENT VIEW */}
      <LinearGradient locations={[0.15,1]} colors={['#BD26FF','#3163FF']} style={styles.shadow_bg}>
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
       <Swiper showsButtons={false}
         autoplay={false}
         loop={true}
         ref="swiper"
         index={this.state.index}
         active_dot={<View style={styles.active_dot} />}
         dot={<View style={styles.dot} />}
         onIndexChanged={(index)=>this.setState({index})}>
         {
          data.map((item, index) => {
             return (
               <View style={styles.slide} key={index}>
                 <Text style={styles.headertext}>
                  {item.title}
                 </Text>
                 <Text style={styles.desctext}>
                  {item.description}
                 </Text>
                 <Text style={styles.steptext}>
                  Step {(this.state.index+1)}/5
                 </Text>
                 <Image source={item.image} style={styles.slider_image}/>
               </View>
             )
           })
         }
       </Swiper>
       {/* END TO SETUP SWIPER VIEW */}

      {/* BEGIN TO SETUP NEXT AND SKIP VIEW */}
       <View style={styles.btnsec}>
         <Button rounded onPress = {() => this.refs.swiper.scrollBy(1)} style={styles.next_botton}>
           <Text style={styles.next_text}>NEXT</Text>
         </Button>
         <Right>
         <TouchableOpacity onPress={() => alert('Skip')}>
           <Text style={styles.skip_text}>Skip</Text>
         </TouchableOpacity>
         </Right>
       </View>
      {/* END TO SETUP NEXT AND SKIP VIEW */}
      </LinearGradient>
    {/* END TO SETUP LINEARGRADIENT VIEW */}
    </Container>

    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  shadow_bg: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
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
	btnsec:{
		height: (Dimensions.get("window").height*0.1),
		justifyContent:'center',
		bottom: (Dimensions.get("window").height*0.02),
		flexDirection: 'row',
		width: (Dimensions.get("window").width * 0.85),
		alignSelf: 'center'
	},
  slide: {
		height: (Dimensions.get("window").height*0.8),
	},
	slider_image: {
		resizeMode: 'contain',
		height: (Dimensions.get("window").height * 0.4),
		width: (Dimensions.get("window").width * 0.8),
		alignSelf: 'center',
		marginTop: (Dimensions.get("window").height * 0.06)
	},
  headertext: {
		fontFamily: font_type.FontBold,
		backgroundColor:'rgba(0,0,0,0)',
		textAlign:'center',
		alignSelf:'center',
		fontSize:moderateScale(24),
		width: (Dimensions.get("window").width * 0.85),
		color:'white',
		marginTop: (Dimensions.get("window").height * 0.032),
	},
  desctext: {
		fontFamily: font_type.FontLight,
		backgroundColor:'rgba(0,0,0,0)',
		textAlign:'center',
		alignSelf:'center',
		fontSize:moderateScale(12),
		width: (Dimensions.get("window").width * 0.7),
		color:'white',
		marginTop: (Dimensions.get("window").height * 0.03),
	},
  steptext: {
		fontFamily: font_type.FontBold,
		backgroundColor:'rgba(0,0,0,0)',
		textAlign:'center',
		alignSelf:'center',
		fontSize:moderateScale(15),
		width: (Dimensions.get("window").width * 0.7),
		color:'white',
		marginTop: (Dimensions.get("window").height * 0.04)
	},
  dot:{
		backgroundColor:'#fff4',
		width:  (Dimensions.get("window").width * 0.018),
		height: (Dimensions.get("window").width * 0.018),
		borderRadius: (Dimensions.get("window").width * 0.009),
		marginLeft: (Dimensions.get("window").width * 0.004),
		marginRight: (Dimensions.get("window").width * 0.004),
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
		width:  (Dimensions.get("window").width * 0.018),
		height: (Dimensions.get("window").width * 0.018),
		borderRadius: (Dimensions.get("window").width * 0.009),
		marginLeft: (Dimensions.get("window").width * 0.004),
		marginRight: (Dimensions.get("window").width * 0.004),
		...Platform.select({
        ios: {
          marginBottom:(Dimensions.get("window").height * 0.08)
        },
        android: {
          marginBottom:(Dimensions.get("window").height * 0.06)
        }
    }),
	},
  next_botton: {
		backgroundColor:'#ff6347',
		width: (Dimensions.get("window").width * 0.35),
		...Platform.select({
        ios: {
          height: (Dimensions.get("window").height * 0.05),
        },
        android: {
          height: (Dimensions.get("window").height * 0.06),
        }
    }),
		alignSelf: 'center',
		justifyContent: 'center',
		marginLeft: (Dimensions.get("window").width * 0.24)
	},
	next_text: {
		fontFamily: font_type.FontBold,
		fontSize:moderateScale(13),
		color: '#ffffff',
	},
  skip_text: {
		fontFamily: font_type.FontBold,
		backgroundColor:'rgba(0,0,0,0)',
		color:'white',
		fontSize: moderateScale(15),
		textAlign: 'right'
	},
});
// END TO MAKE STYLE
