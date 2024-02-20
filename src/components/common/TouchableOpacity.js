import React from 'react';
import {TouchableOpacity as RNTouchableOpacity, StyleSheet} from 'react-native';

const TouchableOpacity = ({
  onPress,
  activeOpacity = 0.8,
  disabled = false,
  style,
  vPadding,
  hPadding,
  flex,
  row,
  borderWidth,
  borderRadius,
  borderColor,
  height,
  width,
  backgroundColor,
  jCenter,
  aCenter,
  mRight,
  mBottom,
  children,
  ...rest
}) => {
  const touchableStyles = [
    styles.input,
    flex && {flex},
    row && {flexDirection: 'row'},
    borderWidth && {borderWidth},
    borderRadius && {borderRadius},
    backgroundColor && {backgroundColor},
    borderColor && {borderColor},
    vPadding && {paddingVertical: vPadding},
    hPadding && {paddingHorizontal: hPadding},
    jCenter && {justifyContent: 'center'},
    aCenter && {alignItems: 'center'},
    mRight && {marginRight: mRight},
    mBottom && {marginBottom: mBottom},
    style,
  ];

  return (
    <RNTouchableOpacity
      onPress={onPress}
      activeOpacity={activeOpacity}
      disabled={disabled}
      style={[styles.container, touchableStyles, style]}
      {...rest}>
      {children}
    </RNTouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // Default styles here
  },
});

export default TouchableOpacity;
