import React, { Component } from "react";
import {Text,Image,StatusBar,TouchableOpacity,Platform,ImageBackground,ListView,I18nManager,StyleSheet,Dimensions} from "react-native";
import {Container,Button,Icon,Right,Header,Left,Body,Title} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View } from "react-native-animatable";
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";

// BEGIN TO SETUP FONTTYPE AND FONTSIZE
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const scale = size => (Dimensions.get("window").width / guidelineBaseWidth) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const font_type = {
    FontLight: 'Helvetica',
    FontBold : 'Helvetica-Bold'
};
// END TO SETUP FONTTYPE AND FONTSIZE


const rowHasChanged = (r1, r2) => r1 !== r2;
const ds = new ListView.DataSource({ rowHasChanged });

const dataUpperRowObjects = [
  {
    id: 1,
    cardImage: require('./icon_livingroom.png'),

  },
  {
    id: 2,
    cardImage: require('./icon_diningroom.png'),

  },
  {
    id: 3,
    cardImage: require('./icon_bookcase.png'),

  },
  {
    id: 4,
    cardImage: require('./icon_bedroom.png'),

  },
  {
    id: 5,
    cardImage:require('./icon_tvstand.png'),

  },
  {
    id: 6,
    cardImage: require('./icon_bathroom.png'),

  }
];

export default class DrawerTopIcon extends Component {


  constructor(props) {
    super(props);


    const dataLowerRowObjects = [
      {
        id: 1,
        cardBgImage:GlobalInclude.Image2,
        likeCount: 2,
        likeUserImages: [{ img: GlobalInclude.Image1}]
      },
      {
        id: 2,
        cardBgImage: GlobalInclude.Image5,
        likeCount: 5,
        likeUserImages: [
          { img: GlobalInclude.Image3 },
          { img: GlobalInclude.Image4 },
          { img: GlobalInclude.Image5 }
        ]
      },
      {
        id: 3,
        cardBgImage: GlobalInclude.Image6,
        likeCount: 10,
        likeUserImages: [{ img: GlobalInclude.Image7 }]
      },
      {
        id: 4,
        cardBgImage:GlobalInclude.Image8,
        likeCount: 12,
        likeUserImages: [
          { img: GlobalInclude.Image9 },
          { img: GlobalInclude.Image1 },
          { img: GlobalInclude.Image3 }
        ]
      },
      {
        id: 5,
        cardBgImage:GlobalInclude.Image5,
        likeCount: 7,
        likeUserImages: [{ img: GlobalInclude.Image6}]
      },
      {
        id: 6,
        cardBgImage:GlobalInclude.Image8,
        likeCount: 6,
        likeUserImages: [
          { img: GlobalInclude.Image2 },
          { img: GlobalInclude.Image3 },
          { img: GlobalInclude.Image9 }
        ]
      }
    ];

    this.state = {
      isLoading: true,
      selectedLots: 1,
      dataSourceUpper: ds.cloneWithRows(dataUpperRowObjects),
      dataSourceLower: ds.cloneWithRows(dataLowerRowObjects)
    };
  }

  //BEGIN TO SETUP ONTABPRESS
  onTabPress(id) {
    this.setState({
      selectedLots: id,
      dataSourceUpper: ds.cloneWithRows(dataUpperRowObjects)
    });
  }
  //END TO SETUP ONTABPRESS

  //BEGIN TO SETUP RENDERUPPERROW
  _renderUpperRow(rowData) {
    return (
      <TouchableOpacity style={styles.upper_row_main} onPress={() => this.onTabPress(rowData.id)}>
        {this.state.selectedLots == rowData.id ? (
          <View style={styles.upper_row_selected_main}>
            <Image source={rowData.cardImage} style={styles.upper_list_image} />
          </View>
        ) : (
          <View style={styles.upper_row_main}>
            <Image source={rowData.cardImage} style={styles.upper_list_image} />
          </View>
        )}
      </TouchableOpacity>
    );
  }
  //END TO SETUP RENDERUPPERROW

  //BEGIN TO SETUP RENDERLOWERROW
  _renderLowerRow(rowData) {
    return (
      <View
        style={styles.lower_row_main}
        animation="zoomIn"
        duration={1100}
        delay={200}>
        <ImageBackground source={rowData.cardBgImage} style={styles.image_bg}>
          <View style={styles.card_content}>
            <TouchableOpacity onPress={() => alert("Like Button Click")}>
              <Image source={require('./icon_heart.png')} style={styles.like_image} />
            </TouchableOpacity>
            <Text style={styles.like_count_text}>{rowData.likeCount}</Text>
            <Right>
              <View style={styles.profile_container}>
                {rowData.likeUserImages.map((item, index) => {
                  return (
                    <View key={index} style={styles.profile_view}>
                      <Image style={styles.profile_img} source={item.img} />
                    </View>
                  );
                })}
              </View>
            </Right>
          </View>
        </ImageBackground>
      </View>
    );
  }
  //END TO SETUP RENDERLOWERROW

  render() {
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
        <Header style={styles.header}>
        {/* BEGIN TO SETUP LEFT VIEW */}
          <Left style={styles.left}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.back_arrow}>
              {I18nManager.isRTL ? (
                <Ionicons
                  name="ios-arrow-round-forward"
                  size={30}
                  color="#ffffff"/>
              ) : (
                <Ionicons
                  name="ios-arrow-round-back"
                  size={30}
                  color="#ffffff"/>
              )}
            </TouchableOpacity>
          </Left>
        {/* END TO SETUP LEFT VIEW */}

        {/* BEGIN TO SETUP BODY VIEW */}
          <Body style={styles.body}>
            <Title style={styles.header_title}>Category</Title>
          </Body>
        {/* END TO SETUP BODY VIEW */}

        {/* BEGIN TO SETUP RIGHT VIEW */}
          <Right style={styles.right}>
            <TouchableOpacity onPress={() => alert("Search")}>
              <Icon name="ios-search" style={styles.icon_color} />
            </TouchableOpacity>
          </Right>
        {/* END TO SETUP RIGHT VIEW */}
        </Header>
      {/* END TO SETUP HEADER VIEW */}

      {/* BEGIN TO SETUP UPPERLIST VIEW */}
        <View style={styles.list_view_bg}>
          <ListView
            contentContainerStyle={styles.upper_list_content}
            dataSource={this.state.dataSourceUpper}
            renderRow={this._renderUpperRow.bind(this)}
            enableEmptySections
            horizontal={true}
            showsHorizontalScrollIndicator={false}/>
        </View>
      {/* END TO SETUP UPPERLIST VIEW */}

      {/* BEGIN TO SETUP LOWERLIST VIEW */}
        <ListView
          contentContainerStyle={styles.lower_list_content}
          dataSource={this.state.dataSourceLower}
          renderRow={this._renderLowerRow.bind(this)}
          enableEmptySections
          automaticallyAdjustContentInsets={false}/>
      {/* END TO SETUP LOWERLIST VIEW */}
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
    elevation: 0
  },
  back_arrow: {
    width: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  left: {
    flex: 0.5,
    backgroundColor: "transparent"
  },
  body: {
    flex: 2,
    alignItems: "center",
    backgroundColor: "#ff6347"
  },
  right: {
    flex: 0.5
  },
  header_title: {
    color: "#fff",
    fontFamily:font_type.FontBold,
    fontSize: moderateScale(18)
  },
  icon_color: {
    color: "#fff"
  },
  upper_list_content: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-between",
    backgroundColor: "#ff6347",
    paddingTop: Dimensions.get("window").height * 0.017,
    paddingBottom: Dimensions.get("window").height * 0.017,
    paddingLeft: Dimensions.get("window").height * 0.008,
    paddingRight: Dimensions.get("window").height * 0.008
  },
  upper_row_main: {
    ...Platform.select({
      ios: {
        width: Dimensions.get("window").width * 0.17,
        height: Dimensions.get("window").width * 0.17
      },
      android: {
        width: Dimensions.get("window").width * 0.22,
        height: Dimensions.get("window").width * 0.22
      }
    }),
    justifyContent: "center",
    marginRight: Dimensions.get("window").width * 0.01,
    marginLeft: Dimensions.get("window").width * 0.01,
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#344334"
  },
  upper_row_selected_main: {
    ...Platform.select({
      ios: {
        width: Dimensions.get("window").width * 0.17,
        height: Dimensions.get("window").width * 0.17
      },
      android: {
        width: Dimensions.get("window").width * 0.22,
        height: Dimensions.get("window").width * 0.22
      }
    }),
    justifyContent: "center",
    marginRight: Dimensions.get("window").width * 0.01,
    marginLeft: Dimensions.get("window").width * 0.01,
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#787878"
  },
  upper_list_image: {
    height: Dimensions.get("window").height * 0.05,
    width: Dimensions.get("window").width * 0.1,
    resizeMode: "contain"
  },
  lower_list_content: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: Dimensions.get("window").width * 0.04,
    marginVertical: Dimensions.get("window").height * 0.015,
    alignItems: "flex-start",
    alignContent: "flex-start",
    justifyContent: "space-between",
    paddingBottom: Dimensions.get("window").height * 0.03
  },
  lower_row_main: {
    backgroundColor: "rgba(0,0,0,0.5)",
    width: Dimensions.get("window").width * 0.445,
    height: Dimensions.get("window").width * 0.445,
    marginBottom: Dimensions.get("window").width * 0.01,
    marginTop: Dimensions.get("window").width * 0.01,
    alignItems: "center",
    alignItems: "flex-start",
    alignContent: "flex-start",
    backgroundColor: "#11142a"
  },
  image_bg: {
    width: Dimensions.get("window").width * 0.445,
    height: Dimensions.get("window").width * 0.445
  },
  card_content: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    bottom: 0,
    position: "absolute",
    marginLeft: Dimensions.get("window").width * 0.03,
    marginRight: Dimensions.get("window").width * 0.04
  },
  profile_container: {
    flexDirection: "row",
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginBottom: Dimensions.get("window").height * 0.01
  },
  profile_img: {
    width: Dimensions.get("window").width * 0.065,
    height: Dimensions.get("window").width * 0.065,
    borderRadius: Dimensions.get("window").width * 0.0325,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    resizeMode: "cover"
  },
  like_count_text: {
    fontFamily: font_type.FontLight,
    fontSize: moderateScale(16),
    marginLeft: Dimensions.get("window").height * 0.01,
    color: "#FFFFFF",
    backgroundColor: "transparent",
    ...Platform.select({
      ios: {
        marginBottom: Dimensions.get("window").height * 0.01
      },
      android: {
        marginBottom: Dimensions.get("window").height * 0.005
      }
    })
  },
  like_image: {
    ...Platform.select({
      ios: {
        marginBottom: Dimensions.get("window").height * 0.015
      },
      android: {
        marginBottom: Dimensions.get("window").height * 0.015
      }
    }),
    width: Dimensions.get("window").height * 0.0225,
    height: Dimensions.get("window").height * 0.0225,
    resizeMode: "contain"
  },
  list_view_bg: {
    backgroundColor: "#ff6347",
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 8,
      width: 0
    },
    zIndex: 999
  },
  profile_view: {
    width: Dimensions.get("window").width * 0.042
  }
});
// END TO MAKE STYLE
