import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList, Alert } from 'react-native';

import { PilotItem } from '../../components';
import { config } from './config';
import styles from './styles';

import { getIconSizePixelRatio, switchIconPerPlatform } from '../../utils';

import Ionicons from 'react-native-vector-icons/Ionicons';

const VIEWABILITY_CONFIG = {
  minimumViewTime: 3000,
  viewAreaCoveragePercentThreshold: 100,
  waitForInteraction: true,
};

class Pilots extends Component {
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
        balloon: {
          id: 1,
          name: 'Kiphaven',
          reg_num: 'N747KH',
          special_shape: true,
          competition_balloon: true,
        },
        common_name: 'Jim Abell',
        first_name: 'Jim',
        last_name: 'Abell',
      },
      {
        key: 2,
        balloon: {
          id: 2,
          name: 'Transition',
          reg_num: 'N3287V',
          special_shape: true,
          competition_balloon: false,
        },
        common_name: 'Kurt Adelsberger',
        first_name: 'Kurt',
        last_name: 'Adelsberger',
      },
      {
        key: 3,
        balloon: {
          id: 3,
          name: 'This End Up',
          reg_num: 'N45054',
          special_shape: true,
          competition_balloon: false,
        },
        common_name: 'Derek Browning',
        first_name: 'Derek',
        last_name: 'Browning',
      },
      {
        key: 4,
        balloon: {
          id: 4,
          name: 'Dos Equis',
          reg_num: 'N3011Q',
          special_shape: true,
          competition_balloon: true,
        },
        common_name: 'Scott Appelman',
        first_name: 'Scott',
        last_name: 'Appelman',
      },
      {
        key: 5,
        balloon: {
          id: 5,
          name: 'Band of Gold',
          reg_num: 'N379LB',
          special_shape: true,
          competition_balloon: false,
        },
        common_name: 'William Armstrong',
        first_name: 'William',
        last_name: 'Armstrong',
      },
      {
        key: 6,
        balloon: {
          id: 6,
          name: '7th Heaven',
          reg_num: 'N89LB',
          special_shape: true,
          competition_balloon: true,
        },
        common_name: 'Savannah Bradley',
        first_name: 'Savannah',
        last_name: 'Bradley',
      },
      {
        key: 7,
        balloon: {
          id: 7,
          name: 'That A Way',
          reg_num: 'N4508B',
          special_shape: true,
          competition_balloon: false,
        },
        common_name: 'David Bobel',
        first_name: 'David',
        last_name: 'Bobel',
      },
    ],
  };

  componentDidMount() {
    Ionicons.getImageSource(...switchIconPerPlatform('funnel')).then(filter => {
      this.props.navigator.setButtons({
        rightButtons: [{ id: 'filter-pilots', icon: filter }],
      });
    });
  }

  promptForLongPress = pilot => {
    const { navigator } = this.props;

    Alert.alert(
      'Question',
      `Would you like to view the balloon for "${pilot.balloon.name}"`,
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
              screen: 'example.Balloon',
              title: pilot.balloon.name,
              passProps: {
                balloon: pilot.balloon,
              },
            }),
        },
      ]
    );
  };

  renderRow = pilot => {
    const { navigator } = this.props;

    return (
      <PilotItem
        pilot={pilot}
        onPressAction={() =>
          navigator.push({
            screen: 'example.Pilot',
            title: pilot.common_name,
            passProps: { pilot: pilot },
          })}
        onLongPressAction={() => this.promptForLongPress(pilot)}
      />
    );
  };

  renderSeperator() {
    return <View style={{ height: 5 }} />;
  }

  shouldItemUpdate(prev, next) {
    return prev.item.common_name !== next.item.common_name;
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
          shouldItemUpdate={({ prev, next }) =>
            this.shouldItemUpdate(prev, next)}
          ItemSeparatorComponent={() => this.renderSeperator()}
        />
      </View>
    );
  }
}

export default Pilots;
