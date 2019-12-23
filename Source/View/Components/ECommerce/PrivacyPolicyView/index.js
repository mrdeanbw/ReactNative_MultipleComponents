import React, { Component } from "react";
import {View,Text,Image,StatusBar,Platform,TouchableOpacity,StyleSheet,Dimensions,ListView,ImageBackground,ScrollView,Picker,I18nManager} from "react-native";
import {Container,Button,Right,Left,ListItem,Content,Body,Header,Input} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

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

export default class PrivacyPolicy extends Component {
  constructor(props) {
    super(props);
    // BEGIN TO SET STATE
    this.state = {
      isSearch: false
    };
    // END TO SET STATE
  }


  render() {

    return (
      <View style={styles.main}>
      {/* BEGIN TO SETUP HEADER VIEW */}
        <Header androidStatusBarColor={"#0e1130"} style={styles.header}>
        {/* BEGIN TO SETUP LEFT VIEW */}
          <Left style={styles.left}>
          <TouchableOpacity style={styles.back_arrow} onPress={() => this.props.navigation.goBack()}>
            <FontAwesome name={I18nManager.isRTL ? 'angle-right' : 'angle-left'} size={30} color="white" style={{paddingRight: 20}}/>
          </TouchableOpacity>
          </Left>
        {/* END TO SETUP LEFT VIEW */}

        {/* BEGIN TO SETUP BODY VIEW */}
          <Body style={styles.body}>
            <Text style={styles.text_title}>Privacy Policy</Text>
          </Body>
        {/* END TO SETUP BODY VIEW */}

        {/* BEGIN TO SETUP RIGHT VIEW */}
          <Right style={styles.right}>
            <TouchableOpacity style={styles.heart_bg} onPress={() => this.setState({ isSearch: !this.state.isSearch })}>
              <EvilIcons name="search" size={30} style={styles.heart_icon} />
            </TouchableOpacity>
          </Right>
        {/* END TO SETUP RIGHT VIEW */}
        </Header>
      {/* END TO SETUP HEADER VIEW */}

      {/* BEGIN TO SETUP SEARCH VIEW */}
        {this.state.isSearch ? (
          <View style={styles.search_view_bg}>
            <View style={styles.search_view}>
              <Ionicons name="ios-search" size={20} color="#8e8e93" style={{ marginLeft: 10 }}/>
              <Input
                style={styles.search_input}
                placeholder="Search"
                placeholderTextColor="#8e8e93"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="default"
                selectionColor="#6d6d71"/>
            </View>
          </View>
        ) : null}
      {/* END TO SETUP SEARCH VIEW */}

        <ScrollView>
          <View style={styles.txt}>
          {/* BEGIN TO SETUP TITLE VIEW */}
            <Text style={styles.title}>
              Loren ipsum dolor sit amet,consectetur adipiscing elit
            </Text>
          {/* END TO SETUP TITLE VIEW */}

          {/* BEGIN TO SETUP QUS VIEW */}
            <View style={{paddingRight: Dimensions.get("window").width * 0.05,paddingLeft: Dimensions.get("window").width * 0.05}}>
              <Text style={styles.qus}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudan-tium,totam rem aperiam,eaque ipsa
                quae ab illo inventore veritatis et quia architecto beatae vitae
                dicta sunt explicabo. Nemo enim ipsam vo-luptatem quia voluptas
                sit aspernatur aut odit aut fugit,sed quia consequuntur magni
                dolores eos qui ratione voluptatem est,qui dolorem ipsum quia
                dolor sit amet,consectetur,adipisci velit,sed quia non numquam
                eius modi tempor incidunt ut lalbore et dolor magnam aliquam
                quaerat vo-luptatem.
              </Text>
            </View>
          {/* END TO SETUP QUS VIEW */}
          </View>
          <View style={styles.first_que_view}>
          {/* BEGIN TO SETUP TITLE VIEW */}
            <Text style={[styles.title, { paddingRight: Dimensions.get("window").height * 0.02 }]}>
              Excepteur sint occaecat cupidatat non proi -dent
            </Text>
          {/* END TO SETUP TITLE VIEW */}

          {/* BEGIN TO SETUP QUS VIEW */}
            <Text style={[styles.qus, { paddingLeft: Dimensions.get("window").width * 0.05 }]}>
              Sed do eiusmod tempor incididunt ut laborc
            </Text>
          {/* END TO SETUP QUS VIEW */}

          {/* BEGIN TO SETUP ICON AND TEXT VIEW */}
            <View style={{ flexDirection: "row" }}>
              <View style={styles.arrow_view}>
                <FontAwesome name="chevron-right" size={10} color="white" />
              </View>
              <Text style={[styles.qus, { paddingTop: Dimensions.get("window").height * 0.02 }]}>
                Ut enim ad minim veniam
              </Text>
            </View>
          {/* END TO SETUP ICON AND TEXT VIEW */}

          {/* BEGIN TO SETUP ICON AND TEXT VIEW */}
            <View style={{ flexDirection: "row" }}>
              <View style={styles.arrow_view}>
                <FontAwesome name="chevron-right" size={10} color="white" />
              </View>
              <Text style={[styles.qus, { paddingTop: Dimensions.get("window").height * 0.02 }]}>
                sunt in cuipa qui officia doscrunt mollit
              </Text>
            </View>
          {/* END TO SETUP ICON AND TEXT VIEW */}

          {/* BEGIN TO SETUP ICON AND TEXT VIEW */}
            <View style={{ flexDirection: "row" }}>
              <View style={styles.arrow_view}>
                <FontAwesome name="chevron-right" size={10} color="white" />
              </View>
              <Text style={[styles.qus, { paddingTop: Dimensions.get("window").height * 0.02 }]}>
                Neque porro quisquam
              </Text>
            </View>
          {/* END TO SETUP ICON AND TEXT VIEW */}

          {/* BEGIN TO SETUP TEXT VIEW */}
            <Text style={[styles.title,{paddingRight: Dimensions.get("window").height * 0.02,paddingTop: Dimensions.get("window").height * 0.03}]}>
              Quis autem vel eum iure reprehenderit.qui in ea voluptate velit
              esse quam nihil molest?
            </Text>
          {/* BEGIN TO SETUP TEXT VIEW */}
          </View>
        </ScrollView>
      </View>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: '#fff',
	},
	header: {
		backgroundColor: '#ff6347',
		height: Dimensions.get("window").height * 0.1,
		borderBottomWidth: 0,
		...Platform.select({
			ios: {
				paddingTop: Dimensions.get("window").height * 0.02,
			},
			android: {
				paddingTop: Dimensions.get("window").width * 0.04,
			},
		}),
		elevation: 0,
		paddingLeft: Dimensions.get("window").width * 0.05,
		paddingRight: Dimensions.get("window").width * 0.05,
	},
  left: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0)',
	},
  body: {
		flex: 2,
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0)',
	},
  text_title: {
		color: 'white',
		fontSize: moderateScale(20),
		alignSelf: 'center',
		fontFamily: font_type.FontLight,
	},
	right: {
		flex: 1,
		alignItems: 'center',
	},
	heart_icon: {
		color: 'white',
		alignSelf: 'center',
	},
	txt: {
		backgroundColor: '#fff',
	},
	title: {
		color: '#362f2d',
		fontFamily: font_type.FontLight,
		fontSize: moderateScale(16),
		paddingLeft: Dimensions.get("window").width * 0.05,
		paddingTop: Dimensions.get("window").height * 0.05,
	},
	qus: {
		paddingTop: Dimensions.get("window").height * 0.01,
		fontSize: moderateScale(16),
		fontFamily: font_type.FontLight,
		color: '#111111',
	},
	arrow_view: {
		width: Dimensions.get("window").height * 0.024,
		height: Dimensions.get("window").height * 0.024,
		backgroundColor: '#000000',
		borderRadius: Dimensions.get("window").height * 0.012,
		justifyContent: 'center',
		alignItems: 'center',
		paddingLeft: I18nManager.isRTL ? 0 : Dimensions.get("window").height * 0.003,
		marginRight: I18nManager.isRTL ? 0 : Dimensions.get("window").height * 0.022,
		paddingRight: I18nManager.isRTL ? Dimensions.get("window").height * 0.003 : 0,
		marginLeft: Dimensions.get("window").width * 0.09,
		marginTop: Dimensions.get("window").height * 0.025,
	},
	first_que_view: {
		backgroundColor: '#fff',
		flex: 1,
		flexDirection: 'column',
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
  heart_bg: {
    width: 40,
    height: 40,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
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
