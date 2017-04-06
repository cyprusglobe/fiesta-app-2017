/**
 * @flow
 */

import React, { Component } from 'react';
import {
  Image,
  FlatList,
  ListView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';

// import Userpic from '../components/Userpic';
// import MenuButton from '../components/MenuButton';

import { MenuButton, MenuItem, CountDown, Weather } from '../';

// import Alert from '../lib/Alert';
import styles from './styles';

export default class Menu extends Component {
  state = {
    editProfilesInProgress: false,
    items: [
      { key: 1, name: 'Home', title: 'Home' },
      { key: 2, name: 'Welcome', title: 'Welcome' },
      { key: 3, name: 'Settings', title: 'Settings' },
    ],
  };

  constructor(props) {
    super(props);
  }

  toggleDrawer = (to, side, animated) => {
    this.props.navigator.toggleDrawer({
      to,
      side,
      animated,
    });
  };
  goTo = (scene, sceneTitle) => {
    this.toggleDrawer('closed', 'left', true);
    this.props.navigator.push({
      screen: `example.${scene}`,
      title: sceneTitle ? sceneTitle : 'Title',
    });
  };

  renderRow = item => {
    return item
      ? <MenuItem
          key={item.key}
          action={() => this.goTo(item.name, item.title)}
        >
          <View style={[styles.menuContainer, styles.menuContainerBorder]}>
            <Text
              style={[
                styles.menuItem,
                styles.menuItemText,
                styles.menuItemIconless,
              ]}
            >
              {item.name}
            </Text>
          </View>
        </MenuItem>
      : null;
  };

  renderSeparator = (sectionId, keyId) => {
    return <View key={keyId} style={[styles.menuListSeparator]} />;
  };

  render() {
    // // clean up props
    // const {$, ...profiles} = this.props.profiles;
    // const menuPadding = this.props.isOpen && !this.props.isLandscape
    //   ? {paddingTop: this.props.statusBarHeight}
    //   : {}
    //   ;
    // const menuModifier = this.props.isLandscape
    //   ? styles.menuLandscape
    //   : styles.menuPortrait
    //   ;

    // // prepend with `all packages` item if there is more than 2 profiles
    // let sourceRows = Object.keys(profiles).length > 1
    //     ? {'all': 'all packages'}
    //     : {}
    //     ;
    // sourceRows = {...sourceRows, ...profiles};

    return (
      <View
        style={[
          styles.menu,
          { width: Dimensions.get('screen').width / 2 + 100 },
        ]}
      >
        <View style={[styles.menuMeta]}>
          <View style={[styles.menuContainer, styles.menuContainerSpread]}>
            <Image
              source={{
                uri: 'http://balloonfiesta.com/assets/images/logo.png',
              }}
              style={{ width: '100%', height: '100%' }}
              resizeMode="contain"
              resizeMethod="resize"
            />
          </View>
        </View>

        {/*<View style={ styles.menuMeta }>
            <View style={[styles.menuContainer, styles.menuContainerSpread]}>
              <View />
              <MenuButton
                style={[styles.menuButton, styles.menuButtonRight]}
                image="add_profile"
                action={() => alert("Fuck")}
              />
            </View>
          </View>*/}

        {/*<ListView
            style={styles.menuList}
            ref="menuView"
            dataSource={this.items.cloneWithRows(profiles)}
            renderRow={this.renderRow.bind(this)}
            renderSeparator={this.renderSeparator.bind(this)}
            enableEmptySections={true}
          />*/}

        <FlatList
          data={this.state.items}
          renderItem={({ item }) => this.renderRow(item)}
          ItemSeparatorComponent={() => this.renderSeparator()}
        />
        {/*<View style={{ backgroundColor: 'white', flexGrow: 1 }} />*/}

        {/*<View style={styles.menuMeta}>
            <View style={[styles.menuContainer, styles.menuContainerSpread]}>
              <MenuButton
                style={[styles.menuButton, styles.menuButtonRight]}
                image="settings"
                action={() => alert("Settings")}
              />
            </View>
          </View>*/}

        <Weather />

        <View style={styles.menuMeta}>
          <View
            style={[
              styles.menuContainer,
              styles.menuContainerSpread,
              { justifyContent: 'center' },
            ]}
          >
            <Image
              source={{
                uri: 'http://balloonfiesta.com/assets/images/when.png',
              }}
              style={{ width: '50%', height: '100%' }}
              resizeMode="contain"
              resizeMethod="scale"
            />
          </View>
        </View>

        <CountDown />
      </View>
    );
  }
}
