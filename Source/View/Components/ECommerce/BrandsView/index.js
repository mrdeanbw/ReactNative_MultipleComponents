import React, { Component } from "react";
import {Text,View,Image,StatusBar,TouchableOpacity,Platform,I18nManager,ListView,StyleSheet,Dimensions} from "react-native";
import {Content,Container,Right,Header,Left,Body,Input} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";
import FontAwesome from "react-native-vector-icons/FontAwesome";

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

export default class Brands extends Component {
  constructor(props) {
    super(props);
    // BEGIN TO SETUP BRAND ARRAY
    const brandList = [
      {
        id: 0,
        brandIcon: GlobalInclude.Brand1,
        brandName: "Lorem Ipsum"
      },
      {
        id: 1,
        brandIcon: GlobalInclude.Brand2,
        brandName: "Lorem Ipsum"
      },
      {
        id: 2,
        brandIcon: GlobalInclude.Brand3,
        brandName: "Lorem Ipsum"
      },
      {
        id: 3,
        brandIcon: GlobalInclude.Brand4,
        brandName: "Lorem Ipsum"
      },
      {
        id: 4,
        brandIcon: GlobalInclude.Brand5,
        brandName: "Lorem Ipsum"
      },
      {
        id: 5,
        brandIcon: GlobalInclude.Brand6,
        brandName: "Lorem Ipsum"
      },
      {
        id: 6,
        brandIcon: GlobalInclude.Brand7,
        brandName: "Lorem Ipsum"
      },
      {
        id: 7,
        brandIcon: GlobalInclude.Brand8,
        brandName: "Lorem Ipsum"
      },
      {
        id: 8,
        brandIcon: GlobalInclude.Brand9,
        brandName: "Lorem Ipsum"
      },
      {
        id: 9,
        brandIcon: GlobalInclude.Brand10,
        brandName: "Lorem Ipsum"
      },
      {
        id: 10,
        brandIcon: GlobalInclude.Brand11,
        brandName: "Lorem Ipsum"
      },
      {
        id: 11,
        brandIcon: GlobalInclude.Brand12,
        brandName: "Lorem Ipsum"
      },
      {
        id: 12,
        brandIcon: GlobalInclude.Brand13,
        brandName: "Lorem Ipsum"
      },
      {
        id: 13,
        brandIcon: GlobalInclude.Brand14,
        brandName: "Lorem Ipsum"
      },
      {
        id: 14,
        brandIcon: GlobalInclude.Brand15,
        brandName: "Lorem Ipsum"
      }
    ];
    // END TO SETUP BRAND ARRAY

    const rowHasChanged = (r1, r2) => r1 !== r2;
    const ds = new ListView.DataSource({ rowHasChanged });

    // BEGIN TO SETUP STATE
    this.state = {
      dataSource: ds.cloneWithRows(brandList),
      isSearch: false
    };
    // END TO SETUP STATE

  }

  //BEGIN TO SETUP HANDLEBRANDCLICK
  _handleBrandClick(brandName) {
    alert(brandName);
  }
  //END TO SETUP HANDLEBRANDCLICK

  //BEGIN TO SETUP RENDERROW
  _renderRow(rowData) {
    return (
      <TouchableOpacity style={styles.row_main} onPress={() => this._handleBrandClick(rowData.brandName)}>
        <Image source={rowData.brandIcon} style={styles.barnd_icon} />
      </TouchableOpacity>
    );
  }
  //END TO SETUP RENDERROW

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
            <Text style={styles.text_title}>Brands</Text>
          </Body>
        {/* END TO SETUP BODY VIEW */}

        {/* BEGIN TO SETUP RIGHT VIEW */}
          <Right style={styles.right}>
            <TouchableOpacity style={styles.back_arrow} onPress={() => this.setState({ isSearch: !this.state.isSearch })}>
              <Ionicons name={"ios-search"} size={25} color="white" />
            </TouchableOpacity>
          </Right>
        {/* END TO SETUP RIGHT VIEW */}
        </Header>
      {/* END TO SETUP HEADER VIEW */}

        {this.state.isSearch ? (
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
        ) : null}

        {/* BEGIN TO SETUP BRANDLIST VIEW */}
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          enableEmptySections
          pageSize={4}
          showsVerticalScrollIndicator={false}/>
        {/* END TO SETUP BRANDLIST VIEW */}
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
        paddingTop: Dimensions.get("window").height * 0.02
      },
      android: {
        paddingTop: Dimensions.get("window").width * 0.04
      }
    }),
    elevation: 0,
    paddingLeft: Dimensions.get("window").width * 0.05,
    paddingRight: Dimensions.get("window").width * 0.05
  },
  left: {
    flex: 0.5,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  back_arrow: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Dimensions.get("window").width * 0.01
  },
  body: {
    flex: 1,
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0)'
  },
  text_title: {
    color: 'white',
    fontSize: moderateScale(20),
    alignSelf: "center",
    fontFamily: font_type.FontLight
  },
  right: {
    flex: 0.5,
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: "center",
    ...Platform.select({
      ios: {},
      android: {
        paddingTop: Dimensions.get("window").width * 0.02
      }
    })
  },
  listContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    alignContent: "flex-start",
    justifyContent: "space-between"
  },
  row_main: {
    backgroundColor: "white",
    width: Dimensions.get("window").width * 0.3333,
    height: Dimensions.get("window").width * 0.35,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    borderColor: "#dcdcdc",
    borderWidth: Dimensions.get("window").width * 0.001
  },
  barnd_icon: {
    resizeMode: "contain",
    height: Dimensions.get("window").width * 0.12,
    width: Dimensions.get("window").width * 0.2
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
