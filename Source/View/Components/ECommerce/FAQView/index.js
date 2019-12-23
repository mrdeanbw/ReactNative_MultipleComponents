import React, { Component } from "react";
import {Text,View,Image,StatusBar,TouchableOpacity,Platform,BackHandler,I18nManager,StyleSheet,Dimensions} from "react-native";
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


export default class FAQ extends Component {
  constructor(props) {
    super(props);
    // BEGIN TO SETUP STATE
    this.state = {
      selectedLots: "1",
      data: [
        {
          id: 1,
          ItemName: "Lorem Ipsum"
        },
        {
          id: 2,
          ItemName: "Lorem Ipsum"
        },
        {
          id: 3,
          ItemName: "Lorem Ipsum"
        },
        {
          id: 4,
          ItemName: "Lorem Ipsum"
        },
        {
          id: 5,
          ItemName: "Lorem Ipsum"
        },
        {
          id: 6,
          ItemName: "Lorem Ipsum"
        },
        {
          id: 7,
          ItemName: "Lorem Ipsum"
        },
        {
          id: 8,
          ItemName: "Lorem Ipsum"
        },
        {
          id: 9,
          ItemName: "Lorem Ipsum"
        },
        {
          id: 10,
          ItemName: "Lorem Ipsum"
        },
        {
          id: 11,
          ItemName: "Lorem Ipsum"
        },
        {
          id: 12,
          ItemName: "Lorem Ipsum"
        }
      ]
    };
    // BEGIN TO SETUP STATE
  }

  // BEGIN TO SETUP CLICK EVENT ON ROW
  onCheckFAQ(id,name) {
    this.setState({
      selectedLots: id,
      isSearch: false
    });
      alert(name)
  }
  // END TO SETUP CLICK EVENT ON ROW

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
          <TouchableOpacity style={styles.back_arrow} onPress={()=> this.props.navigation.goBack()}>
            <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={moderateScale(30)} color="white" style={{paddingRight: 20}}/>
          </TouchableOpacity>
        </Left>
        {/* END TO SETUP LEFT VIEW */}

        {/* BEGIN TO SETUP BODY VIEW */}
          <Body style={styles.body}>
            <Text style={styles.text_title}>FAQ</Text>
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
          <View>
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
            <View style={[styles.faq_divider, { backgroundColor: "black" }]} />
          </View>
        ) : null}

        <Content>
          {this.state.data.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => this.onCheckFAQ(item.id,item.ItemName)}>
                {/* BEGIN TO SETUP FAQ VIEW */}
                {this.state.selectedLots == item.id ? (
                  <View>
                    <View style={[styles.row_main, { backgroundColor: "#e9e9e9" }]}>
                      <Text style={styles.row_text}>{item.ItemName}</Text>
                      <FontAwesome
                        name={I18nManager.isRTL ? "angle-left" : "angle-right"}
                        size={25}
                        color="#cccccc"/>
                    </View>
                    <View style={styles.faq_divider} />
                  </View>
                ) : (
                  <View>
                    <View style={[styles.row_main, { backgroundColor: "#ffffff" }]}>
                      <Text style={styles.row_text}>{item.ItemName}</Text>
                      <FontAwesome
                        name={I18nManager.isRTL ? "angle-left" : "angle-right"}
                        size={25}
                        color="#cccccc"/>
                    </View>
                    <View style={styles.faq_divider} />
                  </View>
                )}
                {/* END TO SETUP FAQ VIEW */}
              </TouchableOpacity>
            );
          })}
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
  row_main:{
    flexDirection: 'row',
    ...Platform.select({
      ios: {
        padding: Dimensions.get("window").height * 0.020,
      },
      android: {
        padding: Dimensions.get("window").height * 0.025,
      }
    }),
    justifyContent:'space-between',
    alignItems: 'center'
  },
  row_text:{
    color: '#363636',
    fontSize: moderateScale(16),
    fontFamily: font_type.FontLight
  },
  faq_divider:{
    height: Dimensions.get("window").height * 0.001,
    backgroundColor: '#e1e1e1'
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
