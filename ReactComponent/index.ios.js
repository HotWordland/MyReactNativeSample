/* @flow */
'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  TextInput,
} = React;

var MyReactNativeSample = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
      <TextInput
               autoCapitalize="none"
               autoCorrect={false}
               placeholder="Search for a Project..."
               style={styles.searchBarInput}
      />
      </View>
    );
  }
});


var styles = StyleSheet.create({
  container:{
   flex : 1,
   backgroundColor : 'white',
  },
  searchBarInput:{
    marginTop : 30,
    padding : 5,
    fontSize : 15,
    //flex : 1,
    height : 30,
    backgroundColor : '#EAEAEA',
  }
});


React.AppRegistry.registerComponent('MyReactNativeSample', () => MyReactNativeSample);
