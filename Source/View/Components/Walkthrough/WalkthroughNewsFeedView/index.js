import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform,StyleSheet,Dimensions,TouchableOpacity, ListView, I18nManager} from 'react-native';
import { Container, Icon, Right, Header, Left, Body } from 'native-base';
import Swiper from 'react-native-swiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RNSwiper from './RNSwiper';
const activeindicator= 0;

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

export default class WalkthroughNewsFeed extends Component {

  constructor(props) {
 		super(props);

     		this.state = {
          index: '',
        };
        const dataObjects = [
          {flag:true},
          {flag:false},
          {flag:false},
        ]
        const rowHasChanged = (r1, r2) => r1 !== r2

        // DataSource configured
        const ds = new ListView.DataSource({rowHasChanged})
        this.state = {
           dataSource: ds.cloneWithRows(dataObjects),
           activeindicator: 0,
        };
 	}

  //BEGIN TO SETUP ONSWIPEUP
  onSwipeUp(index){
    console.log("first");
    console.log(index)
  }
  //END TO SETUP ONSWIPEUP

  //BEGIN TO SETUP ONSWIPEDOWN
  onSwipeDown(index){
    console.log("second");
    console.log(index)
  }
  //END TO SETUP ONSWIPEDOWN

  //BEGIN TO SETUP ONSWIPELEFT
  onSwipeLeft(index){
   console.log("third");
   this.setState({activeindicator: (this.state.activeindicator + 1)})
   console.log(index)
  }
  //END TO SETUP ONSWIPELEFT

  //BEGIN TO SETUP ONSWIPERIGHT
  onSwipeRight(index){
   console.log("forth");
   this.setState({activeindicator: (this.state.activeindicator - 1)})
   console.log(index)
  }
  //END TO SETUP ONSWIPERIGHT

  //BEGIN TO SETUP ONPRESS
  onPress(index){
   console.log("Third");
   console.log(index)
  }
  //END TO SETUP ONPRESS

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
      },
      {
        id: 2,
        image: require('./2.png'),
      },
      {
        id: 3,
        image:require('./3.png'),
      },
      {
        id: 4,
        image:require('./4.png'),
      },
    ]
      var indicatordata = []
      for(var i=0; i<data.length;i++){
        indicatordata.push(
          <View key={i}>
          {
            (i == this.state.activeindicator) ?
            <View style={styles.active_dot}></View>
            :
            <View style={styles.dot}></View>
          }
          </View>
        )
      }
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
        {/* END TO SETUP HEADER VIEW */}

        {/* BEGIN TO SETUP BODY VIEW */}
          <Body style={styles.body}>
          </Body>
        {/* BEGIN TO SETUP BODY VIEW */}
          <Right style={styles.right}/>
        </Header>
      {/* END TO SETUP HEADER VIEW */}
        <View style={styles.content_sec}>
         <Text style={styles.headertext}>New Feeds</Text>
         <Text style={styles.desctext}>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</Text>
        {/* BEGIN TO SETUP SWIPER VIEW */}
         <View style={styles.slidesec}>
            <RNSwiper
              minimumScale={0.9}
              minimumOpacity={0.5}
              overlap={50}
              cardWidth={Dimensions.get("window").width * 0.65}
              duration={100}
              swipeThreshold={100}
              onSwipeUp={this.onSwipeUp}
              onSwipeDown={this.onSwipeDown}
              onSwipeRight={()=>this.onSwipeRight()}
              onSwipeLeft={()=>this.onSwipeLeft()}
              onPress={this.onPress}
              backgroundColor='red'
              swiperDetails={data}
              >
              {
               data.map((item, index) => {
                  return (
                    <View style={styles.slide} key={index}>
                      <Image source={item.image} style={styles.slider_image}/>
                    </View>
                  )
                })
              }
            </RNSwiper>
          </View>
        {/* END TO SETUP SWIPER VIEW */}

        {/* BEGIN TO SETUP DOT VIEW */}
          <View style={styles.indicator_bg}>
            {
              data.map((item, index) => {
                return(
                  <View key={index}>
                  {
                    (index == this.state.activeindicator) ?
                    <View style={styles.active_dot}></View>
                    :
                    <View style={styles.dot}></View>
                  }
                  </View>
                )
              })
            }
          </View>
        {/* END TO SETUP DOT VIEW */}
        </View>

        <View style={styles.btn_sec}>
          <Text style={styles.ready_to_getstarted}>READY TO GET STARTED?</Text>

        {/* BEGIN TO SETUP FACEBOOK BUTTON VIEW */}
          <TouchableOpacity style={styles.lonin_with_fbbg}
              onPress = {() => alert('LogIn with Facebook button clicked.')}>
            <FontAwesome name="facebook" size={20} color="white"/>
            <Text style={styles.lonin_with_fbtwittertext}>Login with Facebook</Text>
          </TouchableOpacity>
        {/* END TO SETUP FACEBOOK BUTTON VIEW */}

        {/* BEGIN TO SETUP TWITTER BUTTON VIEW */}
          <TouchableOpacity style={styles.lonin_with_twitterbg}
              onPress = {() => alert('LogIn with Twitter button clicked.')}>
            <FontAwesome name="twitter" size={20} color="white"/>
            <Text style={styles.lonin_with_fbtwittertext}>Login with Twitter</Text>
          </TouchableOpacity>
        {/* END TO SETUP TWITTER BUTTON VIEW */}
        </View>

      </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ff6347",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  main: {
    width : Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor : "#ff6347"
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
  back_arrow:{
    width: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
  	marginTop: (Dimensions.get("window").height) * 0.03,
  	width: Dimensions.get("window").width ,
		alignSelf: 'center',
    backgroundColor: 'transparent',
  	overflow: 'hidden'
  },
  slide: {
  	height: (Dimensions.get("window").height*0.33),
  	width: (Dimensions.get("window").width*0.65),
  	backgroundColor: 'white',
  	shadowColor: 'black',
  	shadowOpacity: 0.5,
  	shadowOffset: {
  	height: 5,
  	width: 0,
    justifyContent: 'center',
  	alignItems: 'center',
  	alignSelf: 'center',
  	},
    overflow: 'hidden',
  },
  slider_image: {
  	height: (Dimensions.get("window").height * 0.33),
  	width: (Dimensions.get("window").width * 0.65),
  },
  headertext: {
  	fontFamily: font_type.FontBold,
  	width: Dimensions.get("window").width,
  	alignSelf:'center',
    textAlign : 'center',
  	fontSize:moderateScale(20),
  	color:'white',
  },
  desctext: {
  	fontFamily: font_type.FontLight,
  	alignSelf:'center',
  	fontSize:moderateScale(12),
  	width : ((Dimensions.get("window").width) * 0.70),
  	color:'white',
  	marginTop:Dimensions.get("window").height*0.03,
    textAlign:'center',
    marginBottom: Dimensions.get("window").height*0.02
  },
  lonin_with_fbbg: {
    backgroundColor: "#0054a6",
    borderRadius: 5,
    paddingTop: (Dimensions.get("window").height * 0.017),
    paddingBottom: (Dimensions.get("window").height * 0.015),
    alignItems: 'center',
    justifyContent: 'center',
    width: (Dimensions.get("window").width * 0.80),
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: (Dimensions.get("window").height * 0.057)
  },
  lonin_with_twitterbg: {
    backgroundColor: "#0691ce",
    borderRadius: 5,
    paddingTop: (Dimensions.get("window").height * 0.015),
    paddingBottom: (Dimensions.get("window").height * 0.015),
    alignItems: 'center',
    justifyContent: 'center',
    width: (Dimensions.get("window").width * 0.80),
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: (Dimensions.get("window").height * 0.025)
  },
  lonin_with_fbtwittertext: {
    color: 'white',
    textAlign: "center",
    fontSize: moderateScale(16),
    padding: (Dimensions.get("window").height * 0.003),
    left: (Dimensions.get("window").height * 0.008),
    fontFamily: font_type.FontLight,
  },
  ready_to_getstarted: {
    width: Dimensions.get("window").width,
    textAlign : 'center',
    fontSize : moderateScale(15),
    fontFamily : font_type.FontBold,
    color : 'white',
    marginTop: (Dimensions.get("window").height * 0.02)
  },
  dot:{
  	backgroundColor:'rgba(255,255,255,0.5)',
    width:  (Dimensions.get("window").width * 0.016),
    height: (Dimensions.get("window").width * 0.016),
    borderRadius: (Dimensions.get("window").width * 0.008),
    marginLeft: (Dimensions.get("window").width * 0.004),
    marginRight: (Dimensions.get("window").width * 0.004),
  },
  active_dot:{
  	backgroundColor:'white',
    width:  (Dimensions.get("window").width * 0.016),
    height: (Dimensions.get("window").width * 0.016),
    borderRadius: (Dimensions.get("window").width * 0.008),
    marginLeft: (Dimensions.get("window").width * 0.004),
    marginRight: (Dimensions.get("window").width * 0.004),
  },
  btn_sec: {
    height: Dimensions.get("window").height * 0.32
  },
  content_sec: {
    height: Dimensions.get("window").height * 0.58,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  indicator_bg: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: (Dimensions.get("window").height) * 0.04
  }
});
// END TO MAKE STYLE
