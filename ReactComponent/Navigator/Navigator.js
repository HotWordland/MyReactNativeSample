'use strict';

var React = require('react-native');
var {
  Navigator,
  PixelRatio,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;

var MySceneComponent = React.createClass({
    render : function(){

      var dismissMessageBox;
      if (this.props.message) {
        dismissMessageBox = <View style={styles.dismissMessageBox}>
                        <View>
                            <Text style={styles.dismissMessageBoxTitleText}>{this.props.message}</Text>
                        </View>
                    </View>
      };
    	return(
    		 <View style = {styles.content}> 
         {dismissMessageBox}
	          <TouchableHighlight onPress={() => {
             this.props.navigator.push({
              message: '向下滑动移出',
              //配置信息 : 过渡的动画属性
              sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
            });
              }
                  }>   
                    <View style={styles.messageBox}>
                        <View>
                            <Text style={styles.messageBoxTitleText}>Push FloatFromBottom</Text>
                        </View>
                        <View>
                            <Text style={styles.messageBoxBodyText}>点击推入下一个页面.</Text>
                        </View>
                    </View>
                   </TouchableHighlight>

                    <TouchableHighlight onPress={() => {
             this.props.navigator.push({
              message: '右滑动移出(从左边缘)',
              sceneConfig: Navigator.SceneConfigs.FloatFromRight,
            });
              }
                  }>   
                    <View style={styles.messageBox}>
                        <View>
                            <Text style={styles.messageBoxTitleText}>Push FloatFromRight</Text>
                        </View>
                        <View>
                            <Text style={styles.messageBoxBodyText}>点击推入下一个页面.</Text>
                        </View>
                    </View>
                   </TouchableHighlight>

		<TouchableHighlight onPress={() => {
            this.props.onExit();
          }}>   
                      <View style={styles.messageBox}>
                        <View>
                            <Text style={styles.messageBoxTitleText}>onExit</Text>
                        </View>
                        <View>
                            <Text style={styles.messageBoxBodyText}>退出.</Text>
                        </View>
                    </View>
        </TouchableHighlight>

                  </View>
                  )
    
  }
});
var NavigatorExample = React.createClass({
  //navigator 渲染每个Scene的入口
  renderScene: function(route, navigator) {
      return (
      <MySceneComponent
        name={route.name}
        navigator={navigator}
        message={route.message}
        onExit={this.props.onExit}
       
      />
        );
  },
	render: function() {
    return (
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

    );
  }
});
var styles = StyleSheet.create({
  container:{
   flex : 1,
  },
  content : {
   marginTop : 64,
   marginLeft : 0,
   marginRight : 0,
   marginBottom : 0,
        flexDirection:'column',
        alignItems:'center',
        //justifyContent:'center'
  },
   messageBox:{
        marginTop : 5,
        backgroundColor:'#87CEEB',
        width:300,
        paddingTop:10,
        paddingBottom:20,
        paddingLeft:20,
        paddingRight:20, 
        borderRadius:10,


    },
    messageBoxTitleText:{
        fontWeight:'bold',
        color:'#fff',
        textAlign:'center',
        fontSize:20,
        marginBottom:10
    },
    messageBoxBodyText:{
        color:'#fff',
        textAlign:'center',
        fontSize:16
    },
    dismissMessageBox:{
        marginTop : 5,
        backgroundColor:'#ef553a',
        width:300,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20, 
        borderRadius:10,
    },
     dismissMessageBoxTitleText:{
        fontWeight:'bold',
        color:'#fff',
        textAlign:'center',
        fontSize:20,
    },
});

module.exports = NavigatorExample;