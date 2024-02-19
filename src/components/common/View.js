import React from 'react';
import {View as RNView, StyleSheet} from 'react-native';

const View = ({
  children,
  vPadding,
  hPadding,
  flex,
  row,
  height,
  width,
  backgroundColor,
  jCenter,
  aCenter,
  mBottom,
  mRight,
  mLeft,
  mTop,
  borderWidth,
  borderColor,
  testID,
  style,
  ...rest
}) => {
  const containerStyles = [
    styles.container,
    vPadding && {paddingVertical: vPadding},
    hPadding && {paddingHorizontal: vPadding},
    flex && {flex},
    row && {flexDirection: 'row'},
    jCenter && {justifyContent: 'center'},
    aCenter && {alignItems: 'center'},
    height && {height},
    width && {width},
    testID && {testID},
    backgroundColor && {backgroundColor},
    mBottom && {marginBottom: mBottom},
    mRight && {marginRight: mRight},
    mLeft && {marginLeft: mLeft},
    mTop && {marginTop: mTop},
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
