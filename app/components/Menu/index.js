/**
 * @flow
 */

import React, { Component } from "react";
import { Image, ListView, Text, TouchableOpacity, View, StyleSheet, Dimensions, Platform } from "react-native";

// import Userpic from '../components/Userpic';
// import MenuButton from '../components/MenuButton';

import { MenuButton, MenuItem, CountDown, Weather } from "../";

// import Alert from '../lib/Alert';
import styles from "./styles";

export default class Menu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editProfilesInProgress: false
    };

    this.profiles = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  }

  // componentWillReceiveProps(nextProps) {
  //   if (!nextProps.isOpen) {
  //     this.setState({editProfilesInProgress: false});
  //   }
  // }

  // addProfile() {
  //   Alert.prompt(
  //     'add new profile',
  //     null,
  //     [
  //       {
  //         text: 'cancel',
  //         onPress: () => {}
  //       },
  //       {
  //         text: 'ok',
  //         onPress: (handle) => { handle && this.props.onAddProfile({handle: handle.toLowerCase()}) }
  //       }
  //     ]
  //   );
  // }

  // removeProfile(profile) {
  //   Alert.alert(
  //     'remove profile',
  //     'press [ok] to remove [' + profile.handle + '] profile',
  //     [
  //       {text: 'cancel'},
  //       {
  //         text: 'ok',
  //         onPress: this.props.onRemoveProfile.bind(this, profile)
  //       },
  //     ]
  //   );
  // }

  // onEditProfiles() {
  //   this.setState({editProfilesInProgress: true});
  // }

  // onDoneEditProfiles() {
  //   this.setState({editProfilesInProgress: false});
  // }

  renderRow(item, sectionId, rowId) {
    return item ? (
      <MenuItem>
        <View style={[styles.menuContainer,{ borderTopWidth: 5, borderTopColor: 'white' }]}>
          <Text style={[styles.menuItem, styles.menuItemText, styles.menuItemIconless]}>
            {item.name}
          </Text>
        </View>
      </MenuItem>
    ) : null;
  }

  renderSeparator(sectionId, keyId) {
    return (
      <View key={keyId} style={styles.menuListSeparator} />
    );
  }

  render() {

    const profiles = [{name: 'Home'}, {name: 'Tour'}]
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
        style={[styles.menu, { width: Dimensions.get("screen").width / 2 + 100 }]}>
          <View style={[styles.menuMeta]}>
            <View style={[styles.menuContainer, styles.menuContainerSpread]}>
              <Image source={{ uri: 'http://balloonfiesta.com/assets/images/logo.png' }} style={{ width: '100%', height: '100%' }} resizeMode="contain" resizeMethod="resize" />
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

          <ListView
            style={styles.menuList}
            ref="menuView"
            dataSource={this.profiles.cloneWithRows(profiles)}
            renderRow={this.renderRow.bind(this)}
            renderSeparator={this.renderSeparator.bind(this)}
            enableEmptySections={true}
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
            <View style={[styles.menuContainer, styles.menuContainerSpread, {justifyContent: 'center'}]}>
              <Image source={{uri: 'http://balloonfiesta.com/assets/images/when.png'}} style={{width: '50%', height: '100%'}} resizeMode="contain" resizeMethod="scale"/>
            </View>
          </View>
          <CountDown />
      </View>
    );
  }
}

