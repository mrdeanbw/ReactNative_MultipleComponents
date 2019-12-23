import React, { Component } from "react";
import {Text,Image,StatusBar,Platform,ImageBackground,Dimensions,TouchableOpacity,TouchableHighlight,View,Modal,Alert,I18nManager,StyleSheet} from "react-native";
import {Container,Button,Right,Left,ListItem,Content,Body,Header,Title,Icon} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const { width, height } = Dimensions.get("window");
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

export default class ProfileNewsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  toggleModal(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW

  return(
      <Container style={styles.main}>
        {/* BEGIN TO SETUP HEADER VIEW */}
          <Header androidStatusBarColor={"#ff6347"} style={styles.header}>
        {/* BEGIN TO SETUP LEFT VIEW */}
            <Left style={styles.left}>
            <TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
              <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={25} color='white'/>
            </TouchableOpacity>
            </Left>
        {/* END TO SETUP LEFT VIEW */}

        {/* BEGIN TO SETUP BODY VIEW */}
          <Body style={styles.body}>
            <Title style={styles.title}>News Feed</Title>
          </Body>
        {/* END TO SETUP BODY VIEW */}

        {/* BEGIN TO SETUP RIGHT VIEW */}
          <Right style={styles.right}>
          <TouchableOpacity style={styles.leftbtn} onPress={() => alert("Menu button clicked.")}>
            <Icon name="ios-menu" style={{ color: "#fff" }} />
          </TouchableOpacity>
          </Right>
        {/* END TO SETUP RIGHT VIEW */}
          </Header>
        {/* END TO SETUP HEADER VIEW */}

          <View style={styles.mainview}>
        {/* BEGIN TO SETUP SHOWPROFILE BUTTON VIEW */}
              <TouchableOpacity onPress={() => {this.toggleModal(true);}}>
                <Text style={styles.show_profile_txt}>Show Profile</Text>
              </TouchableOpacity>
        {/* END TO SETUP SHOWPROFILE BUTTON VIEW */}

        {/* BEGIN TO SETUP MODAL VIEW */}
              <Modal
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                  this.toggleModal(!this.state.modalVisible);
                }}>
                <View style={styles.modalmain}>
                  <View style={styles.modal}>
                    {/* BEGIN TO SETUP IMAGES VIEW */}
                      <Image source={GlobalInclude.Image10} style={styles.bgimage} />
                      <Image source={GlobalInclude.Image9} style={styles.proimage}/>
                    {/* END TO SETUP IMAGES VIEW */}
                  <View style={styles.prouser}>
                    {/* BEGIN TO SETUP FOLLOWRS AND FOLLOWING VIEW */}
                      <View style={styles.followcount}>
                        {/* BEGIN TO SETUP FOLLOWRS VIEW */}
                        <View style={styles.follower_following_bg}>
                          <Text style={styles.follower_following_count_tx}>20</Text>
                          <Text style={styles.follower_following_txt}>Followers</Text>
                        </View>
                        {/* END TO SETUP FOLLOWRS VIEW */}
                        {/* BEGIN TO SETUP FOLLOWING VIEW */}
                        <View style={styles.follower_following_bg}>
                          <Text style={styles.follower_following_count_tx}>30k</Text>
                          <Text style={styles.follower_following_txt}>Following</Text>
                        </View>
                        {/* END TO SETUP FOLLOWING VIEW */}
                      </View>
                    {/* END TO SETUP FOLLOWRS AND FOLLOWING VIEW */}

                    {/* BEGIN TO SETUP NAME AND DESIGNATION VIEW */}
                      <Text style={styles.name_txt}>Lorem Ipsum</Text>
                      <Text style={styles.designation_txt}>Lorem Ipsum</Text>
                    {/* END TO SETUP NAME AND DESIGNATION VIEW */}

                    {/* BEGIN TO SETUP FOLLOWBUTTON VIEW */}
                      <TouchableOpacity style={styles.follow_txt_bg} onPress={() => alert("FOLLOW button clicked.")}>
                        <Text style={styles.follow_txt}>FOLLOW</Text>
                      </TouchableOpacity>
                    {/* END TO SETUP FOLLOWBUTTON VIEW */}
                    </View>
                  </View>
                    {/* BEGIN TO SETUP CLOSE BUTTON VIEW */}
                      <TouchableOpacity style={styles.close_icon_bg} onPress={() => this.toggleModal(false)}>
                        <FontAwesome name="close" size={15} color="white" />
                      </TouchableOpacity>
                    {/* BEGIN TO SETUP CLOSE BUTTON VIEW */}
                </View>
              </Modal>
        {/* END TO SETUP MODAL VIEW */}
            </View>
          </Container>
    );
  }
}
// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({

  main: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: "#fff",
    flexDirection: 'column'
  },
  left:{
    flex:1
  },
  leftbtn:{
    width:30
  },
  body:{
    flex:2,
    alignItems:'center',
    justifyContent: 'center'
  },
  back_arrow: {
    width: 30,
   justifyContent: 'center',
   alignItems: 'flex-start'
  },
  title:{
    color: "#fff",
    fontSize: moderateScale(18),
    fontFamily: font_type.FontBold,
    textAlign: 'center'
  },
  right:{
    flex:1
  },
  rightbtn:{
    width:30,
    alignItems: 'flex-end'
  },
  searchicon:{
    marginRight: 10,
    color: '#fff',
    fontSize:24
  },
  header: {
    backgroundColor: '#ff6347',
    height: 65,
    width: Dimensions.get("window").width,
    flexDirection: 'row',
    borderBottomColor: '#2d324f',
    ...Platform.select({
        ios: {
          paddingTop: 12,
        },
        android: {
          paddingTop: 15
        }
    }),
  },
  mainview:{
    width: Dimensions.get("window").width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  close:{
    position: 'absolute',
    top:30,
    left: 30
  },
  bgimage:{
    height: (Dimensions.get("window").height) * 0.33,
    width: (Dimensions.get("window").width) * 0.79,
    borderRadius: 5,
    resizeMode: 'cover'
  },
  proimage:{
    position:'absolute',
    zIndex:10,
    width: (Dimensions.get("window").width) * 0.30,
    height: (Dimensions.get("window").width) * 0.30,
    borderRadius: (Dimensions.get("window").width)* 0.15,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    alignSelf: 'center',
    marginTop: (Dimensions.get("window").width) * 0.15,
  },
  prouser:{
    height: (Dimensions.get("window").height) * 0.33,
    width: (Dimensions.get("window").width) * 0.79,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  followcount:{
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  modalmain:{
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#0006"
  },
  show_profile_txt: {
    color: "#fff",
    backgroundColor: "#ff6347",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: moderateScale(18),
    fontFamily: font_type.FontBold,
    alignSelf: 'center',
    marginTop: (Dimensions.get("window").height) * 0.40
  },
  modal: {
    width: (Dimensions.get("window").width) * 0.80,
    height: (Dimensions.get("window").height) * 0.66,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: (Dimensions.get("window").height)  * 0.15,
    flexDirection: 'column'
   },
  follower_following_bg: {
     width: (Dimensions.get("window").width) * 0.25,
     marginTop: 15,
     backgroundColor: 'transparent',
     flexDirection: 'column'
   },
  follower_following_count_tx: {
     color: "#363636",
     fontSize: moderateScale(15),
     fontFamily: font_type.FontBold,
     textAlign: 'center',
   },
  follower_following_txt: {
     color: "#959595",
     fontSize: moderateScale(12),
     fontFamily: font_type.FontLight,
     textAlign: 'center',
   },
  name_txt: {
     color: "#6f6f6f",
     fontSize: moderateScale(18),
     fontFamily: font_type.FontBold,
     alignSelf: 'center',
     ...Platform.select({
   		ios: {
   			 marginTop: 30
   		},
   		android: {
        marginTop: 15
      }
   	}),
   },
  designation_txt: {
     color: "#b7b7b7",
     fontSize: moderateScale(12),
     fontFamily: font_type.FontLight,
     alignSelf: 'center',
   },
  follow_txt_bg: {
     backgroundColor: "#ff6347",
     borderRadius: 20,
     width: (Dimensions.get("window").width) * 0.45,
     alignSelf: 'center',
     marginTop: 20
   },
   follow_txt: {
     color: "#fff",
     fontSize: moderateScale(18),
     fontFamily: font_type.FontBold,
     alignSelf: 'center',
     paddingTop: 5,
     paddingBottom: 5,
   },
   close_icon_bg: {
     height:(Dimensions.get("window").height * 0.040),
     width:(Dimensions.get("window").height * 0.040),
     borderRadius: (Dimensions.get("window").height * 0.02),
     backgroundColor: 'black',
     borderWidth: 2,
     borderColor: 'white',
     marginTop: (Dimensions.get("window").height * 0.135),
     marginLeft: (Dimensions.get("window").width * 0.075),
     position: 'absolute',
     alignSelf: 'flex-start',
     justifyContent: 'center',
     alignItems: 'center',
     paddingBottom: (Dimensions.get("window").height * 0.001)
   }
});
// END TO MAKE STYLE
