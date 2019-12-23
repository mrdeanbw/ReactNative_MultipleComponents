import React, { Component } from "react";
import {Text,Image,StatusBar,Platform,ImageBackground,Dimensions,TouchableOpacity,View,BackHandler,I18nManager,StyleSheet,Alert} from "react-native";
import {Container,Button,Right,Left,Content,Body,Header,Icon,Title} from "native-base";
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";

//GUIDELINE SIZES ARE BASED ON STANDARD ~5" SCREEN

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

export default class ProfileDiscovery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW



    return (
      <Container style={styles.main}>
        {/* BEGIN TO SETUP IMAGE AS A BACKGROUND */}
        <ImageBackground source={GlobalInclude.Image3} style={styles.img_container}>

        {/* BEGIN TO SETUP LINEARGRADIENT VIEW */}
          <LinearGradient
            locations={[0.6, 1]}
            colors={["transparent", "black"]}
            style={styles.gred}>
        {/* BEGIN TO SETUP HEADER VIEW */}
            <Header androidStatusBarColor={"transparent"} style={styles.header}>
              {/* BEGIN TO SETUP HEADER LEFT VIEW */}
                <Left style={styles.right}>
                    <TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
                      <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="white"/>
                    </TouchableOpacity>
                  </Left>
              {/* END TO SETUP HEADER LEFT VIEW */}

              {/* BEGIN TO SETUP HEADER BODY VIEW */}
              <Body style={styles.body}>
                <Title style={styles.title}>Profile</Title>
              </Body>
              {/* END TO SETUP HEADER BODY VIEW */}

              {/* BEGIN TO SETUP HEADER RIGHT VIEW */}
              <Right style={styles.right}>
                <Button transparent />
              </Right>
              {/* END TO SETUP HEADER RIGHT VIEW */}
            </Header>
        {/* END TO SETUP HEADER VIEW */}
            <View style={styles.profile}>
              <View style={styles.desc}>
              {/* BEGIN TO SETUP NAME AND ADDRESS VIEW */}
                <Text style={styles.name}>Lorem Ipsum</Text>
                <View style={styles.address}>
                  <Ionicons name="md-pin" color="#0691ce" style={{ fontSize: 21,marginTop:10 }}/>
                  <Text style={styles.addresstxt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </View>
              {/* END TO SETUP NAME AND ADDRESS VIEW */}
              </View>
              {/* BEGIN TO SETUP DESC VIEW */}
                <Text style={styles.desc_txt}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                  ullamcorper, nulla id efficitur dignissim, odio nisl porta
                  tortor, sit amet dictum quam massa sit amet justo
                </Text>
              {/* END TO SETUP DESC VIEW */}

              {/* BEGIN TO SETUP BOTTOM BUTTON VIEW */}
              <View style={styles.bottomicon}>
                {/* BEGIN TO SETUP lIKEBUTTON VIEW */}
                <TouchableOpacity onPress={() => alert("Like button clicked.")} style={styles.like_bg}>
                  <FontAwesome name="heart" size={25} color="white" style={styles.hearticon}/>
                </TouchableOpacity>
                {/* END TO SETUP lIKEBUTTON VIEW */}

                {/* BEGIN TO SETUP COMMENTBUTTON VIEW */}
                <TouchableOpacity onPress={() => alert("Comment button clicked.")} style={styles.comment_bg}>
                  <Ionicons name="md-chatboxes" size={25} color="white" style={styles.hearticon}/>
                </TouchableOpacity>
                {/* END TO SETUP COMMENTBUTTON VIEW */}

                {/* BEGIN TO SETUP FOLLOWBUTTON VIEW */}
                <Right>
                <TouchableOpacity style={styles.follow_bg} onPress={() => alert("Follow button clicked.")}>
                  <Text style={styles.follow_txt}>FOLLOW</Text>
                </TouchableOpacity>
                </Right>
                {/* END TO SETUP FOLLOWBUTTON VIEW */}
              </View>
            </View>
          </LinearGradient>
        {/* END TO SETUP LINEARGRADIENT VIEW */}
          </ImageBackground>
        {/* END TO SETUP IMAGE AS A BACKGROUND */}
      </Container>
    );
  }
}
// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  img_container: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
  },
  gred:{
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  body:{
    flex:2,
    alignItems:'center'
  },
  title:{
    marginTop: 2,
    color: 'white',
    fontSize: moderateScale(18),
    fontFamily: font_type.FontBold
  },
  right:{
    flex: 1
  },
  back_arrow: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  profile:{
    width: (Dimensions.get('window').width),
    position: 'absolute',
    bottom: 50
  },
  desc:{
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
    backgroundColor:'transparent'
  },
  name:{
    fontFamily:font_type.FontBold,
    fontSize: moderateScale(27),
    color: "#FFFFFF",
    textAlign: 'left'
  },
  address:{
    flexDirection: 'row',
    marginTop: 5
  },
  addresstxt:{
    color: "#FFFFFF",
    fontFamily: font_type.FontBold,
    fontSize: moderateScale(18),
    marginLeft: 5
  },
  bottomicon:{
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 25,
    backgroundColor: 'transparent'
  },
  hearticon:{
    justifyContent: 'center'
  },
  main: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: "#F2F2F2",
    flexDirection: 'column'
  },
  header: {
    backgroundColor: 'transparent',
    height: 65,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    borderBottomColor: 'transparent',
    ...Platform.select({
        ios: {
          paddingTop: 12,
        },
        android: {
          paddingTop: 15
        }
    }),
    elevation: 0
  },

  desc_txt: {
    color: "#FFFFFF",
    fontSize: moderateScale(18),
    fontFamily: font_type.FontLight,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    backgroundColor: 'transparent',
    textAlign: 'left'
  },
  like_bg: {
    width: (Dimensions.get('window').width) * 0.12,
    height: (Dimensions.get('window').width) * 0.12,
    borderRadius: (Dimensions.get('window').width) * 0.06,
    borderColor: "#fff",
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    alignItems: 'center'
  },
  comment_bg: {
    width: (Dimensions.get('window').width) * 0.12,
    height: (Dimensions.get('window').width) * 0.12,
    borderRadius: (Dimensions.get('window').width) * 0.06,
    borderColor: "#fff",
    borderWidth: 1,
    justifyContent: 'center',
    marginLeft: 35,
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  follow_bg: {
    backgroundColor: "#ff6347",
    borderRadius: 20,
    width: (Dimensions.get('window').width) * 0.35,
    height: (Dimensions.get('window').height) * 0.06,
    justifyContent: 'center'
  },
  follow_txt: {
    fontFamily: font_type.FontLight,
    fontSize: moderateScale(20),
    color: "#FFFFFF",
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: 'transparent',
    width: (Dimensions.get('window').width) * 0.30,
  }
});
// END TO MAKE STYLE
