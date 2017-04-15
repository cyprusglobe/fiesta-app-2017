import Icon from 'react-native-vector-icons/Ionicons';

const iconImages = {};
export default function loadIcons() {
  const iconSet = [
    Icon.getImageSource('md-close', 40, 'white'),
    Icon.getImageSource('md-funnel', 20, 'white'),
  ];

  Promise.all(iconSet).then(sources => {
    iconImages.close_modal = sources[0];
    iconImages.filter = sources[1];
    iconImages.like = sources[2];
  });
}

export { iconImages };
