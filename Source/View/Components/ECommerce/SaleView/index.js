import React, { Component } from "react";
import {Text,View,Image,StatusBar,StyleSheet,Dimensions,TouchableOpacity,Platform,BackHandler,ListView,Modal,ScrollView,I18nManager,AsyncStorage} from "react-native";
import {Content,Container,Right,Header,Left,Body,Title} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CheckBox from "react-native-check-box";
import { CachedImage } from "react-native-cached-image";
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";

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

export default class Sale extends Component {
  constructor(props) {
    super(props);


    const rowHasChanged = (r1, r2) => r1 !== r2;
    const ds = new ListView.DataSource({ rowHasChanged });

    const dataObjects = [
      {
        id: 1,
        itemImage: require('../MenuView/image_women.jpg'),
        itemTitle: "Lorem Ipsum",
        itemPrice: "$100.00",
        oldPrice: "$150.00",
        saleOffer: "50% Off"
      },
      {
        id: 2,
        itemImage: require('../MenuView/image_men.jpg'),
        itemTitle: "Lorem Ipsum",
        itemPrice: "$200.00",
        oldPrice: "$230.00",
        saleOffer: "20% Off"
      },
      {
        id: 3,
        itemImage: require('../MenuView/image_kids.jpg'),
        itemTitle: "Lorem Ipsum",
        itemPrice: "$150.00",
        oldPrice: "$160.00",
        saleOffer: "5% Off"
      },
      {
        id: 4,
        itemImage: require('../MenuView/image_men.jpg'),
        itemTitle: "Lorem Ipsum",
        itemPrice: "$100.00",
        oldPrice: "$110.00",
        saleOffer: "10% Off"
      }
    ];

    this.state = {
      dataSource: ds.cloneWithRows(dataObjects),
      category: [
        { id: 1, categoryName: "Lorem Ipsum" },
        { id: 2, categoryName: "Lorem Ipsum" },
        { id: 3, categoryName: "Lorem Ipsum" },
        { id: 4, categoryName: "Lorem Ipsum" },
        { id: 5, categoryName: "Lorem Ipsum" },
        { id: 6, categoryName: "Lorem Ipsum" },
        { id: 7, categoryName: "Lorem Ipsum" },
        { id: 8, categoryName: "Lorem Ipsum" },
        { id: 9, categoryName: "Lorem Ipsum" },
        { id: 10, categoryName: "Lorem Ipsum" },
        { id: 11, categoryName: "Lorem Ipsum" },
        { id: 12, categoryName: "Lorem Ipsum" }
      ],

      sort: [
        { id: 1, sortName: "Lorem Ipsum" },
        { id: 2, sortName: "Lorem Ipsum" },
        { id: 3, sortName: "Lorem Ipsum" },
        { id: 4, sortName: "Lorem Ipsum" },
        { id: 5, sortName: "Lorem Ipsum" },
        { id: 6, sortName: "Lorem Ipsum" },
        { id: 7, sortName: "Lorem Ipsum" },
        { id: 8, sortName: "Lorem Ipsum" },
        { id: 9, sortName: "Lorem Ipsum" }
      ],

      modalVisible: false,
      modalCategoryVisible: false,
      modalSortVisible: false,
      selectedLots: "2"
    };
  }

  //BEGIN TO SETUP HANDLEPRODUCTDETAILCLICK
  _handleProductDetailClick() {
    alert('ProductDetail Click')
  }
  //END TO SETUP HANDLEPRODUCTDETAILCLICK

  //BEGIN TO SETUP HANDLEBAGNAVIGATION
  _handleBagNavigation() {
    alert('Cart Button Click')
  }
  //END TO SETUP HANDLEBAGNAVIGATION

  //BEGIN TO SETUP HANDLEWISHLISTNAVIGATION
  _handleWishListNavigation() {
    alert('WishList Button Click')
  }
  //END TO SETUP HANDLEWISHLISTNAVIGATION

  //BEGIN TO SETUP RENDERROW
  _renderRow(rowData) {
    return (
      <TouchableOpacity style={styles.row_main} onPress={() => this._handleProductDetailClick()}>
        <CachedImage source={rowData.itemImage} style={styles.item_image} />
        {/* BEGIN TO SETUP SALEOFFER VIEW */}
          <View style={styles.sale_offer_view}>
            <Text style={styles.sale_text}>{rowData.saleOffer}</Text>
          </View>
        {/* END TO SETUP SALEOFFER VIEW */}

        {/* BEGIN TO SETUP TITLE VIEW */}
          <Text style={styles.item_title}>{rowData.itemTitle}</Text>
        {/* END TO SETUP TITLE VIEW */}

        {/* BEGIN TO SETUP PRICE VIEW */}
          <View style={styles.price_view}>
            <Text style={styles.item_price}>{rowData.itemPrice}</Text>
            <Text style={styles.old_item_price}>{rowData.oldPrice}</Text>
          </View>
        {/* BEGIN TO SETUP PRICE VIEW */}
      </TouchableOpacity>
    );
  }
  //END TO SETUP RENDERROW

  //BEGIN TO SETUP TOGGLEFILTERMODAL
  toggleFilterModal(visible) {
    this.setState({ modalVisible: visible });
  }
  //END TO SETUP TOGGLEFILTERMODAL

  //BEGIN TO SETUP TOGGLECATEGORYMODAL
  toggleCategoryModal(visible) {
    this.setState({ modalCategoryVisible: visible });
  }
  //END TO SETUP TOGGLECATEGORYMODAL

  //BEGIN TO SETUP HANDLEFILTERCLICK
  _handleFilterClick() {
    this.setState({ modalVisible: false });
    this.toggleCategoryModal(true);
  }
  //END TO SETUP HANDLEFILTERCLICK

  //BEGIN TO SETUP HANDLECATEGORYFILTERCLICK
  _handleCategoryFilterClick() {
    this.setState({ modalCategoryVisible: false });
    this.toggleFilterModal(true);
  }
  //END TO SETUP HANDLECATEGORYFILTERCLICK

  //BEGIN TO SETUP TOGGLESORTMODAL
  toggleSortModal(visible) {
    this.setState({ modalSortVisible: visible });
  }
  //END TO SETUP TOGGLESORTMODAL

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
              <TouchableOpacity style={styles.back_arrow} onPress={()=> this.props.navigation.goBack()}>
                <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="white" style={{paddingRight: 20}}/>
              </TouchableOpacity>
            </Left>
        {/* END TO SETUP LEFT VIEW */}

        {/* BEGIN TO SETUP BODY VIEW */}
          <Body style={styles.body}>
            <Text style={styles.text_title}>Sale</Text>
          </Body>
        {/* END TO SETUP BODY VIEW */}

        {/* BEGIN TO SETUP RIGHT VIEW */}
          <Right style={styles.right}>
          {/* BEGIN TO SETUP WISHLIST ICON VIEW */}
            <TouchableOpacity style={styles.right_left_view} onPress={() => this._handleWishListNavigation()}>
              <View style={styles.heart_bg}>
                <FontAwesome name="heart" size={8} style={styles.heart_icon} />
              </View>
              <View style={styles.alert_bg}>
                <Text style={styles.alert_txt}>1</Text>
              </View>
            </TouchableOpacity>
          {/* END TO SETUP WISHLIST ICON VIEW */}

          {/* BEGIN TO SETUP CART ICON VIEW */}
            <TouchableOpacity style={styles.right_left_view} onPress={() => this._handleBagNavigation()}>
              <SimpleLineIcons name="handbag" size={20} style={styles.bag_icon}/>
              <View style={styles.alert_bg}>
                <Text style={styles.alert_txt}>3</Text>
              </View>
            </TouchableOpacity>
          {/* BEGIN TO SETUP CART ICON VIEW */}
          </Right>
        {/* BEGIN TO SETUP RIGHT VIEW */}
        </Header>
      {/* END TO SETUP HEADER VIEW */}

        <View style={{ height: Dimensions.get("window").height * 0.9 }}>
        {/* BEGIN TO SETUP LIST VIEW */}
          <ListView
            contentContainerStyle={styles.list_content}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
            enableEmptySections
            pageSize={4}/>
        {/* END TO SETUP LEFT VIEW */}

          <View style={styles.sort_filter_main_view}>
          {/* BEGIN TO SETUP SORTICON VIEW */}
            <TouchableOpacity style={styles.sort_filter_view} onPress={() => {this.toggleSortModal(true)}}>
              <Image source={require('./icon_sort.png')} style={styles.sort_img} />
              <Text style={styles.sort_filter_text}>Sort</Text>
            </TouchableOpacity>
          {/* END TO SETUP SORTICON VIEW */}

          {/* BEGIN TO SETUP FILTER VIEW */}
            <TouchableOpacity style={styles.sort_filter_view} onPress={() => {this.toggleFilterModal(true)}}>
              <Image source={require('./icon_filter.png')} style={styles.filter_img} />
              <Text style={styles.sort_filter_text}>Filter</Text>
            </TouchableOpacity>
          {/* END TO SETUP FILTER VIEW */}
          </View>
        </View>

        <View style={styles.modal_open_view}>
        {/* BEGIN TO SETUP FILTERMODAL VIEW */}
          <Modal
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {this.state.modalVisible(false)}}>
            <View style={styles.modal_view}>
            {/* BEGIN TO SETUP UPARROWICON VIEW */}
              <Image source={require('./icon_up_arrow.png')} style={styles.up_arrow} />
            {/* END TO SETUP UPARROWICON VIEW */}
              <View style={styles.modal}>
                <View style={styles.modal_header}>
                {/* BEGIN TO SETUP CANCEL VIEW */}
                  <TouchableOpacity onPress={() => {this.setState({ modalVisible: false })}}>
                    <Text style={styles.cancel_apply_txt}>Cancel</Text>
                  </TouchableOpacity>
                {/* END TO SETUP CANCEL VIEW */}
                  <Text style={styles.share_txt}>Filter</Text>
                {/* BEGIN TO SETUP FILTER VIEW */}
                  <TouchableOpacity onPress={() => {this.toggleFilterModal(false)}}>
                    <Text style={styles.cancel_apply_txt}>Apply</Text>
                  </TouchableOpacity>
                {/* END TO SETUP FILTER VIEW */}
                </View>
                <View style={styles.modal_bottom_view}>
                {/* BEGIN TO SETUP CATEGORY VIEW */}
                  <TouchableOpacity style={styles.modal_row} onPress={() => {this._handleFilterClick()}}>
                    <Text style={styles.share_txt}>Category</Text>
                    <Ionicons name={I18nManager.isRTL ? "ios-arrow-back" : "ios-arrow-forward"}
                      size={20}
                      color="#cccccc"/>
                  </TouchableOpacity>
                {/* END TO SETUP CATEGORY VIEW */}
                  <View style={styles.modal_divider} />

                {/* BEGIN TO SETUP PRICE VIEW */}
                  <View style={styles.modal_row}>
                    <Text style={styles.share_txt}>Price</Text>
                    <Ionicons name={I18nManager.isRTL ? "ios-arrow-back" : "ios-arrow-forward"}
                      size={20}
                      color="#cccccc"/>
                  </View>
                {/* END TO SETUP PRICE VIEW */}
                  <View style={styles.modal_divider} />

                {/* BEGIN TO SETUP BRAND VIEW */}
                  <View style={styles.modal_row}>
                    <Text style={styles.share_txt}>Brand</Text>
                    <Ionicons name={I18nManager.isRTL ? "ios-arrow-back" : "ios-arrow-forward"}
                      size={20}
                      color="#cccccc"/>
                  </View>
                {/* END TO SETUP BRAND VIEW */}
                  <View style={styles.modal_divider} />

                {/* BEGIN TO SETUP COLOR VIEW */}
                  <View style={styles.modal_row}>
                    <Text style={styles.share_txt}>Color</Text>
                    <Ionicons name={I18nManager.isRTL ? "ios-arrow-back" : "ios-arrow-forward"}
                      size={20}
                      color="#cccccc"/>
                  </View>
                {/* END TO SETUP COLOR VIEW */}
                </View>
              </View>
            </View>
          </Modal>
        {/* END TO SETUP FILTERMODAL VIEW */}
        </View>

        <View style={styles.modal_open_view}>
        {/* BEGIN TO SETUP CATEGORYMODAL VIEW */}
          <Modal
            transparent={true}
            visible={this.state.modalCategoryVisible}
            onRequestClose={() => {this.state.modalCategoryVisible(false)}}>
            <View style={styles.modal_view}>
            {/* BEGIN TO SETUP UPARRAOWICON VIEW */}
              <Image source={require('./icon_up_arrow.png')} style={styles.up_arrow} />
            {/* END TO SETUP UPARRAOWICON VIEW */}
              <View style={styles.modal}>
                <View style={styles.modal_header}>
                {/* BEGIN TO SETUP FILTER VIEW */}
                  <TouchableOpacity onPress={() => {this._handleCategoryFilterClick()}}>
                    <Text style={styles.cancel_apply_txt}>Filter</Text>
                  </TouchableOpacity>
                {/* END TO SETUP FILTER VIEW */}
                  <Text style={styles.share_txt}>Category</Text>
                {/* BEGIN TO SETUP DONE VIEW */}
                  <TouchableOpacity onPress={() => {this.setState({ modalCategoryVisible: false })}}>
                    <Text style={styles.cancel_apply_txt}>Done</Text>
                  </TouchableOpacity>
                {/* END TO SETUP DONE VIEW */}
                </View>
                <View style={{ maxHeight: Dimensions.get("window").height * 0.6 }}>
                {/* BEGIN TO SETUP CATEGORYLIST VIEW */}
                  <ScrollView style={styles.category_list_bg}>
                    {this.state.category.map((item, index) => {
                      return (
                        <View style={styles.category_bottom_view} key={index}>
                        {/* BEGIN TO SETUP CATEGORYNAME VIEW */}
                          <TouchableOpacity style={[styles.modal_row,{backgroundColor: 'rgba(0,0,0,0)'}]} onPress={() => this.onCheckBoxPress(item.id)}>
                            <Text style={styles.share_txt}>
                              {item.categoryName}
                            </Text>
                            {this.state.selectedLots == item.id ? (
                              <MaterialIcons name="check" size={25} color={"#000000"}/>
                            ) : null}
                          </TouchableOpacity>
                        {/* END TO SETUP CATEGORYNAME VIEW */}
                          <View style={item.id == this.state.category.length ? null : styles.modal_divider}/>
                        </View>
                      );
                    })}
                  </ScrollView>
                {/* END TO SETUP CATEGORYLIST VIEW */}
                </View>
              </View>
            </View>
          </Modal>
        {/* END TO SETUP CATEGORYMODAL VIEW */}
        </View>

        <View style={styles.modal_open_view}>
        {/* BEGIN TO SETUP SORTMODAL VIEW */}
          <Modal
            transparent={true}
            visible={this.state.modalSortVisible}
            onRequestClose={() => {this.state.modalSortVisible(false)}}>
            <View style={styles.modal_view}>
              <Image source={require('./icon_up_arrow.png')} style={styles.sortup_arrow} />

              <View style={styles.modal}>
                <View style={styles.modal_header}>
                {/* BEGIN TO SETUP CANCEL VIEW */}
                  <TouchableOpacity onPress={() => {this.setState({ modalSortVisible: false })}}>
                    <Text style={styles.cancel_apply_txt}>Cancel</Text>
                  </TouchableOpacity>
                {/* END TO SETUP CANCEL VIEW */}
                  <Text style={styles.share_txt}>Sort</Text>
                {/* BEGIN TO SETUP APPLY VIEW */}
                  <TouchableOpacity onPress={() => {this.setState({ modalSortVisible: false })}}>
                    <Text style={styles.cancel_apply_txt}>Apply</Text>
                  </TouchableOpacity>
                {/* END TO SETUP APPLY VIEW */}
                </View>

                <View style={{ maxHeight: Dimensions.get("window").height * 0.6 }}>
                {/* BEGIN TO SETUP SORT VIEW */}
                  <ScrollView style={styles.category_list_bg}>
                    {this.state.sort.map((item, index) => {
                      return (
                        <View style={styles.category_bottom_view} key={index}>
                        {/* BEGIN TO SETUP CHECKBOX VIEW */}
                          <TouchableOpacity style={[styles.modal_row,{backgroundColor: 'rgba(0,0,0,0)' }]}
                            onPress={() => this.onCheckBoxPress(item.id)}>
                            <Text style={styles.share_txt}>{item.sortName}</Text>
                            {this.state.selectedLots == item.id ? (
                              <MaterialIcons name="check" size={25} color={"#000000"}/>
                            ) : null}
                          </TouchableOpacity>
                        {/* END TO SETUP CHECKBOX VIEW */}
                          <View style={item.id == this.state.sort.length ? null : styles.modal_divider}/>
                        </View>
                      );
                    })}
                  </ScrollView>
                {/* END TO SETUP SORT VIEW */}
                </View>
              </View>
            </View>
          </Modal>
        {/* END TO SETUP SORTMODAL VIEW */}
        </View>
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
        paddingTop: Dimensions.get("window").width * 0.05
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
  bag_icon: {
		marginLeft: Dimensions.get("window").width * 0.04,
		color: 'white'
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
  heart_icon: {
		color: 'white',
		alignSelf: 'center'
	},
  right_left_view: {
    flexDirection: 'row',
  },
  sort_filter_main_view: {
    height: Dimensions.get("window").height * 0.08,
    backgroundColor: 'rgba(255,255,255, 0.75)',
    top: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  },
  sort_filter_view: {
    flexDirection: 'row',
    width: Dimensions.get("window").width * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sort_img: {
    height: Dimensions.get("window").height * 0.04,
    width: Dimensions.get("window").width * 0.03,
    marginRight: Dimensions.get("window").width * 0.03,
    resizeMode: 'contain'
  },
  filter_img: {
    height: Dimensions.get("window").height * 0.06,
    width: Dimensions.get("window").width * 0.05,
    marginRight: Dimensions.get("window").width * 0.03,
    resizeMode: 'contain'
  },
  sort_filter_text: {
    fontSize: moderateScale(15),
    fontFamily: font_type.FontLight,
    color: '#0e1130',
  },
  list_content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: Dimensions.get("window").height * 0.01,
    marginTop: Dimensions.get("window").height * 0.08,
    paddingBottom: Dimensions.get("window").height * 0.08,
  },
  row_main: {
    backgroundColor: 'white',
    width: Dimensions.get("window").width * 0.445,
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    margin:(Dimensions.get("window").width * 0.0165),
  },
  item_image: {
    width: Dimensions.get("window").width * 0.445,
    height: Dimensions.get("window").width * 0.64,
  },
  item_title: {
    width: Dimensions.get("window").width * 0.445,
    color: '#0e1130',
    fontSize: moderateScale(15),
    fontFamily: font_type.FontLight,
    marginTop: Dimensions.get("window").height * 0.015,
    textAlign: 'left'
  },
  item_price: {
    color: '#ff0000',
    fontSize: moderateScale(15),
    fontFamily: font_type.FontBold,
  },
  modal_view:{
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#0006",
    paddingTop: Dimensions.get("window").height * 0.2,
    alignSelf: 'center',
    alignItems: 'center',
  },
  modal: {
    width: (Dimensions.get("window").width) * 0.90,
    backgroundColor: 'white',
    borderRadius: 5,
   },
  modal_header: {
     backgroundColor: "#ebebeb",
     justifyContent: 'space-between',
     flexDirection: 'row',
     paddingBottom: Dimensions.get("window").width * 0.024,
     paddingTop: Dimensions.get("window").width * 0.024,
     paddingLeft: Dimensions.get("window").width * 0.03,
     paddingRight: Dimensions.get("window").width * 0.03,
     borderTopLeftRadius: 5,
     borderTopRightRadius: 5
   },
  modal_bottom_view: {
     width: (Dimensions.get("window").width) * 0.90,
     backgroundColor: 'white',
     paddingLeft: Dimensions.get("window").width * 0.03,
     paddingRight: Dimensions.get("window").width * 0.03,
     borderBottomLeftRadius: 5,
     borderBottomRightRadius: 5,
   },
  cancel_apply_txt: {
     color: "#000000",
     fontSize: moderateScale(15),
     fontFamily: font_type.FontLight
   },
  share_txt: {
     color: "#0e1130",
     fontSize: moderateScale(15),
     fontFamily: font_type.FontLight
   },
   modal_row: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     paddingTop: Dimensions.get("window").width * 0.03,
     paddingBottom: Dimensions.get("window").width * 0.03
   },
   modal_divider: {
     width: Dimensions.get("window").width * 0.87,
     height: 1,
     backgroundColor: "#ebebeb",
   },
   up_arrow: {
     marginLeft: Dimensions.get("window").width * 0.5,
   },
   sortup_arrow: {
     marginRight: Dimensions.get("window").width * 0.5,
   },
   category_bottom_view: {
    width: (Dimensions.get("window").width) * 0.90,
    backgroundColor: 'white',
    paddingLeft: Dimensions.get("window").width * 0.03,
    paddingRight: Dimensions.get("window").width * 0.03,
  },
   category_list_bg: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginBottom: Dimensions.get("window").width * 0.01,
    minHeight: Dimensions.get("window").height * 0.28,
  },
  modal_open_view: {
    flexDirection: 'column',
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    alignItems: 'center'
  },
  price_view: {
    width: Dimensions.get("window").width * 0.445,
    marginTop: Dimensions.get("window").height * 0.01,
    marginBottom: Dimensions.get("window").height * 0.01,
    flexDirection: 'row'
  },
  old_item_price: {
    color: '#bbbbbb',
    fontSize: moderateScale(15),
    fontFamily: font_type.FontLight,
    marginLeft: 5,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  },
  sale_offer_view: {
    width: Dimensions.get("window").width * 0.10,
    height: Dimensions.get("window").width * 0.10,
    position: 'absolute',
    top: 5,
    left: 5,
    backgroundColor: '#000000',
    borderRadius: Dimensions.get("window").width * 0.05,
    justifyContent: 'center'
  },
  sale_text: {
    color: '#ffffff',
    fontSize: moderateScale(10),
    fontFamily: font_type.FontBold,
    alignSelf: 'center',
    textAlign: 'center'
  }
});
// END TO MAKE STYLE
