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
    	return(
    		 <View style = {styles.content}> 
	          <TouchableHighlight onPress={() => {
                   this.props.navigator.push({
              message: 'Swipe right to dismiss',
              sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
            });
              }
                  }>   
                    <View style={styles.messageBox}>
                        <View>
                            <Text style={styles.messageBoxTitleText}>Push</Text>
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
	render: function() {
    return (
	<Navigator
	   initialRoute={{name: 'My First Scene', index: 0}}
	   renderScene={(route, navigator) =>
      <MySceneComponent
        name={route.name}
        navigator={navigator}
        onExit={() => {
        	this.props.onExit();
        }}
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
   //backgroundColor : "black",


  },
  content : {
  backgroundColor:'#ebeef0',
        // flex:1,
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
});

module.exports = NavigatorExample;