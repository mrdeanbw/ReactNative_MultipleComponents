import React, { Component } from 'react';
import { Dimensions, StyleSheet,Image,View,TouchableOpacity} from 'react-native';
import { Container,Text, Content, Left, Body,Icon,Right} from 'native-base';
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

export default class ControlPanel extends Component {

//BEGIN TO SETUP HANDLEPRESS
_handlePress(text){
  alert(text);
}
//END TO SETUP HANDLEPRESS

  render() {
    return (
      <Container style={styles.container}>
        <Content>
        {/* BEGIN TO SETUP RIGHT VIEW */}
         <Right style={styles.rights}>
           <TouchableOpacity onPress={this.props.closeDrawer}>
             <Icon name='ios-close-circle-outline'  style={{color:'white'}}/>
           </TouchableOpacity>
         </Right>
        {/* END TO SETUP RIGHT VIEW */}
         <Image style={styles.image_logo_mountify} source={GlobalInclude.Image_1}/>
         <View style={styles.mainview}>
        {/* BEGIN TO SETUP HOME VIEW */}
           <TouchableOpacity onPress={() => this._handlePress('Home Button Click')} >
             <View style={styles.listrow}>
               <Text style={styles.rowtxt}>Home</Text>
             </View>
           </TouchableOpacity>
        {/* END TO SETUP HOME VIEW */}
           <View style={styles.linebg}></View>

        {/* BEGIN TO SETUP ARTICLES VIEW */}
           <TouchableOpacity onPress={() => this._handlePress('Articles Button Click')} >
             <View style={styles.listrow}>
               <Text style={styles.rowtxt}>Articles</Text>
             </View>
           </TouchableOpacity>
        {/* END TO SETUP ARTICLES VIEW */}
           <View style={styles.linebg}></View>

        {/* BEGIN TO SETUP MESSAGE VIEW */}
           <TouchableOpacity onPress={() => this._handlePress('Message Button Click')} >
             <View style={styles.listrow}>
               <Text style={styles.rowtxt}>Message</Text>
               <View style={styles.badgeview}>
                <Text style={styles.badgetext}>7</Text>
               </View>
             </View>
           </TouchableOpacity>
        {/* END TO SETUP MESSAGE VIEW */}
           <View style={styles.linebg}></View>
        {/* BEGIN TO SETUP ACTIVITY VIEW */}
           <TouchableOpacity onPress={() => this._handlePress('Activity Button Click')} >
             <View style={styles.listrow}>
               <Text style={styles.rowtxt}>Activity</Text>
             </View>
           </TouchableOpacity>
        {/* END TO SETUP ACTIVITY VIEW */}
           <View style={styles.linebg}></View>
        {/* BEGIN TO SETUP FAVOURITE VIEW */}
           <TouchableOpacity onPress={() => this._handlePress('Favourite Button Click')} >
             <View style={styles.listrow}>
               <Text style={styles.rowtxt}>Favourite</Text>
             </View>
           </TouchableOpacity>
        {/* END TO SETUP FAVOURITE VIEW */}
           <View style={styles.linebg}></View>

        {/* BEGIN TO SETUP FRIENDS VIEW */}
           <TouchableOpacity onPress={() => this._handlePress('Friends Button Click')} >
             <View style={styles.listrow}>
               <Text style={styles.rowtxt}>Friends</Text>
             </View>
           </TouchableOpacity>
        {/* END TO SETUP FRIENDS VIEW */}
           <View style={styles.linebg}></View>
        {/* BEGIN TO SETUP LOGOUT VIEW */}
           <TouchableOpacity onPress={() => this._handlePress('Logout Button Click')} >
             <View style={styles.listrow}>
               <Text style={styles.rowtxt}>Logout</Text>
             </View>
           </TouchableOpacity>
        {/* BEGIN TO SETUP LOGOUT VIEW */}
         </View>
        </Content>
      </Container>
    )
  }

}
// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  body: {
    flex: 3,
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  mainview:{
    marginTop: 25,
    alignItems: 'center',
  },
  badgetext:{
    color:'white',
    fontSize: moderateScale(13),
    backgroundColor: 'transparent'
  },
  badgeview:{
    backgroundColor: '#00bff3',
    marginLeft: 10,
    borderRadius: 10,
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  listrow:{
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginBottom: 11,
    marginTop: 11,
    alignItems: 'center',
    justifyContent: 'center'
  },
  linebg:{
    backgroundColor: 'rgba(61,61,61,0.9)',
    height:0.5,
    width: Dimensions.get("window").width*0.6
  },
  image_logo_mountify: {
    alignSelf: 'center',
    width: 100,
    height: 80,
    marginBottom: 20
  },
  rowtxt:{
    color:'white',
    fontSize: moderateScale(23),
    backgroundColor: 'transparent',
    marginLeft: 20,
    textAlign: 'center',
    fontFamily: font_type.FontLight
  },
  rights: {
    flex: 1,
		 backgroundColor: 'transparent',
     marginRight: 15,
     marginTop: 15,
     alignSelf: 'flex-end',
     justifyContent: 'flex-end'
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
// END TO MAKE STYLE
