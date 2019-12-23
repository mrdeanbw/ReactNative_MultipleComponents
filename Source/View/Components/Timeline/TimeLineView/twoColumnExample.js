import React, { Component } from 'react';
import {StyleSheet,Text,Dimensions,Image,Alert,Platform,I18nManager,TouchableOpacity,StatusBar,View} from 'react-native';
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
export default class TwoColumnExample extends Component {


  constructor(){
    super()

    // BEGIN TO MAKE STATE
    this.state = {selected: null,success:0}
    // END TO MAKE STATE

    this.onEventPress = this.onEventPress.bind(this)//ONEVENTPRESS METHOD BIND
    this.renderSelected = this.renderSelected.bind(this)//RENDERSELECTED METHOD BIND

    //BEGIN TIMELINE DATA
    this.data = [
      {
        time: '08:00',
        title: 'Event 1',
        description: 'Praesent eu cursus nisi. Sed lobortis tortor ligula. Nam aliquam, ex nec malesuada accumsan, nulla augue viverra enim, ut posuere nisi urna ut nibh.',
        lineColor:'#009688',
        icon: require('../TimeLineIcon/icon1.png'),
        imageUrl: 'https://www.gstatic.com/webp/gallery/1.jpg'
      },
      {
        time: '09:00',
        title: 'Event 2',
        description: 'Nullam scelerisque bibendum ante at maximus.',
        icon: require('../TimeLineIcon/icon2.png'),
        imageUrl: 'https://www.gstatic.com/webp/gallery/2.jpg'
      },
      {
        time: '10:00',
        title: 'Event 3',
        icon: require('../TimeLineIcon/icon3.png'),
      },
      {
        time: '11:00',
        title: 'Event 4',
        description: 'Etiam congue fringilla posuere. Quisque rutrum lorem non mi hendrerit, in tincidunt turpis aliquet. ',
        lineColor:'#009688',
        icon: require('../TimeLineIcon/icon4.png'),
        imageUrl: 'https://www.gstatic.com/webp/gallery/3.jpg'
      },
      {
        time: '12:30',
        title: 'Event 5',
        description: 'Nam aliquet odio et nunc placerat, quis feugiat ante gravida. ',
        icon: require('../TimeLineIcon/icon5.png'),
        imageUrl: 'https://www.gstatic.com/webp/gallery/4.jpg'
      }
    ]
    //END TIMELINE DATA
  }

  //BEGIN EVENTPRESS METHOD
  onEventPress(data){
    this.setState({selected: data})
  }
  //END EVENTPRESS METHOD

  //BEGIN EVENT SELECTED METHOD
  renderSelected(){
      if(this.state.selected)
        alert(`Selected event: ${this.state.selected.title} at ${this.state.selected.time}`)
      if(this.state.selected)
        return <Text style={{marginTop:10}}>Selected event: {this.state.selected.title} at {this.state.selected.time}</Text>
  }
  //END EVENT SELECTED METHOD

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





        {/* BEGIN TIMELINE SELECT VIEW */}
        {this.renderSelected()}
        {/* END TIMELINE SELECT VIEW */}

        {/* BEGIN TIMELINE VIEW */}
        {this.state.success == 1 ?
            <Timeline
              style={styles.list}
              data={this.data}
              circleSize={20}
              circleColor='rgba(0,0,0,0)'
              lineColor='rgb(45,156,219)'
              timeContainerStyle={{minWidth:52}}
              timeStyle={{textAlign: 'center', backgroundColor:'#ff6347', color:'white', padding:5, borderRadius:13}}
              descriptionStyle={{color:'gray'}}
              options={{
                style:{padding:5}
              }}
              innerCircle={'icon'}
              onEventPress={this.onEventPress}
              separator={false}
              detailContainerStyle={{marginBottom: 20, paddingLeft: 5, paddingRight: 5, backgroundColor: "#BBDAFF", borderRadius: 10}}
              columnFormat='two-column'
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
