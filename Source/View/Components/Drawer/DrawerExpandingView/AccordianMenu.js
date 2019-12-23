import React, { Component } from 'react';
import { Platform, StyleSheet, Image, TouchableWithoutFeedback, Animated,Dimensions} from 'react-native';
import {View, Text } from 'react-native-animatable';


export default  class AccordionMenu extends Component{
    constructor(props){
        super(props);
        this.state = {
          expanded : false,
          animation   : new Animated.Value(),
        };
    }

    //BEGIN TO SETUP TOOGLEVIEW
    toggle(){

        let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
            finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

        this.state.animation.setValue(initialValue);
        Animated.spring(
            this.state.animation,
            {
                toValue: finalValue
            }
        ).start();

        this.setState({
            expanded : !this.state.expanded
        });
    }
    //END TO SETUP TOOGLEVIEW

    //BEGIN TO SETUP MAXHEIGHT
    _setMaxHeight(event){
        this.setState({
            maxHeight   : event.nativeEvent.layout.height
        });
    }
    //END TO SETUP MAXHEIGHT

    //BEGIN TO SETUP MINHEIGHT
    _setMinHeight(event){
        this.setState({
            minHeight   : event.nativeEvent.layout.height
        });
    }
    //END TO SETUP MINHEIGHT

    render(){
      var ct = 0
        return (

            <Animated.View style={[styles.container,{height: 100}]}>
              <View style={[styles.menu_icon_sec,{backgroundColor: this.props.bgColors}]}>
                <TouchableWithoutFeedback onPress={this.toggle.bind(this)} underlayColor="transparent">
                  <View><Image source={this.props.menuIcon} style={styles.my_icon_style}/></View>
                </TouchableWithoutFeedback>
              </View>

            {/* BEGIN TO SETUP MENU VIEW */}
              <View style={styles.menu_style_sec}>

                <View style={styles.title_container} onLayout={this._setMinHeight.bind(this)}>
                {/* BEGIN TO SETUP HEADER VIEW */}
                    <TouchableWithoutFeedback onPress={this.toggle.bind(this)} underlayColor="transparent">
                        <View style={styles.title_collapse}>
                          <View style={styles.header_title}>
                            <Text style={styles.header}>{this.props.title}</Text>
                          </View>
                        </View>
                    </TouchableWithoutFeedback>
                 {/* END TO SETUP HEADER VIEW */}
                </View>

               {
                   this.state.expanded && (
                     <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                        <View>
                          {
                            this.props.submenuList.map((submenuTitle,value)=>{
                              ct = ct + 30
                              return (
                                <View style={styles.submenutitle_sec} key={"submenuview_" + (value)}>
                                  <TouchableWithoutFeedback onPress={()=>alert(submenuTitle.submenu)}>
                                    <View animation="fadeInLeft" delay={ct}><Text style={styles.mybody_text}>{submenuTitle.submenu}</Text></View>
                                  </TouchableWithoutFeedback>
                                </View>
                              )
                            })
                          }
                        </View>
                     </View>)
               }

              </View>
            {/* END TO SETUP MENU VIEW */}
              </Animated.View>
        );
    }
}
// BEGIN TO MAKE STYLE
var styles = StyleSheet.create({
    container: {
      width: Dimensions.get("window").width * 0.86,
      backgroundColor: '#241445',
      borderBottomWidth: 0.7,
      borderBottomColor: '#150c28',
      flexDirection: 'row',
      justifyContent:'center',
      alignItems:'center'
    },
    menu_icon_sec:{
      paddingTop: 8,
      marginLeft: 5,
      marginTop: 10,
      marginBottom: 10,
      width: Dimensions.get("window").width * 0.11,
      alignSelf: 'stretch',
      borderWidth: 1,
      borderColor: 'transparent',
      borderRadius: Dimensions.get("window").width * 0.06,
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    menu_style_sec:{
      backgroundColor: 'transparent',
      width: Dimensions.get("window").width * 0.72,
    },
    my_icon_style:{
      width: 20,
      height: 17,
    },
    title_container : {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center'
    },
    title_collapse:{
      flexDirection: 'row',
    },
    header_title:{
      width: (Dimensions.get("window").width * 0.72),
      flexDirection: 'row',
      padding: 8,
      alignItems: 'center',
    },
    header: {
        width: Dimensions.get("window").width * 0.72,
        paddingTop : 10,
        paddingLeft: 7,
        paddingBottom : 10,
        color: '#fff',
        fontSize: 16,
        textAlign: 'left'
    },
    mybody_text: {
        width: Dimensions.get("window").width * 0.72,
        paddingTop : 5,
        paddingLeft: 7,
        paddingBottom : 5,
        color: '#fff',
        fontSize: 16,
        textAlign: 'left'
    },
    body: {
        paddingLeft: 25,
        paddingRight: 5,
        paddingTop  : 0,
        width: (Dimensions.get("window").width * 0.72),
    },
    submenutitle_sec: {
      paddingLeft: Dimensions.get("window").width * 0.05
    },
  });
// END TO MAKE STYLE
