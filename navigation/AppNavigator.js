import React from 'react'
import { createSwitchNavigator, createStackNavigator } from 'react-navigation'

import MainTabNavigator from './MainTabNavigator'
import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'
import HomeScreen from '../screens/HomeScreen'
import AuthLoadingScreen from '../screens/AuthLoadingScreen'

const AuthStack = createStackNavigator({
  SignIn: LoginScreen,
  SignUp: SignUpScreen
})
const AppStack = createStackNavigator({ Main: MainTabNavigator })

export default createSwitchNavigator(
  {
    // You could add another route here for authentication.
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    // Main: MainTabNavigator,
    Auth: AuthStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
)
