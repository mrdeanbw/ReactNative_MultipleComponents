import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform,TouchableOpacity,BackHandler,ListView, I18nManager,StyleSheet,Dimensions } from 'react-native';
import { Container, Right, Header, Left, Body } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RNSwiper from './RNSwiper';
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";
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

export default class WalkthroughCaliforniaDream extends Component {

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

    //BEGIN TO SETUP DATASOURCE CONFIG
    const ds = new ListView.DataSource({rowHasChanged})
    this.state = {
       dataSource: ds.cloneWithRows(dataObjects),
       activeindicator: 0,
    };
 	}
  //END TO SETUP DATASOURCE CONFIG

  //BEGIN TO SETUP RENDERROW VIEW
   _renderRow (rowData) {
     var temp = ''
     if(rowData.flag==true){
       temp = styles.active_dot
     } else {
       temp = styles.dot
     }
     return (
       <View>
         <View style={temp}/>
       </View>
     )
   }
   //END TO SETUP RENDERROW VIEW

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
        image: GlobalInclude.Image2,
        flag: true
      },
      {
        id: 2,
        image: GlobalInclude.Image5,
      },
      {
        id: 3,
        image: GlobalInclude.Image9,
      },
      {
        id: 4,
        image:GlobalInclude.Image1,
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
          {/* END TO SETUP LEFT VIEW */}

          {/* BEGIN TO SETUP BODY VIEW */}
           <Body style={styles.body}>
           </Body>
          {/* END TO SETUP BODY VIEW */}
           <Right style={styles.right}/>
         </Header>
        {/* END TO SETUP HEADER VIEW */}

         <View style={styles.main_bg}>
          {/* BEGIN TO SETUP HEADER AND DESCRIPTION VIEW */}
           <Text style={styles.header_txt}>Lorem ipsum</Text>
           <Text style={styles.description_txt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus tincidunt justo, non feugiat nisl.</Text>
          {/* END TO SETUP HEADER AND DESCRIPTION VIEW */}

           <View style={styles.slidesec}>
           {/* BEGIN TO SETUP SWIPER VIEW */}
            <RNSwiper
               minimumScale={0.9}
               minimumOpacity={0.5}
               overlap={100}
               cardWidth={Dimensions.get("window").width* 0.7}
               duration={100}
               swipeThreshold={100}
               onSwipeUp={this.onSwipeUp}
               onSwipeDown={this.onSwipeDown}
               onSwipeRight={()=>this.onSwipeRight()}
               onSwipeLeft={()=>this.onSwipeLeft()}
               onPress={this.onPress}
               swiperDetails={data}>
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
            {/* END TO SETUP SWIPER VIEW */}

            {/* BEGIN TO SETUP INDICATOR VIEW */}
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
            {/* END TO SETUP INDICATOR VIEW */}
           </View>
        </View>
      </Container>
    );
  }
}
// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  container: {
		backgroundColor: '#ff6347',
		height: Dimensions.get("window").height
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
  main_bg: {
		height: (Dimensions.get("window").height * 0.9),
		backgroundColor: '#ff6347'
	},
  header_txt: {
		color: 'white',
		fontFamily: font_type.FontBold,
		fontSize: moderateScale(20),
		textAlign: 'center',
		marginTop: (Dimensions.get("window").height) * 0.03
	},
  description_txt: {
		width: (Dimensions.get("window").width)*0.70,
		alignSelf:'center',
		textAlign:'center',
		color: "#fff8",
		fontFamily: font_type.FontLight,
		fontSize: moderateScale(12),
		marginTop: (Dimensions.get("window").height) * 0.03
	},
  slidesec:{
		marginTop: (Dimensions.get("window").height) * 0.07,
		width: (Dimensions.get("window").width * 0.70),
		height: (Dimensions.get("window").height) * 0.65,
		alignSelf: 'center',
		backgroundColor: 'rgba(0,0,0,0)',
		borderRadius: 10,
		overflow: 'hidden'
	},
  slide: {
		backgroundColor: 'white',
		...Platform.select({
			ios:{
				marginLeft: -((Dimensions.get("window").width) * 0.3),
			}
		}),
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		shadowColor: 'black',
		shadowOpacity: 0.5,
		shadowOffset: {
			height: 5,
			width: 0,
		},
		elevation: 5, // android shadow
		borderWidth: 0,
		borderRadius: 10,
		overflow: 'hidden',
	},
  slider_image: {
		...Platform.select({
			android:{
				height: (Dimensions.get("window").height * 0.45),
				width: (Dimensions.get("window").width * 0.75),
				borderRadius: 10,
			},
			ios:{
				height: (Dimensions.get("window").height * 0.45),
				width: (Dimensions.get("window").width*0.55),
				borderRadius: 10,
			}
		}),
	},
  indicator_bg: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: (Dimensions.get("window").height) * 0.12
	},
  dot:{
		backgroundColor:'#6c7084',
		width:  (Dimensions.get("window").width * 0.02),
		height: (Dimensions.get("window").width * 0.02),
		borderRadius: (Dimensions.get("window").width * 0.01),
		marginBottom: (Dimensions.get("window").height * 0.025),
		marginLeft: (Dimensions.get("window").width * 0.005),
		marginRight: (Dimensions.get("window").width * 0.005),
	},
  active_dot:{
		backgroundColor: 'white',
		width:  (Dimensions.get("window").width * 0.02),
		height: (Dimensions.get("window").width * 0.02),
		borderRadius: (Dimensions.get("window").width * 0.01),
		marginBottom: (Dimensions.get("window").height * 0.025),
		marginLeft: (Dimensions.get("window").width * 0.005),
		marginRight: (Dimensions.get("window").width * 0.005),
	},
});
// END TO MAKE STYLE
