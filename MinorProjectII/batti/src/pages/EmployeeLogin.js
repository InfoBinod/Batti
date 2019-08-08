import React ,{Component} from  'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity

} from 'react-native';
import Logo from '../components/Logo';


export default class Login extends Component {
    
render(){
    return(    
         <View style = {styles.container}>
           <Logo/> 
           <View style={styles.signuptxt}>
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
        <Text>Are YOU A USER</Text>
       <TouchableOpacity >
         <Text style ={{color:'#ffffff'}}> SIGN IN</Text>
       </TouchableOpacity>  
       </View>
        </View>
      

    );
}
}
const styles =StyleSheet.create({
    container:{
        backgroundColor:'#455a64',
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    signuptxt:{
        flexGrow:1,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:10
        
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
