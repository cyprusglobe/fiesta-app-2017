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

  // static navigatorButtons = {
  //   ...config.navigatorButtons,
  // };

  constructor(props) {
    super(props);

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

    this.props.navigator.setButtons({
      ...config.navigatorButtons,
    });

    this.props.navigator.setTitle({
      title: 'Home',
    });
  }

  onNavigatorEvent(event) {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'search') {
        this.props.navigator.push({ screen: 'bf.Search' });
      }
    }
  }

  goTo = (scene: string, sceneTitle: string) => {
    // console.log(this.props)
    this.props.navigator.push({
      screen: scene ? scene : 'bf.Home', // unique ID registered with Navigation.registerScreen
      title: sceneTitle,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{ width: '100%', paddingHorizontal: 10, alignItems: 'center' }}
        >
          <Image
            style={{ width: '100%' }}
            source={require('../../../images/logo.png')}
            resizeMode="contain"
          />

          <Image
            style={{ width: '50%' }}
            source={require('../../../images/sub_logo.png')}
            resizeMode="contain"
          />
        </View>

        <View style={{ width: '100%' }}>
          <Text>Latest New's</Text>

          <View />
        </View>
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

// TODO: remove redux from this page in future.
function mapStateToProps(state) {
  const { appState } = state.app;
  return {
    appState: appState,
  };
}

export default connect(mapStateToProps)(Home);
