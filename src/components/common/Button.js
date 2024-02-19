import React from 'react';
import {TouchableOpacity as RNTouchableOpacity, StyleSheet} from 'react-native';
import {PRIMARY} from '../../utils/colors';

const Button = ({
  onPress,
  vPadding,
  hPadding,
  flex,
  flexDirection,
  height,
  width,
  disabled = false,
  activeOpacity = 0.8,
  backgroundColor,
  testID,
  borderRadius,
  borderWidth,
  borderColor,
  center = true,
  mBottom,
  mRight,
  mLeft,
  mTop,
  style,
  titleStyle,
  children,
  ...rest
}) => {
  const buttonStyles = [
    styles.button,
    style,
    vPadding && {paddingVertical: vPadding},
    hPadding && {paddingHorizontal: vPadding},
    backgroundColor && {backgroundColor},
    flex && {flex},
    flexDirection && {flexDirection},
    height && {height},
    width && {width},
    disabled && styles.disabledButton,
    borderRadius && {borderRadius},
    borderWidth && {borderWidth},
    borderColor && {borderColor},
    mBottom && {marginBottom: mBottom},
    mRight && {marginRight: mRight},
    mLeft && {marginLeft: mLeft},
    mTop && {marginTop: mTop},
  ];

  return (
    <RNTouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={activeOpacity}
      testID={testID}
      style={buttonStyles}
      {...rest}>
      {children}
    </RNTouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: PRIMARY,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 50,
  },
  disabledButton: {
    opacity: 0.4,
  },
  title: {},
});

export default Button;
