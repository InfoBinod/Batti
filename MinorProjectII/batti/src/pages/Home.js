import React ,{Component} from  'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity

  } from 'react-native';
  
  export default class Home extends Component {
      render(){
          return(
            <ImageBackground source={require('../images/home.png')} style={{height:'100%',width:'100%',flex:1}} >
            <View style={styles.container}>
              <View style = {styles.header}>
                <Text style ={styles.txtstyle}>H  O  M  E</Text>
              </View> 
                <View style={styles.outer}>
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Payment')}>
                    <Image style={{height:150,width:150,marginHorizontal:40}} source={require('../images/bill.png')}/>
                    </TouchableOpacity >
                    <TouchableOpacity onPress = {() => this.props.navigation.navigate('News')}>
                    <Image style={{height:150,width:150,marginHorizontal:40}} source={require('../images/news.png')}/>
                  </TouchableOpacity>
                </View>
                <View style={{justifyContent:'center',flex:1,flexDirection:'row',alignItems:'center'}}>
                  <Text style={{fontSize:24,color:'black',marginRight:90}}>
                    Bill Pay
                  </Text>
                  <Text style={{fontSize:24,color:'black',marginLeft:80}}>
                    News
                  </Text>
                </View>
              </View>
            </ImageBackground>
            
          )
      }
  }
  const styles=StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'rgba(47,163,218,.4)',
      height:'100%',
      width:'100%'
      
    },
    header:{
      height:'50%',
      alignItems:'center',
      justifyContent:'center'  
    },
    txtstyle:{
      fontSize:28,
      color:'black',
      borderColor:'#fff',
      borderWidth:2,
      padding:20,
      paddingHorizontal:40,
      backgroundColor:'rgba(255,255,255,0.1)',


      
      
    },
    outer:{
      height:'100%',
      width:'100%',
      flex:1,
      justifyContent:'center',
      flexDirection:'row',
    }
     })