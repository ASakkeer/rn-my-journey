import React from 'react';
import {Image as RNImage, StyleSheet} from 'react-native';

const Image = ({
  source,
  resizeMode = 'cover',
  width,
  height,
  borderRadius,
  testID,
  style,
  onError = () => {},
  onLoad = () => {},
  onLoadEnd = () => {},
  onLoadStart = () => {},
  ...rest
}) => {
  const imageStyles = [
    styles.image,
    width && {width},
    height && {height},
    borderRadius && {borderRadius},
    testID && {testID},
    style,
  ];

  return (
    <RNImage
      source={source}
      resizeMode={resizeMode}
      style={imageStyles}
      onError={onError}
      onLoad={onLoad}
      onLoadEnd={onLoadEnd}
      onLoadStart={onLoadStart}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    // Default image styles here
  },
});

export default Image;
