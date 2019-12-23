/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text,View,ScrollView,SafeAreaView,TouchableOpacity} from 'react-native';
import {Container} from "native-base";
import {Dialog,DialogDefaultActions} from 'react-native-material-ui';
import {RaisedTextButton} from 'react-native-material-buttons';
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";

type Props = {};

export default class MaterialDialog extends Component<Props> {
  constructor(props) {
        super(props);
        // BEGIN TO MAKE STATE
        this.state = { is_open: false };
        // END TO MAKE STATE
  }

  // BEGIN TO START DIALOG BUTTON CLICK EVENT
  onClickMethod(text){
       alert(`You have clicked ${text}.`)

       setTimeout(() => {
         this.setState({ is_open : false })
       },1000);
  }
  // END TO START DIALOG BUTTON CLICK EVENT

  render() {

    return (
      <Container style={{backgroundColor:'#E8EAF6',flex:1}}>

            {/* BEGIN HEADER VIEW */}
            <GlobalInclude.Header header_name={this.props.navigation.getParam('menu_title', global.menu_title)} navigation = {this.props.navigation}/>
            {/* END HEADER VIEW */}

            <SafeAreaView style={[GlobalInclude.GlobalStyle.scroll,{flex: 1,backgroundColor: '#E8EAF6',alignItems:'center'}]}>

                      {/* BEGIN TO MAKE BUTTON VIEW */}
                      <View style={[GlobalInclude.GlobalStyle.card,{width:'95%'}]}>
                          <RaisedTextButton style={{alignSelf:'center',width: 250,marginTop:10}} rippleDuration={600} rippleOpacity={0.54} title="Open Dialog"   color={global.slide_menu_label_background_color} titleColor={global.slide_menu_label_text_color} onPress={value => this.setState({ is_open : true })} />
                      </View>
                      {/* END TO MAKE BUTTON VIEW */}

                     {/* BEGIN TO MAKE DIALOG VIEW */}
                     {this.state.is_open == true ?

                           <Dialog>
                                   <Dialog.Title><Text>Hello world</Text></Dialog.Title>
                                   <Dialog.Content>
                                         <Text>
                                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                         </Text>
                                   </Dialog.Content>
                                   <Dialog.Actions>
                                         <DialogDefaultActions
                                          actions={['cancel', 'ok']}
                                          /**
                                          * this will disable the button for "ok"
                                          options={{ ok: { disabled: true } }}
                                          */
                                          onActionPress={(text) => this.onClickMethod(text)}
                                         />
                                   </Dialog.Actions>
                           </Dialog>

                     : null}
                     {/* END TO MAKE DIALOG VIEW */}


         </SafeAreaView>
      </Container>
    );
  }
}
