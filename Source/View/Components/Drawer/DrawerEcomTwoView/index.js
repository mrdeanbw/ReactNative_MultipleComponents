import React, { Component } from "react";
import {Text,View,Image,StatusBar,TouchableOpacity,Platform,ImageBackground,BackHandler,I18nManager,StyleSheet,Dimensions} from "react-native";
import {Container,Button,Icon,Right,Header,Left,Body,Title} from "native-base";
import Modal from "react-native-modal";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import Drawer from "react-native-drawer";
import MyControlPanel from "./ControlPanel";
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";
import tweens from "./tweens";

//BEGIN TO SETUP DRAWERSTYLE
const drawerStyles = {
  drawer: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 0,
  }
}
//END TO SETUP DRAWERSTYLE

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

export default class Drawer_17 extends Component {
  constructor() {
    super();
    this.state = {
      isModalVisible: false,
      drawerType: "overlay",
      openDrawerOffset: 50,
      closedDrawerOffset: 0,
      panOpenMask: 0.1,
      relativeDrag: false,
      panThreshold: 0.25,
      tweenHandlerOn: false,
      tweenDuration: 350,
      tweenEasing: "linear",
      disabled: false,
      tweenHandlerPreset: null,
      acceptDoubleTap: false,
      acceptTap: false,
      acceptPan: true,
      tapToClose: true,
      negotiatePan: false,
      side: "right"
    };
  }

  //BEGIN TO SETUP TWEENHANDLE
  tweenHandler(ratio) {
    if (!this.state.tweenHandlerPreset) {
      return {};
    }
    return tweens[this.state.tweenHandlerPreset](ratio);
  }
  //END TO SETUP TWEENHANDLE

  //BEGIN TO SETUP OPENDRAWER
  openDrawer() {
    this.drawer.open();
  }
  //END TO SETUP OPENDRAWER

  componentWillMount() {
    setTimeout(() => {
      this.drawer.open();
    }, 1000);

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


    //BEGIN TO SETUP CONTROLPANEL VIEW
        var controlPanel =
        <MyControlPanel closeDrawer={() => {
          this.drawer.close();
        }} />
    //END TO SETUP CONTROLPANEL VIEW

    return (
      <View style={styles.container}>
      {/* BEGIN TO SETUP DRAWER VIEW */}
        <Drawer
          ref={c => (this.drawer = c)}
          type={this.state.drawerType}
          animation={this.state.animation}
          openDrawerOffset={this.state.openDrawerOffset}
          closedDrawerOffset={this.state.closedDrawerOffset}
          panOpenMask={this.state.panOpenMask}
          panCloseMask={this.state.panCloseMask}
          relativeDrag={this.state.relativeDrag}
          panThreshold={this.state.panThreshold}
          content={controlPanel}
          styles={drawerStyles}
          disabled={this.state.disabled}
          tweenHandler={this.tweenHandler.bind(this)}
          tweenDuration={this.state.tweenDuration}
          tweenEasing={this.state.tweenEasing}
          acceptDoubleTap={this.state.acceptDoubleTap}
          acceptTap={this.state.acceptTap}
          acceptPan={this.state.acceptPan}
          tapToClose={this.state.tapToClose}
          negotiatePan={this.state.negotiatePan}
          changeVal={this.state.changeVal}
          side={this.state.side}>
          <Container style={styles.container}>
          {/* BEGIN TO SETUP IMAGEBACKGROUND VIEW */}
            <ImageBackground style={styles.background_image} source={GlobalInclude.Image1}>
            {/* BEGIN TO SETUP HEADER VIEW */}
              <Header style={styles.header_sec}>
                {/* BEGIN TO SETUP LEFT VIEW */}
                <Left style={styles.left}>
                  <TouchableOpacity onPress={() => this.props.navigation.goBack()}
                    style={styles.back_arrow}>
                    {I18nManager.isRTL ? (
                      <FontAwesome name="angle-right" size={30} color="white" />
                    ) : (
                      <FontAwesome name="angle-left" size={30} color="white" />
                    )}
                  </TouchableOpacity>
                </Left>
                {/* END TO SETUP LEFT VIEW */}

                {/* BEGIN TO SETUP BODY VIEW */}
                  <Body style={styles.body}>
                    <View style={{ flexDirection: "column", marginTop: 10 }}>
                      <Title style={{ color: "white" }}>Category</Title>
                      <TouchableOpacity onPress={() => this._showModal()}>
                        <Ionicons
                          name="ios-arrow-down"
                          color={"#FFFFFF"}
                          size={25}
                          style={{color: "white",alignItems: "center",alignSelf: "center",justifyContent: "center"}}/>
                      </TouchableOpacity>
                      </View>
                    </Body>
                {/* END TO SETUP BODY VIEW */}

                {/* BEGIN TO SETUP RIGHT VIEW */}
                  <Right style={styles.right}>
                    <TouchableOpacity onPress={() => this.openDrawer()} style={styles.back_arrow}>
                      <Icon name="ios-menu" style={{ color: "white" }} />
                    </TouchableOpacity>
                  </Right>
                {/* END TO SETUP RIGHT VIEW */}
                </Header>
              {/* END TO SETUP HEADER VIEW */}

              {/* BEGIN TO SETUP MODAL VIEW */}
                <Modal
                  style={styles.bottomModal}
                  isVisible={this.state.isModalVisible}
                  onBackdropPress={() => this._hideModal()}>
                  <View style={styles.triangles} />
                  <View style={styles.mainviews}>

                    {/* BEGIN TO SETUP FILTER VIEW */}
                      <View style={styles.headerbottom}>
                        <Text STYLE={{color: "#292d48",textAlign: "center",justifyContent: "center"}}>
                          Filter
                        </Text>
                      </View>
                    {/* END TO SETUP FILTER VIEW */}

                    <View style={styles.horizontalline} />
                    <View style={styles.semirow}>
                    {/* BEGIN TO SETUP LIVINGROOM VIEW */}
                        <TouchableOpacity onPress={() => alert("Living Room Button Click")}>
                          <View style={styles.listrows}>
                            <Image source={require('./icon_livingroom.png')} style={styles.rowicon}/>
                            <Text style={styles.rowtxt}>Living Room</Text>
                          </View>
                        </TouchableOpacity>
                     {/* END TO SETUP LIVINGROOM VIEW */}
                      <View style={styles.verticalline} />

                     {/* BEGIN TO SETUP DININGROOM VIEW */}
                        <TouchableOpacity onPress={() => alert("Dining Room Button Click")}>
                          <View style={styles.listrows}>
                            <Image source={require('./icon_diningroom.png')} style={styles.rowicon}/>
                            <Text style={styles.rowtxt}>Dining Room</Text>
                          </View>
                        </TouchableOpacity>
                      {/* END TO SETUP DININGROOM VIEW */}
                      <View style={styles.verticalline} />

                      {/* BEGIN TO SETUP BOOKCASE VIEW */}
                        <TouchableOpacity onPress={() => alert("Bookcase Button Click")}>
                          <View style={styles.listrows}>
                            <Image source={require('./icon_bookcase.png')} style={styles.rowicon}/>
                            <Text style={styles.rowtxt}>Bookcase</Text>
                          </View>
                        </TouchableOpacity>
                      {/* END TO SETUP BOOKCASE VIEW */}

                    </View>
                    <View style={styles.horizontalline} />
                    <View style={styles.semirow}>
                    {/* BEGIN TO SETUP BEDROOM VIEW */}
                      <TouchableOpacity onPress={() => alert("Bedroom Button CLick")}>
                        <View style={styles.listrows}>
                          <Image source={require('./icon_bedroom.png')} style={styles.rowicon}/>
                          <Text style={styles.rowtxt}>Bedroom</Text>
                        </View>
                      </TouchableOpacity>
                    {/* END TO SETUP BEDROOM VIEW */}
                      <View style={styles.verticalline} />

                    {/* BEGIN TO SETUP TVSTANDS VIEW */}
                      <TouchableOpacity onPress={() => alert("TV Stands Button Click")}>
                        <View style={styles.listrows}>
                          <Image source={require('./icon_tvstand.png')} style={styles.rowicon}/>
                          <Text style={styles.rowtxt}>TV Stands</Text>
                        </View>
                      </TouchableOpacity>
                    {/* END TO SETUP TVSTANDS VIEW */}
                      <View style={styles.verticalline} />

                    {/* BEGIN TO SETUP BATHROOM VIEW */}
                      <TouchableOpacity onPress={() => alert("Bathroom Button Click")}>
                        <View style={styles.listrows}>
                          <Image source={require('./icon_bathroom.png')} style={styles.rowicon}/>
                          <Text style={styles.rowtxt}>Bathroom</Text>
                        </View>
                      </TouchableOpacity>
                    {/* END TO SETUP BATHROOM VIEW */}
                    </View>
                  </View>
                </Modal>
            {/* END TO SETUP MODAL VIEW */}
                <Text style={styles.forgot_password}></Text>
              </ImageBackground>
            {/* END TO SETUP IMAGEBACKGROUND VIEW */}
              </Container>
            </Drawer>
        {/* END TO SETUP DRAWER VIEW */}
        </View>
    );
  }
}
// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  container: {
    height: (Dimensions.get("window").height),
    width: Dimensions.get("window").width,
    backgroundColor: '#f2f2f2'
  },
  header_sec: {
    backgroundColor: "#ff6347",
		height: Dimensions.get("window").height * 0.12,
		borderBottomWidth: 0,
		paddingTop: (Dimensions.get("window").height * 0.045),
		elevation: 0,
		paddingLeft: (Dimensions.get("window").width * 0.05),
		paddingRight: (Dimensions.get("window").width * 0.05),
  },
  left: {
		flex: 0.5,
  },
  back_arrow: {
		justifyContent: 'center',
		alignItems: 'center'
  },
  body: {
		flex: 3,
		alignItems: 'center',
  },
  right: {
    flex: 0.5,
  },
  mainview:{
    backgroundColor: '#36343f'
  },
  listrow:{
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center'
  },
  rowicon:{
    backgroundColor: 'rgba(0,0,0,0)',
    tintColor: 'white',
    height: 20,
    width: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
    alignItems: 'center'
  },
  rowtxt:{
    color:'white',
    fontSize: moderateScale(23),
    backgroundColor: 'rgba(0,0,0,0)',
    marginLeft: 20,
    textAlign: 'center',
    fontFamily: font_type.FontLight,
  },
	background_image: {
		flex: 1,
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
		position: 'absolute'
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
		backgroundColor: 'rgba(0,0,0,0)',
		top:(Dimensions.get("window").height * 0.44),
 		fontFamily: font_type.FontLight,
	},
  row:{
    height: 100,
    backgroundColor: '#36343f',
    flexDirection: 'row'
  },
  header: {
    backgroundColor: '#1a191f',
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
		 backgroundColor: 'rgba(0,0,0,0)',
  },
  bottomModal: {
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
  mainviews:{
    alignItems: 'flex-start',
    height: 300,
    backgroundColor: 'white',
    borderRadius:10,
    width: Dimensions.get("window").width*0.9,
  },
  headerbottom:{
    height: 50,
    width: Dimensions.get("window").width*0.9,
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  semirow:{
    width: Dimensions.get("window").width,
    height:125,
    backgroundColor: 'rgba(0,0,0,0)',
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
  listrows:{
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get("window").width*0.3,
    height: 125
  },
  body: {
		flex: 2,
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0)'
  },
  rowicon:{
    backgroundColor: 'rgba(0,0,0,0)',
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
    backgroundColor: 'rgba(0,0,0,0)',
    textAlign: 'left',
    marginTop: 12,
    fontFamily: font_type.FontLight,
  },
  triangles:{
    width: 0,
    height: 0,
    backgroundColor: 'rgba(0,0,0,0)',
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 16,
    borderLeftColor: 'rgba(0,0,0,0)',
    borderRightColor: 'rgba(0,0,0,0)',
    borderBottomColor: 'white'
  },
});
// END TO MAKE STYLE
