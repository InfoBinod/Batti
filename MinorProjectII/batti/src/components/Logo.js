import React ,{Component} from  'react';
import {
    View,
    Text,
  Image,
  StyleSheet
} from 'react-native';

export default class Logo extends Component {
render(){
    return(
        <View style={styles.container}>        
        <Image
          style={{width: 70, height: 70}}
          source={require('../images/Logo.png')}
        />
        <Text style={{color:'#ffffff',fontSize:18,marginVertical:15}}>WELCOME TO OUR APP</Text>
        </View>

    );
}
}
const styles =StyleSheet.create({
    container:{
    justifyContent:'center',
    alignItems:'center',
    }
    });