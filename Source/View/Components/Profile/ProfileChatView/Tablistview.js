
import React, { Component } from 'react';
import { StyleSheet,Text,Image,Platform,Dimensions,ListView} from 'react-native';
import {Container} from 'native-base';
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";

//GUIDELINE SIZES ARE BASED ON STANDARD ~5" SCREEN

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

import { View} from 'react-native-animatable';

export default class TablistView extends Component {

  constructor(props) {
 		super(props);

    // BEGIN TO SETUP ALL DATA IN ARRAY
    const dataObjects = [
      {
        id: 1,
        cardBgImage: GlobalInclude.Image2,
        imageTitle: 'Lorem Ipsum',
      },
      {
        id: 2,
        cardBgImage: GlobalInclude.Image3,
        imageTitle: 'Lorem Ipsum',
      },
      {
        id: 3,
        cardBgImage: GlobalInclude.Image4,
        imageTitle: 'Lorem Ipsum',
      },
      {
        id: 4,
        cardBgImage: GlobalInclude.Image5,
        imageTitle: 'Lorem Ipsum',
      },
    ]
    // END TO SETUP ALL DATA IN ARRAY

    // BEGIN TO SETUP LISTVIEW ACCORDING TO OUR DATA
    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged})
    // END TO SETUP LISTVIEW ACCORDING TO OUR DATA

    // BEGIN TO SETUP STATE
 		this.state = {
			isLoading: true,
      dataSource: ds.cloneWithRows(dataObjects),
    };
    // END TO SETUP STATE
 	}

  // BEGIN TO DISPLAY ROW DATA
  _renderRow(rowData) {
    return(
      <View style={styles.row_main}>
        <Image style={styles.card_image} source={rowData.cardBgImage}/>
        <Text style={styles.image_text}>{rowData.imageTitle}</Text>
      </View>
    )
  }
  // END TO DISPLAY ROW DATA

  render(){

    return(
      <Container style={styles.main}>
        {/* BEGIN TO DISPLAY LISTVIEW */}
        <ListView
           horizontal={true}
           contentContainerStyle={styles.list_content}
           dataSource={this.state.dataSource}
           renderRow={this._renderRow.bind(this)}
           enableEmptySections
           showsVerticalScrollIndicator={false}
           pageSize={4}/>
        {/* END TO DISPLAY LISTVIEW */}
      </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  main: {
    width: Dimensions.get('window').width,
  },
  list_content: {
    marginHorizontal:(Dimensions.get('window').width * 0.015),
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems:'flex-start',
    marginTop:10
  },
  row_main:{
    marginHorizontal:(Dimensions.get('window').width * 0.015),
  },
  card_image: {
    height:(Dimensions.get('window').height*0.27),
    width:(Dimensions.get('window').height*0.21),
    ...Platform.select({
  		ios: {
        backgroundColor: 'gray',
  		},
  	}),
    borderRadius: 3
  },
  image_text: {
    margin:(Dimensions.get('window').height*0.012),
    color: 'white',
    fontSize: moderateScale(15),
    fontFamily: font_type.FontLight,
    position: 'absolute',
  },
});
// END TO MAKE STYLE
