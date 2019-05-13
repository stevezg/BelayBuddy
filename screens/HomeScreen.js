import React from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Animated,
  PanResponder
} from 'react-native'
import { WebBrowser } from 'expo'

import { MonoText } from '../components/StyledText'
import RoutesClimbedList from './RoutesClimbedList'

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

const Users = [
  {
    id: '15',
    uri: require('../assets/images/climbers/15.jpg'),
    name: 'climber',
    grade: '5.12',
    description: 'Looking for a climbing partner for el cap this season.',
    immediate_initiative: 'freerider on el cap',
    climbs_completed: [
      'fortune-500',
      'wheel-of-cheese',
      'edge oftime',
      'cryogenics',
      'twin cracks'
    ]
  },
  {
    id: '4',
    uri: require('../assets/images/climbers/4.jpg'),
    name: 'climber',
    grade: '5.12',
    description: 'Looking for a climbing partner for el cap this season.',
    climbs_completed: [
      'fortune-500',
      'wheel-of-cheese',
      'edge oftime',
      'cryogenics',
      'twin cracks'
    ]
  },
  {
    id: '8',
    uri: require('../assets/images/climbers/8.jpg'),
    name: 'climber',
    grade: '5.12',
    description: 'Looking for a climbing partner for el cap this season.',
    climbs_completed: [
      'fortune-500',
      'wheel-of-cheese',
      'edge oftime',
      'cryogenics',
      'twin cracks'
    ]
  },
  {
    id: '13',
    uri: require('../assets/images/climbers/13.jpg'),
    name: 'climber',
    grade: '5.12',
    description: 'Looking for a climbing partner for el cap this season.',
    climbs_completed: [
      'fortune-500',
      'wheel-of-cheese',
      'edge oftime',
      'cryogenics',
      'twin cracks'
    ]
  },
  {
    id: '5',
    uri: require('../assets/images/climbers/5.jpg'),
    name: 'climber',
    grade: '5.12',
    description: 'Looking for a climbing partner for el cap this season.',
    climbs_completed: [
      'fortune-500',
      'wheel-of-cheese',
      'edge oftime',
      'cryogenics',
      'twin cracks'
    ]
  },
  {
    id: '6',
    uri: require('../assets/images/climbers/6.jpg'),
    name: 'climber',
    grade: '5.12',
    description: 'Looking for a climbing partner for el cap this season.',
    climbs_completed: [
      'fortune-500',
      'wheel-of-cheese',
      'edge oftime',
      'cryogenics',
      'twin cracks'
    ]
  },
  {
    id: '7',
    uri: require('../assets/images/climbers/7.jpg'),
    name: 'climber',
    grade: '5.12',
    description: 'Looking for a climbing partner for el cap this season.',
    climbs_completed: [
      'fortune-500',
      'wheel-of-cheese',
      'edge oftime',
      'cryogenics',
      'twin cracks'
    ]
  },
  {
    id: '3',
    uri: require('../assets/images/climbers/3.gif'),
    name: 'climber',
    grade: '5.12',
    description: 'Looking for a climbing partner for el cap this season.',
    climbs_completed: [
      'fortune-500',
      'wheel-of-cheese',
      'edge oftime',
      'cryogenics',
      'twin cracks'
    ]
  },
  {
    id: '2',
    uri: require('../assets/images/climbers/2.jpg'),
    name: 'climber',
    grade: '5.12',
    description: 'Looking for a climbing partner for el cap this season.',
    climbs_completed: [
      'fortune-500',
      'wheel-of-cheese',
      'edge oftime',
      'cryogenics',
      'twin cracks'
    ]
  },
  {
    id: '9',
    uri: require('../assets/images/climbers/9.jpg'),
    name: 'climber',
    grade: '5.12',
    description: 'Looking for a climbing partner for el cap this season.',
    climbs_completed: [
      'fortune-500',
      'wheel-of-cheese',
      'edge oftime',
      'cryogenics',
      'twin cracks'
    ]
  },
  {
    id: '1',
    uri: require('../assets/images/climbers/1.jpg'),
    name: 'climber',
    grade: '5.12',
    description: 'Looking for a climbing partner for el cap this season.',
    climbs_completed: [
      'fortune-500',
      'wheel-of-cheese',
      'edge oftime',
      'cryogenics',
      'twin cracks'
    ]
  },
  {
    id: '17',
    uri: require('../assets/images/climbers/17.jpg'),
    name: 'Steve Anderson',
    grade: '5.10.c',
    description: 'Looking for a climbing partner for el cap this season.',
    climbs_completed: [
      'fortune-500',
      'wheel-of-cheese',
      'edge oftime',
      'cryogenics',
      'twin cracks'
    ]
  },
  {
    id: '10',
    uri: require('../assets/images/climbers/10.jpg'),
    name: 'climber',
    grade: '5.12',
    description: 'Looking for a climbing partner for el cap this season.',
    climbs_completed: [
      'fortune-500',
      'wheel-of-cheese',
      'edge oftime',
      'cryogenics',
      'twin cracks'
    ]
  },
  {
    id: '11',
    uri: require('../assets/images/climbers/11.jpg'),
    name: 'climber',
    grade: '5.12',
    description: 'Looking for a climbing partner for el cap this season.',
    climbs_completed: [
      'fortune-500',
      'wheel-of-cheese',
      'edge oftime',
      'cryogenics',
      'twin cracks'
    ]
  },
  {
    id: '12',
    uri: require('../assets/images/climbers/12.jpg'),
    name: 'climber',
    grade: '5.12',
    description: 'Looking for a climbing partner for el cap this season.',
    climbs_completed: [
      'fortune-500',
      'wheel-of-cheese',
      'edge oftime',
      'cryogenics',
      'twin cracks'
    ]
  },
  {
    id: '14',
    uri: require('../assets/images/climbers/14.jpg'),
    name: 'climber',
    grade: '5.12',
    description: 'Looking for a climbing partner for el cap this season.',
    climbs_completed: [
      'fortune-500',
      'wheel-of-cheese',
      'edge oftime',
      'cryogenics',
      'twin cracks'
    ]
  },
  {
    id: '16',
    uri: require('../assets/images/climbers/16.jpg'),
    name: 'climber',
    grade: '5.12',
    description: 'Looking for a climbing partner for el cap this season.',
    climbs_completed: [
      'fortune-500',
      'wheel-of-cheese',
      'edge oftime',
      'cryogenics',
      'twin cracks'
    ]
  }
]
export default class App extends React.Component {
  static navigationOptions = {
    header: null
  }
  constructor() {
    super()

    this.position = new Animated.ValueXY()
    this.state = {
      currentIndex: 0
    }

    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ['-10deg', '0deg', '10deg'],
      extrapolate: 'clamp'
    })

    this.rotateAndTranslate = {
      transform: [
        {
          rotate: this.rotate
        },
        ...this.position.getTranslateTransform()
      ]
    }

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    })
    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp'
    })

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp'
    })
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: 'clamp'
    })
  }
  componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) {
          console.log('Liked')
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        } else if (gestureState.dx < -120) {
          console.log('Disliked')
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        } else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4
          }).start()
        }
      }
    })
  }

  renderUsers = () => {
    return Users.map((item, i) => {
      if (i < this.state.currentIndex) {
        return null
      } else if (i == this.state.currentIndex) {
        return (
          <Animated.View
            {...this.PanResponder.panHandlers}
            key={item.id}
            style={[
              this.rotateAndTranslate,
              {
                height: SCREEN_HEIGHT - 120,
                width: SCREEN_WIDTH,
                padding: 10,
                position: 'absolute'
              }
            ]}
          >
            <Animated.View
              style={{
                opacity: this.likeOpacity,
                transform: [{ rotate: '-30deg' }],
                position: 'absolute',
                top: 50,
                left: 40,
                zIndex: 1000
              }}
            >
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: 'green',
                  color: 'green',
                  fontSize: 32,
                  fontWeight: '800',
                  padding: 10
                }}
              >
                Climb On⚡️
              </Text>
            </Animated.View>

            <Animated.View
              style={{
                opacity: this.dislikeOpacity,
                transform: [{ rotate: '30deg' }],
                position: 'absolute',
                top: 50,
                right: 40,
                zIndex: 1000
              }}
            >
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: 'red',
                  color: 'red',
                  fontSize: 32,
                  fontWeight: '800',
                  padding: 10
                }}
              >
                Off Belay 🙅‍♂️
              </Text>
            </Animated.View>

            <Image
              style={{
                flex: 0.8,
                height: null,
                width: null,
                resizeMode: 'cover',
                borderRadius: 20,
                marginBottom: 10
              }}
              source={item.uri}
            />

            <View
              style={{
                postition: 'absolute',

                flex: 0.5,
                height: null,
                padding: 10,
                backgroundColor: 'white',
                marginBottom: 50,
                display: 'flex',
                border: 'black',
                borderRadius: 20
              }}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'goldenrod',
                  fontSize: 23,
                  paddingBottom: 10
                }}
              >
                {item.name}
              </Text>
              <Text style={{ paddingBottom: 4 }}>
                Climbs <Text style={{ fontWeight: 'bold' }}>{item.grade}</Text>
              </Text>
              <Text style={{ paddingBottom: 10 }}>
                Immediate Objective -{' '}
                <Text style={{ fontStyle: 'italic' }}>
                  {item.immediate_initiative}
                </Text>
              </Text>
              <Text style={{ paddingBottom: 10 }}>{item.description}</Text>
              {/* <Text>
                {item.climbs_completed.map(climb => {
                  return <Text>{climb}</Text>
                })}
              </Text> */}

              <Text>Routes Climbed: </Text>
              <RoutesClimbedList />
            </View>
          </Animated.View>
        )
      } else {
        return (
          <Animated.View
            key={item.id}
            style={[
              {
                opacity: this.nextCardOpacity,
                transform: [{ scale: this.nextCardScale }],
                height: SCREEN_HEIGHT - 120,
                width: SCREEN_WIDTH,
                padding: 10,
                position: 'absolute'
              }
            ]}
          >
            <Animated.View
              style={{
                opacity: 0,
                transform: [{ rotate: '-30deg' }],
                position: 'absolute',
                top: 50,
                left: 40,
                zIndex: 1000
              }}
            >
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: 'green',
                  color: 'green',
                  fontSize: 32,
                  fontWeight: '800',
                  padding: 10
                }}
              >
                Climb On⚡️
              </Text>
            </Animated.View>

            <Animated.View
              style={{
                opacity: 0,
                transform: [{ rotate: '30deg' }],
                position: 'absolute',
                top: 50,
                right: 40,
                zIndex: 1000
              }}
            >
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: 'red',
                  color: 'red',
                  fontSize: 32,
                  fontWeight: '800',
                  padding: 10
                }}
              >
                🙅‍♂️
              </Text>
            </Animated.View>
            <Image
              style={{
                flex: 0.8,
                height: null,
                width: null,
                resizeMode: 'cover',
                borderRadius: 20,
                marginBottom: 10
              }}
              source={item.uri}
            />

            <View
              style={{
                postition: 'absolute',

                flex: 0.5,
                height: null,
                padding: 10,
                backgroundColor: 'white',
                marginBottom: 50,
                display: 'flex',
                border: 'black',
                borderRadius: 20
              }}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'goldenrod',
                  fontSize: 23,
                  paddingBottom: 10
                }}
              >
                {item.name}
              </Text>
              <Text style={{ paddingBottom: 4 }}>
                Climbs <Text style={{ fontWeight: 'bold' }}>{item.grade}</Text>
              </Text>
              <Text style={{ paddingBottom: 10 }}>
                Immediate Objective -{' '}
                <Text style={{ fontStyle: 'italic' }}>
                  {item.immediate_initiative}
                </Text>
              </Text>
              <Text style={{ paddingBottom: 10 }}>{item.description}</Text>
              {/* <Text>
                {item.climbs_completed.map(climb => {
                  return <Text>{climb}</Text>
                })}
              </Text> */}

              <Text>Routes Climbed: </Text>
              <RoutesClimbedList />
            </View>
          </Animated.View>
        )
      }
    }).reverse()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>{this.renderUsers()}</View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
