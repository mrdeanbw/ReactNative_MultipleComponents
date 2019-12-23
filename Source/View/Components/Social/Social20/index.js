import React, { Component } from "react";
import {Platform,StyleSheet,Text,View,StatusBar,TouchableOpacity,Dimensions} from "react-native";
import { Container } from "native-base";
import {Scene,Router,Actions,Reducer,Overlay,Tabs,Stack,Lightbox} from "react-native-router-flux";
import TabIcon from "./TabIcon";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import NearBy from "./screens/NearBy.js";
import NearByDetail from "./screens/NearByDetail.js";
import Message from "./screens/Message.js";
import PersonalChat from "./screens/PersonalChat.js";
import Discovery from "./screens/Discovery.js";
import Favorite from "./screens/Favorite.js";
import Filter from "./screens/Filter.js";
import Profile from "./screens/Profile.js";

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

//BEGIN TO SETUP REDUCERCREATE
const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log("ACTION:", action);
    return defaultReducer(state, action);
  };
};
//END TO SETUP REDUCERCREATE

//BEGIN TO SETUP GETSCENESTYLE
const getSceneStyle = () => ({
  backgroundColor: "#F5FCFF",
  shadowOpacity: 1,
  shadowRadius: 3
});
//END TO SETUP GETSCENESTYLE

const prefix = Platform.OS === "android" ? "mychat://mychat/" : "mychat://";

 //BEGIN TO SETUP ONBACKPREE
const onBackPress = () => {
  if (Actions.state.index !== 0) {
    return false;
  }
  Actions.pop();
  return true;
};
 //END TO SETUP ONBACKPREE

export default class Example extends Component {

  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        {/* BEGIN TO SETUP BACK VIEW */}
          <TouchableOpacity
            style={{position: "absolute",top: Dimensions.get("window").height * 0.042,left: 30,zIndex: 1111111}}
            onPress={() => this.props.navigation.goBack()}>
            <FontAwesome name="home" size={30} color="white" />
          </TouchableOpacity>
        {/* END TO SETUP BACK VIEW */}

        {/* BEGIN TO SETUP ROUTER VIEW */}
          <Router
            createReducer={reducerCreate}
            getSceneStyle={getSceneStyle}
            uriPrefix={prefix}
            backAndroidHandler={onBackPress}>
            <Overlay key="overlay">
              <Lightbox key="lightbox">
                <Stack hideNavBar key="root" titleStyle={{ alignSelf: "center" }}>
                 {/* BEGIN TO SETUP PERSONALCHAT VIEW */}
                  <Scene key="tab_2_2" component={PersonalChat} hideNavBar />
                 {/* END TO SETUP PERSONALCHAT VIEW */}

                 {/* BEGIN TO SETUP FILTER VIEW */}
                  <Scene key="tab_3_2" component={Filter} hideNavBar />
                 {/* END TO SETUP FILTER VIEW */}

                 {/* BEGIN TO SETUP MAINTAB VIEW */}
                  <Scene hideNavBar panHandlers={null} initial key="mainTab">
                  {/* BEGIN TO SETUP TAB VIEW */}
                    <Tabs
                      key="tabbar"
                      swipeEnabled={false}
                      showLabel={false}
                      tab_bar_style={styles.tab_bar_style}
                      activeBackgroundColor="white"
                      inactiveBackgroundColor="white"
                      tabBarPosition={"bottom"}>
                    {/* BEGIN TO SETUP NEARBY VIEW */}
                      <Stack
                        key="tab_1"
                        title="Nearby"
                        tabBarLabel="TAB #1"
                        inactiveBackgroundColor="#FFF"
                        activeBackgroundColor="#DDD"
                        icon={TabIcon}
                        titleStyle={{ color: "green", alignSelf: "center" }}
                        initial>
                        <Scene
                          key="tab1_1"
                          component={NearBy}
                          onRight={() => alert("Right button")}
                          rightTitle="Right"
                          hideNavBar/>

                        <Scene
                          key="tab1_2"
                          component={NearByDetail}
                          hideNavBar
                          titleStyle={{ color: "black", alignSelf: "center" }}/>
                      </Stack>
                    {/* END TO SETUP NEARBY VIEW */}

                    {/* BEGIN TO SETUP MESSAGE VIEW */}
                      <Stack key="tab_2" title="Message" icon={TabIcon}>
                        <Scene key="tab_2_1" component={Message} hideNavBar />
                      </Stack>
                    {/* END TO SETUP MESSAGE VIEW */}

                    {/* BEGIN TO SETUP DISCOVERY VIEW */}
                      <Stack key="tab_3" title="Discovery" icon={TabIcon}>
                        <Scene
                          key="tab_3_1"
                          component={Discovery}
                          title="Discovery"
                          icon={TabIcon}
                          hideNavBar/>
                      </Stack>
                    {/* END TO SETUP DISCOVERY VIEW */}

                    {/* BEGIN TO SETUP FAVORITE VIEW */}
                      <Stack key="tab_4" title="Favorite" icon={TabIcon}>
                        <Scene
                          key="tab_4_1"
                          component={Favorite}
                          title="Favorite"
                          hideNavBar
                          icon={TabIcon}/>
                      </Stack>
                     {/* END TO SETUP FAVORITE VIEW */}

                     {/* BEGIN TO SETUP PROFILE VIEW */}
                      <Stack key="tab_5" title="Profile" icon={TabIcon}>
                        <Scene
                          key="tab_5_1"
                          component={Profile}
                          title="Profile"
                          icon={TabIcon}
                          hideNavBar/>
                      </Stack>
                     {/* END TO SETUP PROFILE VIEW */}
                    </Tabs>
                  {/* END TO SETUP TAB VIEW */}
                  </Scene>
                {/* END TO SETUP MAINTAB VIEW */}
                </Stack>
              </Lightbox>
            </Overlay>
          </Router>
        {/* END TO SETUP ROUTER VIEW */}
      </Container>
    );
  }
}

//BEGIN TO SETUP STYLE
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  },
  tab_bar_style: {
    backgroundColor: "#eee"
  },
});
//END TO SETUP STYLE
