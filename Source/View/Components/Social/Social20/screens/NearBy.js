import React, { Component } from "react";
import {View,Text,Image,StatusBar,Platform,StyleSheet,ImageBackground,Dimensions,Stylesheet,TouchableOpacity,ListView,AsyncStorage,I18nManager} from "react-native";
import {Container,Button,Right,Left,Content,Body,Header,Title} from "native-base";
import LinearGradient from "react-native-linear-gradient";
import { Actions } from "react-native-router-flux";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import GlobalInclude from "../../../../../Global/GlobalInclude/globalinclude.js";

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

export default class NearBy extends Component {
  constructor(props) {
    super(props);

    //BEGIN TO SETUP DATA
    const dataObjects = [
      {
        id: 1,
        name: "Lorem Ipsum",
        cardBg: GlobalInclude.Image1,
        profileImage: GlobalInclude.Image2,
        watch: "1",
        distance: "1m"
      },
      {
        id: 2,
        name: "Lorem Ipsum",
        cardBg: GlobalInclude.Image3,
        profileImage: GlobalInclude.Image4,
        watch: "2",
        distance: "2m"
      },
      {
        id: 3,
        name: "Lorem Ipsum",
        cardBg:  GlobalInclude.Image5,
        profileImage:  GlobalInclude.Image6,
        watch: "3",
        distance: "3m"
      },
      {
        id: 4,
        name: "Lorem Ipsum",
        cardBg: GlobalInclude.Image7,
        profileImage:  GlobalInclude.Image8,
        watch: "4",
        distance: "4km"
      },
      {
        id: 5,
        name: "Lorem Ipsum",
        cardBg: GlobalInclude.Image9,
        profileImage: GlobalInclude.Image10,
        watch: "5",
        distance: "5km"
      }
    ];
    //END TO SETUP DATA

    //BEGIN TO SETUP LISRVIEWROW
    const rowHasChanged = (r1, r2) => r1 !== r2;
    const ds = new ListView.DataSource({ rowHasChanged });

    this.state = {
      isLoading: true,
      dataSource: ds.cloneWithRows(dataObjects),
      selectedLots: []
    };
    //END TO SETUP LISRVIEWROW
  }

  //BEGIN TO SETUP ONLEARNMORE
  onLearnMore = (name, watch, distance) => {
    AsyncStorage.multiSet([
      ["Name", name],
      ["WatchCount", watch],
      ["Distance", distance]
    ]);
    Actions.tab1_2();
  };
  //END TO SETUP ONLEARNMORE

  //BEGIN TO SETUP NAVIGATEFILTERSCREEN
  navigateFiltyerScreen = () => {
    Actions.tab_3_2();
  };
  //END TO SETUP NAVIGATEFILTERSCREEN

  //BEGIN TO SETUP RENDERROW
  _renderRow(rowData) {
    var { banner, navigation } = this.props;
    return (
      <View style={styles.row_main}>
      {/* BEGIN TO SETUP IMAGEBACKGROUND VIEW */}
        <ImageBackground style={styles.img_container} source={require('./card_social_bg.png')}>
          <TouchableOpacity style={styles.card_image} onPress={() =>this.onLearnMore(rowData.name, rowData.watch, rowData.distance)}>
          {/* BEGIN TO SETUP CARDIMAGE VIEW */}
            <Image style={styles.card_bg_image} source={rowData.cardBg} />
          {/* END TO SETUP CARDIMAGE VIEW */}

          {/* BEGIN TO SETUP LINEARGRADIENT VIEW */}
            <LinearGradient
              locations={[0.1, 1]}
              colors={["transparent", "black"]}
              style={styles.shadow_bg}>
              <View style={styles.post_detail_bg}>
              {/* BEGIN TO SETUP PROFILEIMAGE VIEW */}
                <Image source={rowData.profileImage} style={styles.profile_image}/>
              {/* END TO SETUP PROFILEIMAGE VIEW */}

              {/* BEGIN TO SETUP NAME AND DISTANCE VIEW */}
                <View style={styles.profile_detail_bg}>
                  <Text style={styles.name_txt}>{rowData.name}</Text>
                  <View style={styles.watch_distance_bg}>
                    <Image source={require('./icon_watch.png')} style={styles.watch_icon} />
                    <Text style={styles.watch_distance_txt}>{rowData.watch}</Text>
                    <View style={styles.map_pin}>
                      <FontAwesome name="map-marker" size={12} color="white" />
                    </View>
                    <Text style={styles.watch_distance_txt}>
                      {rowData.distance}
                    </Text>
                  </View>
                </View>
              {/* END TO SETUP NAME AND DISTANCE VIEW */}

              {/* BEGIN TO SETUP WISH VIEW */}
                <Right style={styles.hrat_icon_bg}>
                  <SimpleLineIcons name="heart" size={20} color="white" />
                </Right>
              {/* END TO SETUP WISH VIEW */}
              </View>
            </LinearGradient>
          {/* END TO SETUP LINEARGRADIENT VIEW */}
          </TouchableOpacity>
        </ImageBackground>
      {/* END TO SETUP IMAGEBACKGROUND VIEW */}
      </View>
    );
  }

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
      {/* BEGIN TO SETUP IMAGEBACKGROUND VIEW */}
        <ImageBackground source={require('./gradient_bg.png')} style={styles.header}>
        {/* BEGIN TO SETUP HEADER VIEW */}
          <Header androidStatusBarColor={'rgba(0,0,0,0)'} style={styles.header}>
          {/* BEGIN TO SETUP LEFT VIEW */}
            <Left style={{ flex: 1 }}>
              <TouchableOpacity onPress={Actions.pop}>
                {I18nManager.isRTL ? (
                  <FontAwesome name="angle-right" size={30} color="white" />
                ) : (
                  <FontAwesome name="angle-left" size={30} color="white" />
                )}
              </TouchableOpacity>
            </Left>
          {/* END TO SETUP LEFT VIEW */}

          {/* BEGIN TO SETUP BODY VIEW */}
            <Body style={styles.body}>
              <Title style={styles.title_txt}>Nearby</Title>
            </Body>
          {/* END TO SETUP BODY VIEW */}

          {/* BEGIN TO SETUP RIGHT VIEW */}
            <Right style={styles.right}>
              <TouchableOpacity onPress={() => this.navigateFiltyerScreen()}>
                <Text style={styles.filter_txt}>Filter</Text>
              </TouchableOpacity>
            </Right>
          {/* END TO SETUP RIGHT VIEW */}
          </Header>
        {/* END TO SETUP HEADER VIEW */}
        </ImageBackground>
      {/* END TO SETUP IMAGEBACKGROUND VIEW */}

      {/* BEGIN TO SETUP LISTVIEW VIEW */}
        <ListView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          enableEmptySections
          scrollEnabled={true}/>
      {/* END TO SETUP LISTVIEW VIEW */}
      </Container>
    );
  }
}

//BEGIN TO SETUP STYLE
const styles = StyleSheet.create({
  main: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    flexDirection: "column"
  },
  header: {
    backgroundColor: 'rgba(0,0,0,0)',
    height: Dimensions.get("window").height * 0.14,
    width: Dimensions.get("window").width,
    flexDirection: "row",
    borderBottomColor: 'rgba(0,0,0,0)',
    paddingTop: Dimensions.get("window").width * 0.02
  },
  left: {
    flex: 1
  },
  body: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center"
  },
  right: {
    flex: 1,
    alignItems: "center"
  },
  title_txt: {
    color: 'white'
  },
  filter_txt: {
    color: 'white',
    fontSize: moderateScale(16)
  },
  img_container: {
    width: Dimensions.get("window").width * 0.52,
    height: Dimensions.get("window").height * 0.63,
    alignItems: "center",
    justifyContent: "center"
  },
  card_image: {
    borderRadius: 6,
    height: Dimensions.get("window").height * 0.57,
    width: Dimensions.get("window").width * 0.56
  },
  card_bg_image: {
    width: Dimensions.get("window").width * 0.56,
    height: Dimensions.get("window").height * 0.57,
    borderRadius: 6
  },
  shadow_bg: {
    width: Dimensions.get("window").width * 0.56,
    height: Dimensions.get("window").height * 0.57,
    borderRadius: 6,
    bottom: 0,
    position: "absolute"
  },
  row_main: {
    marginHorizontal: Dimensions.get("window").width * 0.05,
    marginTop: Dimensions.get("window").height * 0.1
  },
  profile_image: {
    width: Dimensions.get("window").width * 0.08,
    height: Dimensions.get("window").width * 0.08,
    borderRadius: Dimensions.get("window").width * 0.04,
    borderColor: 'white',
    borderWidth: 1
  },
  name_txt: {
    fontSize: moderateScale(12),
    color: 'white',
    fontFamily: font_type.FontLight,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  watch_icon: {
    width: Dimensions.get("window").width * 0.026,
    height: Dimensions.get("window").width * 0.026,
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: Dimensions.get("window").width * 0.015
  },
  watch_distance_txt: {
    fontSize: moderateScale(12),
    color: 'white',
    fontFamily: font_type.FontLight,
    backgroundColor: 'rgba(0,0,0,0)',
    marginLeft: Dimensions.get("window").width * 0.008,
    marginTop: Dimensions.get("window").width * 0.01
  },
  map_pin: {
    marginLeft: Dimensions.get("window").width * 0.04,
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: Dimensions.get("window").width * 0.01
  },
  post_detail_bg: {
    flexDirection: "row",
    marginLeft: Dimensions.get("window").width * 0.04,
    marginRight: Dimensions.get("window").width * 0.04,
    bottom: Dimensions.get("window").width * 0.04,
    position: "absolute"
  },
  profile_detail_bg: {
    flexDirection: "column",
    marginLeft: Dimensions.get("window").width * 0.03
  },
  watch_distance_bg: {
    flexDirection: "row"
  },
  hrat_icon_bg: {
    backgroundColor: "transparent",
    marginTop: -(Dimensions.get("window").width * 0.02)
  }
});
//END TO SETUP STYLE
