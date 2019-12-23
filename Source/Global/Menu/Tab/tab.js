
'use strict';
import React, { Component } from 'react';
import {Text, View,Alert,AsyncStorage,YellowBox } from 'react-native';
import {Button,Footer,Content,FooterTab,Container,Root} from 'native-base';
 // Version can be specified in package.json
import {createStackNavigator} from 'react-navigation'; // Version can be specified in package.json


//BEGIN TO IMPORT ALL FILE
import GlobalInclude from "../../GlobalInclude/globalinclude.js";
import MainView from "../../../View/Home/home.js"
//END TO IMPORT ALL FILE

// BEGIN TO MAKE PROFILE ROUTE
import ProfileHome from '../../../View/Components/Profile/profilehome.js'
import ProfileAbout from '../../../View/Components/Profile/ProfileAbout/index.js'
import ProfileAccountInfoView from '../../../View/Components/Profile/ProfileAccountInfoView/index.js'
import ProfileBlogView from '../../../View/Components/Profile/ProfileBlogView/index.js'
import ProfileBlog2View from '../../../View/Components/Profile/ProfileBlogTwoView/index.js';
import ProfileChatView from '../../../View/Components/Profile/ProfileChatView/index.js';
import ProfileCollapseView from '../../../View/Components/Profile/ProfileCollapseView/index.js';
import ProfileDetailView from '../../../View/Components/Profile/ProfileDetailView/index.js';
import ProfileDiscoveryView from '../../../View/Components/Profile/ProfileDiscoveryView/index.js'
import ProfileDiscoveryTwoView from '../../../View/Components/Profile/ProfileDiscoveryTwoView/index.js'
import ProfileFitnessView from '../../../View/Components/Profile/ProfileFitnessView/index.js'
import ProfileFriendsView from '../../../View/Components/Profile/ProfileFriendsView/index.js'
import ProfileGalleryView from '../../../View/Components/Profile/ProfileGalleryView/index.js'
import ProfileHotelView from '../../../View/Components/Profile/ProfileHotelView/index.js'
import ProfileInteriorView from '../../../View/Components/Profile/ProfileInteriorView/index.js'
import ProfileMusicView from '../../../View/Components/Profile/ProfileMusicView/index.js'
import ProfileMyBlogView from '../../../View/Components/Profile/ProfileMyBlogView/index.js'
import ProfileNewsFeedView from '../../../View/Components/Profile/ProfileNewsFeedView/index.js'
import ProfileNewsFeedThreeView from '../../../View/Components/Profile/ProfileNewsFeedThreeView/index.js'
import ProfileNewsFeedTwoView from '../../../View/Components/Profile/ProfileNewsFeedTwoView/index.js'
import ProfileOverlayView from '../../../View/Components/Profile/ProfileOverlayView/index.js'
import ProfilePaymentView from '../../../View/Components/Profile/ProfilePaymentView/index.js'
import ProfilePortfolioView from '../../../View/Components/Profile/ProfilePortfolioView/index.js'
import ProfileRealtorTwoView from '../../../View/Components/Profile/ProfileRealtorTwoView/index.js'
import ProfileRealtorView from '../../../View/Components/Profile/ProfileRealtorView/index.js'
import ProfileScrollOverView from '../../../View/Components/Profile/ProfileScrollOverView/index.js'
import ProfileSlideUpView from '../../../View/Components/Profile/ProfileSlideUpView/index.js'
import ProfileSocialCollapseView from '../../../View/Components/Profile/ProfileSocialCollapseView/index.js'
import ProfileSocialView from '../../../View/Components/Profile/ProfileSocialView/index.js'
import ProfileSocialTwoView from '../../../View/Components/Profile/ProfileSocialTwoView/index.js'
import ProfileSocialThreeView from '../../../View/Components/Profile/ProfileSocialThreeView/index.js'
// END TO MAKE PROFILE ROUTE

import LoginHome from '../../../View/Components/Login/loginhome.js'
import Login1 from '../../../View/Components/Login/Login1/index.js'
import Login2 from '../../../View/Components/Login/Login2/index.js'
import Login3 from '../../../View/Components/Login/Login3/index.js'
import Login4 from '../../../View/Components/Login/Login4/index.js'
import Login5 from '../../../View/Components/Login/Login5/index.js'
import Login6 from '../../../View/Components/Login/Login6/index.js'
import Login7 from '../../../View/Components/Login/Login7/index.js'
import Login8 from '../../../View/Components/Login/Login8/index.js'
import Login9 from '../../../View/Components/Login/Login9/index.js'
import Login10 from '../../../View/Components/Login/Login10/index.js'
import Login11 from '../../../View/Components/Login/Login11/index.js'
import Login12 from '../../../View/Components/Login/Login12/index.js'
import Login13 from '../../../View/Components/Login/Login13/index.js'
import Login14 from '../../../View/Components/Login/Login14/index.js'


import SignupHome from '../../../View/Components/Signup/signuphome.js'
import Signup1 from '../../../View/Components/Signup/Signup1/index.js'
import Signup2 from '../../../View/Components/Signup/Signup2/index.js'
import Signup3 from '../../../View/Components/Signup/Signup3/index.js'
import Signup4 from '../../../View/Components/Signup/Signup4/index.js'
import Signup5 from '../../../View/Components/Signup/Signup5/index.js'
import Signup6 from '../../../View/Components/Signup/Signup6/index.js'
import Signup7 from '../../../View/Components/Signup/Signup7/index.js'
import Signup8 from '../../../View/Components/Signup/Signup8/index.js'
import Signup9 from '../../../View/Components/Signup/Signup9/index.js'
import Signup10 from '../../../View/Components/Signup/Signup10/index.js'
import Signup11 from '../../../View/Components/Signup/Signup11/index.js'
import Signup12 from '../../../View/Components/Signup/Signup12/index.js'
import Signup13 from '../../../View/Components/Signup/Signup13/index.js'
import Signup14 from '../../../View/Components/Signup/Signup14/index.js'
import Signup15 from '../../../View/Components/Signup/Signup15/index.js'


import TimeLineHome from '../../../View/Components/Timeline/timelinehome.js'
import BasicExample from "../../../View/Components/Timeline/TimeLineView/basic.js"
import CustomExample from "../../../View/Components/Timeline/TimeLineView/custom.js"
import DotExample from "../../../View/Components/Timeline/TimeLineView/dotExample.js"
import IconExample from "../../../View/Components/Timeline/TimeLineView/iconExample.js"
import OverrideRenderExample from "../../../View/Components/Timeline/TimeLineView/overrideRenderExample.js"
import RefreshLoadMoreExample from "../../../View/Components/Timeline/TimeLineView/refreshLoadMoreExample.js"
import SingleRightExample from "../../../View/Components/Timeline/TimeLineView/singleRightExample.js"
import Template from "../../../View/Components/Timeline/TimeLineView/template.js"
import TimelinePressExample from "../../../View/Components/Timeline/TimeLineView/timelinePressExample.js"
import TwoColumnExample from "../../../View/Components/Timeline/TimeLineView/twoColumnExample.js"


import MaterialDesignHome from '../../../View/Components/MaterialDesign/materialhome.js'
import MaterialButton from '../../../View/Components/MaterialDesign/MaterialView/button.js'
import MaterialAvtar from '../../../View/Components/MaterialDesign/MaterialView/avtar.js'
import MaterialActionButton from '../../../View/Components/MaterialDesign/MaterialView/actionbutton.js'
import MaterialBadge from '../../../View/Components/MaterialDesign/MaterialView/badge.js'
import BottomNavigation from '../../../View/Components/MaterialDesign/MaterialView/bottomnavigation.js'
import BottomNavigation1 from '../../../View/Components/MaterialDesign/MaterialView/bottomnavigation1.js'
import BottomNavigation2 from '../../../View/Components/MaterialDesign/MaterialView/bottomnavigation2.js'
import BottomNavigation3 from '../../../View/Components/MaterialDesign/MaterialView/bottomnavigation3.js'
import BottomNavigation4 from '../../../View/Components/MaterialDesign/MaterialView/bottomnavigation4.js'
import Card from '../../../View/Components/MaterialDesign/MaterialView/card.js'
import SwitchView from '../../../View/Components/MaterialDesign/MaterialView/switch.js'
import Checkbox from '../../../View/Components/MaterialDesign/MaterialView/checkbox.js'
import Dialog from '../../../View/Components/MaterialDesign/MaterialView/dialog.js'
import AllIcon from '../../../View/Components/MaterialDesign/MaterialView/icon.js'
import IconToggle from '../../../View/Components/MaterialDesign/MaterialView/icontoggle.js'
import ListView from '../../../View/Components/MaterialDesign/MaterialView/listview.js'
import RadioButton from '../../../View/Components/MaterialDesign/MaterialView/radiobutton.js'
import Menu from '../../../View/Components/MaterialDesign/MaterialView/menu.js'
import Textfield from '../../../View/Components/MaterialDesign/MaterialView/textfield.js'


import DrawerHome from '../../../View/Components/Drawer/drawerhome.js'
import DrawerBottomIconView from '../../../View/Components/Drawer/DrawerBottomIconView/index.js'
import DrawerBottomSlideUpView from '../../../View/Components/Drawer/DrawerBottomSlideUpView/index.js'
import DrawerChatView from '../../../View/Components/Drawer/DrawerChatView/index.js'
import DrawerDuoNavigationView from '../../../View/Components/Drawer/DrawerDuoNavigationView/index.js'
import DrawerEcomView from '../../../View/Components/Drawer/DrawerEcomView/index.js'
import DrawerEcomTabsView from '../../../View/Components/Drawer/DrawerEcomTabsView/index.js'
import DrawerEcomThreeView from '../../../View/Components/Drawer/DrawerEcomThreeView/index.js'
import DrawerEcomTwoView from '../../../View/Components/Drawer/DrawerEcomTwoView/index.js'
import DrawerEditableView from '../../../View/Components/Drawer/DrawerEditableView/index.js'
import DrawerExpandingView from '../../../View/Components/Drawer/DrawerExpandingView/index.js'
import DrawerExpandingFullView from '../../../View/Components/Drawer/DrawerExpandingFullView/index.js'
import DrawerExpandingwithSwiperView from '../../../View/Components/Drawer/DrawerExpandingwithSwiperView/index.js'
import DrawerFABIconView from '../../../View/Components/Drawer/DrawerFABIconView/index.js'
import DrawerMusicView from '../../../View/Components/Drawer/DrawerMusicView/index.js'
import DrawerMusicThreeView from '../../../View/Components/Drawer/DrawerMusicThreeView/index.js'
import DrawerMusicTwoView from '../../../View/Components/Drawer/DrawerMusicTwoView/index.js'
import DrawerSlideUpView from '../../../View/Components/Drawer/DrawerSlideUpView/index.js'
import DrawerSmallIconView from '../../../View/Components/Drawer/DrawerSmallIconView/index.js'
import DrawerSocialView from '../../../View/Components/Drawer/DrawerSocialView/index.js'
import DrawerSocialCustomView from '../../../View/Components/Drawer/DrawerSocialCustomView/index.js'
import DrawerSocialDarkView from '../../../View/Components/Drawer/DrawerSocialDarkView/index.js'
import DrawerSocialFullScreenView from '../../../View/Components/Drawer/DrawerSocialFullScreenView/index.js'
import DrawerSocialNotificationView from '../../../View/Components/Drawer/DrawerSocialNotificationView/index.js'
import DrawerSocialSmallView from '../../../View/Components/Drawer/DrawerSocialSmallView/index.js'
import DrawerSocialTwoView from '../../../View/Components/Drawer/DrawerSocialTwoView/index.js'
import DrawerSocialWallpaperView from '../../../View/Components/Drawer/DrawerSocialWallpaperView/index.js'
import DrawerTopView from '../../../View/Components/Drawer/DrawerTopView/index.js'
import DrawerTopIconView from '../../../View/Components/Drawer/DrawerTopIconView/index.js'
import DrawerTopSlideDownView from '../../../View/Components/Drawer/DrawerTopSlideDownView/index.js'
import DrawerTopSlideDownTwoView from '../../../View/Components/Drawer/DrawerTopSlideDownTwoView/index.js'


import AdMobHome from '../../../View/Components/AdMob/admobhome.js'
import AdMobBannerView from '../../../View/Components/AdMob/AdMobBannerView/index.js'


import WalkthroughHome from '../../../View/Components/Walkthrough/walkthroughhome.js'
import WalkthroughAppUsageHintsView from '../../../View/Components/Walkthrough/WalkthroughAppUsageHintsView/index.js'
import WalkthroughCaliforniaDreamView from '../../../View/Components/Walkthrough/WalkthroughCaliforniaDreamView/index.js'
import WalkthroughChatView from '../../../View/Components/Walkthrough/WalkthroughChatView/index.js'
import WalkthroughChatAppView from '../../../View/Components/Walkthrough/WalkthroughChatAppView/index.js'
import WalkthroughCoffeeShopView from '../../../View/Components/Walkthrough/WalkthroughCoffeeShopView/index.js'
import WalkthroughCreativeThingsView from '../../../View/Components/Walkthrough/WalkthroughCreativeThingsView/index.js'
import WalkthroughDiscoverPlaceView from '../../../View/Components/Walkthrough/WalkthroughDiscoverPlaceView/index.js'
import WalkthroughDiscoveryView from '../../../View/Components/Walkthrough/WalkthroughDiscoveryView/index.js'
import WalkthroughEventHandlerView from '../../../View/Components/Walkthrough/WalkthroughEventHandlerView/index.js'
import WalkthroughEventsView from '../../../View/Components/Walkthrough/WalkthroughEventsView/index.js'
import WalkthroughFitnessView from '../../../View/Components/Walkthrough/WalkthroughFitnessView/index.js'
import WalkthroughGetRideView from '../../../View/Components/Walkthrough/WalkthroughGetRideView/index.js'
import WalkthroughGetStartedView from '../../../View/Components/Walkthrough/WalkthroughGetStartedView/index.js'
import WalkthroughHistoricalPlaceView from '../../../View/Components/Walkthrough/WalkthroughHistoricalPlaceView/index.js'
import WalkthroughHotelServiceView from '../../../View/Components/Walkthrough/WalkthroughHotelServiceView/index.js'
import WalkthroughInvestmentView from '../../../View/Components/Walkthrough/WalkthroughInvestmentView/index.js'
import WalkthroughJourneyView from '../../../View/Components/Walkthrough/WalkthroughJourneyView/index.js'
import WalkthroughNewsFeedView from '../../../View/Components/Walkthrough/WalkthroughNewsFeedView/index.js'

import EcommerceHome from '../../../View/Components/ECommerce/ecommercehome.js'
import AboutUsView from '../../../View/Components/ECommerce/AboutUsView/index.js'
import AddressView from '../../../View/Components/ECommerce/AddressView/index.js'
import BrandsView from '../../../View/Components/ECommerce/BrandsView/index.js'
import CategoryProductView from '../../../View/Components/ECommerce/CategoryProductView/index.js'
import ChangeCountryView from '../../../View/Components/ECommerce/ChangeCountryView/index.js'
import ChangePasswordView from '../../../View/Components/ECommerce/ChangePasswordView/index.js'
import CheckOutView from '../../../View/Components/ECommerce/CheckOutView/index.js'
import EditInformationView from '../../../View/Components/ECommerce/EditInformationView/index.js'
import FAQGeneralEnquiriesView from '../../../View/Components/ECommerce/FAQGeneralEnquiriesView/index.js'
import FAQView from '../../../View/Components/ECommerce/FAQView/index.js'
import ForgotPasswordView from '../../../View/Components/ECommerce/ForgotPasswordView/index.js'
import InviteFriendsView from '../../../View/Components/ECommerce/InviteFriendsView/index.js'
import LoginView from '../../../View/Components/ECommerce/LoginView/index.js'
import MenuView from '../../../View/Components/ECommerce/MenuView/Main.js'
import MyAccountView from '../../../View/Components/ECommerce/MyAccountView/index.js'
import MyBagView from '../../../View/Components/ECommerce/MyBagView/index.js'
import MyInformationView from '../../../View/Components/ECommerce/MyInformationView/index.js'
import NewArrivalsView from '../../../View/Components/ECommerce/NewArrivalsView/index.js'
import NotificationView from '../../../View/Components/ECommerce/NotificationView/index.js'
import OrderHistoryView from '../../../View/Components/ECommerce/OrderHistoryView/index.js'
import PrivacyPolicyView from '../../../View/Components/ECommerce/PrivacyPolicyView/index.js'
import ProductDetailsView from '../../../View/Components/ECommerce/ProductDetailsView/index.js'
import ProductDetailsTabView from '../../../View/Components/ECommerce/ProductDetailsTabView/index.js'
import ResetPasswordView from '../../../View/Components/ECommerce/ResetPasswordView/index.js'
import SaleView from '../../../View/Components/ECommerce/SaleView/index.js'
import WishListView from '../../../View/Components/ECommerce/WishListView/index.js'

// BEGIN TO MAKE SOCIAL ROUTE
import SocialHome from '../../../View/Components/Social/socialhome.js'
import Social1 from '../../../View/Components/Social/Social01/index.js'
import Social2 from '../../../View/Components/Social/Social02/index.js'
import Social3 from '../../../View/Components/Social/Social03/index.js'
import Social4 from '../../../View/Components/Social/Social04/index.js'
import Social5 from '../../../View/Components/Social/Social05/index.js'
import Social6 from '../../../View/Components/Social/Social06/index.js'
import Social7 from '../../../View/Components/Social/Social07/index.js'
import Social8 from '../../../View/Components/Social/Social08/index.js'
import Social9 from '../../../View/Components/Social/Social09/index.js'
import Social10 from '../../../View/Components/Social/Social10/index.js'
import Social11 from '../../../View/Components/Social/Social11/index.js'
import Social12 from '../../../View/Components/Social/Social12/index.js'
import Social13 from '../../../View/Components/Social/Social13/index.js'
import Social14 from '../../../View/Components/Social/Social14/index.js'
import Social15 from '../../../View/Components/Social/Social15/index.js'
import Social16 from '../../../View/Components/Social/Social16/index.js'
import Social17 from '../../../View/Components/Social/Social17/index.js'
import Social18 from '../../../View/Components/Social/Social18/index.js'
import Social19 from '../../../View/Components/Social/Social19/index.js'
import Social20 from '../../../View/Components/Social/Social20/index.js'
// END TO MAKE SOCIAL ROUTE

// BEGIN TO REMOVE ALL WARNING
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module createStackNavigator']);
console.disableYellowBox = true;
// END TO REMOVE ALL WARNING

// BEGIN TO MAKE HOME STACK NAVIGATOR
const HomeStack = createStackNavigator({
  MainView: { screen: MainView,navigationOptions:{header:null}},

  ProfileHome: { screen: ProfileHome,navigationOptions: {header:null}},
  ProfileAbout: { screen: ProfileAbout,navigationOptions: {header:null}},
  ProfileAccountInfoView: { screen: ProfileAccountInfoView,navigationOptions: {header:null}},
  ProfileBlogView: { screen: ProfileBlogView,navigationOptions: {header:null}},
  ProfileBlog2View: { screen: ProfileBlog2View,navigationOptions: {header:null}},
  ProfileChatView: { screen: ProfileChatView,navigationOptions: {header:null}},
  ProfileCollapseView: { screen: ProfileCollapseView,navigationOptions: {header:null}},
  ProfileDetailView: { screen: ProfileDetailView,navigationOptions: {header:null}},
  ProfileDiscoveryView: { screen: ProfileDiscoveryView,navigationOptions: {header:null}},
  ProfileDiscoveryTwoView: { screen: ProfileDiscoveryTwoView,navigationOptions: {header:null}},
  ProfileFitnessView: { screen: ProfileFitnessView,navigationOptions: {header:null}},
  ProfileFriendsView: { screen: ProfileFriendsView,navigationOptions: {header:null}},
  ProfileGalleryView: { screen: ProfileGalleryView,navigationOptions: {header:null}},
  ProfileHotelView: { screen: ProfileHotelView,navigationOptions: {header:null}},
  ProfileInteriorView: { screen: ProfileInteriorView,navigationOptions: {header:null}},
  ProfileMusicView: { screen: ProfileMusicView,navigationOptions: {header:null}},
  ProfileMyBlogView: { screen: ProfileMyBlogView,navigationOptions: {header:null}},
  ProfileNewsFeedView: { screen: ProfileNewsFeedView,navigationOptions: {header:null}},
  ProfileNewsFeedThreeView: { screen: ProfileNewsFeedThreeView,navigationOptions: {header:null}},
  ProfileNewsFeedTwoView: { screen: ProfileNewsFeedTwoView,navigationOptions: {header:null}},
  ProfileOverlayView: { screen: ProfileOverlayView,navigationOptions: {header:null}},
  ProfilePaymentView: { screen: ProfilePaymentView,navigationOptions: {header:null}},
  ProfilePortfolioView: { screen: ProfilePortfolioView,navigationOptions: {header:null}},
  ProfileRealtorTwoView: { screen: ProfileRealtorTwoView,navigationOptions: {header:null}},
  ProfileRealtorView: { screen: ProfileRealtorView,navigationOptions: {header:null}},
  ProfileScrollOverView: { screen: ProfileScrollOverView,navigationOptions: {header:null}},
  ProfileSlideUpView: { screen: ProfileSlideUpView,navigationOptions: {header:null}},
  ProfileSocialCollapseView: { screen: ProfileSocialCollapseView,navigationOptions: {header:null}},
  ProfileSocialView: { screen: ProfileSocialView,navigationOptions: {header:null}},
  ProfileSocialTwoView: { screen: ProfileSocialTwoView,navigationOptions: {header:null}},
  ProfileSocialThreeView: { screen: ProfileSocialThreeView,navigationOptions: {header:null}},

  LoginHome: { screen: LoginHome,navigationOptions: {header:null}},
  Login1: { screen: Login1,navigationOptions: {header:null}},
  Login2: { screen: Login2,navigationOptions: {header:null}},
  Login3: { screen: Login3,navigationOptions: {header:null}},
  Login4: { screen: Login4,navigationOptions: {header:null}},
  Login5: { screen: Login5,navigationOptions: {header:null}},
  Login6: { screen: Login6,navigationOptions: {header:null}},
  Login7: { screen: Login7,navigationOptions: {header:null}},
  Login8: { screen: Login8,navigationOptions: {header:null}},
  Login9: { screen: Login9,navigationOptions: {header:null}},
  Login10: { screen: Login10,navigationOptions: {header:null}},
  Login11: { screen: Login11,navigationOptions: {header:null}},
  Login12: { screen: Login12,navigationOptions: {header:null}},
  Login13: { screen: Login13,navigationOptions: {header:null}},
  Login14: { screen: Login14,navigationOptions: {header:null}},

  SignupHome: { screen: SignupHome,navigationOptions: {header:null}},
  Signup1: { screen: Signup1,navigationOptions: {header:null}},
  Signup2: { screen: Signup2,navigationOptions: {header:null}},
  Signup3: { screen: Signup3,navigationOptions: {header:null}},
  Signup4: { screen: Signup4,navigationOptions: {header:null}},
  Signup5: { screen: Signup5,navigationOptions: {header:null}},
  Signup6: { screen: Signup6,navigationOptions: {header:null}},
  Signup7: { screen: Signup7,navigationOptions: {header:null}},
  Signup8: { screen: Signup8,navigationOptions: {header:null}},
  Signup9: { screen: Signup9,navigationOptions: {header:null}},
  Signup10: { screen: Signup10,navigationOptions: {header:null}},
  Signup11: { screen: Signup11,navigationOptions: {header:null}},
  Signup12: { screen: Signup12,navigationOptions: {header:null}},
  Signup13: { screen: Signup13,navigationOptions: {header:null}},
  Signup14: { screen: Signup14,navigationOptions: {header:null}},
  Signup15: { screen: Signup15,navigationOptions: {header:null}},


  TimeLineHome: { screen: TimeLineHome,navigationOptions: {header:null}},
  BasicExample: { screen: BasicExample,navigationOptions: {header:null}},
  CustomExample: { screen: CustomExample,navigationOptions:{header:null}},
  DotExample: { screen: DotExample,navigationOptions:{header:null}},
  IconExample: { screen: IconExample,navigationOptions:{header:null}},
  OverrideRenderExample: { screen: OverrideRenderExample,navigationOptions:{header:null}},
  RefreshLoadMoreExample: { screen: RefreshLoadMoreExample,navigationOptions:{header:null}},
  SingleRightExample: { screen: SingleRightExample,navigationOptions:{header:null}},
  Template: { screen: Template,navigationOptions:{header:null}},
  TimelinePressExample: { screen: TimelinePressExample,navigationOptions:{header:null}},
  TwoColumnExample: { screen: TwoColumnExample,navigationOptions:{header:null}},


  MaterialDesignHome: { screen: MaterialDesignHome,navigationOptions: {header:null}},
  MaterialButton: { screen: MaterialButton,navigationOptions: {header:null}},
  MaterialAvtar: { screen: MaterialAvtar,navigationOptions: {header:null}},
  MaterialActionButton: { screen: MaterialActionButton,navigationOptions: {header:null}},
  MaterialBadge: { screen: MaterialBadge,navigationOptions: {header:null}},
  BottomNavigation: { screen: BottomNavigation,navigationOptions: {header:null}},
  BottomNavigation1: { screen: BottomNavigation1},
  BottomNavigation2: { screen: BottomNavigation2},
  BottomNavigation3: { screen: BottomNavigation3},
  BottomNavigation4: { screen: BottomNavigation4},
  Card: { screen: Card,navigationOptions: {header:null}},
  SwitchView: { screen: SwitchView,navigationOptions: {header:null}},
  Checkbox: { screen: Checkbox,navigationOptions: {header:null}},
  Dialog: { screen: Dialog,navigationOptions: {header:null}},
  AllIcon: { screen: AllIcon,navigationOptions: {header:null}},
  IconToggle: { screen: IconToggle,navigationOptions: {header:null}},
  ListView: { screen: ListView,navigationOptions: {header:null}},
  RadioButton: { screen: RadioButton,navigationOptions: {header:null}},
  Menu: { screen: Menu,navigationOptions: {header:null}},
  Textfield: { screen: Textfield,navigationOptions: {header:null}},


  AdMobHome: { screen: AdMobHome,navigationOptions: {header:null}},
  AdMobBannerView: { screen: AdMobBannerView,navigationOptions: {header:null}},

  DrawerHome: { screen: DrawerHome,navigationOptions: {header:null}},
  DrawerBottomIconView: { screen: DrawerBottomIconView,navigationOptions: {header:null}},
  DrawerBottomSlideUpView: { screen: DrawerBottomSlideUpView,navigationOptions: {header:null}},
  DrawerChatView: { screen: DrawerChatView,navigationOptions: {header:null}},
  DrawerDuoNavigationView: { screen: DrawerDuoNavigationView,navigationOptions: {header:null}},
  DrawerEcomView: { screen: DrawerEcomView,navigationOptions: {header:null}},
  DrawerEcomTabsView: { screen: DrawerEcomTabsView,navigationOptions: {header:null}},
  DrawerEcomThreeView: { screen: DrawerEcomThreeView,navigationOptions: {header:null}},
  DrawerEcomTwoView: { screen: DrawerEcomTwoView,navigationOptions: {header:null}},
  DrawerEditableView: { screen: DrawerEditableView,navigationOptions: {header:null}},
  DrawerExpandingView: { screen: DrawerExpandingView,navigationOptions: {header:null}},
  DrawerExpandingFullView: { screen: DrawerExpandingFullView,navigationOptions: {header:null}},
  DrawerExpandingwithSwiperView: { screen: DrawerExpandingwithSwiperView,navigationOptions: {header:null}},
  DrawerFABIconView: { screen: DrawerFABIconView,navigationOptions: {header:null}},
  DrawerMusicView: { screen: DrawerMusicView,navigationOptions: {header:null}},
  DrawerMusicThreeView: { screen: DrawerMusicThreeView,navigationOptions: {header:null}},
  DrawerMusicTwoView: { screen: DrawerMusicTwoView,navigationOptions: {header:null}},
  DrawerSlideUpView: { screen: DrawerSlideUpView,navigationOptions: {header:null}},
  DrawerSmallIconView:{screen:DrawerSmallIconView,navigationOptions:{header:null}},
  DrawerSocialView:{screen:DrawerSocialView,navigationOptions:{header:null}},
  DrawerSocialCustomView:{screen:DrawerSocialCustomView,navigationOptions:{header:null}},
  DrawerSocialDarkView:{screen:DrawerSocialDarkView,navigationOptions:{header:null}},
  DrawerSocialFullScreenView:{screen:DrawerSocialFullScreenView,navigationOptions:{header:null}},
  DrawerSocialNotificationView:{screen:DrawerSocialNotificationView,navigationOptions:{header:null}},
  DrawerSocialSmallView:{screen:DrawerSocialSmallView,navigationOptions:{header:null}},
  DrawerSocialTwoView:{screen:DrawerSocialTwoView,navigationOptions:{header:null}},
  DrawerSocialWallpaperView:{screen:DrawerSocialWallpaperView,navigationOptions:{header:null}},
  DrawerTopView:{screen:DrawerTopView,navigationOptions:{header:null}},
  DrawerTopIconView:{screen:DrawerTopIconView,navigationOptions:{header:null}},
  DrawerTopSlideDownView:{screen:DrawerTopSlideDownView,navigationOptions:{header:null}},
  DrawerTopSlideDownTwoView:{screen:DrawerTopSlideDownTwoView,navigationOptions:{header:null}},

  WalkthroughHome:{screen:WalkthroughHome,navigationOptions:{header:null}},
  WalkthroughAppUsageHintsView:{screen:WalkthroughAppUsageHintsView,navigationOptions:{header:null}},
  WalkthroughCaliforniaDreamView:{screen:WalkthroughCaliforniaDreamView,navigationOptions:{header:null}},
  WalkthroughChatView:{screen:WalkthroughChatView,navigationOptions:{header:null}},
  WalkthroughChatAppView:{screen:WalkthroughChatAppView,navigationOptions:{header:null}},
  WalkthroughCoffeeShopView:{screen:WalkthroughCoffeeShopView,navigationOptions:{header:null}},
  WalkthroughCreativeThingsView:{screen:WalkthroughCreativeThingsView,navigationOptions:{header:null}},
  WalkthroughDiscoverPlaceView:{screen:WalkthroughDiscoverPlaceView,navigationOptions:{header:null}},
  WalkthroughDiscoveryView:{screen:WalkthroughDiscoveryView,navigationOptions:{header:null}},
  WalkthroughEventHandlerView:{screen:WalkthroughEventHandlerView,navigationOptions:{header:null}},
  WalkthroughEventsView:{screen:WalkthroughEventsView,navigationOptions:{header:null}},
  WalkthroughFitnessView:{screen:WalkthroughFitnessView,navigationOptions:{header:null}},
  WalkthroughGetRideView:{screen:WalkthroughGetRideView,navigationOptions:{header:null}},
  WalkthroughGetStartedView:{screen:WalkthroughGetStartedView,navigationOptions:{header:null}},
  WalkthroughHistoricalPlaceView:{screen:WalkthroughHistoricalPlaceView,navigationOptions:{header:null}},
  WalkthroughHotelServiceView:{screen:WalkthroughHotelServiceView,navigationOptions:{header:null}},
  WalkthroughInvestmentView:{screen:WalkthroughInvestmentView,navigationOptions:{header:null}},
  WalkthroughJourneyView:{screen:WalkthroughJourneyView,navigationOptions:{header:null}},
  WalkthroughNewsFeedView:{screen:WalkthroughNewsFeedView,navigationOptions:{header:null}},

  EcommerceHome:{screen:EcommerceHome,navigationOptions:{header:null}},
  AboutUsView:{screen:AboutUsView,navigationOptions:{header:null}},
  AddressView:{screen:AddressView,navigationOptions:{header:null}},
  BrandsView:{screen:BrandsView,navigationOptions:{header:null}},
  CategoryProductView:{screen:CategoryProductView,navigationOptions:{header:null}},
  ChangeCountryView:{screen:ChangeCountryView,navigationOptions:{header:null}},
  ChangePasswordView:{screen:ChangePasswordView,navigationOptions:{header:null}},
  CheckOutView:{screen:CheckOutView,navigationOptions:{header:null}},
  EditInformationView:{screen:EditInformationView,navigationOptions:{header:null}},
  FAQGeneralEnquiriesView:{screen:FAQGeneralEnquiriesView,navigationOptions:{header:null}},
  FAQView:{screen:FAQView,navigationOptions:{header:null}},
  ForgotPasswordView:{screen:ForgotPasswordView,navigationOptions:{header:null}},
  InviteFriendsView:{screen:InviteFriendsView,navigationOptions:{header:null}},
  LoginView:{screen:LoginView,navigationOptions:{header:null}},
  MenuView:{screen:MenuView,navigationOptions:{header:null}},
  MyAccountView:{screen:MyAccountView,navigationOptions:{header:null}},
  MyBagView:{screen:MyBagView,navigationOptions:{header:null}},
  MyInformationView:{screen:MyInformationView,navigationOptions:{header:null}},
  NewArrivalsView:{screen:NewArrivalsView,navigationOptions:{header:null}},
  NotificationView:{screen:NotificationView,navigationOptions:{header:null}},
  OrderHistoryView:{screen:OrderHistoryView,navigationOptions:{header:null}},
  PrivacyPolicyView:{screen:PrivacyPolicyView,navigationOptions:{header:null}},
  ProductDetailsView:{screen:ProductDetailsView,navigationOptions:{header:null}},
  ProductDetailsTabView:{screen:ProductDetailsTabView,navigationOptions:{header:null}},
  ResetPasswordView:{screen:ResetPasswordView,navigationOptions:{header:null}},
  SaleView:{screen:SaleView,navigationOptions:{header:null}},
  WishListView:{screen:WishListView,navigationOptions:{header:null}},

  SocialHome:{screen:SocialHome,navigationOptions:{header:null}},
  Social1:{screen:Social1,navigationOptions:{header:null}},
  Social2:{screen:Social2,navigationOptions:{header:null}},
  Social3:{screen:Social3,navigationOptions:{header:null}},
  Social4:{screen:Social4,navigationOptions:{header:null}},
  Social5:{screen:Social5,navigationOptions:{header:null}},
  Social6:{screen:Social6,navigationOptions:{header:null}},
  Social7:{screen:Social7,navigationOptions:{header:null}},
  Social8:{screen:Social8,navigationOptions:{header:null}},
  Social9:{screen:Social9,navigationOptions:{header:null}},
  Social10:{screen:Social10,navigationOptions:{header:null}},
  Social11:{screen:Social11,navigationOptions:{header:null}},
  Social12:{screen:Social12,navigationOptions:{header:null}},
  Social13:{screen:Social13,navigationOptions:{header:null}},
  Social14:{screen:Social14,navigationOptions:{header:null}},
  Social15:{screen:Social15,navigationOptions:{header:null}},
  Social16:{screen:Social16,navigationOptions:{header:null}},
  Social17:{screen:Social17,navigationOptions:{header:null}},
  Social18:{screen:Social18,navigationOptions:{header:null}},
  Social19:{screen:Social19,navigationOptions:{header:null}},
  Social20:{screen:Social20,navigationOptions:{header:null}}

  });
// END TO MAKE HOME STACK NAVIGATOR


export default () =>
  <Root>
    <HomeStack />
  </Root>;
