import React, { Component } from "react";
import {ScrollView,Text,Image,StatusBar,Platform,ImageBackground,Dimensions,TouchableOpacity,ListView,StyleSheet,Alert} from "react-native";
import {Container,Button,Right,Left,ListItem,Content,Body} from "native-base";
import Entypo from "react-native-vector-icons/Entypo";
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";
const { width, height } = Dimensions.get("window");
import { View } from "react-native-animatable";

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

export default class Tablist extends Component {
  constructor(props) {
    super(props);

    //BEGIN TAB DATA
    const dataObjects = [
      {
        id: 1,
        cardBgImage: GlobalInclude.Image4,
        title: "Lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis eleifend ipsum a maximus.",
        likeCount: 122,
        commentCount: 305
      },
      {
        id: 2,
        cardBgImage: GlobalInclude.Image5,
        title: "Lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis eleifend ipsum a maximus.",
        likeCount: 10,
        commentCount: 30
      },
      {
        id: 3,
        cardBgImage: GlobalInclude.Image3,
        title: "Lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis eleifend ipsum a maximus.",
        likeCount: 22,
        commentCount: 15
      },
      {
        id: 4,
        cardBgImage: GlobalInclude.Image2,
        title: "Lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis eleifend ipsum a maximus.",
        likeCount: 15,
        commentCount:25
      },
      {
        id: 5,
        cardBgImage: GlobalInclude.Image9,
        title: "Lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis eleifend ipsum a maximus.",
        likeCount: 15,
        commentCount: 35
      },
      {
        id: 6,
        cardBgImage: GlobalInclude.Image10,
        title: "Lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis eleifend ipsum a maximus.",
        likeCount: 12,
        commentCount: 45
      }
    ];
    //END TAB DATA

    const rowHasChanged = (r1, r2) => r1 !== r2;
    const ds = new ListView.DataSource({ rowHasChanged });

    this.state = {
      isLoading: true,
      dataSource: ds.cloneWithRows(dataObjects)
    };
  }

  //BEGIN TO SETUP LIST RENDERROW VIEW
  _renderRow(rowData) {
    return (
      <View>
        <View style={styles.row_main}>
        {/* BEGIN TO SETUP CARGIMAGE VIEW */}
          <Image source={rowData.cardBgImage} style={styles.cardbg_image} />
        {/* END TO SETUP CARGIMAGE VIEW */}
        {/* BEGIN TO SETUP CARDDETAIL VIEW */}
          <View style={styles.carddetail_bg}>
        {/* BEGIN TO SETUP TITLE VIEW */}
            <Text numberOfLines={1} style={styles.title_txt}>
              {rowData.title}
            </Text>
        {/* END TO SETUP TITLE VIEW */}
        {/* BEGIN TO SETUP DESCRIPTION VIEW */}
            <Text numberOfLines={3} style={styles.description_txt}>
              {rowData.description}
            </Text>
        {/* END TO SETUP DESCRIPTION VIEW */}

        {/* BEGIN TO SETUP LIKE AND COMMENT BUTTON VIEW */}
            <View style={styles.likeComment_bg}>
              <TouchableOpacity onPress={() => alert("Like Button clicked.")} style={styles.countimg_bg}>
                <Entypo name="heart" size={15} color="#d4d4d4" />
                <Text style={styles.likecommentcount_txt}>{rowData.likeCount}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.countimg_bg} onPress={() => alert("Comment button clicked.")}>
                <Image style={styles.comment_img} source={GlobalInclude.Images.comments} />
                <Text style={styles.likecommentcount_txt}>
                  {rowData.commentCount}
                </Text>
              </TouchableOpacity>
            </View>
          {/* END TO SETUP LIKE AND COMMENT BUTTON VIEW */}
          </View>
        </View>
        <View style={styles.list_divider} />
      </View>
    );
  }
  //END TO SETUP LIST RENDERROW VIEW

  render() {
    return (
      <Container style={styles.main}>
        <Content>
        {/* BEGIN TO SETUP LISTVIEW*/}
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
            scrollEnabled={true}/>
        {/* END TO SETUP LISTVIEW*/}
        </Content>
      </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
    flexDirection: 'column'
  },
  row_main:{
    flexDirection: 'row',
    width: (Dimensions.get('window').width) * 0.96,
    alignSelf: 'center',
    marginTop: (Dimensions.get('window').height) * 0.015,
    marginBottom: (Dimensions.get('window').height) * 0.015,
    height: (Dimensions.get('window').height) * 0.18,
    backgroundColor: 'white',
    alignItems:'center'
  },
  cardbg_image: {
    width: (Dimensions.get('window').width) * 0.30,
    ...Platform.select({
        ios: {
          height: (Dimensions.get('window').height) * 0.16,
        },
        android: {
          height: (Dimensions.get('window').height) * 0.17,
        }
    }),
    resizeMode: 'cover'
  },
  carddetail_bg: {
    height: (Dimensions.get('window').height) * 0.18,
    marginLeft: (Dimensions.get('window').height) * 0.03,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  title_txt:{
    width: (Dimensions.get('window').width) * 0.60,
    color: "#363636",
    fontFamily: font_type.FontBold,
    fontSize: moderateScale(16),
    paddingRight: (Dimensions.get('window').height) * 0.015,
    textAlign: 'left'
  },
  description_txt: {
    width: (Dimensions.get('window').width) * 0.60,
    color: "#6f6f6f",
    fontFamily: font_type.FontLight,
    fontSize: moderateScale(13),
    paddingRight: (Dimensions.get('window').height) * 0.015,
    textAlign: 'left'
  },
  likeComment_bg: {
    flexDirection: 'row',
    marginTop: (Dimensions.get('window').height) * 0.01
  },
  countimg_bg: {
    flexDirection: 'row',
    width: (Dimensions.get('window').width) * 0.15,
    alignItems: 'center'
  },
  comment_img: {
    width: (Dimensions.get('window').width * 0.04),
    height: (Dimensions.get('window').width * 0.04),
    resizeMode: 'contain'
  },
  likecommentcount_txt: {
    marginLeft: (Dimensions.get('window').width)* 0.01,
    color: "#6f6f6f",
    fontSize: moderateScale(12),
    fontFamily: font_type.FontLight,
  },
  list_divider: {
    backgroundColor: '#d7d7d7',
    height: 1,
    width:(Dimensions.get('window').width) * 0.98,
    alignSelf: "flex-end",
    marginTop: (Dimensions.get('window').height) * 0.002
  }
});
// END TO MAKE STYLE
