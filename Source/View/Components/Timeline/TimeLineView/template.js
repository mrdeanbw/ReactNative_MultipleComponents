import React, { Component } from 'react';
import {StyleSheet,Text,StatusBar,Dimensions,TouchableOpacity,Platform,I18nManager,View} from 'react-native';
import Timeline from 'react-native-timeline-listview'
import {Container,Icon,Right,Header,Left,Body} from 'native-base';
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

export default class TemplateExample extends Component {


  constructor(){
    super()

    // BEGIN TO MAKE STATE
    this.state = {
        success:0
    };
    // END TO MAKE STATE

      //BEGIN TIMELINE DATA
          this.data = [
            {time: '08:00', title: 'Event 1', description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.', icon: require('../TimeLineIcon/icon1.png')},
            {time: '09:10', title: 'Event 2', description: 'Nulla facilisi. Aliquam rhoncus varius convallis.', icon: require('../TimeLineIcon/icon2.png')},
            {time: '10:00', title: 'Event 3', description: 'Quisque bibendum tortor eu augue rutrum, sit amet sodales eros sollicitudin. ', icon: require('../TimeLineIcon/icon3.png')},
            {time: '11:00', title: 'Event 4', description: 'Cras efficitur consequat consectetur.', icon: require('../TimeLineIcon/icon4.png')},
            {time: '12:30', title: 'Event 5', description: 'Etiam congue fringilla posuere. Quisque rutrum lorem non mi hendrerit, in tincidunt turpis aliquet. Nam aliquet odio et nunc placerat, quis feugiat ante gravida.', icon: require('../TimeLineIcon/icon5.png')}
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
          //separator={true}
          circleSize={20}
          circleColor='rgba(0,0,0,0)'
          //circleStyle={{borderWidth:1}}
          //dotColor='yellow'
          //lineWidth={2}
          //lineColor='rgb(45,156,219)'
          //timeTextStyle={{color:'green'}}
          //timeContainerStyle={{minWidth: 65}}
          //titleStyle={{color:'green'}}
          //descriptionStyle={{color:'red'}}
          innerCircle={'icon'}
          //iconStyle={{backgroundColor:'white'}}
          //separatorStyle={{backgroundColor: 'green'}}
          //scrollEnabled={false}
          options={{
          }}/>
      : null }
      {/* END TIMELINE VIEW */}

      </View>
    );
  }
}

// BEGIN TO SETUP STYLE
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    flexDirection: "column"
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

    list: {
      flex: 1,
      marginTop:20,
    }
});
// END TO SETUP STYLE
