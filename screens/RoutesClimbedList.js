import React, { Component } from 'react'
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native'

export default class RoutesClimbedList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            { key: 'fortune-500' },
            { key: 'wheel-of-cheese' },
            { key: 'edge of time' },
            { key: 'cryogenics' },
            { key: 'twin cracks' }
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    fontSize: 12,
    height: null,
    fontStyle: 'italic'
  }
})
