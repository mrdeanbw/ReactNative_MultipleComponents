import React, { Component } from "react";
import {Image,View,TouchableOpacity,Alert,TextInput,ScrollView,Modal,StyleSheet,Dimensions} from "react-native";
import {Button,Text,Container,Icon} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
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

export default class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      modalVisible: false,
      modalDeleteVisible: false,
      itemName: "",
      SimapleArray: [],
      deleteItemId: ""
    };
  }

  //BEGIN TO SETUP HANDLECLICK METHOD
  _handleClick() {
    var txt = this.state.itemName;
    this.setState({ mytext: this.state.itemName });
    if (txt.length != 0 && txt.trim() != "") {
      this.state.SimapleArray.push({
        id: this.state.cou,
        title: this.state.itemName
      });
      this.setState({
        cou: this.state.count + 1,
        itemName: ""
      });
      this.toggleModals(false);
    }
  }
  //END TO SETUP HANDLECLICK METHOD

  //BEGIN TO SETUP HANDLEADDCANCELCLICK METHOD
  _handleAddCancleClick() {
    this.setState({ modalVisible: false });
    this.setState({ itemName: "" });
  }
  //END TO SETUP HANDLEADDCANCELCLICK METHOD

  //BEGIN TO SETUP TOGGLEMODAL METHOD
  toggleModals(visible) {
    this.setState({ modalVisible: visible });
  }
  //END TO SETUP TOGGLEMODAL METHOD

  //BEGIN TO SETUP DELETE TOGGLEMODAL METHOD
  toggleDeleteModal(visible, id) {
    this.setState({ deleteItemId: id });
    this.setState({ modalDeleteVisible: visible });
  }
  //END TO SETUP DELETE TOGGLEMODAL METHOD

  //BEGIN TO SETUP DELETE ITEM METHOD
  _renderDeleteItem(index, visible) {
    var newData = this.state.SimapleArray.slice(); //copy array
    newData.splice(index, 1); //remove element
    for (var i = 0; i < newData.length; i++) {
      newData[i].index = i;
    }
    this.setState({ SimapleArray: newData });
    this.setState({ modalDeleteVisible: visible });
  }
  //END TO SETUP DELETE ITEM METHOD

  render() {
    return (
      <Container style={styles.mainview}>
      {/* BEGIN TO SETUP FILTER VIEW */}
        <View style={styles.filter_header}>
          <Text style={styles.filter}>FILTER</Text>
          <View style={styles.filter_icon}>
            <Image source={require('./icon_filter.png')} style={{ height: 15, width: 15, rotation: 90 }}/>
          </View>
        </View>
      {/* END TO SETUP FILTER VIEW */}

      {/* BEGIN TO SETUP TITLE VIEW */}
        <ScrollView>
          <View style={styles.list_content}>
            {this.state.SimapleArray.map((item, index) => {
              return (
                <View style={styles.row_main} key={index}>
                  <Text style={styles.list_item}>{item.title}</Text>
                  <TouchableOpacity onPress={() => {this.toggleDeleteModal(true, item.id)}}
                    style={{ flexDirection: "row" }}>
                    <View style={styles.row_vertical_divider} />
                    <Ionicons name="ios-close" color={"#fff4"} size={25} />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </ScrollView>
      {/* END TO SETUP TITLE VIEW */}

        <View style={styles.bottom_view}>
          <View style={styles.bottom_view_bg} />
      {/* BEGIN TO SETUP ADD VIEW */}
          <TouchableOpacity onPress={() => {this.toggleModals(true)}} style={styles.add_view}>
            <Text style={styles.add_text}>Add</Text>
            <MaterialIcons
              name="add"
              color={"white"}
              size={moderateScale(22)}/>
          </TouchableOpacity>
      {/* END TO SETUP ADD VIEW */}

      {/* BEGIN TO SETUP ADDMODAL VIEW */}
          <View style={{flexDirection: "column",height: Dimensions.get("window").height,width: Dimensions.get("window").width}}>
            <Modal
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => {
              this.state.modalVisible(false)}}>
              <View style={styles.modal_view}>
                <View style={styles.modal}>
                  <Text style={styles.add_item_title}> Add Item </Text>
                {/* BEGIN TO SETUP ADDINPUT VIEW */}
                  <View style={styles.add_item_bg}>
                    <TextInput
                      style={styles.input_email}
                      editable={true}
                      autoCapitalize="none"
                      autoCorrect={false}
                      placeholder="Enter Item Name.."
                      placeholderTextColor="#22a7f0"
                      value={this.state.itemName}
                      underlineColorAndroid="transparent"
                      onChangeText={text => this.setState({ itemName: text })}/>
                  </View>
                {/* END TO SETUP ADDINPUT VIEW */}
                  <View style={styles.dialog_horizontal_divider} />

                {/* BEGIN TO SETUP ADD AND CANCEL VIEW */}
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity onPress={() => this._handleClick()}>
                      <Text style={styles.button_bg}>ADD</Text>
                    </TouchableOpacity>

                    <View style={styles.dialog_vertical_divider} />
                    <TouchableOpacity onPress={() => { this._handleAddCancleClick();}}>
                      <Text style={styles.button_bg}>CANCEL</Text>
                    </TouchableOpacity>
                    </View>
                  </View>
                {/* END TO SETUP ADD AND CANCEL VIEW */}
              </View>
            </Modal>
          </View>
      {/* END TO SETUP ADDMODAL VIEW */}

      {/* BEGIN TO SETUP DELETEMODAL VIEW */}
          <View
            style={{flexDirection: "column",height: Dimensions.get("window").height,width: Dimensions.get("window").width}}>
            <Modal
              transparent={true}
              visible={this.state.modalDeleteVisible}
              onRequestClose={() => {
                this.state.modalDeleteVisible(false);
              }}>
              <View style={styles.modal_view}>
                <View style={styles.modal}>
                  <Text style={styles.add_item_title}> Delete Confirmation... </Text>
                  <Text style={styles.delete_text}>Are you sure, you want to delete this item?</Text>

                  <View style={styles.dialog_horizontal_divider} />

                {/* BEGIN TO SETUP DELETE AND CANCEL VIEW */}
                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity onPress={() =>this._renderDeleteItem(this.state.deleteItemId, false)}>
                        <Text style={styles.button_bg}>DELETE</Text>
                      </TouchableOpacity>

                      <View style={styles.dialog_vertical_divider} />

                      <TouchableOpacity onPress={() => {this.toggleDeleteModal(false, "")}}>
                        <Text style={styles.button_bg}>CANCEL</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                {/* END TO SETUP DELETE AND CANCEL VIEW */}
              </View>
            </Modal>
          </View>
        {/* END TO SETUP DELETEMODAL VIEW */}

        {/* BEGIN TO SETUP BOTTOM VIEW */}
          <View style={styles.profile_container}>
            <Image source={GlobalInclude.Image8} style={styles.profile_image} />
            <View style={styles.profile_detail}>
              <View style={styles.profile_header}>
                <Text style={styles.name}>Lorem Ipsum</Text>
                <TouchableOpacity onPress={() => alert("Settings Button Click")}>
                  <Ionicons
                    name="ios-settings"
                    color={"#6c7084"}
                    size={moderateScale(16)}/>
                </TouchableOpacity>
              </View>
              <Text style={styles.place}>Lorem Ipsum</Text>
            </View>
          </View>
        {/* END TO SETUP BOTTOM VIEW */}
        </View>
      </Container>
    );
  }
}
// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  drawercontainer: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "white"
  },
  mainview: {
    backgroundColor: "#ff6347",
    height: Dimensions.get("window").height,
    paddingHorizontal: Dimensions.get("window").width * 0.06,
    flexDirection: "column"
  },
  profile_container: {
    bottom: Dimensions.get("window").height * 0.035,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "absolute"
  },
  profile_image: {
    height: Dimensions.get("window").height * 0.055,
    width: Dimensions.get("window").height * 0.055,
    borderRadius: Dimensions.get("window").height * 0.0275,
    borderWidth: Dimensions.get("window").width * 0.006,
    borderColor: "white"
  },
  profile_detail: {
    marginLeft: Dimensions.get("window").width * 0.015
  },
  profile_header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("window").width * 0.35
  },
  name: {
    fontFamily: font_type.FontBold,
    fontSize: moderateScale(14),
    color: "white",
    backgroundColor: "transparent"
  },
  place: {
    fontFamily: font_type.FontLight,
    fontSize: moderateScale(10),
    color: "#797a87",
    backgroundColor: "transparent",
    marginTop: Dimensions.get("window").height * 0.0005,
    textAlign: "left"
  },
  filter_header: {
    flexDirection: "row",
    marginTop: Dimensions.get("window").height * 0.2
  },
  filter_icon: {
    transform: [{ rotate: "270deg" }],
    height: Dimensions.get("window").height * 0.045,
    width: Dimensions.get("window").height * 0.045,
    borderRadius: Dimensions.get("window").height * 0.0225,
    marginLeft: Dimensions.get("window").width * 0.05,
    backgroundColor: "#424761",
    alignItems: "center",
    justifyContent: "center"
  },
  filter: {
    color: "#fff",
    fontSize: moderateScale(22),
    fontFamily: font_type.FontBold
  },
  list_content: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: Dimensions.get("window").height * 0.045
  },
  row_main: {
    borderRadius: Dimensions.get("window").height * 0.025,
    marginBottom: Dimensions.get("window").height * 0.015,
    paddingHorizontal: Dimensions.get("window").height * 0.025,
    paddingVertical: Dimensions.get("window").height * 0.009,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#282d47"
  },
  list_item: {
    fontFamily: font_type.FontLight,
    fontSize: moderateScale(16),
    color: "#FFFFFF",
    marginRight: Dimensions.get("window").height * 0.015,
    overflow: "hidden",
    width: Dimensions.get("window").width * 0.5,
    textAlign: "left"
  },
  bottom_view: {
    height: Dimensions.get("window").height * 0.4,
    flexDirection: "column"
  },
  add_view: {
    width: Dimensions.get("window").width * 0.25,
    height: Dimensions.get("window").height * 0.045,
    borderRadius: Dimensions.get("window").height * 0.025,
    paddingHorizontal: Dimensions.get("window").width * 0.025,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#22a7f0"
  },
  add_text: {
    color: "white",
    fontFamily: font_type.FontLight,
    fontSize: moderateScale(18)
  },
  modal_view: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#0006",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center"
  },
  modal: {
    width: Dimensions.get("window").width * 0.9,
    flexDirection: "column",
    backgroundColor: "white"
  },
  add_item_title: {
    color: "#000",
    fontSize: moderateScale(16),
    marginLeft: Dimensions.get("window").height * 0.015,
    marginTop: Dimensions.get("window").height * 0.015,
    marginBottom: Dimensions.get("window").height * 0.035,
    fontFamily: font_type.FontLight
  },
  add_item_bg: {
    marginLeft: Dimensions.get("window").height * 0.015,
    marginRight: Dimensions.get("window").height * 0.015,
    borderColor: "#000",
    borderWidth: 0.8,
    borderRadius: 5,
    marginBottom: Dimensions.get("window").height * 0.045
  },
  input_email: {
    color: "#000",
    marginLeft: Dimensions.get("window").height * 0.015,
    fontFamily: font_type.FontLight,
    paddingTop: Dimensions.get("window").height * 0.01,
    paddingBottom: Dimensions.get("window").height * 0.01
  },
  button_bg: {
    width: Dimensions.get("window").width * 0.445,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    textAlign: "center",
    paddingTop: Dimensions.get("window").height * 0.015,
    paddingBottom: Dimensions.get("window").height * 0.015,
    fontFamily: font_type.FontLight,
    fontSize: moderateScale(16)
  },
  delete_text: {
    marginLeft: Dimensions.get("window").height * 0.015,
    marginRight: Dimensions.get("window").height * 0.015,
    color: "#22a7f0",
    fontSize: moderateScale(18),
    fontFamily: font_type.FontLight,
    marginBottom: Dimensions.get("window").height * 0.045
  },
  row_vertical_divider: {
    width: 1,
    height: Dimensions.get("window").height * 0.04,
    backgroundColor: "#202439",
    marginRight: Dimensions.get("window").height * 0.008
  },
  bottom_view_bg: {
    height: 1,
    backgroundColor: "#424761",
    marginTop: Dimensions.get("window").height * 0.03,
    marginBottom: Dimensions.get("window").height * 0.03
  },
  dialog_horizontal_divider: {
    height: 2,
    backgroundColor: "#22a7f0"
  },
  dialog_vertical_divider: {
    width: 2,
    backgroundColor: "#22a7f0"
  }
});
// END TO MAKE STYLE
