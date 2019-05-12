import React from 'react'
import {
  Platform,
  AsyncStorage,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from 'react-native'
import { WebBrowser } from 'expo'
import PropTypes from 'prop-types'

import { MonoText } from '../components/StyledText'

export default class SignUpScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  static propTypes = {
    err: PropTypes.string,
    token: PropTypes.string,
    loginUser: PropTypes.func
  }
  state = {
    name: '',
    username: '',
    password: '',
    number: '',
    org: ''
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.container}>
          <KeyboardAvoidingView style={styles.child} behavior="padding" enabled>
            <View style={styles.getStartedContainer}>
              <Text style={styles.errorText}>{this.props.err}</Text>

              <TextInput
                style={styles.input}
                placeholder="Full Name"
                placeholderTextColor="white"
                value={this.state.name}
                onChangeText={this.handlenameUpdate}
                autoCapitalize="characters"
                fontSize="38"
              />
              <TextInput
                style={styles.input}
                placeholder="UserName"
                placeholderTextColor="white"
                value={this.state.username}
                onChangeText={this.handleUsernameUpdate}
                fontSize="38"
                autoCapitalize="characters"
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="white"
                value={this.state.password}
                onChangeText={this.handlePasswordUpdate}
                secureTextEntry
                autoCapitalize="characters"
                fontSize="38"
              />
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Phone Number"
                placeholderTextColor="white"
                value={this.state.number}
                onChangeText={this.handleNumberUpdate}
                fontSize="38"
              />
              <TextInput
                style={styles.input}
                placeholder="Organization"
                placeholderTextColor="white"
                value={this.state.org}
                onChangeText={this.handleOrgUpdate}
                autoCapitalize="characters"
                fontSize="38"
              />

              <TouchableOpacity
                style={{ flexDirection: 'row', display: 'flex' }}
                onPress={this.signUp}
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
                  <Text style={{ color: 'white' }}>Sign Up</Text>
                </View>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    )
  }
  handlenameUpdate = name => {
    this.setState({ name })
  }
  handleUsernameUpdate = username => {
    this.setState({ username })
  }
  handlePasswordUpdate = password => {
    this.setState({ password })
  }
  handleNumberUpdate = number => {
    this.setState({ number })
  }
  handleOrgUpdate = org => {
    this.setState({ org })
  }

  signUp = async () => {
    let data = {
      name: this.state.name,
      username: this.state.username,
      password: this.state.password,
      org: this.state.org
    }
    console.log(data)

    this.props.navigation.navigate('App')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(233, 130, 31)',
    justifyContent: 'center',
    alignItems: 'center'
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
  getStartedContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 50
  },
  signUpContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
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
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '95%',
    borderBottomColor: 'white',
    borderBottomWidth: 1
  }
})
