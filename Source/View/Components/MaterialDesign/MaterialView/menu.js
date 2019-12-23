/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {Container,Toast} from "native-base";
import Menu, {MenuItem,MenuDivider} from 'react-native-material-menu';
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";
type Props = {};

export default class MaterialMenu extends Component<Props> {
    _menu = null;

    // BEGIN TO METHOD FOR SET MENU
    setMenuRef = ref => {
      this._menu = ref;
    };
    // END TO METHOD FOR SET MENU

    // BEGIN TO METHOD FOR HIDE MENU
    hideMenu = () => {
      this._menu.hide();
    };
    // END TO METHOD FOR HIDE MENU

    // BEGIN TO METHOD FOR SHOW MENU
    showMenu = () => {
      this._menu.show();
    };
    // END TO METHOD FOR SHOW MENU

  render() {

    return (
      <Container style={{backgroundColor:'#E8EAF6'}}>

            {/* BEGIN HEADER VIEW */}
            <GlobalInclude.Header header_name={this.props.navigation.getParam('menu_title', global.menu_title)} navigation = {this.props.navigation}/>
            {/* END HEADER VIEW */}

                      {/* BEGIN TO MAKE MENU VIEW */}
                      <View style={[GlobalInclude.GlobalStyle.card,{height:50}]}>

                                <Menu
                                  ref={this.setMenuRef}
                                  button={<Text onPress={this.showMenu} style={{flex:1,width:300,height:50,textAlign: 'center',paddingTop:5}}>Show menu</Text>}
                                >
                                  <MenuItem onPress={this.hideMenu}>Menu item 1</MenuItem>
                                  <MenuItem onPress={this.hideMenu}>Menu item 2</MenuItem>
                                  <MenuItem onPress={this.hideMenu} disabled>
                                    Menu item 3
                                  </MenuItem>
                                  <MenuDivider />
                                  <MenuItem onPress={this.hideMenu}>Menu item 4</MenuItem>
                                </Menu>

                      </View>
                      {/* END TO MAKE MENU VIEW */}

      </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 4,
    },
});
// END TO MAKE STYLE
