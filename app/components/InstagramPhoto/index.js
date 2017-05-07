import React, { PureComponent } from 'react';
import {
  TouchableWithoutFeedback,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

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
          backButtonHidden: true,
          navigatorButtons: {
            rightButtons: [
              {
                id: 'close-modal-instagram',
                title: 'Close',
                icon: Platform.OS === 'android'
                  ? require('../../../android/app/src/main/res/drawable-xhdpi/ic_close_modal.png')
                  : require('../../../images/nav_close_button_ios.png'),
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
