import React, { Component } from 'react';
import {Text,View,Image,StatusBar,Platform,StyleSheet,Dimensions,TouchableOpacity,Alert,I18nManager} from 'react-native';
import {Container,Icon,Right,Header,Left,Body,Title,Content,Form,List,ListItem} from 'native-base';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";

// BEGIN TO SETUP FONT-TYPE AND FONT-SIZE
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const scale = size => (Dimensions.get("window").width / guidelineBaseWidth) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const font_type = {
    FontLight: 'Helvetica',
    FontBold : 'Helvetica-Bold'
};
// END TO SETUP FONT-TYPE AND FONT-SIZE

export default class ProfilePayment extends Component {
  constructor(props) {
 		super(props);
    // BEGIN TO SETUP STATE
 		this.state = {
      isMessageActive: true,
      isFollowed: false,
    };
    // END TO SETUP STATE
 	}

  render(){
    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW

    return(
     <Container style={{backgroundColor: '#2d324f'}}>
       <View style={styles.logosec}>
         {/* BEGIN TO SETUP HEADER VIEW */}
          <Header androidStatusBarColor={'#2d324f'} style={styles.header}>

         {/* BEGIN TO SETUP LEFT VIEW */}
           <Left style={styles.left}>
             <TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
              <Icon name={I18nManager.isRTL ? "ios-arrow-forward" : "ios-arrow-back"} style={{ color: '#fff' }}/>
             </TouchableOpacity>
           </Left>
           {/* END TO SETUP LEFT VIEW */}

           {/* BEGIN TO SETUP BODY VIEW */}
            <Body style={styles.body}>
              <Title style={styles.header_title}>Profile</Title>
            </Body>
           {/* END TO SETUP BODY VIEW */}

           {/* BEGIN TO SETUP RIGHT VIEW */}
             <Right style={styles.right}>
               <TouchableOpacity onPress={()=>alert("Edit button clicked.")}>
                 <Text style={styles.edit}>Edit</Text>
               </TouchableOpacity>
             </Right>
           {/* END TO SETUP RIGHT VIEW */}
            </Header>
          {/* END TO SETUP HEADER VIEW */}
        </View>
       <Content style={styles.slidesec}>
         <View style={styles.profile_header_main}>
          {/* BEGIN TO SETUP COMMENT ICON AND IMAGE AND USERFOLLLOW VIEW */}
            <View style={styles.profile_image_sec}>
              <TouchableOpacity style={(this.state.isMessageActive) ? styles.active_button : styles.normal_button} onPress={()=>this.setState({isMessageActive: !this.state.isMessageActive})}>
                <EvilIcons name="comment" size={30} color="white"/>
              </TouchableOpacity>
              <Image source={GlobalInclude.Image1} style={styles.profile_image}/>
              <TouchableOpacity style={(this.state.isFollowed) ? styles.active_button : styles.normal_button} onPress={()=>this.setState({isFollowed: !this.state.isFollowed})}>
                <SimpleLineIcons name="user-follow" size={20} color="white" style={{transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]}}/>
              </TouchableOpacity>
            </View>
          {/* END TO SETUP COMMENT ICON AND IMAGE AND USERFOLLLOW VIEW */}
            <Text style={styles.name}>Lorem ipsum</Text>
         </View>

          {/* BEGIN TO SETUP DETAILS VIEW */}
              <List style={styles.details}>
          {/* BEGIN TO SETUP ACCOUNT VIEW */}
             <ListItem style={styles.list_item} onPress={()=>alert("Account button clicked.")}>
               <View>
                 <Text style={styles.list_item_text}>Account</Text>
               </View>
               <View style={styles.list_right}>
                 <Text style={styles.list_right_email}>lorem@ipsum.com</Text>
                 <TouchableOpacity>
                 {
                   (I18nManager.isRTL)
                   ?
                       <Icon name="ios-arrow-back" style={styles.arrow_forword}/>
                   :
                       <Icon name="ios-arrow-forward" style={styles.arrow_forword}/>
                 }
                 </TouchableOpacity>
               </View>
             </ListItem>
           {/* END TO SETUP ACCOUNT VIEW */}

           {/* BEGIN TO SETUP CHANGEPASSWORD VIEW */}
             <ListItem style={styles.list_item} onPress={()=>alert("Change Password button clicked.")}>
               <View>
                 <Text style={styles.list_item_text}>Change Password</Text>
               </View>
               <View style={styles.list_right}>
                 <TouchableOpacity>
                 {
                   (I18nManager.isRTL)
                   ?
                       <Icon name="ios-arrow-back" style={styles.arrow_forword}/>
                   :
                       <Icon name="ios-arrow-forward" style={styles.arrow_forword}/>
                 }
                 </TouchableOpacity>
               </View>
             </ListItem>
            {/* END TO SETUP CHANGEPASSWORD VIEW */}

            {/* BEGIN TO SETUP PAYMENT VIEW */}
               <ListItem style={styles.list_item} onPress={()=>alert("Payment button clicked.")}>
                 <View>
                   <Text style={styles.list_item_text}>Payment</Text>
                 </View>
                 <View style={styles.list_right}>
                   <TouchableOpacity>
                   {
                     (I18nManager.isRTL)
                     ?
                         <Icon name="ios-arrow-back" style={styles.arrow_forword}/>
                     :
                         <Icon name="ios-arrow-forward" style={styles.arrow_forword}/>
                   }
                   </TouchableOpacity>
                 </View>
              </ListItem>
            {/* END TO SETUP PAYMENT VIEW */}

            {/* BEGIN TO SETUP TERMSOFSERVICE VIEW */}
               <ListItem style={styles.list_item} onPress={()=>alert("Terms of Service button clicked.")}>
                 <View>
                   <Text style={styles.list_item_text}>Terms of Service</Text>
                 </View>
                 <View style={styles.list_right}>
                   <TouchableOpacity>
                   {
                     (I18nManager.isRTL)
                     ?
                         <Icon name="ios-arrow-back" style={styles.arrow_forword}/>
                     :
                         <Icon name="ios-arrow-forward" style={styles.arrow_forword}/>
                   }
                   </TouchableOpacity>
                 </View>
               </ListItem>
            {/* END TO SETUP TERMSOFSERVICE VIEW */}

            {/* BEGIN TO SETUP SUPPORT VIEW */}
             <ListItem style={styles.list_item} onPress={()=>alert("Support button clicked.")}>
               <View>
                 <Text style={styles.list_item_text}>Support</Text>
               </View>
               <View style={styles.list_right}>
                 <TouchableOpacity>
                 {
                   (I18nManager.isRTL)
                   ?
                       <Icon name="ios-arrow-back" style={styles.arrow_forword}/>
                   :
                       <Icon name="ios-arrow-forward" style={styles.arrow_forword}/>
                 }
                 </TouchableOpacity>
               </View>
             </ListItem>
            {/* END TO SETUP SUPPORT VIEW */}

            {/* BEGIN TO SETUP LOGOUT VIEW */}
             <ListItem style={styles.list_footer} onPress={()=>alert("Logout button clicked.")}>
               <Text style={styles.list_footer_text}>Logout</Text>
             </ListItem>
            {/* END TO SETUP LOGOUT VIEW */}
         </List>
          {/* END TO SETUP DETAILS VIEW */}
       </Content>
    </Container>

    );
  }
}
// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
logosec:{
	height: (Dimensions.get("window").height*0.095),
	marginTop: (Platform.OS === 'ios')? 0 : (Dimensions.get("window").height*0.035),
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'row'
},
back_arrow: {
	width: 30,
  justifyContent: 'center',
  alignItems: 'flex-start'
},
slidesec:{
	height: (Dimensions.get("window").height*0.905),
	position: 'relative',
	backgroundColor: '#e6e6e6',
},
edit:{ color: '#fff', fontSize: 17},
header: {
	backgroundColor: '#ff6347',
	height: 56,
	width: Dimensions.get("window").width,
	flexDirection: 'row',
	borderBottomColor: '#2d324f',
  paddingTop: (Platform.OS === 'ios')? 5 : 0,
	elevation: 0
},
left: {
  flex: 1,
  paddingTop: (Platform.OS === 'ios')? 15 : 0,
 },
body: {
  flex: 2,
  alignItems: 'center',
 },
right: {
  flex: 1,
  paddingTop: (Platform.OS === 'ios')? 15 : 0,
 },
header_title: {
  color: 'white',
  fontFamily:font_type.FontBold,
  paddingTop: (Platform.OS === 'ios')? 15 : 0,
  fontSize : 17,
  letterSpacing:0.7
 },
profile_header_main: {
	backgroundColor: '#ff6347',
	height:(Dimensions.get("window").height * 0.29),
	alignItems: 'center'
 },
profile_image_sec: {
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'row',
	paddingTop: (Dimensions.get("window").height * 0.03)
},
profile_image: {
	height:(Dimensions.get("window").height * 0.14),
	width:(Dimensions.get("window").height * 0.14),
	marginHorizontal: (Dimensions.get("window").width * 0.08),
	borderRadius: (Dimensions.get("window").height * 0.07),
	borderWidth: 2.5,
	borderColor: 'white',
	resizeMode: 'cover'
},
active_button: {
	height:(Dimensions.get("window").height * 0.07),
	width:(Dimensions.get("window").height * 0.07),
	borderRadius:(Dimensions.get("window").height * 0.035),
	backgroundColor: '#0691ce',
	alignItems: 'center',
	justifyContent: 'center',
	overflow: 'hidden'
},
normal_button: {
	height:(Dimensions.get("window").height * 0.07),
	width:(Dimensions.get("window").height * 0.07),
	borderRadius:(Dimensions.get("window").height * 0.035),
	borderWidth: 0.5,
	borderColor: 'white',
	alignItems: 'center',
	justifyContent: 'center',
	overflow: 'hidden'
},
name:{
	fontFamily: font_type.FontBold,
	fontSize: 18,
	color: 'white',
	marginTop:(Dimensions.get("window").height * 0.018)
},
details:{
	backgroundColor: 'white',
	paddingLeft: (Dimensions.get("window").width*0.005)
 },
list_item: {
	justifyContent: 'space-between',
	height:(Dimensions.get("window").height*0.076),
	borderColor: '#e5e5e5'
},
list_item_text: {
	color:'#b7b7b7',
	fontFamily:font_type.FontLight,
	fontSize:15
},
list_right: {
	flexDirection:'row',
	justifyContent: 'center',
	alignItems: 'center'
},
list_right_email: {
	color:'#6f6f6f',
	fontFamily:font_type.FontLight,
	fontSize:15,
	bottom:2
},
arrow_forword: {
	color:'#d6d6d6',
	paddingLeft: I18nManager.isRTL ? 0 : (Dimensions.get("window").width*0.02),
	paddingRight: I18nManager.isRTL ? (Dimensions.get("window").width*0.02) : 0,
	fontSize: 20
},
list_footer: {
	justifyContent: 'center',
	height:(Dimensions.get("window").height*0.076),
	borderColor: 'transparent'
},
list_footer_text: {
	color:'#0691ce',
	fontFamily:font_type.FontLight,
	fontSize:15
},
});
// END TO MAKE STYLE
