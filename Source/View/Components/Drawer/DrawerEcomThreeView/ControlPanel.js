import React, { Component } from "react";
import {Image,StatusBar,View,TouchableOpacity,Linking,Alert,Platform,ImageBackground,ScrollView,StyleSheet,Dimensions} from "react-native";
import {Header,Button,Text,Container,List,ListItem,Content,Icon,top,Left,Right,Title,Body} from "native-base";
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
    this.state = {
      langId: 1,
      activeMenu: "SignUp"
    };
  }

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
      <Container>
        <View style={styles.container}>
          <View style={styles.list_profile_container}>
          {/* BEGIN TO SETUP PROFILEIAMGE AND NAME AND ADDRESS VIEW */}
            <View style={styles.profile_data_bg}>
              <Image source={GlobalInclude.Image1} style={styles.profile_img} />
              <View style={styles.name_address_txt}>
                <Text style={styles.name_txt}>Lorem Ipsum</Text>
                <Text style={styles.address_txt}>Lorem Ipsum</Text>
              </View>
            </View>
          {/* END TO SETUP PROFILEIAMGE AND NAME AND ADDRESS VIEW */}
            <View style={styles.menu_list_scroll_bg}>
              <ScrollView style={styles.menu_list_bg}>
              {/* BEGIN TO SETUP CATEGORIES VIEW */}
                <TouchableOpacity style={styles.category_row_bg} onPress={() => alert("Categories Button Click")}>
                  <Text style={styles.menu_list_item}>Categories</Text>
                  <View style={styles.category_count_bg}>
                    <Text style={styles.category_item_count}>11</Text>
                  </View>
                </TouchableOpacity>
              {/* END TO SETUP CATEGORIES VIEW */}
                <View style={styles.menu_list_divider} />

              {/* BEGIN TO SETUP BRANDS VIEW */}
                <TouchableOpacity style={styles.menu_list_item_bg} onPress={() => alert("Brands Button Click")}>
                  <Text style={styles.menu_list_item}>Brands</Text>
                </TouchableOpacity>
              {/* END TO SETUP BRANDS VIEW */}
                <View style={styles.menu_list_divider} />

              {/* BEGIN TO SETUP SALE VIEW */}
                <TouchableOpacity style={styles.menu_list_item_bg} onPress={() => alert("Sale Button Click")}>
                  <Text style={styles.menu_list_item}>Sale</Text>
                </TouchableOpacity>
              {/* END TO SETUP SALE VIEW */}
                <View style={styles.menu_list_divider} />

              {/* BEGIN TO SETUP USEQRCODE VIEW */}
                <TouchableOpacity style={styles.menu_list_item_bg} onPress={() => alert("Use QR code Button Click")}>
                  <Text style={styles.menu_list_item}>Use QR code</Text>
                </TouchableOpacity>
              {/* END TO SETUP USEQRCODE VIEW */}
                <View style={styles.menu_list_divider} />

              {/* BEGIN TO SETUP WISHLIST VIEW */}
                <TouchableOpacity style={styles.menu_list_item_bg} onPress={() => alert("Wishlist Button Click ")}>
                  <Text style={styles.menu_list_item}>Wishlist</Text>
                </TouchableOpacity>
              {/* END TO SETUP WISHLIST VIEW */}
                <View style={styles.menu_list_divider} />

              {/* BEGIN TO SETUP FAQ VIEW */}
                <TouchableOpacity style={styles.menu_list_item_bg} onPress={() => alert("FAQ Button Click")}>
                  <Text style={styles.menu_list_item}>FAQ</Text>
                </TouchableOpacity>
              {/* END TO SETUP FAQ VIEW */}
                <View style={styles.menu_list_divider} />

              {/* BEGIN TO SETUP CHANGECOUNTRY VIEW */}
                <TouchableOpacity style={styles.menu_list_item_bg} onPress={() => alert("Change Country Button Click")}>
                  <Text style={styles.menu_list_item}>Change Country</Text>
                </TouchableOpacity>
              {/* END TO SETUP CHANGECOUNTRY VIEW */}
                <View style={styles.menu_list_divider} />

              {/* BEGIN TO SETUP PRIVACYPOLICY VIEW */}
                <TouchableOpacity style={styles.menu_list_item_bg} onPress={() => alert("Privacy Policy Button Click")}>
                  <Text style={styles.menu_list_item}>Privacy Policy</Text>
                </TouchableOpacity>
              {/* END TO SETUP PRIVACYPOLICY VIEW */}
                <View style={styles.menu_list_divider} />

              {/* BEGIN TO SETUP ABOUTUS VIEW */}
                <TouchableOpacity style={styles.menu_list_item_bg} onPress={() => alert("About Us Button Click")}>
                  <Text style={styles.menu_list_item}>About Us</Text>
                </TouchableOpacity>
              {/* END TO SETUP ABOUTUS VIEW */}
              </ScrollView>
            </View>
          </View>

        {/* BEGIN TO SETUP CART VIEW */}
          <View style={styles.bottomView_bg}>
            <TouchableOpacity onPress={() => alert("My Cart Button Click")} style={styles.bottom_image_data_bg}>
              <Image source={require('./icon_cart.png')} style={styles.cart_image} />
              <View style={styles.cart_count_bg}>
                <Text style={styles.cart_item_count}>11</Text>
              </View>
              <Text style={[styles.bottom_txt, { marginLeft: Dimensions.get("window").width * 0.02 }]}>
                My Cart
              </Text>
            </TouchableOpacity>
            <Text style={styles.bottom_txt}>$500.00</Text>
          </View>
        {/* END TO SETUP CART VIEW */}
        </View>
      </Container>
    );
  }
}
// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  menu_list_item: {
    marginLeft: (Dimensions.get("window").width * 0.03),
    color: "#2d324f",
    fontSize: moderateScale(18),
    fontFamily: font_type.FontLight,
  },
  container: {
    height: (Dimensions.get("window").height),
    backgroundColor: 'white'
  },
  list_profile_container: {
    height: (Dimensions.get("window").height * 0.90),
    backgroundColor: 'rgba(0,0,0,0)'
  },
  profile_data_bg: {
    flexDirection: 'row',
    marginTop: (Dimensions.get("window").height * 0.07),
    alignItems: 'center',
    marginLeft: (Dimensions.get("window").width * 0.08)
  },
  profile_img: {
    width: (Dimensions.get("window").width) * 0.16,
    height: (Dimensions.get("window").width) * 0.16,
    borderRadius: (Dimensions.get("window").width) * 0.08,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  name_txt: {
    fontSize: moderateScale(20),
    fontFamily: font_type.FontBold,
    color: "#2d324f"
  },
  address_txt: {
    fontSize: moderateScale(12),
    fontFamily: font_type.FontLight,
    color: "#a9a9a9",
    textAlign: 'left'
  },
  name_address_txt: {
    flexDirection: 'column',
    marginLeft: (Dimensions.get("window").width * 0.03)
  },
  menu_list_bg: {
    marginLeft: (Dimensions.get("window").width * 0.08),
    marginRight: (Dimensions.get("window").width * 0.08),
    backgroundColor: 'rgba(0,0,0,0)'
  },
  menu_list_item_bg: {
    flexDirection:'row',
    marginTop: (Dimensions.get("window").height * 0.03),
    alignItems: 'center'
  },
  bottomView_bg: {
    flexDirection: 'row',
    height: (Dimensions.get("window").height * 0.1),
    backgroundColor: "#ff6347",
    alignItems:'center',
    justifyContent: 'space-between',
    paddingLeft: (Dimensions.get("window").width * 0.05),
    paddingRight: (Dimensions.get("window").width * 0.02)
  },
  bottom_image_data_bg: {
    flexDirection: 'row',
    alignItems:'center'
  },
  bottom_image: {
    width: (Dimensions.get("window").width * 0.12),
    height:(Dimensions.get("window").width * 0.12),
    borderRadius: (Dimensions.get("window").width * 0.06),
    borderWidth: 1,
    borderColor: 'white'
  },
  bottom_txt: {
    color: 'white',
    fontSize: moderateScale(18),
    fontFamily: font_type.FontBold,
  },
  menu_list_divider: {
    backgroundColor: "#ebebeb",
    height: 0.5,
    marginTop: (Dimensions.get("window").height * 0.02)
  },
  cart_item_count: {
    margin: (Dimensions.get("window").width * 0.01),
    color: 'white',
    fontSize: moderateScale(10),
    fontFamily: font_type.FontLight,
  },
  cart_count_bg: {
    marginTop: -(Dimensions.get("window").height * 0.03),
    marginLeft: -(Dimensions.get("window").width * 0.02),
    width: (Dimensions.get("window").width * 0.05),
    height: (Dimensions.get("window").width * 0.05),
    borderRadius: (Dimensions.get("window").width * 0.025),
    backgroundColor: '#2d324f',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cart_image: {
    width: (Dimensions.get("window").width * 0.06),
    height: (Dimensions.get("window").width * 0.06),
    resizeMode: 'contain'
  },
  category_item_count: {
    marginLeft: (Dimensions.get("window").width * 0.03),
    marginRight:(Dimensions.get("window").width * 0.03),
    marginTop: (Dimensions.get("window").width * 0.005),
    marginBottom: (Dimensions.get("window").width * 0.005),
    color: 'white',
    fontSize: moderateScale(12)
  },
  category_count_bg: {
    backgroundColor: "#ff6347",
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  category_row_bg: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  menu_list_scroll_bg: {
    height:(Dimensions.get("window").height * 0.67),
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: (Dimensions.get("window").height * 0.06)
  }
});
// END TO MAKE STYLE
