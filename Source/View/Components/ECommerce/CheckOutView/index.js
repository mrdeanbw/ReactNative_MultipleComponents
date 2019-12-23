import React, { Component } from "react";
import {Text,View,Image,StyleSheet,Dimensions,StatusBar,TouchableOpacity,Platform,BackHandler,ScrollView,I18nManager,TextInput,Modal,AsyncStorage} from "react-native";
import {Content,Container,Right,Header,Left,Body,Title} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { CachedImage } from "react-native-cached-image";
import FloatingLabelInput from "../FloatingLabelInput";
import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";

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

export default class CheckOut extends Component {
  constructor(props) {
    super(props);
    // BEGIN TO SETUP STATE
    this.state = {
      selectedStep: 1,
      selectedLots: "1",
      data: [
        {
          id: 1,
          OrderID: "#1",
          Date: "0/0/0",
          Product: "Lorem Ipsume",
          Price: "$0.00",
          Status: "Lorem Ipsum"
        },
        {
          id: 2,
          OrderID: "#2",
          Date: "0/0/0",
          Product: "Lorem Ipsum",
          Price: "$0.00",
          Status: "Lorem Ipsum"
        },
        {
          id: 3,
          OrderID: "#3",
          Date: "0/0/0",
          Product: "Lorem Ipsum",
          Price: "$0.00",
          Status: "Lorem Ipsum"
        }
      ],

      paymentMethod: [
        {
          id: 0,
          paymentMethodImage: require('./icon_paypal.png'),
          paymentMethodTitle: "Paypal",
          isOpen: false
        },
        {
          id: 1,
          paymentMethodImage: require('./icon_visa.png'),
          paymentMethodTitle: "Visa",
          isOpen: false
        },
        {
          id: 2,
          paymentMethodImage: require('./icon_master_card.png'),
          paymentMethodTitle: "Master Card",
          isOpen: false
        },
        {
          id: 3,
          paymentMethodImage: require('./icon_discover.png'),
          paymentMethodTitle: "Discover",
          isOpen: false
        }
      ],

      editInfoModelVisible: false
    };
    // END TO SETUP STATE
  }

  //BEGIN TO SETUP TOGGLEEDITINFOMODAL
  toggleEditInfoModal(visible) {
    this.setState({ editInfoModelVisible: visible });
  }
  //END TO SETUP TOGGLEEDITINFOMODAL

  //BEGIN TO SETUP HANDLEEDITINFORMATIONMODAL
  _handleEditInfomationModal() {
    this.setState({ editInfoModelVisible: false });
    this.toggleEditInfoModal(true);
  }
  //END TO SETUP HANDLEEDITINFORMATIONMODAL

  //BEGIN TO SETUP ONCHECKBOXPRESS
  onCheckBoxPress(id, isOpen) {
    this.setState({
      selectedLots: id
    });

    var temp = [];

    temp = this.state.paymentMethod.slice(); //copy array

    for (var i = 0; i < temp.length; i++) {
      if (id == i) {
      if (temp[i].isOpen == false) {
          temp[i].isOpen = true;
        } else {
          temp[i].isOpen = false;
        }
      } else {
        temp[i].isOpen = false;
      }
    }
    this.setState({ paymentMethod: temp });
  }
  //END TO SETUP ONCHECKBOXPRESS

  //BEGIN TO SETUP RENDERSUBHEADER
  _renderSubHeader = () => {
    const { selectedStep } = this.state;

    if (selectedStep === 1) {
      return <Text style={styles.sub_header_title}>BILLING INFORMATION</Text>;
    }

    if (selectedStep === 2) {
      return <Text style={styles.sub_header_title}>PAYMENT METHOD</Text>;
    }

    if (selectedStep === 3) {
      return <Text style={styles.sub_header_title}>YOUR ORDER</Text>;
    }
  };
  //END TO SETUP RENDERSUBHEADER

  //BEGIN TO SETUP RENDERSELECTSTEP
  _renderSelectStep = () => {
    const { selectedStep } = this.state;

    if (selectedStep === 1) {
      return (
        <View style={[styles.step_bg, { marginBottom: Dimensions.get("window").height * 0.04 }]}>
          <View style={[styles.step_count_bg, { backgroundColor: "#ff6347" }]}>
            <Text style={styles.step_count_txt}>1</Text>
          </View>
          <View style={[styles.step_distance, { backgroundColor: "#798c9c" }]} />
          <View style={[styles.step_count_bg, { backgroundColor: "#798c9c" }]}>
            <Text style={styles.step_count_txt}>2</Text>
          </View>
          <View style={[styles.step_distance, { backgroundColor: "#798c9c" }]} />
          <View style={[styles.step_count_bg, { backgroundColor: "#798c9c" }]}>
            <Text style={styles.step_count_txt}>3</Text>
          </View>
        </View>
      );
    }

    if (selectedStep === 2) {
      return (
        <View style={[styles.step_bg, { marginBottom: Dimensions.get("window").height * 0.04 }]}>
          <View style={[styles.step_count_bg, { backgroundColor: "#9400D3" }]}>
            <Text style={styles.step_count_txt}>1</Text>
          </View>
          <View style={[styles.step_distance, { backgroundColor: "#9400D3" }]} />
          <View style={[styles.step_count_bg, { backgroundColor: "#ff6347" }]}>
            <Text style={styles.step_count_txt}>2</Text>
          </View>
          <View style={[styles.step_distance, { backgroundColor: "#798c9c" }]} />
          <View style={[styles.step_count_bg, { backgroundColor: "#798c9c" }]}>
            <Text style={styles.step_count_txt}>3</Text>
          </View>
        </View>
      );
    }

    if (selectedStep === 3) {
      return (
        <View style={[styles.step_bg, { marginBottom: Dimensions.get("window").height * 0.03 }]}>
          <View style={[styles.step_count_bg, { backgroundColor: "#9400D3" }]}>
            <Text style={styles.step_count_txt}>1</Text>
          </View>
          <View style={[styles.step_distance, { backgroundColor: "#9400D3" }]} />
          <View style={[styles.step_count_bg, { backgroundColor: "#9400D3" }]}>
            <Text style={styles.step_count_txt}>2</Text>
          </View>
          <View style={[styles.step_distance, { backgroundColor: "#9400D3" }]} />
          <View style={[styles.step_count_bg, { backgroundColor: "#ff6347" }]}>
            <Text style={styles.step_count_txt}>3</Text>
          </View>
        </View>
      );
    }
  };
  //END TO SETUP RENDERSELECTSTEP

  //BEGIN TO SETUP RENDERACTIVECOMPONENT
  _renderActiveComponent = () => {
    const { selectedStep } = this.state;



    var productOrderList = [
      {
        id: 1,
        productTile: "Lorem Ipsum",
        productPrice: "$100.00",
        size: "M",
        quantity: "2",
        color: "#212025",
        productImage: GlobalInclude.Image10
      },
      {
        id: 2,
        productTile: "Lorem Ipsum",
        productPrice: "$200.00",
        size: "XL",
        quantity: "2",
        color: "#212025",
        productImage: GlobalInclude.Image9
      }
    ];

    if (selectedStep === 1) {
      return (
        <ScrollView style={styles.content_billing_information_bg}>
          <View style={{ flexDirection: "column" }}>
            {/* BEGIN TO SETUP FIRSTNAME VIEW */}
              <View style={styles.filed_row}>
                <Text style={styles.filed_label}>First Name</Text>
                <Text style={styles.filed_info_txt}>Lorem Ipsum</Text>
              </View>
            {/* END TO SETUP FIRSTNAME VIEW */}
            <View style={styles.filed_divider} />
          </View>

          <View style={{ flexDirection: "column" }}>
            {/* BEGIN TO SETUP LASTNAME VIEW */}
              <View style={styles.filed_row}>
                <Text style={styles.filed_label}>Last Name</Text>
                <Text style={styles.filed_info_txt}>Lorem Ipsum</Text>
              </View>
            {/* END TO SETUP LASTNAME VIEW */}
            <View style={styles.filed_divider} />
          </View>

          <View style={{ flexDirection: "column" }}>
            {/* BEGIN TO SETUP PHONE VIEW */}
              <View style={styles.filed_row}>
                <Text style={styles.filed_label}>Phone</Text>
                <Text style={styles.filed_info_txt}>1234567890</Text>
              </View>
            {/* END TO SETUP PHONE VIEW */}
            <View style={styles.filed_divider} />
          </View>

          <View style={{ flexDirection: "column" }}>
            {/* BEGIN TO SETUP EMAIL VIEW */}
              <View style={styles.filed_row}>
                <Text style={styles.filed_label}>Email</Text>
                <Text style={styles.filed_info_txt}>lorem@ipsum.com</Text>
              </View>
            {/* END TO SETUP EMAIL VIEW */}
            <View style={styles.filed_divider} />
          </View>

          <View style={{ flexDirection: "column" }}>
            {/* BEGIN TO SETUP ADDRESS VIEW */}
              <View style={styles.filed_row}>
                <Text style={styles.filed_label}>Address</Text>
                <Text style={styles.filed_info_txt}>Lorem Ipsum</Text>
              </View>
            {/* END TO SETUP ADDRESS VIEW */}
            <View style={styles.filed_divider} />
          </View>

          <View style={{ flexDirection: "column" }}>
            {/* BEGIN TO SETUP POSTCODE VIEW */}
              <View style={styles.filed_row}>
                <Text style={styles.filed_label}>Postcode</Text>
                <Text style={styles.filed_info_txt}>12345</Text>
              </View>
            {/* END TO SETUP POSTCODE VIEW */}
            <View style={styles.filed_divider} />
          </View>

          {/* BEGIN TO SETUP EDITINFORMATION VIEW */}
          <TouchableOpacity onPress={() => this.toggleEditInfoModal(true)}>
            <Text style={styles.edit_info_txt}>Edit Information</Text>
          </TouchableOpacity>
          {/* END TO SETUP EDITINFORMATION VIEW */}

          <View style={styles.modal_open_view}>
          {/* BEGIN TO SETUP MODAL VIEW */}
            <Modal
              transparent={true}
              visible={this.state.editInfoModelVisible}
              onRequestClose={() => {
                this.state.editInfoModelVisible(false);
              }}>
              <View style={styles.modal_view}>
                <View style={styles.modal}>
                  <View style={styles.modal_header}>
                  {/* BEGIN TO SETUP CANCEL VIEW */}
                    <TouchableOpacity onPress={() => {this.setState({ editInfoModelVisible: false })}}>
                      <Text style={styles.cancel_apply_txt}>Cancel</Text>
                    </TouchableOpacity>
                  {/* END TO SETUP CANCEL VIEW */}
                    <Text style={styles.share_txt}>Sort</Text>
                  {/* BEGIN TO SETUP APPLY VIEW */}
                    <TouchableOpacity onPress={() => {this.setState({ editInfoModelVisible: false })}}>
                      <Text style={styles.cancel_apply_txt}>Apply</Text>
                    </TouchableOpacity>
                  {/* END TO SETUP APPLY VIEW */}
                  </View>

                  <View style={{ maxHeight: Dimensions.get("window").height * 0.6 }}>
                    <ScrollView style={styles.edit_info_list_bg}>
                      <View style={{ padding: 15 }}>
                       {/* BEGIN TO SETUP FIRSTNAME VIEW */}
                        <FloatingLabelInput
                          label="First Name"
                          value={"Lorem Ipsum"}
                          keyboardType="default"
                          returnKeyType="done"
                          maxLength={20}
                          selectionColor={"#959595"}
                          autoCapitalize="none"/>
                       {/* END TO SETUP FIRSTNAME VIEW */}

                        <View style={{ height: 10 }} />

                       {/* BEGIN TO SETUP LASTNAME VIEW */}
                        <FloatingLabelInput
                          label="Last Name"
                          value={"Lorem Ipsum"}
                          keyboardType="default"
                          returnKeyType="done"
                          maxLength={20}
                          selectionColor={"#959595"}
                          autoCapitalize="none"/>
                        {/* END TO SETUP LASTNAME VIEW */}
                        <View style={{ height: 10 }} />

                        {/* BEGIN TO SETUP PHONE VIEW */}
                        <FloatingLabelInput
                          label="Phone"
                          value={"1234567890"}
                          keyboardType="phone-pad"
                          returnKeyType="done"
                          maxLength={11}
                          selectionColor={"#959595"}
                          autoCapitalize="none"/>
                        {/* END TO SETUP PHONE VIEW */}

                        <View style={{ height: 10 }} />

                        {/* BEGIN TO SETUP EMAIL VIEW */}
                        <FloatingLabelInput
                          label="Email"
                          value={"loremipsum@gmail.com"}
                          keyboardType="email-address"
                          returnKeyType="done"
                          maxLength={40}
                          selectionColor={"#959595"}
                          autoCapitalize="none"/>
                        {/* END TO SETUP EMAIL VIEW */}

                        {/* BEGIN TO SETUP ADDRESS VIEW */}
                        <View style={{ height: 10 }} />
                        <FloatingLabelInput
                          label="Address"
                          value={"abc"}
                          keyboardType="default"
                          returnKeyType="done"
                          maxLength={40}
                          selectionColor={"#959595"}
                          autoCapitalize="none"/>
                        {/* END TO SETUP ADDRESS VIEW */}

                        <View style={{ height: 10 }} />
                        {/* BEGIN TO SETUP POSTCODE VIEW */}
                        <FloatingLabelInput
                          label="Postcode"
                          value={"12345"}
                          keyboardType="default"
                          returnKeyType="done"
                          maxLength={6}
                          selectionColor={"#959595"}
                          autoCapitalize="none"/>
                          {/* END TO SETUP POSTCODE VIEW */}
                        <View style={{ height: 10 }} />
                      </View>
                    </ScrollView>
                  </View>
                </View>
              </View>
            </Modal>
          {/* END TO SETUP MODAL VIEW */}
          </View>
        </ScrollView>
      );
    }

    if (selectedStep === 2) {
      return (
        <View style={{
            width: Dimensions.get("window").width * 0.9,
            alignSelf: "center",
            height: Dimensions.get("window").height * 0.6
          }}>
          <Content style={{ marginTop: Dimensions.get("window").height * 0.05 }}>
            <View style={styles.view_payment_bg}>
              {this.state.paymentMethod.map((item, index) => {
                return (
                  <View key={index}>
                    <TouchableOpacity
                      style={
                        this.state.selectedLots == item.id
                          ? [
                              styles.row_payment_method,
                              { backgroundColor: "#f3f3f3" }
                            ]
                          : [
                              styles.row_payment_method,
                              { backgroundColor: 'rgba(0,0,0,0)' }
                            ]}onPress={() => this.onCheckBoxPress(item.id, item.isOpen)}>
                      <View
                        style={[
                          styles.row_payment_detail,
                          { justifyContent: "space-between" }
                        ]}>
                      {/* BEGIN TO SETUP PAYMENT IMAGE AND TITLE VIEW */}
                        <View style={styles.row_payment_detail}>
                          <Image source={item.paymentMethodImage} style={styles.payment_method_image}/>
                          <Text style={[styles.filed_info_txt,{ marginLeft: Dimensions.get("window").width * 0.04 }]}>
                            {item.paymentMethodTitle}
                          </Text>
                        </View>
                      {/* END TO SETUP PAYMENT IMAGE AND TITLE VIEW */}

                      {/* BEGIN TO SETUP PAYMENT CHECK VIEW */}
                        {this.state.selectedLots == item.id ? (
                          <MaterialIcons
                            name="check"
                            size={25}
                            color={"#000000"}/>
                        ) : null}
                      {/* END TO SETUP PAYMENT CHECK VIEW */}
                      </View>
                    </TouchableOpacity>

                  {/* BEGIN TO SETUP PAYMENT FORM VIEW */}
                    {this.state.selectedLots == item.id ? (
                      item.isOpen == true ? (
                        <View>
                          <Text style={[styles.filed_info_txt, { padding: 10 }]}>Card Number</Text>

                        {/* BEGIN TO SETUP CARDNUMBER VIEW */}
                          <TextInput
                            style={styles.text_input}
                            placeholder="Card Number"
                            placeholderTextColor="#959595"
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                            textAlign={I18nManager.isRTL ? "right" : "left"}
                            keyboardType={
                              Platform.OS == "ios" ? "number-pad" : "phone-pad"
                            }
                            maxLength={16}/>
                        {/* END TO SETUP CARDNUMBER VIEW */}

                        {/* BEGIN TO SETUP MONTH AND YEAR VIEW */}
                          <View style={{ flexDirection: "row" }}>
                            <Text style={[styles.filed_info_txt, { padding: 10 }]}>Month</Text>
                            <Text style={[styles.filed_info_txt,{ padding: 10, marginLeft: 30 }]}>Year</Text>
                          </View>
                        {/* END TO SETUP MONTH AND YEAR VIEW */}

                          <View style={{ flexDirection: "row" }}>
                          {/* BEGIN TO SETUP MONTHINPUT VIEW */}
                            <TextInput style={[styles.text_input,
                                {
                                  width: Dimensions.get("window").width * 0.2,
                                  marginLeft: Dimensions.get("window").width * 0.03
                                }]}
                              placeholder="02"
                              placeholderTextColor="#959595"
                              underlineColorAndroid="transparent"
                              autoCapitalize="none"
                              textAlign={I18nManager.isRTL ? "right" : "left"}
                              keyboardType={
                                Platform.OS == "ios"
                                  ? "number-pad"
                                  : "phone-pad"
                              }
                              maxLength={2}/>
                          {/* END TO SETUP MONTHINPUT VIEW */}

                          {/* BEGIN TO SETUP YEARINPUT VIEW */}
                            <TextInput
                              style={[styles.text_input,
                                {
                                  width: Dimensions.get("window").width * 0.2,
                                  marginLeft: Dimensions.get("window").width * 0.08
                                }]}
                              placeholder="22"
                              placeholderTextColor="#959595"
                              underlineColorAndroid="transparent"
                              autoCapitalize="none"
                              textAlign={I18nManager.isRTL ? "right" : "left"}
                              keyboardType={
                                Platform.OS == "ios"
                                  ? "number-pad"
                                  : "phone-pad"
                              }
                              maxLength={2}/>
                          {/* END TO SETUP YEARINPUT VIEW */}
                          </View>

                          {/* BEGIN TO SETUP CVV VIEW */}
                          <Text style={[styles.filed_info_txt, { padding: 10 }]}>
                            CVV
                          </Text>
                          {/* END TO SETUP CVV VIEW */}

                          {/* BEGIN TO SETUP CVVINPUT VIEW */}
                          <TextInput
                            style={styles.text_input}
                            placeholder="CVV"
                            placeholderTextColor="#959595"
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                            textAlign={I18nManager.isRTL ? "right" : "left"}
                            keyboardType={
                              Platform.OS == "ios" ? "number-pad" : "phone-pad"
                            }
                            maxLength={4}/>
                            {/* END TO SETUP CVVINPUT VIEW */}

                          {/* BEGIN TO SETUP CANCEL AND SAVE VIEW */}
                          <View style={styles.save_cancel_bg}>
                            <TouchableOpacity style={styles.cancel_bg} onPress={() => alert("Cancel")}>
                              <Text style={styles.footer_txt}>Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.cancel_bg} onPress={() => alert("Save")}>
                              <Text style={styles.footer_txt}>Save</Text>
                            </TouchableOpacity>
                          </View>
                          {/* END TO SETUP CANCEL AND SAVE VIEW */}
                        </View>
                      ) : null
                    ) : null}

                    <View style={item.id == this.state.paymentMethod.length
                          ? null
                          : styles.payment_list_divider
                      }/>
                  </View>
                );
              })}
            </View>
          </Content>
        </View>
      );
    }

    if (selectedStep === 3) {
      return (
        <View style={styles.content_bg}>
          <Content>
            {productOrderList.map((item, index) => {
              return (
                <View key={index}>
                  <View
                    style={item.id == 1 ? styles.order_list_row_bg
                        : [
                            styles.order_list_row_bg,
                            { marginTop: Dimensions.get("window").width * 0.04 }
                          ]}>
                    <CachedImage source={item.productImage} style={styles.product_image}/>

                    <View style={styles.product_detail_bg}>
                      <View style={styles.product_title_row}>
                      {/* BEGIN TO SETUP PRODUCTTITLE VIEW */}
                        <Text style={[
                            styles.product_title_txt,
                            { width: Dimensions.get("window").width * 0.45 }
                          ]}>
                          {item.productTile}
                        </Text>
                      {/* END TO SETUP PRODUCTTITLE VIEW */}

                      {/* BEGIN TO SETUP CLOSE VIEW */}
                        <TouchableOpacity style={styles.close_icon_bg} onPress={() => alert("close")}>
                          <FontAwesome
                            name="close"
                            size={10}
                            style={styles.close_img}/>
                        </TouchableOpacity>
                      {/* END TO SETUP CLOSE VIEW */}
                      </View>

                      {/* BEGIN TO SETUP PRODUCTPRICE VIEW */}
                      <Text style={styles.price_txt}>{item.productPrice}</Text>
                      {/* END TO SETUP PRODUCTPRICE VIEW */}

                      {/* BEGIN TO SETUP PRODUCTSIZE VIEW */}
                      <View style={[styles.detail_field_row,{marginTop: Dimensions.get("window").width * 0.06 }]}>
                        <Text style={[styles.product_title_txt,{width: Dimensions.get("window").width * 0.24 }]}>
                          Size
                        </Text>
                        <Text style={styles.product_title_txt}>{item.size}</Text>
                      </View>
                      {/* END TO SETUP PRODUCTSIZE VIEW */}

                      {/* BEGIN TO SETUP PRODUCTCOLOR VIEW */}
                      <View style={styles.detail_field_row}>
                        <Text style={[styles.product_title_txt,{ width: Dimensions.get("window").width * 0.24 }]}>
                          Color
                        </Text>
                        <View style={[styles.color_viewer,{ backgroundColor: item.color }]}/>
                      </View>
                      {/* END TO SETUP PRODUCTCOLOR VIEW */}

                      {/* BEGIN TO SETUP PRODUCTQUANTITY VIEW */}
                      <View style={styles.detail_field_row}>
                        <Text style={[styles.product_title_txt,{ width: Dimensions.get("window").width * 0.24 }]}>
                          Quantity
                        </Text>
                        <Text style={styles.product_title_txt}>
                          {item.quantity}
                        </Text>
                      </View>
                      {/* END TO SETUP PRODUCTQUANTITY VIEW */}
                    </View>
                  </View>
                  <View style={item.id === this.state.data.length ? null : styles.order_list_divider}/>
                </View>
              );
            })}
            <View style={styles.total_bg}>
              <View>
              {/* BEGIN TO SETUP SUBTOTAL VIEW */}
                <View style={styles.total_field_row}>
                  <Text style={[styles.product_title_txt,{ width: Dimensions.get("window").width * 0.25 }]}>
                    Subtotal
                  </Text>
                  <Text style={[styles.product_title_txt,{ textAlign: "right", width: Dimensions.get("window").width * 0.65 }]}>
                    $520.00
                  </Text>
                </View>
              {/* END TO SETUP SUBTOTAL VIEW */}
                <View style={styles.totalfiled_divider} />
              </View>
              <View>
              {/* BEGIN TO SETUP SHIPPING VIEW */}
                <View style={styles.total_field_row}>
                  <Text style={[styles.product_title_txt,{ width: Dimensions.get("window").width * 0.25 }]}>Shipping</Text>
                  <Text style={[styles.product_title_txt,{ textAlign: "right", width: Dimensions.get("window").width * 0.65 }]}>
                    Free
                  </Text>
                </View>
               {/* END TO SETUP SHIPPING VIEW */}
                <View style={styles.totalfiled_divider} />
              </View>

              {/* BEGIN TO SETUP TOTAL VIEW */}
              <View style={styles.total_field_row}>
                <Text style={[styles.total_txt, { width: Dimensions.get("window").width * 0.25 }]}>Total</Text>
                <Text style={[styles.total_txt,{ textAlign: "right", width: Dimensions.get("window").width * 0.65 }]}>
                  $520.00
                </Text>
              </View>
              {/* END TO SETUP TOTAL VIEW */}
            </View>

            {/* BEGIN TO SETUP BILLINGINFORMATION VIEW */}
            <View style={styles.sub_header_bg}>
              <Text style={styles.sub_header_title}>BILLING INFORMATION</Text>
            </View>
            {/* END TO SETUP BILLINGINFORMATION VIEW */}
            <View style={styles.biling_info_bg}>
            {/* BEGIN TO SETUP BILLINGINFORMATION HEADER VIEW */}
              <View style={styles.billing_infoheader_bg}>
                <Text style={styles.billing_infoheader_label}>Lorem Ipsum</Text>
                <TouchableOpacity onPress={() => this.setState({ selectedStep: 1 })}>
                  <Text style={styles.edit_txt}>Edit</Text>
                </TouchableOpacity>
              </View>
            {/* END TO SETUP BILLINGINFORMATION HEADER VIEW */}

            {/* BEGIN TO SETUP ADDRESS VIEW */}
              <View style={styles.billing_info}>
                <Text style={[styles.billing_info_label,{ width: Dimensions.get("window").width * 0.18 }]}>
                  Address
                </Text>
                <Text style={styles.billing_info_label}> : </Text>
                <Text style={styles.product_title_txt}>
                  Lorem Ipsum
                </Text>
              </View>
            {/* END TO SETUP ADDRESS VIEW */}

            {/* BEGIN TO SETUP PHONE VIEW */}
              <View style={styles.billing_info}>
                <Text style={[styles.billing_info_label,{ width: Dimensions.get("window").width * 0.18 }]}>
                  Phone
                </Text>
                <Text style={styles.billing_info_label}> : </Text>
                <Text style={styles.product_title_txt}>1234567890</Text>
              </View>
            {/* END TO SETUP PHONE VIEW */}

            {/* BEGIN TO SETUP EMAIL VIEW */}
              <View style={styles.billing_info}>
                <Text style={[styles.billing_info_label,{ width: Dimensions.get("window").width * 0.18 }]}>
                  Email
                </Text>
                <Text style={styles.billing_info_label}> : </Text>
                <Text style={styles.product_title_txt}>lorem@ipsum.com</Text>
              </View>
            {/* END TO SETUP EMAIL VIEW */}
            </View>

            {/* BEGIN TO SETUP PAYMENTMETHOD VIEW */}
            <View style={styles.sub_header_bg}>
              <Text style={styles.sub_header_title}>PAYMENT METHOD</Text>
            </View>
            {/* END TO SETUP PAYMENTMETHOD VIEW */}

            <View style={styles.payment_bg}>
            {/* BEGIN TO SETUP VISA VIEW */}
              <View style={[styles.billing_info, { alignItems: "center" }]}>
                <Image
                  source={require('./icon_visa.png')}
                  style={styles.order_payment_image}/>
                <Text style={[styles.billing_infoheader_label,{ marginLeft: Dimensions.get("window").width * 0.04 }]}>
                  Visa
                </Text>
              </View>
            {/* END TO SETUP VISA VIEW */}

            {/* BEGIN TO SETUP EDIT VIEW */}
              <TouchableOpacity onPress={() => this.setState({ selectedStep: 2 })}>
                <Text style={styles.edit_txt}>Edit</Text>
              </TouchableOpacity>
            {/* END TO SETUP EDIT VIEW */}
            </View>

            <View style={[styles.order_list_divider,{ marginBottom: Dimensions.get("window").width * 0.08 }]}/>
          </Content>
        </View>
      );
    }
  };

  //BEGIN TO SETUP RENDERFOOTER
  _renderFooter = () => {
    const { selectedStep } = this.state;

    if (selectedStep === 1) {
      return (
        <TouchableOpacity style={styles.footer_txt_bg} onPress={() => this.setState({ selectedStep: 2 })}>
          <Text style={styles.footer_txt}>Continue</Text>
        </TouchableOpacity>
      );
    }

    if (selectedStep === 2) {
      return (
        <TouchableOpacity style={styles.footer_txt_bg} onPress={() => this.setState({ selectedStep: 3 })}>
          <Text style={styles.footer_txt}>Continue</Text>
        </TouchableOpacity>
      );
    }

    if (selectedStep === 3) {
      return (
        <TouchableOpacity style={styles.footer_txt_bg} onPress={() => alert("Place Order")}>
          <Text style={styles.footer_txt}>Order Now</Text>
        </TouchableOpacity>
      );
    }
  };
  //END TO SETUP RENDERFOOTER

  //BEGIN TO SETUP HANDLEWISHLISTNAVIGATION
  _handleWishListNavigation() {
    alert("WishList Click")
  }
  //END TO SETUP HANDLEWISHLISTNAVIGATION

  render() {
    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW

    return (
      <Container style={styles.container}>
      {/* BEGIN TO SETUP HEADER VIEW */}
        <Header androidStatusBarColor={"#0e1130"} style={styles.header}>
        {/* BEGIN TO SETUP LEFT VIEW */}
        <Left style={styles.left}>
          <TouchableOpacity style={styles.back_arrow} onPress={()=> this.props.navigation.goBack()}>
            <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={moderateScale(30)} color="white" style={{paddingRight: 20}}/>
          </TouchableOpacity>
        </Left>
        {/* END TO SETUP LEFT VIEW */}

        {/* BEGIN TO SETUP BODY VIEW */}
          <Body style={styles.body}>
            <Text style={styles.text_title}>CheckOut</Text>
          </Body>
        {/* END TO SETUP BODY VIEW */}

        {/* BEGIN TO SETUP RIGHT VIEW */}
          <Right style={styles.right}>
            <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => this._handleWishListNavigation()}>
              <View style={styles.heart_bg}>
                <FontAwesome name="heart" size={8} style={styles.heart_icon} />
              </View>
              <View style={styles.alert_bg}>
                <Text style={styles.alert_txt}>1</Text>
              </View>
            </TouchableOpacity>
          </Right>
        {/* END TO SETUP RIGHT VIEW */}
        </Header>
      {/* END TO SETUP HEADER VIEW */}

        <View style={styles.sub_header_bg}>{this._renderSubHeader()}</View>

        <View style={styles.sub_header_bottom_line} />

        <View>{this._renderSelectStep()}</View>

        <View>{this._renderActiveComponent()}</View>

        <View style={styles.footer_bg}>{this._renderFooter()}</View>
      </Container>
    );
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
        paddingTop: Dimensions.get("window").height * 0.02
      },
      android: {
        paddingTop: Dimensions.get("window").width * 0.04
      }
    }),
    elevation: 0,
    paddingLeft: Dimensions.get("window").width * 0.05,
    paddingRight: Dimensions.get("window").width * 0.05
  },
  left: {
    flex: 0.5,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  back_arrow: {
    justifyContent: "center",
    alignItems: "center"
  },
  body: {
    flex: 1,
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0)'
  },
  text_title: {
    color: 'white',
    fontSize: moderateScale(20),
    alignSelf: "center",
    fontFamily: font_type.FontLight
  },
  right: {
    flex: 0.5,
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: "center",
    ...Platform.select({
      ios: {},
      android: {
        paddingTop: Dimensions.get("window").width * 0.02
      }
    })
  },
  alert_bg: {
    width: Dimensions.get("window").width * 0.03,
    height: Dimensions.get("window").width * 0.03,
    borderRadius: Dimensions.get("window").width * 0.015,
    backgroundColor: "#ff0000",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -(Dimensions.get("window").width * 0.018)
  },
  alert_txt: {
    fontSize: moderateScale(8),
    fontFamily: font_type.FontBold,
    color: 'white'
  },
  heart_icon: {
    color: 'white',
    alignSelf: "center"
  },
  heart_bg: {
    width: Dimensions.get("window").width * 0.054,
    height: Dimensions.get("window").width * 0.054,
    borderRadius: Dimensions.get("window").width * 0.027,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: 'white',
    alignItems: "center",
    justifyContent: "center"
  },
  sub_header_bg: {
    backgroundColor: "#f3f3f3",
    paddingLeft: Dimensions.get("window").width * 0.05,
    paddingTop: Dimensions.get("window").width * 0.012,
    paddingBottom: Dimensions.get("window").width * 0.012,
    width: Dimensions.get("window").width
  },
  sub_header_title: {
    color: "#959595",
    fontSize: moderateScale(15),
    fontFamily: font_type.FontLight,
    textAlign: "left"
  },
  sub_header_bottom_line: {
    backgroundColor: "#e1e1e1",
    width: Dimensions.get("window").width,
    height: 1
  },
  step_bg: {
    alignSelf: "center",
    marginTop: Dimensions.get("window").height * 0.04,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  step_count_bg: {
    width: Dimensions.get("window").width * 0.05,
    height: Dimensions.get("window").width * 0.05,
    borderRadius: Dimensions.get("window").width * 0.025,
    alignItems: "center",
    justifyContent: "center"
  },
  step_count_txt: {
    color: "#fff",
    fontSize: moderateScale(12),
    fontFamily: font_type.FontBold
  },
  step_distance: {
    width: Dimensions.get("window").width * 0.37,
    height: 4
  },
  footer_bg: {
    width: Dimensions.get("window").width,
    backgroundColor: "#d8d8d8",
    bottom: 0,
    position: "absolute",
    height: Dimensions.get("window").height * 0.08,
    alignItems: "center",
    justifyContent: "center"
  },
  footer_txt_bg: {
    backgroundColor: "#ff6347",
    width: Dimensions.get("window").width * 0.9,
    alignSelf: "center",
    paddingTop: Dimensions.get("window").height * 0.012,
    paddingBottom: Dimensions.get("window").height * 0.012,
    borderRadius: 5
  },
  footer_txt: {
    color: "#ffffff",
    fontSize: moderateScale(15),
    fontFamily: font_type.FontLight,
    textAlign: "center"
  },
  content_billing_information_bg: {
    width: Dimensions.get("window").width * 0.9,
    alignSelf: "center"
  },
  filed_row: {
    flexDirection: "row",
    marginBottom: Dimensions.get("window").width * 0.05
  },
  filed_label: {
    color: "#959595",
    fontSize: moderateScale(15),
    fontFamily: font_type.FontLight,
    width: Dimensions.get("window").width * 0.3,
    textAlign: "left"
  },
  filed_info_txt: {
    color: "#0e1130",
    fontSize: moderateScale(15),
    fontFamily: font_type.FontLight
  },
  filed_divider: {
    backgroundColor: "#e1e1e1",
    marginBottom: Dimensions.get("window").width * 0.03,
    height: 1
  },
  view_payment_bg: {
    width: Dimensions.get("window").width * 0.9,
    borderRadius: 5,
    borderColor: "#ebebeb",
    borderWidth: 1,
    alignSelf: "center"
  },
  row_payment_method: {
    paddingTop: Dimensions.get("window").width * 0.03,
    paddingBottom: Dimensions.get("window").width * 0.03,
    paddingLeft: Dimensions.get("window").width * 0.02,
    paddingRight: Dimensions.get("window").width * 0.02
  },
  row_payment_detail: {
    flexDirection: "row",
    alignItems: "center"
  },
  payment_method_image: {
    width: Dimensions.get("window").width * 0.055,
    height: Dimensions.get("window").width * 0.04,
    resizeMode: "cover"
  },
  payment_list_divider: {
    width: Dimensions.get("window").width * 0.9,
    height: 1,
    backgroundColor: "#e1e1e1"
  },
  product_image: {
    width: Dimensions.get("window").width * 0.3,
    height: Dimensions.get("window").width * 0.36
  },
  product_detail_bg: {
    width: Dimensions.get("window").width * 0.55,
    marginLeft: Dimensions.get("window").width * 0.05,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  product_title_txt: {
    color: "#0e1130",
    fontSize: moderateScale(14),
    fontFamily: font_type.FontLight,
    textAlign: "left"
  },
  detail_field_row: {
    flexDirection: "row",
    alignItems: "center"
  },
  price_txt: {
    color: "#ff0000",
    fontSize: moderateScale(14),
    fontFamily: font_type.FontBold,
    textAlign: "left"
  },
  close_icon_bg: {
    backgroundColor: "#cecece",
    width: Dimensions.get("window").width * 0.044,
    height: Dimensions.get("window").width * 0.044,
    borderRadius: Dimensions.get("window").width * 0.022,
    alignItems: "center",
    justifyContent: "center"
  },
  close_img: {
    alignSelf: "center",
    color: 'white',
    ...Platform.select({
      ios: {
        paddingBottom: Dimensions.get("window").width * 0.003
      },
      android: {}
    })
  },
  color_viewer: {
    height: Dimensions.get("window").width * 0.024,
    width: Dimensions.get("window").width * 0.024,
    borderRadius: 1.5
  },
  order_list_divider: {
    width: Dimensions.get("window").width * 0.95,
    marginLeft: Dimensions.get("window").width * 0.05,
    height: 1,
    backgroundColor: "#d8d8d8"
  },
  order_list_row_bg: {
    width: Dimensions.get("window").width * 0.9,
    alignSelf: "center",
    flexDirection: "row",
    marginBottom: Dimensions.get("window").width * 0.04,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  content_bg: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.67
  },
  product_title_row: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  total_bg: {
    backgroundColor: "#f3f3f3",
    width: Dimensions.get("window").width,
    marginTop: Dimensions.get("window").width * 0.04,
    marginBottom: Dimensions.get("window").width * 0.06
  },
  total_field_row: {
    flexDirection: "row",
    paddingLeft: Dimensions.get("window").width * 0.05,
    paddingRight: Dimensions.get("window").width * 0.05,
    paddingTop: Dimensions.get("window").width * 0.02,
    paddingBottom: Dimensions.get("window").width * 0.02
  },
  totalfiled_divider: {
    width: Dimensions.get("window").width * 0.95,
    marginLeft: Dimensions.get("window").width * 0.05,
    backgroundColor: 'white',
    height: 1
  },
  total_txt: {
    color: "#0e1130",
    fontSize: moderateScale(14),
    fontFamily: font_type.FontBold,
    textAlign: "left"
  },
  biling_info_bg: {
    width: Dimensions.get("window").width * 0.9,
    alignSelf: "center",
    marginTop: Dimensions.get("window").width * 0.05,
    marginBottom: Dimensions.get("window").width * 0.1
  },
  billing_infoheader_bg: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Dimensions.get("window").width * 0.06
  },
  billing_infoheader_label: {
    color: "#0e1130",
    fontSize: moderateScale(16),
    fontFamily: font_type.FontLight
  },
  edit_txt: {
    color: "#000000",
    fontSize: moderateScale(16),
    fontFamily: font_type.FontLight
  },
  billing_info: {
    flexDirection: "row"
  },
  billing_info_label: {
    color: "#a9a9a9",
    fontSize: moderateScale(14),
    fontFamily: font_type.FontLight,
    textAlign: "left"
  },
  payment_bg: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    width: Dimensions.get("window").width * 0.9,
    alignItems: "center",
    marginTop: Dimensions.get("window").width * 0.05,
    marginBottom: Dimensions.get("window").width * 0.03
  },
  order_payment_image: {
    width: Dimensions.get("window").width * 0.06,
    height: Dimensions.get("window").width * 0.045,
    resizeMode: "cover"
  },
  text_input: {
    backgroundColor: "#fff",
    borderRadius: 5,
    borderColor: "#000000",
    borderWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: "center",
    width: Dimensions.get("window").width * 0.84,
    fontSize: moderateScale(15),
    fontFamily: font_type.FontLight,
    color: "#0e1130",
    marginTop: -5
  },
  save_cancel_bg: {
    flexDirection: "row",
    width: Dimensions.get("window").width * 0.84,
    marginLeft: Dimensions.get("window").width * 0.03,
    marginRight: Dimensions.get("window").width * 0.03,
    marginTop: Dimensions.get("window").width * 0.05,
    marginBottom: Dimensions.get("window").width * 0.05,
    justifyContent: "space-between"
  },
  cancel_bg: {
    backgroundColor: "#9400D3",
    width: Dimensions.get("window").width * 0.4,
    paddingTop: Dimensions.get("window").height * 0.012,
    paddingBottom: Dimensions.get("window").height * 0.012,
    borderRadius: 5
  },
  edit_info_txt: {
    fontSize: moderateScale(16),
    fontFamily: font_type.FontLight,
    color: "#ff6347",
    textDecorationLine: "underline"
  },
  modal_open_view: {
    flexDirection: "column",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    alignItems: "center"
  },
  modal_view: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#0006",
    paddingTop: Dimensions.get("window").height * 0.2,
    alignSelf: "center",
    alignItems: "center"
  },
  modal: {
    width: Dimensions.get("window").width * 0.9,
    backgroundColor: 'white',
    borderRadius: 5
  },
  modal_header: {
    backgroundColor: "#ebebeb",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: Dimensions.get("window").width * 0.024,
    paddingTop: Dimensions.get("window").width * 0.024,
    paddingLeft: Dimensions.get("window").width * 0.03,
    paddingRight: Dimensions.get("window").width * 0.03,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  cancel_apply_txt: {
    color: "#000000",
    fontSize: moderateScale(15),
    fontFamily: font_type.FontLight
  },
  share_txt: {
    color: "#0e1130",
    fontSize: moderateScale(15),
    fontFamily: font_type.FontLight
  },
  edit_info_list_bg: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginBottom: Dimensions.get("window").width * 0.01,
    minHeight: Dimensions.get("window").height * 0.28
  }
});
// END TO MAKE STYLE
