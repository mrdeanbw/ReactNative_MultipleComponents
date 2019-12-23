const React = require("react-native");

const { StyleSheet,Platform } = React;
// BEGIN TO SETUP GLOBAL CSS
export default {
  rowContainer: {
    flexDirection: 'row',
    marginTop:15,
    justifyContent: 'center',
  },
  badgeContainer: {
    paddingLeft: 40,
  },
  textStyle: {
    padding:15,
    fontWeight: 'bold',
    textAlign:'center',
    fontSize:15
  },
  scroll: {
    flex:1,
    backgroundColor: 'transparent',
  },
  card: {
    borderRadius: 2,
    padding: 8,
    margin: 4,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    height: 200,
    justifyContent: 'center',
    alignItems:'center',
    shadowOpacity: 0.54,
    shadowRadius: 1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1
  },
  button_card: {
    borderRadius: 2,
    padding: 8,
    margin: 4,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    minHeight: 76,
    justifyContent: 'space-between',
    shadowOpacity: 0.54,
    shadowRadius: 1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },
  avtarContainerView: {
    width:'33%',
    justifyContent:'center',
    alignItems:'center',
    height:80
  }
};
// END TO SETUP GLOBAL CSS
