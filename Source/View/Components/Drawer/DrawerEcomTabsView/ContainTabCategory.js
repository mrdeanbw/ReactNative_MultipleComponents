import React, { Component } from 'react';
import { Text, View, StatusBar, Platform,TouchableOpacity,BackHandler,StyleSheet,Dimensions } from 'react-native';
import { Container} from 'native-base';
const activeindicator= 0;

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

export default class ContainTabCategory extends Component {

  constructor(props) {
 		super(props);
 		this.state = {
      index: '',
      activeindicator: 0,
    };
 	}

  componentWillMount() {

	}

  render(){
    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW

    return(
       <Container style={styles.container}>
         {/* BEGIN TO SETUP CATEGORY VIEW */}
            <Text style={styles.container_txt}>Category</Text>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
            <Text style={styles.backtxt}>Go Back</Text>
            </TouchableOpacity>
          {/* BEGIN TO SETUP CATEGORY VIEW */}
      </Container>

    );
  }
}
// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  container: {
		backgroundColor: '#DCDCDC',
		justifyContent: 'center',
		alignItems: 'center'
	},
  container_txt: {
		color: "#ff6347",
		fontSize: moderateScale(18),
		fontFamily: font_type.FontBold,
		textAlign: 'center',
		marginTop:-(Dimensions.get("window").height * 0.1)
	},
  backtxt: {
		color: "#ff6347",
		fontSize: moderateScale(18),
		fontFamily: font_type.FontBold,
		textAlign: 'center',
    paddingTop:10
	},
});
// END TO MAKE STYLE
