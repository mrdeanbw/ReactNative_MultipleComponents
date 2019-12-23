import React, { Component } from "react";
import {StyleSheet,ImageBackground,Image,View,StatusBar,Platform,Alert,TouchableOpacity,BackHandler,I18nManager,Dimensions} from "react-native";
import {Container,Text,Header,Content,Button,Left,Body,Icon,Title,Right} from "native-base";
import Modal from "react-native-modal";
import Ionicons from "react-native-vector-icons/Ionicons";
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

export default class DrawerEcom extends Component {


  constructor() {
    super();
    this.state = {
      isModalVisible: false
    };
  }

  _showModal = () => this.setState({ isModalVisible: true });

  _hideModal = () => this.setState({ isModalVisible: false });

  render() {
    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW


    return (
      <Container style={styles.container}>
      {/* BEGIN TO SETUP IMAGEBACKGROUND VIEW */}
        <ImageBackground style={styles.background_image} source={GlobalInclude.Image3}>
        {/* BEGIN TO SETUP HEADER VIEW */}
          <Header style={styles.header}>
          {/* BEGIN TO SETUP LEFT VIEW */}
            <Left style={styles.left}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.back_arrow}>
                {I18nManager.isRTL ? (
                  <Ionicons
                    name="ios-arrow-round-forward"
                    size={30}
                    color="#ffffff"/>
                  ) : (
                  <Ionicons
                    name="ios-arrow-round-back"
                    size={30}
                    color="#ffffff"/>
                )}
              </TouchableOpacity>
              </Left>
          {/* END TO SETUP LEFT VIEW */}

          {/* BEGIN TO SETUP BODY VIEW */}
            <Body style={styles.body}>
              <View style={styles.header_name_view}>
                <Title style={styles.header_title}>Drawer Ecom</Title>
                <TouchableOpacity onPress={() => this._showModal()}>
                  <Ionicons
                    name="ios-arrow-down"
                    color={"#FFFFFF"}
                    size={25}
                    style={styles.header_arrow}/>
                </TouchableOpacity>
              </View>
            </Body>
          {/* BEGIN TO SETUP BODY VIEW */}
            <Right style={styles.right} />
          </Header>
        {/* BEGIN TO SETUP HEADER VIEW */}

        {/* BEGIN TO SETUP TITLE VIEW */}
          <Text style={styles.forgot_password}></Text>
        {/* END TO SETUP TITLE VIEW */}

        {/* BEGIN TO SETUP MODAL VIEW */}
          <Modal
            style={styles.bottom_modal}
            isVisible={this.state.isModalVisible}
            onBackdropPress={() => this._hideModal()}>
            <View style={styles.triangles} />
            <View style={styles.mainview}>
              {/* BEGIN TO SETUP FILTER VIEW */}
              <View style={styles.headerbottom}>
                <Text style={styles.filter_text}>Filter</Text>
              </View>
              {/* BEGIN TO SETUP FILTER VIEW */}
                <View style={styles.horizontalline} />
                <View style={styles.semirow}>
              {/* BEGIN TO SETUP LIVINGROOM VIEW */}
                <TouchableOpacity onPress={() => alert("Living Room Button Click")}>
                  <View style={styles.listrow}>
                    <Image source={require('./icon_livingroom.png')} style={styles.rowicon}/>
                    <Text style={styles.rowtxt}>Living Room</Text>
                  </View>
                </TouchableOpacity>
              {/* END TO SETUP LIVINGROOM VIEW */}
                <View style={styles.verticalline} />

              {/* BEGIN TO SETUP DININGROOM VIEW */}
                <TouchableOpacity onPress={() => alert("Dining Room Button Click")}>
                  <View style={styles.listrow}>
                    <Image source={require('./icon_diningroom.png')} style={styles.rowicon}/>
                    <Text style={styles.rowtxt}>Dining Room</Text>
                  </View>
                </TouchableOpacity>
              {/* END TO SETUP DININGROOM VIEW */}
                <View style={styles.verticalline} />

              {/* BEGIN TO SETUP BOOKCASE VIEW */}
                <TouchableOpacity onPress={() => alert("Bookcase Button Click")}>
                  <View style={styles.listrow}>
                    <Image source={require('./icon_bookcase.png')} style={styles.rowicon}/>
                    <Text style={styles.rowtxt}>Bookcase</Text>
                  </View>
                </TouchableOpacity>
              {/* END TO SETUP BOOKCASE VIEW */}
              </View>
              <View style={styles.horizontalline} />
              <View style={styles.semirow}>
              {/* BEGIN TO SETUP BEDROOM VIEW */}
                <TouchableOpacity onPress={() => alert("Bedroom Button Click")}>
                  <View style={styles.listrow}>
                    <Image source={require('./icon_bedroom.png')} style={styles.rowicon} />
                    <Text style={styles.rowtxt}>Bedroom</Text>
                  </View>
                </TouchableOpacity>
              {/* END TO SETUP BEDROOM VIEW */}
                <View style={styles.verticalline} />

              {/* BEGIN TO SETUP TVSTANDS VIEW */}
                <TouchableOpacity onPress={() => alert("TV Stands Button Click")}>
                  <View style={styles.listrow}>
                    <Image source={require('./icon_tvstand.png')} style={styles.rowicon} />
                    <Text style={styles.rowtxt}>TV Stands</Text>
                  </View>
                </TouchableOpacity>
              {/* BEGIN TO SETUP TVSTANDS VIEW */}
                <View style={styles.verticalline} />

              {/* BEGIN TO SETUP BATHROOM VIEW */}
                <TouchableOpacity onPress={() => alert("Bathroom Button Click")}>
                  <View style={styles.listrow}>
                    <Image source={require('./icon_bathroom.png')} style={styles.rowicon}/>
                    <Text style={styles.rowtxt}>Bathroom</Text>
                  </View>
                </TouchableOpacity>
              {/* BEGIN TO SETUP BATHROOM VIEW */}
              </View>
            </View>
          </Modal>
        {/* END TO SETUP MODAL VIEW */}
          </ImageBackground>
      {/* END TO SETUP IMAGEBACKGROUND VIEW */}
      </Container>
    );
  }
}
// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  container: {

  },
  background_image: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    position: 'absolute'
  },
  back_arrow: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  header: {
    backgroundColor: '#ff6347',
    height: 70,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
				paddingTop:10
			}
    }),
		elevation: 0
  },
  left: {
    flex: 0.5,
		 backgroundColor: 'transparent',
  },
  right: {
    flex: 0.5
  },
  forgot_password:{
    color: "#0691ce",
    fontSize: moderateScale(17),
    height: (Dimensions.get("window").height * 0.05),
    width: (Dimensions.get("window").width),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'transparent',
    top:(Dimensions.get("window").height * 0.44),
    fontFamily: font_type.FontLight,
  },
  bottom_modal: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 0,
    ...Platform.select({
      ios: {
        marginTop:65
      },
      android: {
        marginTop:45
      }
    }),

  },
  mainview:{
    alignItems: 'flex-start',
    height: 300,
    backgroundColor: 'white',
    borderRadius:10,
    width: Dimensions.get("window").width*0.9,
  },
  headerbottom:{
    height: 50,
    width: Dimensions.get("window").width*0.9,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  semirow:{
    width: Dimensions.get("window").width,
    height:125,
    backgroundColor: 'transparent',
    flexDirection: 'row'
  },
  horizontalline:{
    height: 0.5,
    backgroundColor: '#f2f2f2',
    width: Dimensions.get("window").width*0.9
  },
  verticalline:{
    height: 125,
    backgroundColor: '#f2f2f2',
    width: 0.5
  },
  listrow:{
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get("window").width*0.3,
    height: 125
  },
  body: {
		flex: 2,
		alignItems: 'center',
		backgroundColor: 'transparent'
  },
  rowicon:{
    backgroundColor: 'transparent',
    height: 20,
    width: 20,
    tintColor: '#36343f',
    resizeMode: 'contain',
    alignSelf: 'center',
    alignItems: 'center'
  },
  rowtxt:{
    color:'#919cae',
    fontSize: moderateScale(15),
    backgroundColor: 'transparent',
    textAlign: 'left',
    marginTop: 12,
    fontFamily: font_type.FontLight
  },
  triangles:{
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 16,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white'
  },
  header_name_view:{
    flexDirection: 'column',
    marginTop: 10
  },
  header_title:{
    color:'white'
  },
  header_arrow:{
    color:'white',
    alignItems:'center',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  filter_text:{
    color:'#292d48',
    textAlign:'center',
    justifyContent:'center'
  }
});
// END TO MAKE STYLE
