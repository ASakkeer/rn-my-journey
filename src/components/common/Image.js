import React from 'react';
import {Image as RNImage, StyleSheet} from 'react-native';

const Image = ({
  source,
  resizeMode = 'cover',
  width = 200,
  height = 200,
  borderRadius,
  borderWidth,
  mBottom,
  mRight,
  mLeft,
  mTop,
  opacity = 1,
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
    mBottom && {marginBottom: mBottom},
    mRight && {marginRight: mRight},
    mLeft && {marginLeft: mLeft},
    mTop && {marginTop: mTop},
    borderRadius && {borderRadius},
    borderWidth && {borderWidth},
    opacity && {opacity},
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
