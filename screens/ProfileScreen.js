import React from 'react'
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  AsyncStorage,
  View,
  TouchableOpacity,
  FlatList,
  Button
} from 'react-native'
import { WebBrowser } from 'expo'
import PropTypes from 'prop-types'

import { MonoText } from '../components/StyledText'

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.getFriends()
  }
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
    birthday: '',
    id: '',
    picture: '',
    routesClimbed: [],
    description: '',
    immedieteObjective: ''
  }

  componentDidMount = () => {
    this.getFriends()
  }
  componentDidUpdate = () => {}

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.getStartedContainer}>
            <Text style={styles.errorText}>{this.props.err}</Text>
            <Text>Hi {this.state.name}</Text>
            <Button title="Sign Out" onPress={this._signOutAsync} />
          </View>
        </ScrollView>
      </View>
    )
  }

  getFriends = async () => {
    const token = await AsyncStorage.getItem('userToken')
    try {
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}&fields=id,friends,name,birthday,picture.tpye(large)`
      )
      const { friends, id, picture, name, birthday } = await response.json()
      this.setState({ friends: friends.data, id, name, birthday, picture })
    } catch (error) {
      console.log(error)
    }
    console.log(this.state)
  }

  _signOutAsync = async () => {
    try {
      await AsyncStorage.clear()
    } catch (error) {
      console.log(error)
    }
    this.props.navigation.navigate('Auth')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
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

    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3
  }
})
