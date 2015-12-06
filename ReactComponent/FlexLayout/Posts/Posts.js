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

var PostsSceneComponent = React.createClass({
    render : function(){
      return(
         <View style = {styles.content}> 
                <View style={styles.messageBox}>
                        <View>
                            <Text style={styles.messageBoxTitleText}>Posts</Text>
                        </View>
                        <View>
                            <Text style={styles.messageBoxBodyText}>PostsCompo</Text>
                        </View>
                    </View>
                </View>
    
        )

     
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

module.exports = PostsSceneComponent;