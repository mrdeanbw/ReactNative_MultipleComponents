import React, { Component } from "react";
import {Text,View,Image,StatusBar,TouchableOpacity,Platform,I18nManager,StyleSheet,Dimensions} from "react-native";
import {Content,Container,Right,Header,Left,Body} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import CheckBox from "react-native-check-box";

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

export default class Address extends Component {
  constructor(props) {
    super(props);
    // BEGIN TO SETUP STATE
    this.state = {
      selectedLots: "1",
      data: [
        {
          id: 1,
          flagimage: require('./VietNam_Image.png'),
          CountryName: "Lorem Ipsum"
        },
        {
          id: 2,
          flagimage: require('./Singapore_Image.png'),
          CountryName: "Lorem Ipsum"
        },
        {
          id: 3,
          flagimage: require('./Thailand_Image.png'),
          CountryName: "Lorem Ipsum"
        },
        {
          id: 4,
          flagimage: require('./Malasia_Image.png'),
          CountryName: "Lorem Ipsum"
        },
        {
          id: 5,
          flagimage: require('./Indonesia_Image.png'),
          CountryName: "Lorem Ipsum"
        },
        {
          id: 6,
          flagimage: require('./Philippines_Image.png'),
          CountryName: "Lorem Ipsum"
        }
      ]
    };
    // END TO SETUP STATE
  }

  //BEGIN TO SETUP ONCHECKBOXPRESS
  onCheckBoxPress(id) {
    this.setState({
      selectedLots: id
    });
  }
  //END TO SETUP ONCHECKBOXPRESS

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
            <Text style={styles.text_title}>Country</Text>
          </Body>
        {/* END TO SETUP BODY VIEW */}

        {/* BEGIN TO SETUP RIGHT VIEW */}
          <Right style={styles.right}>
            <TouchableOpacity style={styles.back_arrow} onPress={() => alert("Done")}>
              <Text style={styles.text_done}>Done</Text>
            </TouchableOpacity>
          </Right>
        {/* END TO SETUP RIGHT VIEW */}
        </Header>
      {/* END TO SETUP HEADER VIEW */}
        <Content>
          {this.state.data.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => this.onCheckBoxPress(item.id)}>
                <View style={styles.row_main}>
                {/* BEGIN TO SETUP FLAGIMAGE VIEW */}
                  <View style={styles.back_arrow}>
                    <Image source={item.flagimage} style={styles.flag_icon} />
                  </View>
                {/* END TO SETUP FLAGIMAGE VIEW */}

                {/* BEGIN TO SETUP COUNTRYNAME VIEW */}
                  <View style={styles.address_textbg}>
                    <Text style={[styles.address_text, { color: "#000000" }]}>
                      {item.CountryName}
                    </Text>
                  </View>
                {/* END TO SETUP COUNTRYNAME VIEW */}

                {/* BEGIN TO SETUP CHECKBOX VIEW */}
                  <View style={styles.check_arrow}>
                    {this.state.selectedLots == item.id ? (
                      <CheckBox
                        isChecked={true}
                        checkBoxColor={"#000000"}
                        style={Dimensions.get("window").width * 0.1}
                        checkedImage={
                          <Ionicons
                            name="ios-checkmark"
                            size={40}
                            color="#ffc700"/>
                        }/>
                      ) : (
                      <CheckBox
                        isChecked={true}
                        checkBoxColor={"#ffffff"}
                        style={Dimensions.get("window").width * 0.1}
                        checkedImage={
                          <Ionicons
                            name="ios-checkmark-outline"
                            size={40}
                            color="#ffffff"/>
                        }/>
                    )}
                  </View>
                {/* END TO SETUP CHECKBOX VIEW */}
                </View>
                <View style={styles.address_divider} />
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
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  flag_icon: {
    width: Dimensions.get("window").width * 0.08,
    height: Dimensions.get("window").width * 0.08,
    resizeMode: 'contain',
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
  text_done:{
    color: 'white',
    fontSize: moderateScale(16),
    fontFamily: font_type.FontLight,
  },
  address_text:{
    fontSize: moderateScale(16),
    fontFamily: font_type.FontLight,
    textAlign: 'left',
  },
  address_divider:{
    height: Dimensions.get("window").height * 0.001,
    backgroundColor: '#e1e1e1',
    marginLeft: Dimensions.get("window").height * 0.1,
    marginRight: Dimensions.get("window").height * 0.022
  },
  row_main: {
    marginLeft: Dimensions.get("window").width * 0.015,
    padding: Dimensions.get("window").height * 0.010,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get("window").width
  },
  check_arrow:{
        paddingRight: Dimensions.get("window").height * 0.025,
  },
  address_textbg: {
    width: Dimensions.get("window").width * 0.75,
    marginLeft: Dimensions.get("window").width * 0.050
  }
});
// END TO MAKE STYLE
