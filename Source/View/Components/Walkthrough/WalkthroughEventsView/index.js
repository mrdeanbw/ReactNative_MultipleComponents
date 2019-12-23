import React, { Component } from "react";
import {Text,View,Image,StatusBar,Platform,ImageBackground,Dimensions,TouchableOpacity,ListView,I18nManager,StyleSheet} from "react-native";
import {Container,Button,Right,Item,Input,Header,Left,Body,Title,Content,CheckBox} from "native-base";
import Swiper from "react-native-swiper";
import FontAwesome from "react-native-vector-icons/FontAwesome";
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

export default class WalkthroughEvents extends Component {
  constructor(props) {
    super(props);
    const dataObjects = [
      {
        id: 1,
        image:GlobalInclude.Image1,
        title: "Lorem ipsum"
      },
      {
        id: 2,
        image:GlobalInclude.Image9,
        title: "Lorem ipsum"
      },
      {
        id: 3,
        image:GlobalInclude.Image2,
        title: "Lorem ipsum"
      },
      {
        id: 4,
        image:GlobalInclude.Image3,
        title: "Lorem ipsum"
      },
      {
        id: 5,
        image:GlobalInclude.Image4,
        title: "Lorem ipsum"
      },
      {
        id: 6,
        image:GlobalInclude.Image5,
        title: "Lorem ipsum"
      },
      {
        id: 7,
        image:GlobalInclude.Image6,
        title: "Lorem ipsum"
      },
      {
        id: 8,
        image:GlobalInclude.Image7,
        title: "Lorem ipsum"
      },
      {
        id: 9,
        image:GlobalInclude.Image8,
        title: "Lorem ipsum"
      }
    ];
    const rowHasChanged = (r1, r2) => r1 !== r2;
    const ds = new ListView.DataSource({ rowHasChanged });

    this.state = {
      isLoading: true,
      dataSource: ds.cloneWithRows(dataObjects),
      selectedLots: []
    };
  }

  //BEGIN TO SETUP CHECKBOX PRESS
  onCheckBoxPress(id) {
    let tmp = this.state.selectedLots;

    if (tmp.includes(id)) {
      tmp.splice(tmp.indexOf(id), 1);
    } else {
      tmp.push(id);
    }

    this.setState({
      selectedLots: tmp
    });
  }
  //END TO SETUP CHECKBOX PRESS

  //BEGIN TO SETUP RENDERROW PRESS
  _renderRow(rowData) {
    return (
      <View>
        {rowData.id < 5 ? (
          <TouchableOpacity style={styles.data_style} onPress={() => this.onCheckBoxPress(rowData.id)}>
            <Image source={rowData.image } style={styles.data_image} />
          {/* BEGIN TO SETUP CHECKBOX VIEW */}
            <View style={styles.ch_box_bg}>
              <CheckBox
                checked={
                  this.state.selectedLots.includes(rowData.id) ? true : false
                }
                onPress={() => this.onCheckBoxPress(rowData.id)}
                color={
                  this.state.selectedLots.includes(rowData.id)
                    ? "#ff6347"
                    : "transparent"
                }
                style={styles.ch_box}/>
            </View>
          {/* END TO SETUP CHECKBOX VIEW */}

          {/* BEGIN TO SETUP TITLE VIEW */}
            <View style={styles.img_title_bg}>
              <Text style={styles.data_text}>{rowData.title}</Text>
            </View>
          {/* END TO SETUP TITLE VIEW */}
          </TouchableOpacity>
        ) : null}
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
      <Container style={styles.container}>
      {/* BEGIN TO SETUP HEADER VIEW */}
        <Header style={styles.header}>
        {/* BEGIN TO SETUP LEFT VIEW */}
          <Left style={styles.left}>
            <TouchableOpacity style={styles.back_arrow} onPress={() => this.props.navigation.goBack()}>
              <FontAwesome
                name={I18nManager.isRTL ? "angle-right" : "angle-left"}
                size={30}
                color="white"/>
            </TouchableOpacity>
            </Left>
        {/* END TO SETUP LEFT VIEW */}
          <Body style={styles.body} />
          <Right style={styles.right} />
        </Header>
      {/* END TO SETUP HEADER VIEW */}
        <View style={styles.slidesec}>
        {/* BEGIN TO SETUP HEADER VIEW */}
          <Text style={styles.headertext}>
            What kind of events are you interested in?
          </Text>
        {/* END TO SETUP HEADER VIEW */}

        {/* BEGIN TO SETUP DESCRIPTION VIEW */}
          <Text style={styles.desctext}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor.
          </Text>
        {/* END TO SETUP DESCRIPTION VIEW */}

        {/* BEGIN TO SETUP LIST VIEW */}
          <View style={styles.list_bg}>
            <ListView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={styles.list_item}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow.bind(this)}
              enableEmptySections
              indicatorStyle={"white"}
              scrollEnabled={true}/>
            </View>
        {/* END TO SETUP LIST VIEW */}
        </View>

      {/* BEGIN TO SETUP CONTINUE BUTTON VIEW */}
        <View style={styles.btnsec}>
          <Button
            rounded
            onPress={() => alert("Continue Button Click")}
            style={styles.continue_bg}>
            <Text style={styles.continue_txt}>Continue</Text>
          </Button>
        </View>
      {/* END TO SETUP CONTINUE BUTTON VIEW */}
      </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
	container: {
		backgroundColor: '#ff6347',
		height: Dimensions.get("window").height,
		width: Dimensions.get("window").width
	},
	back_arrow:{
		width: 30,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	header: {
		backgroundColor: '#ff6347',
		height: Dimensions.get("window").height * 0.1,
		borderBottomWidth: 0,
		paddingTop: (Dimensions.get("window").height * 0.05),
		elevation: 0,
		paddingLeft: (Dimensions.get("window").width * 0.05),
		paddingRight: (Dimensions.get("window").width * 0.05),
	},
  left: {
		flex: 0.5
	},
  body: {
		flex: 3,
		alignSelf: 'center'
	},
  right: {
		flex: 0.5
	},
  slidesec:{
		height: (Dimensions.get("window").height*0.75),
		paddingLeft: (Dimensions.get("window").width * 0.05),
		paddingRight: (Dimensions.get("window").width * 0.05),
	},
  btnsec:{
		height: (Dimensions.get("window").height*0.15),
		borderTopWidth: 0,
		bottom: 0,
	},
  headertext: {
		fontFamily: font_type.FontLight,
		backgroundColor:'rgba(0,0,0,0)',
		textAlign:'center',
		alignSelf:'center',
		fontSize:moderateScale(23),
		width :(Dimensions.get("window").width) * .85,
		color:'white',
		marginTop: (Dimensions.get("window").height * 0.02),
	},
  desctext: {
		fontFamily: font_type.FontLight,
		backgroundColor:'rgba(0,0,0,0)',
		textAlign:'center',
		alignSelf:'center',
		fontSize:moderateScale(12),
		width :(Dimensions.get("window").width) * 0.75,
		color:'white',
		marginTop:(Dimensions.get("window").height * 0.03)
	},
	data_style:{
		backgroundColor: 'white',
		borderRadius: 4,
		height: (Dimensions.get("window").height * 0.325),
		width: (Dimensions.get("window").width * 0.36),
		margin: (Dimensions.get("window").width * 0.015),
		elevation: 5,
		shadowColor: 'black',
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			height: 5,
			width: 5
		},
		alignItems: 'center',
	},
  data_image:{
		height: (Dimensions.get("window").height * 0.25),
		width: (Dimensions.get("window").width * 0.36),
		borderRadius: 4,
		resizeMode: 'cover'
	},
  data_text:{
		fontFamily: font_type.FontBold,
		fontSize:moderateScale(15),
		color: '#6f6f6f',
	},
  continue_bg: {
		backgroundColor:'#BD26FF',
		width:(Dimensions.get("window").width *0.5),
		...Platform.select({
        ios: {
          height: (Dimensions.get("window").height *0.065),
        },
        android: {
          height: (Dimensions.get("window").height *0.068),
        }
    }),
		alignSelf: 'center',
		justifyContent: 'center'
	},
  continue_txt: {
		fontFamily: font_type.FontBold,
		fontSize:moderateScale(18),
		color: 'white'
	},
  img_title_bg: {
		height: (Dimensions.get("window").height * 0.08),
		width: (Dimensions.get("window").width * 0.36),
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
		position: 'absolute',
		bottom:0,
    borderBottomLeftRadius: 4,
		borderBottomRightRadius: 4
	},
  ch_box_bg: {
		width: (Dimensions.get("window").width * 0.25),
		alignItems: 'flex-end',
		position: 'absolute',
		marginTop: (Dimensions.get("window").height * 0.01)
	},
  ch_box: {
		height: 18,
		width: 18,
		borderRadius: 9,
	},
  list_item: {
		height:(Dimensions.get("window").height*0.43)
	},
  list_bg: {
		marginVertical: (Dimensions.get("window").height * 0.07)
	}
});
// END TO MAKE STYLE
