/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import SplashScreen from './Source/View/SplashScreen/splashscreen.js';
AppRegistry.registerComponent(appName, () => SplashScreen);
