'use strict';

var React = require('react-native');
var {
  Navigator,
  PixelRatio,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
} = React;

var MySceneComponent = React.createClass({
    render : function(){
    	return(
    		 <Text>ceshi</Text>
    		);
    
    }

});
var NavigatorExample = React.createClass({
	render: function() {
    return (
	<Navigator
	   initialRoute={{name: 'My First Scene', index: 0}}
	   renderScene={(route, navigator) =>
      <MySceneComponent
        name={route.name}
        onForward={() => {
          var nextIndex = route.index + 1;
          navigator.push({
            name: 'Scene ' + nextIndex,
            index: nextIndex,
          });
        }}
        onBack={() => {
          if (route.index > 0) {
            navigator.pop();
          }
        }}
      />
    }
  />
    );
  }
});
module.exports = NavigatorExample;