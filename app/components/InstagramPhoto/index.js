import React, { PureComponent } from 'react';
import {
  TouchableWithoutFeedback,
  View,
  Image,
  StyleSheet,
} from 'react-native';

class InstagramPhoto extends PureComponent {
  render() {
    let { item } = this.props;
    return (
      <Image
        key={item.item.description}
        source={{ uri: item.item.imageUrl }}
        resizeMode="cover"
        style={styles.instagramImage}
      />
    );
  }
}

const styles = StyleSheet.create({
  instagramImage: {
    width: 64,
    height: 64,
    marginLeft: 5,
    marginRight: 5,
  },
});

export default InstagramPhoto;
