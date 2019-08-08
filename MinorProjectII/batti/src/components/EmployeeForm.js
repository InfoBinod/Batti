import React ,{Component} from  'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Header from './Header';

export default class Form extends Component {
    
render(){
    return(
        <View style = {styles.container}>
           <Header/>
            <TextInput style ={styles.inputext}
            placeholder="Email"
            placeholderTextColor='#ffffff'
            underlineColorAndroid = 'rgba(0,0,0,0)'
            />
            <TextInput style ={styles.inputext}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor='#ffffff'
            underlineColorAndroid = 'rgba(0,0,0,0)'
            />
         <TouchableOpacity style = {styles.button}>
         <Text style ={styles.buttontext}> LOGIN</Text>
       </TouchableOpacity>        
        </View>
    );
}
}
const styles =StyleSheet.create({
    container:{
    backgroundColor:'#455a64',
    flexGrow: 1,
    justifyContent:'center',
    alignItems:'center',
    },   
    inputext:{
        width:300,
        backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius:25,
        paddingHorizontal:16,
        fontSize:16,
        color:'#ffffff',
        marginVertical:10
    },
    button:{
        backgroundColor:'#1c313a',
        borderRadius:25,
        width:300,
        marginVertical:10,
        paddingVertical:13,
        justifyContent:'center',
        alignItems:'center'

    },
    buttontext:{
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    }
    });