import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "./components/Home"
import LoginScreen from "./components/Login"

const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
  Home: {screen: HomeScreen},
});

export default createAppContainer(MainNavigator)
  
// render(){
//     return (
//       <View>
//         <Home/>
//       </View>
//     );
//   }
// }

