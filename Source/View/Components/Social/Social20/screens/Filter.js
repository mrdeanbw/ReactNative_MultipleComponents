import React, { Component } from "react";
import {View,Image,StatusBar,Platform,ImageBackground,Dimensions,TouchableOpacity,ListView,I18nManager,StyleSheet} from "react-native";
import {Container,Header,Content,Button,Left,Right,Body,Title,Icon,List,ListItem,Text,Item,Input,Segment} from "native-base";
import LinearGradient from "react-native-linear-gradient";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { Actions } from "react-native-router-flux";
import FontAwesome from "react-native-vector-icons/FontAwesome";

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


export default class PersonalChat extends Component {
  constructor(props) {
    super(props);
    // BEGIN TO SET STATE
    this.state = {
      segment: 1,
      distance: 10,
      multiSliderPrice: [18, 25],
      isSelected: false
    };
    // END TO SET STATE
  }

  //BEGIN TO SETUP MULTISLIDERVALUESCHANGE
  multiSliderValuesChange = values => {
    this.setState({ multiSliderPrice: values });
  };
  //END TO SETUP MULTISLIDERVALUESCHANGE

  //BEGIN TO SETUP RENDERDECVALUE
  _renderDecValue = () => {
    var dis = this.state.distance;
    dis -= 1;
    this.setState({ distance: dis });
  };
  //BEGIN TO SETUP RENDERDECVALUE

  //BEGIN TO SETUP RENDERINCVALUE
  _renderIncValue = () => {
    var dis = this.state.distance;
    dis += 1;
    this.setState({ distance: dis });
  };
  //END TO SETUP RENDERINCVALUE

  render() {

    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    return (
      <Container>
      {/* BEGIN TO SETUP IMAGEBACKGROUND VIEW */}
        <ImageBackground source={require('./gradient_bg.png')} style={styles.header_bg}>
        {/* BEGIN TO SETUP HEADER VIEW */}
          <Header androidStatusBarColor={"#fa6b7b"} style={styles.header}>
          {/* BEGIN TO SETUP LEFT VIEW */}
            <Left>
              <TouchableOpacity onPress={Actions.pop} style={styles.left}>
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
              <Title style={styles.header_txt}>Filter</Title>
            </Body>
          {/* END TO SETUP BODY VIEW */}

          {/* BEGIN TO SETUP RIGHT VIEW */}
            <Right style={styles.right}>
              <TouchableOpacity onPress={() => alert("Done")}>
                <Text style={styles.left_msg}>Done</Text>
              </TouchableOpacity>
            </Right>
          {/* END TO SETUP RIGHT VIEW */}
          </Header>
        {/* END TO SETUP HEADER VIEW */}
        </ImageBackground>
      {/* END TO SETUP IMAGEBACKGROUND VIEW */}
        <View style={styles.content}>
        {/* BEGIN TO SETUP FILTER VIEW */}
          <View style={styles.list_header}>
            <Text style={styles.list_header_text}>Filter</Text>
          </View>
        {/* END TO SETUP FILTER VIEW */}
          <List style={styles.list_main}>
            <ListItem style={styles.list_gender_main}>
            {/* BEGIN TO SETUP GENDER VIEW */}
              <View>
                <Text style={styles.list_title}>Gender</Text>
              </View>
            {/* END TO SETUP GENDER VIEW */}

            {/* BEGIN TO SETUP LINEARGRADIENT VIEW */}
              <LinearGradient
                locations={[0.1, 0.75]}
                colors={["#f87362", "#fa6982"]}
                style={styles.style_gradient}>
                {Platform.OS == "ios" ? (
                  <Segment style={styles.segment_tab_sec}>
                  {/* BEGIN TO SETUP ALL VIEW */}
                    <Button
                      style={[styles.left_btn_radius,this.state.segment === 1 ? styles.selected_segment_tab : styles.segment_tab]}
                      active={this.state.segment === 1 ? true : false}
                      onPress={() => this.setState({ segment: 1 })}>
                      <Text style={this.state.segment === 1 ? styles.active_tab : styles.normal_tab}>All</Text>
                    </Button>
                  {/* END TO SETUP ALL VIEW */}

                  {/* BEGIN TO SETUP MALE VIEW */}
                    <Button style={this.state.segment === 2 ? styles.selected_segment_tab : styles.segment_tab}
                      active={this.state.segment === 2 ? true : false}
                      onPress={() => this.setState({ segment: 2 })}>
                      <Text style={this.state.segment === 2 ? styles.active_tab : styles.normal_tab}>Male</Text>
                    </Button>
                  {/* END TO SETUP MALE VIEW */}

                  {/* BEGIN TO SETUP FEMALE VIEW */}
                    <Button
                      style={[styles.right_btn_radius,this.state.segment === 3 ? styles.selected_segment_tab : styles.segment_tab]}
                      active={this.state.segment === 3 ? true : false}
                      onPress={() => this.setState({ segment: 3 })}>
                      <Text style={this.state.segment === 3 ? styles.active_tab : styles.normal_tab}>Female</Text>
                    </Button>
                  {/* END TO SETUP FEMALE VIEW */}
                  </Segment>
                ) : (
                  <Segment style={styles.segment_tab_sec}>
                  {/* BEGIN TO SETUP ALL VIEW */}
                    <TouchableOpacity style={[styles.left_btn_radius,this.state.segment === 1 ? styles.selected_segment_tab  : styles.segment_tab]}
                      active={this.state.segment === 1 ? true : false}
                      onPress={() => this.setState({ segment: 1 })}>
                      <Text style={this.state.segment === 1 ? styles.active_tab : styles.normal_tab}>All</Text>
                    </TouchableOpacity>
                  {/* END TO SETUP ALL VIEW */}

                  {/* BEGIN TO SETUP MALE VIEW */}
                    <TouchableOpacity style={this.state.segment === 2 ? styles.selected_segment_tab : styles.segment_tab}
                      active={this.state.segment === 2 ? true : false}
                      onPress={() => this.setState({ segment: 2 })}>
                      <Text style={this.state.segment === 2 ? styles.active_tab : styles.normal_tab}>Male</Text>
                    </TouchableOpacity>
                  {/* END TO SETUP MALE VIEW */}

                  {/* BEGIN TO SETUP FEMALE VIEW */}
                    <TouchableOpacity style={[styles.right_btn_radius, this.state.segment === 3 ? styles.selected_segment_tab : styles.segment_tab]}
                      active={this.state.segment === 3 ? true : false}
                      onPress={() => this.setState({ segment: 3 })}>
                      <Text style={this.state.segment === 3 ? styles.active_tab : styles.normal_tab}>Female</Text>
                    </TouchableOpacity>
                  {/* END TO SETUP FEMALE VIEW */}
                  </Segment>
                )}
              </LinearGradient>
            {/* END TO SETUP LINEARGRADIENT VIEW */}
            </ListItem>

            <ListItem style={styles.list_age_main}>
            {/* BEGIN TO SETUP AGE VIEW */}
              <View>
                <Text style={styles.list_title}>Age</Text>
              </View>
            {/* END TO SETUP AGE VIEW */}

            {/* BEGIN TO SETUP BACK VIEW */}
              <TouchableOpacity
                style={styles.list_age_right}
                onPress={() =>this.setState({ isSelected: !this.state.isSelected })}>
                <Text style={styles.list_right_text}>
                  {this.state.multiSliderPrice[0]} -{" "}
                  {this.state.multiSliderPrice[1]}
                </Text>
                {I18nManager.isRTL ? (
                  <Icon name="ios-arrow-back" style={styles.arrow_forword} />
                ) : (
                  <Icon name="ios-arrow-forward" style={styles.arrow_forword} />
                )}
              </TouchableOpacity>
            {/* END TO SETUP BACK VIEW */}

            {/* BEGIN TO SETUP MULTISLIDER VIEW */}
              {this.state.isSelected ? (
                <MultiSlider
                  values={this.state.multiSliderPrice}
                  sliderLength={100}
                  onValuesChange={this.multiSliderValuesChange}
                  min={0}
                  max={100}
                  step={1}
                  allowOverlap
                  snapped
                  selectedStyle={{ backgroundColor: "#fa6982" }}
                  unselectedStyle={{ backgroundColor: "#fa698270" }}
                  marker_style={styles.marker_style}
                  container_style={styles.container_style}
                  track_style={styles.track_style}
                />
              ) : null}
            {/* END TO SETUP MULTISLIDER VIEW */}
            </ListItem>

            <ListItem style={styles.list_distance_main}>
            {/* BEGIN TO SETUP DISTANCE VIEW */}
              <View>
                <Text style={styles.list_title}>Distance</Text>
              </View>
            {/* END TO SETUP DISTANCE VIEW */}

              <View style={styles.list_distance_right}>
              {/* BEGIN TO SETUP BACK VIEW */}
                <TouchableOpacity onPress={this._renderDecValue}>
                  <Icon name="ios-arrow-back" style={styles.arrow_back} />
                </TouchableOpacity>
              {/* END TO SETUP BACK VIEW */}

              {/* BEGIN TO SETUP KM VIEW */}
                <Text style={styles.list_right_text}>
                  {this.state.distance} km
                </Text>
              {/* END TO SETUP KM VIEW */}

              {/* BEGIN TO SETUP FORWAD VIEW */}
                <TouchableOpacity onPress={this._renderIncValue}>
                  {I18nManager.isRTL ? (
                    <Icon name="ios-arrow-back" style={styles.arrow_forword} />
                  ) : (
                    <Icon name="ios-arrow-forward" style={styles.arrow_forword}/>
                  )}
                </TouchableOpacity>
              {/* END TO SETUP FORWAD VIEW */}
              </View>
            </ListItem>
          </List>
        </View>
      </Container>
    );
  }
}

//BEGIN TO SETUP STYLE
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(0,0,0,0)',
  	height: (Dimensions.get("window").height * 0.1),
  	width: Dimensions.get("window").width,
  	flexDirection: 'row',
    borderBottomColor: 'rgba(0,0,0,0)',
    paddingTop: (Dimensions.get("window").width * 0.05),
  },
  header_bg: {
    height: (Dimensions.get("window").height * 0.1),
    width: Dimensions.get("window").width,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex:1.5
  },
  body: {
    flex: 1.8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  right: {
    flex: 1.1,
    alignItems: 'center',
    paddingTop: (Platform.OS === 'ios')? 5 : 0,
  },
  header_txt: {
    color: 'white'
  },
  left_msg: {
   fontFamily: font_type.FontLight,
   fontSize: moderateScale(14),
   color: 'white'
  },
  content: {
    backgroundColor: '#f2f2f2',
    height: (Dimensions.get("window").height)
  },
  style_gradient: {
    height: (Dimensions.get("window").height * 0.038),
    width: (Dimensions.get("window").width * 0.48),
    borderRadius: (Dimensions.get("window").height * 0.02),
  },
  left_btn_radius: {
    borderTopLeftRadius: I18nManager.isRTL ? 0 : (Dimensions.get("window").height * 0.02),
    borderBottomLeftRadius: I18nManager.isRTL ? 0 : (Dimensions.get("window").height * 0.02),
    borderTopRightRadius: I18nManager.isRTL ? (Dimensions.get("window").height * 0.02) : 0,
    borderBottomRightRadius: I18nManager.isRTL ? (Dimensions.get("window").height * 0.02) : 0,
  },
  right_btn_radius: {
   borderTopRightRadius: I18nManager.isRTL ? 0 : (Dimensions.get("window").height * 0.02),
   borderBottomRightRadius: I18nManager.isRTL ? 0 : (Dimensions.get("window").height * 0.02),
   borderTopLeftRadius: I18nManager.isRTL ? (Dimensions.get("window").height * 0.02) : 0,
   borderBottomLeftRadius: I18nManager.isRTL ? (Dimensions.get("window").height * 0.02) : 0,
 },
  segment_tab_sec: {
    height: (Dimensions.get("window").height * 0.038),
    width: (Dimensions.get("window").width * 0.48),
    borderRadius: (Dimensions.get("window").height * 0.02),
    backgroundColor: 'rgba(0,0,0,0)',
  },
  selected_segment_tab: {
    height: (Dimensions.get("window").height * 0.038),
    width: (Dimensions.get("window").width * 0.16),
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    justifyContent: 'center',
		overflow: 'visible'
  },
  segment_tab: {
    height: (Dimensions.get("window").height * 0.038),
    width: (Dimensions.get("window").width * 0.16),
    backgroundColor: '#e6e6e6',
    borderColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    justifyContent: 'center',
		overflow: 'hidden'
  },
  active_tab: {
    fontSize: moderateScale(12),
    fontFamily: font_type.FontLight,
    color: 'white'
  },
  normal_tab: {
    fontSize: moderateScale(12),
    fontFamily: font_type.FontLight,
    color: '#666666'
  },
  list_header: {
    width:(Dimensions.get("window").width),
    height:(Dimensions.get("window").height*0.065),
    marginLeft:(Dimensions.get("window").width*0.05),
    alignItems:'flex-start',
    justifyContent:'center'
  },
  list_header_text: {
    color:'#9f9f9f',
    fontFamily:font_type.FontLight,
    fontSize:moderateScale(18)
  },
  list_main: {
    backgroundColor: 'white',
    paddingLeft: (Dimensions.get("window").width*0.005)
  },
  list_gender_main: {
    justifyContent: 'space-between',
    height:(Dimensions.get("window").height*0.08),
    borderColor: '#e5e5e5',
    borderBottomWidth: 0.5
  },
  list_title: {
    color:'#4c4c4c',
    fontFamily:font_type.FontLight,
    fontSize:moderateScale(18)
  },
  list_age_main: {
    justifyContent: 'space-between',
    height:(Dimensions.get("window").height*0.08),
    borderColor: '#e5e5e5',
    borderBottomWidth: 1
  },
  list_age_right: {
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  list_right_text: {
    color:'#a5a5a5',
    fontFamily:font_type.FontLight,
    fontSize:moderateScale(18)
  },
  arrow_forword: {
    color:'#c7c7cc',
    paddingLeft: (Dimensions.get("window").width*0.02),
    fontSize: moderateScale(30)
  },
  marker_style: {
    height:(Dimensions.get("window").height*0.035),
    width: (Dimensions.get("window").height*0.035),
    backgroundColor:'#f87362',
    borderWidth: 0.5,
    borderColor: '#fa6982'
  },
  container_style: {
    alignSelf: 'center',
    height:5
  },
  track_style: {
    height: (Dimensions.get("window").height*0.005),
    borderRadius: 4
  },
  list_distance_main: {
    justifyContent: 'space-between',
    height:(Dimensions.get("window").height*0.08),
    borderColor: 'rgba(0,0,0,0)'
  },
  list_distance_right: {
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  arrow_back: {
    color:'#c7c7cc',
    paddingRight: (Dimensions.get("window").width*0.02),
    fontSize: moderateScale(30)
  },
});
//END TO SETUP STYLE
