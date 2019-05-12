import React from 'react'
import { Platform } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import AddNewClimbsScreen from '../screens/AddNewClimbsScreen'
import MessagesScreen from '../screens/MessagesScreen'

const HomeStack = createStackNavigator({
  Home: HomeScreen
})

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  )
}

const AddNewClimbsStack = createStackNavigator({
  Climbs: AddNewClimbsScreen
})
AddNewClimbsStack.navigationOptions = {
  tabBarLabel: 'Climbs',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-add-circle' : 'md-body'}
    />
  )
}
const MessagesStack = createStackNavigator({
  Messages: MessagesScreen
})
MessagesStack.navigationOptions = {
  tabBarLabel: 'Messages',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-people' : 'md-body'}
    />
  )
}

const ProfileStack = createStackNavigator({
  Settings: ProfileScreen
})

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-body'}
    />
  )
}
export default createBottomTabNavigator({
  HomeStack,
  AddNewClimbsStack,
  MessagesStack,
  // SettingsStack,
  ProfileStack
})
