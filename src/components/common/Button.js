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
  color = '#ffffff',
  testID,
  borderRadius,
  center = true,
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

  const buttonTextStyles = [
    styles.title,
    titleStyle,
    center && {textAlign: 'center'},
  ];

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
  button: {
    backgroundColor: '#702963',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  disabledButton: {
    opacity: 0.4,
  },
  title: {},
});

export default Button;
