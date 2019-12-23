import React, { Component } from 'react';
import { Text, View, Image, StatusBar,TouchableOpacity, Platform, ImageBackground, BackHandler, ScrollView,AsyncStorage, TextInput, Animated, I18nManager} from 'react-native';
import { Content,Container, Button, Icon, Right, Item, Input, Header, Left, Body, Title, Segment,Label} from 'native-base';


export default class FloatingLabelInput extends Component {
  state = {
		isFocused: false,
	};

	componentWillMount() {
		this._animatedIsFocused = new Animated.Value(this.props.value === '' ? 0 : 1);
	}

	handleFocuse = () => this.setState({ isFocused : true });
	handleBlur = () => this.setState({ isFocused : false });


  handlePress = () => {
    this.setState({ isFocused : true });
    if(this.props.onPress) {
        requestAnimationFrame(() => {
            this.props.onPress();
        });
      }
    }

	componentDidUpdate(){
		Animated.timing(this._animatedIsFocused,
		{
			toValue: (this.state.isFocused  || this.props.value !== '') ? 1 : 0,
			duration: 200,
		}).start();
	}

	render() {
		const { label, ...props } = this.props;
		const { isFocused } = this.state;
		const labelStyle = {
			position : 'absolute',
			left: 0,
			top: this._animatedIsFocused.interpolate({
				inputRange: [0, 1],
				outputRange: [18, 0],
			}),

			fontSize: this._animatedIsFocused.interpolate({
				inputRange: [0, 1],
				outputRange: [16, 12],
			}),
			color: this._animatedIsFocused.interpolate({
				inputRange: [0, 1],
				outputRange: ['#959595', '#B9B9B9'],
			}),
		};
		const textstyle = {
			...Platform.select({
				ios: {
					height:26
				},
				android: {
					height: 38
				}
			}),
			fontSize: 16,
			color:'#959595',
			borderBottomWidth: 0.5,
			borderBottomColor: '#e1e1e1',
			backgroundColor:'transparent',
      textAlign: (I18nManager.isRTL) ? 'right' : 'left'
		};
		return(
			<View style={{ paddingTop : 18}}>
				<Animated.Text style={labelStyle}>
					{label}
				</Animated.Text>
        <TouchableOpacity onPress={this.handlePress}>
				<TextInput
					{...props}
					style={textstyle}
					onFocus={this.handlePress}
					onBlur={this.handleBlur}
					autoCorrect={false}
          onPress={this.handlePress}
					underlineColorAndroid= 'transparent'/>
          </TouchableOpacity>
			</View>
		);
	}
}
