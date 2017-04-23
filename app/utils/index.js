import { Platform, PixelRatio } from 'react-native';

export { default as syncEnhancer } from './syncEnhancer';
export { iconsMap, iconsLoaded } from './appIcons';
export { combineStyles } from './combineStyles';
export { loadIconImages } from './iconImages.js';

switchIconPerPlatform = (iconName, ios, md) => {
  const plat = Platform.OS !== 'android' ? 'md' : 'ios';
  const size = Platform.OS === 'android' ? 24 : 20;

  if (iconName !== '') return `${plat}-${iconName}`;

  if (ios) {
    return `${ios}`;
  } else {
    return `${md}`;
  }
  // const selection = ios || md;
  // if (ios !== "" && md !== "") {
  //   if ios {
  //     return [`${plat}-${ios}`, size];
  //   }
  //   return [`${plat}-${md}`, size];
  // }
};

getIconSizePixelRatio = size => {
  // if (__DEV__ === true && Platform.OS === 'android') {
  //   return PixelRatio.getPixelSizeForLayoutSize(size);
  // }
  return PixelRatio.getPixelSizeForLayoutSize(size);
};

// selectPlatform = (platform, true) => {
//   const p = Platform.OS;

//   return false
// };

selectPlatform = (platform, enabled) => {
  const p = Platform.OS;
  if (platform === p) {
    return enabled;
  }
  return !enabled;
};

export { switchIconPerPlatform, getIconSizePixelRatio, selectPlatform };
