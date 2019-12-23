import React, { Component } from 'react';
import {Text,View,Image,StatusBar,Platform,TouchableOpacity,I18nManager,StyleSheet,Dimensions} from 'react-native';
import {Container,Icon,Right,Header,Left,Body} from 'native-base';
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

export default class WalkthroughAppUsageHints extends Component {

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
        image: require('./1.png'),
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        image: require('./2.png'),
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 3,
        image: require('./3.png'),
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 4,
        image: require('./4.png'),
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

      {/* BEGIN TO SETUP SWIPER VIEW */}
        <Swiper showsButtons={true}
         autoplay={false}
         active_dot={<View style={styles.active_dot} />}
         dot={<View style={styles.dot} />}
         nextButton={
           <View style={styles.next_tip_bg}>
              <Text style={styles.next_tip_txt}>Next tip</Text>
              <Icon name={I18nManager.isRTL ? "ios-arrow-dropleft-outline" : "ios-arrow-dropright-outline"} style={styles.next_arrow_img} />
          </View>
         }
         prevButton={<Text></Text>}>
           {
            data.map((item, index) => {
               return (
                 <View style={styles.slide} key={index}>
                  <Image source={item.image} style={styles.image_style}/>
                {/* BEGIN TO SETUP TITLE AND DESCRIPTION VIEW */}
                  <View style={styles.content_style}>
                    <Text style={styles.headertext}>
                     {item.title}
                    </Text>
                    <Text numberOfLines={3} style={styles.desctext}>
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
    </Container>

    );
  }
}
// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  container: {
		backgroundColor: 'white',
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height
	},
	back_arrow:{
		width: 30,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	header: {
		backgroundColor: "#ff6347",
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
  slide: {
		backgroundColor: 'rgba(255, 99, 71, 0.3)',
		height: (Dimensions.get("window").height * 0.9),
		width: Dimensions.get("window").width,
	},
  image_style: {
		width: Dimensions.get("window").width * 0.7,
		height: Dimensions.get("window").height,
		resizeMode: 'contain',
		alignSelf: 'center',
		...Platform.select({
				ios: {
					marginTop: -(Dimensions.get("window").height * 0.08)
				},
				android: {
					marginTop: -(Dimensions.get("window").height * 0.05)
				}
		}),
	},
  content_style: {
		width: (Dimensions.get("window").width),
		backgroundColor: 'white',
		height: (Dimensions.get("window").height * 0.35),
		position: 'absolute',
		bottom: 0,
	},
  headertext: {
		fontFamily: font_type.FontBold,
		backgroundColor:'rgba(0,0,0,0)',
		textAlign:'center',
		alignSelf:'center',
		fontSize:moderateScale(22),
		width :(Dimensions.get("window").width) * .85,
		color:'#363636',
		marginTop: Dimensions.get("window").height * 0.045
	},
  desctext: {
		fontFamily: font_type.FontLight,
		backgroundColor:'rgba(0,0,0,0)',
		textAlign:'center',
		alignSelf:'center',
		fontSize:moderateScale(11),
		width :(Dimensions.get("window").width) * .70,
		color:'#6f6f6f',
		marginTop:(Dimensions.get("window").height * 0.04)
	},
	dot:{
		backgroundColor:'#d4d4d4',
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
	},
  next_tip_bg: {
		flexDirection:'row',
		justifyContent: 'center',
		marginTop:(Dimensions.get("window").height * 0.7),
		marginRight: (Dimensions.get("window").width * 0.34)
	},
  next_tip_txt: {
		fontFamily:font_type.FontBold,
		fontSize:moderateScale(18),
		color: '#0691ce',
		marginRight:(Dimensions.get("window").width * 0.015)
	},
  next_arrow_img: {
		color:'#0691ce',
		fontSize:moderateScale(18),
		marginTop:(Dimensions.get("window").width * 0.008),
	}
});
// END TO MAKE STYLE
