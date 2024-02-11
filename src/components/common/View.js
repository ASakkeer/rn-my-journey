import React from 'react';
import {View as RNView, StyleSheet} from 'react-native';

const View = ({
  children,
  vPadding,
  hPadding,
  flex,
  flexDirection,
  height,
  width,
  testID,
  style,
  ...rest
}) => {
  const containerStyles = [
    styles.container,
    vPadding && {paddingVertical: vPadding},
    hPadding && {paddingHorizontal: vPadding},
    flex && {flex},
    flexDirection && {flexDirection},
    height && {height},
    width && {width},
    testID && {testID},
    style,
  ];

  return (
    <RNView style={containerStyles} {...rest}>
      {children}
    </RNView>
  );
};

const styles = StyleSheet.create({
  container: {
    // Default container styles here
  },
});

export default View;
