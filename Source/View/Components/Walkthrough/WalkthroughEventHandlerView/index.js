import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform,Dimensions,TouchableOpacity,StyleSheet, ListView,BackHandler, I18nManager} from 'react-native';
import { Container, Button, Right, Header, Left, Body, CheckBox} from 'native-base';
import Swiper from 'react-native-swiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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

export default class WalkthroughEventHandler extends Component {

  constructor(props) {
 		super(props);
    const dataObjects = [
			{id: 1, image: require('./icon_music.png'), title: 'Music'},
			{id: 2, image: require('./icon_film.png'), title: 'Film'},
			{id: 3, image: require('./icon_book.png'), title: 'Book'},
			{id: 4, image: require('./icon_game.png'), title: 'Game'},
			{id: 5, image: require('./icon_food.png'), title: 'Food'},
			{id: 6, image:require('./icon_sport.png'), title: 'Sport'},
			{id: 7, image: require('./icon_fashion.png'), title: 'Fashion'},
			{id: 8, image:require('./icon_draw.png'), title: 'Draw'},
			{id: 9, image: require('./icon_travel.png'), title: 'Travel'},
    ]
    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged})

 		this.state = {
			isLoading: true,
      dataSource: ds.cloneWithRows(dataObjects),
    	selectedLots: [],
    };
 	}

  //BEGIN TO SETUP CHECKBOX PRESS
  onCheckBoxPress(id) {
    let tmp = this.state.selectedLots;

    if (tmp.includes(id)) {
      tmp.splice(tmp.indexOf(id), 1);
    }
    else {
      tmp.push(id);
    }

    this.setState({
      selectedLots: tmp
    });
  }
  //END TO SETUP CHECKBOX PRESS

  //BEGIN TO SETUP RENDERROW
  _renderRow(rowData) {
    return(
      <View style={styles.row}>
        <TouchableOpacity style={styles.data_style} onPress={()=>this.onCheckBoxPress(rowData.id)} >
        {/* BEGIN TO SETUP IMAGE VIEW */}
          <View style={styles.list_item_imgbg}>
            <Image source={rowData.image} style={styles.data_image}/>
          </View>
        {/* END TO SETUP IMAGE VIEW */}

        {/* BEGIN TO SETUP CHECKBOX VIEW */}
          <View style={styles.chbox_bg}>
            <CheckBox
              checked={this.state.selectedLots.includes(rowData.id)? true : false}
              onPress={()=>this.onCheckBoxPress(rowData.id)}
              color={this.state.selectedLots.includes(rowData.id)? '#BD26FF' : 'transparent'}
              style={styles.chbox}/>
          </View>
        {/* END TO SETUP CHECKBOX VIEW */}

        {/* BEGIN TO SETUP TITLE VIEW */}
          <View style={styles.list_item_titlebg}>
            <Text style={styles.data_text}>{rowData.title}</Text>
          </View>
        {/* END TO SETUP TITLE VIEW */}
        </TouchableOpacity>
      </View>
    );
  }
  //END TO SETUP RENDERROW

  render(){

    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW



    return(
     <Container style={{backgroundColor: '#BD26FF'}}>
     {/* BEGIN TO SETUP HEADER VIEW */}
       <Header style={styles.header}>
      {/* BEGIN TO SETUP LEFT VIEW */}
         <Left style={styles.left}>
           <TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
             <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="white"/>
           </TouchableOpacity>
         </Left>
       {/* END TO SETUP LEFT VIEW */}

       {/* BEGIN TO SETUP BODY VIEW */}
         <Body style={styles.body}>
         </Body>
       {/* END TO SETUP BODY VIEW */}
         <Right style={styles.right}/>
         </Header>
    {/* END TO SETUP HEADER VIEW */}

      {/* BEGIN TO SETUP LISTVIEW VIEW */}
       <View style={styles.slidesec}>
         <Text style={styles.headertext}>
            What kind of events are you interested in?
         </Text>
         <ListView
            style={{paddingBottom: 10, paddingRight: 5,marginVertical: 30}}
            contentContainerStyle={styles.list_content}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
            enableEmptySections
            pageSize={9}
            scrollEnabled={true}/>
       </View>
      {/* END TO SETUP LISTVIEW VIEW */}

       <View style={styles.btnsec}>
       {/* BEGIN TO SETUP BACKBUTTON VIEW */}
         <Button rounded onPress={()=> alert("Back Button Click")} style={styles.back_btn_style}>
           <Text style={styles.back_text}>Back</Text>
         </Button>
        {/* END TO SETUP BACKBUTTON VIEW */}

        {/* BEGIN TO SETUP PROFILEIMAGE VIEW */}
         <View style={styles.profile_main}>
            <Image source={require('./icon_eclipse.png')} style={styles.eclipse_style}/>
            <Image source={GlobalInclude.Image5} style={styles.profile_style}/>
         </View>
        {/* END TO SETUP PROFILEIMAGE VIEW */}

        {/* BEGIN TO SETUP NEXT VIEW */}
         <Button rounded onPress={()=> alert("Next Button Click")} style={styles.next_btn_style}>
           <Text style={styles.next_text}>Next</Text>
         </Button>
        {/* END TO SETUP NEXT VIEW */}
       </View>
    </Container>

    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  header: {
		backgroundColor: '#BD26FF',
		height: Dimensions.get("window").height * 0.1,
		borderBottomWidth: 0,
		paddingTop: (Dimensions.get("window").height * 0.05),
		elevation: 0,
		paddingLeft: (Dimensions.get("window").width * 0.05),
		paddingRight: (Dimensions.get("window").width * 0.05),
	},
	back_arrow:{
		width: 30,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
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
  	height: (Dimensions.get("window").height*0.73),
  	marginLeft: (Dimensions.get("window").width * 0.05),
  	marginRight: (Dimensions.get("window").width * 0.05),
  },
  btnsec:{
  	height: (Dimensions.get("window").height*0.17),
  	borderTopWidth: 0,
  	bottom: 0,
  	width: (Dimensions.get("window").width*0.88),
  	alignSelf: 'center',
  	flexDirection: 'row',
  	justifyContent: 'space-between',
  	alignItems: 'center',
  },
  slide: {
  	backgroundColor: 'gray',
  	height: (Dimensions.get("window").height*0.8),
  },
  headertext: {
  	fontFamily: font_type.FontLight,
  	backgroundColor:'transparent',
  	textAlign:'center',
  	alignSelf:'center',
  	fontSize:moderateScale(20),
  	width :(Dimensions.get("window").width) * .85,
  	color:'white',
  	marginTop: (Dimensions.get("window").height * 0.012)
  },
  data_style:{
  	backgroundColor: '#ff6347',
  	borderRadius: 3,
  	height: (Dimensions.get("window").height * 0.16),
  	width: (Dimensions.get("window").width * 0.27),
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
  	height: (Dimensions.get("window").width * 0.07),
  	width: (Dimensions.get("window").width * 0.06),
  	resizeMode: 'contain',
  },
  data_text:{
  	fontFamily: font_type.FontBold,
  	fontSize:moderateScale(17),
  	color: 'white',
  },
  list_content: {
  	justifyContent: 'space-around',
  	flexDirection: 'row',
  	flexWrap: 'wrap',
  },
  row: {
  	width: (Dimensions.get("window").width * 0.28),
  	justifyContent: 'center',
  	alignItems: 'center',
  	marginTop:(Dimensions.get("window").height * 0.013),
  },
  back_btn_style: {
  	backgroundColor:'#f2f2f2',
  	width:(Dimensions.get("window").width *0.28),
  	height: (Dimensions.get("window").height *0.055),
  	alignSelf: 'center',
  	justifyContent: 'center'
  },
  back_text: {
  	fontFamily: font_type.FontBold,
  	fontSize:moderateScale(18),
  	color: '#6f6f6f',
  },
  profile_main: {
  	width:(Dimensions.get("window").width * 0.28),
  	height: (Dimensions.get("window").height * 0.13),
  	alignItems: 'center',
  	justifyContent: 'center'
  },
  eclipse_style: {
  	width:(Dimensions.get("window").width * 0.23),
  	height: (Dimensions.get("window").width * 0.23),
  	alignSelf: 'center',
  	resizeMode: 'contain',
  },
  profile_style: {
  	width:(Dimensions.get("window").width * 0.19),
  	height: (Dimensions.get("window").width * 0.19),
  	alignSelf: 'center',
  	resizeMode: 'cover',
  	position: 'absolute',
  	borderRadius: (Dimensions.get("window").width * 0.095),
  	borderColor: 'white',
  	borderWidth: 1.5
  },
  next_btn_style: {
  	backgroundColor:'#ff6347',
  	width:(Dimensions.get("window").width *0.28),
  	height: (Dimensions.get("window").height *0.055),
  	alignSelf: 'center',
  	justifyContent: 'center'
  },
  next_text: {
  	fontFamily: font_type.FontBold,
  	fontSize:moderateScale(18),
  	color: 'white',
  },
  list_item_imgbg: {
  	height:(Dimensions.get("window").height * 0.08),
  	alignItems: 'flex-end',
  	justifyContent: 'flex-end',
  },
  chbox_bg: {
  	width: (Dimensions.get("window").width * 0.18),
  	alignItems: 'flex-end',
  	position: 'absolute',
  	marginTop: (Dimensions.get("window").width * 0.015),
  },
  chbox: {
  	height: 18,
  	width: 18,
  	borderRadius: 9,
  },
  list_item_titlebg: {
  	height: (Dimensions.get("window").height * 0.05),
  	alignItems: 'center',
  	justifyContent: 'center',
  	marginTop: (Dimensions.get("window").width * 0.012)
  }
});
// END TO MAKE STYLE
