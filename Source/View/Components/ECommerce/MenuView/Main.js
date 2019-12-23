import React, { Component } from "react";
import {Text,StyleSheet,Dimensions,ListView,View,Image,StatusBar,TouchableOpacity,Platform,ImageBackground,BackHandler,I18nManager,TextInput,AsyncStorage} from "react-native";
import {Container,Content,Button,Icon,Right,Item,Input,Header,Left,Body,Title} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Swiper from "react-native-swiper";
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

const rowHasChanged = (r1, r2) => r1 !== r2;
const ds = new ListView.DataSource({ rowHasChanged });

export default class Menu extends Component {
  constructor(props) {
    super(props);
    // BEGIN TO SETUP PRODUCT ARRAY
    const dataObjects = [
      {
        id: 1,
        coverImage: require('./image_women.jpg'),
        category: "Women",
        color: "#456456"
      },
      {
        id: 2,
        coverImage: require('./image_men.jpg'),
        category: "Men",
        color: "#232323"
      },
      {
        id: 3,
        coverImage: require('./image_kids.jpg'),
        category: "Kid’s",
        color: "#999888"
      },
      {
        id: 4,
        coverImage:require('./image_accessories.jpg'),
        category: "Accessories",
        color: "#787665"
      }
    ];
    // END TO SETUP PRODUCT ARRAY

    // BEGIN TO SETUP STATE
    this.state = {
      dataSource: ds.cloneWithRows(dataObjects),
      new_collection: [
        {
          id: 1,
          image: require('./image_swiper1.jpg'),
          title: "NEW COLLECTION",
          description: "FOR SUMMER"
        },
        {
          id: 2,
          image: require('./image_swiper2.jpg'),
          title: "NEW COLLECTION",
          description: "FOR SUMMER"
        },
        {
          id: 3,
          image: require('./image_swiper3.jpg'),
          title: "NEW COLLECTION",
          description: "FOR SUMMER"
        }
      ],
      new_arrival: [
        {
          id: 1,
          products: [
            {
              id: 1,
              itemImage: require('./n_a_1.jpg'),
              itemTitle: "Lorem Ipsum",
              itemPrice: "$130.00"
            },
            {
              id: 2,
              itemImage: require('./n_a_2.jpg'),
              itemTitle: "Lorem Ipsum",
              itemPrice: "$30.00"
            }
          ]
        },
        {
          id: 2,
          products: [
            {
              id: 3,
              itemImage: require('./n_a_3.jpg'),
              itemTitle: "Lorem Ipsum",
              itemPrice: "$140.00"
            },
            {
              id: 4,
              itemImage:require('./n_a_1.jpg'),
              itemTitle: "Lorem Ipsum",
              itemPrice: "$50.00"
            }
          ]
        },
        {
          id: 3,
          products: [
            {
              id: 1,
              itemImage: require('./n_a_2.jpg'),
              itemTitle: "Lorem Ipsum",
              itemPrice: "$90.00"
            },
            {
              id: 2,
              itemImage: require('./n_a_3.jpg'),
              itemTitle: "Lorem Ipsum",
              itemPrice: "$150.00"
            }
          ]
        }
      ]
    };
    // END TO SETUP STATE
  }


  //BEGIN TO SETUP HANDLEPRODUCTDETAILCLICK
  _handleProductDetailClick() {
    alert("Detail Click")
  }
  //END TO SETUP HANDLEPRODUCTDETAILCLICK

  //BEGIN TO SETUP RENDERROW
  _renderRow(rowData) {
    return (
      <TouchableOpacity>
        {/* BEGIN TO SETUP IMAGEBACKGROUND VIEW */}
        <ImageBackground source={rowData.coverImage} style={styles.cover_image_style}>
          <View style={[styles.category_btn, { backgroundColor: rowData.color }]}>
            <Text style={styles.button_text}>{rowData.category}</Text>
          </View>
        </ImageBackground>
        {/* END TO SETUP IMAGEBACKGROUND VIEW */}
      </TouchableOpacity>
    );
  }
  //END TO SETUP RENDERROW

  render() {
    const { new_collection, new_arrival } = this.state;

    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW


    return (
      <Container>
      {/* BEGIN TO SETUP HEADER VIEW */}
        <Header style={styles.header} androidStatusBarColor={"#0e1130"}>
        {/* BEGIN TO SETUP LEFT VIEW */}
          <Left style={styles.left}>
            <TouchableOpacity style={styles.back_arrow} onPress={() => alert('Drawer Click')}>
              <Icon name="ios-menu" style={styles.icon_color} />
            </TouchableOpacity>
          </Left>
        {/* END TO SETUP LEFT VIEW */}

        {/* BEGIN TO SETUP BODY VIEW */}
          <Body style={styles.body}>
            <Image source={GlobalInclude.MainLogo} style={{ flex: 0.6, resizeMode: "contain" }}/>
          </Body>
        {/* END TO SETUP BODY VIEW */}

        {/* BEGIN TO SETUP RIGHT VIEW */}
          <Right style={styles.right}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.back_arrow}>
              {I18nManager.isRTL ? (
                <Ionicons
                  name="ios-arrow-round-forward"
                  size={30}
                  color="#fff"/>
              ) : (
                <Ionicons name="ios-arrow-round-back" size={30} color="#fff" />
              )}
            </TouchableOpacity>
          </Right>
        {/* END TO SETUP RIGHT VIEW */}
        </Header>
      {/* END TO SETUP HEADER VIEW */}
        <Content>
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

          <View style={styles.slidesec}>
          {/* BEGIN TO SETUP SWIPER VIEW */}
            <Swiper
              showsButtons={false}
              autoplay={true}
              autoplayTimeout={2.5}
              active_dot={<View style={styles.active_dot} />}
              dot={<View style={styles.dot} />}>
              {new_collection.map((item, index) => {
                return (
                  <View style={styles.slide} key={index}>
                  {/* BEGIN TO SETUP IMAGE AND TITLE AND DESCRIPTION VIEW */}
                    <Image source={item.image} style={styles.slider_image} />
                    <View style={styles.content_style}>
                      <Text style={styles.headertext}>{item.title}</Text>
                      <Text style={styles.desctext}>{item.description}</Text>
                    </View>
                  {/* END TO SETUP IMAGE AND TITLE AND DESCRIPTION VIEW */}
                  </View>
                );
              })}
            </Swiper>
          {/* END TO SETUP SWIPERVIEW */}
          </View>

          {/* BEGIN TO SETUP LISTVIEW VIEW */}
          <ListView
            contentContainerStyle={styles.list_content}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
            enableEmptySections/>
          {/* END TO SETUP LISTVIEW VIEW */}

          <View style={styles.new_arrival_sec}>
          {/* BEGIN TO SETUP LEFT VIEW */}
            <Left style={styles.side_buttons}>
              <MaterialCommunityIcons
                name="chevron-left"
                size={26}
                color="#cccccc"
                onPress={() => this.refs.swiper.scrollBy(-1)}/>
            </Left>
          {/* END TO SETUP LEFT VIEW */}

          {/* BEGIN TO SETUP BODY VIEW */}
            <Body style={styles.new_arrival_body}>
              <Text style={styles.titel_text}>NEW ARRIVALS</Text>
            </Body>
          {/* END TO SETUP BODY VIEW */}

          {/* BEGIN TO SETUP RIGHT VIEW */}
            <Right style={styles.side_buttons}>
              <MaterialCommunityIcons
                name="chevron-right"
                size={26}
                color="#cccccc"
                onPress={() => this.refs.swiper.scrollBy(1)}/>
            </Right>
          {/* END TO SETUP RIGHT VIEW */}
          </View>

        {/* BEGIN TO SETUP SWIPER VIEW */}
          <Swiper
            style={styles.swiper_view}
            ref="swiper"
            loop={true}
            showsButtons={false}
            autoplayTimeout={2.5}
            active_dot={<View />}
            dot={<View />}>
            {new_arrival.map((item, index) => {
              return (
                <View key={index} style={styles.new_arrival_view}>
                  {item.products.map((item, index) => {
                    return (
                      <View key={index}>
                      {/* BEGIN TO SETUP TITLE AND PRICE VIEW */}
                        <TouchableOpacity style={styles.row_main} onPress={() => this._handleProductDetailClick()}>
                          <CachedImage
                            source={item.itemImage}
                            style={styles.item_image}/>
                          <Text style={styles.item_title} numberOfLines={2}>
                            {item.itemTitle}
                          </Text>
                          <Text style={styles.item_price}>{item.itemPrice}</Text>
                        </TouchableOpacity>
                      {/* END TO SETUP TITLE AND PRICE VIEW */}
                      </View>
                    );
                  })}
                </View>
              );
            })}
          </Swiper>
        {/* END TO SETUP SWIPER VIEW */}
        </Content>
      </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ff6347",
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {
        height: 56
      },
      android: {
        height: 66,
        paddingTop: Dimensions.get("window").height * 0.02
      }
    }),
    elevation: 0,
    paddingLeft: Dimensions.get("window").width * 0.05,
    paddingRight: Dimensions.get("window").width * 0.05
  },
  left: {
    flex: 0.5,
    backgroundColor: "transparent"
  },
  body: {
    flex: 1,
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
  name_txt: {
    textAlign: "center",
    color: "white",
    fontFamily: font_type.FontBold,
    fontSize: moderateScale(15),
    marginLeft: -(Dimensions.get("window").width * 0.03),
    marginTop: Dimensions.get("window").width * 0.05
  },
  bottomname_txt: {
    color: "#919191",
    fontSize: moderateScale(13),
    fontFamily: font_type.FontLight
  },
  container: {
    backgroundColor: "#11142a",
    justifyContent: "center",
    alignItems: "center"
  },
  search_view_bg: {
    backgroundColor: "#e9e9e9",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.08,
    justifyContent: "center",
    alignItems: "center"
  },
  search_view: {
    backgroundColor: 'white',
    borderRadius: 5,
    width: Dimensions.get("window").width * 0.95,
    height: Dimensions.get("window").height * 0.06,
    alignItems: "center",
    flexDirection: "row"
  },
  search_text: {
    color: "#8e8e93",
    fontSize: moderateScale(15),
    fontFamily: font_type.FontLight,
    marginLeft: Dimensions.get("window").width * 0.03
  },
  list_content: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    paddingVertical: moderateScale(1)
  },
  cover_image_style: {
    width: Dimensions.get("window").width * 0.5,
    height: Dimensions.get("window").height * 0.3425,
    borderWidth: moderateScale(1),
    borderColor: "#fff",
    alignItems: "center"
  },
  category_btn: {
    height: Dimensions.get("window").height * 0.04,
    paddingHorizontal: Dimensions.get("window").width * 0.025,
    bottom: Dimensions.get("window").height * 0.015,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center"
  },
  button_text: {
    color: "#fff",
    fontSize: moderateScale(13),
    fontFamily: font_type.FontLight,
    textAlign: "center"
  },
  slidesec: {
    height: Dimensions.get("window").height * 0.3,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  dot: {
    backgroundColor: "#d4d4d4",
    width: Dimensions.get("window").width * 0.02,
    height: Dimensions.get("window").width * 0.02,
    borderRadius: Dimensions.get("window").width * 0.01,
    marginLeft: Dimensions.get("window").width * 0.005,
    marginRight: Dimensions.get("window").width * 0.005
  },
  active_dot: {
    backgroundColor: "#ff6347",
    width: Dimensions.get("window").width * 0.02,
    height: Dimensions.get("window").width * 0.02,
    borderRadius: Dimensions.get("window").width * 0.01,
    marginLeft: Dimensions.get("window").width * 0.005,
    marginRight: Dimensions.get("window").width * 0.005
  },
  slide: {
    height: Dimensions.get("window").height * 0.3,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  slider_image: {
    resizeMode: "cover",
    height: Dimensions.get("window").height * 0.3,
    width: Dimensions.get("window").width,
    backgroundColor: "grey"
  },
  content_style: {
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    top: Dimensions.get("window").height * 0.055
  },
  headertext: {
    fontFamily: font_type.FontBold,
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: moderateScale(16),
    textAlign: "center",
    alignSelf: "center",
    color: "red"
  },
  desctext: {
    fontFamily: font_type.FontLight,
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: moderateScale(23),
    textAlign: "center",
    alignSelf: "center",
    color: "#ff6347",
    lineHeight: moderateScale(23)
  },
  new_arrival_sec: {
    flexDirection: "row",
    paddingTop: Dimensions.get("window").height * 0.032,
    paddingBottom: Dimensions.get("window").height * 0.01,
    backgroundColor: "#fff"
  },
  side_buttons: {
    flex: 1,
    height: Dimensions.get("window").height * 0.05,
    alignItems: "center",
    justifyContent: "center"
  },
  new_arrival_body: {
    flex: 9,
    height: Dimensions.get("window").height * 0.05,
    alignItems: "center",
    justifyContent: "center"
  },
  titel_text: {
    fontFamily: font_type.FontLight,
    fontSize: moderateScale(14),
    textAlign: "center",
    alignSelf: "center",
    color: "#362f2d"
  },
  row_main: {
    backgroundColor: 'white',
    width: Dimensions.get("window").width * 0.445,
    alignItems: "flex-start",
    alignContent: "flex-start",
    margin: Dimensions.get("window").width * 0.0165
  },
  item_image: {
    width: Dimensions.get("window").width * 0.445,
    height: Dimensions.get("window").width * 0.64
  },
  item_title: {
    width: Dimensions.get("window").width * 0.445,
    color: "#0e1130",
    fontSize: moderateScale(15),
    fontFamily: font_type.FontLight,
    marginTop: Dimensions.get("window").height * 0.015,
    textAlign: "left",
    marginLeft: 5
  },
  item_price: {
    width: Dimensions.get("window").width * 0.445,
    color: "#ff0000",
    fontSize: moderateScale(15),
    fontFamily: font_type.FontBold,
    marginTop: Dimensions.get("window").height * 0.01,
    marginBottom: Dimensions.get("window").height * 0.01,
    textAlign: "left",
    marginLeft: 5
  },
  swiper_view: {
    height: Dimensions.get("window").height * 0.525
  },
  new_arrival_view: {
    flexDirection: "row",
    padding: Dimensions.get("window").height * 0.01
  },
  search_input: {
    color: "#6d6d71",
    fontSize: moderateScale(15),
    fontFamily: font_type.FontLight,
    ...Platform.select({
      ios: {}
    })
  },
  back_arrow: {
    justifyContent: "center",
    alignItems: "center"
  }
});
// END TO MAKE STYLE
