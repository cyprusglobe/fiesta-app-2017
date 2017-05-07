/**
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { config } from './config';

import { BalloonItem } from '../../components';

import styles from './styles';

import { theme } from '../../theme';

class Pilot extends Component {
  static navigatorStyle = {
    ...config.navigatorStyles,
  };

  renderBalloons(balloons) {
    return balloons.map(balloon => {
      const { balloon_name, pilot } = balloon;

      return (
        <View key={balloon.key} style={{ height: 70, width: '100%' }}>
          <BalloonItem
            balloon={balloon}
            onPressAction={() =>
              this.props.navigator.push({
                screen: 'bf.Balloon',
                title: balloon_name,
                passProps: {
                  pilot: pilot,
                  balloon: balloon,
                  isPreview: true,
                },
              })}
          />
        </View>
      );
    });
  }

  renderAdditionalBalloons(balloons) {
    return balloons.map(balloon => {
      const { balloon_name, pilot } = balloon;

      return (
        <View key={balloon.key} style={{ height: 70, width: '100%' }}>
          <BalloonItem
            balloon={balloon}
            onPressAction={() =>
              this.props.navigator.push({
                screen: 'bf.Balloon',
                title: balloon_name,
                passProps: {
                  pilot: pilot,
                  balloon: balloon,
                  isPreview: true,
                },
              })}
          />
        </View>
      );
    });
  }

  renderNA(event) {
    if (event === '') {
      return 'N/A';
    }
    return event;
  }

  renderEvents(events: Array<void>) {
    const {
      launch_9day,
      launch_twilight_twinkle,
      launch_balloon_glow,
      launch_rodeo,
      launch_night_magic,
    } = events[0];

    return (
      <View>
        {events &&
          events.map((event, i) => {
            return (
              <View
                style={{
                  width: '100%',
                  backgroundColor: '#f7f7f7',
                  marginTop: 2,
                  marginBottom: 14,
                  padding: 10,
                  elevation: 2,
                }}
                key={i}
              >
                <Text>Primary Launch Site: {this.renderNA(launch_9day)}</Text>
                <Text>
                  Twilight Twinkle Glow:
                  {' '}
                  {this.renderNA(launch_twilight_twinkle)}
                </Text>
                <Text>Balloon Glow: {this.renderNA(launch_balloon_glow)}</Text>
                <Text>Special Shape Rodeo: {this.renderNA(launch_rodeo)}</Text>
                <Text>
                  Night Magic Glow: {this.renderNA(launch_night_magic)}
                </Text>
              </View>
            );
          })}
      </View>
    );
  }

  render() {
    const { pilot, isPreview } = this.props;
    const { events, primary_balloons, additional_balloons } = pilot;

    return (
      <View style={styles.container}>
        <ScrollView style={{ width: '100%', paddingTop: 16 }}>

          {events && events.length > 0
            ? <View
                style={{
                  backgroundColor: theme.app.baseRed,
                  marginTop: 2,
                  marginBottom: 14,
                  padding: 10,
                  elevation: 2,
                }}
              >
                <Text style={{ alignSelf: 'center', color: 'white' }}>
                  Pilot's Events
                </Text>
              </View>
            : null}

          {events && this.renderEvents(events)}

          {isPreview
            ? null
            : <View style={{ width: '100%' }}>
                {primary_balloons.length > 0
                  ? <View
                      style={{
                        backgroundColor: theme.app.baseRed,
                        marginTop: 2,
                        marginBottom: 14,
                        padding: 10,
                        elevation: 2,
                      }}
                    >
                      <Text style={{ alignSelf: 'center', color: 'white' }}>
                        Balloons
                      </Text>
                    </View>
                  : null}

                {this.renderBalloons(primary_balloons)}

                {additional_balloons.length > 0
                  ? <View
                      style={{
                        backgroundColor: theme.app.baseRed,
                        marginTop: 2,
                        marginBottom: 14,
                        padding: 10,
                        elevation: 2,
                      }}
                    >
                      <Text style={{ alignSelf: 'center', color: 'white' }}>
                        Additional Balloons
                      </Text>
                    </View>
                  : null}

                {this.renderAdditionalBalloons(additional_balloons)}

              </View>}
        </ScrollView>
      </View>
    );
  }
}

export default Pilot;
