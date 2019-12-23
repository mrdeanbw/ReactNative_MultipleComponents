import React, { Component } from "react";
import {Text,View,Image,StatusBar,TouchableOpacity,Platform,ImageBackground,StyleSheet,Dimensions,ScrollView,I18nManager,AsyncStorage} from "react-native";
import {Content,Container,Button,Icon,Right,Item,Input,Header,Left,Body,Title,Segment,Label} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { Dropdown } from "react-native-material-dropdown";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Rating } from "react-native-ratings";
import FloatingLabelInput from "../FloatingLabelInput";
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

    if (this.props.navigation.state.params) {
      const navParams = this.props.navigation.state.params;
      screenName = navParams.name;
    }

    // BEGIN TO SET STATE
    this.state = {
      segment: 1,
      favoriteNotification: 1,
      cartNotification: 3,
      name: "",
      email: "",
      title: "",
      comment: "",
      rating: 0,
      ArrivedForProductDetailsTab: ""
    };
    // END TO SET STATE
  }

  //BEGIN TO SETUP RENDERACTIVECOMPONENT
  _renderActiveComponent = () => {
    const { segment } = this.state;

    var data = [
      {
        from: "LOREMIPSUM",
        product_name: "Lorem Ipsum",
        price: "20.00",
        discount_price: "00.00",
        brand_name: "LOREMIPSUM",
        free_delivery: "Lorem Ipsum",
        return_timing: "Lorem Ipsum",
        cash_delivery: "Lorem Ipsum",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        dress_description: [
          "Lorem Ipsum",
          "Lorem Ipsum",
          "Lorem Ipsum",
          "Lorem Ipsum",
          "Lorem Ipsum"
        ],
        related_Products: [
          { image: require('../MenuView/image_women.jpg')},
          { image: require('../MenuView/image_men.jpg')},
          { image: require('../MenuView/image_kids.jpg') },
          { image: require('../MenuView/image_women.jpg') },
          { image: require('../MenuView/image_men.jpg') },
          { image: require('../MenuView/image_kids.jpg') }
        ]
      }
    ];

    //BEGIN TO SETUP SEGMENT 1
    if (segment === 1) {
      return (
        <Content style={styles.detail_container}>
          {data.map((item, index) => {
            return (
              <View key={index}>
                <View style={styles.product_detail}>
                {/* BEGIN TO SETUP FROM AND PRODUCTNAME VIEW */}
                  <Text style={styles.text_style_bold}>{item.from}</Text>
                  <Text style={styles.text_style}>{item.product_name}</Text>
                {/* END TO SETUP FROM AND PRODUCTNAME VIEW */}

                {/* BEGIN TO SETUP PRICE AND DISCOUNTPRICE VIEW */}
                  <View style={styles.row}>
                    <Text style={styles.text_style_price}>${item.price} </Text>
                    <Text style={styles.discount_price}>
                      {" "}
                      ${item.discount_price}
                    </Text>
                  </View>
                {/* END TO SETUP PRICE AND DISCOUNTPRICE VIEW */}
                </View>

                <View style={styles.content_space}>
                {/* BEGIN TO SETUP BRANDNAME VIEW */}
                  <View style={styles.row}>
                    <Text style={styles.text_style}>By</Text>
                    <Text style={[styles.text_style_brand, styles.text_style]}>
                      {item.brand_name}
                    </Text>
                  </View>
                {/* END TO SETUP BRANDNAME VIEW */}

                {/* BEGIN TO SETUP FREEDELIVERY AND RETURNTIMING AND CASHDELIVERY VIEW */}
                  <Text style={styles.text_style}>{item.free_delivery}</Text>
                  <Text style={styles.text_style}>{item.return_timing}</Text>
                  <Text style={styles.text_style}>{item.cash_delivery}</Text>
                {/* END TO SETUP FREEDELIVERY AND RETURNTIMING AND CASHDELIVERY VIEW */}
                </View>

                {/* BEGIN TO SETUP DESCRIPTION VIEW */}
                <View style={styles.content_space}>
                  <Text style={styles.text_style}>{item.description}</Text>
                </View>
                {/* END TO SETUP DESCRIPTION VIEW */}

                {/* BEGIN TO SETUP DRESSDESCRIPTION VIEW */}
                <View style={styles.content_space}>
                  {item.dress_description.map((item, index) => {
                    return (
                      <View key={index}>
                        <Text style={styles.text_style}>- {item}</Text>
                      </View>
                    );
                  })}
                </View>
                {/* END TO SETUP DRESSDESCRIPTION VIEW */}

                <View style={[styles.divider, styles.content_space]} />
                {/* BEGIN TO SETUP RELATEDPRODUCT VIEW */}
                  <Text style={[styles.text_style,{ marginTop: Dimensions.get("window").height * 0.015 }]}>
                    Related Products
                  </Text>
                  <ScrollView
                    horizontal={true}
                    style={styles.content_space}
                    showsHorizontalScrollIndicator={false}>
                    {item.related_Products.map((item, index) => {
                      return (
                        <View key={index}>
                        {/* BEGIN TO SETUP PRODUCTIMAGE VIEW */}
                          <CachedImage source={item.image} style={styles.product_image}/>
                        {/* END TO SETUP PRODUCTIMAGE VIEW */}
                        </View>
                      );
                    })}
                  </ScrollView>
                {/* END TO SETUP RELATEDPRODUCT VIEW */}
                </View>
              );
            })}
        </Content>
      );
    }
    //END TO SETUP SEGMRNT 1

    //BEGIN TO SETUP SEGMENT 2
    if (segment === 2) {
      return (
        <View style={styles.review_container}>
          <View style={styles.review_divider} />
          <Content>
          {/* BEGIN TO SETUP RATING VIEW */}
            <View style={styles.rating_style}>
              <Rating imageSize={moderateScale(24)} fractions={1} startingValue={0} onFinishRating={rating => this.setState({ rating })}/>
              <Text style={[styles.text_style, { marginTop: Dimensions.get("window").height * 0.02 }]}>
                {this.state.rating == 0 ? "( No review yet )"  : "Review is: " + this.state.rating}
              </Text>
            </View>
          {/* END TO SETUP RATING VIEW */}
            <View style={styles.floating_view}>

          {/* BEGIN TO SETUP NAME VIEW */}
              <FloatingLabelInput
                label="Name"
                value={this.state.name}
                keyboardType="default"
                returnKeyType="done"
                maxLength={20}
                selectionColor={"#959595"}
                autoCapitalize="none"
                onChangeText={(text) => this.setState({name:text })}/>
          {/* END TO SETUP NAME VIEW */}
              <View style={{ height: 10 }} />

          {/* BEGIN TO SETUP EMAILADDRESS VIEW */}
              <FloatingLabelInput
                label="Email Address"
                value={this.state.email}
                keyboardType="email-address"
                returnKeyType="done"
                maxLength={40}
                selectionColor={"#959595"}
                autoCapitalize="none"
                onChangeText={(text) => this.setState({email:text })}/>
          {/* END TO SETUP EMAILADDRESS VIEW */}
              <View style={{ height: 10 }} />

          {/* BEGIN TO SETUP TITLE VIEW */}
              <FloatingLabelInput
                label="Title"
                value={this.state.title}
                keyboardType="default"
                returnKeyType="done"
                maxLength={30}
                selectionColor={"#959595"}
                autoCapitalize="none"
                onChangeText={(text) => this.setState({title:text })}/>
          {/* END TO SETUP TITLE VIEW */}
              <View style={{ height: 10 }} />

          {/* BEGIN TO SETUP COMMENT VIEW */}
              <FloatingLabelInput
                label="Comment"
                value={this.state.comment}
                keyboardType="default"
                returnKeyType="done"
                selectionColor={"#959595"}
                autoCapitalize="none"
                onChangeText={(text) => this.setState({comment:text })}/>
          {/* END TO SETUP COMMENT VIEW */}
            </View>
        </Content>

        {/* BEGIN TO SETUP SUBMIT REVIEW VIEW */}
          <View style={styles.bottom_view}>
            <TouchableOpacity onPress={() => alert("Submit your review")} style={styles.submit_bg}>
              <Text style={styles.active_tab}>Submit your review</Text>
            </TouchableOpacity>
          </View>
        {/* BEGIN TO SETUP SUBMIT REVIEW VIEW */}
        </View>
      );
    }
  };
  //END TO SETUP RENDERACTIVECOMPONENT

  //BEGIN TO SETUP HANDLEBAGNAVIGATION
  _handleBagNavigation() {
    alert('Cart Click')
  }
  //END TO SETUP HANDLEBAGNAVIGATION

  //BEGIN TO SETUP HANDLEWISHLISTNAVIGATION
  _handleWishListNavigation() {
    alert('WishList Click')
  }
  //END TO SETUP HANDLEWISHLISTNAVIGATION

  render() {
    const { ArrivedForProductDetailsTab } = this.state;

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

            <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => this._handleWishListNavigation()}>
              {/* BEGIN TO SETUP WISHLIST VIEW */}
                <View style={styles.heart_bg}>
                  <FontAwesome name="heart" size={moderateScale(8)} style={styles.heart_icon}/>
                </View>
                {this.state.favoriteNotification != 0 ? (
                  <View style={styles.alert_bg}>
                    <Text style={styles.alert_txt}>1</Text>
                  </View>
                ) : null}
              {/* END TO SETUP WISHLIST VIEW */}
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => this._handleBagNavigation()}>
              {/* BEGIN TO SETUP CART VIEW */}
                <SimpleLineIcons name="handbag" size={moderateScale(18)} style={styles.bag_icon}/>
                {this.state.cartNotification != 0 ? (
                  <View style={styles.alert_bg}>
                    <Text style={styles.alert_txt}>3</Text>
                  </View>
                ) : null}
              {/* END TO SETUP CART VIEW */}
              </TouchableOpacity>

          </Right>
        {/* END TO SETUP RIGHT VIEW */}
        </Header>
      {/* END TO SETUP HEADER VIEW */}

      {/* BEGIN TO SETUP KEYBORDAWARESCROLLVIEW VIEW */}
        <KeyboardAwareScrollView>
          <View style={styles.content}>
          {/* BEGIN TO SETUP SEGMENT VIEW */}
            <Segment style={styles.segment_tab_sec}>
            {/* BEGIN TO SETUP DETAILS VIEW */}
              <Button first style={this.state.segment === 1 ? [styles.segment_selected_tab,{ borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }]: styles.segment_tab}
                active={this.state.segment === 1 ? true : false}
                onPress={() => this.setState({ segment: 1 })}>
                <Text style={this.state.segment === 1 ? styles.active_tab : styles.normal_tab}>
                  Details
                </Text>
              </Button>
            {/* END TO SETUP DETAILS VIEW */}

            {/* BEGIN TO SETUP REVIEWS VIEW */}
              <Button last style={this.state.segment === 1 ? styles.segment_tab : [styles.segment_selected_tab,{ borderTopRightRadius: 5, borderBottomRightRadius: 5 }]}
                active={this.state.segment === 2 ? true : false}
                onPress={() => this.setState({ segment: 2 })}>
                <Text style={this.state.segment === 2 ? styles.active_tab : styles.normal_tab}>
                  Reviews
                </Text>
              </Button>
            {/* END TO SETUP REVIEWS VIEW */}
            </Segment>
          {/* END TO SETUP SEGMENT VIEW */}
            {this._renderActiveComponent()}
          </View>
        </KeyboardAwareScrollView>
      {/* END TO SETUP KEYBORDAWARESCROLLVIEW VIEW */}
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
		height: (Dimensions.get("window").height * 0.1),
		paddingHorizontal: (Dimensions.get("window").width * 0.05),
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
	},
	left: {
		flex: 0.5,
		backgroundColor: 'rgba(0,0,0,0)',
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
		fontFamily:  font_type.FontLight,
	},
	right: {
		flex: 0.5,
		alignItems: 'center',
	},
	back_arrow: {
		justifyContent: 'center',
		alignItems: 'center',
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
  bag_icon: {
		marginLeft: Dimensions.get("window").width * 0.04,
		color: 'white'
	},
	heart_icon: {
		color: 'white',
		alignSelf: 'center'
	},
  content: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height * 0.9
	},
	divider: {
		borderTopWidth: Dimensions.get("window").height * 0.001,
		borderColor:'#d8d8d8',
	},
	bottom_view: {
		 width: Dimensions.get("window").width,
		 bottom: 30,
		 position: 'absolute',
		 borderTopWidth: Dimensions.get("window").height * 0.001,
		 borderColor: '#d8d8d8',
		 alignItems: 'center'
	 },
  submit_bg: {
		 backgroundColor: '#ff6347',
		 width: Dimensions.get("window").width * 0.9,
		 height: Dimensions.get("window").height * 0.055,
		 marginVertical: Dimensions.get("window").height * 0.02,
		 alignSelf: 'center',
		 justifyContent: 'center',
		 alignItems: 'center',
		 borderRadius: 5,
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
  text_label: {
		 fontFamily:font_type.FontLight,
 		 color: "#959595",
		 fontSize: moderateScale(15),
		 marginLeft: 10
	 },
  dropdown: {
		 width: Dimensions.get("window").width * 0.94,
		 alignSelf: 'center',
		 height: Dimensions.get("window").height * 0.07,
		 backgroundColor: 'red'
	 },
	picker: {
		 width: Dimensions.get("window").width * 0.94,
		 alignSelf: 'center',
		 height: Dimensions.get("window").height * 0.07,
		 backgroundColor: 'green'
	 },
  active_tab: {
 		color: '#ffffff',
 		fontSize: moderateScale(15),
 	 },
  normal_tab: {
 		color: '#ff6347',
 		fontSize: moderateScale(15),
 	},
  segment_tab: {
		width: Dimensions.get("window").width * 0.47,
		height: Dimensions.get("window").height * 0.05,
		backgroundColor: 'transparent',
		borderColor: '#ff6347',
		justifyContent: 'center',
		alignSelf: 'center',
	},
	segment_selected_tab: {
		width: Dimensions.get("window").width * 0.47,
		height: Dimensions.get("window").height * 0.05,
		backgroundColor: '#ff6347',
		borderColor: '#ff6347',
		justifyContent: 'center',
		alignSelf: 'center',
		borderRadius: Dimensions.get("window").height * 0.007,
	},
  segment_tab_sec: {
		width: Dimensions.get("window").width * 0.94,
		height: Dimensions.get("window").height * 0.05,
		marginVertical: Dimensions.get("window").height * 0.03,
		borderRadius: Dimensions.get("window").height * 0.007,
		backgroundColor: 'white',
		borderColor: '#ff6347',
		padding:0,
		borderWidth: 1,
		alignSelf: 'center',
	},
  detail_container: {
		marginHorizontal: (Dimensions.get("window").width * 0.05),
		height: (Dimensions.get("window").height * 0.79),
	},
	review_container: {
		height: (Dimensions.get("window").height * 0.79),
	},
  product_detail: {
		marginTop: (Dimensions.get("window").height * 0.002)
	},
  text_style: {
 		color: '#111111',
 		fontSize: moderateScale(15),
		textAlign: 'left'
	},
  text_style_bold: {
 		color: '#111111',
 		fontFamily: font_type.FontLight,
 		fontSize: moderateScale(15),
		textAlign: 'left'
	},
	text_style_price: {
 		color: '#111111',
    fontSize: moderateScale(15),
		textDecorationLine: 'line-through',
	},
  discount_price: {
 		color: 'red',
 		fontFamily: font_type.FontBold,
 		fontSize: moderateScale(15),
	},
	text_style_brand: {
		textDecorationLine: 'underline',
	},
  content_space: {
		marginTop: (Dimensions.get("window").height * 0.025),
		marginBottom: (Dimensions.get("window").height * 0.025)
	},
	row: {
		flexDirection: 'row'
	},
	product_image: {
		height: Dimensions.get("window").height * 0.135,
		width: Dimensions.get("window").width * 0.185,
		marginHorizontal: Dimensions.get("window").width * 0.02,
	},
	rating_style: {
		width: Dimensions.get("window").width,
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: Dimensions.get("window").height * 0.035,
		marginBottom: Dimensions.get("window").height * 0.045,
	},
  review_divider: {
		backgroundColor: "#e1e1e1",
		width: Dimensions.get("window").width,
		height: 1,
		marginTop: Dimensions.get("window").width * 0.01,
	},
  item: {
		alignSelf:'center',
		width: Dimensions.get("window").width * 0.90,
		justifyContent: 'center',
		marginTop: 10,
	},
  floating_view: {
		alignSelf:'center',
		width: Dimensions.get("window").width * 0.90,
		justifyContent: 'center',
		marginTop: 10,
	},
  text_label: {
	  fontFamily:font_type.FontLight,
    color: "#959595",
		fontSize: moderateScale(15),
		marginLeft: 10
	 },
});
// END TO MAKE STYLE
