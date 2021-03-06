import React from 'react';
import { Image, Text, View } from 'react-native';

import combineStyles from '../../utils/combineStyles';

import imageStartThere from '../../images/welcome_start.png';

const StartHelper = ({ containerStyle, imageStyle }) => {
  return (
    <View style={containerStyle}>
      <Image
        source={{
          uri: 'http://balloonfiesta.com/assets/images/fiestaballoon2.png',
        }}
        style={imageStyle}
        resizeMode="contain"
      />
    </View>
  );
};

export default StartHelper;
