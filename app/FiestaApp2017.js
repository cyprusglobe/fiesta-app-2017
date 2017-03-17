/**
 * @flow
 */

import React, { Component } from 'react'
import codePush from 'react-native-code-push'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native'


import Icon from 'react-native-vector-icons/Ionicons';

class FiestaApp2017 extends Component {

  onComponentDidMount () {
    console.log('[onComponentDidMount]: Sync App')
    this.syncAppVersion()
  }

  syncAppVersion () {
    codePush.sync({ mandatoryInstallMode: codePush.InstallMode.IMMEDIATE })
  };

  onButtonPress () {
    console.log('[onButtonPress]: attempt to update from code-push')
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <Image source={require('../images/logo.png')} style={{ flex: 0.1, paddingTop: 20}} resizeMode="contain" />
        <TouchableOpacity onPress={this.onButtonPress} style={{ flex: 0.9 }}>
          <Text>Check for updates</Text>
          <Text style={{color: 'red'}}>Using Code-Push</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D42B3A'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})

export default FiestaApp2017
