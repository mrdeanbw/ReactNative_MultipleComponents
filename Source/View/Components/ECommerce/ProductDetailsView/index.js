import React, { Component } from "react";
import {Text,Image,TextInput,StatusBar,Platform,StyleSheet,Dimensions,TouchableOpacity,ListView,ImageBackground,ScrollView,Picker,Modal,I18nManager,AsyncStorage} from "react-native";
import {Container,Button,Right,Left,ListItem,Content,Body,Header} from "native-base";
import CheckBox from "react-native-check-box";
import { View } from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Dropdown } from "react-native-material-dropdown";
import Swiper from "react-native-swiper";
import { CachedImage } from "react-native-cached-image";
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";
var screenName = "";

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

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    const rowHasChanged = (r1, r2) => r1 !== r2;
    const ds = new ListView.DataSource({ rowHasChanged });

    const dataObjectsText = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 }
    ];

    const { navigation } = this.props;
    screenName = navigation.getParam("screenName");

    // BEGIN TO SET STATE
    this.state = {
      dot_index: 0,
      selectedLots: "2",
      modalVisible: false,
      dots: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],

      data: [
        { id: 0, productImage:  require('../MenuView/image_men.jpg') },
        { id: 1, productImage:  require('../MenuView/image_women.jpg') },
        { id: 2, productImage:  require('../MenuView/image_kids.jpg') },
        { id: 3, productImage:  require('../MenuView/image_women.jpg') },
        { id: 4, productImage:  require('../MenuView/image_kids.jpg') }
      ],

      productColor: [
        { id: 1, productDetailColor: "#0947ba", isSelected: false },
        { id: 2, productDetailColor: "#c4c9d7", isSelected: false }
      ],

      size: [
        { id: 1, value: "XS", isSelected: false },
        { id: 2, value: "S", isSelected: false },
        { id: 3, value: "M", isSelected: false },
        { id: 4, value: "L", isSelected: false },
        { id: 5, value: "XL", isSelected: false },
        { id: 6, value: "XXL", isSelected: false }
      ],

      selectedSocialShare: "2",
      index: 0,
      isColorViewOpen: false,
      isColorProductSelected: false,
      modalsizeVisible: false,
      selectedLots: "1",
      selectedSize: "1",
      isSizeViewOpen: false,
      isLiked: false,
      isLikeColor: "black",
      isLoading: true,
      dataSourceText: ds.cloneWithRows(dataObjectsText)
    };
    // END TO SET STATE
  }

  //BEGIN TO SETUP TOGGLEMODALS
  toggleModals(visible) {
    this.setState({ modalVisible: visible });
  }
  //END TO SETUP TOGGLEMODALS

  //BEGIN TO SETUP SETMODALVISIBLE
  setModalVisible(visible) {
    this.setState({ modalsizeVisible: visible });
  }
  //END TO SETUP SETMODALVISIBLE

  //BEGIN TO SETUP ONLIKECLICK
  onLikeClick() {
    if (this.state.isLiked == false) {
      alert('Add to WishList')
      this.setState({ isLiked: true, isLikeColor: "red" });
    } else {
      alert('Remove from WishList')
      this.setState({ isLiked: false, isLikeColor: "black" });
    }
  }
  //END TO SETUP ONLIKECLICK

  //BEGIN TO SETUP ONCHECKBOXPRESS
  onCheckBoxPress(id) {
    this.setState({
      selectedLots: id
    });
  }
  //END TO SETUP ONCHECKBOXPRESS

  //BEGIN TO SETUP ONSIZEPRESS
  onSizePress(id) {
    this.setState({
      selectedSize: id
    });
  }
  //END TO SETUP ONSIZEPRESS

  //BEGIN TO SETUP ONSOCIALPRESS
  onSocialPress(id) {
    this.setState({
      selectedSocialShare: id
    });
  }
  //END TO SETUP ONSOCIALPRESS

  //BEGIN TO SETUP HANDLEPRODUCTDETAILTABCLICK
  _handleProductDetailTabClick() {
    this.props.navigation.navigate("ProductDetailsTabView");
  }
  //END TO SETUP HANDLEPRODUCTDETAILTABCLICK

  //BEGIN TO SETUP HANDLEBAGNAVIGATION
  _handleBagNavigation() {
    alert('Cart Click')
  }
  //END TO SETUP HANDLEBAGNAVIGATION

  //BEGIN TO SETUP HANDLEWISHLISTNAVIGATION
  _handleWishListNavigation() {
    alert('Wishlist Click')
  }
  //END TO SETUP HANDLEWISHLISTNAVIGATION
  render() {

    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW

    var dot_index1 = 0;

    var shareDetails = [
      {
        id: 1,
        socialIcon: require('./icon_facebook.png'),
        socialBtnColor: "#426ead",
        title: "Facebook"
      },
      {
        id: 2,
        socialIcon:require('./icon_twitter.png'),
        socialBtnColor: "#00a7ed",
        title: "Twitter"
      },
      {
        id: 3,
        socialIcon: require('./icon_googleplus.png'),
        socialBtnColor: "#ec4e4e",
        title: "Google+"
      },
      {
        id: 4,
        socialIcon: require('./icon_bubble.png'),
        socialBtnColor: "#5ec10e",
        title: "Message"
      }
    ];

    return (
      <Container style={styles.main}>
      {/* BEGIN TO SETUP HEADER VIEW */}
        <Header androidStatusBarColor={"#0e1130"} style={styles.header}>
        {/* BEGIN TO SETUP LEFT VIEW */}
          <Left style={styles.left}>
            <TouchableOpacity style={styles.back_arrow} onPress={() => this.props.navigation.goBack()}>
              <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={35} color="white" style={{ paddingRight: 20 }}/>
            </TouchableOpacity>
          </Left>
        {/* END TO SETUP LEFT VIEW */}

        {/* BEGIN TO SETUP BODY VIEW */}
          <Body style={styles.body}>
            <Text style={styles.text_title}>Product Details</Text>
          </Body>
        {/* END TO SETUP BODY VIEW */}

        {/* BEGIN TO SETUP RIGHT VIEW */}
          <Right style={styles.right}>

          {/* BEGIN TO SETUP WISHLISTICON VIEW */}
              <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => this._handleWishListNavigation()}>
                <View style={styles.heart_bg}>
                  <FontAwesome name="heart" size={moderateScale(8)} style={styles.heart_icon}/>
                </View>
                <View style={styles.alert_bg}>
                  <Text style={styles.alert_txt}>2</Text>
                </View>
              </TouchableOpacity>

          {/* END TO SETUP WISHLISTICON VIEW */}

          {/* BEGIN TO SETUP CARTICON VIEW */}
              <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => this._handleBagNavigation()}>
                  <SimpleLineIcons name="handbag" size={moderateScale(18)} style={styles.bag_icon}/>
                  <View style={styles.alert_bg}>
                    <Text style={styles.alert_txt}>5</Text>
                  </View>
                </TouchableOpacity>
          {/* END TO SETUP CARTICON VIEW */}
          </Right>
        {/* END TO SETUP RIGHT VIEW */}
        </Header>
      {/* END TO SETUP HEADER VIEW */}

        <View>
          <View style={styles.share_detail_header}>
            <View style={styles.product_title_price_bg}>
            {/* BEGIN TO SETUP TEXT VIEW */}
              <Text style={styles.share_details_txt}>Lorem Ipsum</Text>
            {/* END TO SETUP TEXT VIEW */}

            {/* BEGIN TO SETUP PRICE VIEW */}
              <View style={styles.product_price_bg}>
                <Text style={[styles.share_details_txt,{textDecorationLine: "line-through",textDecorationStyle: "solid"}]}>
                  $100.00
                </Text>
                <Text style={styles.new_price_txt}>$90.10</Text>
              </View>
            {/* END TO SETUP PRICE VIEW */}
            </View>

          {/* BEGIN TO SETUP CART VIEW */}
            <View style={styles.share_details_bg}>
              <TouchableOpacity style={{ justifyContent: "center" }} onPress={() => this._handleBagNavigation()}>
                <Text style={[styles.share_details_txt, { color: "#ffffff" }]}>
                  Add to Bag
                </Text>
              </TouchableOpacity>
            </View>
          {/* END TO SETUP CART VIEW */}
          </View>

          <View style={styles.slider_bg}>
          {/* BEGIN TO SETUP SWIPER VIEW */}
            <Swiper
              showsButtons={false}
              autoplay={true}
              horizontal={false}
              index={0}
              loop={true}
              onIndexChanged={index => this.setState({ dot_index: index })}
              dot={<View />}
              activeDot={<View />}>
              {this.state.data.map((item, key) => {
                return (
                  <View style={styles.row_bg} key={key}>
                    <CachedImage style={styles.product_image} source={item.productImage}/>
                  </View>
                );
              })}
            </Swiper>
            {/* END TO SETUP SWIPER VIEW */}

            <View style={styles.dot_list_bg}>
              {this.state.dots.map((item, value) => {
                return (
                  <View style={styles.row_dot} key={value}>
                  {/* BEGIN TO SETUP DOT VIEW */}
                    <View style={item.id - 1 == this.state.dot_index ? [styles.dot, { backgroundColor: "#0e1130" }] : [styles.dot, { backgroundColor: "#aeaeae" }]}/>
                  {/* END TO SETUP DOT VIEW */}
                  </View>
                );
              })}
            </View>

            {/* BEGIN TO SETUP LIKE VIEW */}
              <TouchableOpacity style={styles.heart_bgblack} onPress={() => this.onLikeClick()}>
                <Image source={require('./icon_round_like.png')} style={[styles.heart_img, { tintColor: this.state.isLikeColor }]}/>
              </TouchableOpacity>
            {/* END TO SETUP LIKE VIEW */}

            {/* BEGIN TO SETUP SHARE VIEW */}
              <TouchableOpacity style={[styles.heart_bgblack, { right: Dimensions.get("window").width * 0.1 }]} onPress={() => {this.toggleModals(true)}}>
                <Image source={require('./icon_round_share.png')} style={styles.heart_img} />
              </TouchableOpacity>
            {/* END TO SETUP SHARE VIEW */}

            {/* BEGIN TO SETUP COLOR VIEW */}
              <View style={this.state.isColorViewOpen == false ? [styles.color_txt_bg,{marginRight: -(Dimensions.get("window").width * 0.05),transform: [{ rotate: I18nManager.isRTL ? "90deg" : "270deg" }]}]
                    : [styles.color_txt_bg,{marginRight: Dimensions.get("window").width * 0.13,transform: [{ rotate: I18nManager.isRTL ? "90deg" : "270deg" }]}]}>
                <TouchableOpacity onPress={() =>this.setState({isColorViewOpen: !this.state.isColorViewOpen})}>
                  <Text style={styles.share_details_txt}>Color</Text>
                </TouchableOpacity>
              </View>
            {/* END TO SETUP COLOR VIEW */}

            {/* BEGIN TO SETUP SIZE VIEW */}
              <View style={this.state.isSizeViewOpen == false ? [styles.size_txt_bg,{marginRight: -(Dimensions.get("window").width * 0.05),transform: [{rotate: I18nManager.isRTL ? "90deg" : "270deg" }]}] : [styles.size_txt_bg,{
                          marginRight: Dimensions.get("window").width * 0.13,transform: [{rotate: I18nManager.isRTL ? "90deg" : "270deg" }]}]}>
                <TouchableOpacity onPress={() =>this.setState({isSizeViewOpen: !this.state.isSizeViewOpen})}>
                  <Text style={styles.share_details_txt}>Size</Text>
                </TouchableOpacity>
              </View>
            {/* END TO SETUP SIZE VIEW */}

          {/* BEGIN TO SETUP VIEWDETAILS VIEW */}
            <View style={styles.btn_sec}>
              <TouchableOpacity style={[styles.btn_bg, { backgroundColor: "white" }]} onPress={() => this._handleProductDetailTabClick()}>
                <Text style={[styles.btn_text, { color: "#0691ce" }]}>
                  View Details
                </Text>
              </TouchableOpacity>
            </View>
          {/* END TO SETUP VIEWDETAILS VIEW */}
          </View>

        {/* BEGIN TO SETUP COLOR VIEW */}
          <View style={this.state.isColorViewOpen == true ? styles.row_color_view : null}>
            <Content>
              {this.state.productColor.map((item, index) => {
                return (
                  <View key={index}>
                    <TouchableOpacity onPress={() => this.onCheckBoxPress(item.id)} style={styles.color_touchable}>
                      <View style={this.state.selectedLots == item.id  ? [styles.color_list_bg,{borderColor: "#ffc700",backgroundColor: item.productDetailColor}] : [styles.color_list_bg,{borderColor: "transparent",backgroundColor: item.productDetailColor}]}/>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </Content>
          </View>
        {/* END TO SETUP COLOR VIEW */}

        {/* BEGIN TO SETUP SIZE VIEW */}
          <View style={this.state.isSizeViewOpen == true ? styles.row_color_view : null}>
            <Content>
              {this.state.size.map((item, index) => {
                return (
                  <View key={index}>
                    <TouchableOpacity onPress={() => this.onCheckBoxPress(item.id)} style={styles.color_touchable}>
                      <View style={this.state.selectedLots == item.id ? [styles.size_list,{borderColor: "#ffc700",backgroundColor: "#ffffff"}]
                            : [styles.size_list,{borderColor: "#b7b7b7",backgroundColor: "#ffffff"}]}>
                        <Text>{item.value}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </Content>
          </View>
        {/* END TO SETUP SIZE VIEW */}

        {/* BEGIN TO SETUP SIZEMODAL VIEW */}
          <Modal
            transparent={true}
            visible={this.state.modalsizeVisible}
            onRequestClose={() => {this.setModalVisible(!this.state.modalsizeVisible)}}>
            <View style={styles.modal_view_shadow_bg}>
              <View style={styles.modal_bg}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={{ marginRight: Dimensions.get("window").width * 0.08 }}>
                  {this.state.size.map((item, index) => {
                    return (
                      <View key={index}>
                      {/* BEGIN TO SETUP SIZE VIEW */}
                        <TouchableOpacity onPress={() => this.onSizePress(item.id)}>
                          <View style={this.state.selectedSize == item.id ? [styles.size_list, { borderColor: "#ffc700" }] : [styles.size_list, { borderColor: "#dfdfdf" }]}>
                            <Text> {item.value} </Text>
                          </View>
                        </TouchableOpacity>
                      {/* END TO SETUP SIZE VIEW */}
                      </View>
                    );
                  })}
                </ScrollView>

              {/* BEGIN TO SETUP CANCEL VIEW */}
                <TouchableOpacity style={{ justifyContent: "center" }} onPress={() => {this.setModalVisible(!this.state.modalsizeVisible)}}>
                  <Text style={styles.size_btn_txt}>Cancel</Text>
                </TouchableOpacity>
              {/* END TO SETUP CANCEL VIEW */}
              </View>
            </View>
          </Modal>
        {/* END TO SETUP SIZEMODAL VIEW */}

          <View style={{flexDirection: "column",height: Dimensions.get("window").height,width: Dimensions.get("window").width}}>
        {/* BEGIN TO SETUP MODAL VIEW */}
            <Modal
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => {this.state.modalVisible(false)}}>
              <View style={styles.modal_view}>
                <View style={styles.modal}>
              {/* BEGIN TO SETUP CANCEL AND SHARE AND APPLY VIEW */}
                  <View style={styles.modal_header}>
                    <TouchableOpacity onPress={() => {this.setState({ modalVisible: false })}}>
                      <Text style={styles.cancel_apply_txt}>Cancel</Text>
                    </TouchableOpacity>
                    <Text style={styles.share_txt}>Share</Text>
                    <TouchableOpacity onPress={() => {this.setState({ modalVisible: false })}}>
                      <Text style={styles.cancel_apply_txt}>Apply</Text>
                    </TouchableOpacity>
                  </View>
              {/* END TO SETUP CANCEL AND SHARE AND APPLY VIEW */}

                  <View style={styles.modal_bottom_view}>
                    {shareDetails.map((item, index) => {
                      return (
                        <View key={index}>
                          <TouchableOpacity style={styles.modal_row} onPress={() => this.onSocialPress(item.id)}>
                          {/* BEGIN TO SETUP SOCIAL VIEW */}
                            <View style={{flexDirection: "row",alignItems: "center"}}>
                              <View style={[styles.socialbtn_bg,{backgroundColor: item.socialBtnColor }]}>
                                <Image source={item.socialIcon} style={item.id == 1 ? styles.facebook_icon : styles.social_icon}/>
                              </View>
                              <Text style={[styles.social_txt,{color: item.socialBtnColor }]}>
                                {item.title}
                              </Text>
                            </View>
                          {/* END TO SETUP SOCIAL VIEW */}

                          {/* BEGIN TO SETUP SOCIALCHECK VIEW */}
                            {this.state.selectedSocialShare == item.id ? (
                              <MaterialIcons name="check" size={25} color={"#ffc700"}/>) : null}
                          {/* END TO SETUP SOCIALCHECK VIEW */}
                          </TouchableOpacity>

                        {/* BEGIN TO SETUP DIVIDER VIEW */}
                          <View style={item.id == shareDetails.length ? null : styles.modal_divider}/>
                        {/* END TO SETUP DIVIDER VIEW */}
                        </View>
                      );
                    })}
                  </View>
                </View>
              </View>
            </Modal>
          {/* END TO SETUP MODAL VIEW */}
          </View>
        </View>
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
	},
	body: {
		flex: 2,
		alignItems: 'center',
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
	},
  row_bg: {
		height: Dimensions.get("window").height * 0.8,
		width: Dimensions.get("window").width,
	},
	share_detail_header: {
		height: Dimensions.get("window").height * 0.1,
		flexDirection: 'row',
		paddingLeft: Dimensions.get("window").width * 0.05,
		paddingRight: Dimensions.get("window").width * 0.05,
    backgroundColor: 'white',
	},
  share_details_bg: {
		width: Dimensions.get("window").width * 0.3,
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: '#BD26FF',
	},
  share_details_txt: {
		color: '#0e1130',
		fontSize: moderateScale(16),
	},
	product_title_price_bg: {
		width: Dimensions.get("window").width * 0.65,
		paddingLeft: Dimensions.get("window").width * 0.005,
		paddingRight: Dimensions.get("window").width * 0.04,
		justifyContent: 'center',
		flexDirection: 'column',
		paddingTop: Dimensions.get("window").width * 0.03,
		paddingBottom: Dimensions.get("window").width * 0.03,
	},
  product_image: {
		height: Dimensions.get("window").height * 0.8,
		width: Dimensions.get("window").width,
		bottom: 0,
		position: 'absolute',
	},
  product_price_bg: {
		flexDirection: 'row',
	},
	new_price_txt: {
		color: '#ff0000',
		fontSize: moderateScale(16),
		paddingLeft: Dimensions.get("window").width * 0.02,
	},
  heart_bgblack: {
		position: 'absolute',
		width: Dimensions.get("window").width * 0.058,
		height: Dimensions.get("window").width * 0.058,
		right: Dimensions.get("window").width * 0.03,
		top: Dimensions.get("window").width * 0.03,
	},
  heart_img: {
		width: Dimensions.get("window").width * 0.058,
		height: Dimensions.get("window").width * 0.058,
		resizeMode: 'contain',
	},
  color_txt_bg: {
		position: 'absolute',
		right: 0,
		backgroundColor: '#D3D3D3',
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		paddingTop: Dimensions.get("window").width * 0.02,
		paddingLeft: Dimensions.get("window").width * 0.035,
		paddingRight: Dimensions.get("window").width * 0.035,
		paddingBottom: Dimensions.get("window").width * 0.01,
		marginTop: Dimensions.get("window").height * 0.25,
	},
	size_txt_bg: {
		position: 'absolute',
		right: 0,
		backgroundColor: '#D3D3D3',
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		paddingTop: Dimensions.get("window").width * 0.015,
		paddingLeft: Dimensions.get("window").width * 0.04,
		paddingRight: Dimensions.get("window").width * 0.04,
		paddingBottom: Dimensions.get("window").width * 0.03,
		marginTop: Dimensions.get("window").height * 0.4,
	},
	slider_bg: {
		height: Dimensions.get("window").height * 0.8,
		width: Dimensions.get("window").width,
	},
  btn_sec: {
		width: Dimensions.get("window").width * 0.9,
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		bottom: Dimensions.get("window").width * 0.11,
	},
	btn_bg: {
		width: Dimensions.get("window").width * 0.435,
		borderRadius: 5,
		paddingTop: Dimensions.get("window").width * 0.02,
		paddingBottom: Dimensions.get("window").width * 0.02,
		justifyContent: 'center',
		alignItems: 'center',
	},
  btn_text: {
		fontSize: moderateScale(15),
	},
	dot: {
		width: Dimensions.get("window").width * 0.02,
		height: Dimensions.get("window").width * 0.02,
		borderRadius: Dimensions.get("window").width * 0.01,
	},
	row_dot: {
		marginBottom: Dimensions.get("window").width * 0.012,
	},
  dot_list_bg: {
		height: Dimensions.get("window").height * 0.09,
		width: Dimensions.get("window").width * 0.03,
		marginTop: Dimensions.get("window").height * 0.29,
		marginLeft: 20,
		position: 'absolute',
	},
	row_color_view: {
		width: Dimensions.get("window").width * 0.18,
		height: Dimensions.get("window").height * 0.9,
		marginTop: Dimensions.get("window").width * 0.01,
		backgroundColor: '#D3D3D3',
		position: 'absolute',
		right: 0,
	},
	color_touchable: {
		paddingLeft: Dimensions.get("window").width * 0.02,
		paddingRight: Dimensions.get("window").width * 0.02,
	},
  color_list_bg: {
		margin: Dimensions.get("window").width * 0.02,
		height: Dimensions.get("window").height * 0.055,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		borderWidth: 2,
	},
	modal_view: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
		backgroundColor: '#0006',
		justifyContent: 'center',
		alignSelf: 'center',
		alignItems: 'center',
	},
  modal: {
		width: Dimensions.get("window").width * 0.8,
		backgroundColor: '#ebebeb',
		paddingTop: Dimensions.get("window").width * 0.024,
		borderRadius: 5,
	},
	modal_header: {
		backgroundColor: '#ebebeb',
		justifyContent: 'space-between',
		flexDirection: 'row',
		paddingBottom: Dimensions.get("window").width * 0.024,
		paddingLeft: Dimensions.get("window").width * 0.03,
		paddingRight: Dimensions.get("window").width * 0.03,
	},
	modal_bottom_view: {
		backgroundColor: 'white',
		paddingLeft: Dimensions.get("window").width * 0.03,
		paddingRight: Dimensions.get("window").width * 0.03,
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
	},
	cancel_apply_txt: {
		color: '#0691ce',
		fontSize: moderateScale(14),
	},
  share_txt: {
		color: '#0e1130',
		fontSize: moderateScale(14),
  },
  modal_row: {
		flexDirection: 'row',
		marginTop: Dimensions.get("window").width * 0.02,
		marginBottom: Dimensions.get("window").width * 0.024,
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: 'white',
	},
	socialbtn_bg: {
		width: Dimensions.get("window").width * 0.07,
		height: Dimensions.get("window").width * 0.07,
		borderRadius: Dimensions.get("window").width * 0.035,
		alignItems: 'center',
		justifyContent: 'center',
	},
  social_txt: {
		fontSize: moderateScale(14),
		marginLeft: Dimensions.get("window").width * 0.04,
	},
	modal_divider: {
		width: Dimensions.get("window").width * 0.77,
		height: 1,
		backgroundColor: '#ebebeb',
	},
  social_icon: {
		width: Dimensions.get("window").width * 0.042,
		height: Dimensions.get("window").width * 0.035,
		resizeMode: 'contain',
	},
  facebook_icon: {
		width: Dimensions.get("window").width * 0.045,
		height: Dimensions.get("window").width * 0.04,
		resizeMode: 'contain',
	},
	modal_view_shadow_bg: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
		backgroundColor: 'transparent',
	},
	modal_bg: {
		backgroundColor: 'white',
		borderRadius: 5,
		...Platform.select({
			ios: {
				bottom: Dimensions.get("window").height * 0.02,
			},
			android: {
				bottom: Dimensions.get("window").height * 0.07,
			},
		}),
		position: 'absolute',
		width: Dimensions.get("window").width * 0.9,
		flexDirection: 'row',
		alignSelf: 'center',
	},
  size_list: {
		margin: Dimensions.get("window").width * 0.01,
		height: Dimensions.get("window").height * 0.065,
		width: Dimensions.get("window").height * 0.065,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		borderWidth: 2,
	},
	size_btn_txt: {
		width: Dimensions.get("window").height * 0.08,
		justifyContent: 'center',
		alignSelf: 'center',
		alignItems: 'center',
		color: '#ffc700',
		marginRight: Dimensions.get("window").width * 0.01,
		fontSize: moderateScale(16),
	},
	share: {
		position: 'absolute',
		bottom: Dimensions.get("window").height * 0.003,
		left: Dimensions.get("window").height * 0.006,
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
