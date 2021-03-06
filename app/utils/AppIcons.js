import { Platform, PixelRatio } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

getIconSizePixelRatio = size => {
  if (__DEV__ === true && Platform.OS === 'android') {
    return PixelRatio.getPixelSizeForLayoutSize(size);
  }
  return 40;
};

const navIconSize = __DEV__ === true && Platform.OS === 'android'
  ? PixelRatio.getPixelSizeForLayoutSize(96)
  : 40; // eslint-disable-line

// define your suffixes by yourself..
// here we use active, big, small, very-big..
const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const icons = {
  'ios-funnel': [getIconSizePixelRatio(96), '#bbb'],
  'md-funnel': [navIconSize, '#bbb'],
  'md-close': [50, '#bbb'],
};

const defaultIconProvider = Ionicons;

let iconsMap = {};
let iconsLoaded = new Promise((resolve, reject) => {
  new Promise.all(
    Object.keys(icons).map(iconName => {
      const Provider = icons[iconName][2] || defaultIconProvider; // Ionicons
      return Provider.getImageSource(
        iconName.replace(replaceSuffixPattern, ''),
        icons[iconName][0],
        icons[iconName][1]
      );
    })
  ).then(sources => {
    Object.keys(icons).forEach(
      (iconName, idx) => (iconsMap[iconName] = sources[idx])
    );

    // Call resolve (and we are done)
    resolve(true);
  });
});

export { iconsMap, iconsLoaded };
