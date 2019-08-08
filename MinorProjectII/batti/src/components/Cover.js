import React ,{Component} from  'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

export default class Cover extends Component{
    render(){
        return(
            <View>
             <Image
             style={{width: 50, height: 50}}
             source={require('../images/Logo.png')}
              />
            </View>
        )
    }
}