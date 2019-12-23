/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text,Platform, View,ScrollView,SafeAreaView,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";
import {Container,Toast} from "native-base";
import {RaisedTextButton} from 'react-native-material-buttons';
import {TextField} from 'react-native-material-textfield';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

type Props = {};

export default class MaterialTextfield extends Component<Props> {
  constructor(props) {
      super(props);

      // BEGIN TO SETUP ALL METHOD BIND
      this.onFocus = this.onFocus.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.onChangeText = this.onChangeText.bind(this);
      this.onSubmitFirstName = this.onSubmitFirstName.bind(this);
      this.onSubmitLastName = this.onSubmitLastName.bind(this);
      this.onSubmitAbout = this.onSubmitAbout.bind(this);
      this.onSubmitEmail = this.onSubmitEmail.bind(this);
      this.onSubmitPassword = this.onSubmitPassword.bind(this);
      this.onAccessoryPress = this.onAccessoryPress.bind(this);
      // END TO SETUP ALL METHOD BIND

      // BEGIN TO SETUP TEXTFIELD UPDATE METHOD BIND
      this.firstnameRef = this.updateRef.bind(this, 'firstname');
      this.lastnameRef = this.updateRef.bind(this, 'lastname');
      this.aboutRef = this.updateRef.bind(this, 'about');
      this.emailRef = this.updateRef.bind(this, 'email');
      this.passwordRef = this.updateRef.bind(this, 'password');
      // END TO SETUP TEXTFIELD UPDATE METHOD BIND

      // METHOD FOR RENDER PASSWORD TEXTFIELD ACCESSORY
      this.renderPasswordAccessory = this.renderPasswordAccessory.bind(this);

      // BEGIN TO SETUP INITIAL STATE
      this.state = {
        firstname: 'Lorem',
        lastname: 'Ipsum',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra, ante vitae suscipit condimentum, diam nunc mollis eros, id porta urna orci a est.',
        secureTextEntry: true,
      };
      // END TO SETUP INITIAL STATE

    }

    // BEGIN TO SETUP METHOD FOR ONFOCUS TEXTFIELD
    onFocus() {
      let { errors = {} } = this.state;
      for (let name in errors) {
        let ref = this[name];
        if (ref && ref.isFocused()) {
          delete errors[name];
        }
      }

      this.setState({ errors });
    }
    // END TO SETUP METHOD FOR ONFOCUS TEXTFIELD


    // BEGIN TO SETUP METHOD FOR ONCHANGE TEXTFIELD
    onChangeText(text) {
      ['firstname', 'lastname', 'about', 'email', 'password']
        .map((name) => ({ name, ref: this[name] }))
        .forEach(({ name, ref }) => {
          if (ref.isFocused()) {
            this.setState({ [name]: text });
          }
        });
    }
    // END TO SETUP METHOD FOR ONCHANGE TEXTFIELD

    // BEGIN TO SETUP METHOD FOR ONACCESSORY PRESS IN TEXTFIELD
    onAccessoryPress() {
      this.setState(({ secureTextEntry }) => ({ secureTextEntry: !secureTextEntry }));
    }
    // END TO SETUP METHOD FOR ONACCESSORY PRESS IN TEXTFIELD

    // BEGIN TO SETUP METHOD FOR ONSUBMIT FIRSTNAME TEXTFIELD
    onSubmitFirstName() {
      this.lastname.focus();
    }
    // END TO SETUP METHOD FOR ONSUBMIT FIRSTNAME TEXTFIELD

    // BEGIN TO SETUP METHOD FOR ONSUBMIT LASTNAME TEXTFIELD
    onSubmitLastName() {
      this.about.focus();
    }
    // END TO SETUP METHOD FOR ONSUBMIT LASTNAME TEXTFIELD

    // BEGIN TO SETUP METHOD FOR ONSUBMIT ABOUT TEXTFIELD
    onSubmitAbout() {
      this.email.focus();
    }
    // END TO SETUP METHOD FOR ONSUBMIT ABOUT TEXTFIELD

    // BEGIN TO SETUP METHOD FOR ONSUBMIT EMAIL TEXTFIELD
    onSubmitEmail() {
      this.password.focus();
    }
    // END TO SETUP METHOD FOR ONSUBMIT EMAIL TEXTFIELD

    // BEGIN TO SETUP METHOD FOR ONSUBMIT PASSWORD TEXTFIELD
    onSubmitPassword() {
      this.password.blur();
    }
    // BEGIN TO SETUP METHOD FOR ONSUBMIT PASSWORD TEXTFIELD

    // BEGIN TO SETUP METHOD FOR ONSUBMIT BUTTON PRESS
    onSubmit() {
      let errors = {};

      ['firstname', 'lastname', 'email', 'password']
        .forEach((name) => {
          let value = this[name].value();

          if (!value) {
            errors[name] = 'Should not be empty';
          } else {
            if ('password' === name && value.length < 6) {
              errors[name] = 'Too short';
            }
          }
        });

      this.setState({ errors });
    }
    // END TO SETUP METHOD FOR ONSUBMIT BUTTON PRESS

    // BEGIN TO SETUP METHOD FOR UPDATE REFF. TEXTFIELD
    updateRef(name, ref) {
      this[name] = ref;
    }
    // END TO SETUP METHOD FOR UPDATE REFF. TEXTFIELD

    // BEGIN TO SETUP METHOD FOR RENDER PASSWORD ACCESSORY IN PASSWORD TEXTFIELD
    renderPasswordAccessory() {
      let { secureTextEntry } = this.state;

      let name = secureTextEntry?
        'visibility':
        'visibility-off';

      return (
        <MaterialIcon
          size={24}
          name={name}
          color={TextField.defaultProps.baseColor}
          onPress={this.onAccessoryPress}
          suppressHighlighting
        />
      );
    }
    // END TO SETUP METHOD FOR RENDER PASSWORD ACCESSORY IN PASSWORD TEXTFIELD

    render() {
      // BEGIN TO SETUP DEFAULT STATE
      let { errors = {}, secureTextEntry, ...data } = this.state;
      // END TO SETUP DEFAULT STATE

      // BEGIN TO SETUP DEFAULT DATA ARRAY
      let { firstname = 'name', lastname = 'house' } = data;
      // END TO SETUP DEFAULT DATA ARRAY

      // BEGIN TO SETUP DEFAULT EMAIL
      let defaultEmail = `${firstname}@${lastname}.com`
        .replace(/\s+/g, '_')
        .toLowerCase();
      // END TO SETUP DEFAULT EMAIL

      return (
        <Container style={{backgroundColor:'#E8EAF6'}}>

              {/* BEGIN HEADER VIEW */}
              <GlobalInclude.Header header_name={this.props.navigation.getParam('menu_title', global.menu_title)} navigation = {this.props.navigation}/>
              {/* END HEADER VIEW */}

              <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.contentContainer}
                keyboardShouldPersistTaps='handled'
              >
                  <KeyboardAvoidingView style={styles.container} behavior={Platform.OS == 'android' ? null : "padding"} enabled>

                          {/* BEGIN TO SETUP FOR FIRSTNAME TEXTFIELD */}
                          <TextField
                            ref={this.firstnameRef}
                            value={data.firstname}
                            autoCorrect={false}
                            enablesReturnKeyAutomatically={true}
                            onFocus={this.onFocus}
                            onChangeText={this.onChangeText}
                            onSubmitEditing={this.onSubmitFirstName}
                            returnKeyType='next'
                            label='First Name'
                            error={errors.firstname}
                          />
                          {/* END TO SETUP FOR FIRSTNAME TEXTFIELD */}

                          {/* BEGIN TO SETUP FOR LASTNAME TEXTFIELD */}
                          <TextField
                            ref={this.lastnameRef}
                            value={data.lastname}
                            autoCorrect={false}
                            enablesReturnKeyAutomatically={true}
                            onFocus={this.onFocus}
                            onChangeText={this.onChangeText}
                            onSubmitEditing={this.onSubmitLastName}
                            returnKeyType='next'
                            label='Last Name'
                            error={errors.lastname}
                          />
                          {/* END TO SETUP FOR LASTNAME TEXTFIELD */}

                          {/* BEGIN TO SETUP FOR MULTILINE TEXTFIELD */}
                          <TextField
                            ref={this.aboutRef}
                            value={data.about}
                            onFocus={this.onFocus}
                            onChangeText={this.onChangeText}
                            onSubmitEditing={this.onSubmitAbout}
                            returnKeyType='next'
                            multiline={true}
                            blurOnSubmit={true}
                            label='About (optional)'
                            characterRestriction={200}
                          />
                          {/* END TO SETUP FOR MULTILINE TEXTFIELD */}

                          {/* BEGIN TO SETUP FOR EMAIL TEXTFIELD */}
                          <TextField
                            ref={this.emailRef}
                            value={data.email}
                            defaultValue={defaultEmail}
                            keyboardType='email-address'
                            autoCapitalize='none'
                            autoCorrect={false}
                            enablesReturnKeyAutomatically={true}
                            onFocus={this.onFocus}
                            onChangeText={this.onChangeText}
                            onSubmitEditing={this.onSubmitEmail}
                            returnKeyType='next'
                            label='Email Address'
                            error={errors.email}
                          />
                          {/* END TO SETUP FOR EMAIL TEXTFIELD */}

                          {/* BEGIN TO SETUP FOR PASSWORD TEXTFIELD */}
                          <TextField
                            ref={this.passwordRef}
                            value={data.password}
                            secureTextEntry={secureTextEntry}
                            autoCapitalize='none'
                            autoCorrect={false}
                            enablesReturnKeyAutomatically={true}
                            clearTextOnFocus={true}
                            onFocus={this.onFocus}
                            onChangeText={this.onChangeText}
                            onSubmitEditing={this.onSubmitPassword}
                            returnKeyType='done'
                            label='Password'
                            error={errors.password}
                            title='Choose wisely'
                            maxLength={30}
                            characterRestriction={20}
                            renderAccessory={this.renderPasswordAccessory}
                          />
                          {/* END TO SETUP FOR PASSWORD TEXTFIELD */}

                          {/* BEGIN TO SETUP FOR DISABLED TEXTFIELD */}
                          <TextField
                            value={data.lastname}
                            label='Lorem'
                            title='Lorem Ipsum from last name'
                            disabled={true}
                          />
                          {/* END TO SETUP FOR DISABLED TEXTFIELD */}
                  </KeyboardAvoidingView>

                  {/* BEGIN TO SETUP SUBMIT BUTTON VIEW */}
                  <View style={styles.container}>
                    <RaisedTextButton onPress={this.onSubmit} title='submit' color={'#ff6347'} titleColor='white' />
                  </View>
                  {/* END TO SETUP SUBMIT BUTTON VIEW */}

              </ScrollView>
        </Container>
      );
    }
}


const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#E8EAF6',
  },
  container: {
    margin: 8,
    marginTop: 24,
  },
  contentContainer: {
    padding: 8,
  },
});
