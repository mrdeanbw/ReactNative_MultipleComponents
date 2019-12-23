import React, { Component } from "react";
import {Text,View,Image,StatusBar,TouchableOpacity,Platform,ImageBackground,BackHandler,ListView,I18nManager,StyleSheet,Dimensions} from "react-native";
import {Container,Content,Button,Icon,Right,Item,Input,Header,Left,Body,Title,Fab} from "native-base";
import { FloatingAction } from "react-native-floating-action";
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

const actions = [
  {
    text: "Search",
    icon: require('./icon_search_fab.png'),
    name: "Search Button Click",
    color: "#0691ce",
    position: 1
  },
  {
    text: "Artical",
    icon: require('./icon_artical_fab.png'),
    name: "Artical Button Click",
    color: "#0691ce",
    position: 2
  },
  {
    text: "Message",
    icon: require('./icon_message_fab.png'),
    name: "Message Button Click",
    color: "#0691ce",
    position: 3
  },
  {
    text: "Activity",
    icon: require('./icon_bell_fab.png'),
    name: "Activity Button Click",
    color: "#0691ce",
    position: 4
  },
  {
    text: "Favorite",
    icon: require('./icon_favorite_fab.png'),
    name: "Favorite Button Click",
    color: "#0691ce",
    position: 5
  },
  {
    text: "Friends",
    icon: require('./icon_friends_fab.png'),
    name: "Friends Button Click",
    color: "#0691ce",
    position: 6
  }
];

export default class DrawerFABIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true
    };
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
      <ImageBackground source={GlobalInclude.Image3} style={styles.main_sec}>
        <View style={styles.main_sec}>
        {/* BEGIN TO SETUP HEADER VIEW */}
          <Header style={styles.header}>
          {/* BEGIN TO SETUP LEFT VIEW */}
            <Left style={styles.left} transparent>
              <TouchableOpacity
                style={styles.back_arrow}
                onPress={() => this.props.navigation.goBack()}>
                {I18nManager.isRTL ? (
                  <Icon name="ios-arrow-forward" style={styles.icon_color} />
                ) : (
                  <Icon name="ios-arrow-back" style={styles.icon_color} />
                )}
              </TouchableOpacity>
            </Left>
          {/* END TO SETUP LEFT VIEW */}

          {/* BEGIN TO SETUP BODY VIEW */}
            <Body style={styles.body}>
              <Title style={styles.header_title}>Category</Title>
            </Body>
          {/* END TO SETUP BODY VIEW */}
            <Right style={styles.right} />
          </Header>
        {/* END TO SETUP HEADER VIEW */}

          <Content style={styles.content_sec}>{/*body part*/}</Content>
        {/* BEGIN TO SETUP FLOATINGACTIONS VIEW */}
          <FloatingAction
            visible={true}
            actions={actions}
            buttonColor={"#0691ce"}
            overlayColor={"rgba(0,0,0,0.9)"}
            distanceToEdge={Dimensions.get("window").height * 0.04}
            onPressItem={name => alert(name)}/>
          {/* END TO SETUP FLOATINGACTIONS VIEW */}
        </View>
      </ImageBackground>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  main_sec: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width
  },
  header: {
    backgroundColor: "transparent",
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {
        height: Dimensions.get("window").height * 0.08
      },
      android: {
        height: 66,
        paddingTop: Dimensions.get("window").height * 0.02
      }
    }),
    elevation: 0
  },
  back_arrow: {
    width: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  left: {
    flex: 0.5,
    backgroundColor: "transparent"
  },
  body: {
    flex: 2,
    alignItems: "center"
  },
  right: {
    flex: 0.5
  },
  header_title: {
    color: "#fff",
    fontFamily: font_type.FontBold,
    fontSize: moderateScale(18)
  },
  icon_color: {
    color: "#fff"
  },
  content_sec: {
    height: Dimensions.get("window").height * 0.92,
    width: Dimensions.get("window").width
  }
});
// END TO MAKE STYLE
