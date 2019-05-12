import React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { AppLoading, Asset, Font, Icon } from 'expo'
import AppNavigator from './navigation/AppNavigator'
import HomeScreen from './screens/HomeScreen'

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      )
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      )
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/climbers/1.jpg'),
        require('./assets/images/climbers/2.jpg'),
        require('./assets/images/climbers/3.gif'),
        require('./assets/images/climbers/4.jpg'),
        require('./assets/images/climbers/5.jpg'),
        require('./assets/images/climbers/6.jpg'),
        require('./assets/images/climbers/7.jpg'),
        require('./assets/images/climbers/8.jpg'),
        require('./assets/images/climbers/9.jpg'),
        require('./assets/images/climbers/10.jpg'),
        require('./assets/images/climbers/11.jpg'),
        require('./assets/images/climbers/12.jpg'),
        require('./assets/images/climbers/13.jpg'),
        require('./assets/images/climbers/14.jpg'),
        require('./assets/images/climbers/15.jpg'),
        require('./assets/images/climbers/16.jpg')
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')
      })
    ])
  }

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error)
  }

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
