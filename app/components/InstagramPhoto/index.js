import React, { PureComponent } from 'react';
import {
  TouchableWithoutFeedback,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { iconsMap, iconsLoaded } from '../../utils/appIcons';

const InstagramPhoto = ({ navigator, item }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigator.showModal({
          screen: 'bf.InstagramPhotoModal',
          animationType: 'slide-up',
          navigatorStyle: {
            navBarButtonColor: 'white',
            navBarTextColor: 'white',
          },
          backButtonHidden: false,
          navigatorButtons: {
            leftButtons: [
              {
                id: 'cancel',
              },
            ],
          },
          passProps: {
            imageUrl: item.item.imageUrl,
          },
        })}
    >
      <Image
        key={item.item.description}
        source={{ uri: item.item.imageUrl }}
        resizeMode="cover"
        style={styles.instagramImage}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  instagramImage: {
    width: 64,
    height: 64,
    marginLeft: 5,
    marginRight: 5,
  },
});

export default InstagramPhoto;
