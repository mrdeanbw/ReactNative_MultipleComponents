import React, { Component } from "react";
import {View,TouchableOpacity,Platform,TextInput,Animated,I18nManager} from "react-native";


export default class FloatingLabelInput extends Component {

  // BEGIN TO SET STATE
  state = {
    isFocused: false
  };
  // END TO SET STATE

  componentWillMount() {
    // BEGIN TO ANIMATED VALUE
    this._animatedIsFocused = new Animated.Value(
      this.props.value === "" ? 0 : 1
    );
    // END TO ANIMATED VALUE
  }

  // BEGIN TO HANDLE FOCUS AND BLUR
  handleFocuse = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });
  // END TO HANDLE FOCUS AND BLUR

  // BEGIN TO HANDLE PRESS
  handlePress = () => {
    this.setState({ isFocused: true });
    if (this.props.onPress) {
      requestAnimationFrame(() => {
        this.props.onPress();
      });
    }
  };
  // END TO HANDLE PRESS

  componentDidUpdate() {
    // BEGIN TO UPDATE ANIMATED TIMING
    Animated.timing(this._animatedIsFocused, {
      toValue: this.state.isFocused || this.props.value !== "" ? 1 : 0,
      duration: 200
    }).start();
    // END TO UPDATE ANIMATED TIMING
  }

  render() {
    const { label, ...props } = this.props;
    const { isFocused } = this.state;

    // BEGIN TO SETUP LABEL STYLE
    const labelStyle = {
      position: "absolute",
      left: 0,
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [18, 0]
      }),

      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [16, 12]
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: ["#FFFFFF", "#FFFFFF"]
      })
    };
    // END TO SETUP LABEL STYLE

    // BEGIN TO SETUP TEXT STYLE
    const textstyle = {
      ...Platform.select({
        ios: {
          height: 26
        },
        android: {
          height: 38
        }
      }),
      fontSize: 16,
      color: "#FFFFFF",
      borderBottomWidth: 0.5,
      borderBottomColor: "#e1e1e1",
      backgroundColor: "transparent",
      textAlign: I18nManager.isRTL ? "right" : "left"
    };
    // END TO SETUP TEXT STYLE

    return (
      <View style={{ paddingTop: 18 }}>
        {/* BEGIN TO TEXTFIELD STYLE */}
        <Animated.Text style={labelStyle}>{label}</Animated.Text>
        <TouchableOpacity onPress={this.handlePress}>
          <TextInput
            {...props}
            style={textstyle}
            onFocus={this.handlePress}
            onBlur={this.handleBlur}
            autoCorrect={false}
            onPress={this.handlePress}
            underlineColorAndroid="transparent"
          />
        </TouchableOpacity>
        {/* END TO TEXTFIELD STYLE */}
      </View>
    );
  }
}
