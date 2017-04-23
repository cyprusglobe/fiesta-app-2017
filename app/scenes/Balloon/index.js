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

import { PilotItem } from '../../components';

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
      'Question',
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
    const { pilot, balloon, navigator } = this.props;
    const image_url = `${Constants.IMAGE_URL}/${balloon.reg_num}/x800`;

    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <Image
            source={{ uri: image_url }}
            style={{ height: 400, width: Dimensions.get('window').width }}
            resizeMode="cover"
          />
          <View
            style={{
              height: 44,
              backgroundColor: theme.app.baseBlue,
              elevation: 5,
              marginTop: 0,
              marginBottom: 8,
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
          <Text>Primary Pilot</Text>
          <PilotItem
            pilot={pilot}
            onPressAction={() =>
              navigator.push({
                screen: 'bf.Pilot',
                title: pilot.common_name,
                passProps: { pilot: pilot, isPreview: true },
              })}
          />
        </ScrollView>
      </View>
    );
  }
}

/*Balloon.navigationOptions = props => {
  const { navigation } = props;
  const { state, setParams, navigate } = navigation;
  const { params } = state;
  console.log(params);
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
