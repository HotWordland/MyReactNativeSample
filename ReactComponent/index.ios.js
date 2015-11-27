/* @flow */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  NavigatorIOS,
  TouchableHighlight,
} = React;

var MyReactNativeSample = React.createClass({
  //在这里声明了一个变量(在React-Native里面叫做状态) 有什么用呢？在stackoverflow里找到一句话 "React will automatically do a re-render when state or props change, so there's no need for this." 就是说当我们改变
  //了状态的值 那么 React就会自动地重新渲染界面 执行render方法
   getInitialState: function() {
    return {
      openNavigatorExample: (null: ?false),
    };
  },
  //渲染
  render: function() {
    //判断一下是不是打开了navigator的例子是的话我们就将界面重新渲染成navigatorExample 不是的话那么就渲染成本来的样子
    if (this.state.openNavigatorExample) {
       var NavigatorExample = require('./Navigator/Navigator')
      return (
        <NavigatorExample
          onExit={() => {
            this.setState({ openNavigatorExample: null, });
          }}
        />
      );
    }

    return(
      //React-Native的NavigatorIOS控件 详细的用法和信息可以在官方文档搜索
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Home',
          component: HomeIndexScene,
          passProps: {
              onNavigatorExampleRequested: (mark) => {
              this.setState({ openNavigatorExample: mark, });
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
//NavigatorIOS 第一个Scene
var HomeIndexScene = React.createClass({
  render : function(){
    return(
    
                 <View style = {styles.content}> 
                  <TouchableHighlight onPress={() => {
                    var GitFinderScene  = require('./GitFinder/GitFinder');
                    //这里使用的NavigatorIOS进行跳转
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
                    //这里点击触发重新渲染成navigatorExample界面
                    this.props.onNavigatorExampleRequested(true);

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
//样式
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

//注册程序的入口
React.AppRegistry.registerComponent('MyReactNativeSample', () => MyReactNativeSample);
