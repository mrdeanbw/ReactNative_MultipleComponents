import React from "react";
import PropTypes from "prop-types";
import { Text, View, Image, StyleSheet,Dimensions } from "react-native";

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

//BEGIN TO SETUP STYLE
const styles = StyleSheet.create({
  tab_item_bg: {
    alignItems: "center",
    marginTop: Dimensions.get("window").width * 0.035,
    marginBottom: Dimensions.get("window").width * 0.035
  },
  tab_icon: {
    justifyContent: "center",
    resizeMode: "contain"
  }
});
//END TO SETUP STYLE

const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string
};

//BEGIN TO SETUP TABICON
const TabIcon = props => {
  var myTabIcon = [];
  if (props.title == "Nearby") {
    myTabIcon.push(
      <View style={styles.tab_item_bg} key={1}>
        <Image
          source={props.focused ? require('./icon_nearby_active.png') : require('./icon_nearby.png')}
          style={[{height: Dimensions.get("window").width * 0.052,width: Dimensions.get("window").width * 0.03,marginTop: -2},styles.tab_icon]}/>
        <Text style={{color: props.focused ? "#ff7354" : "grey",marginTop: Dimensions.get("window").width * 0.008,fontSize: moderateScale(13)}}>
          {props.title}
        </Text>
      </View>
    );
  } else if (props.title == "Message") {
    myTabIcon.push(
      <View key={2} style={styles.tab_item_bg}>
        <Image source={props.focused ? require('./icon_message_active.png') : require('./icon_message.png')}
          style={[{height: Dimensions.get("window").width * 0.045, width: Dimensions.get("window").width * 0.05 },styles.tab_icon]}/>
        <Text style={{color: props.focused ? "#ff7354" : "grey",marginTop: Dimensions.get("window").width * 0.008,fontSize: moderateScale(13)}}>
          {props.title}
        </Text>
      </View>
    );
  } else if (props.title == "Discovery") {
    myTabIcon.push(
      <View key={3} style={styles.tab_item_bg}>
        <Image source={props.focused ? require('./icon_discovery_active.png') :require('./icon_discovery.png')}
          style={{height: Dimensions.get("window").width * 0.045,width: Dimensions.get("window").width * 0.045,justifyContent: "center",resizeMode: "contain"}}/>
        <Text style={{color: props.focused ? "#ff7354" : "grey",marginTop: Dimensions.get("window").width * 0.008,fontSize: moderateScale(13)}}>
          {props.title}
        </Text>
      </View>
    );
  } else if (props.title == "Favorite") {
    myTabIcon.push(
      <View key={3} style={styles.tab_item_bg}>
        <Image source={props.focused ? require('./icon_favourite_active.png') :require('./icon_favourite.png')}
          style={{height: Dimensions.get("window").width * 0.046,width: Dimensions.get("window").width * 0.046,justifyContent: "center",resizeMode: "contain"}}/>
        <Text style={{color: props.focused ? "#ff7354" : "grey",marginTop: Dimensions.get("window").width * 0.008,fontSize: moderateScale(13)}}>
          {props.title}
        </Text>
      </View>
    );
  } else if (props.title == "Profile") {
    myTabIcon.push(
      <View key={3} style={styles.tab_item_bg}>
        <Image source={props.focused ? require('./icon_profile_active.png') : require('./icon_profile.png')}
          style={{height: Dimensions.get("window").width * 0.045,width: Dimensions.get("window").width * 0.045,justifyContent: "center",resizeMode: "contain"}}/>
        <Text style={{color: props.focused ? "#ff7354" : "grey",marginTop: Dimensions.get("window").width * 0.008,fontSize: moderateScale(13)}}>
          {props.title}
        </Text>
      </View>
    );
  } else {
    myTabIcon.push(
      <View key={4} style={{ alignItems: "center" }}>
        <Image style={{ width: 25, height: 25 }} source={require('./icon_profile_active.png')} />
        <Text style={{ color: props.focused ? "#ff7354" : "yellow" }}>
          {props.title}
        </Text>
      </View>
    );
  }
  return myTabIcon;
};
//END TO SETUP TABICON

TabIcon.propTypes = propTypes;
export default TabIcon;
