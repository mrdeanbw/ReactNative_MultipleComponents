import React, { Component } from "react";
import {Text,View,Image,StatusBar,TouchableOpacity,Platform,BackHandler,I18nManager,StyleSheet,Dimensions,SafeAreaView} from "react-native";
import {Content,Container,Right,Header,Left,Body,Input} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

// BEGIN TO SETUP FONT-TYPE AND FONTSIZE
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const scale = size => (Dimensions.get("window").width / guidelineBaseWidth) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const font_type = {
    FontLight: 'Helvetica',
    FontBold : 'Helvetica-Bold'
};
// END TO SETUP FONT-TYPE AND FONTSIZE

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    // BEGIN TO SETUP STATE
    this.state = {
      isSearch: false
    };
    // END TO SETUP STATE
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
      <Container style={styles.container}>
      {/* BEGIN TO SETUP HEADER VIEW */}
        <Header androidStatusBarColor={"#0e1130"} style={styles.header}>
        {/* BEGIN TO SETUP LEFT VIEW */}
          <Left style={styles.left}>
            <TouchableOpacity style={styles.back_arrow} onPress={() => this.props.navigation.goBack()}>
              <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="white" />
            </TouchableOpacity>
          </Left>
        {/* END TO SETUP LEFT VIEW */}

        {/* BEGIN TO SETUP BODY VIEW */}
          <Body style={styles.body}>
            <Text style={styles.text_title}>About Us</Text>
          </Body>
        {/* END TO SETUP BODY VIEW */}

        {/* BEGIN TO SETUP RIGHT VIEW */}
          <Right style={styles.right}>
            <TouchableOpacity style={styles.back_arrow} onPress={() => this.setState({ isSearch: !this.state.isSearch })}>
              <EvilIcons name="search" size={30} color="white" />
            </TouchableOpacity>
          </Right>
        {/* END TO SETUP RIGHT VIEW */}
        </Header>
      {/* END TO SETUP HEADER VIEW */}

        {this.state.isSearch ? (
          <View style={styles.search_view_bg}>
          {/* BEGIN TO SETUP SEARCH VIEW */}
            <View style={styles.search_view}>
              <Ionicons
                name="ios-search"
                size={20}
                color="#8e8e93"
                style={{ marginLeft: 10 }}/>
              <Input
                style={styles.search_input}
                placeholder="Search"
                placeholderTextColor="#8e8e93"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="default"
                selectionColor="#6d6d71"/>
            </View>
          {/* END TO SETUP SEARCH VIEW */}
          </View>
        ) : null}

        <Content>
          <SafeAreaView style={styles.main_view}>
          {/* BEGIN TO SETUP TEXT VIEW */}
            <Text style={styles.text_row_que}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Text>
          {/* END TO SETUP TEXT VIEW */}

          {/* BEGIN TO SETUP TEXT VIEW */}
            <Text style={[styles.text_row_ans, { marginTop: Dimensions.get("window").height * 0.015 }]}>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </Text>
          {/* END TO SETUP TEXT VIEW */}

          {/* BEGIN TO SETUP TEXT VIEW */}
            <Text style={[styles.text_row_ans, { marginTop: Dimensions.get("window").height * 0.015 }]}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </Text>
          {/* END TO SETUP TEXT VIEW */}

          {/* BEGIN TO SETUP ARROW VIEW */}
            <View style={[styles.step_view, { marginTop: Dimensions.get("window").height * 0.02 }]}>
              <View style={styles.arrow_view}>
                <FontAwesome name="chevron-right" size={8} color="white" />
              </View>
              <Text style={styles.text_row_ans}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Text>
            </View>
          {/* END TO SETUP ARROW VIEW */}

          {/* BEGIN TO SETUP ARROW VIEW */}
            <View style={[styles.step_view, { marginTop: Dimensions.get("window").height * 0.02 }]}>
              <View style={styles.arrow_view}>
                <FontAwesome name="chevron-right" size={8} color="white" />
              </View>
              <Text style={styles.text_row_ans}>
                If you are going to use a passage of Lorem Ipsum,
                you need to be sure there isn't anything embarrassing hidden in the middle of text.
              </Text>
            </View>
          {/* END TO SETUP ARROW VIEW */}

          {/* BEGIN TO SETUP ARROW VIEW */}
            <View style={[styles.step_view, { marginTop: Dimensions.get("window").height * 0.02 }]}>
              <View style={styles.arrow_view}>
                <FontAwesome name="chevron-right" size={8} color="white" />
              </View>
              <Text style={styles.text_row_ans}>sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </View>
          {/* END TO SETUP ARROW VIEW */}

          {/* BEGIN TO SETUP TEXT VIEW */}
            <Text style={[styles.text_row_ans, { marginTop: Dimensions.get("window").height * 0.015 }]}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
              similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
            </Text>
          {/* END TO SETUP TEXT VIEW */}

          {/* BEGIN TO SETUP TEXT VIEW */}
            <Text style={[styles.text_row_ans, { marginTop: Dimensions.get("window").height * 0.015 }]}>
               In certain circumstances and owing to the claims of duty or the obligations
               of business it will frequently occur that pleasures have to be repudiated
               and annoyances accepted.
            </Text>
          {/* END TO SETUP TEXT VIEW */}
          </SafeAreaView>
        </Content>
      </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: 'white'
  },
  header: {
    backgroundColor: "#ff6347",
    height: Dimensions.get("window").height * 0.1,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {
        paddingTop: (Dimensions.get("window").height * 0.02),
      },
      android: {
        paddingTop: Dimensions.get("window").width * 0.04
      }
    }),
    elevation: 0,
    paddingLeft: (Dimensions.get("window").width * 0.05),
    paddingRight: (Dimensions.get("window").width * 0.05),
  },
  left: {
    flex: 0.5,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  back_arrow: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  text_title: {
    color: 'white',
    fontSize: moderateScale(20),
    alignSelf: 'center',
    fontFamily: font_type.FontLight,
  },
  right: {
    flex: 0.5,
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    ...Platform.select({
      ios: {
      },
      android: {
        paddingTop: Dimensions.get("window").width * 0.02
      }
    }),
  },
  main_view:{
    paddingTop: Dimensions.get("window").height * 0.04,
    paddingBottom: Dimensions.get("window").height * 0.04,
    paddingLeft: Dimensions.get("window").width * 0.045,
    paddingRight: Dimensions.get("window").width * 0.045
  },
  text_row_que:{
    fontSize: moderateScale(16),
    fontFamily: font_type.FontLight,
    color: '#362f2d',
    textAlign: 'left'
  },
  text_row_ans:{
    fontSize: moderateScale(16),
    fontFamily: font_type.FontLight,
    color: '#111111',
    textAlign: 'left'
  },
  step_view:{
    flexDirection: 'row',
    marginLeft: Dimensions.get("window").width * 0.07,
  },
  arrow_view:{
    width: Dimensions.get("window").height * 0.020,
    height : Dimensions.get("window").height * 0.020,
    backgroundColor: '#000000',
    borderRadius: Dimensions.get("window").height * 0.010,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: (I18nManager.isRTL) ? 0 : Dimensions.get("window").height * 0.003,
    marginRight: (I18nManager.isRTL) ? 0 : Dimensions.get("window").height * 0.022,
    paddingRight: (I18nManager.isRTL) ? Dimensions.get("window").height * 0.003 : 0,
    marginTop: 5,
  },
  search_view_bg: {
		backgroundColor: '#e9e9e9',
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height * 0.08,
		justifyContent: 'center',
		alignItems: 'center',
	},
  search_view: {
		backgroundColor: 'white',
		borderRadius: 5,
		width: Dimensions.get("window").width * 0.95,
		height: Dimensions.get("window").height * 0.06,
		alignItems: 'center',
		flexDirection: 'row',
	},
  search_input: {
    color: '#6d6d71',
    fontSize: moderateScale(15),
    fontFamily: font_type.FontLight,
    ...Platform.select({
      ios: {},
    }),
  },
});
// END TO MAKE STYLE
