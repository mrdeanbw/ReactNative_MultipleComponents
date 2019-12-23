import React, { Component } from 'react';
import {Text,View,Image,StatusBar,TouchableOpacity,Platform,I18nManager,StyleSheet,Dimensions} from 'react-native';
import {Content,Container,Right,Header,Left,Body} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FloatingLabelInput from '../FloatingLabelInput';
import DatePicker from 'react-native-datepicker';
import { Dropdown } from 'react-native-material-dropdown';

// BEGIN TO SETUP FONT-TYPE AND FONTSIZE
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const scale = size => (Dimensions.get("window").width / guidelineBaseWidth) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const font_type = {
    FontLight: 'Helvetica',
    FontBold : 'Helvetica-Bold'
};
// END TO SETUP FONT-TYPE AND FONTSIZE

export default class EditInformation extends Component {
  constructor(props) {
		super(props);
    // BEGIN TO SETUP STATE
		this.state = {
      birthday:'1988-01-01',
			data: [
				{
					value: 'Female',
				},
				{
					value: 'Male',
				},
			],
		};
    // END TO SETUP STATE
	}

  render() {
		// BEGIN TO SETUP STATUSBAR VIEW
		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('transparent',true);
			StatusBar.setTranslucent(true);
		}
		// END TO SETUP STATUSBAR VIEW

    return(
      <Container style={styles.container}>
			{/* BEGIN TO SETUP HEADER VIEW */}
				<Header androidStatusBarColor={'#0e1130'} style={styles.header}>
				{/* BEGIN TO SETUP LEFT VIEW */}
				<Left style={styles.left}>
					<TouchableOpacity style={styles.back_arrow} onPress={()=> this.props.navigation.goBack()}>
						<FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={moderateScale(30)} color="white" style={{paddingRight: 20}}/>
					</TouchableOpacity>
				</Left>
				{/* END TO SETUP LEFT VIEW */}

				{/* BEGIN TO SETUP BODY VIEW */}
					<Body style={styles.body}>
						<Text style={styles.text_title}>Edit Information</Text>
					</Body>
				{/* END TO SETUP BODY VIEW */}

				{/* BEGIN TO SETUP RIGHT VIEW */}
					<Right style={styles.right}></Right>
				{/* END TO SETUP RIGHT VIEW */}
				</Header>
			{/* END TO SETUP HEADER VIEW */}
				<View style={styles.main_view}>
          <Content>
  					<View style={styles.floating_view}>
						{/* BEGIN TO SETUP FIRSTNAME VIEW */}
  						<FloatingLabelInput
  							label="First Name"
  							value="Lorem Ipsum"
  							keyboardType="default"
  							returnKeyType="done"
  							maxLength={20}
  							selectionColor={'#959595'}
  							autoCapitalize="none"
  							onChangeText={firstName => this.setState({ firstName })}/>
						{/* END TO SETUP FIRSTNAME VIEW */}
  						<View style={{ height: 10 }} />
						{/* BEGIN TO SETUP LASTNAME VIEW */}
  						<FloatingLabelInput
  							label="Last Name"
  							value="Lorem Ipsum"
  							keyboardType="default"
  							returnKeyType="done"
  							maxLength={20}
  							selectionColor={'#959595'}
  							autoCapitalize="none"
  							onChangeText={lastName => this.setState({ lastName })}/>
						{/* END TO SETUP LASTNAME VIEW */}
  						<View style={{ height: 10 }} />

						{/* BEGIN TO SETUP EMAIL VIEW */}
  						<FloatingLabelInput
  							label="Email"
  							value="lorem@ipsum.com"
  							keyboardType="email-address"
  							returnKeyType="done"
  							maxLength={40}
  							selectionColor={'#959595'}
  							autoCapitalize="none"
  							onChangeText={emailRegister => this.setState({ emailRegister })}/>
							{/* END TO SETUP EMAIL VIEW */}
  						<View style={{ height: 10 }} />

							{/* BEGIN TO SETUP BIRTHDATE VIEW */}
  						<TouchableOpacity onPress={() => {this.refs.datepicker.onPressDate()}}>
  							<FloatingLabelInput
  								label="Birthday"
  								value={this.state.birthday}
  								keyboardType="default"
  								returnKeyType="done"
  								selectionColor={'#959595'}
  								maxLength={10}
  								onPress={() => {
  									this.refs.datepicker.onPressDate();
  								}}
  								autoCapitalize="none"/>
  						</TouchableOpacity>
							{/* END TO SETUP BIRTHDATE VIEW */}

							{/* BEGIN TO SETUP DATE VIEW */}
  						<DatePicker
  							ref="datepicker"
  							style={{ width: 0, height: 0 }}
  							customStyles={{
  								dateIcon: {
  									width: 0,
  									height: 0,
  								},
  								dateInput: {
  									borderWidth: 0,
  								},
  							}}
  							date={this.state.birthday}
  							mode="date"
  							format="YYYY-MM-DD"
  							maxDate={new Date()}
  							hideText={true}
  							confirmBtnText="Confirm"
  							cancelBtnText="Cancel"
  							onDateChange={birthday => {
  								this.setState({ birthday: birthday });
  							}}/>
								{/* END TO SETUP DATE VIEW */}

							{/* BEGIN TO SETUP GENDER VIEW */}
  						<View style={{ width: Dimensions.get("window").width * 0.94, alignSelf: 'center' }}>
  							<Dropdown
  								label="Gender"
  								data={this.state.data}
  								textColor={'#959595'}
  								onChangeText={this.onChangeText}
									value={"Male"}/>
  						</View>
							{/* END TO SETUP GENDER VIEW */}

  					</View>
  				</Content>
					<View style={styles.edit_infomain_view}>
						<View style={styles.edit_divider} />
						<View style={{flexDirection: 'row', }}>
						{/* BEGIN TO SETUP UPDATE VIEW */}
							<TouchableOpacity
								style={styles.edit_info_view}
								onPress={() => alert('Update Information')}>
								<Text style={styles.editinfo_text}>Update</Text>
							</TouchableOpacity>
						{/* END TO SETUP UPDATE VIEW */}

						{/* BEGIN TO SETUP CANCEL VIEW */}
							<TouchableOpacity
								style={styles.edit_info_view}
								onPress={() => alert('cancel')}>
								<Text style={styles.editinfo_text}>Cancel</Text>
							</TouchableOpacity>
						{/* END TO SETUP CANCEL VIEW */}
						</View>
						</View>
				</View>
			</Container>
    )
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: 'white'
  },
  header: {
    backgroundColor: "#ff6347",
    height: Dimensions.get("window").height * 0.1,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {
        paddingTop: (Dimensions.get("window").height * 0.02),
      },
      android: {
        paddingTop: Dimensions.get("window").width * 0.05
      }
    }),
    elevation: 0,
    paddingLeft: (Dimensions.get("window").width * 0.05),
    paddingRight: (Dimensions.get("window").width * 0.05),
  },
	left: {
    flex: 0.5,
    backgroundColor: 'rgba(0,0,0,0)',
  },
	back_arrow: {
    justifyContent: 'center',
    alignItems: 'center',
  },
	body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
	text_title: {
    color: 'white',
    fontSize: moderateScale(20),
    alignSelf: 'center',
    fontFamily: font_type.FontLight,
  },
	right: {
    flex: 0.5,
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    ...Platform.select({
      ios: {
      },
      android: {
        paddingTop: Dimensions.get("window").width * 0.02
      }
    }),
  },
  main_view:{
    height: Dimensions.get("window").height * 0.8,
  },
  info_text:{
    width: Dimensions.get("window").width * 0.5,
    fontSize:  moderateScale(16),
    fontFamily: font_type.FontLight,
    textAlign: 'left'
  },
  edit_infomain_view:{
    bottom: 0,
    position:'absolute',
    width:Dimensions.get("window").width
  },
	edit_divider:{
    height: Dimensions.get("window").height * 0.001,
    backgroundColor: '#e1e1e1'
  },
	edit_info_view:{
    padding: Dimensions.get("window").height * 0.015,
    margin: Dimensions.get("window").height * 0.015,
    flex: 1,
    backgroundColor: '#ff6347',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
	editinfo_text:{
    color:'#ffffff',
    fontSize:  moderateScale(16),
    fontFamily: font_type.FontLight,
  },
	floating_view: {
		alignSelf: 'center',
		width: Dimensions.get("window").width * 0.94,
		justifyContent: 'center',
		marginTop: Dimensions.get("window").height * 0.015,
	},
});
// END TO MAKE STYLE
