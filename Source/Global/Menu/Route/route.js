import React from "react";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";

// IMPORT TAB FILE
import Tab from "../Tab/tab.js"

// BEGIN TO MAKE STACK NAVIGATOR
const AppNavigator = StackNavigator(
  {
    Tab: { screen: Tab, navigationOptions: {
     headerBackTitle: ' ',
     headerTintColor: 'black',
     header:null,
     headerStyle: {backgroundColor:'white'},
    }  }
  },
  {
    initialRouteName: "Tab",
    backButtonTitle: ' '
  }
);
// END TO MAKE STACK NAVIGATOR


export default () =>
  <Root>
    <AppNavigator />
  </Root>;
