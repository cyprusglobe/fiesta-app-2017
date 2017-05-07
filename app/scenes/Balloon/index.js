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
  Dimensions,
  Alert,
} from 'react-native';

import { PilotItem, ImageFullWidth } from '../../components';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { config } from './config';

import { theme } from '../../theme';
import * as Constants from '../../constants';

import styles from './styles';

class Balloon extends Component {
  static navigatorStyle = {
    ...config.navigatorStyles,
  };

  state = {
    liked: false,
  };

  renderIcon = (condition: any, icon: string, size: number, style: Object) => {
    if (condition) {
      return (
        <Ionicons name={icon} size={size} color="gray" style={{ ...style }} />
      );
    }
    return null;
  };

  promptForLongPress = (pilot: Object, balloon: Object) => {
    const { navigator } = this.props;

    Alert.alert(
      "Require's Attention",
      `Would you like to view the Primary Pilot for "${balloon.name}"`,
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
              title: pilot.common_name,
              passProps: {
                pilot: pilot,
                isPreview: true,
              },
            }),
        },
      ]
    );
  };

  render() {
    const { pilot, balloon, navigator, isPreview } = this.props;
    const image_url = `${Constants.IMAGE_URL}/${balloon.reg_num}/x300`;
    const image_small_url = `${Constants.IMAGE_URL}/${balloon.reg_num}/x5`;
    return (
      <View style={styles.container}>
        <ScrollView style={{ width: '100%' }}>
          <ImageFullWidth
            src={image_url}
            placeholder={image_small_url}
            style={{ height: 296 }}
            placeholderStyle={{ height: 296 }}
            duration={1000}
          />
          <View
            style={{
              height: 44,
              backgroundColor: theme.app.baseRed,
              elevation: 2,
              marginBottom: 2,
              paddingLeft: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ color: 'white' }}>{balloon.reg_num}</Text>
            {this.renderIcon(balloon.competition_balloon, 'md-trophy', 22, {
              color: 'white',
              paddingRight: 10,
            })}
          </View>

          {isPreview
            ? null
            : <View style={{ width: '100%' }}>
                {pilot
                  ? <View
                      style={{
                        backgroundColor: '#f7f7f7',
                        marginTop: 16,
                        marginBottom: 16,
                        padding: 10,
                        elevation: 2,
                      }}
                    >
                      <Text style={{ alignSelf: 'center' }}>Primary Pilot</Text>
                    </View>
                  : null}

                <View style={{ width: '100%' }}>
                  <PilotItem
                    pilot={pilot}
                    onPressAction={() =>
                      navigator.push({
                        screen: 'bf.Pilot',
                        title: pilot.common_name,
                        passProps: { pilot: pilot, isPreview: true },
                      })}
                  />
                </View>

              </View>}
        </ScrollView>
      </View>
    );
  }
}

/*Balloon.navigationOptions = props => {
  const { navigation } = props;
  const { state, setParams, navigate } = navigation;
  const { params } = state;
  return {
    ...config.navigationOptions,
    headerTitle: navigation.state.params.balloon.name,
    headerRight: !params.liked
      ? <Ionicons
          name="md-heart-outline"
          color={theme.app.navbar.menu.text.color}
          size={26}
          style={{ paddingRight: 10 }}
          onPress={() => setParams({ liked: true })}
        />
      : <Ionicons
          name="md-heart"
          color={theme.app.navbar.menu.text.color}
          size={26}
          style={{ paddingRight: 10 }}
          onPress={() => setParams({ liked: false })}
        />,
  };
};*/

export default Balloon;
