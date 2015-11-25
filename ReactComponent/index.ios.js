/* @flow */
'use strict';

var React = require('react-native');
var BASE_URL = 'https://api.github.com/search/repositories?q=';

var {
  AppRegistry,
  StyleSheet,
  View,
  TextInput,
  Text,
  ListView,
  Image,
  NavigatorIOS,
} = React;

var MyReactNativeSample = React.createClass({
  render: function() {
    return(
       <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'HomeIndex',
          component: HomeIndexScene,
          passProps: {
          
            },
        }}
       // tintColor="#EAEAEA"
      />
    )
  }
});
var HomeIndexScene = React.createClass({
  render : function(){
    return(
     <View style={styles.row}>
        <Text style={styles.rowText}>GitFinder</Text>
    </View>
      )
  }
})

var styles = StyleSheet.create({
  container:{
   flex : 1,
  
  },
  searchBarInput:{
    marginTop : 30,
    padding : 5,
    fontSize : 15,
    //flex : 1,
    height : 30,
    backgroundColor : '#EAEAEA',
  },
  row:{
    //flex : 1,
    marginTop : 64,
    height:50,
    // marginTop:64,
    alignItems : 'center',
    // flexDirection:'column',
    // padding:5,
    backgroundColor : '#EAEAEA',
    // alignItems : 'center',

  },
  rowText:{
    // alignSelf : 'center',
  },
  cellBorder:{
    backgroundColor:'rgb(0,0,0,1)',
    height:1,
    marginLeft:4,
  },
  profpic:{
     width:50,
     height:50,
  },
  textContainer:{
    marginLeft:60,
    marginTop:-50,
  },
});


React.AppRegistry.registerComponent('MyReactNativeSample', () => MyReactNativeSample);
