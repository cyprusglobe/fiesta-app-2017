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

import { MenuButton, CountDown, Weather } from '../../';
import { MenuItemTesting as MenuItem } from '../';

import styles from './styles';

class MenuTesting extends Component {
  state = {
    currentScreen: 'Home',
    editProfilesInProgress: false,
    items: [
      {
        key: 1,
        name: 'Home',
        title: 'Home',
        iconUrl: require('/Users/insomnia/Code/_work/fiesta-app-2017/images/home_nav_button_android.png'),
      },
      {
        key: 2,
        name: 'Welcome',
        title: 'Tour',
        iconUrl: require('/Users/insomnia/Code/_work/fiesta-app-2017/images/tour_nav_button.png'),
      },
      {
        key: 3,
        name: 'Instagram',
        title: 'Instagram',
        iconUrl: require('../../../../images/instagram_nav_button_android.png'),
      },
      {
        key: 4,
        name: 'Balloons',
        title: 'Balloons',
        iconUrl: require('../../../../images/balloon_nav_button.png'),
      },
      {
        key: 5,
        name: 'Pilots',
        title: 'Pilots',
        iconUrl: require('../../../../images/error_loading_nav_button.png'),
      },
      {
        key: 6,
        name: 'Notifications',
        title: 'Notifications',
        iconUrl: require('../../../../images/notification_nav_button_android.png'),
      },
    ],
  };

  constructor(props) {
    super(props);
  }

  toggleDrawer = (to: string, side: string, animated: boolean) => {
    this.props.navigator.toggleDrawer({
      to,
      side,
      animated,
    });
  };

  goTo = (scene: string, sceneTitle: string) => {
    // alert(scene)
    this.toggleDrawer('closed', 'left', true);

    this.props.navigator.push({
      screen: `bf.${scene}`,
      title: sceneTitle ? sceneTitle : 'Title',
    });

    // this.props.navigator.popToRoot({ animated: true });
  };

  renderRow = (item: Object) => {
    return item
      ? <MenuItem
          key={item.key}
          action={() => this.goTo(item.name, item.title)}
        >
          <View
            style={[
              styles.menuContainer,
              { flexDirection: 'column', paddingBottom: 10 },
            ]}
          >
            <Image source={item.iconUrl} style={{ width: 50, height: 50 }} />
            <Text style={{ color: 'white', fontWeight: '600' }}>
              {item.title}
            </Text>
          </View>
        </MenuItem>
      : null;
  };

  renderSeparator = (sectionId: Number, keyId: Number) => {
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
        style={[styles.menu, { width: Dimensions.get('window') / 2 + 100 }]}
      >
        <View style={[styles.menuMeta]}>
          <View style={[styles.menuContainer, styles.menuContainerSpread]}>
            <Image
              source={require('../../../../images/logo.png')}
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
          style={{ paddingTop: 5 }}
          data={this.state.items}
          renderItem={({ item }) => this.renderRow(item)}
          numColumns={2}
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

        <Weather isLandScapeMode={true} />

        <View style={styles.menuMeta}>
          <View
            style={[
              styles.menuContainer,
              styles.menuContainerSpread,
              { justifyContent: 'center' },
            ]}
          >
            <Image
              source={require('../../../../images/when.png')}
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

export default MenuTesting;
