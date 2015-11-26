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
} = React;

var GitFinderScene = React.createClass({
  getInitialState : function() {
  return {
    dataSource : new ListView.DataSource({
      rowHasChanged:(row1,row2) => row1 !== row2,
    }),
  };
  },
  render: function() {
    var content;
      if (this.state.dataSource.getRowCount() === 0) {
        content = <Text>Please enter a search term to see results.</Text>
      }else{
        content = 
        <ListView
        ref="ListView"
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        automaticallyAdjustContentInsets={false}
        keyboradDismissMode="OnDrag"
        keyboradShouldPersistTags={true}
        showsVerticalScrollIndicator={true} 
        />;
      }
    return (
      <View style={styles.container}>
      <TextInput
               autoCapitalize="none"
               autoCorrect={false}
               placeholder="Search for a Project..."
               style={styles.searchBarInput}
               onEndEditing={this.onSearchChange}
      />
      {content}
      </View>
    );
  },
  renderRow : function(repo : Object) {
  return(
    <View>
      <View style={styles.row}>
        <Image
          style={styles.profpic}
          source={{uri: repo.owner.avatar_url}} />
        
        <View style={styles.textContainer}>
        <Text>{repo.name}</Text>
     

        <Text>地址:{repo.archive_url}</Text>

        <Text>描述:{repo.description}</Text>
       </View>
        </View>
        <View style={styles.cellBorder} />  
    </View>
    );
  },
  onSearchChange : function(event : Object){
   var searchTerm = event.nativeEvent.text.toLowerCase();
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
   }).done();
 },
});


var styles = StyleSheet.create({
  container:{
   flex : 1,
   backgroundColor : 'white',
   marginTop : 64,
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
    alignItems : 'flex-start',
    backgroundColor:'white',
    // flexDirection:'column',
    padding:5,
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


module.exports = GitFinderScene;
