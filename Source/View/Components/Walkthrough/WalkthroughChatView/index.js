import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform,Dimensions,TouchableOpacity,BackHandler, I18nManager,StyleSheet} from 'react-native';
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

export default class WalkthroughChat extends Component {

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
         autoplay={true}
         autoplayTimeout={2.5}
         active_dot={<View style={styles.active_dot} />}
         dot={<View style={styles.dot} />}>
           {
            data.map((item, index) => {
               return (
                 <View style={styles.slide} key={index}>
                   <Image source={GlobalInclude.Image5} style={styles.image_style}/>
                  {/* BEGIN TO SETUP TITLE AND DESCRIPTION VIEW */}
                   <Text style={styles.headertext}>
                    {item.title}
                   </Text>
                   <Text style={styles.desctext}>
                    {item.description}
                   </Text>
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
  container:{
		height: (Dimensions.get("window").height),
		backgroundColor: '#ff6347'
	},
	back_arrow:{
		width: 30,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
  },
	header: {
		backgroundColor: '#ff6347',
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
		height: (Dimensions.get("window").height),
		marginTop:(Dimensions.get("window").height * 0.12),
	},
  headertext: {
		fontFamily: font_type.FontBold,
		backgroundColor:'rgba(0,0,0,0)',
		textAlign:'center',
		alignSelf:'center',
		fontSize:moderateScale(24),
		width :(Dimensions.get("window").width) * .70,
		color:'white',
		marginTop: (Dimensions.get("window").width * 0.18)
	},
  desctext: {
		fontFamily: font_type.FontLight,
		backgroundColor:'rgba(0,0,0,0)',
		textAlign:'center',
		alignSelf:'center',
		fontSize:moderateScale(12),
		width :(Dimensions.get("window").width) * .70,
		color:'#b5def0',
		marginTop:(Dimensions.get("window").height * 0.028)
	},
  dot:{
		backgroundColor:'#000000',
		width:  (Dimensions.get("window").width * 0.02),
		height: (Dimensions.get("window").width * 0.02),
		borderRadius: (Dimensions.get("window").width * 0.01),
		marginLeft: (Dimensions.get("window").width * 0.005),
		marginRight: (Dimensions.get("window").width * 0.005),
		marginBottom:(Dimensions.get("window").height * 0.05)
	},
  active_dot:{
		backgroundColor:'white',
		width:  (Dimensions.get("window").width * 0.02),
		height: (Dimensions.get("window").width * 0.02),
		borderRadius: (Dimensions.get("window").width * 0.01),
		marginLeft: (Dimensions.get("window").width * 0.005),
		marginRight: (Dimensions.get("window").width * 0.005),
		marginBottom:(Dimensions.get("window").height * 0.05),
	},
  image_style: {
		height:(Dimensions.get("window").height * 0.3),
		width: (Dimensions.get("window").width * 0.95),
		alignSelf: 'center',
		resizeMode: 'contain'
	}
});
// END TO MAKE STYLE
