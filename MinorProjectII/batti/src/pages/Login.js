import React ,{Component} from  'react';
import {
  StyleSheet,
  Text,
  alert,
  View,
  TextInput,
  TouchableOpacity} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import Logo from '../components/Logo';

const validationSchema = yup.object().shape(
    {
        name: yup.number().required('Meter-NO is required'),
        password:yup.string().required('password is required')
        .min(6)
    }

)


export default class Login extends Component {
    
render(){   
    return(    
        <Formik 
        initialValues = {{name:'',password:''}}
        onSubmit={ values => {
        alert(JSON.stringify(values))
        
        }
        } 
        validationSchema={validationSchema}
        >
        
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
        <React.Fragment>
           
         <View style = {styles.container}>
           <Logo/> 
           <View style={styles.containerone}>
           <TextInput style ={styles.inputext}
            placeholder="Meter-NO"
            placeholderTextColor='#ffffff'
            underlineColorAndroid = 'rgba(0,0,0,0)'
            onChangeText = {handleChange('name')}
            />
            <Text style ={{color:'red'}}>{errors.name}</Text>
            <TextInput style ={styles.inputext}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor='#ffffff'
            underlineColorAndroid = 'rgba(0,0,0,0)'
            onChangeText = {handleChange('password')}
            
            />
            <Text style ={{color:'red'}}>{errors.password}</Text>
         <TouchableOpacity style = {styles.button}  disabled={!isValid}
         onPress={handleSubmit} onPress = {() => this.props.navigation.navigate('Dashboard')}>
         <Text style ={styles.buttontext}> LOGIN</Text>
       </TouchableOpacity>       
            <View style={styles.signuptxt}>
            <Text style={{fontSize:16}}>Are You Employee </Text>
            <TouchableOpacity style = {{color:'#ffffff',fontSize:16}} onPress = {() => this.props.navigation.navigate('EmployeeLogin')}>
                <Text style={{color:'#ffffff',fontSize:16,paddingHorizontal:5}}>SIGN IN</Text>
                </TouchableOpacity>
                <Text style={{fontSize:16,justifyContent:'center',textAlign:'center'}}>Does't have an account yet?</Text>
                <TouchableOpacity style = {{color:'#ffffff',fontSize:16}} onPress = {() => this.props.navigation.navigate('Register')}>
                 <Text style={{alignItems:'center' ,fontSize:16, color:'#ffffff'}}>SIGN UP</Text>   
                </TouchableOpacity>
            </View>
            </View>
        </View>
        </React.Fragment>
       )}
        </Formik>
    );
}
}
const styles =StyleSheet.create({
    container:{
    backgroundColor:'#455a64',
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center',
    },
    containerone:{
        flex:1,
        backgroundColor:'#455a64',
        justifyContent:'flex-start',
        alignItems:'center',
        },
    signuptxt:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
        
    },
    inputext:{
        width:300,
       justifyContent:'flex-start',
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
        

    },
    buttontext:{
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    }
    });
