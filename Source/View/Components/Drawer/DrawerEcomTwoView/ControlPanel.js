import React, { Component } from "react";
import {AsyncStorage,Image,StatusBar,View,TouchableOpacity,Alert,Platform,ListView,StyleSheet,Dimensions} from "react-native";
import {Header,Text,Container,Content,Left,Right,Title,Body} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
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


export default class ControlPanel extends Component {
  constructor(props) {
    super(props);
    const dataObjects = [
      {
        title: "Lorem Ipsum",
        prices: "$10",
        item_image: GlobalInclude.Image8
      },
      {
        title: "Lorem Ipsum",
        prices: "$20",
        item_image:GlobalInclude.Image4
      },
      {
        title: "Lorem Ipsum",
        prices: "$30",
        item_image: GlobalInclude.Image1
      },
      {
        title: "Lorem Ipsum",
        prices: "$40",
        item_image: GlobalInclude.Image5
      },
      {
        title: "Lorem Ipsum",
        prices: "$50",
        item_image: GlobalInclude.Image2
      },
      {
        title: "Lorem Ipsum",
        prices: "$60",
        item_image:GlobalInclude.Image8
      },
      {
        title: "Lorem Ipsum",
        prices: "$70",
        item_image:GlobalInclude.Image9
      }
    ];

    //BEGIN TO SETUP LISTVIEW DATA
    const rowHasChanged = (r1, r2) => r1 !== r2;
    const ds = new ListView.DataSource({ rowHasChanged });

    this.state = {
      dataSource: ds.cloneWithRows(dataObjects)
    };
  }
  //END TO SETUP LISTVIEW DATA

  //BEGIN TO SETUP LISTVIEW RENDERROW VIEW
  _renderRow(rowData) {
    return (
      <View style={styles.item_bg}>
        <View style={styles.row_bg}>
          <Image source={rowData.item_image} style={styles.item_image} />
          <View style={styles.item_name_price_bg}>
            <Text style={styles.item_title_txt}>{rowData.title}</Text>
            <Text style={styles.item_price_txt}>{rowData.prices}</Text>
          </View>
          <TouchableOpacity style={styles.close_icon} onPress={() => alert("Delete Item button clicked.")}>
            <Ionicons name="md-close" color={"#ffffff"} size={20} />
          </TouchableOpacity>
        </View>
        <View style={styles.list_divider} />
      </View>
    );
  }
  //END TO SETUP LISTVIEW RENDERROW VIEW

  render() {
    const { activeMenuImage } = this.state;
    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW

    return (
      <Container style={styles.side_bar_container}>
        <View>
        {/* BEGIN TO SETUP HEADER VIEW */}
          <Header style={styles.headerD}>
          {/* BEGIN TO SETUP LEFT VIEW */}
            <Left style={styles.leftD}>
              <Text style={styles.my_cart_txt}>My Cart</Text>
            </Left>
          {/* END TO SETUP LEFT VIEW */}
            <Body />
          {/* BEGIN TO SETUP RIGHT VIEW */}
            <Right style={styles.rightD}>
              <View style={styles.item_count_bg}>
                <Text style={styles.count_txt}>7 items</Text>
              </View>
            </Right>
          {/* END TO SETUP RIGHT VIEW */}
          </Header>
        {/* END TO SETUP HEADER VIEW */}
          <View style={styles.mainview}>
            <View style={styles.list_bg}>
            {/* BEGIN TO SETUP LISTVIEW VIEW */}
              <ListView
                contentContainerStyle={{ backgroundColor: "transparent" }}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                renderFooter={this._renderFooter}
                enableEmptySections
                pageSize={15}/>
            {/* END TO SETUP LISTVIEW VIEW */}
            </View>
            <View style={styles.bottom_view_bg} />

            {/* BEGIN TO SETUP SUBTOTAL VIEW */}
              <View style={styles.sub_total_bg}>
                <Text style={styles.sub_total_txt}>SUBTOTAL</Text>
                <Text style={styles.sub_total_txt}>$1111</Text>
              </View>
            {/* END TO SETUP SUBTOTAL VIEW */}
              <View style={styles.bottom_divider} />
            </View>

          {/* BEGIN TO SETUP CHECKOUT VIEW */}
            <TouchableOpacity onPress={() => alert("Checkout")}>
              <View style={styles.checkout_bg}>
                <Text style={styles.checkout_txt}>Checkout</Text>
              </View>
            </TouchableOpacity>
          {/* END TO SETUP CHECKOUT VIEW */}
        </View>
      </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  container: {
    height: (Dimensions.get("window").height),
    width: Dimensions.get("window").width,
    backgroundColor: 'white'
  },
  mainview:{
    backgroundColor: '#36343f'
  },
  listrow:{
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center'
  },
  rowicon:{
    backgroundColor: 'rgba(0,0,0,0)',
    tintColor: 'white',
    height: 20,
    width: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
    alignItems: 'center'
  },
  rowtxt:{
    color:'white',
    fontSize: moderateScale(23),
    backgroundColor: 'rgba(0,0,0,0)',
    marginLeft: 20,
    textAlign: 'center',
    fontFamily: font_type.FontLight,
  },
  headerD: {
    backgroundColor: '#312f38',
    height: 66,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
				paddingTop:10
			}
    }),
		elevation: 0
  },
  leftD: {
    flex: 1.5,
		 backgroundColor: 'rgba(0,0,0,0)',
  },
  rightD: {
    flex: 1.5
  },
  row:{
    height: 100,
    backgroundColor: '#36343f',
    flexDirection: 'row'
  },
  rowicon:{
    backgroundColor: 'rgba(0,0,0,0)',
    height: 20,
    width: 20,
    tintColor: '#36343f',
    resizeMode: 'contain',
    alignSelf: 'center',
    alignItems: 'center'
  },
  rowtxt:{
    color:'#919cae',
    fontSize: moderateScale(15),
    backgroundColor: 'rgba(0,0,0,0)',
    textAlign: 'left',
    marginTop: 12,
    fontFamily: font_type.FontLight,
  },
  side_bar_container: {
    zIndex: 11,
    backgroundColor: '#36343f'
  },
  my_cart_txt: {
    color:'white',
    fontSize: moderateScale(23)
  },
  item_count_bg: {
    backgroundColor: '#ff6347',
    marginLeft: 10,
    borderRadius: 10,
    height: 17,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  count_txt: {
    color:'white',
    fontSize: moderateScale(13)
  },
  list_bg: {
    height: Dimensions.get("window").height*0.55
  },
  bottom_view_bg: {
    backgroundColor: '#29282e',
    height: 1,
    width: Dimensions.get("window").width
  },
  sub_total_bg: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  sub_total_txt: {
    color:'white',
    fontSize: moderateScale(20),
    marginVertical: 15,
    marginHorizontal: 15
  },
  bottom_divider: {
    backgroundColor: '#29282e',
    height: 1,
    width: Dimensions.get("window").width
  },
  checkout_bg: {
    backgroundColor: '#ff6347',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkout_txt: {
    color:'white',
    fontSize: moderateScale(20)
  },
  item_bg: {
    backgroundColor: '#36343f'
  },
  row_bg: {
    height: 100,
    backgroundColor: '#36343f',
    flexDirection: 'row',
    alignItems: 'center'
  },
  item_image: {
    height: 75,
    width: 75,
    margin: 15
  },
  item_name_price_bg: {
    flexDirection: 'column',
    height: 50,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  item_title_txt: {
    color:'white',
    fontFamily: font_type.FontBold,
  },
  item_price_txt: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#ff6347',
    fontFamily: font_type.FontBold,
  },
  close_icon: {
    color: '#5e5d65',
    alignSelf: 'center',
    position: 'absolute',
    right: 20
  },
  list_divider: {
    backgroundColor: '#29282e',
    height: 1,
    marginLeft: 15
  }
});
// END TO MAKE STYLE
