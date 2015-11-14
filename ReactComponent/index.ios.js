'use strict';

var React = require('react-native');
var {
  Text,
  View,
  Image
} = React;

var styles = React.StyleSheet.create({
  container: {
    flex: 1,
    width:10,
    height : 300,
  },
  grid : {
    padding : 0,
    marginTop : 65,
    borderColor : '#e7e7e7',
  },
  grid_row : {
    flex : 1,
    flexDirection : 'row',
    padding : 5,
  },
  grid_item : {
    flex : 1,
    backgroundColor : '#e7e7e7',
    height : 30,
    textAlign : 'center',
  },
  image_base: {
    width: 38,
    height: 38,
  },
});
var CalendarManager = require('react-native').NativeModules.CalendarManager;
CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey');
var MyCustomView = require('./MyCustomView.js');
class MyReactNativeSample extends React.Component {
  render() {
    return (
      //<View style={styles.grid}>
      //  <View style={styles.grid_row}>
      //    <Image
      //    source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
      //    style={styles.image_base}
      //    />
      //    <Image
      //    source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
      //    style={styles.image_base}
      //    />
      //  </View>
      //  <View style={styles.grid_row}>
      //    <Text style={styles.grid_item}>1</Text>
      //    <Text style={styles.grid_item}>2</Text>
      //    <Text style={styles.grid_item}>3</Text>
      //  </View>
      //  <View style={styles.grid_row}>
      //    <Text style={styles.grid_item}>1</Text>
      //    <Text style={styles.grid_item}>2</Text>
      //    <Text style={styles.grid_item}>3</Text>
      //    <Text style={styles.grid_item}>4</Text>
      //  </View>
      //</View>
        <MyCustomView style={styles.container} />
    )
  }
}

React.AppRegistry.registerComponent('MyReactNativeSample', () => MyReactNativeSample);