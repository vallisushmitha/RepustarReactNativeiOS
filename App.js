import React from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { Asset } from 'expo-asset';
import SignInScreen from './SignInScreen';
import Investigate from './Investigate';
import Search from './Search';
import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  "InvestigatePage" : Investigate,
  "SignIn": SignInScreen,
  "Search": Search,
})

//cause of error using old code of lecture refered from docs https://reactnavigation.org/docs/en/app-containers.html
const AppContainer = createAppContainer(AppNavigator);


export default class App extends React.Component {
  render () {
    return <AppContainer />
  }
}
