import React, { PureComponent } from 'react'
import {
  TouchableWithoutFeedback,
  View,
  Image,
  StyleSheet,
} from 'react-native'

class InstagramPhoto extends PureComponent {

  render() {
    let { item } = this.props;

    return (
      <TouchableWithoutFeedback>
        <View style={styles.imageView}>

        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  instagramImage: {
    width: 64,
    height: 64,
  },
  imageView: {
    justifyContent: 'center',
    width: 125,
    height: 125,
    alignItems: 'center',
  }
})

export default InstagramPhoto
