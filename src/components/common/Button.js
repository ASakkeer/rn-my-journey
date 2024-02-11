import React from 'react';
import {TouchableOpacity as RNTouchableOpacity, StyleSheet} from 'react-native';
import {Text} from '.';

const Button = ({
  onPress,
  title,
  vPadding,
  hPadding,
  flex,
  flexDirection,
  height,
  width,
  disabled = false,
  activeOpacity = 0.8,
  backgroundColor,
  color,
  testID,
  borderRadius,
  style,
  titleStyle,
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
  ];

  const buttonTextStyles = [styles.title, titleStyle];

  return (
    <RNTouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={activeOpacity}
      testID={testID}
      style={buttonStyles}
      {...rest}>
      <Text style={buttonTextStyles} color={color}>
        {title}
      </Text>
    </RNTouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {},
  disabledButton: {},
  title: {},
});

export default Button;
