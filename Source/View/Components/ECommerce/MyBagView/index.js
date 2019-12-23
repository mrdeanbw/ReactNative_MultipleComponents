import React, { Component } from "react";
import {View,Text,Image,StatusBar,Platform,TouchableOpacity,ListView,ScrollView,I18nManager,AsyncStorage,StyleSheet,Dimensions} from "react-native";
import {Container,Button,Right,Left,Content,Body,Header} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Dropdown from "../../../ThirdPartyModule/Dropdown/dropdown/";
import { CachedImage } from "react-native-cached-image";
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";
var screenName = "",ProductData = [];

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

var data = [
  {
    id: 1,
    isLike: true,
    productImage: require('../MenuView/image_women.jpg'),
    productTitle: "Lorem Ipsum",
    price: "$10.00",
    size: [
      { id: 1, value: "M" },
      { id: 2, value: "L" },
      { id: 3, value: "X" },
      { id: 4, value: "XL" }
    ],
    color: [
      { id: 1, color: "#e70f08" },
      { id: 2, color: "#c0c0c0" },
      { id: 3, color: "#885d25" }
    ],
    quantity: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 }
    ],
    selectedColorId: 1
  },
  {
    id: 2,
    isLike: true,
    productImage: require('../MenuView/image_men.jpg'),
    productTitle: "Lorem Ipsum",
    price: "$20.10",
    size: [
      { id: 1, value: "M" },
      { id: 2, value: "L" },
      { id: 3, value: "X" },
      { id: 4, value: "XL" }
    ],
    color: [
      { id: 1, color: "#0947ba" },
      { id: 2, color: "#c4c9d7" },
      { id: 3, color: "#3CB371" },
      { id: 4, color: "#885d25" }
    ],
    quantity: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 }
    ],
    selectedColorId: 1
  },
  {
    id: 3,
    isLike: true,
    productImage: require('../MenuView/image_kids.jpg'),
    productTitle: "Lorem Ipsum",
    price: "$30.50",
    size: [
      { id: 1, value: "M" },
      { id: 2, value: "L" },
      { id: 3, value: "X" },
      { id: 4, value: "XL" }
    ],
    color: [
      { id: 1, color: "#e70f08" },
      { id: 2, color: "#c0c0c0" },
      { id: 3, color: "#885d25" },
      { id: 4, color: "#FFFF00" },
      { id: 5, color: "#3CB371" },
      { id: 6, color: "#885d25" }
    ],
    quantity: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 }
    ],
    selectedColorId: 1
  }
];

export default class MyBag extends Component {
  constructor(props) {
    super(props);

    if (this.props.navigation.state.params) {
      const navParams = this.props.navigation.state.params;
      screenName = navParams.name;
    }

    this.state = {
      screenArrivedFrom: "",
      typography: "M",
      typography1: 1
    };
    this.onChangeText = this.onChangeText.bind(this);
  }

  componentWillMount() {
    ProductData = data;
  }



  //BEGIN TO SETUP HANDLEWISHLISTNAVIGATION
  _handleWishListNavigation() {
    alert('Wish List Click')
  }
  //END TO SETUP HANDLEWISHLISTNAVIGATION

  //BEGIN TO SETUP ONCHANGETEXT
  onChangeText(text) {
    this.setState({ user_category_id: text });
  }
  //END TO SETUP ONCHANGETEXT

  //BEGIN TO SETUP ONITEMCLICK
  onItemClick() {
    alert('Check Out Click')
  }
  //END TO SETUP ONITEMCLICK

  //BEGIN TO SETUP ONCHECKBOXPRESSCOLOR
  onCheckBoxPressColor(productid, selectedColorId, colorid) {
    var i;
    for (i = 0; i < ProductData.length; i++) {
      if (ProductData[i].id == productid) {
        ProductData[i].selectedColorId = colorid;
      }
    }
    ProductData = ProductData;
    this.setState({
      ProductData: ProductData
    });
  }
  //END TO SETUP ONCHECKBOXPRESSCOLOR

  //BEGIN TO SETUP HANDLELIKE
  _handleLike(id, like) {
    var i;
    for (i = 0; i < ProductData.length; i++) {
      if (ProductData[i].id == id) {
        if (like == true) {
          ProductData[i].isLike = false;
        } else {
          ProductData[i].isLike = true;
        }
      }
    }
    ProductData = ProductData;
    this.setState({
      ProductData: ProductData
    });
  }
  //END TO SETUP HANDLELIKE



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
      {/* BEGIN TO SETUP HEADER VIEW */}
        <Header androidStatusBarColor={"#0e1130"} style={styles.header}>
        {/* BEGIN TO SETUP LEFT VIEW */}
          <Left style={styles.left}>
            <TouchableOpacity style={styles.backArrow} onPress={() => this.props.navigation.goBack()}>
              <FontAwesome
                name={I18nManager.isRTL ? "angle-right" : "angle-left"}
                size={30}
                color="white"
                style={{ paddingRight: 20 }}/>
            </TouchableOpacity>
          </Left>
        {/* END TO SETUP LEFT VIEW */}

        {/* BEGIN TO SETUP BODY VIEW */}
          <Body style={styles.body}>
            <Text style={styles.text_title}>Bag</Text>
          </Body>
        {/* END TO SETUP BODY VIEW */}

        {/* BEGIN TO SETUP RIGHT VIEW */}
          <Right style={styles.right}>
            <View style={{ flexDirection: "row" }}>
            {/* BEGIN TO SETUP WISHICON VIEW */}
              <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => this._handleWishListNavigation()}>
                <View style={styles.heart_bg}>
                  <FontAwesome
                    name="heart"
                    size={moderateScale(8)}
                    style={styles.heart_icon}/>
                </View>
                <View style={styles.alert_bg}>
                  <Text style={styles.alert_txt}>2</Text>
                </View>
              </TouchableOpacity>
            {/* END TO SETUP WISHICON VIEW */}

            {/* BEGIN TO SETUP CARTICON VIEW */}
              <View style={{ flexDirection: "row" }}>
                <SimpleLineIcons
                  name="handbag"
                  size={moderateScale(18)}
                  style={styles.bag_icon}/>
                <View style={styles.alert_bg}>
                  <Text style={styles.alert_txt}>3</Text>
                </View>
              </View>
            {/* END TO SETUP CARTICON VIEW */}
            </View>
          </Right>
        {/* END TO SETUP RIGHT VIEW */}
        </Header>
      {/* END TO SETUP HEADER VIEW */}
        <Content>
          {ProductData.map((item, index) => {
            return (
              <View style={styles.row} key={index}>
                <TouchableOpacity style={styles.row_bg} activeOpacity={1}>
                {/* BEGIN TO SETUP IMAGE VIEW */}
                  <CachedImage source={item.productImage} style={styles.product_image}>
                    {item.isLike == true ? (
                      <TouchableOpacity onPress={() => this._handleLike(item.id, item.isLike)}>
                        <FontAwesome
                          name="heart"
                          size={18}
                          color={"red"}
                          style={styles.heart_list_icon}/>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity onPress={() => this._handleLike(item.id, item.isLike)}>
                        <FontAwesome
                          name="heart"
                          size={18}
                          color={"#cecece"}
                          style={styles.heart_list_icon}/>
                      </TouchableOpacity>
                    )}
                  </CachedImage>
                {/* END TO SETUP IMAGE VIEW */}

                  <View style={styles.product_detail_bg}>
                  {/* BEGIN TO SETUP PRODUCTTITLE VIEW */}
                    <Text style={styles.product_title_txt}>{item.productTitle}</Text>
                  {/* END TO SETUP PRODUCTTITLE VIEW */}

                  {/* BEGIN TO SETUP PRICE AND CLOSE VIEW */}
                    <View style={[styles.detail_field_row,{paddingTop: Dimensions.get("window").width * 0.01,paddingBottom: Dimensions.get("window").width * 0.01}]}>
                      <Text style={styles.price_txt}>{item.price}</Text>
                      <TouchableOpacity style={styles.close_icon_bg} onPress={() => alert("Close Button Click")}>
                        <FontAwesome
                          name="close"
                          size={12}
                          style={styles.close_img}/>
                      </TouchableOpacity>
                    </View>
                  {/* END TO SETUP PRICE AND CLOSE VIEW */}

                  {/* BEGIN TO SETUP SIZE VIEW */}
                    <View style={[styles.detail_field_row,{ marginTop: Dimensions.get("window").width * 0.03 }]}>
                      <Text style={styles.product_title_txt}>Size</Text>
                      <View>
                        <Dropdown
                          data={item.size}
                          ref="catInput"
                          value={this.state.typography}
                          onChangeText={this.onChangeText}
                          labelHeight={0}
                          containerStyle={styles.drop_style}
                          baseColor="rgba(0, 0, 0, .00)"
                          dropdownPosition={1}/>
                      </View>
                    </View>
                  {/* END TO SETUP SIZE VIEW */}

                  {/* BEGIN TO SETUP COLOR VIEW */}
                    <View style={[styles.detail_field_row,{ marginTop: Dimensions.get("window").width * 0.015 }]}>
                      <Text style={styles.product_title_txt}>Color</Text>
                      <View style={styles.list_color_bg}>
                        <ScrollView
                          horizontal={true}
                          showsHorizontalScrollIndicator={false}>
                          {item.color.map((itemColor, index) => {
                            return (
                              <View key={index}>
                                <TouchableOpacity
                                  onPress={() =>
                                    this.onCheckBoxPressColor(
                                      item.id,
                                      item.selectedColorId,
                                      itemColor.id
                                    )}
                                  style={item.selectedColorId == itemColor.id ? [styles.color_viewer,{backgroundColor: itemColor.color,marginRight: Dimensions.get("window").width * 0.02,borderColor: "#ffc700"}]
                                      : [styles.color_viewer,{backgroundColor: itemColor.color,marginRight: Dimensions.get("window").width * 0.02,borderColor: "transparent"}]}/>
                              </View>
                            );
                          })}
                        </ScrollView>
                      </View>
                    </View>
                  {/* END TO SETUP COLOR VIEW */}

                  {/* BEGIN TO SETUP QUANTITY VIEW */}
                    <View style={[styles.detail_field_row,{marginTop: Dimensions.get("window").width * 0.03,marginBottom: Dimensions.get("window").width * 0.15}]}>
                      <Text style={styles.product_title_txt}>Quantity</Text>
                    <View>
                      <Dropdown
                          data={item.quantity}
                          ref="catInput1"
                          value={this.state.typography1}
                          onChangeText={this.onChangeText}
                          labelHeight={0}
                          containerStyle={styles.drop_style}
                          baseColor="rgba(0, 0, 0, .00)"
                          dropdownPosition={1}/>
                      </View>
                    </View>
                  {/* END TO SETUP QUANTITY VIEW */}
                  </View>
                </TouchableOpacity>

                <View style={item.id === ProductData.length ? null : styles.divider}/>
              </View>
            );
          })}
        </Content>

        <View style={styles.divider} />

        {/* BEGIN TO SETUP CHECKOUT VIEW */}
        <View style={styles.bottom_view}>
          <TouchableOpacity style={styles.footer_btn_bg} onPress={this.onItemClick.bind(this)}>
            <Text style={styles.footer_btn_txt}>CheckOut</Text>
          </TouchableOpacity>
        </View>
        {/* END TO SETUP CHECKOUT VIEW */}
      </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
	container: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
		backgroundColor: 'white',
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
  bag_icon: {
		marginLeft: Dimensions.get("window").width * 0.04,
		color: 'white',
	},
  heart_icon: {
		color: 'white',
		alignSelf: 'center',
	},
	heart_bg: {
		width: Dimensions.get("window").width * 0.054,
		height: Dimensions.get("window").width * 0.054,
		borderRadius: Dimensions.get("window").width * 0.027,
		backgroundColor: 'transparent',
		borderWidth: 1,
		borderColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: Dimensions.get("window").width * 0.005,
	},
	bottom_view: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height * 0.089,
		backgroundColor: 'rgba(0,0,0,0)',
		alignItems: 'center',
		justifyContent: 'center',
	},
  divider: {
		backgroundColor: '#d8d8d8',
		height: Dimensions.get("window").height * 0.001,
		width: Dimensions.get("window").width,
	},
  footer_btn_bg: {
		width: Dimensions.get("window").width * 0.92,
		alignSelf: 'center',
		backgroundColor: '#ff6347',
		paddingTop: Dimensions.get("window").width * 0.025,
		paddingBottom: Dimensions.get("window").width * 0.025,
		borderRadius: 5,
	},
	footer_btn_txt: {
		color: 'white',
		fontSize: moderateScale(16),
		fontFamily: font_type.FontLight,
		textAlign: 'center',
	},
  row_bg: {
		width: Dimensions.get("window").width * 0.92,
		alignSelf: 'center',
		flexDirection: 'row',
		marginTop: Dimensions.get("window").width * 0.04,
		marginBottom: Dimensions.get("window").width * 0.04,
	},
	product_image: {
		width: Dimensions.get("window").width * 0.44,
	},
  product_detail_bg: {
		width: Dimensions.get("window").width * 0.44,
		marginLeft: Dimensions.get("window").width * 0.04,
		backgroundColor: 'rgba(0,0,0,0)',
	},
	heart_list_icon: {
		alignSelf: 'flex-end',
		marginTop: Dimensions.get("window").width * 0.025,
		marginRight: Dimensions.get("window").width * 0.025,
	},
  product_title_txt: {
		color: '#0e1130',
		fontSize: moderateScale(16),
		fontFamily: font_type.FontLight,
		textAlign: 'left',
	},
	price_txt: {
		color: '#ff0000',
		fontSize: moderateScale(16),
		fontFamily: font_type.FontLight,
	},
	detail_field_row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
  close_icon_bg: {
		backgroundColor: '#cecece',
		width: Dimensions.get("window").width * 0.048,
		height: Dimensions.get("window").width * 0.048,
		borderRadius: Dimensions.get("window").width * 0.024,
		alignItems: 'center',
		justifyContent: 'center',
	},
  close_img: {
		alignSelf: 'center',
		color: 'white',
		...Platform.select({
			ios: {
				paddingBottom: Dimensions.get("window").width * 0.003,
			},
			android: {},
		}),
	},
	list_color_bg: {
		width: Dimensions.get("window").width * 0.22,
		height: 20,
		paddingTop: Dimensions.get("window").width * 0.01,
	},
  color_viewer: {
		height: Dimensions.get("window").width * 0.04,
    width: Dimensions.get("window").width * 0.04,
    borderRadius: 3,
    borderWidth: 2,
	},
	row: {
		width: Dimensions.get("window").width,
		backgroundColor: 'rgba(0,0,0,0)',
	},
	text: {
		fontSize: 30,
		alignSelf: 'center',
		color: 'red',
	},
	drop_style: {
		backgroundColor: 'transparent',
		width: moderateScale(75),
		height: moderateScale(28),
		borderWidth: 0.5,
		borderColor: 'lightgrey',
		borderRadius: 4,
	},
	alert_bg: {
		width: Dimensions.get("window").width * 0.03,
		height: Dimensions.get("window").width * 0.03,
		borderRadius: Dimensions.get("window").width * 0.015,
		backgroundColor: '#000000',
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: -(Dimensions.get("window").width * 0.018),
	},
	alert_txt: {
		fontSize: moderateScale(8),
		fontFamily: font_type.FontBold,
		color: 'white',
	},
});
// END TO MAKE STYLE
