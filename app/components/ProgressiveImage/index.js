/**
 * @flow
 */

import React, { Component, PropTypes, PureComponent } from 'react';
import { Animated, View, Image } from 'react-native';

class ProgressiveImage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      thumbnailOpacity: new Animated.Value(0),
    };
  }
  onLoad() {
    Animated.timing(this.state.thumbnailOpacity, {
      toValue: 0,
      duration: 250,
    }).start();
  }
  onThumbnailLoad() {
    Animated.timing(this.state.thumbnailOpacity, {
      toValue: 1,
      duration: 250,
    }).start();
  }
  render() {
    return (
      <View backgroundColor={'#ffffff'}>
        <Animated.Image
          resizeMode={'contain'}
          key={this.props.propKey + 'image'}
          style={[
            {
              position: 'absolute',
            },
            this.props.style,
          ]}
          source={this.props.source}
          onLoad={event => this.onLoad(event)}
        />
        <Animated.Image
          resizeMode={'contain'}
          key={this.props.propSecondKey + 'thumbnail'}
          style={[
            {
              opacity: this.state.thumbnailOpacity,
            },
            this.props.style,
          ]}
          source={this.props.thumbnail}
          onLoad={event => this.onThumbnailLoad(event)}
        />
      </View>
    );
  }
}

export default ProgressiveImage;
