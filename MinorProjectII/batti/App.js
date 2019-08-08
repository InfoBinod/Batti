import React ,{Component} from  'react';
import { createDrawerNavigator, createSwitchNavigator,createBottomTabNavigator, createAppContainer,createStackNavigator } from 'react-navigation';
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';
import EmployeeLogin from './src/pages/EmployeeLogin';
import Home from './src/pages/Home';
import Profile from './src/pages/Profile';
import Setting from './src/pages/Setting';
import Icon from 'react-native-vector-icons/Ionicons';
import Payment from './src/pages/Payment';
import News from './src/pages/News';



const AppBottomTabNavigator = createBottomTabNavigator(
  {
    
  
    Home:{
      screen:Home,
      
      navigationOptions:{
        
        tabBarLabel : 'Home',
        tabBarIcon : ({tintColor,focused}) => (
          <Icon name = 'ios-home' size={24}/>
        )
        
      }
    },
    Profile:{
      screen:Profile,
      navigationOptions:{
        
        tabBarLabel : 'Profile',
        tabBarIcon : ({tintColor}) => (
          <Icon name = 'ios-person' size={24}/>
        )
      }
    },
    Setting:{
      screen:Setting,
      navigationOptions:{
        tabBarLabel : 'Settings',
        tabBarIcon : ({tintColor}) => (
          <Icon name = 'ios-settings' size={24}/>
        )
      }
    }
      
    
    

  },
  
  {
  navigationOptions:({navigation}) => {
    const { routeName } = navigation.state.routes
    [navigation.state.index];
    return{
      headerTitle:routeName
    }
  }}
  );
const AppStackNavigator = createStackNavigator({
  AppBottomTabNavigator:AppBottomTabNavigator,
  Payment:
  {screen:Payment,
    navigationOptions:{
      title:'Make Payment'
    }
  },
  News:{
    screen:News,
    navigationOptions:{
      title:'News'
    }
  }


},
{
  defaultNavigationOptions : ({navigation})=>{
    return{
      
      headerLeft:(
        <Icon style={{paddingLeft:10,paddingRight:30 }} onPress={() => navigation.openDrawer()} name ='ios-menu' size ={30}/>
        
      )
    }
  }
}
)
const AppDrawerNavigator = createDrawerNavigator({
  Dashboard:AppStackNavigator
})


const AppSwitchNavigator  = createSwitchNavigator({
  Login:Login,
  Register:Signup,
  
  EmployeeLogin:EmployeeLogin,
  Dashboard:AppDrawerNavigator,
  //Payment:Payment,
  //News:News
 

})

const AppContainer = createAppContainer(AppSwitchNavigator);
export default class App extends Component {
  render() {
    return(
       
          <AppContainer/>
       
    );
  }
}
