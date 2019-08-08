import React ,{Component} from  'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  
} from 'react-native';
import Header from './Header';

export default class Signupform extends Component {
render(){
    return(
        
        
        <View style = {styles.container}>
        <Header/>
            <TextInput style ={styles.inputext}
            placeholder="Name"
            placeholderTextColor='#ffffff'
            underlineColorAndroid = 'rgba(0,0,0,0)'
            />
            <TextInput style ={styles.inputext}
            placeholder="Address"
            placeholderTextColor='#ffffff'
            underlineColorAndroid = 'rgba(0,0,0,0)'
            />
            <TextInput style ={styles.inputext}
            placeholder="Phone-no"
            placeholderTextColor='#ffffff'
            underlineColorAndroid = 'rgba(0,0,0,0)'
            />
            <TextInput style ={styles.inputext}
            placeholder="Meter-NO"
            placeholderTextColor='#ffffff'
            underlineColorAndroid = 'rgba(0,0,0,0)'
            />
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
         <Text style ={styles.buttontext}>SIGN UP</Text>
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
        marginVertical:5
    },
    button:{
        backgroundColor:'#1c313a',
        borderRadius:25,
        width:300,
        marginVertical:10,
        paddingVertical:13

    },
    buttontext:{
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center',
        
    }
    
    });
    
        
    