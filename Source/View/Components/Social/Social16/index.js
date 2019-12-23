import React, { Component } from 'react';
import { Text,Image,StatusBar,Platform,ImageBackground,Dimensions,TouchableOpacity,ListView,I18nManager,StyleSheet} from 'react-native';
import { Container, Button, Right, Left, Content, Header, Body, Icon, Segment } from 'native-base';
import { View} from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
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


export default class Social16 extends Component {

  constructor(props) {
 		super(props);

    //BEGIN TO SETUP DATAOBJECTS
    const dataObjects = [
      {
        id: 1,
        cardBgImage: GlobalInclude.Image1,
        likeCount: 12,
        likeUserImages: [
          {img:GlobalInclude.Image2},
          {img:GlobalInclude.Image3},
          {img:GlobalInclude.Image4},
        ]
      },
      {
        id: 2,
        cardBgImage: GlobalInclude.Image5,
        likeCount: 1,
        likeUserImages: [
          {img:GlobalInclude.Image6},
        ]
      },
      {
        id: 3,
        cardBgImage: GlobalInclude.Image7,
        likeCount: 1,
        likeUserImages: [
          {img:GlobalInclude.Image8},
        ]
      },
      {
        id: 4,
        cardBgImage: GlobalInclude.Image9,
        likeCount: 2,
        likeUserImages: [
          {img:GlobalInclude.Image10},
          {img:GlobalInclude.Image1},
        ]
      },
      {
        id: 5,
        cardBgImage:GlobalInclude.Image2,
        likeCount: 2,
        likeUserImages: [
          {img:GlobalInclude.Image3},
          {img:GlobalInclude.Image4},
        ]
      },
      {
        id: 6,
        cardBgImage:GlobalInclude.Image5,
        likeCount: 5,
        likeUserImages: [
          {img:GlobalInclude.Image6},
          {img:GlobalInclude.Image7},
          {img:GlobalInclude.Image8},
        ]
      }
    ];
    //END TO SETUP DATAOBJECTS

    //BEGIN TO SETUP ROWLIST DATA
    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged})
	  this.state = {
      dataSource: ds.cloneWithRows(dataObjects),
			segment: 1,
      data: [
        {
          id: 1,
          name: 'Lorem Ipsum',
          post: 'Lorem Ipsum',
          isSelected: true,
          profileImg: GlobalInclude.Image2,
        },
        {
          id: 2,
          name: 'Lorem Ipsum',
          post: 'Lorem Ipsum',
          isSelected: false,
          profileImg: GlobalInclude.Image3,
        },
        {
          id: 3,
          name: 'Lorem Ipsum',
          post: 'Lorem Ipsum',
          isSelected: false,
          profileImg: GlobalInclude.Image4,
        },
        {
          id: 4,
          name: 'Lorem Ipsum',
          post: 'Lorem Ipsum',
          isSelected: false,
          profileImg:GlobalInclude.Image5,
        },
        {
          id: 5,
          name: 'Lorem Ipsum',
          post: 'Lorem Ipsum',
          isSelected: false,
          profileImg: GlobalInclude.Image6,
        },
        {
          id: 6,
          name: 'Lorem Ipsum',
          post: 'Lorem Ipsum',
          isSelected: false,
          profileImg: GlobalInclude.Image7,
        },
      ],
    };
    //END TO SETUP ROWLIST DATA
 	}

  //BEGIN TO SETUP RENDERPHOTO
	_renderPhoto(rowData) {
    return(
      <View style={styles.row_main}>
      {/* BEGIN TO SETUP IMAGEBACKGROUND VIEW */}
        <ImageBackground source={rowData.cardBgImage} style={styles.image_bg}>
          <View style={styles.card_content}>
          {/* BEGIN TO SETUP LIKE VIEW */}
            <TouchableOpacity style={styles.like_image} onPress={()=>alert("Like")}>
              <FontAwesome name="heart" size={15} color="#FFFFFF" />
            </TouchableOpacity>
          {/* END TO SETUP LIKE VIEW */}
            <Text style={styles.like_count_text}>{rowData.likeCount}</Text>
          {/* BEGIN TO SETUP PROFILE VIEW */}
            <Right>
            <View style={styles.profile_container}>
              {
                rowData.likeUserImages.map((item, index)=>{
                  return(
                    <View key={index} style={styles.profile_image_view}>
                      <Image style={styles.profile_img} source={item.img}/>
                    </View>
                  )
                })
              }
            </View>
            </Right>
          {/* END TO SETUP PROFILE VIEW */}
          </View>
          </ImageBackground>
        {/* END TO SETUP IMAGEBACKGROUND VIEW */}
      </View>
    )
  }
  //END TO SETUP RENDERPHOTO


  //BEGIN TO SETUP CHANGEITEM
  _fnChangeItem(listId){
      const newArray = this.state.data;
      for(var i = 0 ; i< this.state.data.length; i++){
       if(this.state.data[i].id == listId){
         const newArray1 = [];
         for(var i = 0 ; i< this.state.data.length; i++){
           if(this.state.data[i].id == listId){
             newArray1.push({
                 id: this.state.data[i].id,
                 name: this.state.data[i].name,
                 post: this.state.data[i].post,
                 isSelected: !this.state.data[i].isSelected,
                 profileImg: this.state.data[i].profileImg,
               },
             );
           } else {
             newArray1.push({
                 id: this.state.data[i].id,
                 name: this.state.data[i].name,
                 post: this.state.data[i].post,
                 isSelected: this.state.data[i].isSelected,
                 profileImg: this.state.data[i].profileImg,
               },
             );
           }
         }

        this.setState({ data: newArray1 });
         console.log(newArray1);
       }
     }
  }
  //END TO SETUP CHANGEITEM

  //BEGIN TO SETUP RENDERACTIVECOMPONENT
  _renderActiveComponent = () => {
    const { segment } = this.state;
    if(segment === 1) {
       return (
          <View style={styles.timesheetList}>
            <ListView
               contentContainerStyle={styles.list_content_photo}
               dataSource={this.state.dataSource}
               renderRow={this._renderPhoto.bind(this)}
               enableEmptySections
               pageSize={4}/>
          </View>

       )
    }
    if(segment === 2) {
      return (
        <Content>
        <View style={styles.people_main_view}>
        <View style={styles.list_content_people}>
        {
          this.state.data.map((item, index) => {
            return (
              <View style={styles.row_main_people} key={index}>
                <View style={styles.image_shadow}>
                  <Image source={item.profileImg} style={styles.user_image}/>
                </View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.post}>{item.post}</Text>
                {
                  (item.isSelected == true) ?
                  <TouchableOpacity style={styles.follow_bg_selected} onPress = {() => this._fnChangeItem(item.id)}><Text style={styles.follow_txt_selected}>Follow</Text></TouchableOpacity> :
                  <TouchableOpacity style={styles.follow_bg_not_selected} onPress = {() => this._fnChangeItem(item.id)}><Text style={styles.follow_txt_not_selected}>Follow</Text></TouchableOpacity>
                }
              </View>
            )
          })
        }
        </View>
        </View>
        </Content>
      )
    }
  }
  //END TO SETUP RENDERACTIVECOMPONENT

  render(){

    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW

    return(
      <Container style={styles.main}>
    {/* BEGIN TO SETUP HEADER VIEW */}
      <Header style={styles.header}>
      {/* BEGIN TO SETUP LEFT VIEW */}
          <Left style={styles.left}>
            <TouchableOpacity style={styles.back_arrow} onPress={()=>this.props.navigation.goBack()}>
            {
              (I18nManager.isRTL)
              ?
                  <MaterialIcons name="chevron-right" size={25} color='white'/>
              :
                  <MaterialIcons name="chevron-left" size={25} color='white'/>
            }
            </TouchableOpacity>
          </Left>
      {/* END TO SETUP LEFT VIEW */}

      {/* BEGIN TO SETUP BODY VIEW */}
          <Body style={styles.body}>
            <Text style={styles.text_title}>Timeline</Text>
          </Body>
      {/* END TO SETUP BODY VIEW */}

      {/* BEGIN TO SETUP RIGHT VIEW */}
          <Right style={styles.right}>
            <TouchableOpacity onPress={()=>alert("Search")}>
              <Ionicons name="ios-search" size={25} color='white'/>
            </TouchableOpacity>
          </Right>
      {/* END TO SETUP RIGHT VIEW */}
      </Header>
    {/* END TO SETUP HEADER VIEW */}
          <View style={styles.segment_view}>
            <Segment style={styles.segment_tab_sec}>
            {/* BEGIN TO SETUP PHOTO VIEW */}
                <Button
                  style={this.state.segment === 1 ? styles.selected_segment_tab : styles.segment_tab}
                  active={(this.state.segment === 1) ? true : false}
                  onPress={() => this.setState({segment: 1})} >
                  <Text style={this.state.segment === 1 ? styles.active_tab : styles.normal_tab}>Photo</Text>
                </Button>
            {/* END TO SETUP PHOTO VIEW */}

            {/* BEGIN TO SETUP PEOPLE VIEW */}
                <Button
                  style={this.state.segment === 2 ? styles.selected_segment_tab : styles.segment_tab}
                  active={(this.state.segment === 2) ? true : false}
                  onPress={() => this.setState({segment: 2})} >
                  <Text style={this.state.segment === 2 ? styles.active_tab : styles.normal_tab}>People</Text>
                </Button>
            {/* END TO SETUP PEOPLE VIEW */}
            </Segment>
          </View>

        <View style={styles.segments_screen_sec}>
          {this._renderActiveComponent()}
        </View>
      </Container>

    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ff6347',
    height: Dimensions.get("window").height * 0.1,
    borderBottomWidth: 0,
    paddingTop: (Dimensions.get("window").height * 0.03),
    elevation: 0,
    paddingRight: (Dimensions.get("window").width * 0.05),
  },
  left: {
    flex: 0.5,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  body: {
    flex: 3,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  back_arrow:{
    width: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  text_title: {
    color: 'white',
    fontSize: moderateScale(16),
    marginTop: (Dimensions.get("window").height * 0.001),
    alignSelf: 'center',
    fontFamily: font_type.FontLight,
  },
  right: {
    flex: 0.5
  },
  container: {
      flex: 1,
  },
  main: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: "#F2F2F2",
    flexDirection: 'column'
  },
  segment_tab_sec: {
    height: (Dimensions.get("window").height * 0.042),
    width: (Dimensions.get("window").width * 0.55),
    marginTop: (Dimensions.get("window").height * 0.01),
    marginBottom: (Dimensions.get("window").height * 0.02),
    borderRadius: (Dimensions.get("window").height * 0.042),
    borderWidth:2,
    borderColor: '#D3D3D3',
    backgroundColor: '#D3D3D3'
  },
  selected_segment_tab: {
    height: (Dimensions.get("window").height * 0.042),
    width: (Dimensions.get("window").width * 0.275),
    borderRadius: (Dimensions.get("window").height * 0.042),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(0,0,0,0)',
    borderWidth:2,
		overflow: 'hidden'
  },
  segment_tab: {
    height: (Dimensions.get("window").height * 0.042),
    width: (Dimensions.get("window").width * 0.275),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(0,0,0,0)',
    borderWidth:2,
		overflow: 'hidden'
  },
  active_tab: {
    fontSize: moderateScale(15),
    fontFamily: font_type.FontBold,
    color: '#2d324f'
  },
  normal_tab: {
    fontSize: moderateScale(15),
    fontFamily: font_type.FontBold,
    color: '#2d324f'
  },
  list_content_photo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal:(Dimensions.get("window").width * 0.025),
    marginVertical:(Dimensions.get("window").height * 0.015),
    alignItems:'flex-start',
    alignContent:'flex-start',
    justifyContent: 'space-between',
  },
  row_main:{
    backgroundColor:'rgba(0,0,0,0.5)',
    width: (Dimensions.get("window").width * 0.44),
    height: (Dimensions.get("window").width * 0.445),
    margin:(Dimensions.get("window").width * 0.015),
    alignItems:'flex-start',
    alignContent:'flex-start',
  },
  image_bg: {
    width: (Dimensions.get("window").width * 0.445),
    height: (Dimensions.get("window").width * 0.445)
  },
  card_content: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    bottom:0,
    position: 'absolute',
    marginLeft: (Dimensions.get("window").width * 0.03),
    marginRight: (Dimensions.get("window").width * 0.04)
  },
  profile_container: {
    flexDirection:'row',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: (Dimensions.get("window").height * 0.01)
  },
  profile_img: {
    width: (Dimensions.get("window").width * 0.065),
    height: (Dimensions.get("window").width * 0.065),
    borderRadius: (Dimensions.get("window").width * 0.0325),
    borderWidth: 1,
    borderColor: 'white',
    resizeMode: 'cover',
  },
  like_count_text: {
    fontFamily: font_type.FontLight,
    fontSize: moderateScale(16),
    marginLeft: (Dimensions.get("window").width) * 0.015,
    color: 'white',
    ...Platform.select({
        ios: {
            marginBottom: (Dimensions.get("window").height * 0.01)
        },
        android: {
            marginBottom: (Dimensions.get("window").height * 0.01)
        }
    }),
  },
  like_image: {
    ...Platform.select({
        ios: {
            marginBottom: (Dimensions.get("window").height * 0.015),
        },
        android: {
            marginBottom: (Dimensions.get("window").height * 0.015),
        }
    }),
  },
  list_content_people: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems:'flex-start',
    alignContent:'flex-start',
    justifyContent: 'space-between'
  },
  row_main_people: {
    width: (Dimensions.get("window").width * 0.5),
    height: (Dimensions.get("window").width * 0.5),
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'flex-start',
    borderColor: '#d7d7d7',
    borderWidth: 0.5
  },
  image_shadow: {
    width: (Dimensions.get("window").height * 0.1),
    height: (Dimensions.get("window").height * 0.1),
    borderRadius: (Dimensions.get("window").height * 0.05),
  	elevation: 5,
  	shadowColor: '#000',
  	shadowOpacity: 0.1,
  	shadowRadius: (Dimensions.get("window").width * 0.01),
  	shadowOffset: {
  		height: 0,
  		width: 0
  	},
  },
  user_image: {
    width: (Dimensions.get("window").height * 0.1),
    height: (Dimensions.get("window").height * 0.1),
    resizeMode: 'cover',
    borderRadius: (Dimensions.get("window").height * 0.05),
    borderWidth: 2,
    borderColor: 'white',
  },
  name: {
    fontSize: moderateScale(16),
    fontFamily: font_type.FontBold,
    color: '#6f6f6f',
    marginTop: (Dimensions.get("window").height * 0.01)
  },
  post: {
    fontSize:moderateScale(12),
    fontFamily: font_type.FontLight,
    color: '#b7b7b7',
    marginTop: (Dimensions.get("window").height * 0.002)
  },
  follow_bg_not_selected: {
    width: (Dimensions.get("window").width) * 0.16,
    height: (Dimensions.get("window").height) * 0.030,
    borderRadius: (Dimensions.get("window").height) * 0.045,
    borderWidth: 1,
    borderColor: "#0691ce",
    justifyContent:'center',
    marginTop: (Dimensions.get("window").height * 0.02)
  },
  follow_bg_selected: {
    width: (Dimensions.get("window").width) * 0.16,
    height: (Dimensions.get("window").height) * 0.030,
    borderRadius: (Dimensions.get("window").height) * 0.045,
    backgroundColor: "#0691ce",
    justifyContent:'center',
    marginTop: (Dimensions.get("window").height * 0.02)
  },
  follow_txt_selected: {
    fontSize: moderateScale(11),
    fontFamily: font_type.FontLight,
    color: 'white',
    alignSelf: 'center',
  },
  follow_txt_not_selected: {
    fontSize: moderateScale(11),
    fontFamily: font_type.FontLight,
    color: "#0691ce",
    alignSelf: 'center',
  },
  segments_screen_sec:{
    flex: 1
  },
  profile_image_view:{
    width: (Dimensions.get("window").width) * 0.042
  },
  people_main_view:{
    width: Dimensions.get("window").width
  },
  segment_view:{
    backgroundColor: '#2d324f',
    width: Dimensions.get("window").width,
    alignItems:'center'
  },
});
// END TO MAKE STYLE
