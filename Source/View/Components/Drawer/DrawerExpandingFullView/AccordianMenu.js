import React, { Component } from 'react';
import { Platform, StyleSheet, Text, Dimensions,View, TouchableOpacity, TouchableWithoutFeedback, Image, I18nManager} from 'react-native';


export default  class AccordionMenu extends Component{
    constructor(props){
        super(props);
        this.state = { expanded : false };
    }
    //BEGIN TO SETUP TOOGLEVIEW
    toggle(){
        this.setState({
            expanded : !this.state.expanded
        });
    }
    //END TO SETUP TOOGLEVIEW
    render(){

        return (
            <View style={[styles.container,{backgroundColor: this.props.bgColors}]}>
              {/* BEGIN TO SETUP HEADER VIEW */}
                <View style={styles.title_container}>
                    <TouchableOpacity
                        onPress={this.toggle.bind(this)}
                        underlayColor="transparent">
                        <View style={styles.title_collapse}>
                          <View style={styles.header_title}>
                            <Image source={this.props.menuIcon} style={{width: 28, height: 24,}}/>
                            <Text style={styles.header}>{this.props.title}</Text>
                          </View>
                        </View>
                    </TouchableOpacity>
                </View>
              {/* END TO SETUP HEADER VIEW */}
               {
                   this.state.expanded && (
                     <View style={styles.body}>
                        <View style={styles.body_text}>
                          {
                            this.props.submenuList.map((submenuTitle,value)=>{
                              return (
                                <TouchableWithoutFeedback onPress={()=>alert(submenuTitle.submenu)}>
                                  <Text key={"submenuview_" + (value)} style={styles.header}>{submenuTitle.submenu}</Text>
                                </TouchableWithoutFeedback>
                              )
                            })
                          }
                        </View>
                     </View>)
               }

            </View>
        );
    }
}
// BEGIN TO MAKE STYLE
var styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
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
      width: (Dimensions.get("window").width),
      flexDirection: 'row',
      padding: 8,
      alignItems: 'center',
    },
    header: {
        width: Dimensions.get("window").width,
        paddingTop : 10,
        paddingLeft: I18nManager.isRTL ? 0 : 7,
        paddingRight: I18nManager.isRTL ? 7 : 0,
        paddingBottom : 10,
        color: '#fff',
        fontSize: 16,
        textAlign: 'left'
    },
    body: {
        paddingLeft: 25,
        paddingRight: 5,
        paddingTop  : 0,
        width: (Dimensions.get("window").width),
    },
    body_text:{
      paddingLeft: Dimensions.get("window").width * 0.15
    },
});
// END TO MAKE STYLE
