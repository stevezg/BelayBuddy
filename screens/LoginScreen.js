import React from 'react'
import {
  Image,
  Platform,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  Button,
  AsyncStorage,
  View,
  KeyboardAvoidingView
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import PropTypes from 'prop-types'

import { MonoText } from '../components/StyledText'

export default class LoginScreen extends React.Component {
  static navigationOptions = { header: null }
  static propTypes = {
    err: PropTypes.string,
    token: PropTypes.string,
    loginUser: PropTypes.func
  }
  state = {
    username: '',
    password: '',
    nameError: ''
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.container}>
          <KeyboardAvoidingView style={styles.child} behavior="padding" enabled>
            <View style={styles.child}>
              {!!this.state.nameError && (
                <Text style={{ color: 'white' }}>{this.state.nameError}</Text>
              )}
              <TextInput
                style={styles.input}
                placeholder="USERNAME"
                placeholderTextColor="white"
                fontSize="38"
                value={this.state.username}
                onChangeText={this.handleUsernameUpdate}
                autoCapitalize="characters"
                autoComplete="username"
                keyboardAppearance="dark"
                autoFocus={true}
                clearButtonMode="unless-editing"
              />
              <TextInput
                style={styles.input}
                placeholder="PASSWORD"
                autoComplete="password"
                fontSize="38"
                placeholderTextColor="white"
                value={this.state.password}
                onChangeText={this.handlePasswordUpdate}
                secureTextEntry={true}
                keyboardAppearance="dark"
                clearButtonMode="unless-editing"
                enablesReturnKeyAutomatically
                newPassword
                onSubmitEditing={this._signInAsync}
              />

              <TouchableOpacity
                style={{ flexDirection: 'row', display: 'flex' }}
                onPress={this.signIn}
              >
                <View
                  style={{
                    backgroundColor: 'rgb(128,193, 105)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '40%',
                    borderColor: 'white',
                    borderWidth: 1,
                    marginTop: 20,
                    marginHorizontal: 20,
                    marginBottom: 5,
                    paddingHorizontal: 10,
                    paddingVertical: 5,

                    flex: 1
                  }}
                >
                  <Text style={{ color: 'white' }}>ENTER</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.child}>
              <TouchableOpacity
                style={{ flexDirection: 'row', display: 'flex' }}
                onPress={this._loginWithFacebook}
              >
                <View
                  style={{
                    backgroundColor: 'rgb(68,105,176)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '40%',
                    borderColor: 'white',
                    borderWidth: 1,
                    marginTop: 20,
                    marginHorizontal: 20,
                    marginBottom: 5,
                    paddingHorizontal: 10,
                    paddingVertical: 5,

                    flex: 1
                  }}
                >
                  <Text style={{ color: 'white' }}>Log In with Facebook</Text>
                </View>
              </TouchableOpacity>
              <Button
                title="Don't have an account? Sign Up"
                onPress={this.signUp}
                color="white"
              />
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    )
  }
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.token) this.props.naviagtion.navigate('App')
  // }
  handleUsernameUpdate = username => {
    this.setState({ username })
  }
  handlePasswordUpdate = password => {
    this.setState({ password })
  }
  signUp = () => {
    this.props.navigation.navigate('SignUp')
  }

  _loginWithFacebook = async () => {
    const appID = '392005464978389'
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      appID,
      {
        behavior: 'native',
        permissions: ['public_profile', 'email', 'user_friends']
      }
    )

    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`
      )
      console.log('Logged in!', `Hi ${(await response.json()).name}!`)

      try {
        await AsyncStorage.setItem('userToken', token)
      } catch (error) {
        console.log(error)
      }
      this.props.navigation.navigate(token ? 'App' : 'Auth')
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(233, 130, 31)',
    justifyContent: 'space-evenly'
  },
  contentContainer: {
    paddingVertical: 20
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center'
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10
  },
  child: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 50,
    width: '80%'
  },
  signUpContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)'
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center'
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center'
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center'
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7'
  },
  errorText: {
    textAlign: 'center',
    color: 'red'
  },
  input: {
    marginTop: 20,
    color: 'white',
    marginHorizontal: 20,
    marginBottom: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '100%',
    borderBottomColor: 'white',
    borderBottomWidth: 1
  }
})
