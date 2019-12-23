import React, { Component } from 'react';
import {StyleSheet,Text,SafeAreaView,TouchableOpacity,Dimensions,I18nManager,Platform,View,StatusBar} from 'react-native';
import {Container,Icon,Right,Header,Left,Body} from 'native-base';
import Timeline from 'react-native-timeline-listview'
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
export default class Example extends Component {


  constructor(){
    super()
    // BEGIN TO MAKE STATE
    this.state = {
        success:0
    };
    // END TO MAKE STATE

    //BEGIN TIMELINE DATA
    this.data = [
      {time: '05:10', title: 'Event 1', description: 'Event 1 Description'},
      {time: '06:30', title: 'Event 2', description: 'Event 2 Description'},
      {time: '07:20', title: 'Event 3', description: 'Event 3 Description'},
      {time: '10:50', title: 'Event 4', description: 'Event 4 Description'},
      {time: '11:40', title: 'Event 5', description: 'Event 5 Description'}
    ]
    //END TIMELINE DATA
  }

  componentWillMount(){
    // BEGIN TO SET TIMEOUT TO LOAD TIMELINE
    setTimeout(() => {
      this.setState({
        success:1
      })
    },500)
    // END TO SET TIMEOUT TO LOAD TIMELINE

    // BEGIN METHOD FOR SET HEADER TITLE
          this.props.navigation.setParams({
                header_name:this.props.navigation.getParam('menu_title','')
          });
    // END METHOD FOR SET HEADER TITLE
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


      <View style={styles.container}>


  					{/* BEGIN TO SETUP HEADER VIEW */}
  					<Header style={styles.header}>

                {/* BEGIN TO SETUP HEADER LEFT VIEW */}
  							<Left style={styles.left}>
  								<TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
  							 		<FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="#ffffff"/>
  								</TouchableOpacity>
  							</Left>
                {/* END TO SETUP HEADER LEFT VIEW */}

                {/* BEGIN TO SETUP HEADER BODY VIEW */}
  							<Body style={styles.body}>
  								<Text style={styles.text_title}>{this.props.navigation.getParam('menu_title')}</Text>
  							</Body>
                {/* END TO SETUP HEADER BODY VIEW */}

                {/* BEGIN TO SETUP HEADER RIGHT VIEW */}
  							<Right style={styles.right}/>
  							{/* END TO SETUP HEADER RIGHT VIEW */}
            </Header>

        {/* BEGIN TIMELINE VIEW */}
        {this.state.success == 1 ?
                <Timeline
                  style={styles.list}
                  data={this.data}
                />
        : null }
        {/* END TIMELINE VIEW */}

      </View>
    );
  }
}

// BEGIN TO SETUP STYLE
const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: 'white',
    flexDirection: "column"
  },
  list: {
    flex: 1,
    marginTop:10,
    backgroundColor:'white'
  },
  back_arrow: {
    width: 30,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  header: {
    backgroundColor: "#ff6347",
    height: Dimensions.get("window").height * 0.1,
    borderBottomWidth: 0,
    paddingTop: Dimensions.get("window").height * 0.03,
    elevation: 0,
    paddingLeft: Dimensions.get("window").width * 0.05,
    paddingRight: Dimensions.get("window").width * 0.05
  },
  left: {
    flex: 0.5,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  body: {
    flex: 3,
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0)'
  },
  text_title: {
    color: "white",
    fontSize: moderateScale(17),
    marginTop: Dimensions.get("window").height * 0.001,
    alignSelf: "center",
    fontFamily: font_type.FontBold
  },
  right: {
    flex: 0.5
  },
});
// END TO SETUP STYLE
