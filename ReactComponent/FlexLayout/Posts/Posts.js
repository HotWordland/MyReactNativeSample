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
  Image,
} = React;
var Dimensions = require('Dimensions');

var PostsSceneComponent = React.createClass({
    render : function(){
      return(
         <View style = {styles.container}>
            <View style = {styles.naviBarContainer}>
              <Image source={require('image!default_face')} style={styles.headerIm} />
              <View style = {styles.iconSearchContainer} >
              <Image source={require('image!RectangleBg')} style={styles.iconSearchBg} />
               <Image source={require('image!searchIcon')} style={styles.searchIcon} />
               <Text style = {styles.searchIndicatorText}>搜索帖子,用户名</Text>
              </View>
              <View style={styles.saoyisaoContainer}>
              <Image source={require('image!saoyisao')} style={styles.saoyisaoIcon} />
              <Text style={styles.saoyisaoText}>扫一扫</Text>
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
  headerIm: {
    width: 30,
    height: 30,
    marginRight : 13,
   borderRadius : 15,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  saoyisaoIcon:{
     width : 25,
     height : 25,
     position : 'absolute',
     top : -5,
  },
  saoyisaoText:{
    position : 'absolute',
    top : 23,
    width : 30 ,
    left : -2 ,
    fontSize : 10 ,
    color : 'white',
  },
  saoyisaoContainer:{
    width : 25,
    height : 30,
  },
  searchIndicatorText:{
    position : 'absolute',
    left : 8,
    top : 6,
    backgroundColor : 'clear',
    color : 'gray',
  },
  searchIcon:{
     width : 23,
     height : 20,
     position : 'absolute',
     right : 8,
     top : 4,
     backgroundColor : 'clear',
  },
   iconSearchContainer : {
    marginRight : 13,
    width : Dimensions.get('window').width - 55 - 30 - 26,
    height : 30,
    borderRadius : 5,
  },
  iconSearchBg : {
    width : Dimensions.get('window').width - 55 - 30 - 26,
    height : 30,
    borderRadius : 5,
  },
  naviBarContainer:{
    backgroundColor : '#87CEEB',
    height : 64,
    paddingTop : 26,
    paddingLeft : 15,
    paddingRight : 15,
    paddingBottom : 8,
    flexDirection:'row',
   // alignItems : 'center',
    //justifyContent : 'space-between',
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
