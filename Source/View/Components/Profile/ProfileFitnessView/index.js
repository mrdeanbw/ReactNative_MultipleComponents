import React, { Component } from 'react';
import { Text, View, Image, StatusBar,StyleSheet, Platform, ImageBackground,Dimensions,TouchableOpacity, ScrollView,BackHandler, I18nManager} from 'react-native';
import { Container, Button, Icon, Right, Header, Left, Body, Title, Content } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
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

export default class ProfileFitness extends Component {

  constructor(props) {
 		super(props);
    // BEGIN TO SETUP STATE
 		this.state = {
      isFavorite: false,
      selectedLots: 2,
    };
    // END TO SETUP STATE
 	}

  // BEGIN TO ONIMAGEPRESS METHOD
  onImagePress(id) {
    this.setState({
      selectedLots: id
    });

    if(id>1){
      const offsetX = (id * (Dimensions.get('window').width * 0.07));
      this.refs.imageList.scrollTo({ x: offsetX })
    }
    else{
      const offsetX = ((Dimensions.get('window').width * 0));
      this.refs.imageList.scrollTo({ x: offsetX })
    }
  }
  //END TO ONIMAGEPRESS METHOD

  render(){
    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW

    // BEGIN TO SETUP IMAGESLIDER DATA

    var data = [
      {
        id: 1,
        friendProfile: GlobalInclude.Image10,
      },
      {
        id: 2,
        friendProfile: GlobalInclude.Image9,
      },
      {
        id: 3,
        friendProfile: GlobalInclude.Image8,
      },
      {
        id: 4,
        friendProfile: GlobalInclude.Image7,
      },
      {
        id: 5,
        friendProfile: GlobalInclude.Image6,
      },
      {
        id: 6,
        friendProfile: GlobalInclude.Image5,
      },
      {
        id: 7,
        friendProfile: GlobalInclude.Image4,
      },
    ]
    // END TO SETUP IMAGESLIDER DATA

    return(
      <Container>
        {/* BEGIN TO SETUP IMAGE AS A BACKGROUND */}
        <ImageBackground source={GlobalInclude.Image3} style={styles.img_container}>
        {/* BEGIN TO SETUP HEADER VIEW */}
          <Header androidStatusBarColor={'transparent'} style={styles.header}>
          {/* BEGIN TO SETUP HEADER LEFT VIEW */}
            <Left style={styles.left}>
              <TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
                <Icon name={I18nManager.isRTL ? "ios-arrow-forward" : "ios-arrow-back"} style={styles.back_arrow2}/>
              </TouchableOpacity>
            </Left>
            {/* END TO SETUP HEADER LEFT VIEW */}

            {/* BEGIN TO SETUP HEADER BODY VIEW */}
            <Body style={styles.body}>
              <Title style={styles.header_title}>Profile</Title>
            </Body>
            {/* END TO SETUP HEADER BODY VIEW */}

            {/* BEGIN TO SETUP HEADER RIGHT VIEW */}
            <Right style={styles.right}>
              <Button transparent>
              </Button>
            </Right>
            {/* END TO SETUP HEADER RIGHT VIEW */}
          </Header>
        {/* END TO SETUP HEADER VIEW */}
          <View style={styles.slidesec}>
            {/* BEGIN TO SETUP NAME AND HEART ICON VIEW */}
            <View style={styles.name_bg}>
              <Text style={styles.name_txt}>Lorem Ipsum</Text>
              <TouchableOpacity  onPress={()=>this.setState({isFavorite: !this.state.isFavorite})} style={(this.state.isFavorite) ? styles.active_button : styles.normal_button}>
                <FontAwesome name="heart" size={22} color="#ff6347"/>
              </TouchableOpacity>
            </View>
            {/* END TO SETUP NAME AND HEART ICON VIEW */}

            {/* BEGIN TO SETUP ADDRESS AND LOCATION ICON VIEW */}
            <View style={styles.address_bg}>
              <View style={styles.mappin_bg}>
                <Entypo name="location-pin" size={25} color="white"/>
              </View>
              <Text style={styles.address_txt}>Lorem Ipsum</Text>
            </View>
            {/* END TO SETUP ADDRESS AND LOCATION ICON VIEW */}

            <LinearGradient locations={[0.01,0.6]} colors={['transparent', 'rgba(0,0,0,0.7)']} style={styles.shadow_bg}>
            {/* BEGIN TO SETUP DESCRIPTION VIEW */}
              <View style={styles.descrtiption_bg}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <Text style={styles.description_txt}>
                    Lorem ipsum dolor sit amet, consectetur adipisi, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                  </Text>
                </ScrollView>
              </View>
              {/* END TO SETUP DESCRIPTION VIEW */}

              {/* BEGIN TO SETUP IMAGESLIDER VIEW */}
              <View>
                <ScrollView horizontal={true} ref='imageList' showsHorizontalScrollIndicator={false} style={styles.profileimg_scroll_bg}>
                {
                  data.map((item, index)=>{
                    return(
                      <TouchableOpacity key={index} style={styles.profileimg_bg} onPress={()=>this.onImagePress(item.id)}>
                        <Image source={item.friendProfile} style={(this.state.selectedLots == item.id) ? styles.active_image : styles.normal_image}/>
                      </TouchableOpacity>
                    )
                  })
                }
                </ScrollView>
              </View>
              {/* END TO SETUP IMAGESLIDER VIEW */}
            </LinearGradient>
          </View>
        </ImageBackground>
      {/* END TO SETUP IMAGE AS A BACKGROUND */}
      </Container>

    );
  }
}
// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  slidesec:{
  	width: (Dimensions.get('window').width),
  	bottom:0,
  	justifyContent: 'flex-end',
  	position: 'absolute',
  },
  img_container: {
  	height:(Dimensions.get('window').height),
  	width:(Dimensions.get('window').width),
  	backgroundColor: 'gray'
  },
  header: {
  	backgroundColor: 'rgba(0,0,0,0)',
  	height: Dimensions.get('window').height * 0.1,
  	borderBottomWidth: 0,
  	paddingTop: (Dimensions.get('window').height * 0.05),
  	elevation: 0,
  	paddingLeft: (Dimensions.get('window').width * 0.05),
  	paddingRight: (Dimensions.get('window').width * 0.05),
  },
  left: {
    flex: 0.5,
  },
  back_arrow: {
  	width: 30,
  	justifyContent: 'center',
  	alignItems: 'flex-start'
  },
  back_arrow2:{
  	color:'white'
  },
  body: {
    flex: 3,
    alignItems: 'center',
  },
  right: {
    flex: 0.5,
  },
  header_title: {
    color: 'white',
    fontFamily: font_type.FontBold,
    fontSize : moderateScale(17),
  },
  active_button: {
  	height:(Dimensions.get('window').height * 0.06),
  	width:(Dimensions.get('window').height * 0.06),
  	borderRadius:(Dimensions.get('window').height * 0.03),
  	backgroundColor: '#0691ce',
  	borderColor: '#0691ce',
  	alignItems: 'center',
  	justifyContent: 'center'
  },
  normal_button: {
  	height:(Dimensions.get('window').height * 0.06),
  	width:(Dimensions.get('window').height * 0.06),
  	borderRadius:(Dimensions.get('window').height * 0.03),
  	borderWidth: 1.5,
  	borderColor: 'white',
  	alignItems: 'center',
  	justifyContent: 'center',
  	backgroundColor: 'transparent'
  },
  active_image: {
  	height:(Dimensions.get('window').height * 0.08),
  	width:(Dimensions.get('window').height * 0.08),
  	borderRadius:(Dimensions.get('window').height * 0.04),
  	borderWidth:1.5,
  	borderColor:'white',
  	...Platform.select({
  		ios: {
  			backgroundColor:'gray'
  		},
  	}),
  },
  normal_image: {
  	height:(Dimensions.get('window').height * 0.06),
  	width:(Dimensions.get('window').height * 0.06),
  	borderRadius:(Dimensions.get('window').height * 0.03),
  	...Platform.select({
  		ios: {
  			backgroundColor:'gray'
  		},
  	}),
  	opacity: 0.3,
  },
  name_bg: {
  	width:(Dimensions.get('window').width),
  	paddingHorizontal: (Dimensions.get('window').height * 0.03),
  	flexDirection: 'row',
  	justifyContent: 'space-between',
  	alignItems: 'center'
  },
  name_txt: {
  	color:'white',
  	fontSize: moderateScale(28),
  	fontFamily: font_type.FontBold,
  	backgroundColor:'rgba(0,0,0,0)'
  },
  address_bg:{
  	flexDirection: 'row',
  	paddingHorizontal: (Dimensions.get('window').height * 0.03),
  	justifyContent: 'flex-start',
  	alignItems: 'center',
  },
  address_txt: {
  	color:'white',
  	fontSize: moderateScale(16),
  	fontFamily:font_type.FontLight,
  	backgroundColor:'rgba(0,0,0,0)'
  },
  descrtiption_bg: {
  	height: (Dimensions.get('window').height * 0.25),
  	paddingVertical: (Dimensions.get('window').height * 0.03)
  },
  description_txt: {
  	color:'white',
  	fontSize: moderateScale(16),
  	fontFamily: font_type.FontLight,
  	backgroundColor:'rgba(0,0,0,0)',
  	textAlign: 'left'
  },
  shadow_bg: {
  	paddingHorizontal: (Dimensions.get('window').height * 0.03)
  },
  profileimg_scroll_bg: {
  	flexDirection: 'row',
    marginBottom:25
  },
  profileimg_bg: {
  	paddingBottom: (Dimensions.get('window').height * 0.03),
  	marginHorizontal:(Dimensions.get('window').width * 0.03),
  	justifyContent: 'center',
  	alignItems: 'center'
  },
  mappin_bg: {
  	marginRight:(Dimensions.get('window').height * 0.01),
  	backgroundColor: 'rgba(0,0,0,0)'
  }
});
// END TO MAKE STYLE
