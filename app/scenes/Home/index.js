/**
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { config } from './config';
import styles from './styles';

import { theme } from '../../theme';

import { switchIconPerPlatform } from '../../utils';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';

// mapStateToProps = (state) => {
//   return {
//     todos: getVisibleTodos(state.todos, state.visibilityFilter)
//   }
// }

// mapDispatchToProps = (dispatch) => {
//   return {
//     onTodoClick: (id) => {
//       dispatch(toggleTodo(id))
//     }
//   }

class Home extends Component {
  static navigatorStyle = {
    ...config.navigatorStyles,
  };

  goTo = (scene: string, sceneTitle: string) => {
    // console.log(this.props)
    this.props.navigator.resetTo({
      screen: scene ? scene : 'bf.Home', // unique ID registered with Navigation.registerScreen
      title: sceneTitle,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.appState}</Text>
        <TouchableOpacity onPress={() => this.goTo('bf.Welcome', 'Welcome')}>
          <Text>Go To Welcome Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.goTo('bf.Instagram', 'Instagram')}
        >
          <Text>Go To Instagram Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.goTo('bf.Pilots', 'Pilots')}>
          <Text>Go To Pilots Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.goTo('bf.Balloons', 'Balloons')}>
          <Text>Go To Balloons Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.goTo('bf.Search', 'Search')}>
          <Text>Go To Search Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

/*Home.navigationOptions = props => {
  const { navigation } = props;
  const { state, setParams, navigate } = navigation;
  const { params } = state;
  return {
    ...config.nav,
    headerLeft: (
      <Ionicons
        name={switchIconPerPlatform('', 'ios-menu', 'md-menu')}
        color={theme.app.navbar.menu.text.color}
        size={26}
        style={{ paddingLeft: 10 }}
        onPress={() => navigate('DrawerOpen')}
      />
    ),
  };
};*/

function mapStateToProps(state) {
  const { appState } = state.app;
  console.log(state);
  return {
    appState: appState,
  };
}

export default connect(mapStateToProps)(Home);
