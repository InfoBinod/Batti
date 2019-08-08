import React ,{Component} from  'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity} from 'react-native';
  import {createStackNavigator,createBottomTabNavigator,createAppContainer } from 'react-navigation';


 
  

      
  export default class WelcomeScreen extends Component {
      render(){
          return(
            <View>
                <Text>this is a first application.</Text>
            </View>
          )
      }
  }