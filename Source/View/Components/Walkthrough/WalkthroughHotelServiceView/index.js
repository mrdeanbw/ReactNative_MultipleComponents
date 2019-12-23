import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform,StyleSheet, ImageBackground,Dimensions,TouchableOpacity, ListView,BackHandler, I18nManager} from 'react-native';
import { Container, Icon, Right, Header, Left, Body, CheckBox } from 'native-base';
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

export default class WalkthroughHotelService extends Component {

  constructor(props) {
 		super(props);
    const dataObjects = [
			{id: 1, title: 'Lorem ipsum'},
			{id: 2, title: 'Lorem ipsum'},
			{id: 3, title: 'Lorem ipsum'},
			{id: 4, title: 'Lorem ipsum'},
			{id: 5, title: 'Lorem ipsum'},
      {id: 6, title: 'Lorem ipsum'},
			{id: 7, title: 'Lorem ipsum'},
			{id: 8, title: 'Lorem ipsum'},
			{id: 9, title: 'Lorem ipsum'},
    ]
    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged})

 		this.state = {
			isLoading: true,
      dataSource: ds.cloneWithRows(dataObjects),
    	selectedLots: [],
    };
 	}


  //BEGIN TO ONCHECKBOX PRESS
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
  //END TO ONCHECKBOX PRESS

  //BEGIN TO SETUP RENDERROW
  _renderRow(rowData) {
    return(
      <View style={styles.row}>
      {
        (rowData.id<6) ?
        <TouchableOpacity style={styles.dataStyle} onPress={()=>this.onCheckBoxPress(rowData.id)} >
          <View style={this.state.selectedLots.includes(rowData.id) == true ? [styles.list_style,{backgroundColor: '#292e4b'}] : styles.list_style}>
          {/* BEGIN TO SETUP TITLE VIEW */}
            <Text style={styles.desctext}>
            {rowData.title}
            </Text>
          {/* END TO SETUP TITLE VIEW */}

          {/* BEGIN TO SETUP CHECKBOX VIEW */}
            <View style={styles.ch_box_bg}>
              <CheckBox
                checked={this.state.selectedLots.includes(rowData.id)? true : false}
                onPress={()=>this.onCheckBoxPress(rowData.id)}
                color={this.state.selectedLots.includes(rowData.id)? '#ff6347' : 'transparent'}
                style={styles.ch_box}/>
            </View>
          {/* END TO SETUP CHECKBOX VIEW */}
          </View>
        </TouchableOpacity>
        :
        null
      }
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
     <Container style={{backgroundColor: '#ff6347'}}>
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

       <View style={styles.slidesec}>
        {/* BEGIN TO SETUP HEADERTEXT VIEW */}
         <View style={styles.header_style}>
           <Text style={styles.headertext}>
             Which hotel styles do you prefer?
           </Text>
         </View>
        {/* END TO SETUP HEADERTEXT VIEW */}

        {/* BEGIN TO SETUP LIST VIEW */}
         <View style={styles.content_style}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this._renderRow.bind(this)}
              enableEmptySections
              scrollEnabled={true}/>
          </View>
          {/* END TO SETUP LIST VIEW */}

       </View>
       {/* BEGIN TO SETUP NEXT BUTTON VIEW */}
         <View style={styles.btnsec}>
           <TouchableOpacity style={styles.btn_style} onPress={()=>alert("Next Button Click")}>
             <Text style={styles.button_text}>Next</Text>
           </TouchableOpacity>
         </View>
        {/* END TO SETUP NEXT BUTTON VIEW */}
    </Container>

    );
  }
}
// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
	header: {
		backgroundColor: 'rgba(0,0,0,0)',
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
		height: (Dimensions.get("window").height*0.78),
		position: 'relative',
	},
  header_style: {
		marginTop: (Dimensions.get("window").height * 0.03),
		alignItems: 'center'
	},
  content_style: {
		marginTop: (Dimensions.get("window").height * 0.06),
		alignItems: 'center'
	},
	list_style: {
		width: (Dimensions.get("window").width * 0.88),
		height: (Dimensions.get("window").width * 0.15),
		borderRadius: 5,
		borderColor: '#23284470',
		borderWidth: 1.5,
		marginTop:(Dimensions.get("window").height * 0.02),
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
	},
  headertext: {
		fontFamily: font_type.FontBold,
		backgroundColor:'rgba(0,0,0,0)',
		textAlign:'center',
		alignSelf:'center',
		fontSize:moderateScale(22),
		width: (Dimensions.get("window").width * 0.7),
		color:'white',
	},
	desctext: {
		fontFamily: font_type.FontLight,
		backgroundColor:'rgba(0,0,0,0)',
		textAlign:'center',
		alignSelf:'center',
		fontSize:moderateScale(18),
		color:'white',
	},
	button_text: {
		fontFamily: font_type.FontBold,
		fontSize:moderateScale(18),
		color:'white',
	},
  btnsec:{
		height: (Dimensions.get("window").height*0.12),
		width: (Dimensions.get("window").width*0.88),
		borderWidth: 0,
		bottom: 0,
		position: 'absolute',
		alignItems: 'center',
		alignSelf: 'center',
	},
  btn_style: {
		height: (Dimensions.get("window").height*0.064),
		width: (Dimensions.get("window").width*0.4),
		backgroundColor: '#BD26FF',
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
  ch_box_bg: {
		width: (Dimensions.get("window").width * 0.75),
		alignItems: 'flex-end',
		position: 'absolute',
	},
  ch_box: {
		height: 18,
		width: 18,
		borderRadius: 9
	}
});
// END TO MAKE STYLE
