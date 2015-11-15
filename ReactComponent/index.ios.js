/* @flow */
'use strict';

var React = require('react-native');
var BASE_URL = 'https://api.github.com/search/repositories?q=';

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
               onEndEditing={this.onSearchChange}
      />
      </View>
    );
  },
  onSearchChange : function(event : Object){
   var searchTerm = event.nativeEvent.text.tolowerCase();
   var queryURL = BASE_URL + encodeURIComponent(searchTerm);
   fetch(queryURL)
   .then((response) => response.json())
   .then((responseData)=>{
    if (responseData.items) {
      this.setState({
        dataSource : this.state.dataSource.cloneWithRows
        (responseData.items),
      });
      }
    }
   })
   .done();

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
