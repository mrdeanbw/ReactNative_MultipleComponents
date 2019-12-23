/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet,Text,View,ScrollView,SafeAreaView} from 'react-native';
import {Container} from "native-base";
import Switch from 'react-native-material-switch';
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";

type Props = {};

export default class MaterialSwitch extends Component<Props> {
  constructor(props) {
    super(props);
    // BEGIN START TO MAKE STATE
    this.state = {
      switch1:false,
      switch2:false,
      switch3:false,
      switch4:false,
      switch5:false
    };
    // END START TO MAKE STATE
  }
  render() {

    return (
      <Container style={{backgroundColor:'#E8EAF6'}}>

            {/* BEGIN HEADER VIEW */}
            <GlobalInclude.Header header_name={this.props.navigation.getParam('menu_title', global.menu_title)} navigation = {this.props.navigation}/>
            {/* END HEADER VIEW */}

            <SafeAreaView style={{flex: 1,backgroundColor: '#E8EAF6'}}>
                <ScrollView style={GlobalInclude.GlobalStyle.scroll}>

                      {/* BEGIN TO MAKE DEFAULT SWITCH VIEW */}
                      <View style={[GlobalInclude.GlobalStyle.card,{height:90}]}>
                          <Text style={GlobalInclude.GlobalStyle.textStyle}>Default : Switch is now {this.state.switch1 == true ? 'On.' : 'Off.'}</Text>
                          <Switch
                            activeBackgroundColor='rgba(252, 16, 148, 0.62)'
                            value={this.state.switch1}
                            onValueChange={(state) => this.setState({switch1:state})}
                          />
                      </View>
                      {/* END TO MAKE DEFAULT SWITCH VIEW */}

                    {/* BEGIN TO MAKE CUSTOME COLOR SWITCH VIEW */}
                    <View style={[GlobalInclude.GlobalStyle.card,{height:90}]}>
                        <Text style={GlobalInclude.GlobalStyle.textStyle}>Custom colors : Switch is now {this.state.switch2 == true ? 'On.' : 'Off.'}</Text>
                        <Switch
                          activeBackgroundColor='rgba(206, 182, 255, 0.74)'
                          inactiveBackgroundColor='rgba(252, 16, 148, 0.62)'
                          activeButtonColor='#6d3abf'
                          activeButtonPressedColor='#7943d1'
                          inactiveButtonColor='#ba2a8f'
                          inactiveButtonPressedColor='#cf39a2'
                          value={this.state.switch2}
                          onValueChange={(state) => this.setState({switch2:state})}
                          />
                    </View>
                    {/* END TO MAKE CUSTOME COLOR SWITCH VIEW */}

                    {/* BEGIN TO MAKE WITH CALLBACKS SWITCH VIEW */}
                    <View style={[GlobalInclude.GlobalStyle.card,{height:90}]}>
                        <Text style={GlobalInclude.GlobalStyle.textStyle}>With callbacks : Switch is now {this.state.switch3 == true ? 'On.' : 'Off.'}</Text>
                        <Switch
                          onActivate={() => {alert('activate')}}
                          onDeactivate={() => {alert('deactivate')}}
                          value={this.state.switch3}
                          activeBackgroundColor='rgba(252, 16, 148, 0.62)'
                          onValueChange={(state) => this.setState({switch3:state})}
                          />
                    </View>
                    {/* END TO MAKE WITH CALLBACKS SWITCH VIEW */}

                    {/* BEGIN TO MAKE WITH CUSTOME SIZES SWITCH VIEW */}
                    <View style={[GlobalInclude.GlobalStyle.card,{height:110}]}>
                        <Text style={GlobalInclude.GlobalStyle.textStyle}>Custom sizes : First switch is now {this.state.switch4 == true ? 'On.' : 'Off.'} and Second switch is now {this.state.switch5 == true ? 'On.' : 'Off.'}</Text>
                        <View style={styles.rowContainer}>
                            <Switch
                              style={{marginBottom:10}}
                              buttonRadius={8}
                              switchHeight={10}
                              switchWidth={100}
                              activeBackgroundColor='rgba(252, 16, 148, 0.62)'
                              value={this.state.switch4}
                              onValueChange={(state) => this.setState({switch4:state})}
                            />
                            <Switch
                              buttonRadius={14}
                              switchHeight={29}
                              switchWidth={50}
                              value={true}
                              activeBackgroundColor='rgba(252, 16, 148, 0.62)'
                              value={this.state.switch5}
                              onValueChange={(state) => this.setState({switch5:state})}
                            />
                        </View>

                    </View>
                    {/* END TO MAKE WITH CUSTOME SIZES SWITCH VIEW */}

                    {/* BEGIN TO MAKE DISABLED SWIPE SWITCH VIEW */}
                      <View style={[GlobalInclude.GlobalStyle.card,{height:90}]}>
                          <Text style={GlobalInclude.GlobalStyle.textStyle}>Disabled swipe : Switch is now disabled.</Text>
                          <Switch enableSlide={false}/>
                      </View>
                    {/* END TO MAKE DISABLED SWIPE SWITCH VIEW */}

              </ScrollView>
         </SafeAreaView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems:'center'
  },
});
