import React, { Component } from 'react';
import {StyleSheet,Text,StatusBar,SafeAreaView,RefreshControl,ActivityIndicator,Dimensions,Platform,TouchableOpacity,I18nManager,View} from 'react-native';
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

export default class RefreshLoadMoreExample extends Component {




  constructor(){
    super()
    this.onEndReached = this.onEndReached.bind(this)//ONENDRECED METHOD BIND
    this.renderFooter = this.renderFooter.bind(this)//RENDERFOOTER METHOD BIND
    this.onRefresh = this.onRefresh.bind(this)//ONREFRESH METHOD BIND

    //BEGIN TIMELINE DATA
    this.data = [
      {time: '07:00', title: 'Event 1', description: 'Nullam scelerisque bibendum ante at maximus'},
      {time: '08:15', title: 'Event 2', description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas'},
      {time: '09:00', title: 'Event 3', icon: require('../TimeLineIcon/icon1.png')},
      {time: '10:30', title: 'Event 4', description: 'TLorem ipsum dolor sit amet, consectetur adipiscing elit '},
      {time: '11:20', title: 'Event 5', description: 'Quisque in felis nisi. Vivamus iaculis tortor quis tempus rhoncus'},
    ]
    //END TIMELINE DATA

    this.state = {
      isRefreshing: false,
      waiting: false,
      data: this.data,
      success:0
    }
  }

  //BEGIN ONREFRESH METHOD
  onRefresh(){
    this.setState({isRefreshing: true});
    //refresh to initial data
    setTimeout(() => {
      //refresh to initial data
      this.setState({
        data: this.data,
        isRefreshing: false
      });
    }, 2000);
  }
  //END ONREFRESH METHOD

  //BEGIN ONENDREACHED METHOD
  onEndReached() {
    if (!this.state.waiting) {
        this.setState({waiting: true});

        //fetch and concat data
        setTimeout(() => {
          //refresh to initial data
          var data = this.state.data.concat(
            [
              {time: '10:00', title: 'Load more data', description: 'append event at bottom of timeline'},
              {time: '11:00', title: 'Load more data', description: 'append event at bottom of timeline'},
              {time: '12:00', title: 'Load more data', description: 'append event at bottom of timeline'},
              {time: '13:00', title: 'Load more data', description: 'append event at bottom of timeline'},
              {time: '14:00', title: 'Load more data', description: 'append event at bottom of timeline'}
            ]
            )
          this.setState({
            waiting: false,
            data: data,
          });
        }, 2000);
    }
  }
  //END ONENDREACHED METHOD

  //BEGIN RENDERFOOTER METHOD
  renderFooter() {
      if (this.state.waiting) {
          return <ActivityIndicator />;
      } else {
          return <Text>~</Text>;
      }
    }
  //END RENDERFOOTER METHOD

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
              data={this.state.data}
              circleSize={20}
              circleColor='rgb(45,156,219)'
              lineColor='rgb(45,156,219)'
              timeContainerStyle={{minWidth:52}}
              timeStyle={{textAlign: 'center', backgroundColor:'#ff6347', color:'white', padding:5, borderRadius:13}}
              descriptionStyle={{color:'gray'}}
              options={{
                style:{padding:5},
                refreshControl: (
                  <RefreshControl
                    refreshing={this.state.isRefreshing}
                    onRefresh={this.onRefresh}
                  />
                ),
                renderFooter: this.renderFooter,
                onEndReached: this.onEndReached
              }}
              innerCircle={'dot'}/>
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
