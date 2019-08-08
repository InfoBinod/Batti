import React ,{Component} from  'react';
import {
    View,
  StatusBar
} from 'react-native';
export default class Header extends Component {
    render(){
        return(
            <View>
            <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
            </View>
        )
    }

}