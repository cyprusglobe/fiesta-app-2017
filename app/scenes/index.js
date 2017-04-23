/**
 * @flow
 */

import { Navigation } from 'react-native-navigation';

import { init, star } from '../modules/app';

import Menu from './Menu';
import Balloon from './Balloon';
import Balloons from './Balloons';
import Pilot from './Pilot';
import Pilots from './Pilots';
import Instagram from './Instagram';
import Home from './Home';
import Welcome from './Welcome';

import InstagramPhotoModal from '../components/InstagramPhotoModal';

class Application {
  constructor(store, Provider) {
    this._store = store;
    this._provider = Provider;

    this._configureScreens(store, Provider);
  }

  run() {
    this._store.dispatch(init(this.startAppWithScreen));
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

  startAppWithScreen({ screen }) {
    Navigation.startSingleScreenApp({
      screen: {
        screen: screen, // unique ID registered with Navigation.registerScreen
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
}

export default Application;
