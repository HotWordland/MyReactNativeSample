'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Animated,
  Image,
  Navigator,
} = React;

var Posts = require('./Posts/Posts')

var LayoutExample = React.createClass({
  renderScene : function(route,navigator){
    return(
    <Posts
       />      
      )
   
  },
  render : function(){
    return(
     <Navigator
  //初始化
     initialRoute={{name: 'My First Scene', index: 0}}
     //渲染Scene的入口
     renderScene={ this.renderScene }
     //配置Scene信息
    configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromBottom;
        }}
  />
      )

  }
})



var styles = StyleSheet.create({
  
});

module.exports = LayoutExample;