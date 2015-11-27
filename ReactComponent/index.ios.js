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
  TouchableHighlight,
} = React;

var MyReactNativeSample = React.createClass({
   getInitialState: function() {
    return {
      openExternalExample: (null: ?false),
    };
  },
  render: function() {
    if (this.state.openExternalExample) {
       var NavigatorExample = require('./Navigator/Navigator')
      return (
        <NavigatorExample
        onExit={() => {
            this.setState({ openExternalExample: null, });
          }}
        />
      );
    }

    return(
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Home',
          component: HomeIndexScene,
          passProps: {
              onExternalExampleRequested: (mark) => {
              this.setState({ openExternalExample: mark, });
            },
            },
        }}
        itemWrapperStyle={styles.itemWrapper}
        tintColor="black"
        barTintColor="white"
        titleTextColor="black"
      />
    )
  }
});
var HomeIndexScene = React.createClass({
  render : function(){
    return(
    
                 <View style = {styles.content}> 
                  <TouchableHighlight onPress={() => {
                    var GitFinderScene  = require('./GitFinder/GitFinder');

                    this.props.navigator.push({
                      title: "GitFinder",
                      component: GitFinderScene,
                    });
                  }
                  }>   
                    <View style={styles.messageBox}>
                        <View>
                            <Text style={styles.messageBoxTitleText}>GitFinder</Text>
                        </View>
                        <View>
                            <Text style={styles.messageBoxBodyText}>搜索github的仓库.</Text>
                        </View>
                    </View>
                   </TouchableHighlight>

                  <TouchableHighlight onPress={() => {
                    // var NavigatorScene  = require('./Navigator/Navigator');

                    // this.props.navigator.push({
                    //   title: "NavigatorExample",
                    //   component: NavigatorScene,
                    // });
                    this.props.onExternalExampleRequested(true);

                  }
                  }>   
                   <View style={styles.messageBox}>
                        <View>
                            <Text style={styles.messageBoxTitleText}>Navigator</Text>
                        </View>
                        <View>
                            <Text style={styles.messageBoxBodyText}>Facebook-js实现Navi方案</Text>
                        </View>
                    </View>
                    </TouchableHighlight>

                    <View style={styles.messageBox}>
                        <View>
                            <Text style={styles.messageBoxTitleText}>更新中...</Text>
                        </View>
                        <View>
                            <Text style={styles.messageBoxBodyText}>更新中...</Text>
                        </View>
                    </View>

                  </View>
      )
  }
})

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
        backgroundColor:'#ef553a',
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


React.AppRegistry.registerComponent('MyReactNativeSample', () => MyReactNativeSample);
