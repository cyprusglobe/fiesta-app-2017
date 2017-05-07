/**
 * @flow
 */

import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';

import { EventItem } from '../../components';

import styles from './styles';

import { config } from './config';

import { theme } from '../../theme';

import BalloonImg from '../../../images/balloon.png';
import ToiletImg from '../../../images/toilet.png';
import Chainsaw from '../../../images/chainsaw.png';

class EventsSchedule extends Component {
  static navigatorStyle = {
    ...config.navigatorStyles,
  };

  state = {
    index: 0,
    events: [
      {
        '1': [
          {
            morning: [
              {
                name: 'Laser Light Show',
                time: '05:45 AM',
                till: '05:45 AM',
              },
              {
                name: 'Dawn Patrol Show, presented by Route 66 Casino Hotel & RV Resort',
                time: '06:00 AM',
                till: '06:00 AM',
              },
              {
                name: 'Laser Light Show',
                time: '05:45 AM',
                till: null,
              },
              {
                name: 'Krispy Kreme Morning Glow',
                time: '06:30 AM',
                till: null,
              },
              {
                name: 'Opening Ceremonies',
                time: '06:45 AM',
                till: null,
              },
              {
                name: 'Mass Ascension, presented by Canon',
                time: '07:00 AM',
              },
            ],
            evening: [
              {
                name: "America's Challenge Gas Balloon Race Inflation",
                time: '02:00 AM',
                till: null,
              },
              {
                name: 'Twilight Twinkle Glow™',
                time: '06:00 AM',
                till: null,
              },
              {
                name: "America's Challenge Gas Balloon Race Launch",
                time: '06:00 AM',
                till: null,
              },
              {
                name: 'Laser Light Show',
                time: '07:45',
                till: null,
              },
              {
                name: 'AfterGlow™ Fireworks Show, presented in part by the Albuquerque Journal',
                time: '08:00 AM',
                till: null,
              },
            ],
          },
        ],
        '2': [
          {
            morning: [
              {
                name: 'Laser Light Show',
                time: '05:45 AM',
                till: '05:45 AM',
              },
              {
                name: 'Dawn Patrol Show, presented by Route 66 Casino Hotel & RV Resort',
                time: '06:00 AM',
                till: '06:00 AM',
              },
              {
                name: 'Laser Light Show',
                time: '05:45 AM',
                till: null,
              },
              {
                name: 'Krispy Kreme Morning Glow',
                time: '06:30 AM',
                till: null,
              },
              {
                name: 'Opening Ceremonies',
                time: '06:45 AM',
                till: null,
              },
              {
                name: 'Mass Ascension, presented by Canon',
                time: '07:00 AM',
              },
            ],
            evening: [
              {
                name: "America's Challenge Gas Balloon Race Inflation",
                time: '02:00 AM',
                till: null,
              },
              {
                name: 'Twilight Twinkle Glow™',
                time: '06:00 AM',
                till: null,
              },
              {
                name: "America's Challenge Gas Balloon Race Launch",
                time: '06:00 AM',
                till: null,
              },
              {
                name: 'Laser Light Show',
                time: '07:45',
                till: null,
              },
              {
                name: 'AfterGlow™ Fireworks Show, presented in part by the Albuquerque Journal',
                time: '08:00 AM',
                till: null,
              },
            ],
          },
        ],
      },
    ],
    routes: [
      {
        key: '1',
        title: 'Sat 7',
      },
      {
        key: '2',
        title: 'Sun 8',
      },
    ],
  };
  constructor(props) {
    super(props);
    this.props.navigator.setButtons({
      ...config.navigatorButtons,
    });
    this.props.navigator.setTitle({
      title: 'Events Schedule',
    });
  }
  _handleChangeTab = index => {
    this.setState({
      index,
    });
  };
  _renderHeader = props => {
    return (
      <TabBar
        {...props}
        indicatorStyle={{
          backgroundColor: 'white',
        }}
        scrollEnabled
        style={{
          backgroundColor: theme.app.baseRed,
        }}
      />
    );
  };
  _renderScene = ({ route }) => {
    switch (route.key) {
      case '1':
        return (
          <ScrollView
            style={[
              {
                flex: 1,
              },
            ]}
          >
            {this.state.events[0]['1'][0]['morning'].map(event => {
              return (
                <EventItem
                  onPressAction={() =>
                    this.props.navigator.push({
                      screen: 'bf.EventDetail',
                      title: event.name,
                    })}
                  key={event.name + event.time + Math.random()}
                  event={event}
                />
              );
            })}
            {this.state.events[0]['1'][0]['evening'].map(event => {
              return (
                <EventItem
                  onPressAction={() =>
                    this.props.navigator.push({
                      screen: 'bf.EventDetail',
                      title: event.name,
                    })}
                  key={event.name + event.time + Math.random()}
                  event={event}
                />
              );
            })}
          </ScrollView>
        );
      case '2':
        return (
          <ScrollView
            style={[
              {
                flex: 1,
              },
            ]}
          >
            {this.state.events[0]['2'][0]['morning'].map(event => {
              return (
                <EventItem
                  onPressAction={() =>
                    this.props.navigator.push({
                      screen: 'bf.EventDetail',
                      title: event.name,
                    })}
                  key={event.name + event.time + Math.random()}
                  event={event}
                />
              );
            })}
          </ScrollView>
        );
      default:
        return null;
    }
  };
  render() {
    const points = [
      {
        latitude: '35.195644',
        longitude: '-106.596814',
      },
    ]; // alert(this.getRegionForCoordinates(points).longitudeDelta)
    return (
      <View style={styles.container}>
        <TabViewAnimated
          style={{
            flex: 1,
          }}
          navigationState={this.state}
          renderScene={this._renderScene}
          renderHeader={this._renderHeader}
          onRequestChangeTab={this._handleChangeTab}
        />

      </View>
    );
  }
}
export default EventsSchedule;
