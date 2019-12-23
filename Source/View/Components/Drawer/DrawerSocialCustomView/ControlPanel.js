import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image, I18nManager,StyleSheet,Dimensions,Platform } from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Left } from 'native-base';
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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

  constructor(props){
    super(props);
  }

  render() {

    return (
      <Container style={styles.menu_container}>
      {/* BEGIN TO SETUP HEADER VIEW */}
        <Header style={styles.menuheader_sec}>
        {/* BEGIN TO SETUP LEFT VIEW */}
          <Left style={styles.menulefts}>
            <TouchableOpacity onPress={this.props.closeDrawer}>
            {
              (I18nManager.isRTL)
              ?
                <Icon name='md-arrow-round-forward'  style={{color:'white'}} />
              :
                <Icon name='md-arrow-round-back'  style={{color:'white'}} />
            }
            </TouchableOpacity>
          </Left>
        {/* END TO SETUP LEFT VIEW */}
        </Header>
      {/* END TO SETUP HEADER VIEW */}
        <Content style={styles.menucontrol_panel}>
        {/* BEGIN TO SETUP IMAGE AND DETAIL VIEW */}
          <View style={styles.user_profiles}>
             <Image source={GlobalInclude.Image8} style={styles.user_image_style}/>
             <View style={styles.user_details_style}>
               <Text style={styles.user_details_text}>lorem ipsum</Text>
               <Text style={styles.user_details_text}>lorem ipsum</Text>
             </View>
          </View>
        {/* END TO SETUP IMAGE AND DETAIL VIEW */}

          <View style={styles.menumainview}>
          {/* BEGIN TO SETUP HOME VIEW */}
            <TouchableOpacity onPress={() => alert('Home Button Click')} >
              <View style={styles.listrow}>
                <Ionicons name="md-home" color="#ffffff" size={20} />
                <Text style={styles.rowtxt}>Home</Text>
              </View>
            </TouchableOpacity>
          {/* END TO SETUP HOME VIEW */}

          {/* BEGIN TO SETUP ARTICLES VIEW */}
            <TouchableOpacity onPress={() => alert('Articles Button Click')} >
              <View style={styles.listrow}>
                <MaterialCommunityIcons name="file" color="#ffffff" size={20} />
                <Text style={styles.rowtxt}>Articles</Text>
              </View>
            </TouchableOpacity>
          {/* END TO SETUP ARTICLES VIEW */}

          {/* BEGIN TO SETUP MESSAGE VIEW */}
            <TouchableOpacity onPress={() => alert('Message Button Click')} >
              <View style={styles.listrow}>
                <SimpleLineIcons name="bubbles" color="#ffffff" size={20} />
                <Text style={styles.rowtxt}>Message</Text>
                <View style={styles.noti_count_sec}>
                 <Text style={styles.noti_count}>20</Text>
                </View>
              </View>
            </TouchableOpacity>
          {/* END TO SETUP MESSAGE VIEW */}

          {/* BEGIN TO SETUP ACTIVITY VIEW */}
            <TouchableOpacity onPress={() => alert('Activity Button Click')}>
              <View style={styles.listrow}>
                <SimpleLineIcons name="bell" color='#ffffff' size={20} />
                <Text style={styles.rowtxt}>Activity</Text>
              </View>
            </TouchableOpacity>
          {/* END TO SETUP ACTIVITY VIEW */}

          {/* BEGIN TO SETUP FAVOURITE VIEW */}
            <TouchableOpacity onPress={() => alert('Favourite Button Click')}>
              <View style={styles.listrow}>
                <FontAwesome name="star" color='#ffffff' size={20} />
                <Text style={styles.rowtxt}>Favourite</Text>
              </View>
            </TouchableOpacity>
          {/* END TO SETUP FAVOURITE VIEW */}

          {/* BEGIN TO SETUP FRIENDS VIEW */}
            <TouchableOpacity onPress={() => alert('Friends Button Click')} >
              <View style={styles.listrow}>
                <SimpleLineIcons name="people" color='#ffffff' size={20} />
                <Text style={styles.rowtxt}>Friends</Text>
                <View style={styles.noti_count_sec}>
                 <Text style={styles.noti_count}>50</Text>
                </View>
              </View>
            </TouchableOpacity>
          {/* END TO SETUP FRIENDS VIEW */}

          {/* BEGIN TO SETUP LOGOUT VIEW */}
            <TouchableOpacity onPress={() => alert('Logout Button Click')} >
              <View style={styles.listrow}>
                <SimpleLineIcons name="logout" color='#ffffff' size={20} />
                <Text style={styles.rowtxt}>Logout</Text>
              </View>
            </TouchableOpacity>
          {/* END TO SETUP LOGOUT VIEW */}
          </View>
          </Content>
      </Container>
    )
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  menu_container:{
    backgroundColor: '#222222',
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  menucontrol_panel: {
    paddingTop: moderateScale(20),
    paddingBottom: moderateScale(20),
    paddingLeft: moderateScale(20),
  },
  user_profiles:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  user_image_style:{
    width: (Dimensions.get("window").width) * 0.20,
    height: (Dimensions.get("window").width) * 0.20,
    borderRadius: (Dimensions.get("window").width)* 0.10,
    borderWidth: 2,
    borderColor: 'white',
  },
  user_details_style:{
    backgroundColor: 'transparent',
    alignItems: 'flex-start',
    height: 50,
    justifyContent: 'center',
    marginLeft: 10
  },
  user_details_text:{
    fontSize: moderateScale(15),
    color: 'white',
  },
  menumainview:{
    marginLeft: moderateScale(25),
    marginTop: moderateScale(25),
  },
  listrow:{
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginBottom: 15,
  },
  rowtxt:{
    color: 'white',
    fontSize: moderateScale(18),
    backgroundColor: 'transparent',
    marginLeft: moderateScale(15),
    textAlign: 'center',
    fontFamily: font_type.FontLightsfuiDisplayLight,
  },
  noti_count_sec:{
    backgroundColor: '#ff6347',
    marginLeft: 10,
    marginTop: 3,
    borderRadius: 10,
    height: 17,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  noti_count:{
    color: 'white',
    fontSize: moderateScale(13),
  },
  menulefts: {
    flex: 1,
		backgroundColor: 'transparent',
  },
  menuheader_sec:{
    backgroundColor: '#ff6347',
    height: 56,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
				marginTop:10
			}
    }),
		elevation: 0
  },
});
// END TO MAKE STYLE
