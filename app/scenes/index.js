/**
 * @flow
 */

import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import { init, star } from '../modules/app';

import Menu from './Menu';
import Events from './EventsSchedule';

import Balloon from './Balloon';
import Balloons from './Balloons';
import Pilot from './Pilot';
import Pilots from './Pilots';
import Instagram from './Instagram';
import Home from './Home';
import Welcome from './Welcome';
import Search from './Search';
import InstagramPhotoModal from '../components/InstagramPhotoModal';
import EventDetail from './EventDetail';

class Application {
  constructor(store, Provider) {
    this._store = store;
    this._provider = Provider;

    this._configureScreens(store, Provider);
  }

  run() {
    const startApp = Platform.OS === 'android'
      ? this.startAppWithScreen
      : this.startAppWithTabs;

    this._store.dispatch(init(startApp));
  }

  _configureScreens(store, Provider) {
    const screens = {
      Menu,
      Home,
      Balloons,
      Balloon,
      Pilots,
      Pilot,
      Instagram,
      Welcome,
      InstagramPhotoModal,
      Search,
      Events,
      EventDetail,
    };

    Object.keys(screens).map(key => {
      Navigation.registerComponent(
        `bf.${key}`,
        () => screens[key],
        store,
        Provider
      );
    });
  }

  startAppWithScreen({ screen, passProps = {} }) {
    Navigation.startSingleScreenApp({
      screen: {
        screen, // unique ID registered with Navigation.registerScreen
        title: 'Home', // title of the screen as appears in the nav bar (optional)
        leftButtons: [
          {
            id: 'sideMenu',
          },
        ],
        navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
        navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
      },
      drawer: {
        left: {
          screen: 'bf.Menu',
        },
      },
    });
  }

  startAppWithTabs({ screen, passProps = {} }) {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'Home',
          screen: 'bf.Home', // this is a registered name for a screen
          // icon: require('../img/one.png'),
          // selectedIcon: require('../img/one_selected.png'), // iOS only
        },
        {
          label: 'Pilots',
          screen: 'bf.Pilots',
        },
        {
          label: 'Balloons',
          screen: 'bf.Balloons',
        },
      ],
    });
  }
}

export default Application;
