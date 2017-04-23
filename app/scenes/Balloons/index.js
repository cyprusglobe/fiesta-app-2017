import React, { Component, PureComponent } from 'react';
import { View, StyleSheet, Text, FlatList, Alert } from 'react-native';

import { BalloonItem } from '../../components';
import { config } from './config';
import styles from './styles';

import { theme } from '../../theme';

import { getIconSizePixelRatio, switchIconPerPlatform } from '../../utils';

import Ionicons from 'react-native-vector-icons/Ionicons';

const VIEWABILITY_CONFIG = {
  minimumViewTime: 3000,
  viewAreaCoveragePercentThreshold: 100,
  waitForInteraction: true,
};

class Balloons extends PureComponent {
  constructor(props) {
    super(props);
  }

  static navigatorStyle = {
    ...config.navigatorStyles,
  };

  state = {
    items: [
      {
        key: 1,
        name: 'Kiphaven',
        reg_num: 'N747KH',
        special_shape: true,
        competition_balloon: true,
        pilot: {
          common_name: 'Jim Abell',
          first_name: 'Jim',
          last_name: 'Abell',
          balloon: {
            name: 'Kiphaven',
            reg_num: 'N747KH',
            special_shape: true,
            competition_balloon: true,
          },
        },
      },
      {
        key: 2,
        name: 'Transition',
        reg_num: 'N3287V',
        special_shape: true,
        competition_balloon: false,
        pilot: {
          common_name: 'Kurt Adelsberger',
          first_name: 'Kurt',
          last_name: 'Adelsberger',
        },
      },
      {
        key: 3,
        name: 'This End Up',
        reg_num: 'N45054',
        special_shape: true,
        competition_balloon: false,
        pilot: {
          common_name: 'Derek Browning',
          first_name: 'Derek',
          last_name: 'Browning',
        },
      },
      {
        key: 4,
        name: 'Dos Equis',
        reg_num: 'N3011Q',
        special_shape: true,
        competition_balloon: true,
        pilot: {
          common_name: 'Scott Appelman',
          first_name: 'Scott',
          last_name: 'Appelman',
        },
      },
      {
        key: 5,
        name: 'Band of Gold',
        reg_num: 'N379LB',
        special_shape: true,
        competition_balloon: false,
        pilot: {
          common_name: 'William Armstrong',
          first_name: 'William',
          last_name: 'Armstrong',
        },
      },
      {
        key: 6,
        name: '7th Heaven',
        reg_num: 'N89LB',
        special_shape: true,
        competition_balloon: true,
        pilot: {
          common_name: 'Savannah Bradley',
          first_name: 'Savannah',
          last_name: 'Bradley',
        },
      },
      {
        key: 7,
        name: 'That A Way',
        reg_num: 'N4508B',
        special_shape: true,
        competition_balloon: false,
        pilot: {
          common_name: 'David Bobel',
          first_name: 'David',
          last_name: 'Bobel',
        },
      },
    ],
  };

  componentDidMount() {
    // Ionicons.getImageSource(...switchIconPerPlatform('', 'funnel', 'funnel')).then(filter => {
    //   this.props.navigator.setButtons({
    //     rightButtons: [{ id: 'filter-balloons', icon: filter }],
    //   });
    // });
  }

  promptForLongPress = balloon => {
    const { navigator } = this.props;
    Alert.alert(
      'Question',
      `Would you like to view the primary pilot for "${balloon.name}"`,
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () =>
            navigator.push({
              screen: 'bf.Pilot',
              title: balloon.pilot.common_name,
              passProps: { balloon: balloon, pilot: balloon.pilot },
            }),
        },
      ]
    );
  };

  _shouldItemUpdate(prev, next) {
    /**
     * Note that this does not check state.horizontal or state.fixedheight
     * because we blow away the whole list by changing the key in those cases.
     * Make sure that you do the same in your code, or incorporate all relevant
     * data into the item data, or skip this optimization entirely.
     */
    return prev.item !== next.item;
  }

  renderRow = balloon => {
    const { navigator } = this.props;

    return (
      <BalloonItem
        balloon={balloon}
        onPressAction={() =>
          navigator.push({
            screen: 'bf.Balloon',
            title: balloon.name,
            passProps: { balloon: balloon, pilot: balloon.pilot },
          })}
        onLongPressAction={() => this.promptForLongPress(balloon)}
      />
    );
  };
  renderSeperator() {
    return <View style={{ height: 5 }} />;
  }

  shouldItemUpdate(prev, next) {
    return prev.item.name !== next.item.name;
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{ flex: 1 }}
          data={this.state.items}
          legacyImplementation={false}
          renderItem={({ item }) => this.renderRow(item)}
          viewabilityConfig={VIEWABILITY_CONFIG}
          shouldItemUpdate={this._shouldItemUpdate}
          ItemSeparatorComponent={() => this.renderSeperator()}
        />
      </View>
    );
  }
}

/*Balloons.navigationOptions = props => {
  const { navigation } = props;
  const { state, setParams, navigate } = navigation;
  const { params } = state;
  return {
    ...config.navigationOptions,
    headerLeft: (
      <Ionicons
        name="md-menu"
        color={theme.app.navbar.menu.text.color}
        size={26}
        style={{ paddingLeft: 10 }}
        onPress={() => navigate('DrawerOpen')}
      />
    ),
  };
};*/

export default Balloons;
