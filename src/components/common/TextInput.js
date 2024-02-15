import React from 'react';
import {TextInput as RNTextInput, StyleSheet} from 'react-native';
import {
  DARK,
  GREY_LIGHT,
  GREY_MEDIUM,
  GREY_X_LIGHT,
  PRIMARY,
} from '../../utils/colors';

const TextInput = ({
  borderWidth,
  borderRadius,
  borderColor = GREY_X_LIGHT,
  fontSize,
  vPadding,
  hPadding,
  autoCapitalize = 'none',
  autoCorrect = true,
  autoFocus = false,
  blurOnSubmit = true,
  editable = true,
  keyboardType = 'default',
  maxLength = 250,
  multiline = false,
  numberOfLines = 1,
  onChangeText = () => {},
  placeholder = '',
  placeholderTextColor = GREY_MEDIUM,
  color,
  style,
  value,
  testID,
  ...rest
}) => {
  const inputStyles = [
    styles.input,
    borderWidth && {borderWidth},
    borderRadius && {borderRadius},
    borderColor && {borderColor},
    fontSize && {fontSize},
    vPadding && {paddingVertical: vPadding},
    hPadding && {paddingHorizontal: hPadding},
    color && {color},
    style,
  ];

  return (
    <RNTextInput
      style={inputStyles}
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
      autoFocus={autoFocus}
      blurOnSubmit={blurOnSubmit}
      editable={editable}
      keyboardType={keyboardType}
      maxLength={maxLength}
      multiline={multiline}
      numberOfLines={numberOfLines}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      value={value}
      testID={testID}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    // Default input styles here
    borderWidth: 1,
    borderBottomColor: PRIMARY,
    paddingHorizontal: 20,
    color: DARK,
    borderRadius: 30,
  },
});

export default TextInput;
