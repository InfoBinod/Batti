import React ,{Component} from  'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import Logo from '../components/Logo';
import Signupform from '../components/Signupform';
import {  TouchableOpacity } from 'react-native-gesture-handler';

export default class Signup extends Component {
render(){
    return(
        <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style = {styles.container}>
            <Logo/> 
            <Signupform/>
            <View style={styles.signuptxt}>
                <Text style={{fontSize:16}}>Are You Employee </Text>
                <TouchableOpacity style = {{color:'#ffffff',fontSize:16}} onPress = {() => this.props.navigation.navigate('EmployeeLogin')}>
                <Text style={{color:'#ffffff',fontSize:16,paddingHorizontal:5}}>SIGN IN</Text>
                </TouchableOpacity>
                <Text style={{fontSize:16}}>Already have an account </Text>
                <TouchableOpacity style = {{color:'#ffffff',fontSize:16}} onPress = {() => this.props.navigation.navigate('Login')}>
                <Text style={{color:'#ffffff',fontSize:16,paddingHorizontal:5}}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    );
}
}
const styles =StyleSheet.create({
    container:{
    backgroundColor:'#455a64',
    flexGrow:1,
    justifyContent:'center',
    alignItems:'center',
    },
    signuptxt:{
        flexGrow:1,
        alignItems:'center',
        justifyContent:'flex-end',
        marginVertical:10,
    },
    contentContainer: {
        
      }
    });